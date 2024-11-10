// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomeBody from "./HomeBody";
import { useLocation } from "react-router-dom";

import { FaWifi } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { IoBicycle } from "react-icons/io5";
import { RiMap2Fill } from "react-icons/ri";
import { IoMdFlag } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Services from "../components/Services";
import Discover from "./Discover";
import comment from "../assets/coment.jpg";
import icon from "../assets/icon.jpg";

const servicesData = [
  {
    key: "1",
    icon: <FaWifi className="size-[50px]" />,
    title: "WiFi",
    description:
      "High-speed , Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts providedin your space",
  },
  {
    key: "2",
    icon: <MdFastfood className="size-[50px]" />,
    title: "Food",
    description:
      "Quality meals, Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts providedin your space",
  },
  {
    key: "3",
    icon: <MdHome className="size-[50px]" />,
    title: "Accommodation",
    description:
      "Comfortable stay, Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts providedin your space",
  },
  {
    key: "4",
    icon: <FaCar className="size-[50px]" />,
    title: "Car Rental",
    description:
      "Affordable rentals,Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts providedin your space",
  },
  {
    key: "5",
    icon: <IoBicycle className="size-[50px]" />,
    title: "Bicycle",
    description:
      "Bike rentals,Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts providedin your space",
  },
  {
    key: "6",
    icon: <RiMap2Fill className="size-[50px]" />,
    title: "Maps",
    description:
      "Guided tours,Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts providedin your space",
  },
  {
    key: "7",
    icon: <IoMdFlag className="size-[50px]" />,
    title: "Guidance",
    description:
      "Tour guides,Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts providedin your space",
  },
  {
    key: "8",
    icon: <FaCar className="size-[50px]" />,
    title: "Transport",
    description:
      "Convenient transport,Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts providedin your space",
  },
  {
    key: "9",
    icon: <FaShoppingCart className="size-[50px]" />,
    title: "Shopping",
    description:
      "Souvenirs available,Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts providedin your space",
  },
];
const discoverData = [
  {
    key: "1",
    image: "",
    userIcon: icon,
    userName: "Hemanth",
    rating: <FaStar />,
    coment:
      "I am writing this after reflecting on my one   month stay with Bricabin in Ladakh. Right   from picking us up at the airport to dropping   us back there after a month, Urgan was very  responsible and took good care of my friends   and me. read more ",
  },
  {
    key: "2",
    image: comment,
    userIcon: icon,
    userName: "Hemanth Kumar",
    rating: <FaStar />,
    coment:
      "I am writing this after reflecting on my one   month stay with Bricabin in Ladakh. Right   from picking us up at the airport to dropping   us back there after a month, Urgan was very  responsible and took good care of my friends   and me. read more ",
  },
  {
    key: "3",
    image: "",
    userIcon: icon,
    userName: "Hemanth K",
    rating: <FaStar />,
    coment:
      "I am writing this after reflecting on my one   month stay with Bricabin in Ladakh. Right   from picking us up at the airport to dropping   us back there after a month, Urgan was very  responsible and took good care of my friends   and me. read more ",
  },
  {
    key: "4",
    image: "",
    userIcon: icon,
    userName: "Hemanth Kumar K",
    rating: <FaStar />,
    coment:
      "I am writing this after reflecting on my one   month stay with Bricabin in Ladakh. Right   from picking us up at the airport to dropping   us back there after a month, Urgan was very  responsible and took good care of my friends   and me. read more ",
  },
];

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="">
      <Header />
      <div className="h-auto">
        <HomeBody />
        <Discover discoverData={discoverData} />
        <Services servicesData={servicesData} />
      </div>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
