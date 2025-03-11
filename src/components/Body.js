import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import Browse from "./Browse";
import ScarpSell from "./ScarpSell";
import ScarpRate from "./ScarpRate";
import SubCards from "./SubCards";
import Signup from "./Signup";
import SelectAvatar from "./SelectAvatar";
import VendorHome from "./VendorHome";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Browse />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
        {
            path: "/scrap-sell",
            element: <ScarpSell />,
        },
        {
            path: "/scrap-rate",
            element: <ScarpRate />,
        },
        {
            path: "/scrap-rate/sub-cards",
            element: <SubCards />,
        },
        {
            path: "/select-avatar",
            element: <SelectAvatar />,
        },
        {
            path: "/vendor/home",
            element: <VendorHome />,
        },
    ]);
    return (
        <div >
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;