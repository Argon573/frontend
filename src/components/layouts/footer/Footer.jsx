import { useState, useRef } from 'react';
import NavBar from './NavBar/NavBar.jsx';
import Categories from "./Categories/Categories.jsx";
import SearchField from "./SearchField.jsx";
import Afisha from "../../Afisha/Afisha.jsx";

const Footer = () => {
    // Высота шторки по умолчанию (в пикселях) — пусть стартует с раскрытой (например, 320px)
    const [height, setHeight] = useState(320);
    const [isDragging, setIsDragging] = useState(false);

    const startY = useRef(0);
    const startHeight = useRef(0);

    // Определяем пороги (точки привязки) в зависимости от высоты экрана
    const MIN_HEIGHT = 200;  // Только NavBar
    const MID_HEIGHT = 420; // NavBar + Категории
    const MAX_HEIGHT = 896; // Полный экран шторки

    const handlePointerDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        startY.current = e.clientY;
        startHeight.current = height;
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
        if (!isDragging) return;

        const deltaY = e.clientY - startY.current;
        let newHeight = startHeight.current - deltaY;

        // Ограничиваем движение, чтобы шторка не улетела в космос и не зарылась под землю
        if (newHeight < MIN_HEIGHT - 20) newHeight = MIN_HEIGHT - 20;
        if (newHeight > MAX_HEIGHT + 20) newHeight = MAX_HEIGHT + 20;

        setHeight(newHeight);
    };

    const handlePointerUp = (e) => {
        if (!isDragging) return;
        setIsDragging(false);
        e.currentTarget.releasePointerCapture(e.pointerId);

        console.log(height);

        // Магия «прилипания» к уровням при отпускании
        if (height < (MIN_HEIGHT + MID_HEIGHT) / 2) {
            setHeight(MIN_HEIGHT); // Схлопываем до Навбара
        } else if (height < (MID_HEIGHT + MAX_HEIGHT) / 2) {
            setHeight(MID_HEIGHT); // Оставляем Навбар + Категории
        } else {
            setHeight(MAX_HEIGHT); // Раскрываем полностью
        }
    };

    return (
        <footer
            style={{ height: `${height}px`,
                transition: isDragging ? 'none' : 'height 300ms ease-out'
            }}
            className={`w-full absolute bottom-0 left-0 z-50 bg-white rounded-t-[20px] flex flex-col justify-between p-5 pb-2 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] select-none pointer-events-auto
                ${isDragging ? '' : 'transition-[height] duration-300 ease-out'}
            `}
        >
            {/* ХЭНДЛ: Полосочка сверху шторки, за которую пользователь БУДЕТ ТЯНУТЬ */}
            <div
                className="w-full py-2 -mt-2 cursor-grab active:cursor-grabbing flex justify-center items-center touch-action-none touch-none"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
            >
                <div className="w-10 h-1 bg-gray-300 rounded-full" />
            </div>

            <SearchField />

            {/* КОНТЕНТНАЯ ЧАСТЬ: скрываем элементы по мере изменения высоты */}
            <div className="flex-1 flex flex-col gap-6 overflow-hidden mt-2 touch-pan-y overflow-y-auto">

                {/* Категории прячем, когда шторка свернута до минимума */}
                <div className={`transition-all duration-200 ${height > MIN_HEIGHT + 20 && height < MAX_HEIGHT - 20 ? 'opacity-100' : 'opacity-0 pointer-events-none'} p-10`}>
                    <Categories />
                </div>


                {/* Поиск показываем только на максимальной высоте */}
                <div className={`transition-all duration-200 ${height > MID_HEIGHT + 40 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <Afisha />
                </div>


            </div>

            {/* НAВБАР: Он прижат к низу и виден ВСЕГДА */}
            <div className="relative pt-4 before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[200%] before:h-0.5 before:bg-gray-100 before:content-['']">
                <NavBar />
            </div>
        </footer>
    );
};

export default Footer;