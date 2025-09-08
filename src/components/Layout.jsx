import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="bg-background text-text-primary">
      <Nav />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
