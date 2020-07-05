import React, { useState } from 'react';
import * as Styled from './style';

import piggyBankDefault from '../../static/piggyBankDefault.png';

import useInterval from "../../hooks/uesInterval";
import useCounter from "../../hooks/useCounter";
import Coin from '../Coin';

const Counter = () => {
    const DELAY: number = 1000;

    const { count, bonusCount, onIncrease, onDecrease, onIncreaseBy } = useCounter();

    const [bonusClickCount, setBonusClickCount] = useState(1);
    const [bonusAutoCount, setBonusAutoCount] = useState(1);
    const [coins, setCoins] = useState([]);
    const clickCounter = () => {
        // onIncreaseBy(bonusClickCount)
        // @ts-ignore
        setCoins([...coins, coins]);
        onIncrease();
    };

    useInterval(() => {
        // onIncreaseBy(bonusAutoCount)
        onIncrease()
    }, DELAY);

    return (
        <Styled.Container onClick={clickCounter}>
            {coins.map((coin, i) => {
                return (
                    <Coin key={"coin" + i} />
                )})}
            <Styled.PiggyBank src={piggyBankDefault} alt="piggyBank" />
            <Styled.Money>{count}</Styled.Money>
            <Styled.Text>1초에 {bonusCount}원 저금중!</Styled.Text>
        </Styled.Container>
    )
};

export default Counter;