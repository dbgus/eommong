import { Grid, Grommet } from "grommet";
import React, { ReactNode } from "react";
import { SideBar } from "./side";
interface LayoutProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Layout({ children, isOpen, onClose }: LayoutProps) {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "row" }}>
      <SideBar isOpen={isOpen} onClose={onClose} />
      <div style={{ width: "100%" }}>{children}</div>
    </div>
  );
}
