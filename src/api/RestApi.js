import axios from "axios"
import { UserApi } from "./UserApi"

export class RestApi {

  static instance = new RestApi()

  client = axios.create({ baseURL: "http://read-me.kro.kr:8000" })

  /** @type number */
  authorizationHeaderInterceptor

  user = new UserApi(this)

  /** @param {string} token */
  applyJwt(token) {
    localStorage.setItem("token", token)
    if (this.authorizationHeaderInterceptor)
      this.client.interceptors.request.eject(this.authorizationHeaderInterceptor)

    this.authorizationHeaderInterceptor = this.client.interceptors.request.use(
      config => {
        config.headers = { ...config.headers, "Authorization": `Bearer ${token}` }
        return config
      }
    )
  }

  clearJwt() {
    localStorage.removeItem("token")
    if (this.authorizationHeaderInterceptor)
      this.client.interceptors.request.eject(this.authorizationHeaderInterceptor)
  }

  async autoLogin() {
    const savedToken = localStorage.getItem("token")
    if (!savedToken) return null

    this.applyJwt(savedToken)
    return await this.user.me().then(it => it.data)
  }

  async login(email, password) {
    const { result: { accessToken } } = await this.user.login(email, password).then(it => it.data)

    this.applyJwt(accessToken)
    const response = await this.user.me()
    return response.data
  }

  async logout() {
    this.clearJwt()
  }

}
