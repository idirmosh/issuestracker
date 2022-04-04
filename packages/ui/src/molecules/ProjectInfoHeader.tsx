//@ts-nocheck
import { ProjectContext } from "ui/context";
import Image from "next/image";
import React, { useContext } from "react";
import { HiLink, HiMail } from "react-icons/hi";

function ProjectInfoHeader() {
  const value = useContext(ProjectContext);

  return (
    <div className="flex items-start mb-8">
      <div className="block w-20 h-20 overflow-hidden rounded-md">
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
        <div className="flex items-center mt-1">
          <span className="flex items-center mr-4 text-xs text-gray-500">
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
