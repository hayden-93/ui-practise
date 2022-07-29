/* eslint-disable @next/next/no-page-custom-font */
import type { ReactNode } from "react";

import Head from "next/head";

import { Image, Link } from "../src/components";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  const classes = [
    "group max-w-screen-mobile mx-auto bg-neutral-nft-card-dark-blue shadow-2xl p-6 rounded-xl space-y-4 hover:cursor-pointer",
    className,
  ]
    .join(" ")
    .trim();

  return <div className={classes}>{children}</div>;
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => {
  const classes = ["font-body space-y-4", className].join(" ").trim();

  return <div className={classes}>{children}</div>;
};

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => {
  const classes = [
    "text-2xl font-bold text-white group-hover:text-primary-nft-cyan",
    className,
  ]
    .join(" ")
    .trim();

  return <h3 className={classes}>{children}</h3>;
};

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export const CardDescription = ({
  children,
  className,
}: CardDescriptionProps) => {
  const classes = ["text-md text-primary-nft-soft-blue font-light", className]
    .join(" ")
    .trim();

  return <p className={classes}>{children}</p>;
};

interface CardPriceProps {
  children: ReactNode;
  className?: string;
}

export const CardPrice = ({ children, className }: CardPriceProps) => {
  const classes = ["text-primary-nft-cyan font-semibold", className]
    .join(" ")
    .trim();

  return <span className={classes}>{children}</span>;
};

interface CardDeadlineProps {
  children: ReactNode;
  className?: string;
}

export const CardDeadline = ({ children, className }: CardDeadlineProps) => {
  const classes = ["text-primary-nft-soft-blue font-light", className]
    .join(" ")
    .trim();

  return <span className={classes}>{children}</span>;
};

interface CardProfileProps {
  children: ReactNode;
  className?: string;
}

export const CardProfile = ({ children, className }: CardProfileProps) => {
  const classes = ["flex space-x-4", className].join(" ").trim();

  return <div className={classes}>{children}</div>;
};

interface SeperatorProps {
  className?: string;
}

export const Seperator = ({ className }: SeperatorProps) => {
  const classes = ["text-neutral-nft-line-dark-blue", className]
    .join(" ")
    .trim();

  return <hr className={classes} />;
};

interface AvatarProps {
  alt: string;
  className?: string;
  src: string;
  width: number;
  height: number;
}

export const Avatar = ({ alt, className, src, width, height }: AvatarProps) => {
  const classes = ["border border-white rounded-full", className]
    .join(" ")
    .trim();

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

export const ViewIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      xmlns="http://www.w3.org/2000/svg"
      className="z-10 text-white opacity-0 group-hover:opacity-100"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h48v48H0z" />
        <path
          d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

const NFTPreviewCard = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="py-6 px-4">
        <Link href="/">Back to Projects</Link>
      </nav>
      <div className="max-w-screen-max mx-auto bg-neutral-nft-main-dark-blue h-screen py-14 px-6">
        <Card>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/assets/img/projects/nft-preview-card/image-equilibrium.jpeg"
              alt="Equilibrium Logo"
              width={600}
              height={600}
            />
            <div className="flex justify-center items-center opacity-0 absolute inset-0 hover:cursor-pointer group-hover:opacity-100">
              <span className="bg-primary-nft-cyan absolute inset-0 opacity-50" />
              <ViewIcon />
            </div>
          </div>
          <CardContent>
            <CardTitle>Equilibrium #3429</CardTitle>
            <CardDescription>
              Our Equilibrium collection promotes balance and calm.
            </CardDescription>
            <div className="flex justify-between">
              <div className="flex space-x-2">
                <Image
                  src="/assets/icons/projects/nft-preview-card/icon-ethereum.svg"
                  alt="Ethereum logo"
                  width={11}
                  height={18}
                />
                <CardPrice>0.041 ETH</CardPrice>
              </div>
              <div className="flex space-x-2">
                <Image
                  src="/assets/icons/projects/nft-preview-card/icon-clock.svg"
                  alt="Clock icon"
                  width={16}
                  height={16}
                />
                <CardDeadline>3 days left</CardDeadline>
              </div>
            </div>
            <Seperator />
            <CardProfile>
              <Avatar
                src="/assets/img/projects/nft-preview-card/image-avatar.png"
                alt="Avatar image"
                width={32}
                height={32}
              />
              <div className="self-center font-light">
                <span className="text-primary-nft-soft-blue">
                  Creation of{" "}
                  <span className="text-white group-hover:text-primary-nft-cyan">
                    Jules Wyvern
                  </span>
                </span>
              </div>
            </CardProfile>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default NFTPreviewCard;
