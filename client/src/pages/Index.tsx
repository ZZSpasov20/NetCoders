import { Link } from "react-router-dom";


export default function Index() {
    return (
        <>
            <h1 className=" bg-purple-900">Index</h1>
            <Link to="/page2">page2</Link>
        </>
    );
}