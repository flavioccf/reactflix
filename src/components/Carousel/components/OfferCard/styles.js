import styled from 'styled-components';

const OfferCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 150px;
  width: 150px;
  height: 100px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity .3s;
  -webkit-box-shadow: inset -1px -94px 58px -50px rgba(51,51,51,0.35);
-moz-box-shadow: inset -1px -94px 58px -50px rgba(51,51,51,0.35);
box-shadow: inset -1px -94px 58px -50px rgba(51,51,51,0.35);
  span {
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: clip; 
    display: inline-block;
  }
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export default OfferCardContainer;
