import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

type TError = {
  status: number;
  message: string;
  raw: any;
}

class APIClient {
  public axiosInstance: AxiosInstance;

  constructor () {
    this.axiosInstance = axios.create({
      // TODO サンプルでjsonplaceholderを
      baseURL: 'https://jsonplaceholder.typicode.com',
      withCredentials: true
    })

    this.axiosInstance.interceptors.request.use(
      function (config: AxiosRequestConfig) {
        const token = window.localStorage?.token as string
        if (token) {
          config.headers.Token = token
        }
        return config
      },
      function (error: PromiseConstructor) {
        return Promise.reject(error)
      }
    )
  }

  async getRequest (url: string, config?: AxiosRequestConfig) {
    try {
      const res = await this.axiosInstance.get(url, config)
      return this.handleResponse(res)
    } catch (e) {
      const error = this._normalizeError(e)
      console.log(error)
    }
  }

  async postRequest (url: string, data: any, config?: AxiosRequestConfig) {
    try {
      const res = await this.axiosInstance.post(url, data, config)
      return this.handleResponse(res)
    } catch (e) {
      const error = this._normalizeError(e)
      console.log(error)
    }
  }

  async deleteRequest (url: string, data: any) {
    try {
      const res = await this.axiosInstance.delete(url, data)
      return this.handleResponse(res)
    } catch (e) {
      const error = this._normalizeError(e)
      console.log(error)
    }
  }

  handleResponse (response: AxiosResponse<any>) {
    const { data, status } = response
    if (status === 200) {
      return data
    }

    throw new Error(data)
  }

  _normalizeError (error: any) {
    const normalizeError: TError = {
      status: error.response && error.response.status,
      message: error.message,
      raw: error
    }
    return normalizeError
  }
}

export default new APIClient()
