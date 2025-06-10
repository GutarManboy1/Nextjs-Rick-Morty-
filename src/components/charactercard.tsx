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
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{image}</CardDescription>
        </CardHeader>
        <CardContent>
          {
            <>
              <h1>{gender}</h1>
              <p>{id}</p>
              <h2>{image}</h2>
              <h3>{species}</h3>
              <h4>{status}</h4>
            </>
          }
        </CardContent>
      </Card>
    </Link>
  );
};
