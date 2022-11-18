import React,{useState} from 'react';
import styled from 'styled-components';

const MainContent = styled.section`

`;

const MyProfileBlock = styled.div`
    display:flex;
    align-items:center;
    padding: 12px;
    & img {
        width: 50px;
        height: 50px;
        border-radius: 10px;
        cursor: pointer;
        display:inline-block;
    }

    & .profile {
        display:inline-block;
        padding: 10px;

        & .profileName {
            font-size: 15px;
        }

        & .profileMsg {
            font-size: 13px;
        }
    }
`;

const FriendsBorder = styled.div`
    border-top: 0.5px solid #dcdcdc;
    margin: 10px 20px 0 12px;
    padding-top: 10px;
    & p {
        foont-size: 12px;
        color: #b4b4b4;
    }
`;

const FriendRow = styled.div`
    padding: 12px;
    & li {
        display: flex;
        align-items: center;
        & img {
            width: 50px;
            height: 50px;
            border-radius:10px;
        }

        & .profile {
            padding-left: 10px;
            & b {
                font-size:15px;
            }
        }
    }
`;

const FriendRowCell = (props) => {
    const {name,statusMsg} = props;
    const {profileImgClick, onDoubleClick} = props;

    return (
        <FriendRow>
            <li onDoubleClick={onDoubleClick}>
                <img src='/asset/base_profile.jpg' alt='profile_image' onClick={profileImgClick} />
                <div className='profile'>
                    <p><b>{name}</b></p>
                    <p>{statusMsg}</p>
                </div>
            </li>
        </FriendRow>
    )
};

const Content = ({search}) => {

    const searchRemoveBlank = search.replace(/ /g, '');

    console.log(`searchRemoveBlank:${searchRemoveBlank}`);

    const [profileName,setProfileName] = useState('박윤석');
    const [stateMsg,setStateMsg] = useState('열심히 살자');

    const friendsList = [{name:'손흥민',statusMsg:'월드컵16강 가자'},{name:'김민재',statusMsg:'나이만 먹는다'},{name:'황희찬',statusMsg:'울버햄튼 망해라'}];

    let searchedFriends = friendsList;
    if(searchRemoveBlank !== '') {
        searchedFriends = friendsList.filter(friend => {
            return friend.name.replace(/ /g, '').includes(searchRemoveBlank);
          });
    }

    const renderFriends = searchedFriends.map(friend => {
        return (
            <FriendRowCell key={friend.id} name={friend.name} statusMsg={friend.statusMsg} profileImgClick={()=>showProfile(friend)} onDoubleClick={()=>{}} />
        )
    });

    const onMyBlockDoubleClick = (e) => {

    };

    const showProfile = () => {

    };
    
    return (
        <MainContent>
            {search ? null : (
                <div>
                    <MyProfileBlock onDoubleClick={onMyBlockDoubleClick}>
                        <img src='/asset/base_profile.jpg' alt='profile_image' onClick={()=>showProfile()} />
                        <div className='profile'>
                            <p className='profileName'>
                                <b>{profileName}</b>
                            </p>
                            <p className='profileMsg'>
                                {stateMsg}
                            </p>
                        </div>
                    </MyProfileBlock>
                </div>
            )}
            <FriendsBorder>
                <p>{`친구 ${renderFriends.length}`}</p>
            </FriendsBorder>
            <ul>{renderFriends}</ul>
        </MainContent>
    )
};

export default Content;