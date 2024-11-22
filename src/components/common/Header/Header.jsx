import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MobileMenu } from "@components/ecommerece";
import { Logo } from "..";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { useMemo } from "react";
import NavLinkItem from "./NavLinkItem";

const Header = () => {
  const navLinks = useMemo(
    () => [
      { to: "/", label: "الصفحة الرئيسية" },
      { to: "products-list", label: "منتجاتنا" },
      { to: "/about", label: "معلومات عنا" },
      { to: "/contact", label: "تواصل معنا" },
    ],
    []
  );

  return (
    <header className="h-24 flex items-center justify-between border-b border-[#EBEEFF] px-4 md:px-12">
      <div className="flex items-center gap-4">
        {/* mobile menu */}
        <MobileMenu />
        {/* logo */}
        <div className="h-full flex items-center ">
          <Logo isLogoWhite={false} />
        </div>
      </div>

      {/* links */}
      <nav className="hidden lg:flex">
        <ul className="flex items-center gap-10">
          {navLinks.map(({ to, label }) => (
            <NavLinkItem key={to} to={to} label={label} />
          ))}
        </ul>
      </nav>

      {/* icons */}
      <div className="flex items-center gap-4">
        <button className="text-[#5F6377]" aria-label="Search">
          <CiSearch size={24} />
        </button>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="text-[#5F6377] bg-transparent hover:bg-transparent text-2xl ">
              {" "}
              <CiShoppingCart size={24} className="!w-6 !h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                السلة <span>(1)</span>
              </SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
