import { ReactNode, useState } from "react";
import Footer from "./Footer";
import Logo from "./Reusable/Logo";

const data = {
  January: 31,
  February: {
    common: 28,
    leap: 29,
  },
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};

const Contact = () => {
  const [date, setDate] = useState<number>(31);
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();

  const onSetMonth = (event) => {
    const value = event.target.value;
    console.log(value);
  };

  return (
    <>
      <main>
        <Logo />
        <div>
          <div>
            <h1>Reservations</h1>
            <p>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
          </div>
          <form>
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <div>
                <label>Pick a date</label>
                <select>
                  {((): ReactNode => {
                    const dates: ReactNode[] = [];
                    for (let i = 1; i <= date; i++) dates.push(<option value={i}>{i}</option>);
                    return dates;
                  })()}
                </select>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
