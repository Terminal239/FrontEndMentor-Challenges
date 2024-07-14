import { ReactNode } from "react";
import { cardData, reviewData } from "../data.ts";
import Card from "./components/Card.tsx";

function App() {
  return (
    <main className="py-12 text-[15px] max-w-[1110px] mx-auto md:flex md:items-center md:justify-center">
      <div className="p-4">
        <section className="text-center mb-12 md:flex md:text-left md:items-center md:mb-16">
          <div className="mb-8 md:flex-1 md:mb-0">
            <h1 className="text-4xl font-bold tracking-tight leading-[0.75] px-8 text-primary-veryDarkMagenta md:px-0 md:w-80 md:text-5xl md:leading-[0.9]">
              10,000+ of our users love our products.
            </h1>
            <p className="mt-4 text-neutral-darkGrayishMagenta text-xl px-2 leading-tight tracking-tighter md:max-w-md md:px-0 md:pr-2">
              We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-1 md:items-center">
            {reviewData.map((item) => {
              const stars: ReactNode[] = [];
              for (let i = 0; i < item.rating; i++) stars.push(<img src="icon-star.svg" alt="icon of a star" className="w-4 h-4 shrink-0" />);
              return (
                <article className="bg-neutral-lightGrayishMagenta py-4 rounded-md text-center md:flex items-center md:pl-6 md:py-2 md:gap-6 md:w-96 md:first-of-type:self-start md:last-of-type:self-end">
                  <div className="flex justify-center gap-4 mb-2 shrink-0 md:m-0 md:gap-2">{stars}</div>
                  <p className="text-lg font-bold text-primary-veryDarkMagenta leading-none md:text-base md:mt-1">
                    Rated {item.rating} stars in {item.name}
                  </p>
                </article>
              );
            })}
          </div>
        </section>
        <section className="flex flex-col gap-4 md:flex-row md:h-[256px] md:items-center ">
          {cardData.map((data) => (
            <Card data={data} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
