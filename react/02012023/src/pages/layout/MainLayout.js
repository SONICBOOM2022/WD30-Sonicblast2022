import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Outlet} from 'react-router-dom'


function MainLayout () {
    return(
        <>
            <Header />
                <Outlet context ={{user: 'Bianca'}}/>
            <Footer />        
        </>

    )
}

export default MainLayout;