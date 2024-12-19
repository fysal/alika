import Image from "next/image";
import React from "react";
import evt from "@/app/assets/evn_dum.avif";
import Link from "next/link";
const EventHeroHome = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 py-14">
        <Image
          src={evt.src}
          width={540}
          height={540}
          alt="create event"
          className="col-span-2 rounded-lg"
        />
        <div className="col-span-2">
          <div className="text-purple-600 font-bold text-xl mb-4">
            The Craft of Creating Lasting Memories
          </div>
          <h3 className="text-4xl font-bold capitalize">
            You can do it your way
          </h3>
          <p className="py-2 mb-5">
            Alika has earned the trust of over 200,000 events, ranging from
            large-scale festivals, conferences, and expos to engaging
            attractions and customized gatherings for schools, clubs, and
            intimate boutique occasions.
          </p>
          <Link
            href="/event/create"
            className="btn text-slate-300 bg-slate-800 uppercase px-5 rounded-md "
          >
            Create event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventHeroHome;
