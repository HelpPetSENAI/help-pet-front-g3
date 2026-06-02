import styled from "styled-components";

function SpecieTag({specie}) {

    let textColor = '';
    let backgroundColor = '';
    let translatedSpecie = '';

    switch (specie) {
        case 'AMPHIBIAN':
            textColor = '#103713';
            backgroundColor = '#39C442';
            translatedSpecie = 'Anfíbio';
            break;
        case 'ARACHNID':
            textColor = '#3E3609';
            backgroundColor = '#E0C528';
            translatedSpecie = 'Aracnídeo';
            break;
        case 'BIRD':
            textColor = '#074040';
            backgroundColor = '#18DEDE';
            translatedSpecie = 'Ave';
            break;
        case 'CAT':
            textColor = '#FFF';
            backgroundColor = '#2828C9';
            translatedSpecie = 'Gato';
            break;
        case 'CNIDARIANS':
            textColor = '#004037';
            backgroundColor = '#00B89F';
            translatedSpecie = 'Cnidário';
            break;
        case 'DOG':
            textColor = '#FFF';
            backgroundColor = '#CC2323';
            translatedSpecie = 'Cachorro';
            break;
        case 'FISH':
            textColor = '#4D1F0F';
            backgroundColor = '#FF6B35';
            translatedSpecie = 'Peixe';
            break;
        case 'REPTILE':
            textColor = '#26400A';
            backgroundColor = '#7ED321';
            translatedSpecie = 'Réptil';
            break;
        case 'RODENT':
            textColor = '#FFF';
            backgroundColor = '#BD4BBD';
            translatedSpecie = 'Roedor';
            break;
        default:
            backgroundColor = '#C6C6C6';
            textColor = '#000';
    }

    return(
        <Default $bgColor={backgroundColor} $txtColor={textColor}>
            <p>{translatedSpecie}</p>
        </Default>
    )
}

const Default = styled.div`
    display: inline-flex;
    padding: 8px;
    align-items: center;
    gap: 8px;

    font-family: var(--main-font), sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 51%;

    border-radius: 50px;

    background: ${props => props.$bgColor};
    color: ${props => props.$txtColor};
`;

export default SpecieTag