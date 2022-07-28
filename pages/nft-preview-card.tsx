/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";

import { Image, Link } from "../src/components";

const NFTPreviewCard = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <nav className="py-6 px-4">
          <Link href="/">Back to Projects</Link>
        </nav>
        <div>
          <div className="max-w-screen-max mx-auto bg-neutral-nft-main-dark-blue h-screen py-14 px-6">
            <div className="max-w-screen-mobile mx-auto bg-neutral-nft-card-dark-blue shadow-2xl p-6 rounded-xl space-y-4">
              <div>
                <Image
                  src="/assets/img/projects/nft-preview-card/image-equilibrium.jpg"
                  alt="Equilibrium Logo"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="font-body space-y-4">
                <h3 className="text-2xl font-bold text-white hover:text-primary-nft-cyan hover:cursor-pointer">
                  Equilibrium #3429
                </h3>
                <p className="text-md text-primary-nft-soft-blue font-light">
                  Our Equilibrium collection promotes balance and calm.
                </p>
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <Image
                      src="/assets/icons/projects/nft-preview-card/icon-ethereum.svg"
                      alt="Ethereum logo"
                      width={11}
                      height={18}
                    />
                    <span className="text-primary-nft-cyan font-semibold">
                      0.041 ETH
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Image
                      src="/assets/icons/projects/nft-preview-card/icon-clock.svg"
                      alt="Clock icon"
                      width={16}
                      height={16}
                    />
                    <span className="text-primary-nft-soft-blue font-light">
                      3 days left
                    </span>
                  </div>
                </div>
                <hr className="text-neutral-nft-line-dark-blue" />
                <div className="flex space-x-4">
                  <Image
                    src="/assets/img/projects/nft-preview-card/image-avatar.png"
                    alt="Avatar image"
                    width={32}
                    height={32}
                    className="border border-white rounded-full"
                  />
                  <div className="self-center font-light">
                    <span className="text-primary-nft-soft-blue ">
                      Creation of{" "}
                      <span className="text-white">Jules Wyvern</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTPreviewCard;
