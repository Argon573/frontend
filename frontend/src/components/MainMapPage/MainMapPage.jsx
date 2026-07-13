import Footer from '../layouts/footer/Footer.jsx';
import Curtain from "../layouts/curtain/Curtain.jsx";

const MainMapPage = () => {
    return (
        <div className="w-full flex flex-col justify-end pointer-events-auto">

            <Curtain className="absolute bottom-1/5"/>

            <Footer />

        </div>
    );
}

export default MainMapPage;