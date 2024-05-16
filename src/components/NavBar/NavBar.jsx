import CardWidget from '../CardWidget/CardWidget';

const NavBar = () => {
  return (
    <>
      <div className="py-3.5 bg-zinc-700 text-white px-3 flex justify-between items-center">
        <span>LOGO</span>
        <div className="gap-3 flex">
          <button className='px-2 rounded py-0.5 bg-slate-950'>Monitores</button>
          <button className='px-2 rounded py-0.5 bg-slate-950'>Tarjetas de Video</button>
          <button className='px-2 rounded py-0.5 bg-slate-950'>Microprocesadores</button>
        </div>
        <CardWidget />
      </div>
    </>
  );
};

export default NavBar;
