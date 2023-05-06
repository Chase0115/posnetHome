import React from "react";

const FooterBox = ({ heading, items }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold ">{heading}</h1>
      <ul className="mt-10 text-white/40 text-lg">
        {items.map((item, i) => <li key={i} className='mb-5'>{item}</li>)}
      </ul>
    </div>
  );
};

export default FooterBox;
