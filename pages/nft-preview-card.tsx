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
      <div className="max-w-screen-max mx-auto">
        <nav className="py-6 px-4">
          <Link href="/">Back to Projects</Link>
        </nav>
        <div className="max-w-screen-mobile mx-auto h-screen p-6 bg-neutral-nft-main-dark-blue">
          <div className="bg-neutral-nft-card-dark-blue p-6 rounded-xl">
            <div className="">
              <Image
                src="/assets/img/projects/nft-preview-card/image-equilibrium.jpg"
                alt="Equilibrium Logo"
                width={600}
                height={600}
                className="rounded-xl"
              />
            </div>
            <div className="text-white">
              <h3>Equilibrium #3429</h3>
              <p>Our Equilibrium collection promotes balance and calm.</p>
              <div>
                <div>
                  <Image src="" alt="" width={24} height={24} className="" />
                  <span>0.041 ETH</span>
                </div>
                <div>
                  <Image src="" alt="" width={24} height={24} className="" />
                  <span>3 days left</span>
                </div>
              </div>
              <hr />
              <div>
                <Image src="" alt="" width={24} height={24} className="" />
                <span>Creation of Jules Wyvern</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTPreviewCard;
