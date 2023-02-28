import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../Pages/Admin";
import Events from "../Pages/Events";
import RegisterEvent from "../Pages/RegisterEvent";
import RegisterAttendee from "../Pages/RegisterAttendee";
import Attendees from "../Pages/Attendees";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/events" element={<Events />} />
        <Route path="/registerAttendee" element={<RegisterAttendee />} />
        <Route path="/registerEvent" element={<RegisterEvent />} />
        <Route path="/attendees" element={<Attendees />} />
      </Routes>
    </div>
  );
}

export default Router;
