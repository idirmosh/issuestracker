import Image from "next/image";
import Link from "next/link";
import React from "react";
//import LogoImage from "../../public/logo.png";

function Logo() {
  return (
    <div className="flex items-center flex-shrink-0">
      <Link href="/">
        <a>
          {/* <Image
            src={LogoImage}
            alt="Picture of the author"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          /> */}
        </a>
      </Link>
    </div>
  );
}

export default Logo;
