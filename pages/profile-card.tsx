/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";

import { Image, Link } from "../src/components";

const ProfileCard = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="py-6 px-4">
        <Link href="/">Back to Projects</Link>
      </nav>
      <div className="max-w-screen-max mx-auto bg-primary-profile-cyan py-24">
        <div className="max-w-screen-m mx-auto bg-white rounded-xl overflow-hidden font-body">
          <Image
            src="/assets/img/projects/profile-card/bg-pattern-card.svg"
            alt="Background image"
            width={375}
            height={300}
            className=""
          />
          <div className="flex justify-center items-center -mt-12">
            <Image
              src="/assets/img/projects/profile-card/image-victor.jpeg"
              alt="Profile picture"
              width={96}
              height={96}
              className="rounded-full border-4 border-white"
            />
          </div>
          <div className="py-6 space-y-2">
            <div className="flex justify-center items-center space-x-4">
              <span className="text-xl font-bold">Victor Crest</span>
              <span className="text-xl font-normal text-primary-profile-dark-grayish-blue">
                26
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-lg font-normal text-primary-profile-dark-grayish-blue">
                London
              </span>
            </div>
          </div>
          <hr className="text-neutral-profile-dark-gray opacity-30 h-px w-full" />
          <ul className="grid grid-cols-3 justify-evenly py-8 px-4 text-center">
            <li className="space-y-1">
              <span className="text-primary-profile-dark-blue text-2xl font-bold">
                80K
              </span>
              <span className="block text-neutral-profile-dark-gray font-normal text-sm tracking-widest">
                Followers
              </span>
            </li>
            <li className="space-y-1">
              <span className="text-primary-profile-dark-blue text-2xl font-bold">
                803K
              </span>
              <span className="block text-neutral-profile-dark-gray font-normal text-sm tracking-widest">
                Likes
              </span>
            </li>
            <li className="space-y-1">
              <span className="text-primary-profile-dark-blue text-2xl font-bold">
                1.4K
              </span>
              <span className="block text-neutral-profile-dark-gray font-normal text-sm tracking-widest">
                Photos
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
