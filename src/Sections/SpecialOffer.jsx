import {ButtonCardComponent} from "../Component/ButtonCardComponent.jsx";
import specialOfferImage from "../assets/images/offer.svg";
export const SpecialOffer = () => {
    return (
        <section className="flex flex-col justify-between items-start max-container lg:flex-row gap-10">
            <div>
                <h2 className="lg:text-4xl font-montserrat font-semibold">Our<span className="text-coral-red"> Special</span> Offer</h2>
                <p className="mt-10 text-lg text-slate-gray font-palanquin lg:max-w-lg text-justify">For a limited time, elevate your game with our latest Nike collection.
                    Get the perfect balance of innovation, comfort, and style — built for athletes, dreamers, and doers who refuse to slow down.Don’t wait for greatness. Own it today with up to 40% OFF.</p>
                <div className="mt-14 flex gap-5">
                    <ButtonCardComponent label="View Details"/>
                    <ButtonCardComponent label="Learn More"/>
                </div>
            </div>
            {/* Image content */}
            <div className="flex flex-1 flex-col justify-center items-start w-full lg:items-end">
                <img src={specialOfferImage} alt="Special Offer" width={610} height={500} className="max-w-2xl max-h-2xl object-contain py-10"/>
            </div>
        </section>
    )
}