import React from "react";
import Scene from "./scene";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Section1() {
  return (
    <div className="h-screen w-full flex flex-row justify-center items-center overflow-hidden max-w-full">
      <div className="w-1/4 p-2">
        <Card>
          <CardHeader>
            <CardTitle>Call Center</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <div className="w-1/3 flex justify-center min-w-0">
        <Scene />
      </div>
      <div className="w-1/4 p-2">
        <Card>
          <CardHeader>
            <CardTitle>Call Center</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
