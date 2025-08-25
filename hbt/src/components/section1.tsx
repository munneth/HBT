import React from "react";
import Scene from "@/components/scene";
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
    <div className="h-[600px] w-full flex flex-row justify-center items-center overflow-hidden max-w-full">
      {/* Left side - Stacked cards */}
      <div className="w-1/3 p-4 space-y-4">
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

      {/* Right side - 3D Truck Model */}
      <div className="w-2/3 flex justify-center min-w-0">
        <Scene />
      </div>
    </div>
  );
}
