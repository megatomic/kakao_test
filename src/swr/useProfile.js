import useSWR, { useSWRConfig } from 'swr';
import axios from 'axios';

const AUTH_URL = 'http://localhost:3001'; //
const swrKey = 'local:/chat';

const useProfile = () => {
  const { data: profileInfo, mutate: localMutate } = useSWR(swrKey);
  const { mutate: remoteMutate } = useSWRConfig();

  const setProfileInfo = (value) => {
    localMutate(value, { revalidate: false });
  };

  return {
    profileInfo,
    setProfileInfo,
    hideProfile: () => {
      remoteMutate(
        swrKey,
        async (curData) => {
          const res = await axios.post(`${AUTH_URL}/login`, {});
          const resultInfo = res.data;
          const newData = { ...curData, logined: resultInfo.resultCode === 0 ? true : false, authToken: resultInfo.data.authToken };

          return newData;
        },
        { revalidate: false }
      );
    },
  };
};

export default useProfile;
