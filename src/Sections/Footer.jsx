import headerLogo from "../assets/images/header-logo.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import {footerLinks} from "../constants/index.js";


export const Footer = () => {
    return (
        <section className="text-white max-container flex flex-col justify-between items-start">
            <div className="flex flex-col items-start justify-center">
                <img src={headerLogo} alt="Logo"/>
                <p className="mt-10 text-xl lg:max-w-sm font-palanquin font-medium">Get shoes ready for the new term at your nearest Nike Store. Find you perfect size in Store. Get Rewards</p>
                <div className="mt-10 flex gap-5">
                    <img src={twitter} alt="Logo" className="bg-white rounded-full w-11 h-11 p-1"/>
                    <img src={instagram} alt="Logo" className="bg-white rounded-full w-11 h-11 p-1"/>
                    <img src={facebook} alt="Logo" className="bg-white rounded-full w-11 h-11 p-1"/>
                </div>
            </div>
            <div className="mt-10 flex w-full items-start justify-start">
                {
                    footerLinks.map((link) => (
                        <div className="flex flex-1 flex-col items-start justify-start">
                            <h4 className="font-palanquin font-semibold text-xl">{link.title}</h4>
                            <ul className="mt-5">
                                {
                                    link.links.map((item) => (
                                        <li key={item.link} className="font-palanquin font-medium text-lg leading-8">{item.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}