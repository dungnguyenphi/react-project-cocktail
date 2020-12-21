import React from "react";
import CockTailList from "../components/CockTailList";
import SearchForm from "../components/SearchForm";
function Home() {
  return (
    <main>
      <SearchForm />
      <CockTailList />
    </main>
  );
}

export default Home;
