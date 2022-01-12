import styled from 'styled-components';

export const Wrapper = styled.div`
    margin:0 auto;

    .searchInput{
        margin: 24px;
        display: flex;
        align-items: center;
        position:relative;

        .setInput{
            width: 522px;
            height: 40px;
            border: 1px solid #D9D9D9;
            border-radius: 2px;
            padding: 8px 12px;
            color: #A4A4A4;
            font-size: 16px;

        }
        input:focus {
            border: 1px solid #D9D9D9;
            outline: 1px solid #D9D9D9;
        }

        .clearIcon {
            width: 20px;
            z-index: 9999;
            height: 20px;
            position: absolute;
            right: 91px;
        }
        
        button{
            background: #FFC107;
            color: #fff;
            border: none;
            padding: 0px 16px;
            height: 40px;
            box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
            border-radius: 0px 2px 2px 0px;
            position: absolute;
            right: 0;
        }
    }
`
