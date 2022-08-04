/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { Link } from "../src/components";

const whyUs = [
  { id: 1, text: "Tutorials by industry experts" },
  { id: 2, text: "Peer & expert code review" },
  { id: 3, text: "Coding exercises" },
  { id: 4, text: "Access to our GitHub repos" },
  { id: 5, text: "Community forum" },
  { id: 6, text: "Flashcard decks" },
  { id: 7, text: "New videos every week" },
];

const SinglePriceGrid = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="py-6 px-4">
        <Link href="/">Back to Projects</Link>
      </nav>

      <div className="max-w-screen-max mx-auto bg-neutral-single-grid-gray py-24 font-body">
        <section className="max-w-screen-m mx-auto grid rounded-xl overflow-hidden drop-shadow-xl t:max-w-screen-t t:grid-cols-2">
          <div className="p-6 space-y-4 bg-white t:p-10 t:col-span-2">
            <h3 className="text-primary-single-grid-cyan text-lg font-semibold t:text-2xl">
              Join our community
            </h3>
            <p className="text-primary-single-grid-yellow text-base font-medium t:text-lg">
              30-day, hassle-free money back guarantee
            </p>
            <p className="text-neutral-single-grid-blue text-sm leading-relaxed t:text-base">
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </div>
          <div className="p-6 bg-primary-single-grid-cyan t:p-10">
            <h3 className="text-white text-lg font-semibold">
              Monthly Subscription
            </h3>
            <div className="mt-4 flex flex-col space-y-1">
              <div className="flex items-center space-x-3">
                <span className="text-white text-3xl">$29</span>
                <span className="text-neutral-single-grid-gray opacity-75">
                  per month
                </span>
              </div>
              <p className="text-white text-sm">
                Full access for less than $1 a day
              </p>
            </div>
            <button className="w-full mt-8 p-3 rounded-md drop-shadow-xl text-white bg-primary-single-grid-yellow">
              Sign Up
            </button>
          </div>
          <div className="p-6 space-y-4 bg-primary-single-grid-cyan opacity-80 t:p-10">
            <h3 className="text-white text-lg font-semibold">Why Us</h3>
            <ul className="text-neutral-single-grid-gray opacity-75 text-sm">
              {whyUs.map(({ id, text }) => (
                <li key={id}>{text}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default SinglePriceGrid;
