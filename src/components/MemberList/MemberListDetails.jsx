import React from "react";
import styled from "styled-components";
import { DotsIcon } from '../../assets/images/icons';

const ButtonContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  white-space: nowrap;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.625rem;
  align-self: stretch;
  margin-right: 0.8rem;
`;

const ButtonText = styled.span`
  width: 5.3125rem; 
  height: 1.1875rem; 
  gap: 0;
  opacity: 1; 
  box-sizing: border-box;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem; 
  letter-spacing: -0.02em;
  text-align: center;
  margin-left: 0.1rem;
`;

const MemberNameBtn = styled.img`
  width: 2.75rem; 
  height: 2.75rem; 
  border-radius: 0.5rem;
  opacity: 1; 
  background: #DDDDDD;
  box-sizing: border-box;
  border: 0.02rem solid #DDDDDD;
  margin-right:1.6rem; 
`;

const SearchButton = styled.button`
  position: relative;
  width: 1.5rem; 
  height: 1.5rem; 
  padding: 0.1875rem; 
  background-color: transparent;
  color: none;
  cursor: pointer;
  border: none;
  margin-left: auto;
`;

export const MemberListDetails = (props) => {
      const { profile_image, nickname} = props;

      console.log('MemberListDetails props:', { profile_image, nickname });
    return (
      <ButtonContainer>
        <MemberNameBtn src={props.profile_image} />
        <ButtonText>{props.nickname}</ButtonText>
        <SearchButton onClick={props.onOpenModal}>
          <DotsIcon />
        </SearchButton>
      </ButtonContainer>
    );
  };