import { Link } from "react-router-dom";



const LeftSideBar = ({ category }) => {

    return (
        <div>

            <Link to={`${category.id}`}>
                <button className="btn btn-ghost w-full">
                    {category.name}
                </button>
            </Link>

        </div>
    );
};

export default LeftSideBar;