import "./App.scss";
import React from "react";
import Job from "./components/Job/Job";
import { Route, Routes, useLocation } from "react-router-dom";
import DeliveryMain from "./pages/DeliveryMain";
import CarPost from "./components/CarPost/CarPost";

function App() {
  const location = useLocation();
  return (
    <>
      <section className="">
        <div>
          <Routes>
            <Route path="/job" element={<Job />} />
          </Routes>
          {location.pathname !== undefined ? (
            location.pathname.split("/").at(-3) === "delivery" ? (
              <DeliveryMain location={location} />
            ) : location.pathname.split("/").at(-3) === "car" ? (
              <CarPost location={location} />
            ) : location.pathname.split("/").at(-3) === "job" ? (
              <Job location={location} />
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}

export default App;
