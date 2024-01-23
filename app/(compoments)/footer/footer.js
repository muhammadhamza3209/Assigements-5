import React from "react";

export default function Footer(props) {
  return (
    <>
      <div className="max-w-[450px] text-center">
        <p className="text-3xl mb-2">
          <b>{props.para}</b>
        </p>

        <p>Apartement for search</p>
        <p>Aprote for lounch</p>
        <p>Offers for bouy</p>
        <p>Ofers for rent</p>
      </div>
    </>
  );
}
