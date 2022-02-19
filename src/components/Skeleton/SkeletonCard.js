import React from "react";
import "./Skeleton.css";
import SkeletonElement from "./SkeletonElement";

const SkeletonCard = () => {
  return (
    <div className="col-md-4">
      <div className="card skeleton">
        <div className="card-header">
          <SkeletonElement type="skeleton-thumbnail" />
        </div>
        <div className="card-body">
          <SkeletonElement type="skeleton-title" />
          <SkeletonElement type="skeleton-text" />
        </div>
        <div className="card-footer">
          <SkeletonElement type="skeleton-title" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
