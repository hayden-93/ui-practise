/* eslint-disable @next/next/no-page-custom-font */
import type { ReactNode } from "react";

import Head from "next/head";
import clsx from "clsx";

import { Image, Link } from "../src/components";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  const classes = clsx(
    "max-w-screen-mobile mx-auto rounded-xl space-y-4 bg-white",
    className
  );

  return <div className={classes}>{children}</div>;
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => {
  const classes = clsx("", className);

  return <div className={classes}>{children}</div>;
};

interface CardImageProps {
  alt: string;
  className?: string;
  src: string;
  width: number;
  height: number;
}

export const CardImage = ({
  alt,
  className,
  height,
  src,
  width,
}: CardImageProps) => {
  const classes = clsx("", className);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classes}
    />
  );
};

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => {
  const classes = clsx("", className);

  return <h2 className={classes}>{children}</h2>;
};

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export const CardDescription = ({
  children,
  className,
}: CardDescriptionProps) => {
  const classes = clsx("", className);

  return <p className={classes}>{children}</p>;
};

interface CardPlanProps {
  children: ReactNode;
  className?: string;
}

export const CardPlan = ({ children, className }: CardPlanProps) => {
  const classes = clsx("", className);

  return <div className={classes}>{children}</div>;
};

interface CardPaymentProps {
  children: ReactNode;
  className?: string;
}

export const CardPayment = ({ children, className }: CardPaymentProps) => {
  const classes = clsx("", className);

  return <button className={classes}>{children}</button>;
};

interface CardCancellationProps {
  children: ReactNode;
  className?: string;
}

export const CardCancellation = ({
  children,
  className,
}: CardCancellationProps) => {
  const classes = clsx("", className);

  return <button className={classes}>{children}</button>;
};

const OrderSummaryCard = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="py-6 px-4">
        <Link href="/">Back to Projects</Link>
      </nav>
      <div className="max-w-screen-max mx-auto h-screen bg-primary-order-pale-blue">
        <Card>
          <CardImage
            src="/assets/img/projects/order-summary-card/illustration-hero.svg"
            alt="Woman dancing to music"
            width={400}
            height={300}
            className=""
          />
          <CardContent>
            <CardTitle>Order Summary</CardTitle>
            <CardDescription>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </CardDescription>
            <div>
              <h6>Annual Plan</h6>
              <span>$59.99/year</span>
              <button>Change</button>
            </div>
            <CardPayment>Proceed to Payment</CardPayment>
            <CardCancellation>Cancel Order</CardCancellation>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default OrderSummaryCard;
