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
    "max-w-screen-m mx-auto bg-primary-stats-desaturated-blue font-body rounded-lg overflow-hidden d:max-w-screen-d d:grid d:grid-cols-2 d:rounded-lg d:overflow-hidden",
    className
  );

  return <div className={classes}>{children}</div>;
};

const StatsPreviewCard = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="py-6 px-4">
        <Link href="/">Back to Projects</Link>
      </nav>
      <div className="max-w-screen-max leading bg-primary-stats-dark-blue py-24 d:p-12">
        <Card>
          <div className="bg-primary-stats-violet d:order-2">
            <Image
              src="/assets/img/projects/stats-preview-card/image-header-mobile.jpeg"
              alt="Women working at office table"
              width={654}
              height={480}
              className="mix-blend-multiply opacity-80 w-full h-auto d:hidden"
            />
            <Image
              src="/assets/img/projects/stats-preview-card/image-header-desktop.jpeg"
              alt="Women working at office table"
              width={540}
              height={446}
              className="hidden mix-blend-multiply opacity-80 h-full d:block"
            />
          </div>
          <div className="flex flex-col p-8 text-center d:py-16 d:pl-16 d:pr-28 d:text-left">
            <h3 className="text-white font-display text-3xl font-bold d:text-[32px]">
              Get <span className="text-primary-stats-violet">insights</span>{" "}
              that help your business grow.
            </h3>
            <p className="mt-4 text-base text-neutral-stats-transparent-heading leading-relaxed d:mt-8">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <ul className="mt-8 space-y-4 d:space-y-0 d:mt-auto d:flex d:justify-between">
              <li className="space-y-1">
                <span className="text-2xl text-white">10k+</span>
                <span className="block text-xs uppercase text-neutral-stats-transparent-heading">
                  Companies
                </span>
              </li>
              <li className="space-y-1">
                <span className="text-2xl text-white">314</span>
                <span className="block text-xs uppercase text-neutral-stats-transparent-heading">
                  Templates
                </span>
              </li>
              <li className="space-y-1">
                <span className="text-2xl text-white">12m+</span>
                <span className="block text-xs uppercase text-neutral-stats-transparent-heading">
                  Queries
                </span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </>
  );
};

export default StatsPreviewCard;
