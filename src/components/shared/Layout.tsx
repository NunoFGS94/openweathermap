import React from "react";
import "./Layout.css";

type LayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return <div className="content">{children}</div>;
}
