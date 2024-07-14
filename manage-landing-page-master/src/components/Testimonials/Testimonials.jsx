import React from "react";
import Button from "../Reusable/Button";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What they’ve said</h2>
      <div className="testimonials__container">
        <figure className="testimonials__item">
          <img
            className="testimonials__profile"
            src="/assets/avatar-anisha.png"
            alt="photo of anisha"
          />
          <p className="testimonials__author">Anisha Li</p>
          <blockquote className="testimonials__quote">
            “Manage has supercharged our team’s workflow. The ability to maintain visibility on
            larger milestones at all times keeps everyone motivated.”
          </blockquote>
        </figure>
        <figure className="testimonials__item">
          <img className="testimonials__profile" src="/assets/avatar-ali.png" alt="photo of ali" />
          <p className="testimonials__author">Ali Bravo</p>
          <blockquote className="testimonials__quote">
            “We have been able to cancel so many other subscriptions since using Manage. There is no
            more cross-channel confusion and everyone is much more focused.”
          </blockquote>
        </figure>
        <figure className="testimonials__item">
          <img
            className="testimonials__profile"
            src="/assets/avatar-richard.png"
            alt="photo of richard"
          />
          <p className="testimonials__author">Richard Watts</p>
          <blockquote className="testimonials__quote">
            “Manage allows us to provide structure and process. It keeps us organized and focused. I
            can’t stop recommending them to everyone I talk to!”
          </blockquote>
        </figure>
        <figure className="testimonials__item">
          <img
            className="testimonials__profile"
            src="/assets/avatar-shanai.png"
            alt="photo of shanai"
          />
          <p className="testimonials__author">Shanai Gough</p>
          <blockquote className="testimonials__quote">
            “Their software allows us to track, manage and collaborate on our projects from
            anywhere. It keeps the whole team in-sync without being intrusive.”
          </blockquote>
        </figure>
      </div>
      <Button>Get Started</Button>
    </section>
  );
};

export default Testimonials;
