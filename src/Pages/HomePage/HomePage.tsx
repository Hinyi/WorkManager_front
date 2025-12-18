import { About } from "@/components/HomePage/about/About";
import Hero from "@/components/HomePage/Hero";
import PageSection from "@/components/HomePage/PageSection";
import ProductViewer from "@/components/HomePage/ProductViewer";
import React from "react";

const HomePage = () => {
  return (
    // <div>HomePage</div>
    <div className="flex-col">
      <Hero />
      <ProductViewer />
      <PageSection />
    </div>
  );
};

export default HomePage;
