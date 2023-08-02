import React from "react";

export enum LevelProps {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  label = "label",
  big_text = "big_text",
  text = "text",
  small_text = "small_text",
  gray_text = "gray_text",
}

type TypographyProps = {
  level?: LevelProps;
  children: React.ReactNode;
  className?: string;
};

export default function Typography({
  level = LevelProps.text,
  children,
  className = "",
}: TypographyProps) {
  switch (level) {
    case "h1":
      return <h1 className={`h1 ${className}`}>{children}</h1>;
    case "h2":
      return <h2 className={`h2 ${className}`}>{children}</h2>;
    case "h3":
      return <h3 className={`h3 ${className}`}>{children}</h3>;
    case "h4":
      return <h4 className={`h4 ${className}`}>{children}</h4>;
    case "h5":
      return <h5 className={`h5 ${className}`}>{children}</h5>;
    case "label":
      return <label className={`label ${className}`}>{children}</label>;
    case "big_text":
      return <p className={`big_text ${className}`}>{children}</p>;
    case "text":
      return <p className={`text ${className}`}>{children}</p>;
    case "small_text":
      return <p className={`small_text ${className}`}>{children}</p>;
    case "gray_text":
      return <p className={`gray_text ${className}`}>{children}</p>;

    default:
      return <p className={`text ${className}`}>{children}</p>;
  }
}
