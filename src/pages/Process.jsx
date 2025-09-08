import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {
  ProcessHero,
  ProcessOverview,
  ToolsTechnologies,
  ProcessCTA,
} from "../components/process";

function Process() {
  return (
    <div className="bg-background text-text-primary">
      <Nav />
      <main className="pt-20">
        <ProcessHero />
        <ProcessOverview />
        <ToolsTechnologies />
        <ProcessCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Process;
