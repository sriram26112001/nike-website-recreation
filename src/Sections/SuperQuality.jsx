import {ButtonCardComponent} from "../Component/ButtonCardComponent.jsx";
import SuperQualityImage from "../assets/images/shoe8.svg";

export const SuperQuality = () => {
    return (
        <section className="max-container flex flex-col just`ify-between items-start lg:flex-row gap-20 lg:gap-10">
            <div className="flex flex-col w-full lg:w-1/2 justify-start items-start">
                <h2 className="text-4xl font-montserrat font-semibold"><span className="text-coral-red">High Quality</span> Shoes</h2>
                <p className="mt-10 text-slate-gray text-lg text-justify max-w-lg">Discover the perfect fusion of performance and style with our latest Nike collection.
                    Built for those who never stop moving, every pair delivers lightweight comfort, dynamic support, and unmatched durability.
                    Whether you’re chasing records or redefining casual fashion, these shoes are engineered to keep up with your every step.</p>
                <div className="mt-14 flex">
                    <ButtonCardComponent label="View Details"/>
                </div>
            </div>
            {/* Image Container */}
            <div className="flex flex-1 justify-start items-center w-full">
                <img src={SuperQualityImage} alt="Super Quality Image" className="max-h-2xl max-w-2xl object-contain" />
            </div>
        </section>
    )
}