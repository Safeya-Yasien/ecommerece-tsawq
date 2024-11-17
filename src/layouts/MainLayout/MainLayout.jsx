import { Footer, Header } from "@components/common";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen ">
      <Header />
      <div className="px-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
