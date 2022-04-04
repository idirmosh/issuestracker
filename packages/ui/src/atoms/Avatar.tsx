import Image from "next/image";
import React, { ReactElement } from "react";

function Avatar({ src }: { src: string }): ReactElement {
  return (
    <div className="block w-10 h-10">
      <Image
        alt="avatar"
        layout="responsive"
        className="w-full rounded-full cursor-pointer"
        src={src}
        width={40}
        height={40}
      />
    </div>
  );
}

export default Avatar;
