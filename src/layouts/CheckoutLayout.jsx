import { CheckoutFooter, CheckoutHeader } from "@components/common";
import { Outlet } from "react-router-dom";

const CheckoutLayout = () => {
  return (
    <div className="h-screen">
      <CheckoutHeader />

      <main className="px-12 py-6">
        <Outlet />
      </main>

      <CheckoutFooter />
    </div>
  );
};
export default CheckoutLayout;
