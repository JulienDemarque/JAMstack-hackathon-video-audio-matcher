import styled from 'styled-components';

export const SongListItem = styled.div`
	margin: 20px;
	padding: 2px 10px;
	text-align: center;
	font-size: 1.2em;
	width: 80%;
	max-width: 200px;
	border: solid 1px black;
	border-radius: 2px;
	background-color: WhiteSmoke;
	transition: 0.2s;
	&:hover {
		background-color: #c69;
	}
`;
