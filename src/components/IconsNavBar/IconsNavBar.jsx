const CardWidget = () => {
  const menuIcons = [
    { src: '/user.svg', alt: 'iconUser' },
    { src: '/search.svg', alt: 'iconSearch' },
    { src: '/shopping-cart.svg', alt: 'iconCart' },
  ];

  return (
    <>
      <div className="hidden lg:flex gap-1 items-center flex-grow justify-end basis-0">
        {menuIcons.map((icons, index) => (
          <button
            key={index}
            className="flex gap-1 rounded-full items-center hover:bg-gray-100 p-[3px]"
          >
            <img src={icons.src} alt={icons.alt} className="size-5" />
          </button>
        ))}
      </div>
      <div className="flex lg:hidden items-center justify-end">
        <img
          src="/menu.svg"
          alt="iconMenu"
          className="size-7 hover:bg-gray-100 p-[3px]"
        />
      </div>
    </>
  );
};

export default CardWidget;
