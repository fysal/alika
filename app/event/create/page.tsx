"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface TicketTier {
  tier: string;
  price: string;
}

interface FormData {
  eventName: string;
  eventDescription: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  bannerImage: string | null;
  portraitImage: string | null;
  ticketTiers: TicketTier[];
}

const CreateEventForm: React.FC = () => {
  // Form state
  const [eventName, setEventName] = useState<string>("");
  const [eventDescription, setEventDescription] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [eventTime, setEventTime] = useState<string>("");
  const [eventLocation, setEventLocation] = useState<string>("");

  // Image previews
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [portraitImage, setPortraitImage] = useState<string | null>(null);

  const stepperTitles = [
    "Event information",
    "Banners and arts",
    "Ticket tiers",
  ];
  // Ticket tiers
  const [ticketTiers, setTicketTiers] = useState<TicketTier[]>([
    { tier: "", price: "" },
  ]);

  // Current step
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Handle image uploads and preview
  const handleImageUpload = (
    e: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setter(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Handle ticket tier changes
  const handleTicketTierChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedTiers = [...ticketTiers];
    updatedTiers[index][name as keyof TicketTier] = value;
    setTicketTiers(updatedTiers);
  };

  // Add new ticket tier
  const addTicketTier = () => {
    setTicketTiers([...ticketTiers, { tier: "", price: "" }]);
  };

  // Remove a ticket tier
  const removeTicketTier = (index: number) => {
    const updatedTiers = ticketTiers.filter((_, i) => i !== index);
    setTicketTiers(updatedTiers);
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData: FormData = {
      eventName,
      eventDescription,
      eventDate,
      eventTime,
      eventLocation,
      bannerImage,
      portraitImage,
      ticketTiers,
    };
    console.log(formData);
    // Here you can send formData to an API
  };

  // Step navigation functions
  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <h2 className="text-3xl font-bold mb-8">Create Event</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Event Details */}
        <div className="grid grid-cols-3 text-center gap-2 border-b capitalize">
          {stepperTitles.map((title: string, index: number) => (
            <h2
              key={index}
              className={`${
                index + 1 === currentStep
                  ? "font-bold border-b-purple-500"
                  : "text-slate-400"
              } py-4 border-b border-b-5 border-b-transparent bg-slate-100`}
            >
              {title}
            </h2>
          ))}
        </div>

        {currentStep === 1 && (
          <>
            <div className="form-control">
              <label htmlFor="eventName" className="label">
                <span className="label-text">Event Name</span>
              </label>
              <input
                type="text"
                id="eventName"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="input input-bordered bg-slate-100 w-full"
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="eventDescription" className="label">
                <span className="label-text">Event Description</span>
              </label>
              <textarea
                id="eventDescription"
                value={eventDescription}
                rows={5}
                onChange={(e) => setEventDescription(e.target.value)}
                className="textarea textarea-bordered bg-slate-100 w-full"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="form-control">
                <label htmlFor="eventDate" className="label">
                  <span className="label-text">Event Date</span>
                </label>
                <input
                  type="date"
                  id="eventDate"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="input input-bordered bg-slate-100 w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label htmlFor="eventTime" className="label">
                  <span className="label-text">Event Time</span>
                </label>
                <input
                  type="time"
                  id="eventTime"
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                  className="input input-bordered bg-slate-100 w-full"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="eventLocation" className="label">
                <span className="label-text">Event Location</span>
              </label>
              <input
                type="text"
                id="eventLocation"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                className="input input-bordered bg-slate-100 w-full"
                required
              />
            </div>
          </>
        )}

        {/* Step 2: Image Uploads */}
        {currentStep === 2 && (
          <>
            <div className="form-control border border-dashed border-2 rounded-xl p-6">
              <div className="label">
                <span className="label-text">Event Banner (Landscape)</span>
              </div>
              <input
                type="file"
                id="bannerImage"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, setBannerImage)}
                className="input input-bordered bg-slate-100 hidden"
              />
              {bannerImage ? (
                <div className="grid grid-cols-4 gap-3 items-center">
                  <Image
                    src={bannerImage}
                    alt="Banner Preview"
                    className="mt-4 max-w-full h-auto rounded-lg shadow-md col-span-3"
                    width={800}
                    height={500}
                  />
                  <div>
                    <div className="text-lg font-bold mb-5 text-slate-500">
                      Banner Image
                    </div>
                    <label htmlFor="bannerImage">
                      <span className="bg-purple-600 rounded-md p-3 text-sm">
                        Replace
                      </span>
                    </label>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6">
                  <h2 className="text-xl text-center font-bold mb-3">
                    Upload Banner here
                  </h2>
                  <div className="mb-5">
                    For bast result upload should be at least <br /> 1920 x 1080
                    pixels
                    <br />
                    (Landscape)
                  </div>
                  <label
                    htmlFor="bannerImage"
                    className="text-center cursor-pointer"
                  >
                    <span className="label-text bg-purple-500 p-3 rounded-md text-slate-900">
                      Banner Image
                    </span>
                  </label>
                </div>
              )}
            </div>

            <div className="form-control border border-dashed border-2 rounded-xl p-6">
              <div className="label">
                <span className="label-text">Event Artwork (Portrait)</span>
              </div>
              <input
                type="file"
                id="portraitImage"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, setPortraitImage)}
                className="input input-bordered bg-slate-100 hidden"
              />
              {portraitImage ? (
                <div className="grid grid-cols-4 gap-3 items-center">
                  <Image
                    src={portraitImage}
                    alt="Portrait Preview"
                    className="mt-4 max-w-full h-auto rounded-lg shadow-md col-span-3"
                    width={800}
                    height={500}
                  />
                  <div>
                    <div className="text-lg font-bold mb-5 text-slate-500">
                      Event Art
                    </div>
                    <label htmlFor="portraitImage">
                      <span className="bg-purple-600 rounded-md p-3 text-sm">
                        Replace
                      </span>
                    </label>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6">
                  <h2 className="text-xl text-center font-bold mb-3">
                    Upload Artwork here
                  </h2>
                  <div className="mb-5">
                    For bast result upload should be at least <br /> 800 x 1080
                    pixels
                    <br />
                    (Portrait)
                  </div>
                  <label
                    htmlFor="portraitImage"
                    className="text-center cursor-pointer"
                  >
                    <span className="label-text bg-purple-500 p-3 rounded-md text-slate-900">
                      Select File to Upload
                    </span>
                  </label>
                </div>
              )}
            </div>
          </>
        )}

        {/* Step 3: Ticket Tiers */}
        {currentStep === 3 && (
          <>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Ticket Tiers</h3>
              {ticketTiers.map((tier, index) => (
                <div
                  key={index}
                  className="space-y-4 p-4 border border-gray-300 rounded-lg"
                >
                  <div className="form-control">
                    <label htmlFor={`tier-${index}`} className="label">
                      <span className="label-text">Tier Name</span>
                    </label>
                    <input
                      type="text"
                      name="tier"
                      id={`tier-${index}`}
                      value={tier.tier}
                      onChange={(e) => handleTicketTierChange(index, e)}
                      className="input input-bordered bg-slate-100 w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor={`price-${index}`} className="label">
                      <span className="label-text">Tier Price</span>
                    </label>
                    <input
                      type="number"
                      name="price"
                      id={`price-${index}`}
                      value={tier.price}
                      onChange={(e) => handleTicketTierChange(index, e)}
                      className="input input-bordered bg-slate-100 w-full"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeTicketTier(index)}
                    className="btn btn-error end mt-2"
                  >
                    Remove Tier
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addTicketTier}
                className="btn btn-primary w-full mt-4"
              >
                Add Ticket Tier
              </button>
            </div>
          </>
        )}

        {/* Step navigation buttons */}
        <div className="flex justify-between mt-6">
          {currentStep !== 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="btn btn-secondary w-32"
            >
              Previous
            </button>
          )}

          {currentStep === 3 ? (
            <button type="submit" className="btn btn-success w-32">
              Create Event
            </button>
          ) : (
            <button
              type="button"
              onClick={nextStep}
              className="btn btn-primary w-32"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;
