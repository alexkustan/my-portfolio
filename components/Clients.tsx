import React from "react";
import { InfiniteMovingCards } from "./ui/Testimonials";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        {" "}
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          speed="slow"
          direction="right"
        />
      </div>
    </div>
  );
};

export default Clients;
