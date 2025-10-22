export const HeroCardComponent = ({bigShoe, setBigShoeImage, bigShoeImage}) => {
    function OnClickHandler(setBigShoeImage) {
        if(bigShoeImage !== bigShoe) {
            setBigShoeImage(bigShoe);
        }
    }

    return (
        <button onClick={() => OnClickHandler(setBigShoeImage)} className={`flex justify-center items-center w-30 h-30 lg:h-40 lg:w-40 rounded-lg background-image-card ${bigShoeImage === bigShoe ? 'border-3 border-coral-red' : ''}`}>
            <img src={bigShoe} alt="shoe collection" width={127} height={103} className="object-contain"/>
        </button>
    )
}