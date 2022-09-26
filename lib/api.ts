import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const errorHandling = (err: unknown) => {
  console.error(err);
  alert('알 수 없는 에러가 발생했습니다.\n잠시 후 다시 시도해주세요.');
};

export const getComments = async (): Promise<CommentRes[] | undefined> => {
  try {
    const res = await axios.get('comment');

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    errorHandling(err);
  }
};

export const postComments = async (config: Omit<CommentRes, 'createdAt' | 'id'>): Promise<number | undefined> => {
  try {
    const res = await axios({ url: 'comment', method: 'post', data: config });

    return res.status;
  } catch (err) {
    errorHandling(err);
  }
};
