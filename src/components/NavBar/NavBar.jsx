import { useEffect } from 'react';
import CardWidget from '../CardWidget/CardWidget';

export default function NavBar() {
  const menuItems = [
    { name: 'Monitores', href: '#monitores' },
    { name: 'Tarjetas de Video', href: '#tarjetas-de-video' },
    { name: 'Microprocesadores', href: '#microprocesadores' },
  ];

  useEffect(() => {
    const listItem = document.querySelectorAll('#landing-header a');
    const menuBackDrop = document.querySelector('#menu-backdrop');

    listItem.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        const { left, top, width, height } = item.getBoundingClientRect();

        menuBackDrop.style.setProperty('--left', `${left}px`);
        menuBackDrop.style.setProperty('--top', `${top}px`);
        menuBackDrop.style.setProperty('--width', `${width}px`);
        menuBackDrop.style.setProperty('--height', `${height}px`);

        menuBackDrop.style.opacity = '1';
        menuBackDrop.style.visibility = 'visible';
      });

      item.addEventListener('mouseleave', () => {
        menuBackDrop.style.opacity = '0';
        menuBackDrop.style.visibility = 'hidden';
      });
    });

    const headerEl = document.querySelector('#landing-header');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          const color = entry.target.getAttribute('data-header-color');
          headerEl.style.color = color;
        }
      });
    }, observerOptions);

    const sectionElements = document.querySelectorAll('.landing-section');
    sectionElements.forEach((section) => observer.observe(section));
  }, []);

  return (
    <header className="fixed py-3 bg-white text-black px-10 flex justify-between top-0 items-center z-40 shadow-md w-full">
      <span
        style={{ fontFamily: 'Victor Mono' }}
        className="flex flex-grow basis-0"
      >
        <a href="/">XARC</a>
      </span>
      <ul id="landing-header" className="flex justify-center">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="px-[8px] font uppercase font-bold font-dosis rounded py-[4px]"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex gap-1 items-center flex-grow justify-end basis-0">
        <button className="flex gap-1 items-center hover:bg-gray-100 rounded px-1 py-0.5">
          <img src="/search.svg" className="size-5 " alt="Search" />
        </button>
        <button className="flex gap-1 items-center hover:bg-gray-100 rounded px-1 py-0.5">
          <img src="/user.svg" className="size-5" alt="User" />
        </button>
        <CardWidget />
      </div>
      <div
        id="menu-backdrop"
        className="absolute bg-black/5 backdrop-blur-lg rounded translate-x-[var(--left)] translate-y-[var(--top)] left-0 top-0 w-[var(--width)] h-[var(--height)] transition-all duration-500 ease-in-out opacity-0 -z-10"
      ></div>
    </header>
  );
}
