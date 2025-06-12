import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

type LocationCardProps = {
  name: string;
  id: number;
  dimension: string;
  residents: string[];
};

export const Locationcards = ({
  name,
  id,
  dimension,
  residents,
}: LocationCardProps) => {
  return (
    <Link href={`/locations/${id}`}>
      <Card className="flex flex-col gap-4 h-full w-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription className="text-sm text-gray-600">
            Dimension: {dimension || "Unknown"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-semibold">Location ID: {id}</p>
          <p className="text-gray-500">Residents: {residents.length}</p>
          <div className="flex flex-wrap gap-2">
            {residents.slice(0, 5).map((resident) => (
              <Link
                key={resident.id}
                href={`/characters?highlight=${resident.id}`}
              >
                <img
                  src={resident.image}
                  alt={resident.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                  title={resident.name}
                />
              </Link>
            ))}
            {residents.length > 5 && (
              <span className="text-sm text-muted-foreground">
                +{residents.length - 5} more
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
