
import React from "react";
import { Trophy } from "lucide-react";

interface UserPointsDisplayProps {
  points: number;
}

export const UserPointsDisplay: React.FC<UserPointsDisplayProps> = ({ points }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-[10px] border-2 border-black shadow-[2px_2px_0_#000]">
      <Trophy className="h-5 w-5 text-[#FF4D9F]" />
      <div>
        <div className="text-xs text-gray-500">Your Points</div>
        <div className="font-bold text-lg">{points.toLocaleString()}</div>
      </div>
    </div>
  );
};
