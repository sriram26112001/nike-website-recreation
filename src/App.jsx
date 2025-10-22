import {Nav} from "./Component/Nav.jsx";
import {
    CustomerReviews,
    Footer,
    Hero,
    PopularProducts,
    Services,
    SpecialOffer, Subscribe,
    SuperQuality
} from "./Sections/index.js";

export const App = () => {
    return(
       <main className="relative">
           <Nav/>
           <section className="padding">
               <Hero/>
           </section>
           <section className="padding">
               <PopularProducts/>
           </section>
           <section className="padding">
               <SuperQuality/>
           </section>
           <section className="px-8 sm:px-16">
               <Services/>
           </section>
           <section className="padding">
               <SpecialOffer/>
           </section>
           <section className="bg-pale-blue padding">
               <CustomerReviews/>
           </section>
           <section className="padding">
               <Subscribe/>
           </section>
           <section className="bg-black padding">
               <Footer/>
           </section>
       </main>
    )
}
