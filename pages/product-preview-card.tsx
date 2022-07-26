import type { ReactNode } from "react";
import type { ImageProps as NextImageProps } from "next/future/image";

import { Image, Link } from "../src/components";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  const classes = ["font-display rounded-lg px-16 py-3 md:px-4", className]
    .join(" ")
    .trim();
  return <button className={classes}>{children}</button>;
};

interface CategoryProps {
  children: ReactNode;
  className?: string;
}

export const Category = ({ children, className }: CategoryProps) => {
  const classes = [
    "text-sm text-neutral-dark-grayish-blue font-display tracking-widest uppercase md:px-4",
    className,
  ]
    .join(" ")
    .trim();

  return <p className={classes}>{children}</p>;
};

interface DescriptionProps {
  children: ReactNode;
  className?: string;
}

export const Description = ({ children, className }: DescriptionProps) => {
  const classes = [
    "text-neutral-dark-grayish-blue font-display text-sm md:px-4 md:text-md md:leading-relaxed",
    className,
  ]
    .join(" ")
    .trim();

  return <p className={classes}>{children}</p>;
};

interface PriceProps {
  children: ReactNode;
  className?: string;
}

export const Price = ({ children, className }: PriceProps) => {
  const classes = ["", className].join(" ").trim();

  return <p className={classes}>{children}</p>;
};

interface ProductImageProps extends NextImageProps {
  className?: string;
}

export const ProductImage = ({
  alt,
  className,
  ...props
}: ProductImageProps) => {
  const classes = ["rounded-t-lg md:rounded-r-none md:rounded-l-lg", className]
    .join(" ")
    .trim();

  return <Image {...props} alt={alt} className={classes} />;
};

const ProductPreviewCard = () => {
  return (
    <div className="">
      <nav className="py-6 px-4">
        <Link href="/">Back to Projects</Link>
      </nav>
      <div className="bg-primary-cream flex h-screen justify-center items-center">
        <div className="max-w-screen-mobile mx-auto p-6 md:max-w-screen-md">
          <div className="bg-neutral-white rounded-lg md:grid md:grid-cols-2">
            <ProductImage
              src="/assets/img/projects/product-preview-card/product-mobile.jpg"
              alt="Perfume bottle"
              width={480}
              height={686}
              className="md:hidden"
            />
            <ProductImage
              src="/assets/img/projects/product-preview-card/product-desktop.jpg"
              alt="Perfume bottle"
              width={600}
              height={900}
              className="hidden md:block h-full"
            />
            <div className="p-5 space-y-4 md:space-y-10">
              <Category>Perfume</Category>
              <h2 className="text-neutral-dark-blue text-3xl font-bold font-body md:text-5xl md:px-4">
                Gabrielle Essence Eau De Parfum
              </h2>
              <Description>
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </Description>
              <div className="flex space-x-3 md:px-4 md:space-x-6">
                <Price className="text-primary-dark-cyan text-3xl font-body font-bold md:text-4xl">
                  $149.99
                </Price>
                <Price className="text-neutral-dark-grayish-blue text-sm line-through self-center">
                  $169.99
                </Price>
              </div>
              <div className="flex justify-center py-2 bg-primary-dark-cyan text-neutral-white font-body font-medium rounded-lg space-x-2 md:px-4">
                <Image
                  width={24}
                  height={24}
                  src="/assets/icons/projects/product-preview-card/cart.svg"
                  alt="Cart icon"
                  className="self-center w-6 h-6"
                />
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewCard;
