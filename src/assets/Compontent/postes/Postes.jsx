import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Postes = () => {
    const postes = useLoaderData();

    return (
        <div>
            <h1>Total post: {postes.length}</h1>
            <div className="styles">
                {
                    postes.map(postes => <Post key={postes.id} postes={postes}></Post>)
                }
            </div>
        </div>
    );
};

export default Postes;