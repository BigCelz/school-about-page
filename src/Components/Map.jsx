import React from "react";
import schoolmap from "../Assets/schoolmap.png";

const Map = () => {
  return (
    <div className="map">
      <div className="container">
        <div className="card map-card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={schoolmap} alt="" className="img-fluid map-img" />
            </div>

            <div className="col-md-8 map-second-col">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 ">
                    <ul className="map-list-group">
                      <li className="mb-3 map-list-head">Visit Our Office at:</li>
                      <li className="map-list-item">Pro Guide School </li>
                      <li className="map-list-item">No 15, Education Guide Avenue</li>
                      <li className="map-list-item">Lagos, Ajah, 101102</li>
                      <li className="map-list-item">Monday - Friday, </li>
                      <li className="map-list-item-date">9:00 AM to 5:00 PM (UTC)</li>
                    </ul>
                  </div>

                  <div className="col-md-6 ">
                    <ul className="map-list-group">
                      <li className="mb-3 map-list-head">Call us at:</li>
                      <li className="map-list-item">+234 7077 234 235</li>
                      <li className="map-list-item">Availability:</li>
                      <li className="map-list-item">Monday - Friday, </li>
                      <li className="map-list-item-date">9:00 AM to 6:00 PM (UTC)</li>
                    </ul>
                  </div>             
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
