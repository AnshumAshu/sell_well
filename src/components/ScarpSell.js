import Header from "./Header";
import ManualBox from "./ManualBox";
import Footer from "./Footer";

const ScarpSell = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow flex justify-center items-center p-32 sm:px-8">
                <ManualBox />
            </div>
            <Footer />
        </div>
    );
}

export default ScarpSell;
