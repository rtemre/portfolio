import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { WorkHeader, WorkFilters, WorkGrid, WorkCTA } from "../components/work";

function Work() {
  return (
    <div className="bg-background text-text-primary">
      <Nav />
      <main className="pt-20">
        <WorkHeader />
        <WorkFilters />
        <WorkGrid />
        <WorkCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Work;
