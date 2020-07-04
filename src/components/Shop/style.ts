import styled from 'styled-components';

const List = styled.ul`
    height: calc(100% - 265px);
	background: #faebd7;
`;

const Item = styled.li`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	&:hover {
		background: #f1cc9c;
	}
`;

export { List, Item };