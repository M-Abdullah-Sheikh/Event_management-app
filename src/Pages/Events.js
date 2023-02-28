import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { database } from "../config/firebase";
import { ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import CardBuilder from "../Components/CardBuilder";

function Events() {
  const [eventsData, seteventsData] = useState([]);

  useEffect(() => {
    const events_path = ref(database, "events/");
    onValue(events_path, (snapshot) => {
      const data = snapshot.val();
      let my_array = [];
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          my_array.push(data[key]);
        }
      }
      seteventsData(my_array);
    });
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-center bg-success text-white py-3">EVENTS</h2>
      </div>
      <Container className="my-4">
        <Link style={{ color: "#198754" }} to="/">
          <svg
            width="30px"
            fill="#198754"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM288 360c0 9.531-5.656 18.19-14.41 22C270.5 383.3 267.3 384 264 384c-5.938 0-11.81-2.219-16.34-6.406l-112-104C130.8 269 128 262.7 128 256s2.781-13.03 7.656-17.59l112-104c7.031-6.469 17.22-8.156 25.94-4.406C282.3 133.8 288 142.5 288 152V360z" />
          </svg>
          <span className="mx-2 my-3">GO BACK</span>
        </Link>
      </Container>
      <Container className="d-flex">
        {eventsData?.length > 0 ? (
          eventsData.map((event, idx) => {
            return <CardBuilder key={idx} event={event} />;
          })
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
}

export default Events;
