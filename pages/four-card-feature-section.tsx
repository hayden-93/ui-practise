/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import clsx from "clsx";

import { Image, Link } from "../src/components";

interface Feature {
  id: number;
  title: string;
  description: string;
  src: string;
  alt: string;
  className?: string;
}

const features: Array<Feature> = [
  {
    id: 1,
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    src: "/assets/icons/projects/four-card-feature-section/icon-supervisor.svg",
    alt: "Supervisor icon",
    className: "border-t-primary-four-card-cyan d:row-span-4 d:self-center",
  },
  {
    id: 2,
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    src: "/assets/icons/projects/four-card-feature-section/icon-team-builder.svg",
    alt: "Team builder icon",
    className: "border-t-primary-four-card-red d:row-span-2",
  },
  {
    id: 3,
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    src: "/assets/icons/projects/four-card-feature-section/icon-karma.svg",
    alt: "Karma icon",
    className: "border-t-primary-four-card-orange d:row-span-2 d:order-1",
  },
  {
    id: 4,
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    src: "/assets/icons/projects/four-card-feature-section/icon-calculator.svg",
    alt: "Calculator icon",
    className: "border-t-primary-four-card-blue d:row-span-4 d:self-center",
  },
];

const FeatureCard = ({ title, description, src, alt, className }: Feature) => {
  const classes = clsx("p-6 border-t-4 rounded-lg shadow-xl d:p-8", className);

  return (
    <li className={classes}>
      <h2 className="text-neutral-four-card-dark-blue text-xl font-semibold">
        {title}
      </h2>
      <p className="mt-2 text-neutral-four-card-blue text-base font-normal d:text-xs d:leading-relaxed">
        {description}
      </p>
      <Image
        src={src}
        alt={alt}
        width={64}
        height={64}
        className="mt-8 ml-auto d:mt-10"
      />
    </li>
  );
};

const FourCardFeature = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="py-6 px-4">
        <Link href="/">Back to Projects</Link>
      </nav>
      <div className="max-w-screen-max mx-auto py-24 font-body">
        <section className="max-w-screen-m mx-auto space-y-16 d:max-w-screen-d">
          <div className="text-center space-y-4 d:max-w-lg d:mx-auto d:space-y-6">
            <h2 className="text-neutral-four-card-dark-blue text-3xl font-extralight leading-snug d:text-4xl d:leading-normal">
              Reliable, efficient delivery{" "}
              <span className="block font-semibold">Powered by Technology</span>
            </h2>
            <p className="text-neutral-four-card-blue text-lg leading-relaxed d:text-base">
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </div>
          <ul className="grid gap-6 d:grid-cols-3 d:grid-rows-4">
            {features.map((props) => (
              <FeatureCard key={props.id} {...props} />
            ))}
          </ul>
        </section>
      </div>

      {/* <div className="max-w-screen-max mx-auto bg-neutral-four-card-gray font-body py-24">
        <div className="max-w-screen-m mx-auto">
          <h2 className="text-center">Reliable, efficient delivery</h2>
          <h2 className="text-center">Powered by Technology</h2>
          <p className="">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white rounded-lg border-t-4 border-t-primary-four-card-cyan drop-shadow-2xl">
              <h3 className="">Supervisor</h3>
              <span className="">
                Monitors activity to identify project roadblocks
              </span>
            </div>
            <div className="bg-white rounded-lg border-t-4 border-t-primary-four-card-red drop-shadow-2xl">
              <h3 className="">Team Builder</h3>
              <span className="">
                Scans our talent network to create the optimal team for your
                project
              </span>
            </div>
            <div className="bg-white rounded-lg border-t-4 border-t-primary-four-card-orange drop-shadow-2xl">
              <h3 className="">Karma</h3>
              <span className="">
                Regularly evaluates our talent to ensure quality
              </span>
            </div>
            <div className="bg-white rounded-lg border-t-4 border-t-primary-four-card-blue drop-shadow-2xl">
              <h3 className="">Calculator</h3>
              <span className="">
                Uses data from past projects to provide better delivery
                estimates
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default FourCardFeature;
