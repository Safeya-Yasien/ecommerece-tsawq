import { Outlet } from "react-router-dom";

import { Header, Footer, ScrollToTop } from "@/components/common";
import { Toaster } from "@/components/ui/toaster";

const MainLayout = () => {
  return (
    <div className="h-screen ">
      <ScrollToTop />
      <Header />
      <main className="">
        <Toaster />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
