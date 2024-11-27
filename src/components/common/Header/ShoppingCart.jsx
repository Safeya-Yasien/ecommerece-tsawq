import { CartItem } from "@/components/ecommerece";
import { useCart } from "@/context/cart";

import { CiShoppingCart } from "react-icons/ci";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const ShoppingCart = () => {
  const {
    cartItems,
    getCartTotal,
    isCartDrawerOpen,
    openCartDrawer,
    closeCartDrawer,
  } = useCart();

  return (
    <Sheet
      className="!w-[85%]"
      open={isCartDrawerOpen}
      onOpenChange={isCartDrawerOpen ? closeCartDrawer : openCartDrawer}
    >
      <SheetTrigger asChild className="!w-[90%]">
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
      <SheetContent side="left">
        <SheetHeader className="!flex !flex-row !justify-between items-center border-b border-b-[#E5E9F1] !text-start pb-2">
          <SheetTitle>
            <span className="font-bold text-[26px]">السلة </span>{" "}
            <span className="font-normal text-[20px] text-[#393948]">
              ({cartItems.length})
            </span>
          </SheetTitle>
          <SheetDescription className="sr-only">
            هنا يمكنك مراجعة العناصر في سلتك وإتمام عملية الشراء.
          </SheetDescription>

          <SheetClose className="!mt-0">
            <button className="">
              <AiOutlineClose />
            </button>
          </SheetClose>
        </SheetHeader>

        <div className="grid gap-4 py-8">
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
              "flex items-center border-t border-t-[#E5E9F1] mt-4 pt-4 !justify-between text-[#3A4353] "
            }
          >
            <span className="font-bold text-[16px] md:text-[20px]">
              إجمالي المبلغ:
            </span>
            <span className="font-bold text-lg md:text-[22px]">
              {getCartTotal()}ج
            </span>
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
