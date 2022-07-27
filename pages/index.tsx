import type { NextPage } from "next";
import { memo } from "react";

import { Image, Link } from "../src/components";

import projects from "../src/data/projects.json";

interface PreviewCardProps {
  alt: string;
  description: string;
  src: string;
  title: string;
}

const PreviewCardBase = ({
  alt,
  description,
  src,
  title,
}: PreviewCardProps) => {
  return (
    <div>
      <div className="overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={416}
          height={234}
          className="transition-all ease-in-out delay-150 duration-300 rounded-xl group-hover:scale-125"
        />
      </div>
      <div className="text-neutral-600 p-5 space-y-3">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-base font-normal">{description}</p>
      </div>
    </div>
  );
};

const PreviewCard = memo(PreviewCardBase);

const Home: NextPage = () => {
  return (
    <div className="max-w-screen-max mx-auto">
      <h1 className="text-5xl text-neutral-900 font-semibold py-24 text-center">
        UI Practise
      </h1>
      <ul className="grid gap-8 grid-cols-1 t:grid-cols-2 d:grid-cols-3">
        {projects.map(({ alt, description, href, src, title }) => (
          <li key={href} className="group">
            <Link href={href}>
              <PreviewCard
                src={src}
                alt={alt}
                description={description}
                title={title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
