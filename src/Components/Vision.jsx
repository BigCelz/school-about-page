import React from "react";
import aboutimgi from "../Assets/aboutimgi.png";
import aboutimgiii from "../Assets/aboutimgiii.png";
import aboutimgii from "../Assets/aboutimgii.png";

const Vision = () => {
  return (
    <div className="vision">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="vision-head">Our Vision</h2>

            <div className="d-flex vision-span-p-content">
              <div>
                <p className="vision-number">1</p>
              </div>

              <div className="vision-small-col-ii">
                <p className="vision-p-head ">
                  Authorization of Educational Choices
                </p>

                <p className="vision-p-ii">
                  We aim to simplify the decision-making process by offering
                  detailed school profiles, reviews, and expert insights,
                  enabling parents to make confident choices for their child’s
                  education.
                </p>
              </div>
            </div>

            <div className="d-flex vision-span-p-content">
              <div>
                <p className="vision-number">2</p>
              </div>

              <div className="vision-small-col-ii">
                <p className="vision-p-head ">High Quality Support</p>

                <p className="vision-p-ii">
                  We aim to bridge the gap between students and top-tier tutors,
                  ensuring every child has access to personalized learning
                  opportunities.
                </p>
              </div>
            </div>

            <div className="d-flex vision-span-p-content">
              <div>
                <p className="vision-number">3</p>
              </div>

              <div className="vision-small-col-ii">
                <p className="vision-p-head ">
                  Expansion in Educational Institution
                </p>

                <p className="vision-p-ii">
                  By offering visibility to a wide audience of prospective
                  students and parents, we help educational institutions enhance
                  their reputation, increase enrollment, and establish a strong
                  presence in their communities.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 vision-second-coll-ii">
            <div className="row">
                <div className="col-md-6">
                    <img src={aboutimgi} alt="" className="img-fluid img-top mb-3  vision-imgg-top-bottom" />
                    <img src={aboutimgiii} alt="" className="img-fluid img-bottom vision-imgg-top-bottom" />
                </div>

                <div className="col-md-6">
                    <img src={aboutimgii} alt="" className="img-fluid img-big vision-imgg-bigg" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
