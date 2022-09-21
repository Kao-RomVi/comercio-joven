import React, { useState } from "react";
import "./styles.css";
import {useNavigate} from "react-router-dom";
import Sidebar from "../Sidebar";
import { useSession } from "auth/SessionContext";

export default function Navbar() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const { userName } = useSession();
}