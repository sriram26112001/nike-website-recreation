import {star} from "../assets/icons/index.js";

export const ProductCardComponent = ({imgURL, name, price}) => {
    return (
        <div className="">
            <img src={imgURL} alt={name}/>
            <div className="flex mt-5 gap-3">
                <img src={star} alt="star" w-5 h-5/>
                <span className="text-2xl text-gray-400 font-semibold">(4.5)</span>
            </div>
            <h3 className="mt-2 text-2xl text-slate-gray">{name}</h3>
            <p className="mt-2 text-2xl text-coral-red font-semibold font-montserrat">{price}</p>
        </div>
    )
}