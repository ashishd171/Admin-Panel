import styled from 'styled-components'

export const Wrapper = styled.div`
    // background: #F6F6F6;
    // height:  calc(100% - 100px);
    flex: 1;
    // box-shadow: 0px 2px 8px rgb(0 0 0 / 15%);
    // z-index: 999;
    position: absolute;
    top: 250px;
    z-index: -1;
    right: 0;
    width: 85%;
    @media screen and (max-width:767px) {
        left:0;
        top:38%;
        width:100%;
    }
`;

export const SearchBox = styled.div`
    display:flex;
    align-items:center;
`;
