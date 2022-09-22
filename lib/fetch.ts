import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const getComments = () => {
  axios
    .get('comment')
    .then((res) => {
      //FIXME: with typescript & data fection
      console.log('res', res.data);
      return res;
    })
    .catch((err) => {
      console.error('[Error]', err);
      // alert(`에러가 발생했습니다. ${err}`);
    });
};

//TODO:
const postComments = () => {};
