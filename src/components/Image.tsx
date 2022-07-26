import type { ImageProps as NextImageProps } from "next/future/image";

import NextImage from "next/future/image";

interface ImageProps extends NextImageProps {
  className?: string;
}

export const Image = (props: ImageProps) => <NextImage {...props} />;
