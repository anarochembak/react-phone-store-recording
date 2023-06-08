import styled from "styled-components";

export const ButtonContainer = styled.button`
   text-tranform: capitalize;
   font-size: 1.4rem;
   background: transparent;
   border: 0.05rem solid var(--lightBlue);
   border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
   color: var(--lightBlue);
   color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
   border-radius: 0.5rem;
   padding: 0.09rem 1rem;
   cursor: pointer;
   margin: 0.02rem 0.05rem 0.02rem 0;
   transition: all 0.1s ease-in-out;
  

   &:hover{
      background-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
      color: var(--mainBlue);
      border: 0.1rem solid ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
      }

   &focus{
      outline: none;
   }
`;