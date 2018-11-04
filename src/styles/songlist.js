import styled from 'styled-components';

export const SongListItem = styled.div`
	margin: 10px auto;
	padding: 2px 10px;
	text-align: center;
	font-size: 1.2em;
	width: 80%;
	max-width: 400px;
	border: solid 1px black;
	border-radius: 2px;
	background-color: WhiteSmoke;
	transition: 0.2s;
	&:hover {
		background-color: #c69;
	}
`;

export const SongContainer = styled.div`
	flex: 1 1 auto;
	border: solid 1px #108db8;
	padding: 20px 10px;
	margin: 10px;
`;
