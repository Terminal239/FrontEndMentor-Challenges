import React from "react";
import Button from "../Reusable/Button";

interface Job {
  role: string;
  location: string;
}

const positions: Job[] = [
  {
    role: "General Manager",
    location: "Jakarta, Indonesia",
  },
  {
    role: "UI/UX Designer",
    location: "Yokohama, Japan",
  },
  {
    role: "Blog Content Copywriter",
    location: "New York, United States",
  },
  {
    role: "Graphic Designer",
    location: "New York, United States",
  },
  {
    role: "Fleet Supervisor",
    location: "Jakarta, Indonesia",
  },
  {
    role: "UX Analyst",
    location: "London, United Kingdom",
  },
];

const Jobs = () => {
  return (
    <section className="job-container">
      {positions.map(({ role, location }) => (
        <div className="job-element" key={role + location}>
          <div className="job__info">
            <h4>{role}</h4>
            <p>{location}</p>
          </div>
          <Button type="primary">Apply</Button>
        </div>
      ))}
    </section>
  );
};

export default Jobs;
