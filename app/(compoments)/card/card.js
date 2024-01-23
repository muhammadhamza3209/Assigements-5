import React from "react";

import Image from "next/image";

export default function Card(props) {
  return (
    <>
      <div className="max-w-[400px]  text-center px-3 py-4 hover:shadow-2xl mb-8">
        <div>
          <Image className="mx-auto" src={props.sr} alt="" />
          <p className="mt-9 text-3xl">
            <b>Buy a home</b>
          </p>
          <p className="mt-5">With over 1 million+ homes</p>
          <p className="mt-5">
            for sale available on the website, Trulia can match
          </p>
          <p className="mt-5">you with a house.</p>
        </div>
      </div>
    </>
  );
}
