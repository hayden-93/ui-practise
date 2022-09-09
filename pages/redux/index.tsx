import type { NextPage } from "next";
import type { ImageProps } from "next/future/image";

import { memo } from "react";

import projects from "@/data/redux.json";
import { Image, Link } from "@/components";

interface PreviewCardProps {
  alt: string;
  description: string;
  src: string;
  title: string;
  priority?: boolean;
  placeholder?: ImageProps["placeholder"];
  blurDataURL?: ImageProps["blurDataURL"];
}

const ProjectPreviewCardBase = ({
  alt,
  description,
  src,
  title,
  priority,
  placeholder = "blur",
  blurDataURL,
}: PreviewCardProps) => {
  return (
    <article aria-labelledby="project-title" className="group">
      <div className="overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={639}
          height={359}
          quality={50}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className="transition-all ease-in delay-150 duration-300 rounded-xl group-hover:scale-125"
        />
      </div>
      <div className="text-neutral-600 p-5 space-y-3">
        <h2 id="project-title" className="text-xl d:text-2xl font-bold">
          {title}
        </h2>
        <p className="text-base text-neutral-500">{description}</p>
      </div>
    </article>
  );
};

const ProjectPreviewCard = memo(ProjectPreviewCardBase);

const Home: NextPage = () => {
  return (
    <section className="max-w-screen-max mx-auto last:pb-16 t:last:pb-24 d:last:pb-32">
      <h1 className="text-3xl t:text-4xl d:text-5xl text-neutral-900 font-semibold text-center py-16 t:py-24 d:py-32">
        Front End Projects
      </h1>
      <ul className="grid gap-4 t:gap-6 d:gap-8 grid-cols-1 t:grid-cols-2 d:grid-cols-3">
        {projects.map(
          ({
            alt,
            description,
            href,
            src,
            title,
            priority = false,
            blurDataURL,
          }) => (
            <li key={href}>
              <Link href={href}>
                <ProjectPreviewCard
                  src={src}
                  alt={alt}
                  description={description}
                  title={title}
                  priority={priority}
                  blurDataURL={blurDataURL}
                />
              </Link>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default Home;
