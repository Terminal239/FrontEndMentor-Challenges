import React from "react";
import Accordion from "../Reusable/Accordion";

export interface QAndA {
  question: string;
  answer: string;
}

const howItWorks: QAndA[] = [
  {
    question: "How do I download the app?",
    answer:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    question: "Can I find a nearby Scoots?",
    answer:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    question: "Do I need a license to ride?",
    answer:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
];

const safeDriving: QAndA[] = [
  {
    question: "Should I wear a helmet?",
    answer:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    question: "How about the rules & regulations?",
    answer:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    question: "What if I damage my Scoot?",
    answer:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
];

const FAQ = () => {
  return (
    <section className="faq">
      <h2>FAQ</h2>
      <Accordion title="How it works" data={howItWorks} />
      <Accordion title="Safe driving" data={safeDriving} />
    </section>
  );
};

export default FAQ;
