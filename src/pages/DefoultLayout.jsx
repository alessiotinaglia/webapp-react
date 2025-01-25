import Header from "../components/header/HeaderComponent";
import Footer from "../components/FooterComponent";
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}