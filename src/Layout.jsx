import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import useToken from "./hooks/useToken";

const Layout = () => {
    useToken()
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};


export default Layout