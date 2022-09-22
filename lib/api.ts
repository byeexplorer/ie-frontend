import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const errorHandling = (err: unknown) => {
  console.error(err);
  alert('데이터를 불러오던 중, 알 수 없는 에러가 발생했습니다.');
};

export const getComments = async (): Promise<CommentRes[] | undefined> => {
  try {
    const res = await axios.get('comment');

    if (res.status === 200) {
      return res.data;
    } else {
      errorHandling(res);
    }
  } catch (err) {
    errorHandling(err);
  }
};

//TODO:
export const postComments = () => {};
