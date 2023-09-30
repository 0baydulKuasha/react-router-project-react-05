import { useLoaderData } from "react-router-dom";
import FooterData from "../footerData/FooterData";
import './Footer.css'
const Footer = () => {

    const footer = useLoaderData();
    
    console.log(footer);
    return (
        <div>

            <h1>this is my footer: {footer.length}</h1>
            
            <div>
                <div className="styles">
                    {
                        footer.map(footer => <FooterData 
                            key={footer.id} 
                            footer={footer}
                            ></FooterData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Footer;