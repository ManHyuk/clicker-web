import styled from 'styled-components';

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
	transform: scale(0.9);
	
	&:hover {
		transform: scale(1);
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