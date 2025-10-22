import {ReviewCardComponent} from "../Component/ReviewCardComponent.jsx";
import {reviews} from "../constants/index.js";

export const CustomerReviews = () => {
    {/*Always try to reuse the components*/}
    return (
        <section className="max-container flex flex-col justify-between items-start">
            <h2 className="text-4xl font-montserrat font-semibold">What Our <span className="text-coral-red">Customers</span> Say</h2>
            <p className="mt-10 text-lg text-slate-gray font-palanquin lg:max-w-lg text-justify">Trusted by runners, creators, and champions. Here’s what they say about the Nike experience.</p>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10">
                {
                    reviews.map((review) => (
                        <ReviewCardComponent key={review.customerName} {...review}/>
                    ))
                }
            </div>
        </section>
    )
}