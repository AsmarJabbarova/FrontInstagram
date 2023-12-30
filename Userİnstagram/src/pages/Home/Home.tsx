import React, { Component, useEffect, useState } from "react";
import Login from "../Login/Login";
import { UserStateTy, getAllProducts } from "./../../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
interface ProdElem {
  name: string;
}

const Home = () => {
  const [data, setData] = useState([]);
  const isLogin: UserStateTy = useSelector(
    (state: UserStateTy) => state.user.isLogin
  );
  const products: UserStateTy = useSelector(
    (state: UserStateTy) => state.user.products
  );
  console.log(isLogin);

  const dispatch = useDispatch();
  useEffect(() => {
    axios("http://localhost:6060/products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      Home
      {isLogin ? (
        <ul>
          {data &&
            data.map((elem: ProdElem, i: number) => {
              return <li key={i}>{elem.name}</li>;
            })}
        </ul>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
