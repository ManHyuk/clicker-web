import React, { useState } from 'react';
import * as Styled from './style';

import piggyBank from '../../static/piggyBank.png';

import useInterval from "../../hooks/uesInterval";
import useCounter from "../../hooks/useCounter";

const Counter = () => {
    const DELAY: number = 1000;

    const { count, bonusCount, onIncrease, onDecrease, onIncreaseBy } = useCounter();

    const [bonusClickCount, setBonusClickCount] = useState(1);
    const [bonusAutoCount, setBounusAutoCount] = useState(1);

    const clickCounter = () => {
        // onIncreaseBy(bonusClickCount)
        onIncrease();
    };

    useInterval(() => {
        // onIncreaseBy(bonusAutoCount)
        onIncrease()
    }, DELAY);

    return (
        <Styled.Container onClick={clickCounter}>
            <Styled.PiggyBank src={piggyBank} alt="piggyBank" />
            <Styled.Money>{count}</Styled.Money>
            <Styled.Text>1초에 {bonusCount}원 저금중!</Styled.Text>
        </Styled.Container>
    )
};

export default Counter;