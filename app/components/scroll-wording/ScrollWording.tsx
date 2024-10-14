const variety = [
    "Our Variety",
    "Cakes",
    "Bouquets",
    "Baskets",
    "Chocolates",
    "Boxes",
    "Shop Now: www.chocobliss.com"
];

const ScrollWording = () => {
  return (
    <div className='wrapper-words flex items-center justify-center gap-8 bg-white'>
    { variety.map((name, index) => (
        <div key={index} className={`words item${index + 1}`}>
            <h1 className='text-xl font-semibold p-1'> {name} </h1>
        </div>
    )) }
    </div>
  );
};

export default ScrollWording;
