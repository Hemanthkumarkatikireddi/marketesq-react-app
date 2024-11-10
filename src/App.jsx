import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import BookingPage from "./components/BookingPage";
import Cart from "./components/Cart";
import Loader from "./components/loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/bookingpage" element={<BookingPage />} />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
