import { Footer, Header } from "@components/common";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen ">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
