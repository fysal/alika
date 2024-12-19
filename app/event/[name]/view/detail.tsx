"use client";
import React from "react";
import slide from "@/app/assets/slide.jpg";
// import Image from "next/image";

import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

interface TicketTier {
  name: string;
  price: number;
  available: number;
}

interface EventData {
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  portraitUrl: string;
  ticketTiers: TicketTier[];
  countdownDate: string;
}

const EventPage = () => {
  const event: EventData = {
    name: "Diwali event 2025",
    description:
      "Join us for an unforgettable experience at Mawingu Saltys! A night of music, art, and celebration.",
    date: "2025-05-15",
    time: "7:00 PM",
    location: "Saltys Club, Nairobi",
    imageUrl: "https://via.placeholder.com/800x400",
    portraitUrl: "https://via.placeholder.com/300x450",
    ticketTiers: [
      { name: "General Admission", price: 20, available: 100 },
      { name: "VIP", price: 50, available: 50 },
      { name: "Early Bird", price: 15, available: 200 },
    ],
    countdownDate: "2024-05-15T19:00:00",
  };
  const [timeRemaining, setTimeRemaining] = useState<string>("");
  // const router = useRouter();
  // const { eventId } = router.query;

  // Fetch event data (static for now, you could fetch it from an API)
  useEffect(() => {
    // if (!eventId) return;

    // Simulate event data for now
    // const fetchedEvent: EventData = {
    //   name: "Diwali Event 2025",
    //   description:
    //     "Join us for an unforgettable experience at Mawingu Saltys! A night of music, art, and celebration.",
    //   date: "2025-05-15",
    //   time: "7:00 PM",
    //   location: "Saltys Club, Nairobi",
    //   imageUrl: "https://via.placeholder.com/800x400",
    //   portraitUrl: "https://via.placeholder.com/300x450",
    //   ticketTiers: [
    //     { name: "General Admission", price: 20, available: 100 },
    //     { name: "VIP", price: 50, available: 50 },
    //     { name: "Early Bird", price: 15, available: 200 },
    //   ],
    //   countdownDate: "2025-05-15T19:00:00",
    // };

    // setEvent(fetchedEvent);

    // Countdown timer logic
    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const eventDate = new Date(event.countdownDate).getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(countdownTimer);
        setTimeRemaining("Event started!");
      } else {
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setTimeRemaining(`${hours}h ${minutes}m remaining`);
      }
    }, 60000); // Update every minute

    return () => clearInterval(countdownTimer);
  }, []);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Event Hero Section */}
      <div className="relative mb-8">
        <img
          src={slide.src}
          alt={"event.name"}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-4xl font-bold">
          {event.name}
        </div>
      </div>

      {/* Event Details Section */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-x-12 md:space-y-0">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Event Description</h3>
          <p>{event.description}</p>
        </div>
        <div className="md:w-1/2">
          <div className="mb-4">
            <strong>Date:</strong> {event.date}
          </div>
          <div className="mb-4">
            <strong>Time:</strong> {event.time}
          </div>
          <div className="mb-4">
            <strong>Location:</strong> {event.location}
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="bg-gray-100 p-4 rounded-lg text-center mb-8">
        <h4 className="text-lg font-semibold">Event Countdown</h4>
        <div className="text-xl text-green-500">{timeRemaining}</div>
      </div>

      {/* Ticket Tier Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Available Tickets</h3>
        <div className="space-y-4">
          {event.ticketTiers.map((tier, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center"
            >
              <div className="text-lg font-medium">{tier.name}</div>
              <div className="text-xl font-bold">${tier.price}</div>
              <div className="text-sm text-gray-500">
                {tier.available} tickets available
              </div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Event Image Gallery */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Event Gallery</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <img
            src={slide.src}
            alt="Event Artwork"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src={slide.src}
            alt="Event Image 2"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src={slide.src}
            alt="Event Image 3"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src={slide.src}
            alt="Event Image 4"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Sticky "Buy Tickets" Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="btn btn-lg btn-primary">Buy Tickets</button>
      </div>
    </div>
  );
};

export default EventPage;
