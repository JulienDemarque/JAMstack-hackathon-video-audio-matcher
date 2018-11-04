import styled from 'styled-components';

export const Layout = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');
	font-family: Roboto, sans-serif;
	margin: 30px 10%;
	text-align: center;
	& section {
		text-align: left;
	}

	@media only screen and (max-width: 600px) {
		margin: 30px 0;
	}
`;

export const UrlContainer = styled.div`
	font-size: 12px;
`;

export const Instructions = styled.div`
	margin-bottom: 0;
`;

export const VideoAndInputContainer = styled.div`
	border: solid 1px #108db8;
	padding: 20px 10px;
	margin: 10px;
`;

export const GenreSelectContainer = styled.div`
	flex: 1 1 auto;
	border: solid 1px #108db8;
	padding: 20px 10px;
	margin: 10px;
`;

export const ResultContainer = styled.div`
	display: flex;
	align-items: stretch;
	flex-wrap: wrap;
`;
