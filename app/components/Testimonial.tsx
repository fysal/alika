import React from "react";
import dummy from "@/app/assets/dummy.webp";
import Image from "next/image";
const Testimonial = () => {
  const quotes = [
    {
      author: "Jone doe",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      author: "Jone doe",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      author: "Jone doe",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      author: "Jone doe",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];
  return (
    <div className="py-14">
      <div className="font-bold text-5xl text-center mb-5">
        What they&apos;re saying
      </div>
      <div className="grid grid-cols-4 gap-5 text-center py-14">
        {quotes.map((quote, index: number) => (
          <div key={index}>
            <div className="avatar mb-3">
              <div className="w-24 rounded-full">
                <Image src={dummy.src} alt="dummy" width={70} height={30} />
              </div>
            </div>
            <div className="font-semibold">{quote.author}</div>
            <blockquote>
              <p className="text-sm italic">{quote.quote}</p>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
