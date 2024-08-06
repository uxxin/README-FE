import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { DotsIcon, HumanIcon, PlusIcon } from '../../assets/images/icons';
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
  border-color: #509BF7;
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
  text-align: center;
  margin-left: 0.1rem; /* 버튼과 텍스트 사이의 간격을 조정 */
`;

const MemberAddBtn = styled.button`
  width: 2.75rem;
  height: 2.75rem; 
  margin-right:1.6rem; 
  padding: 0.625rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  background: #F4F9FF;
  border: 0.02rem solid #C9E0FD; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MemberListItem = (props) => {
  const keysCount = useSelector((state) => state.keys.count); // 상태 읽기
  const { members } = useSelector(state => state.keys);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const [state,setState] = useState({
    search:"",
    results:[],
    allMembers:[]
  })

  const debouncedSearch = Debounce(state.search,300);

  useEffect(() => {
    if (members.length > 0) {
      setState(prevState => ({ ...prevState, results: members, allMembers: members }));
    }
  }, [members]);

    useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const response = await axios.get('/mock/ProfileData.json');
        const memberData = response.data;
        setState(prevState => ({ ...prevState, results: memberData, allMembers: memberData }));
        dispatch(setKeysCount({ count: memberData.length, members: memberData }));
      } catch (error) {
        console.error('Error fetching member list:', error);
      }
    };
    fetchMemberList();
  }, [dispatch]);

  
  console.log("keyscount",keysCount)
  



// 검색어에 따라 필터링
useEffect(() => {
  console.log('Debounced search:', debouncedSearch);
  if (debouncedSearch.trim() !== "") {
    const filteredResults = state.allMembers.filter(member =>
      member.nickname.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    console.log('Filtered results:', filteredResults);
    setState(prevState => ({ ...prevState, results: filteredResults }));
  } else {
    setState(prevState => ({ ...prevState, results: state.allMembers }));
  }
}, [debouncedSearch, state.allMembers]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleInput = (e) =>{
    setState(prevState=>({...prevState,search:e.target.value}));
  }

  console.log("필터링된 사람:ListItem",state.results)


  return (
    <Container>
      <CustomInput placeholder={"입력하세요"} onChange={handleInput}></CustomInput>
      <MemberIcon>
        <HumanIcon />
       {keysCount}
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
        {state.results.length > 0 ? (
          <MemberListMap
            members={state.results}
            onOpenModal={handleOpenModal}
          />
        ) : (
          <p>No members found</p>
        )}
      </MemberListBox>


    </Container>
  );
};
