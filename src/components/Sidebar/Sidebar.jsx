import "./Sidebar.scss";
import logo from "../../assets/logo.svg";
import shop from "../../assets/shop.svg";
import settings from "../../assets/settings.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Sidebar = () => {
  const [modal, setModal] = useState("side_btn_2");
  const [modal1, setModal1] = useState("side_btn_1");
  const openModal = () => {
    setModal("side_btn_1");
    setModal1("side_btn_2");
  };
  const openModal1 = () => {
    setModal("side_btn_2");
    setModal1("side_btn_1");
  };
  return (
    <>
      <div className="sidebar">
        <div className="side_content">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <div className="side_btns">
            <NavLink to="/">
              <img
                className={modal1}
                onClick={openModal1}
                src={settings}
                alt="settings"
              />
            </NavLink>
            {/* <NavLink to="/modal"> */}
            <NavLink to="/">
              <img
                className={modal}
                onClick={openModal}
                src={shop}
                alt="shop"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
