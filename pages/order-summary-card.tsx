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
    "max-w-screen-mobile mx-auto rounded-xl bg-white",
    className
  );

  return <div className={classes}>{children}</div>;
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => {
  const classes = clsx("text-center px-6 py-6 space-y-6", className);

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
  const classes = clsx("rounded-t-xl", className);

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
  const classes = clsx("text-xl font-bold", className);

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
  const classes = clsx(
    "text-sm font-normal text-neutral-order-desaturated-blue",
    className
  );

  return <p className={classes}>{children}</p>;
};

interface CardPlanProps {
  children: ReactNode;
  className?: string;
}

export const CardPlan = ({ children, className }: CardPlanProps) => {
  const classes = clsx("text-sm", className);

  return <div className={classes}>{children}</div>;
};

interface CardPaymentProps {
  children: ReactNode;
  className?: string;
}

export const CardPayment = ({ children, className }: CardPaymentProps) => {
  const classes = clsx(
    "bg-primary-order-bright-blue text-white px-24 py-2 rounded-lg drop-shadow-xl",
    className
  );

  return <Button className={classes}>{children}</Button>;
};

interface CardCancellationProps {
  children: ReactNode;
  className?: string;
}

export const CardCancellation = ({
  children,
  className,
}: CardCancellationProps) => {
  const classes = clsx("text-neutral-order-desaturated-blue", className);

  return <Button className={classes}>{children}</Button>;
};

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  const classes = clsx("text-sm", className);

  return <button className={classes}>{children}</button>;
};

interface OrderProps {
  children: ReactNode;
  className?: string;
}

export const Order = ({ children, className }: OrderProps) => {
  const classes = clsx("text-sm space-y-4 font-medium", className);

  return <div className={classes}>{children}</div>;
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
        <div className="py-24">
          <Card>
            <CardImage
              src="/assets/img/projects/order-summary-card/illustration-hero.svg"
              alt="Woman dancing to music"
              width={400}
              height={150}
            />
            <CardContent>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </CardDescription>
              <div className="flex p-4 bg-primary-order-pale-blue bg-opacity-30 rounded-lg space-x-4">
                <Image
                  src="/assets/img/projects/order-summary-card/icon-music.svg"
                  alt="Music icon"
                  width={40}
                  height={12}
                />
                <CardPlan>
                  <h6 className="font-bold">Annual Plan</h6>
                  <span className="text-neutral-order-desaturated-blue">
                    $59.99/year
                  </span>
                </CardPlan>
                <Button className="text-primary-order-bright-blue underline font-bold pl-16 hover:no-underline hover:text-opacity-50">
                  Change
                </Button>
              </div>
              <Order>
                <CardPayment className="hover:bg-opacity-70 hover:text-white">
                  Proceed to Payment
                </CardPayment>
                <CardCancellation className="hover:text-black">
                  Cancel Order
                </CardCancellation>
              </Order>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default OrderSummaryCard;
