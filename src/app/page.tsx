
import React from 'react';
import { Interaction } from "@/components/charts";

export default async function Home() {
  return (
    <main className="w-full min-h-screen max-w-5xl mx-auto flex flex-col items-center ">
      <div className="w-full  p-4 mt-10 mb-4">
        <Interaction/>
      </div>
      <div className="w-full bg-green-500 p-4">Div 2</div>
    </main>
  );
}
