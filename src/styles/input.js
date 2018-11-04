import styled from 'styled-components';

export const InputContainer = styled.div`
	padding: 30px;
	@media only screen and (max-width: 600px) {
		padding: 30px 0;
	}
`;

export const InputBox = styled.input`
	height: 30px;
	width: 50%;
	min-width: 200px;
	padding: 0 10px;
	margin: 0;
	font-size: 15px;
	font-weight: 300;
	box-sizing: border-box;
	border: gray solid 1px;
	outline: none;
`;

export const InputSubmit = styled.input`
	height: 30px;
	padding: 0 10px;
	font-size: 15px;
	border: #108db8 solid 1px;
	box-sizing: border-box;
	outline: none;
	cursor: pointer;
`;
