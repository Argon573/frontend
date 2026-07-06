import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './leaflet-overrides.css';
import CustomZoomControl from './CustomZoomControl.jsx';
import styles from './customZoomControl.module.scss';

// Координаты центра Кургана: [широта, долгота]
const KURGAN_CENTER = [55.4507, 65.3411];

const LeafletMap = ({
                        initialCenter = KURGAN_CENTER,
                        initialZoom = 13,
                        children,
                    }) => (
    <div className="leaflet" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <MapContainer
            center={initialCenter}
            zoom={initialZoom}
            doubleClickZoom={false}
            className="leaflet-container"
            style={{ width: '100%', height: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <CustomZoomControl className={styles.customZoomControl} />

            {children}
        </MapContainer>
    </div>
);

export default LeafletMap;