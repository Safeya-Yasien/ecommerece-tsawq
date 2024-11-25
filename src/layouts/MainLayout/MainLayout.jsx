import { Outlet } from "react-router-dom";

import { Header, Footer, ScrollToTop } from "@/components/common";

const MainLayout = () => {
  return (
    <div className="h-screen ">
      <ScrollToTop />
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
