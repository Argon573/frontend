import { Routes, Route } from 'react-router-dom';
import AppShell from '../components/layouts/AppShell.jsx'; // ваша карта на фоне

// Импорт страниц
import MainMapPage from '../components/MainMapPage/MainMapPage.jsx';
import ProfilePage from '../components/ProfilePage/ProfilePage.jsx';
import SettingsPage from '../components/SettingsPage/SettingsPage.jsx';

export function AppRouter() {
    return (
        <Routes>
            {/* Главный родительский роут без пути — он служит чисто лейаутом */}
            <Route element={<AppShell />}>

                {/* '/' — это главная страница, где поверх карты лежат поиск и шторка */}
                <Route path="/" element={<MainMapPage />} />

                {/* '/profile' — страница профиля, которая сменит шторку */}
                <Route path="/profile" element={<ProfilePage />} />

                {/* '/settings' — страница настроек */}
                <Route path="/settings" element={<SettingsPage />} />

            </Route>
        </Routes>
    );
}

//<Route path="/profile" element={<ProfilePage />} />
//<Route path="/settings" element={<SettingsPage />} />