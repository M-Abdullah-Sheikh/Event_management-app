import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { database } from "../config/firebase";
import { ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";

function Attendees() {
  const [AttendeesData, setAttendeesData] = useState([]);

  useEffect(() => {
    const attendees_path = ref(database, "Attendees/");
    onValue(attendees_path, (snapshot) => {
      const data = snapshot.val();
      let my_array = [];
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          my_array.push(data[key]);
        }
      }
      setAttendeesData(my_array);
    });
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-center bg-primary text-white py-3">ATTENDEES</h2>
      </div>
      <Container className="my-4">
        <Link to="/">
          <svg
            width="30px"
            fill="#2980b9"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM288 360c0 9.531-5.656 18.19-14.41 22C270.5 383.3 267.3 384 264 384c-5.938 0-11.81-2.219-16.34-6.406l-112-104C130.8 269 128 262.7 128 256s2.781-13.03 7.656-17.59l112-104c7.031-6.469 17.22-8.156 25.94-4.406C282.3 133.8 288 142.5 288 152V360z" />
          </svg>
          <span className="mx-2 my-3">GO BACK</span>
        </Link>
      </Container>
      <Container className="d-flex">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Attending</th>
            </tr>
          </thead>
          <tbody>
            {AttendeesData &&
              AttendeesData.map((attendee, idx) => {
                return (
                  <tr key={idx}>
                    <td>{attendee?.ID}</td>
                    <td>{attendee?.Fname}</td>
                    <td>{attendee?.Lname}</td>
                    <td>{attendee?.Contact}</td>
                    <td>{attendee?.email}</td>
                    <td>{attendee?.attending}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Attendees;
