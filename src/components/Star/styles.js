import styled from 'styled-components';

export const Container = styled.div`
    height: 100px;
    width: 100px;
    margin: 50px;
    border: 1px solid yellowgreen;
`;

export const Box = styled.div`
    height: 100px;
    width: 100px;
    margin: 50px;
    border: 1px solid red;
`;

export const Path = styled.path`
    stroke-dasharray: 400;
    stroke-dashoffset: 0;
    animation: dash 5s linear;
    @keyframes dash {
        from {
            stroke-dashoffset: 400;
        }
        to {
            stroke-dashoffset: 0;
        }
    }
`;

