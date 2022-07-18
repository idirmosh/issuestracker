// @ts-nocheck
import React from "react";

const getFavicon = (domain) => {
  const regEx = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/;
  domain = domain.match(regEx)[1];
  return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}/&size=64`;
};

function ProjectCardHeader({ name, url, description, image }) {
  return (
    <>
      <div className="flex items-start">
        <img className="h-12 w-12" src={image} alt="" />
        <div className="ml-3 flex flex-col">
          <h2 className="text-xl font-bold text-gray-700">{name}</h2>
          <p className="text-sm text-gray-400">{url}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">{description}</p>
    </>
  );
}

export default ProjectCardHeader;
