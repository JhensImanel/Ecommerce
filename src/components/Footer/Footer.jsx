const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black w-full text-center py-2 sm:flex justify-center text-white text-sm items-center">
      <span className="pl-2 pr-[3.5px] py-1.5 mt-0 font-quick">
        Xarc &copy; {currentYear}. Diseñado por
      </span>
      <span className="font-victor font-semibold pt-[0.8px]">
        <a href="https://www.linkedin.com/in/jamesimanel/">Jhens</a>
      </span>
    </div>
  );
};

export default Footer;
