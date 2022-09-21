import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
    const navigate = useNavigate();
}
