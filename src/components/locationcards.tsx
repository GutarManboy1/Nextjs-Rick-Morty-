import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

export const Locationcards = ({ name, id, image }) => {
  return (
    <Link href={`/locations/${id}`}>
      <Card className="flex flex-col gap-4 h-full w-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>
            {image ? (
              <img
                src={image}
                alt={`${name} thumbnail`}
                className="w-full h-48 object-cover rounded"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-semibold">Location ID: {id}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
