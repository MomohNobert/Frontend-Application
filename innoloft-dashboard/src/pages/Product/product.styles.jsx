import styled from 'styled-components';

export const PStyle = styled.div`
    width: 100%;
    display: grid;
    height: 100%;
    place-items: center;
`

export const PContent = styled.div`
    width: 90%;
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const ProductContent = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: 250px;
        border-radius: 5px;
    }

    p {
        margin-top: 25px;
        font-size: 15px;
    }
`

export const UserContent = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
`