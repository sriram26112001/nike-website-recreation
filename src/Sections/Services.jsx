import {services} from "../constants/index.js";
import {ServiceCardComponent} from "../Component/ServiceCardComponent.jsx";

export const Services = () => {
    {/* Here we are making cards lets use Grid */}
    return (
        <section className="max-container flex flex-col justify-between items-start">
            <h2 className="text-4xl font-montserrat font-semibold">Our <span className="text-coral-red">Services</span></h2>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10">
                {
                    services.map((service) => (
                        <ServiceCardComponent key={service.label} {...service}/>
                    ))
                }
            </div>
        </section>
    )
}