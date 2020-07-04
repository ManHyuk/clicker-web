import styled from 'styled-components';
import floor from '../../static/floor.png';

const Container = styled.section`
    width: calc(100% - 300px);
	background-image: url(${floor});
    background-repeat: repeat;
	overflow: scroll;
`;

const Icon = styled.img`
	width: 50px;
	height: 50px;
	margin: 10px;
`;


export { Container, Icon };