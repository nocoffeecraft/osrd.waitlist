"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarGroup() {
  const users = [
    {
      name: "Sophie Martin",
      image: "/avatar/image1.png",
    },
    { name: "Leo Anderson", image: "/avatar/image2.png" },
    { name: "Chloe Thompson", image: "/avatar/image3.png" },
    { name: "Max Rodriguez", image: "/avatar/image4.png" },
    { name: "Emma Davis", image: "/avatar/image5.png" },
    { name: "Additional Users", count: 6 },
  ];

  return (
    <div className="flex items-center -space-x-2 *:ring *:ring-background justify-center">
      {users.slice(0, 5).map((user, index) => (
        <Avatar key={index}>
          <AvatarImage src={user.image} alt={user.name} />
          <AvatarFallback>
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      ))}
      {users.length > 4 && (
        <Avatar className="z-10 text-sm font-medium text-muted-foreground">
          <AvatarFallback>
            +{users.slice(4).reduce((acc, user) => acc + (user.count || 1), 0)}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
