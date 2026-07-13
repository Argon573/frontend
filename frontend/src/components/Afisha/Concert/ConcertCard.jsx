import { useParams, useLocation } from 'react-router-dom'


const ConcertCard = () => {
    const concertId = useParams().concertId

    const location = useLocation();
    const concert = location.state?.concert;


    return (
        <div className="bg-gray-200 h-full w-full z-1001 absolute flex flex-col items-center gap-1 pointer-events-auto">
            <img src={concert.image} alt={concert.title} className="w-full h-3/8 rounded-lg" />
            <h1>
                {concert.title}
            </h1>
            <h2>О мероприятии</h2>
        </div>
    )
}


export default ConcertCard;