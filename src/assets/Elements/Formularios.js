import styled , {css} from 'styled-components';

const colors = {
    principal: "rgb(228, 94, 94)",
    principal2: "rgb(228, 94, 94, 30%)",
    secundario: "rgb(94, 186, 228, 30%)", 
    Terciario: "rgb(17, 190, 156)", 
}

const InputStyled = styled.input` 


    &:focus{
        border-color: ${colors.secundario};
        outline: 0;
        box-shadow: 0 0 0 .25rem ${colors.principal2};
    }

  
    ${props => props.valido === 'false' &&   css `
        border: 3px solid ${colors.principal} !important;
    `}

`;

const TextStyled = styled.textarea` 

    resize: none;
    &:focus{
        border-color: ${colors.secundario};
        outline: 0;
        box-shadow: 0 0 0 .25rem ${colors.principal2};
    }

  
    ${props => props.valido === 'false' &&   css `
        border: 3px solid ${colors.principal} !important;
    `}

`;

const LabelStyled = styled.label` 
    font-weight: 400;
 


`;
const LeyendaStyled = styled.p` 
    color: ${colors.principal};
    font-size: 12px;
    opacity: 0;
    ${props => props.valido === 'false' &&   css `
        opacity: 100;
    `}
  

`;
const MensajeStyled1 = styled.p` 
    color: ${colors.principal};


`;
const MensajeStyled2 = styled.p` 
    color: ${colors.Terciario};


`;

export {InputStyled, LabelStyled, LeyendaStyled, MensajeStyled1, MensajeStyled2, TextStyled};
