export const ButtonCardComponent = ({label, iconUrl}) => {
    return (
        <div className="flex justify-center items-center gap-2 px-6 py-3 bg-coral-red rounded-full">
            <span className="text-lg font-montserrat text-white">{label}</span>
            {
                iconUrl && (
                    <div className="p-1 rounded-md">
                        <img src={iconUrl} alt="Arrow Right" className="h-6 w-6" />
                    </div>
                )
            }
        </div>
    )
}