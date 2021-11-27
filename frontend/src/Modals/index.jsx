import React, { Suspense } from "react";
import Fallback from "../Util/Fallback";

const AddTaskModal = React.lazy(() => import("./AddTaskModal"));

const Modals = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <AddTaskModal />
    </Suspense>
  );
};

export default Modals;
