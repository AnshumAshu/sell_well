import CardComponent from "./CardComponent";

const CardDropDown = ({ card, showItems, setshowIndex }) => {
    const showSubCards = () => {
        setshowIndex();
    }

    return (
        <div>
            <div
                className="m-4 p-4 flex justify-between bg-black text-white rounded-lg hover:shadow-lg hover:shadow-gray-700 cursor-pointer transition-colors duration-300"
                onClick={showSubCards}
            >
                <span className="text-lg md:text-xl font-semibold">{card.title}</span>
                <img 
                    src="https://cdn-icons-png.flaticon.com/128/1665/1665739.png" 
                    alt="down" 
                    className="w-7 h-7 md:w-8 md:h-8"
                />
            </div>
            {showItems && <CardComponent subCards={card.children} />}
        </div>
    );
}

export default CardDropDown;
