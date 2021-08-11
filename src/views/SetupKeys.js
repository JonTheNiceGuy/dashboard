import React, {useEffect, useState} from "react";
import {useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";
import {getConfig} from "../config";
import Loading from "../components/Loading";
import Highlight from "../components/Highlight";

export const PeersComponent = () => {
  const {apiOrigin, audience} = getConfig();

  const [peers, setPeers] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const {
    getAccessTokenSilently,
    loginWithPopup,
    getAccessTokenWithPopup,
  } = useAuth0();

  const handleError = error => {
    console.error('Error to fetch data:', error);
    setLoading(false)
    setError(error);
  };

  const handleConsent = async () => {
    try {
      await getAccessTokenWithPopup();
      setError(null)
    } catch (error) {
      handleError(error)
    }

    await callApi();
  };

  const handleLoginAgain = async () => {
    try {
      await loginWithPopup();
      setError(null)
    } catch (error) {
      handleError(error)
    }

    await callApi();
  };

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(`${apiOrigin}/api/setup-keys`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();

      setPeers(responseData)
      setLoading(false)
    } catch (error) {
      handleError(error)
    }
  };

  const handle = (e, fn) => {
    e.preventDefault();
    fn();
  };

  useEffect(() => {
    callApi()
  }, [])

  return (
      <>
        {loading && (
            <Loading/>
        )}
        {error != null && (
            <div className="result-block-container">
              <span>{error.toString()}</span>
            </div>
        )}
        <div className="result-block-container">
          {peers && (
              <div className="result-block" data-testid="api-result">
                <h6 className="muted">Result</h6>
                <Highlight>
                  <span>{JSON.stringify(peers, null, 2)}</span>
                </Highlight>
              </div>
          )}
        </div>
      </>
  );
}
;

export default withAuthenticationRequired(PeersComponent,
{
  onRedirecting: () => <Loading/>,
}
);
