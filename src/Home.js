import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div class="first home">
      <div className="welcome ">
        <h1 className="main"> Welcome </h1>

        <button className="buttons" onClick={() => navigate("/bucket")}>
          Project1
        </button>

        <button
          className="buttons"
          onClick={() => navigate("/hierarchicalList")}
        >
          Project2
        </button>

        <button className="buttons" onClick={() => navigate("/infiniteScroll")}>
          Project3
        </button>
      </div>
    </div>
  );
};

export default Home;
