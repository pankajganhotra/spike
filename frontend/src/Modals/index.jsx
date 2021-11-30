import React, { Suspense } from "react";
// import Fallback from "../Util/Fallback";

const AddTaskModal = React.lazy(() => import("./AddTaskModal"));

const Modals = () => {
  return (
    <div className="modals-container">
      <AddTaskModal />
    </div>
  );
};

export default Modals;
