
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Award, BookOpen, Calendar, Users } from "lucide-react";

export const PointsSystemInfo: React.FC = () => {
  return (
    <Alert className="mb-6 border-2 border-black shadow-[4px_4px_0_#000] bg-gradient-to-r from-[#FFF5FA] to-[#FFFAFD] p-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-[#FFD166] w-10 h-10 rounded-full flex items-center justify-center border-2 border-black">
          <Award className="h-5 w-5 text-white" />
        </div>
        <AlertTitle className="text-2xl font-bold">Points System</AlertTitle>
      </div>
      <AlertDescription>
        <div className="mt-4 space-y-4">
          <p className="text-base">Earn points by attending events and engaging with the community:</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 p-3 rounded-lg bg-white border-2 border-black shadow-[2px_2px_0_#000]">
              <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center border border-black">
                <Calendar className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium">10-15 points for attending regular events</span>
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg bg-white border-2 border-black shadow-[2px_2px_0_#000]">
              <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center border border-black">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium">20-25 points for workshops and learning sessions</span>
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg bg-white border-2 border-black shadow-[2px_2px_0_#000]">
              <div className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center border border-black">
                <Users className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium">30+ points for participating in hackathons and competitions</span>
            </li>
          </ul>
          <p className="text-lg font-bold mt-4 bg-[#FF4D9F] text-white p-3 rounded-lg text-center border-2 border-black shadow-[2px_2px_0_#000]">
            Climb the leaderboard and unlock exclusive benefits!
          </p>
        </div>
      </AlertDescription>
    </Alert>
  );
};
