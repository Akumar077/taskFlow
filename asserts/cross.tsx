import * as React from "react";
const CrossButton = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#ffffff"
      d="m36.021 8.444 3.536 3.536L11.98 39.557 8.443 36.02z"
    />
    <path
      fill="#ffffff"
      d="m39.555 36.023-3.536 3.535L8.445 11.976l3.536-3.535z"
    />
  </svg>
);
export default CrossButton;
