import React from "react";
import { useParams } from "react-router-dom";
import data from "../StaticData/jobs_details_data.json";
import Footer from "./footer";
import NavbarLink from "./NavbarLink";

const SingleJob = () => {
  const { id } = useParams();
  const singleJob = data.jobDetails.find((job) => job.id === parseInt(id));

  console.log(id);

  return (
    <div style={{ backgroundColor: "rgb(236, 241, 228)" }}>
      <NavbarLink></NavbarLink>
      <div className="container p-2">
        <div>
          <h1 style={{ textAlign: "center", padding: "10px" }}>
            {singleJob.title}{" "}
          </h1>
          <h4>{singleJob.company}</h4>
          <img src={singleJob.icon} alt={singleJob.title} />
        </div>
        <div>
          <h5>{singleJob.description}</h5>
          <p>
            <strong>Location:</strong> {singleJob.location}
          </p>
          <p>
            <strong>Job Type:</strong> {singleJob.jobType}
          </p>
          <ul>
            {singleJob.responsibilities.map((list, i) => (
              <li key={i}>{list}</li>
            ))}
          </ul>
          <ul>
            {singleJob.qualifications.map((list, i) => (
              <li key={i}>{list}</li>
            ))}
          </ul>
          <p>
            <strong>Vacancy:</strong> {singleJob.vacancy}
          </p>
          <p>
            <strong>Office Houres:</strong> {singleJob.officeHours}
          </p>
          <p>
            <strong>Salary Review:</strong> {singleJob.salaryReview}
          </p>
          <p>
            <strong>Festival Bonus:</strong> {singleJob.festivalBonus}
          </p>
          <p>
            <strong>Salary:</strong> {singleJob.salary}
          </p>

          <p>
            <strong>Skills:</strong> {singleJob.skills}
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingleJob;
