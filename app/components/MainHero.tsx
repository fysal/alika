import Image from "next/image";
import React from "react";
import slide from "../assets/slide.jpg";
import Link from "next/link";
const MainHero = () => {
  return (
    <div>
      <div className="hero py-14">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            width={600}
            height={600}
            alt="hero"
            unoptimized
            src={slide.src}
            className=" flex-1 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold mb-5">Diwali Event 2024!</h1>
            <p className="py-6 me-5 mb-10">
              This Diwali, immerse yourself in the vibrant colors, rich
              traditions,
              <br /> and joyous spirit of one of the most beloved festivals of
              the year.
              <br /> Whether you&apos;`re looking to enjoy an evening with
              family, friends, or
              <br /> a special someone, our Diwali Festival promises to be a
              spectacular experien
            </p>
            <Link
              href="/event/diwali/view"
              className="btn  text-slate-300 bg-slate-800 uppercase px-5"
            >
              Buy a ticket
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
