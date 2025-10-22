import {ButtonCardComponent} from "../Component/ButtonCardComponent.jsx";

export const Subscribe = () => {
    return (
        <section className="max-container flex flex-col justify-center items-center">
            <h2 className="lg:text-4xl font-montserrat font-semibold text-2xl">Sign Up For <span className="text-coral-red">Updates & Newsletters</span></h2>
            <div className="mt-14 flex justify-between items-center px-2 py-3 border border-black w-full lg:max-w-xl rounded-full gap-2">
                <input type="email" placeholder="Enter your email" className="border-2 border-gray-400  ml-1 flex-1 rounded-full px-7 py-4"/>
                <button className="bg-coral-red text-white font-montserrat font-semibold rounded-full px-7 py-4">Subscribe</button>
            </div>
        </section>
    )
}