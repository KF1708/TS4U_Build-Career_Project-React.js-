import React from "react";
import data from "../StaticData/career-data.json";
import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import Footer from "./footer";
const Career = () => {
  console.log(data);

  return (
    <div>
      <NavbarLink></NavbarLink>
      <div className="container">
        <div className="career-header">
          <h1 className="fw-bold p-2 m-2">Build Career</h1>
          <p>Get your dream job by applying.</p>
        </div>
        <div className="">
          <div className="job-section">
            {data.jobs.map((job) => (
              <div key={job.id}>
                <Link to={`/job/${job.id}`} style={{ textDecoration: "none" }}>
                  <div className="singalejob-section">
                    <img src={job.icon} alt={job.title} />
                    <div>
                      <p>Job title:{job.title}</p>
                      <p>Job type:{job.type}</p>
                      <p>Job location:{job.location}</p>
                      <p>Job skills:{job.skills}</p>
                    </div>

                    <button className="applynow-btn">Apply Now</button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Career;
