import { createFileRoute } from "@tanstack/react-router";
import AppSidebar from "../../components/AppSidebar";
import AppHeader from "../../components/AppHeader";
import AppContent from "../../components/AppContent";

export const Route = createFileRoute("/administrator/_layout")({
  component: () => (
    <>
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100">
          <AppHeader />
          <div className="body flex-grow-1">
            <AppContent />
          </div>
        </div>
      </div>
    </>
  ),
});
