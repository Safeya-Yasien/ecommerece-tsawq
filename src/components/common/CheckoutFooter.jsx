const CheckoutFooter = () => {
  return (
    <footer className="bg-[#141D2E] py-4 px-12 text-[#A8A8A8] font-normal text-[16px] flex items-center justify-center md:justify-between flex-row-reverse mt-auto ">
      <p className="" dir="ltr">© 2024 Tasawq. All rights reserved.</p>
      <ul className="items-center gap-4 hidden md:flex ">
        <li>
          <a href="#" className="underline">
            Privecy Policy
          </a>
        </li>
        <li>
          <a href="#" className="underline">
            {" "}
            Terms of Service
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default CheckoutFooter;
