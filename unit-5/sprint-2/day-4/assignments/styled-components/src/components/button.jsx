
import styled from "styled-components"

const Button =styled.button`
   background-color:#2390fe;
   color: white;
   border: 0;
   width: 200px;
   margin: 10px;
   padding: 5px;
`
const DefaultButton = styled(Button)`
 background-color: white;
 color: black;
 border: 1px solid gray;
`
const DashedButton =styled(DefaultButton)`
 border :1px dashed gray
`
const TextButton =styled(DashedButton)`
  border:0
`
const LinkButton =styled(TextButton)`
  color:#2390fe
`
export {Button,DefaultButton,DashedButton,TextButton,LinkButton}