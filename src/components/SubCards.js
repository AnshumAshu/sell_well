import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import CardComponent from "./CardComponent";

const SubCards = () => {
    const location = useLocation();
    const { name,cards } = location.state || { name: "No Name Provided",cards: [] };
    return (
        <div>
            <Header />
            <div className="p-32">
                <h1 
                    className="w-fit text-4xl p-4 bg-black text-white rounded-xl">
                        {name}
                </h1>
                <div 
                    className="m-4 p-4 flex flex-wrap justify-center gap-4">
                    {cards.map((card, index) => (<CardComponent key={index} card={card} />))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SubCards;
