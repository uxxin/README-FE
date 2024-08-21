import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlassBtn, HumanIcon, PlusIcon } from '../../assets/svgs/icons';
import { Link } from 'react-router-dom';
import { MemberListMap } from './MemberListMap';
import { useSelector } from 'react-redux';
import { Debounce } from '../Debounce';
import { useDispatch } from 'react-redux';
import { setKeysCount } from '../../redux/KeySlice';
import { useParams } from 'react-router-dom';
import { getMyInfo } from '../../api/Member/memberListCheck';
import { getMemberList } from '../../api/Member/memberListCheck';
import { getAdminProfile } from '../../api/Member/memberListCheck';

export const MemberListItem = () => {
  const keysCount = useSelector((state) => state.keys.count);
  const { members } = useSelector((state) => state.keys);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { roomId } = useParams();

  const [searchInput, setSearchInput] = useState('');

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
        const memberData = await getMemberList('', roomId);
        const adminData = await getAdminProfile(roomId);
        console.log('admin의 유저아이디는:', adminData);

        setState((prevState) => ({
          ...prevState,
          results: memberData.result,
          allMembers: memberData.result,
          adminName: adminData.result,
        }));
        dispatch(
          setKeysCount({
            count: memberData.result.length,
            members: memberData.result,
          }),
        );
      } catch (error) {
        console.error('Error fetching member list:', error);
      }
    };
    fetchMemberList();
  }, [dispatch, roomId]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSearch = async () => {
    try {
      if (debouncedSearch && debouncedSearch.trim()) {
        const filteredResults = state.allMembers.filter((member) =>
          member.nickname.toLowerCase().includes(debouncedSearch.toLowerCase()),
        );
        setState((prevState) => ({
          ...prevState,
          results: filteredResults,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          results: prevState.allMembers,
        }));
      }
    } catch (error) {
      console.error('Error searching for members:', error);
    }
  };

  const handleInput = (e) => {
    setState((prevState) => ({ ...prevState, search: e.target.value }));
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container>
      <InputContainer>
        <SearchInput
          placeholder={'입력하세요'}
          onChange={handleInput}
          onKeyUp={handleKeyUp}
        />
        <ClickBtn onClick={handleSearch}>
          <GlassBtn />
        </ClickBtn>
      </InputContainer>
      <MemberIcon>
        <HumanIcon />
        <CountColor> {keysCount + 1} </CountColor>
      </MemberIcon>
      <MemberListBox>
        <ButtonContainer>
          <Link to={`/notice/${roomId}/invite`}>
            <BtnWrapper>
              <MemberAddBtn>
                <PlusIcon />
              </MemberAddBtn>
            </BtnWrapper>
          </Link>
          <ButtonText>멤버초대하기</ButtonText>
        </ButtonContainer>
        <ButtonContainer>
          <MemberNameBtn src={state.adminName.profileImage} />
          <ButtonText>{state.adminName.nickname}</ButtonText>
        </ButtonContainer>

        {state.results && state.results.length > 0 ? (
          <MemberListMap
            members={state.results}
            onOpenModal={handleOpenModal}
            roomId={roomId}
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

const BtnWrapper = styled.div`
  width: 2.75rem;
  height: 2.75rem;
`;

const ClickBtn = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Container = styled.div`
  max-width: 26.875rem;
  min-height: 15.625rem;
  top: 6.5rem;
  padding: 0.625rem 1rem;
  box-sizing: border-box;
`;

const MemberIcon = styled.div`
  white-space: nowrap;
  margin-top: 0.375rem;
  margin-bottom: 0.375rem;
`;

const MemberListBox = styled.div`
  padding: 1rem 0.625rem;
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
`;

const ButtonText = styled.span`
  width: 5.3125rem;
  height: 1.1875rem;
  gap: 0;
  opacity: 1;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;
  letter-spacing: -0.02em;
  text-align: start;
`;

const MemberAddBtn = styled.button`
  width: 100%;
  height: 100%;
  margin-right: 0.8rem;
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
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #509bf7;
`;

const CountColor = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #888888;
  white-space: nowrap;
`;

const InputContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0.75rem 0.625rem;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-Light-active, #c9e0fd);
  background: var(--Primary-Light, #f4f9ff);
`;

const SearchInput = styled.input`
  border: none;
  flex: 1;
  outline: none;
  background: none;
  font-family: 'Pretendard';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.02rem;
  color: #509bf7;
  ::placeholder {
    color: var(--Text-emtpy, var(--Grayscale-Gray4, #bdbdbd));
  }
`;
const MemberNameBtn = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.5rem;
  opacity: 1;
  background: #dddddd;
  box-sizing: border-box;
  border: 0.02rem solid #dddddd;
  margin-right: 0.8rem;
`;
