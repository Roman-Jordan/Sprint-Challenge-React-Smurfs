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
margin-top:3rem;
    .smurf{
        max-width:400rem;
        padding:.5rem;
    }

`