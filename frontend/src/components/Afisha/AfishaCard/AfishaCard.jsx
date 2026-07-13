import { NavLink } from 'react-router-dom';



const AfishaCard = ({mero}) => {
    return (
        <NavLink
            to={`/concert/${mero.id}`}
            state={{concert: mero}}
            className="w-80 h-53 flex flex-col hover:border-black"
        >
            <div className="rounded-lg h-45">
                <img
                    alt={mero.title}
                    src={mero.image}
                    className="w-full h-full object-cover transition-transform hover:scale-105 rounded-lg" />
            </div>
            <div>
                <p className='overflow-hidden'>{mero.title}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{mero.date} {mero.time}</span>
                <span className="overflow-hidden relative pl-4 last:before:absolute last:before:left-0 last:before:top-1/2 last:before:-translate-y-1/2 last:before:w-1 last:before:h-1 last:before:bg-gray-400 last:before:rounded-full">
        {mero.location}
                </span>
            </div>
        </NavLink>
    )
}

//TODO make grid containers

export default AfishaCard;