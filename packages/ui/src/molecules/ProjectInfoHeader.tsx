//@ts-nocheck
import { ProjectContext } from "ui/context";
import Image from "next/image";
import React, { useContext } from "react";
import { HiLink, HiMail } from "react-icons/hi";

function ProjectInfoHeader() {
  const value = useContext(ProjectContext);

  return (
    <div className="mb-8 flex items-start">
      <div className="block h-20 w-20 overflow-hidden rounded-md">
        <Image
          src="https://pbs.twimg.com/profile_images/1252531684353998848/6R0-p1Vf_400x400.jpg"
          alt="project logo"
          width={80}
          height={80}
          layout="responsive"
        />
      </div>
      <div className="ml-5">
        <h1 className="text-2xl font-bold text-gray-700">{value.name}</h1>
        <p className="mt-1 text-base text-gray-600">{value.description}</p>
        <div className="mt-1 flex items-center">
          <span className="mr-4 flex items-center text-xs text-gray-500">
            <HiLink className="mr-1" /> {value.url}
          </span>
          <span className="flex items-center text-xs text-gray-500">
            <HiMail className="mr-1" />
            {value.email}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfoHeader;
