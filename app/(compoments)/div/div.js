import React from "react";

import Image from "next/image";

import ter from "../../../public/Vector.png";

import { GiSelfLove } from "react-icons/gi";

export default function Div(props) {
  return (
    <>
      <div className="max-w-[500px] hover:shadow-2xl mt-10  py-5 px-3">
        <div className="flex gap-8">
          <div>
            <Image src={props.hr} alt="l" />
          </div>

          <div>
            <div className="flex gap-28">
              <p className="text-blue-700 text-2xl">
                <b>$259,000</b>
              </p>
              <GiSelfLove className="text-blue-700 text-2xl" />
            </div>

            <div className="mt-5">
              <p>
                <b className="mt-7 text-xl">Case Alda</b>
              </p>

              <p className="mt-2">Co Rd Tribune Tribune</p>
              <div className="flex gap-2 mt-5">
                <button className="flex gap-2">
                  <Image className="mt-2" src={ter} alt="" />

                  <p>2 Beds</p>
                </button>
                <button className="flex gap-2">
                  <Image className="mt-2" src={ter} alt="" />

                  <p>2 Beds</p>
                </button>
              </div>
              <button className="border-2 border-blue-400 text-black mt-4 py-2 px-4 rounded-xl ">
                View Defit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
