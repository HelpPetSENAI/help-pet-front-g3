import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-family: var(--main-font);
`;

export const SearchHeader = styled.header`
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
`;

export const SearchWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 600px;

    input {
        width: 100%;
        padding: 12px 40px;
        border-radius: 8px;
        border: 2px solid var(--clr-neutral-300);
        outline: none;
        transition: border-color 0.2s;

        &:focus {
            border-color: var(--clr-green-500); /* 3. Estados: Active */
        }
    }

    .magnifier {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
    }

    .clear-btn {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        color: var(--clr-neutral-500);
    }
`;

export const MainContent = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr; /* 4. Layout: Sidebar + Grid */
    gap: 30px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Sidebar = styled.aside`
    background: var(--clr-neutral-100);
    padding: 20px;
    border-radius: 8px;
    height: fit-content;
    border: 1px solid var(--clr-neutral-200);

    .clear-all {
        margin-top: 20px;
        color: var(--clr-red-500);
        background: none;
        border: none;
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const FilterGroup = styled.div`
    margin-bottom: 20px;

    h4 { margin-bottom: 10px; }

    .checkbox-label {
        display: block;
        margin-bottom: 8px;
        cursor: pointer;

        span {
            color: var(--clr-neutral-500);
            font-size: 0.8rem;
        }

        input:disabled + span {
            color: var(--clr-neutral-300); /* 3. Estados: Disabled */
        }
    }
`;

export const ResultsArea = styled.section``;

export const ActiveFiltersTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
`;

export const Card = styled.div`
    height: 250px;
    background: #f0f0f0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Tag = styled.span`
    background: var(--clr-green-100);
    color: var(--clr-green-800);
    padding: 4px 12px;
    border-radius: 20px;
    margin-right: 8px;
    margin-bottom: 8px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 8px;

    button {
        background: none;
        border: none;
        cursor: pointer;
        font-weight: bold;
        color: inherit;
    }
`;

export const NoResults = styled.div`
    text-align: center;
    padding: 50px;
    color: var(--clr-neutral-600);
`;