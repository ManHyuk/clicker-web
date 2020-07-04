import React from "react";
import * as Styled from './style';
import Counter from "../../components/Counter";
import Shop from "../../components/Shop";

const SideBar = () => {
    return (
        <Styled.Container>
            <Counter />
            <Shop />
        </Styled.Container>
    )
}

export default SideBar;