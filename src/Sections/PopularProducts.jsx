import {products} from "../constants/index.js";
import {ProductCardComponent} from "../Component/ProductCardComponent.jsx";

export const PopularProducts = () => {
    return (
        <section className="relative max-container flex flex-col justify-between items-start">
            <div>
                <h2 className="text-4xl font-palanquin font-semibold">Our <span className="text-coral-red">Popular</span> Products</h2>
                <p className="text-slate-gray text-lg font-montserrat mt-10 lg:max-w-lg leading-normal text-justify w-full">There’s a reason it’s our most popular product — it works. Built with care, tested relentlessly, and refined over time, it’s become the go-to choice for people who value performance, quality, and results.</p>
            </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full">
                {
                    products.map((product) => (
                        <ProductCardComponent key={product.name} {...product}/>
                    ))
                }
            </div>
        </section>
    )
}