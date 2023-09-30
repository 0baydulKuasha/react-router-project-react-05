import "./footerdata.css"
import { Link } from "react-router-dom";
const FooterData = ({footer}) => {
    const{id, name, email, phone}= footer;

    return (
        <div className="">
            <div  className="card">
                <h3>{name}</h3>
                <h4> email: {email}</h4>
                <h5>phone:{phone}</h5>
                <Link to={`footer/${id}`} >Show More Data</Link>
            </div>
        </div>
        
    );
};

export default FooterData;