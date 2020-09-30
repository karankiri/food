import Header from "../header";
import React from "react";

export default function Layout({ children, page }) {
  return (
    <div className="layout-container">
      <Header page={page} />
      {children}
    </div>
  );
}
