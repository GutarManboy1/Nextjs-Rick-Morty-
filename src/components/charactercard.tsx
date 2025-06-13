import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Charactercard = ({ name, gender, id, image, species, status }) => {
  return (
    <Card className="grid grid-col gap-2 h-full w-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          {/* Optional link to character page here too */}
          <Link
            href={`/characters/${id}`}
            className="text-sm text-blue-600 underline"
          >
            View Profile
          </Link>
        </div>
        <CardDescription>
          <img
            src={image}
            alt={`${name} thumbnail`}
            className="w-full h-full object-cover rounded"
          />
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 text-sm">
        <h1 className="font-semibold">{gender}</h1>
        <h3>{species}</h3>
        <p>Character ID: {id}</p>

        <h4 className="text-sm text-muted-foreground">{status}</h4>

        <div className="flex flex-wrap justify-between gap-2">
          <Button asChild>
            <Link href={`/characters/${id}/episodes`}>View Episodes</Link>
          </Button>

          <Button asChild>
            <Link href={`/characters/${id}/locations`}>View Locations</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
