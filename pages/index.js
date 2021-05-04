import { useState } from "react";
import FullSlider from "components/FullSlider";
import CategoryPanel from "components/CategoryPanel";
import Card from "components/Card";
export default function Home() {
  return (
    <div className="h-screen">
      <FullSlider />
      <div className="container md:mx-auto">
        <CategoryPanel />
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8 auto-rows-max mx-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
