import React from "react";
import * as Styled from './style';

import SideBar from "../SideBar";
import Inventory from "../../components/Inventory";

const Main = () => {
    return (
        <Styled.Container>
            <SideBar />
            <Inventory />
        </Styled.Container>
    )
}

export default Main;