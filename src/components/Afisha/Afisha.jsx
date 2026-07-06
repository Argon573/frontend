import {AFISHA} from "./AfishaCard/afisha.data.js";
import AfishaCard from "./AfishaCard/AfishaCard.jsx";


const Afisha = () => {
    return (
        <div className="mt-2 ml-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
            {AFISHA.map((mero) =>
                <AfishaCard key={mero.id} mero={mero} />
            )}
        </div>
    )
}


export default Afisha;