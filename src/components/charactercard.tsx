import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

export const Charactercard = ({ name, gender, id, image, species, status }) => {
  return (
    <Link href={`/characters/${id}`}>
      <Card className="grid grid-col gap-4 h-full w-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>
            <img
              src={image}
              alt={`${name} thumbnail`}
              className="w-full h-full object-cover rounded"
            />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1 className="font-semibold">{gender}</h1>
          <p>ID: {id}</p>
          <h3>{species}</h3>
          <h4 className="text-sm text-muted-foreground">{status}</h4>
        </CardContent>
      </Card>
    </Link>
  );
};
