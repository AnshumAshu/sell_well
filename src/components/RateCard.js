import CardDropDown from "./CardDropDown";
import { useState } from "react";

const RateCard = ({cardsInfo}) => {
    const [showIndex,setshowIndex] = useState({value:false,idx:null});
    return (
        <div className="w-2/3 m-auto left-0 right-0 p-4 mt-4">
            {
                cardsInfo.map((card, index) => 
                    <CardDropDown 
                        key={card.id} 
                        card={card}  
                        setshowIndex={() => setshowIndex({value:!(showIndex.idx===index && showIndex.value),idx:index})}
                        showItems={index===showIndex.idx && showIndex.value}
                    />
                )
            }
        </div>
    )
};

export default RateCard;