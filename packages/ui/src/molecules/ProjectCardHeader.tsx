// @ts-nocheck
import React from "react";

const getFavicon = (domain) => {
  const regEx = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/;
  domain = domain.match(regEx)[1];
  return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}/&size=64`;
};

function ProjectCardHeader({ name, url, description }) {
  return (
    <>
      <div className="flex items-start">
        <img className="w-12 h-12" src={getFavicon(url)} alt="" />
        <div className="flex flex-col ml-3">
          <h2 className="text-xl font-bold text-gray-700">{name}</h2>
          <p className="text-sm text-gray-400">{url}</p>
        </div>
      </div>
      <p className="text-sm mt-4 text-gray-500">{description}</p>
    </>
  );
}

export default ProjectCardHeader;
