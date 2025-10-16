import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
export default function Layout(
    // { children }
){
    return(
        <>
        <div>
            <div className=" min-h-screen flex justify-content-between" >
                <Header/>
                <main style={{margin:"0 auto"}} >
                    {/* {children} */}
                    <Outlet/>
                    </main>
            </div>
            {<Footer/>}
        </div>
        </>
    )
}