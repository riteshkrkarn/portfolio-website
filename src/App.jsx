import React from "react";
import HomePage from "./components/HomePage";
import SkillsPage from "./components/SkillsPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ContactPage from "./components/ContactPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Sidebar from "./components/SideBar";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Sidebar />
          <HomePage />
        </div>
      ),
    },
    {
      path: "/skills",
      element: (
        <div>
          <Sidebar />
          <SkillsPage />
        </div>
      ),
    },
    {
      path: "/projects",
      element: (
        <div>
          <Sidebar />
          <ProjectsPage />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <Sidebar />
          <ContactPage />
        </div>
      ),
    },
  ]);
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
};

export default App;
