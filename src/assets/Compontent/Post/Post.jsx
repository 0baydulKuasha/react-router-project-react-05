import { Link, useNavigate } from "react-router-dom";

const Post = ({postes}) => {
    const { id, title, body } = postes;

    const navigate = useNavigate();

    const hendelshowDetail = () => {
        navigate(`/postes/${id}`)
    };

    return (
        <div className="card">
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to={`postes/${id}`}>More Details </Link>
            <button onClick={hendelshowDetail} >Click to see details</button>
        </div>
    );
};

export default Post;