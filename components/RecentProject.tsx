import { projects } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

const RecentProject = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-col mt-16 gap-14">
        {projects.map(({ id, title, des, img, link }) => (
          <a href={link} key={id}>
            <div
              className="bg-[#10132E] rounded-3xl relative after:content-['']
            z-0 after:z-10 overflow-hidden after:absolute after:inset-0
            after:outline-2 after:outline after:-outline-offset-2
            after:rounded-3xl after:outline-white/20 px-8 pt-8 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-bold text-3xl md:text-5xl mt-2">
                    {title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <p className="mt-4 md:text-xl">{des}</p>
                  <div className="mt-6">
                    <MagicButton
                      title="View Live Site"
                      icon={<FaLocationArrow />}
                      position="right"
                    />
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={img}
                    alt={title}
                    width={750}
                    height={750}
                    className="mt-8 -mb-4  md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
