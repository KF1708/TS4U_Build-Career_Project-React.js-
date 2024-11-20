import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = () => {
  return (
    <div className="navbar">
      <div className=" container">
        <div className="">
          <h3>
            <Link
              to={"/"}
              className=""
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              TS4U
            </Link>
          </h3>
        </div>

        <div>
          <ul className="navbar-ul">
            <li style={{ listStyle: "none" }}>
              <Link
                to={"/"}
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                to={"/career"}
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Career
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                to={"/aboutUs"}
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarLink;
