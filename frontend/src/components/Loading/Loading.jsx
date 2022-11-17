import React from "react";
import Title from "../titleblock/title/Title";
import LoadingCard from "./LoadingCard";
import LoadingSearchBar from "./LoadingSearchBar";

const Loading = () => {
  return (
    <div className="allcocktails_section-placeholder">
      <Title />
      <div className="list__allcocktails">
        <LoadingSearchBar />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    </div>
  );
};

export default Loading;
