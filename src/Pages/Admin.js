import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <div className="d-flex justify-content-between bg-dark text-white p-2">
        <h1 className="text-center">
          <span>EVENT MANAGEMENT</span>
        </h1>
      </div>
      <div className="container">
        <img
          src="/Admin-Page-Banner.png"
          alt="Admin Page Banner"
          className="img-fluid"
        />
        <hr />
        <Link to="/registerAttendee" className="btn btn-primary mx-2">
          Register Attendee
        </Link>
        <Link to="/attendees" className="btn btn-primary mx-2">
          All Attendees
        </Link>
        <Link to="/registerEvent" className="btn btn-success mx-2">
          Register Event
        </Link>
        <Link to="/events" className="btn btn-success mx-2">
          All Events
        </Link>
      </div>
    </div>
  );
}

export default Admin;
