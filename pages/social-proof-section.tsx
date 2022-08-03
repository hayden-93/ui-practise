/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import clsx from "clsx";

import { Image, Link } from "../src/components";

const StarIcon = () => {
  return (
    <svg
      width="17"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      className="self-center"
    >
      <path
        d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
        fill="#EF9546"
      />
    </svg>
  );
};

type CustomerType = "Verified Buyer";

interface Review {
  id: number;
  name: string;
  review: string;
  src: string;
  alt: string;
  type: CustomerType;
  className?: string;
}

const reviews: Array<Review> = [
  {
    id: 1,
    src: "/assets/img/projects/social-proof-section/image-colton.jpeg",
    alt: "Colton Smith picture",
    name: "Colton Smith",
    type: "Verified Buyer",
    review:
      "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
  },
  {
    id: 2,
    src: "/assets/img/projects/social-proof-section/image-irene.jpeg",
    alt: "Irene Roberts picture",
    name: "Irene Roberts",
    type: "Verified Buyer",
    review:
      "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
    className: "d:top-4",
  },
  {
    id: 3,
    src: "/assets/img/projects/social-proof-section/image-anne.jpeg",
    alt: "Anne Wallace picture",
    name: "Anne Wallace",
    type: "Verified Buyer",
    review:
      "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
    className: "d:top-8",
  },
];

interface Rating {
  id: number;
  title: string;
  score: number;
  className?: string;
}

const ratings: Rating[] = [
  { id: 1, title: "Rated 5 Stars in Reviews", score: 5 },
  {
    id: 2,
    title: "Rated 5 Stars in Report Guru",
    score: 5,
    className: "d:left-10",
  },
  {
    id: 3,
    title: "Rated 5 Stars in BestTech",
    score: 5,
    className: "d:left-20",
  },
];

interface CustomerReviewProps extends Review {
  className?: string;
}

const CustomerReview = ({
  alt,
  className,
  name,
  review,
  type,
  src,
}: CustomerReviewProps) => {
  const classes = clsx(
    "relative bg-primary-social-magenta py-10 px-8 space-y-6 rounded-lg text-left text-center",
    className
  );

  return (
    <li className={classes}>
      <div className="flex space-x-6">
        <Image
          src={src}
          alt={alt}
          width={44}
          height={44}
          className="rounded-full"
        />
        <div>
          <span className="block text-neutral-social-light-magenta font-bold">
            {name}
          </span>
          <span className="block text-primary-social-pink font-medium">
            {type}
          </span>
        </div>
      </div>
      <blockquote className="text-base text-left text-neutral-social-light-magenta font-medium d:text-xl">
        &quot;{review}&quot;
      </blockquote>
    </li>
  );
};

interface CustomerRatingProps extends Rating {
  className?: string;
}

const CustomerRating = ({ className, score, title }: CustomerRatingProps) => {
  const classes = clsx(
    "flex flex-col relative bg-neutral-social-light-magenta py-5 rounded-xl space-y-4 text-center d:max-w-md d:flex-row d:justify-center d:p-4 d:space-y-0 d:space-x-4",
    className
  );

  return (
    <div className={classes}>
      <span className="flex justify-center space-x-2">
        {[...new Array(score)].map((_, index) => (
          <StarIcon key={index} />
        ))}
      </span>
      <p className="text-primary-social-magenta text-lg font-bold">{title}</p>
    </div>
  );
};

const SocialProofCard = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="py-6 px-4">
        <Link href="/">Back to Projects</Link>
      </nav>
      <div className="max-w-screen-max font-body">
        <div className="max-w-screen-m mx-auto grid items-center gap-12 d:max-w-screen-max d:gap-y-24 d:grid-cols-2 d:grid-rows-2">
          <div className="max-w-md space-y-4 text-center d:text-left">
            <h2 className="text-primary-social-magenta text-5xl font-bold d:text-6xl">
              10,000+ of our users love our products.
            </h2>
            <p className="text-neutral-social-dark-magenta text-lg font-medium">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>

          <section className="d:pr-20">
            <ul className="space-y-4">
              {ratings.map((props) => (
                <CustomerRating key={props.id} {...props} />
              ))}
            </ul>
          </section>

          <section className="d:pb-8 d:col-span-2">
            <ul className="flex flex-col space-y-4 d:flex-row d:space-y-0 d:space-x-6">
              {reviews.map((props) => (
                <CustomerReview key={props.id} {...props} />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default SocialProofCard;
