import ChatComponent from "./ChatComponent";
import Footer from "./Footer";
import Header from "./Header";
import MainCarausel from "./MainCarausel";

const Browse = () => {
    console.log('API Key:', process.env.REACT_APP_OPENAI_API_KEY);
    console.log("Request URL:", "https://api.openai.com/v1/chat/completions");
    return (
        <div>
            <Header />
            <MainCarausel />
            <ChatComponent />
            <Footer />
        </div>
    )
};

export default Browse;