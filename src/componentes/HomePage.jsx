import React from "react";
import "../styles/style.css";
import NavbarLink from "./NavbarLink";
import Footer from "./footer";

const HomePage = () => {
  return (
    <div>
      <NavbarLink></NavbarLink>
      <div className="home-page">
        <div className="container">
          <img src="../public/images/download.png" alt="ts4u image" />
          <h2>
            Six to Twelve Weeks, Six Figure Earnings, Private Bootcamp, and Join
            Anytime!
          </h2>
          <br></br>
          <h2>A great podcast of TS4U’s Innovative Bootcamp</h2>
          <br></br>
          <h2>
            We provide extensive features and support for the candidate
            throughout the bootcamp to get job ready.
          </h2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
