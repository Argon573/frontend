import { useParams, useLocation } from 'react-router-dom'


const ConcertCard = () => {
    const concertId = useParams().concertId

    const location = useLocation();
    const concert = location.state?.concert;


    return (
        <div className="bg-gray-200 h-full w-full z-1001 absolute">
            <img src={concert.image} alt={concert.title} className="w-full h-1/4 rounded-lg" />
            <h1>
                {concertId}
            </h1>
        </div>
    )
}


export default ConcertCard;