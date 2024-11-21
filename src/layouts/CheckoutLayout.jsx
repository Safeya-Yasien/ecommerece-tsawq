import { CheckoutFooter, CheckoutHeader } from "@components/common";
import { Outlet } from "react-router-dom";

const CheckoutLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <CheckoutHeader />
      <main>
        <Outlet />
      </main>
      <CheckoutFooter />
    </div>
  );
};
export default CheckoutLayout;
