import Header from "./Header";
import SearchRate from "./SearchRate";
import Footer from "./Footer";

const RateShimmer = () => {
    return (
        <div>
            <Header />
            <SearchRate />
            <div className="w-2/3 m-auto left-0 right-0 p-4 mt-4">
                <div className="loading m-4 p-8 flex justify-between bg-gray-400 rounded-lg cursor-pointer transition-colors duration-300"></div>
                <div className="loading m-4 p-8 flex justify-between bg-gray-400 rounded-lg cursor-pointer transition-colors duration-300"></div>
                <div className="loading m-4 p-8 flex justify-between bg-gray-400 rounded-lg cursor-pointer transition-colors duration-300"></div>
                <div className="loading m-4 p-8 flex justify-between bg-gray-400 rounded-lg cursor-pointer transition-colors duration-300"></div>
                <div className="loading m-4 p-8 flex justify-between bg-gray-400 rounded-lg cursor-pointer transition-colors duration-300"></div>
            </div>

            <ul className="m-4 p-4 text-[#0cc0df] text-lg">
                <li>Notes</li>
                <ol className="mx-4 px-4">
                    <li>- The prices may vary with fluctuation in Scrap Market.</li>
                    <li>
                        - Prices may be different for bulk pickups. Call us at +91-8252587109
                        to get a quote for bulk pickup.
                    </li>
                </ol>
            </ul>
            <Footer />
        </div>
    )
}

export default RateShimmer;