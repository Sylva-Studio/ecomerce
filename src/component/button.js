import styled from 'styled-components'

export const ButtonStyle = styled.button `
background : transparent;
font-weight: bolder;
padding : .1em 1em;
color : ${props=>props.cart? "var(--mainyellow)":"var(--mainliteblue)"};
border : .1em solid var(--mainliteblue);
border-color:${props=>props.cart? "var(--mainyellow)":"var(--mainliteblue)"};
border-radius:.4em;
transition: all 1s linear;
&:focus{
  outline : none;
}
&:hover{
  background: ${props=>props.cart? "var(--mainyellow)":"var(--mainliteblue)"};;
  color:white;
}
`;