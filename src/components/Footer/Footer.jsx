export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bottom-0 w-full bg-transparent text-black text-center items-center py-1.5 fixed sm:flex justify-center border-t border-black">
        <span className="px-2 py-1.5 mt-0">
          &copy; <span>{currentYear}</span> Tienda Xarc. Diseñado por {}
          <strong>
            <a href="https://www.linkedin.com/in/jamesimanel/">Jhens</a>
          </strong>
        </span>
      </div>
    </>
  );
}
