/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface IRequest {
    url: string;
    method: string;
    body?: { [key: string]: any };
    queryParams?: any;
    useCredentials?: boolean;
    headers?: any;
    nextOption?: any;
  }

  interface IBackendResponse<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T;
  }

  interface IMeta {
    current: number;
    pageSize: number;
    pages: number;
    total: number;
  }

  interface IListResponse<T> {
    result: T[];
    meta: IMeta;
  }

  interface IBlog {
    _id: string;
    title: string;
    slug: string;
    content: string;
    author: {
      _id: string;
      email: string;
      fullname: string;
    },
    tags: string[];
    views: number;
    isPublished: boolean;
    avatar: string;
  }

}