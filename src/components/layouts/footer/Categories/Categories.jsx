import {CATEGORIES} from './categories.data.js'

const Categories = () => {
    return (
        <div className='flex flex-nowrap overflow-x-auto gap-4 justify-between'>
            {CATEGORIES.map((category) => (
                <button key={category.id} className="text-nowrap max-block-6 text-black">{category.name}</button>
            ))}
        </div>
    )
}


export default Categories;