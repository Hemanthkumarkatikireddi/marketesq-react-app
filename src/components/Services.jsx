/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Services = (props) => {
  const data = props.servicesData || [];

  return (
    <section id="services">
      <div className="mt-[150px] mb-[100px]">
        <h2 className="text-center font-semibold text-4xl">Services</h2>
        <ul className="grid sm:grid-cols-1 md:grid-cols-3 ml-9 mr-9  m-5">
          {data.map((service) => (
            <li
              key={service.key}
              className="p-5 rounded-md border-2 m-3  flex-col place-items-center shadow-lg"
            >
              <div className="size-[50px] text-gray-500">{service.icon}</div>
              <h3 className="font-bold text-base">{service.title}</h3>
              <p className="font-semibold text-base text-gray-500">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
