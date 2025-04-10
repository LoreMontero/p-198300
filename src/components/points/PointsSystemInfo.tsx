
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Award, BookOpen, Calendar, Users } from "lucide-react";

export const PointsSystemInfo: React.FC = () => {
  return (
    <Alert className="mb-6 border-2 border-black shadow-[2px_2px_0_#000]">
      <Award className="h-4 w-4" />
      <AlertTitle className="font-bold">Points System</AlertTitle>
      <AlertDescription>
        <div className="mt-2 space-y-2">
          <p className="text-sm">Earn points by attending events and engaging with the community:</p>
          <ul className="ml-6 list-disc text-sm">
            <li className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              <span>10-15 points for attending regular events</span>
            </li>
            <li className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-green-500" />
              <span>20-25 points for workshops and learning sessions</span>
            </li>
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4 text-purple-500" />
              <span>30+ points for participating in hackathons and competitions</span>
            </li>
          </ul>
          <p className="text-sm font-medium pt-1">Climb the leaderboard and unlock exclusive benefits!</p>
        </div>
      </AlertDescription>
    </Alert>
  );
};
