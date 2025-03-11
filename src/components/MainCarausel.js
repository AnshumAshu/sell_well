const MainCarausel = () => {
    return (
        <div className="relative pt-24 flex flex-col items-center justify-center">
            <img 
                className="w-full h-auto object-cover" 
                src="https://recycledepot.io/wp-content/uploads/2023/09/bai-2-1024x640.jpg" 
                alt="main-page-bg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-green-950 font-extrabold text-center p-4 rounded-lg shadow-lg">
                    Your Scrap Sell Partner
                </h1>
            </div>
        </div>
    )
};

export default MainCarausel;