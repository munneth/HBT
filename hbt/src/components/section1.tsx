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
            <CardTitle className="text-center">Call Center</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent>
            <p>Phone Number: 530-111-1111</p>
          </CardContent>
          <CardFooter>
            <p>Fax: 530-111-1111</p>
          </CardFooter>
        </Card>
      </div>
      <div className="w-1/3 flex justify-center min-w-0">
        <Scene />
      </div>
      <div className="w-1/4 p-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Hours</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent>
            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
          </CardContent>
          <CardFooter>
            <p>Saturday: 8:00 AM - 12:00 PM</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
