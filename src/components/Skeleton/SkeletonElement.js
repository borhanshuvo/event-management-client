import React from "react";
import "./Skeleton.css";

const SkeletonElement = ({ type }) => {
  const classes = `${type}`;
  return <div className={classes}></div>;
};

export default SkeletonElement;
