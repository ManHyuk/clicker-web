import styled from 'styled-components';

const Coin = styled.img`
	width: 35px;
	height: 35px;
	position: absolute;
	top: 5px;
	animation: deposit 1s ease-in;
    z-index: 1;
	
	@keyframes deposit {
		100% {
			opacity: 70%;
		}
		to {
			top: 100px;
			opacity: 0%;
		} 
	}
`;



export { Coin };
