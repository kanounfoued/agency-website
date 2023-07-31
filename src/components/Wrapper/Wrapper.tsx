import React from "react";

type WrapperProps = {
  children: React.ReactNode;
  className: string;
};

export default function Wrapper({ children, className }: WrapperProps) {
  return <div className={className}>{children}</div>;
}
