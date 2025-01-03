import { useState } from "react";
import type { NextPage } from "next";
import getTimeFormatted from "../utils/getTimeFormatted";

interface Props {
  timestamp: string;
}

const FormattedTime: NextPage<Props> = ({ timestamp }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className="cursor-pointer">{getTimeFormatted(timestamp)}</span>
      {showTooltip && (
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10 bg-gray-200 text-black text-sm rounded-md px-2 py-1 shadow-lg whitespace-nowrap">
          {new Date(timestamp).toLocaleDateString()}
        </span>
      )}
    </span>
  );
};

export default FormattedTime;
