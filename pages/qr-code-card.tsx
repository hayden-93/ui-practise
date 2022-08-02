/* eslint-disable @next/next/no-page-custom-font */
import type { ReactNode } from "react";

import Head from "next/head";

import { Image, Link } from "../src/components";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export const Title = ({ children, className }: TitleProps) => {
  const classes = [
    "text-qrc-dark-blue text-2xl text-center font-bold",
    className,
  ]
    .join(" ")
    .trim();

  return <h2 className={classes}>{children}</h2>;
};

interface DescriptionProps {
  children: ReactNode;
  className?: string;
}

export const Description = ({ children, className }: DescriptionProps) => {
  const classes = [
    "text-qrc-grayish-blue text-lg text-center leading-tight",
    className,
  ]
    .join(" ")
    .trim();

  return <p className={classes}>{children}</p>;
};

const QRCodeCard = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="max-w-screen-max mx-auto">
        <nav className="py-6 px-4">
          <Link href="/">Back to Projects</Link>
        </nav>
        <div className="bg-qrc-light-gray h-screen py-10">
          <div className="max-w-screen-m mx-auto bg-white rounded-2xl p-5 space-y-4">
            <Image
              width={600}
              height={600}
              src="/assets/img/projects/qr-code-card/image-qr-code.png"
              alt="QR code"
              className="rounded-2xl"
            />
            <div className="p-3 space-y-6">
              <Title>Improve your front-end skills by building projects</Title>
              <Description>
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </Description>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QRCodeCard;
