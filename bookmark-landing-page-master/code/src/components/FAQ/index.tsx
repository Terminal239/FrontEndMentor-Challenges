import Button from "../Resuable/Button";
import MaxWidthWrapper from "../Resuable/MaxWidthWrapper";
import Accordion from "./Accordion";
import styles from "./FAQ.module.css";

interface FAQ {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQ[] = [
  {
    question: "What is Bookmark?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
  },
  {
    question: "How can I request a new browser?",
    answer: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
    Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
    ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
    Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`,
  },
  {
    question: "Is there a mobile app?",
    answer: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
    urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
    sollicitudin ex et ultricies bibendum.`,
  },
  {
    question: "What about other Chromium browsers?",
    answer: `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
    vitae neque eget nisl gravida pellentesque non ut velit.`,
  },
];

export const FAQ = () => {
  return (
    <section className="section-faq">
      <MaxWidthWrapper classes={`${styles.container}`}>
        <div className={styles["faq-text"]}>
          <h2>Frequently Asked Questions</h2>
          <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
        </div>
        <div className={styles["faq-container"]}>
          {FAQ_DATA.map((faq) => (
            <Accordion {...faq} />
          ))}
        </div>
        <Button type="primary">More info</Button>
      </MaxWidthWrapper>
    </section>
  );
};
