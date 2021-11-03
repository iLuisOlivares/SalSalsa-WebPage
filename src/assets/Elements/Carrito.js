import styled , {css} from 'styled-components';


const InputCompraStyled = styled.input` 
   max-width: 3rem;
   border: 2px solid rgba(182, 6, 6, 0.8);
    border-radius: 5px;
    margin-left: 1px;
    &::hover{
      box-shadow: 0 0 3px rgba(182, 6, 6, 0.8), 0 0 3px rgba(182, 6, 6, 0.8), 0 0 3px rgba(182, 6, 6, 0.8);
    }

`;


const DivContainerStyled = styled.div`
  max-width: 300px;

`;
const ContainerImgStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;
const ImagenStyled = styled.img`
 object-fit: cover;
 height: 100%;
 width: 100%;
`;

export {InputCompraStyled, DivContainerStyled, ImagenStyled, ContainerImgStyled}