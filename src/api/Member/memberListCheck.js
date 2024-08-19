import { DeleteAxiosInstance, GetAxiosInstance } from '../../axios/axios.method.js';
import { nicknameCheck, roomInfo } from '../Auth/authEnter.js';

//멤버리스트 가져오기(전체, 개인)
export const getMemberList = async (searchInput, roomId) => {
    try {
      const response = await GetAxiosInstance(`/admin/users`, {
        params: {
          nickname: searchInput,
          roomId: roomId
        }
      });
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('Error fetching member list:', error);
      throw error; 
    }
  };

export const getMemberInvitation = async (roomId) => {
  const response = await GetAxiosInstance(`/admin/invitation/${roomId}`);
  return response.data;
};

export const getMyInfo = async () => {
  const response = await GetAxiosInstance(`/user/profile`);
  console.log(response.data);
  return response.data;
};

export const getMemberBan = async (nickname, roomId) => {
  try {
    const response = await DeleteAxiosInstance(`/admin/user-ban`, {
      data: {
        nickname: nickname,
        room_id: roomId,
      },
    });
    console.log(response.data.result);
    return response.data.result;
  } catch (error) {
    console.error('Error banning member:', error);
    throw error;
  }
};

  export const getPenalty = async({roomId,userId}) =>{
    const response = await GetAxiosInstance(`/admin/profile`,{
      params:{
        roomId : roomId,
        userId : userId
      }
    })
    console.log("불러온패널티데이터",response.data)
    return response.data;
  }
  
  export const getSubmitList = async({roomId}) =>{
    const response = await GetAxiosInstance(`/admin/posts/${roomId}`)
    console.log("확인요청내역:",response.data)
    console.log("확인요청내역:",response.data.result)
    return response.data;
  }

  export const getSubmitRequest = async ({roomId,postId,status}) => {
      const response = await GetAxiosInstance(`/admin/submit/${roomId}/${postId}?state=${status}`);
      console.log("확인요청내역 수락 혹은 거절:", response.data);
      return response.data;
  };

