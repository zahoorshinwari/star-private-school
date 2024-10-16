import React from 'react';
import image1 from '../../../assets/events/1.jpg';
import image2 from '../../../assets/events/2.jpg';
import image3 from '../../../assets/events/3.jpg';
import image4 from '../../../assets/events/4.jpg';
import image5 from '../../../assets/events/5.jpg';
import image6 from '../../../assets/events/6.jpg';

// Sample event data
const eventsData = [
  {
    id: 1,
    title: 'Science Fair',
    image: image1,
  },
  {
    id: 2,
    title: 'Art Exhibition',
    image: image2,
  },
  {
    id: 3,
    title: 'Sports Day',
    image: image3,
  },
  {
    id: 4,
    title: 'Cultural Festival',
    image: image4,
  },
  {
    id: 5,
    title: 'Graduation Ceremony',
    image: image5,
  },
  {
    id: 6,
    title: 'Open House',
    image: image6,
  },
];

const Events = () => {
  return (
    <div className="p-8 text-center">
      {/* Introduction about upcoming events */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
        <p className="text-lg text-gray-700 mb-4">
          Our campus is buzzing with exciting events throughout the year! From showcasing student talents to celebrating achievements, 
          we have a variety of activities planned. Here are some of the events you can look forward to attending.
        </p>
        <p className="text-lg text-gray-700">
          Stay tuned and make sure to mark your calendars so you don’t miss out on these special moments!
        </p>
      </div>

      {/* Events grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {eventsData.map((event) => (
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" key={event.id}>
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded-t-lg opacity-80 hover:opacity-100 transition-opacity duration-300" // Add opacity classes
            />
            <h2 className="text-xl font-semibold mt-4">{event.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
