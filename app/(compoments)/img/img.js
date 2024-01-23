import React from "react";

import Image from "next/image";

export default function Img(props) {
  return (
    <>
      <div className="max-w-[200px] mt-5">
        <Image src={props.pr} alt="" />
      </div>
    </>
  );
}
