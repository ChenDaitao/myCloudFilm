/*
 * @Date: 2023-01-30 15:24:35
 * @LastEditTime: 2023-01-31 11:13:01
 * @Description:
 */
import axios from "./interceptors";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

// 返回类型限制
type Result<T> = {
  code: number;
  message: string;
  result: T;
};

/**
 * 生成随机字符串
 *  @param range - 长度
 * @param pureNumber - 是否返回纯数字组成的字符
 *
 */
function randomString(range: number, pureNumber?: boolean): string {
  let str = "";
  const arrStr = pureNumber
    ? "0123456789"
    : "abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789";
  const wordList = arrStr.split("");

  for (let i = 0; i < range; i++) {
    const index = Math.round(Math.random() * wordList.length - 1);
    str += arrStr[index];
  }
  return str;
}

class Api {
  get<T = AnalyserOptions>(
    url: string,
    param?: RequestParams,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const _ts: string = randomString(8);
    const params = Object.assign({}, param, { _ts });
    const configs = Object.assign({}, config as object, { params });
    return axios.get(url, configs);
  }

  post<T = any>(
    url: string,
    params?: RequestParams | string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return axios.post(url, params, config);
  }

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return axios.delete(url, config);
  }

  put<T = any>(
    url: string,
    params?: RequestParams,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return axios.put(url, params, config);
  }
}

export default new Api();
