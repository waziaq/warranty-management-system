import { CContainer } from "@coreui/react";
import { Suspense } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { Outlet } from "@tanstack/react-router";
import React from "react";

const AppContent = () => {
  return (
    <CContainer className="px-4" fluid>
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
