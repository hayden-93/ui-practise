/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import clsx from "clsx";

import { Image, Link } from "../src/components";

interface Vehicle {
  id: number;
  name: string;
  description: string;
  src: string;
  alt: string;
  theme?: "orange" | "cyan" | "dark-cyan";
}

const vehicles: Array<Vehicle> = [
  {
    id: 1,
    name: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    src: "/assets/icons/projects/3-column-preview-card/icon-sedans.svg",
    alt: "Sedan car icon",
    theme: "orange",
  },
  {
    id: 2,
    name: "SUVs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    src: "/assets/icons/projects/3-column-preview-card/icon-suvs.svg",
    alt: "SUV car icon",
    theme: "cyan",
  },
  {
    id: 3,
    name: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    src: "/assets/icons/projects/3-column-preview-card/icon-luxury.svg",
    alt: "Luxury car icon",
    theme: "dark-cyan",
  },
];

interface VehicleProfileProps extends Vehicle {
  className?: string;
}

const bgClass = {
  orange: "bg-primary-3column-orange",
  cyan: "bg-primary-3column-cyan",
  "dark-cyan": "bg-primary-3column-dark-cyan",
};

const textColorClass = {
  orange: "text-primary-3column-orange",
  cyan: "text-primary-3column-cyan",
  "dark-cyan": "text-primary-3column-dark-cyan",
};

const VehicleProfile = ({
  alt,
  className,
  description,
  id,
  theme = "orange",
  name,
  src,
}: VehicleProfileProps) => {
  const classes = clsx("py-14 px-12 space-y-8", bgClass[theme], className);
  const buttonClasses = clsx(
    "bg-white rounded-full px-8 py-3 font-body text-base font-normal",
    textColorClass[theme]
  );

  return (
    <li key={id} className={classes}>
      <Image src={src} alt={alt} width={64} height={40} />
      <h2 className="font-display text-white text-4xl font-bold uppercase d:text-5xl">
        {name}
      </h2>
      <p className="font-body text-white text-base font-normal leading-loose d:text-lg">
        {description}
      </p>
      <button className={buttonClasses}>Learn More</button>
    </li>
  );
};

const ColumnCardPreview = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="py-6 px-4">
        <Link href="/">Back to Projects</Link>
      </nav>
      <section className="max-w-screen-max mx-auto">
        <ul className="grid max-w-screen-m mx-auto rounded-xl overflow-hidden d:grid-cols-3 d:max-w-screen-d">
          {vehicles.map((props) => (
            <VehicleProfile key={props.id} {...props} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default ColumnCardPreview;
