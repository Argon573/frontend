import LeafletMap from './map/Map';
import { Outlet } from 'react-router-dom';

function AppShell() {
    return (
        <div className="relative w-screen h-screen overflow-hidden bg-slate-900">


            <div className="absolute inset-0 z-10">
                <LeafletMap />
            </div>

            <div className="absolute inset-0 z-20 pointer-events-none">

                <Outlet />
            </div>

        </div>
    );
}

export default AppShell;