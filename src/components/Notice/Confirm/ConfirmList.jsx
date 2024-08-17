import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { NoticePreview } from '../NoticePreview';
import { ConfirmListMap } from './ConfirmListMap';
import { useEffect,useState } from 'react';
import axios from "axios";
import { getSubmitList } from '../../../api/Member/memberListCheck';



export const ConfirmList = () =>{
  const [requestNum, setRequestNum] = useState([]);

//  const {roomId} = useParams();
  const roomId = 8;
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSubmitList(roomId);
        const userSubmissions = data.result.userSubmissions;
        setRequestNum(userSubmissions); 
        console.log('Fetched data:', userSubmissions);

        if (userSubmissions.length > 0) {
          console.log('첫 번째 항목의 title:', userSubmissions[0].title); 
        } 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [roomId]);

  return (
    <div>
      {requestNum.length === 0 ? (
      <BoxContainer><CheckContainer>확인요청내역이 없습니다.</CheckContainer></BoxContainer>  
      ) : (
        requestNum.map((submission, index) => (
          <ConfirmListMap
            key={index}
            title={submission.title}
            start_date={submission.start_date}
            end_date={submission.end_date}
            content={submission.content}
            room_image={submission.room_image}
            pending_count={submission.pending_count}
          />
        ))
      )}
    </div>
  );
};

const BoxContainer = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const CheckContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  flex-grow: 1; 
  flex-shrink: 1; 
  height: 4.188rem;
`;



/*
const BoxContainer = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ConfirmList = () => {
  const navigate = useNavigate();
  const { roomId, postId } = useParams();

  const handleClick = () => {
    navigate(`/notice/${roomId}/confirm-list/approval`);
  };

  const posts = [
    {
      postId: 3,
      postTitle: 'test3',
      postBody: 'testcontent3',
      postImage: 'url31.com',
      startDate: '24. 7. 27. 19:05',
      endDate: '24. 7. 27. 19:05',
      submitNum: 200,
    },
    {
      postId: 2,
      postTitle: 'test2',
      postBody: 'testcontent2',
      postImage: null,
      startDate: '24. 7. 27. 19:01',
      endDate: '24. 7. 27. 19:01',
      submitNum: 0,
    },
    {
      postId: 1,
      postTitle: 'TEST',
      postBody: 'TESTCONTENT',
      postImage: 'url11.com',
      startDate: '24. 7. 25. 04:24',
      endDate: '24. 7. 25. 05:24',
      submitNum: 6,
    },
  ];
  const btnText = posts.submitNum > 0 ? `${posts.submitNum}건` : '요청 없음';

  return (
    <BoxContainer>
      {posts.map((post) => (
        <NoticePreview
          props={post}
          btnText={btnText}
          preview={true}
          onClick={handleClick}
        />
      ))}
    </BoxContainer>
  );
};

*/