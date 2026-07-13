import LeafletMap from './map/Map.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer.jsx';
import Header from './header/Header.jsx'

function AppShell() {
    return (
        <div className="relative w-screen h-screen overflow-hidden bg-slate-900">


            <div className="absolute inset-0 z-10">
                <LeafletMap />
            </div>

            <Header />

            <div className="absolute inset-0 z-20 pointer-events-none">

                <Outlet />
            </div>

            <Footer />

        </div>
    );
}

export default AppShell;