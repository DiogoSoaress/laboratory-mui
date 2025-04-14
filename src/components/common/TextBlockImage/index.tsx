import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import clsx from "clsx";
import css from "./styles.module.css";
import type { DetailedHTMLProps, ImgHTMLAttributes, JSX } from "react";
import type { ButtonProps } from "@mui/material";

type BaseBlock = {
  title: string | JSX.Element;
  text: string | JSX.Element;
  caption?: string;
  link?: Link;
  buttons?: Button[];
  image?: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > & { alt: string };
  items?: Array<Partial<BaseBlock>>;
};

export type Link = {
  title?: string;
  href: string;
};

export type Button = {
  text?: string;
  href: string;
  variant: "button" | "link";
  color?: ButtonProps["color"];
  isDisabled?: boolean;
};

type BlockWithVariant = {
  variant: "image-text" | "text-image";
  mobileVariant?: "image-text" | "text-image";
};

export type TextBlockImageProps = BaseBlock &
  BlockWithVariant & {
    children: React.ReactNode;
  };

const TextBlockImage = ({
  caption,
  title,
  text,
  items,
  variant,
  mobileVariant,
  children,
}: TextBlockImageProps) => {
  return (
    <Container>
      <Grid
        container
        className={clsx(
          variant === "image-text" ? css.imageFirst : css.textFirst,
          mobileVariant === "text-image" ? css.textFirstMobile : null
        )}
        spacing="60px"
        justifyContent="space-between"
      >
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={{ xs: 3, md: 4 }}
        >
          {caption && (
            <Typography variant="caption" component="div">
              {caption}
            </Typography>
          )}
          <Typography variant="h2">{title}</Typography>
          {text && (
            <Typography variant="h5" className={css.textBlock}>
              {text}
            </Typography>
          )}

          {/* Logos */}
          {items ? (
            <div className={css.logos}>
              {items.map(({ image }, index) => (
                <img
                  key={index}
                  src={image?.src || ""}
                  alt={image?.alt || ""}
                  className={css.logo}
                />
              ))}
            </div>
          ) : undefined}
        </Grid>

        <Grid>{children}</Grid>
      </Grid>
    </Container>
  );
};

export default TextBlockImage;
