import React from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import VerticalNav from "../components/VerticalNav";

function Home() {
  return (
    <>
      <Header />
      <main className="body">
        <VerticalNav />
        <Dashboard />
      </main>
    </>
  );
}

export default Home;
