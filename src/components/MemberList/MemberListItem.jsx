import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HumanIcon, PlusIcon } from '../../assets/images/icons';
import CustomInput from '../CustomInput';
import { Link } from 'react-router-dom';
import { MemberListMap } from './MemberListMap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Debounce } from '../Debounce';
import { useDispatch } from 'react-redux';
import { setKeysCount } from '../../redux/KeySlice';

// 컨테이너 스타일
const Container = styled.div`
  max-width: 26.875rem;
  min-height: 15.625rem;
  top: 6.5rem;
  padding: 0.625rem 1rem;
  box-sizing: border-box;
`;

const MemberIcon = styled.div`
  width: 1.5625rem;
  height: 0.875rem;
  gap: 0.25rem;
  box-sizing: border-box;
`;

const MemberListBox = styled.div`
  padding: 1rem 0.625rem;
  margin-top: 2%;
  gap: 0.625rem;
  border-width: 0.0625rem 0;
  border-style: solid;
  border-color: #509bf7;
  box-sizing: border-box;
  opacity: 1;
  align-self: stretch;
  flex-direction: column;
`;

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
  text-align: start;
  margin-left: 0.1rem; /* 버튼과 텍스트 사이의 간격을 조정 */
`;

const MemberAddBtn = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  margin-right: 1.6rem;
  padding: 0.625rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  background: #f4f9ff;
  border: 0.02rem solid #c9e0fd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextColor = styled.p`
  //styleName: Pretendard/bold/20;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #509bf7;
`;

const CountColor = styled.span`
  //styleName: Pretendard/regular/14;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #888888;
`;

const ShowMoreIconContainer = styled.div`
  position: relative;
`;

export const MemberListItem = (props) => {
  const keysCount = useSelector((state) => state.keys.count); // 상태 읽기
  const { members } = useSelector((state) => state.keys);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    search: '',
    results: [],
    allMembers: [],
    adminName: [],
  });

  const debouncedSearch = Debounce(state.search, 300);

  useEffect(() => {
    if (members && members.length >= 0) {
      setState((prevState) => ({
        ...prevState,
        results: members,
        allMembers: members,
      }));
    }
  }, [members]);

  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const option = {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNDMsInByb3ZpZGVyIjoiUkVBRE1FIiwiaWF0IjoxNzIzMTk3MDM4LCJleHAiOjE3MjMyMDc4Mzh9.hQBMLkITkp4d9kdojiTASKxr8DoAp8qPGve0BErrNkg`,
          },
        };

        const response = await axios.get(
          'https://read-me.kro.kr/admin/users',
          option,
        );
        const myInfoResponse = await axios.get(
          'https://read-me.kro.kr/user/profile',
          option,
        );
        const adminName = myInfoResponse.data.result;
        const memberData = response.data.result;
        console.log('admin 이름:', adminName);
        console.log('현재 공지방 안에 있는 사람', memberData);
        setState((prevState) => ({
          ...prevState,
          results: memberData,
          allMembers: memberData,
          adminName: adminName,
        }));
        dispatch(
          setKeysCount({ count: memberData.length, members: memberData }),
        );
      } catch (error) {
        console.error('Error fetching member list:', error);
      }
    };
    fetchMemberList();
  }, [dispatch]);

  // 검색어에 따라 필터링
  useEffect(() => {
    console.log('Debounced search:', debouncedSearch);
    if (debouncedSearch.trim() !== '' && Array.isArray(state.allMembers)) {
      const filteredResults = state.allMembers.filter((member) =>
        member.nickname.toLowerCase().includes(debouncedSearch.toLowerCase()),
      );
      console.log('Filtered results:', filteredResults);
      setState((prevState) => ({ ...prevState, results: filteredResults }));
    } else {
      setState((prevState) => ({ ...prevState, results: state.allMembers }));
    }
  }, [debouncedSearch, state.allMembers]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleInput = (e) => {
    setState((prevState) => ({ ...prevState, search: e.target.value }));
  };

  console.log('필터링된 사람:ListItem', state.results);

  return (
    <Container>
      <CustomInput
        placeholder={'입력하세요'}
        onChange={handleInput}
      ></CustomInput>
      <MemberIcon>
        <HumanIcon />
        <CountColor> {keysCount + 1} </CountColor>
      </MemberIcon>
      <MemberListBox>
        <ButtonContainer>
          <Link to="/member/invite">
            <MemberAddBtn>
              <PlusIcon />
            </MemberAddBtn>
          </Link>
          <ButtonText>멤버초대하기</ButtonText>
        </ButtonContainer>
        <ButtonContainer>
          <MemberAddBtn></MemberAddBtn>
          <ButtonText>{`본인: ${state.adminName.nickname}`}</ButtonText>
        </ButtonContainer>

        {state.results && state.results.length > 0 ? (
          <MemberListMap
            members={state.results}
            onOpenModal={handleOpenModal}
          />
        ) : members && members.length === 0 ? (
          <TextColor>아무도 없어요!</TextColor>
        ) : (
          <TextColor>검색한 결과가 없어요!</TextColor>
        )}
      </MemberListBox>
    </Container>
  );
};
