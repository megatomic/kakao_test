import useSWR, { useSWRConfig } from 'swr';
import axios from 'axios';

const AUTH_URL = 'http://localhost:3001'; //
const swrKey = 'local:/chat';

const useChat = () => {
  const { data: chatInfo, mutate: localMutate } = useSWR(swrKey);
  const { mutate: remoteMutate } = useSWRConfig();

  const setChatInfo = (value) => {
    localMutate(value, { revalidate: false });
  };

  return {
    chatInfo,
    setChatInfo,
    requestLogin: (loginID, loginPW) => {
      remoteMutate(
        swrKey,
        async (curData) => {
          const res = await axios.post(`${AUTH_URL}/login`, { loginID, loginPW });
          const resultInfo = res.data;
          const newData = { ...curData, logined: resultInfo.resultCode === 0 ? true : false, authToken: resultInfo.data.authToken };

          return newData;
        },
        { revalidate: false }
      );
    },
    requestLogout: (loginID) => {
      remoteMutate(
        swrKey,
        async (curData) => {
          axios.post(`${AUTH_URL}/loout`, { loginID }).then((res) => res.data);
          const newData = { ...curData, logined: false, authToken: null };

          return newData;
        },
        { revalidate: false }
      );
    },
  };
};

export default useChat;
