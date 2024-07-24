import Image from "next/image";

interface Props {
  src?: string;
  alt: string;
  className?: React.StyleHTMLAttributes<HTMLImageElement>["className"];
  width: number;
  height: number;
  style?: React.CSSProperties;
  priority?: boolean;
}

export const ProductImage = ({ src, alt, className, width, height, style, priority }: Props) => {
  const localSrc = src
    ? src.startsWith("http") // https://example.com/image.jpg
      ? src
      : `/products/${src}` // /products/image.jpg
    : "/imgs/placeholder.jpg";

  return (
    <Image
      src={localSrc}
      className={className}
      alt={alt}
      width={width}
      height={height}
      style={{
        objectFit: "cover",
        width: "auto",
        height: "100%",
        ...style, // Merge additional styles
      }}
      priority={priority}
    />
  );
};
