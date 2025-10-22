import {ButtonCardComponent} from "../Component/ButtonCardComponent.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {bigShoe1} from "../assets/images/index.js";
import {shoes} from "../constants/index.js";
import {HeroCardComponent} from "../Component/HeroCardComponent.jsx";
import {useState} from "react";

{/* Hero section */}
export const Hero = () => {
    const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
    return (
        <section className="relative  max-container flex flex-col justify-between items-start lg:flex-row pt-24 gap-10 ">
            <div className="flex flex-col justify-center items-start w-full lg:w-2/5">
                <p className="text-lg text-coral-red font-montserrat font-semibold">Our Summer Collection</p>
                <h1 className="mt-5 text-7xl font-palanquin font-bold">The New Arrival<br/><span className="inline text-coral-red">Nike</span> Shoes</h1>
                <p className="mt-8 text-slate-gray text-lg lg:max-w-sm">Discover stylish Nike Arrivals,Comfort and Innovation for your entire Life </p>
                {/* Now we will design the Button Component */}
                <div className="mt-14">
                    <ButtonCardComponent label="Shop now" iconUrl={arrowRight}/>
                </div>
            </div>

            {/* Now we will design the image content */}
            <div className="relative flex-1 flex flex-col items-center justify-center bg-primary background-image-hero bg-center bg-cover rounded-lg lg:max-h-screen max-lg:mt-40 w-full">
                <img src={bigShoeImage} alt="Big Shoe" width={610} height={500} className="h-full w-full object-contain py-10"/>
                <div className="flex justify-center items-center mt-10  gap-4 sm:gap-6">
                    {
                        shoes.map((shoe) => (
                            <HeroCardComponent
                                bigShoe={shoe.bigShoe}
                                setBigShoeImage={setBigShoeImage}
                                bigShoeImage={bigShoeImage}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}