import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className="w-full flex flex-col lg:flex-row mt-12">
                <Link to="/" className="w-1/2 mx-4"><button className="w-full h-8 bg-blue-500 text-white">To do:</button></Link>
                <Link to="/done" className="w-1/2 mx-4"><button className="w-full h-8 bg-blue-500 text-white">Done!</button></Link>
            </div>
        < />
    );
}

export {NavBar};