import React from "react";
import { useSelector } from "react-redux";
import { StateTypes } from "../types/Types";
import MessengerScreen from "./MessengerScreen";
import { Navigate } from "react-router-dom";

const PivatRoute = () => {
  const isUserLoggedIn = useSelector(
    (state: StateTypes) => state.isUserLoggedIn
  );
  return <>{isUserLoggedIn ? <MessengerScreen /> : <Navigate to="/" />}</>;
};

export default PivatRoute;
