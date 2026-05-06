import type { ReactNode } from "react";

type SeparatorProps = {
  paths: ReactNode;
}

export default function Separator({paths}: SeparatorProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 30"
    >
      {paths}
    </svg>
  )
}
