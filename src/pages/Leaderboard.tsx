
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { User } from "@/types/event";
import { Trophy, Medal, Award } from "lucide-react";

const mockUsers: User[] = [
  { id: "1", name: "Jane Smith", points: 1200, avatar: "https://placehold.co/40x40/47ACDF/FFFFFF?text=JS", rank: 1 },
  { id: "2", name: "John Doe", points: 980, avatar: "https://placehold.co/40x40/47ACDF/FFFFFF?text=JD", rank: 2 },
  { id: "3", name: "Alex Johnson", points: 870, avatar: "https://placehold.co/40x40/47ACDF/FFFFFF?text=AJ", rank: 3 },
  { id: "4", name: "Maria Garcia", points: 750, avatar: "https://placehold.co/40x40/47ACDF/FFFFFF?text=MG", rank: 4 },
  { id: "5", name: "Robert Chen", points: 680, avatar: "https://placehold.co/40x40/47ACDF/FFFFFF?text=RC", rank: 5 },
  { id: "6", name: "Sarah Williams", points: 620, avatar: "https://placehold.co/40x40/47ACDF/FFFFFF?text=SW", rank: 6 },
  { id: "7", name: "Michael Brown", points: 590, avatar: "https://placehold.co/40x40/47ACDF/FFFFFF?text=MB", rank: 7 },
  { id: "8", name: "Emily Davis", points: 540, avatar: "https://placehold.co/40x40/47ACDF/FFFFFF?text=ED", rank: 8 },
  { id: "9", name: "David Wilson", points: 510, avatar: "https://placehold.co/40x40/47ACDF/FFFFFF?text=DW", rank: 9 },
  { id: "10", name: "Linda Martinez", points: 480, avatar: "https://placehold.co/40x40/47ACDF/FFFFFF?text=LM", rank: 10 },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-5 w-5 text-yellow-500" />;
    case 2:
      return <Medal className="h-5 w-5 text-gray-400" />;
    case 3:
      return <Award className="h-5 w-5 text-amber-700" />;
    default:
      return <span className="text-sm font-medium">{rank}</span>;
  }
};

const Leaderboard = () => {
  return (
    <Layout>
      <div className="px-1 py-6">
        <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
        <div className="bg-white border-2 border-black rounded-[10px] shadow-[2px_2px_0_#000] overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-b-2 border-b-black">
                <TableHead className="w-16 text-center">Rank</TableHead>
                <TableHead>User</TableHead>
                <TableHead className="text-right">Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow 
                  key={user.id} 
                  className="border-b border-gray-200 hover:bg-[#F5F8FF]"
                >
                  <TableCell className="text-center">
                    <div className="flex justify-center">
                      {getRankIcon(user.rank || 0)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-bold">
                    {user.points.toLocaleString()} pts
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;
