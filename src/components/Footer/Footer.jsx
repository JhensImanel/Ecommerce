export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="shadow-inset-custom bottom-0 bg-black w-full text-center items-center py-1 fixed sm:flex justify-center text-white">
      <span className="px-2 py-1.5 mt-0">Xarc
        &copy; <span>{currentYear}</span>. Diseñado por {}
        <strong className="font-victor">
          <a href="https://www.linkedin.com/in/jamesimanel/">Jhens</a>
        </strong>
      </span>
    </div>
  );
}
