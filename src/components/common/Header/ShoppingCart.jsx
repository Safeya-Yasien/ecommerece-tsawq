import { CartItem } from "@/components/ecommerece";
import { useCart } from "@/context/cart";

import { CiShoppingCart } from "react-icons/ci";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, getCartTotal, isCartDrawerOpen, closeCartDrawer } =
    useCart();

  return (
    <Sheet open={isCartDrawerOpen} onOpenChange={closeCartDrawer}>
      <SheetTrigger asChild>
        <Button className="relative text-[#5F6377] bg-transparent hover:bg-transparent text-2xl hover:text-custom-blue">
          <CiShoppingCart size={24} className="!w-6 !h-6 " />
          <span
            className="font-medium text-xs text-white bg-[#E74747] w-[21px] h-[21px] rounded-full flex items-center justify-center
          absolute -top-1 right-2"
          >
            {cartItems.length}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b border-b-[#E5E9F1]">
          <SheetTitle>
            السلة{" "}
            <span className="font-normal text-[20px] text-[#393948]">
              ( {cartItems.length})
            </span>
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              showTrashIcon={true}
              showQuantityControls={true}
              showItemsQuantity={false}
              item={item}
            />
          ))}
          <div
            className={
              "flex items-center border-t border-t-[#E5E9F1] mt-4 pt-4 !justify-between text-[#3A4353] font-bold text-[22px]"
            }
          >
            <span className="">إجمالي السلة:</span>
            <span className="">{getCartTotal()}ج</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <SheetFooter className="w-full">
            <SheetClose asChild>
              <Link
                to="/checkout"
                className=" w-full bg-custom-blue text-white rounded-[40px] flex items-center justify-center font-bold text-sm md:text-lg
                px-4 py-3 md:py-2 whitespace-nowrap"
              >
                إتمام الشراء
              </Link>
            </SheetClose>
          </SheetFooter>

          <SheetFooter className="">
            <SheetClose asChild>
              <Button
                className="w-full bg-white text-custom-blue rounded-[40px] flex items-center justify-center font-bold text-lg border border-custom-blue !ml-0
                hover:bg-custom-blue hover:text-white"
              >
                متابعة التسوق
              </Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default ShoppingCart;
