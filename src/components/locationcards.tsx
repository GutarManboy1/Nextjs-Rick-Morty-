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

export const Locationcards = ({ name, id, dimension, residents }: LocationCardProps) => {
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
        </CardContent>
      </Card>
    </Link>
  );
};
