import { Link } from "react-router-dom";

Link;
const Navbar = () => {
  return (
    <div className="p-5 bg-green-300">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold text-white">
          Fake WhatsApp Chating App
        </div>
        <div>
          {" "}
          <ul className="flex  justify-end space-x-10 font-semibold ">
            <li className="bg-white p-2 rounded hover:bg-gray-800 hover:text-white">
              {/*  <a href="/">Home</a> */}
              <Link to={"/"}>Home</Link>
            </li>
            <li className="bg-white p-2 rounded hover:bg-gray-800 hover:text-white">
              {/* <a href="/about">About</a> */}
              <Link to={"/about"}>About</Link>
            </li>
            <li className="bg-white p-2 rounded hover:bg-gray-800 hover:text-white">
              {/* <a href="/menu">Menu</a> */}
              <Link to={"/menu"}>GitHub</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
