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
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching member list:', error);
      throw error; // 호출 측으로 에러를 전달
    }
  };

export const getMemberInvitation = async(roomId) =>{
    const response = await GetAxiosInstance(`/admin/invitation/${roomId}`)
    console.log(response.data);
    return response.data;
}

export const getMyInfo = async()=>{
    const response = await GetAxiosInstance(`/user/profile`)
    console.log(response.data);
    return response.data;
}

export const getMemberBan = async (nickname, roomId) => {
    try {
      const response = await DeleteAxiosInstance(`/admin/user-ban`, {
        data : {
        nickname: nickname,
        room_id: roomId
        }
      });
      console.log(response.data.result);
      return response.data.result;
    } catch (error) {
      console.error('Error banning member:', error);
      throw error;
    }
  };