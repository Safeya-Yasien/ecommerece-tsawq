const CheckoutFooter = () => {
  return (
    <footer className="bg-[#141D2E] py-6 px-12 text-[#A8A8A8] font-normal text-[16px] flex items-center justify-between flex-row-reverse mt-auto">
      <p>© 2024 Tasawq. All rights reserved.</p>
      <ul className="flex items-center gap-4">
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
