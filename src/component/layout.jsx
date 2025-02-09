import React from "react";
import Header from "./header";
import Footer from "./footer";

function DefaultLayout({ children }) {
  return (
    <div className="flex max-h-screen flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
