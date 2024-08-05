import { RestApi } from './RestApi.js';
import axios from 'axios';

export class UserApi {
  /** @type RestApi */
  parent;

  axios = axios;

  /**
   *  @param {RestApi} parent
   */
  constructor(parent) {
    this.parent = parent;
  }

  /**
   *  @param {string} email
   *  @returns {Promise<axios.AxiosResponse<{ isSuccess: boolean, code: number, message: string, result: string }>>}
   */
  async createCode(email) {
    return await this.parent.client.post('/user/create-code', { email });
  }

  /**
   *  @param {string} email
   *  @param {string} code
   *  @returns {Promise<axios.AxiosResponse<{ isSuccess: boolean, code: number, message: string, result: { verified: boolean } }>>}
   */
  async confirmCode(email, code) {
    return await this.parent.client.post('/user/confirm-code', { email, code });
  }

  /**
   *  @param {string} name
   *  @param {string} nickname
   *  @param {string} email
   *  @param {string} password
   *  @returns {Promise<axios.AxiosResponse<{ isSuccess: boolean, code: number, message: string, result: { userId: number, accessToken: string } }>>}
   */
  async signup(name, nickname, email, password) {
    return await this.parent.client.post('/user/signup', {
      name,
      nickname,
      email,
      password,
    });
  }

  /** @returns {Promise<axios.AxiosResponse<{ isSuccess: boolean, code: number, message: string, result: { userId: number, name: string, nickname: string, email: string, profileImage: string } }>>} */
  async me() {
    return await this.parent.client.get('/user');
  }

  /**
   *  @param {string} email
   *  @param {string} password
   *  @returns {Promise<axios.AxiosResponse<{ isSuccess: boolean, code: number, message: string, result: { userId: number, accessToken: string } }>>}
   */
  async login(email, password) {
    return await this.parent.client.post('/user/login', { email, password });
  }
}
