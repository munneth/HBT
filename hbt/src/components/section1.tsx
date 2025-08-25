import React from "react";
import Scene from "@/components/scene";
import { motion } from "framer-motion";
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
  const leftSlideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const rightSlideVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="h-[600px] w-full flex flex-row justify-center items-center overflow-hidden max-w-full">
      {/* Left side - Stacked cards */}
      <motion.div
        className="w-1/3 p-4 space-y-4"
        variants={leftSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
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
      </motion.div>

      {/* Right side - 3D Truck Model */}
      <motion.div
        className="w-2/3 flex justify-center min-w-0"
        variants={rightSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Scene />
      </motion.div>
    </div>
  );
}
