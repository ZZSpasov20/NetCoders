import { Link } from "react-router-dom";


export default function Index() {
    return (
        <>
            <h1 className=" bg-purple-900">Index</h1>
            <Link to="/login">login</Link>
            <Link to="/register">register</Link>
        </>
    );
}