import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BackButton } from '../assets/images/back_button.svg';
import { ReactComponent as SearchButton } from '../assets/images/search_button.svg';

export const Header = ({ props }) => {
  /*
  props = {
    title: '페이지 상단 노출 제목',
    isSearch: 검색 기능 필요시 true, 아니면 false
    gap: 'page별 네비게이션 바 gap 입력. 단위 : rem',
  };
  */

  const [isSearchMode, setIsSearchMode] = useState(false);
  const navigate = useNavigate();

  const handleLeftButtonClick = (event) => {
    event.stopPropagation();
    navigate(-1);
  };
  const handleSearchButtonClick = (event) => {
    event.stopPropagation();
    setIsSearchMode(true);
  };

  const handleBodyClick = (event) => {
    setIsSearchMode(false);
  };

  const handleContainerClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    document.body.addEventListener('click', handleBodyClick);
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  return (
    <>
      {isSearchMode ? (
        <SearchContainer onClick={handleContainerClick}>
          <StyledBackButton
            src={BackButton}
            onClick={() => setIsSearchMode(false)}
            fill="#509BF7"
          ></StyledBackButton>
          <InputText placeholder="검색어를 입력하세요" />
          <StyledSearchButton src={SearchButton} fill="#509BF7" />
        </SearchContainer>
      ) : (
        <Container gap={props.gap} onClick={handleContainerClick}>
          <StyledBackButton
            src={BackButton}
            onClick={handleLeftButtonClick}
            fill="#222222"
          />
          <Title>{props.title}</Title>
          {props.isSearch ? (
            <StyledSearchButton
              src={SearchButton}
              onClick={handleSearchButtonClick}
              fill="#222222"
            />
          ) : (
            <StyledSearchButton src={SearchButton} fill="#FFFFFF" />
          )}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 26.875rem;
  height: 2.75rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
  flex-shrink: 0;
  background: var(--Basic-White, #fff);
  box-sizing: border-box;
`;

const StyledBackButton = styled(BackButton)`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;

const Title = styled.div`
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-align: center;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0225rem;
`;

const StyledSearchButton = styled(SearchButton)`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 26.875rem;
  height: 2.75rem;
  padding: 0.75rem 0.625rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 0.5rem;
  flex-shrink: 0;
  border: 0.33px solid var(--Blue-light-active, #c9e0fd);
  background: var(--Blue-light, #f4f9ff);
  box-sizing: border-box;
`;

const InputText = styled.input`
  display: flex;
  align-items: center;
  border: none;
  width: 21.625rem;
  height: 1.1875rem;
  ::placeholder {
    overflow: hidden;
    color: var(--Text-emtpy, var(--Grayscale-Gray4, #bdbdbd));
    text-overflow: ellipsis;

    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -0.02rem;
  }
  :focus {
    color: var(--Text-default, var(--Grayscale-Gray7, #222));
  }
`;
