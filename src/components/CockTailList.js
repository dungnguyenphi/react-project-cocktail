import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
function CockTailList() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) return <Loading />;
  if (cocktails.length < 1) {
    return (
      <div>
        <h1>No cocktails matched your criteria</h1>
      </div>
    );
  }

  return (
    <section className="cocktails-list">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail, index) => {
          return <Cocktail key={index} {...cocktail} />;
        })}
      </div>
    </section>
  );
}

export default CockTailList;
