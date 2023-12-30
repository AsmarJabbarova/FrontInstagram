import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { Link, useSearchParams } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import Basket from "./Basket";
import Search from "../../pages/Search/Search";
// import { RootState } from "./types";
import { TbMessageCircle2 } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { FaSquarePlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
interface Props {}

const Navbar = (props: Props) => {
  const [display, setDisplay] = useState<boolean>(false);
  const [wish, setWish] = useState<number>(0);
  const [user, setUser] = useState<string>("");
  // const active = JSON.parse(sessionStorage.getItem("userlogin") || "false");
  // const dispatch = useDispatch();
  const [basket, setWBasket] = useState<any[]>([]);
  // const COUNT = useSelector((state: RootState) => state.basketitem.count);
  // const FAV = useSelector((state: RootState) => state.basketitem.favcount);

  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");

  let userWish = JSON.parse(localStorage.getItem("user") || "{}");

  // useEffect(() => {
  //   setWish(userWish?.userwishlist.length || 0);
  //   setUser(userWish?.username || "");
  //   setWBasket(userWish?.usercheckout || []);
  // }, []);

  const logoutHandler = () => {
    window.localStorage.removeItem("user");
    window.location.reload();
    toast("You are logged out");
  };

  return (
    <div className="navbar1">
      <div className="top-navbar">
        <Container>
          <Row>
            <Col sm={2}>
              <div className="logo">
                <Link to={"/"}>
                  <img
                    src="https://i.ebayimg.com/images/g/p7EAAOSwlyVeG5XN/s-l1200.jpg"
                    alt="Logo"
                  />
                </Link>
              </div>
            </Col>

            <Col sm={3}>
              <div className="icons">
                <ul>
                  <li>
                    <Link to={"search"}>
                      <IoIosSearch />
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <IoHomeOutline />
                    </Link>
                  </li>

                  <li onClick={() => setDisplay(!display)}>
                    <Link to={"dm"}>
                      <TbMessageCircle2 />
                    </Link>
                    {/* <sup className="basket">
                      <span>{userWish ? COUNT : 0}</span>
                    </sup> */}
                  </li>
                  <li>
                    <Link to={""}>
                      <CiSquarePlus />
                    </Link>
                  </li>
                  <li>
                    <div className="login-panel">
                      {userWish ? (
                        <div>
                          <Link className="user" to={"profil"}>
                            <FaUserAlt />
                          </Link>
                        </div>
                      ) : (
                        <Link to={"login"}> Log In </Link>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
              <div className={display ? "basketactiveee" : "bag"}>
                {/* <Basket /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
