import styled from 'styled-components';
import piggyBank from '../../static/piggyBank.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 265px;
    background-color: #ffd063;
`;

const PiggyBank = styled.img`
	width: 150px;
	height: 150px;
	cursor: pointer;
	
	&:hover, &:focus {
		content: url(${piggyBank});
	}
`;

const Money = styled.p`
    margin-top: 15px;
	font-size: 30px;
	font-weight: bold;
`

const Text = styled.p`
	font-weight: 500;
`;

export { PiggyBank, Container, Money, Text };