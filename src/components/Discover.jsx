/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Discover = (props) => {
  const data = props.discoverData;

  return (
    <section id="discover">
      <div className="mt-[150px] mb-[100px] ">
        <h2 className="text-center font-semibold text-4xl">Discover</h2>
        <ul className="grid sm:grid-col-1 md:grid-cols-3 ml-9 mr-9  m-5 ">
          {data.map((coments) => (
            <li
              key={coments.key}
              className="rounded-md border-2 m-2 h-fit col-span-1 flex-col items-center shadow-lg"
            >
              {coments.image !== "" ? (
                <img src={coments.image} className="w-full" alt="" />
              ) : (
                ""
              )}
              <div className="p-3">
                <div className="flex">
                  <img
                    src={coments.userIcon}
                    className="rounded-full h-10 w-10 flex justify-center items-center"
                    alt=""
                  />
                  <div className="ml-4 mb-2">
                    <h1>{coments.userName}</h1>
                    <div className="flex">
                      <p className="text-yellow-400 mr-1">{coments.rating}</p>
                      <p className="text-yellow-400 mr-1">{coments.rating}</p>
                      <p className="text-yellow-400 mr-1">{coments.rating}</p>
                      <p className="text-yellow-400 mr-1">{coments.rating}</p>
                    </div>
                  </div>
                </div>
                <div>{coments.coment}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Discover;
