import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--clr-green-500);
`;

export const MainContent = styled.main`
    display: flex;
    font-family: var(--primary-font), sans-serif;
    justify-content: center;
    gap: 20px;
    padding: 30px;
    
    border-radius: 30px 30px 0 0;
    border: 2px solid var(--clr-green-1000, #061407);
    background: var(--crl-neutral-100, #FFF);
`;

export const MainContentRegister = styled.main`
    display: flex;
    flex-direction: column;
    font-family: var(--primary-font), sans-serif;
    justify-content: center;
    gap: 20px;
    padding: 30px;
    
    border-radius: 30px 30px 0 0;
    border: 2px solid var(--clr-green-1000, #061407);
    background: var(--crl-neutral-100, #FFF);
`;

export const Form = styled.form`
    display: flex;
    width: 80%;
    padding: 0 20px;
    flex-direction: column;
    gap: 16px;
`;

export const TitleH1 = styled.h1`
    color: var(--crl-green-1000, #061407);
    font-family: var(--main-font), sans-serif;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
`;

export const TitleH2 = styled.h2`
    color: #000;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 4px;
`;


export const TextInput = styled.input.attrs( {placeholder: 'Digite Aqui'} )`
    padding: 12px;
    font-size: 18px;
    border: 2px solid var(--crl-neutral-1000, #000);
    background: var(--crl-neutral-100, #FFF);
    box-shadow: 2px 2px 0 0 var(--crl-neutral-1000, #000);
    transition: all 0.2s;
    
    &:focus {
        outline: none;
        box-shadow: 4px 4px 0 0 var(--crl-neutral-1000, #000);
        transform: translate(-2px, -2px);
    }
`;

export const TextAreaInput = styled.textarea`
    padding: 12px;
    font-size: 18px;
    width: 100%;
    height: 120px;
    border: 2px solid var(--crl-neutral-1000, #000);
    background: var(--crl-neutral-100, #FFF);
    box-shadow: 2px 2px 0 0 var(--crl-neutral-1000, #000);
    transition: all 0.2s;

    &:focus {
        outline: none;
        box-shadow: 4px 4px 0 0 var(--crl-neutral-1000, #000);
        transform: translate(-2px, -2px);
    }
`;

export const NumberInput = styled.input.attrs({
    type: 'number',
    min: 0,
    max: 120,
})`
    padding: 12px 16px;
    font-size: 12px;
    border: 2px solid var(--crl-neutral-1000, #000);
    border-radius: 0;
    background: #ffffff;
    box-shadow: 2px 2px 0px var(--crl-neutral-1000, #000);
    transition: all 0.2s;

    &:focus {
        outline: none;
        box-shadow: 4px 4px 0px var(--crl-neutral-1000, #000);
        transform: translate(-2px, -2px);
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

export const PetCheckInput = styled.input.attrs({ type: 'checkbox' }) `
    display: none;
`;

export const PetLabel = styled.label`
    cursor: pointer;
    transition: all 0.2s;
    display: inline-block;

    input:checked + & {
        transform: translate(2px, 2px);
        box-shadow: none;
    }

    &:hover {
        transform: translate(-1px, -1px);
    }
`;

export const AgeWrapper = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 8px;
    
    p {
        font-size: 16px;
    }
`;

export const WeightContent = styled.div`
    p {
        padding-top: 4px;
    }
`;

export const AddressWrapper = styled.div``;

export const DonationButton = styled.button `
    display: flex;
    align-self: center;
    width: 160px;
    font-family: var(--main-font), sans-serif;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border: 2px solid var(--crl-green-1000, #061407);
    background: var(--crl-green-500, #39C442);

    box-shadow: 2px 2px 0 0 var(--crl-green-1000, #061407);
`;
