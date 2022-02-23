import React from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router";
import SkeletonCard from "../../Skeleton/SkeletonCard";
import "./Service.css";

const Service = () => {
  const history = useHistory();

  const { data, isLoading } = useQuery("services", () =>
    fetch("https://rocky-plains-06049.herokuapp.com/serviceList").then((res) =>
      res.json()
    )
  );

  if (isLoading)
    return (
      <>
        <div className="d-flex justify-content-center">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {[1, 2, 3].map((index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      </>
    );

  const serviceId = (id) => {
    history.push(`dashboard/book/${id}`);
  };

  const headingColor = { color: "#3A4256" };
  const textColor = { color: "#3A3056" };

  return (
    <div id="service" className="container pt-5 pb-5">
      <div className="row pt-5 pb-5">
        <h4 className="text-center pb-3" style={textColor}>
          <u>Services</u>
        </h4>
        <h1 className="text-center pb-3" style={headingColor}>
          You have an event to plan and <br /> we have the solutions
        </h1>
        <h5 className="text-center pb-5" style={textColor}>
          HERE IS HOW WE CAN HELP YOU
        </h5>
        {data?.map((service) => (
          <div key={service._id} className="col-md-4 pb-3">
            <div className="card card-style">
              <div className="card-header">
                <img
                  src={`data:image/png;base64,${service.image.img}`}
                  style={{ width: "100%", height: "200px" }}
                  className="img-fluid image"
                  alt=""
                />
              </div>
              <div className="card-body text-center style={{ height: '200px' }}">
                <h3 className="card-title" style={headingColor}>
                  {service.title}
                </h3>
                <p className="card-text" style={textColor}>
                  {service.description}
                </p>
                <p style={textColor}>
                  Price : <b>{service.price} Taka</b>
                </p>
              </div>
              <div className="card-footer text-center">
                <button className="bton" onClick={() => serviceId(service._id)}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
