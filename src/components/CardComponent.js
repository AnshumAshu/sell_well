const CardComponent = ({ subCards }) => {
    return (
        <div className="flex flex-wrap justify-center items-center p-4">
            {subCards.map((card, index) => (
                <div
                    key={index}
                    className="m-4 p-4 w-80 h-80 flex flex-col justify-between items-center bg-gray-500 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black cursor-pointer transition-colors duration-300"
                >
                    <img
                        className="w-3/4 h-24 object-cover rounded-full"
                        src={card.icon}
                        alt="scrap-img"
                    />
                    <div className="flex-1 flex flex-col justify-between w-full overflow-y-auto p-2">
                        <div className="text-center mb-2">
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold">{card.title}</h3>
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl text-white">Price: ₹{card.unit_price}</h4>
                        </div>
                        <div className="text-center">
                            {/* Additional content if needed */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardComponent;
