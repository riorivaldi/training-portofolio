"use client"
import Image from "next/image";
import React from "react";
import cards from '../components/cards'

function Cards({
  img,
  desc,
  children,
}: {
  img: any;
  desc: any;
  children: any;
}) {
  return (
    <div className="rounded-lg w-96 h-56 flex flex-col items-center transform hover:scale-105 transition-transform duration-400 hover:bg-red-700">
      <p>Portofolio</p>
      <Image alt="" src={img} width={100} height={100} />
      <p>Desc: {desc}</p>
      {children}
      
    </div>
  );
}

export default Cards;
