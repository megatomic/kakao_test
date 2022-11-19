import useSWR, { useSWRConfig } from 'swr';
import axios from 'axios';

const AUTH_URL = 'http://localhost:3001'; //
const swrKey = 'local:/root';

const useRoot = () => {
  const { data: rootInfoStr, mutate: localMutate } = useSWR(swrKey);
  const { mutate: remoteMutate } = useSWRConfig();

  const rootInfo = JSON.parse(rootInfoStr);
  const setRootInfo = (value) => {
    localMutate(JSON.stringify(value), { revalidate: false });
  };

  const userInfo = rootInfo.user;
  const isProfileShown = rootInfo.isProfileShown;

  const setUserInfo = (user) => {
    rootInfo.user = user;
    setRootInfo(rootInfo);
  };

  const profileInfo = rootInfo.profile;

  const setProfileInfo = (profile) => {
    rootInfo.profile = profile;
    setRootInfo(rootInfo);
  };

  const setProfileShown = (flag) => {
    rootInfo.isProfileShown = flag;
    setRootInfo(rootInfo);
  };

  return {
    rootInfo,
    userInfo,
    setUserInfo,
    profileInfo,
    setProfileInfo,
    isProfileShown,
    setProfileShown,
  };
};

export default useRoot;
