import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    .checkLabel{
      display: flex;
      align-items:center;
      position: relative;
      user-select: none;
    }
    .checkLabel p{
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      padding-left: 25px;
      cursor: pointer;
      letter-spacing: 0em;
      margin:0;
    }
    .checkLabel input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    
    .checkmark {
      position: absolute;
      top: 2px;
      left: 0;
      width: 16px;
      height: 16px;
      border-radius:2px;
      background-color: #fff;
      border: 1px solid #D9D9D9;
    }
    
    .checkLabel:hover input ~ .checkmark {
      background-color: #ccc;
    }
    
    .checkLabel input:checked ~ .checkmark {
      background-color: #FFC107;
    }
    
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }
    .checkLabel input:checked ~ .checkmark:after {
      display: block;
    }
    .checkLabel .checkmark:after {
      left: 3.9px;
      top: 2px;
      width: 6px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate( 45deg);
    }
  }
     
`