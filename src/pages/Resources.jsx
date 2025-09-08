import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {
  ResourcesHero,
  ResourcesGrid,
  ResourcesCTA,
} from "../components/resources";

function Resources() {
  return (
    <div className="bg-background text-text-primary">
      <Nav />
      <main className="pt-20">
        <ResourcesHero />
        <ResourcesGrid />
        <ResourcesCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Resources;
