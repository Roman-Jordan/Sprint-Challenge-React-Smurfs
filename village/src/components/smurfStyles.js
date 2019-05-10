import styled from 'styled-components';

export const Header = styled.header`
width:100%;
position:fixed;
top 0;
left 0;
right 0;
z-index:1;
display:flex;
justify-content:space-between;
align-items:center;
padding:1rem;
background:#224de3;
color:#fff;
    button{
        border-radius:50%;
        padding:.5rem 1rem;
        transition: all .2s ease;
        background:#224de3;
        border:1px solid #fff;
        color:#fff;

        &.active{
            transform: rotateX(45deg);
            transition: all .2s ease;
        }
    }
`
export const SmurfCard = styled.div`
display:flex;
justify-content: space-evenly;
max-width:120rem;
margin-top:10rem;
    .smurf{
        max-width:400rem;
        padding:.5rem;
    }

`

export const Modal = styled.div`
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    background:rgba(000,000,000,.3);
    z-index:0;
    display:none;
    &.active{
        display:inline-block;
    }

    form{
        background:#fff;
        margin:50% auto;
        max-width:40rem;
        width:90%;
        display:flex;
        flex-direction:column;
    }
`;