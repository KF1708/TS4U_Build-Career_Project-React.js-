import React from "react";
import coreData from "../StaticData/core-values.json";
import NavbarLink from "./NavbarLink";
import summaryData from "../StaticData/courses-summary.json";
import briefSummary from "../StaticData/courses-summary-2.json";
import massageData from "../StaticData/message-data.json";
import Footer from "./footer";
const AboutUs = () => {
  return (
    <div className="aboutus">
      <NavbarLink></NavbarLink>
      <div className="container">
        <div>
          <div className="aboutus-header">
            <h1>About Us</h1>
            <p>
              If you're a recent graduate or job seeker, now's the time to
              jumpstart your career, and we're here to help you get your dream
              job.TS4U.
            </p>
          </div>
          <div className="core-values">
            <h1>Our Core Values</h1>
            <div className="single-core-value">
              {coreData.coreValues.map((value) => (
                <div key={value.id} className="single-value">
                  <div>
                    <img src={value.icon} alt={value.title} />
                  </div>
                  <div>
                    <h3 className="fw-bold">{value.title}</h3>
                  </div>
                  <div>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <div className="massage-data">
            <div className="massage">
              <h2>{massageData.message.title}</h2>
              <br />
              <h3>{massageData.message.description}</h3>
              <br />
              <h4>{massageData.message.programDescription}</h4>
              <br />

              <ul style={{ fontSize: "large" }}>
                {massageData.message.beneficiaries.map((list, i) => (
                  <li key={i}>{list}</li>
                ))}
              </ul>
            </div>
            <div className="massage">
              <h2>{massageData.story.title}</h2>
              <br />
              <h4>{massageData.story.description}</h4>
              <br />
              <p style={{ fontWeight: "normal" }}>{massageData.story.vision}</p>
              <p style={{ fontWeight: "normal" }}>{massageData.story.goal}</p>
              <p style={{ fontWeight: "normal" }}>
                {massageData.story.commitment}
              </p>
              <p style={{ fontWeight: "normal" }}>{massageData.story.belief}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="core-values2">
            <div className="core-singal-value">
              <img
                src={summaryData.courseSummary.thumbnail}
                alt={summaryData.courseSummary.title}
              />
            </div>
            <div>
              <div className="core-singal-value">
                <h2>{summaryData.courseSummary.title}</h2>

                <p>{summaryData.courseSummary.intro}</p>
              </div>
              <div className="core-singal-value">
                {summaryData.courseSummary.sections.map((section) => (
                  <div key={section.id} className="singal-brief-summary">
                    <h3>
                      {section.id}
                      {section.title}
                    </h3>

                    <p>{section.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="brief-summary-header">
            <h1>{briefSummary.courseSummary.title}</h1>
            <h5>{briefSummary.courseSummary.intro}</h5>
          </div>
          <div>
            {briefSummary.courseSummary.agendas.map((agenda) => (
              <div key={agenda.id} className="brief-summary">
                <div className="brief-summary-sections">
                  <h2>
                    {agenda.id}
                    {agenda.title}
                  </h2>
                  <ul style={{ fontSize: "large" }}>
                    {agenda.lists.map((list, i) => (
                      <li key={i}>{list}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img
                    src={agenda.thumbnail}
                    alt={agenda.title}
                    className="brief-summary-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
