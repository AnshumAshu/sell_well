import { useState,useEffect } from "react";

const useCardsList = () => {
    const [cardsInfo, setCardsInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://scrapuncle.w3api.net/v1/rate-list?children=1");
            const json = await response.json();
            // console.log(json);
            setCardsInfo(json.data);
        };
        fetchData();
    }, []);
    return cardsInfo;
}

export default useCardsList;