export const ServiceCardComponent = ({imgURL, label, subtext}) => {
    return (
        <div className="flex flex-1 flex-col justify-center items-start shadow-3xl p-6 bg-white rounded-lg ">
            <img src={imgURL} alt={label} className="h-16 w-16 bg-coral-red p-1 rounded-full" />
            <div className="flex flex-col justify-start items-start mt-4">
                <span className="text-xl font-montserrat font-semibold">{label}</span>
                <span className="mt-5 text-slate-gray text-lg">{subtext}</span>
            </div>
        </div>
    )
}