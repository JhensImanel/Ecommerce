import CardWidget from '../CardWidget/CardWidget';

export default function NavBar() {
  return (
    <>
      <div className="static py-3.5 bg-transparent text-black px-3 flex justify-between items-center border-b border-black shadow-lg">
        <span style={{ fontFamily: 'Victor Mono' }}>
          <a href="/">XARC</a>
        </span>
        <div className="gap-3 flex">
          {['Monitores', 'Tarjetas de Video', 'Microprocesadores'].map(
            (item) => (
              <button
                key={item}
                className="px-2 sm:px-2 sm:py-2 rounded py-0.5 bg-transparent border border-black shadow-md"
              >
                {item}
              </button>
            )
          )}
        </div>
        <CardWidget />
      </div>
    </>
  );
}
