import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MainPage from "../components/Main";
import Navbar from "../components/Navbar";

const GuestLayout = () => {
  return (
    <div className="bg-green-300 min-h-screen">
      <Navbar />

      <div className="bg-red-100 ">
        <Outlet />
      </div>
      <div className="m-10 rounded flex h-55">
        <img
          src="https://play-lh.googleusercontent.com/PZ6nsEz0PQ57Lxs3ZpjfpmFDBIu40vsR-7PCtoQis6aTMaLaV7Fp99LuieTpnklysWM"
          alt=""
          className="rounded-xl flex-1"
        />
        <img
          src="https://www.emrrecruitment.co.uk/img/GsMhnge7_06Pegja_GdtaA/Whatsapp+scam+thumb.png?v=2743600747c6afbee10f7793186b12c4"
          alt=""
        />
      </div>
    </div>
  );
};
export default GuestLayout;
