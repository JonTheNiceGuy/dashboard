import { iconProperties, IconProps } from "@/assets/icons/IconProperties";

export default function NetworkRoutesIcon(props: IconProps) {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      xmlns="http://www.w3.org/2000/svg"
      {...iconProperties(props)}
    >
      <path d="M16 3.28039C16 1.69255 14.654 0.400391 13 0.400391C11.346 0.400391 10 1.69255 10 3.28039C10 4.53031 10.839 5.58631 12 5.98375V8.08039C12 8.60935 11.552 9.04039 11 9.04039H5C4.448 9.04039 4 8.60935 4 8.08039V5.98375C5.161 5.58631 6 4.53031 6 3.28039C6 1.69255 4.654 0.400391 3 0.400391C1.346 0.400391 0 1.69255 0 3.28039C0 4.53031 0.839 5.58631 2 5.98375V8.08039C2 9.66823 3.346 10.9604 5 10.9604H7V14.017C5.839 14.4145 5 15.4705 5 16.7204C5 18.3082 6.346 19.6004 8 19.6004C9.654 19.6004 11 18.3082 11 16.7204C11 15.4705 10.161 14.4145 9 14.017V10.9604H11C12.654 10.9604 14 9.66823 14 8.08039V5.98375C15.161 5.58631 16 4.53031 16 3.28039Z" />
    </svg>
  );
}