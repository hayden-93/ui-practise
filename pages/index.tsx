import type { NextPage } from "next";

import { Image, Link } from "../src/components";

import projects from "../src/data/projects.json";

const Home: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-3xl text-red-600">UI Practise</h1>
      <ul className="grid grid-cols-3 gap-4">
        {projects.map(({ alt, description, href, src, title }) => (
          <li key={href} className="">
            <Link href={href} className="">
              <div className="rounded overflow-hidden border border-black">
                <Image src={src} alt={alt} width={416} height={234} />
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="">{description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
