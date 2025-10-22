import {star} from "../assets/icons/index.js";

export const ReviewCardComponent = ({imgURL, customerName, rating, feedback}) => {
    return (
        <div className="flex flex-1 flex-col justify-between items-start shadow-3xl p-6 bg-white rounded-lg ">
            <img src={imgURL} alt={customerName} className="h-16 w-16 bg-coral-red p-1 rounded-full" />
            <div className="flex flex-col justify-start items-start mt-4">
                <span className="text-xl font-montserrat font-semibold">{customerName}</span>
                <span className="mt-5 text-slate-gray text-lg">{feedback}</span>
            </div>
            <div className="flex mt-5 gap-3">
                <img src={star} alt="star" w-5 h-5/>
                <span className="text-2xl text-gray-400 font-semibold">{rating}</span>
            </div>
        </div>
    )
}