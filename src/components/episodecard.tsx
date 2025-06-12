import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

export const Episodecard = ({ name, id, characters, air_date, episode }) => {
  return (
    <Card className="flex flex-col gap-4 h-full w-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          <p>Air Date: {air_date}</p>
          <p>Episode: {episode}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-semibold mb-2">Episode ID: {id}</p>
        <div className="flex flex-wrap gap-2">
          {characters.slice(0, 5).map((character) => (
            <Link
              key={character.id}
              href={`/characters?highlight=${character.id}`}
            >
              <div className="w-10 h-10">
                <img
                  src={character.image || "/fallback.jpg"}
                  alt={character.name}
                  className="w-full h-full rounded-full object-cover border border-gray-300"
                />
              </div>
            </Link>
          ))}
          {characters.length > 5 && (
            <span className="text-sm text-muted-foreground">
              +{characters.length - 5} more
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
