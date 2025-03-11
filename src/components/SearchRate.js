const SearchRate = ({cards,setfilteredCards}) => {
    return (
        <div className="px-4 sm:px-16 md:px-32 lg:px-48 xl:px-72 pt-20 sm:pt-24 md:pt-32 lg:pt-40 lg:pb-10 flex flex-col items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0cc0df] font-extrabold">
                Scrap Rate
            </h1>
            {/* <input 
                type="text" 
                className="p-2 w-2/3 sm:w-3/4 md:w-4/5 lg:w-11/12 rounded-full bg-black text-white placeholder-white shadow-lg shadow-black hover:text-lg"
                onChange={(e) => {
                    setfilteredCards(cards.filter((card) => card.name.toLowerCase().includes(e.target.value)));
                }}
                placeholder="Type to Search"
            /> */}
        </div>
    )
};

export default SearchRate;