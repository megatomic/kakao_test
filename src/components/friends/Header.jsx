import React, {useState} from 'react';
import styled from 'styled-components';
import FindFriendWindow from './FindFriendWindow';

const MainHeader = styled.section`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 100px;
    padding: 20px;
    width: 100%;
    z-index: 1;
    & input {
        border: none;
        outline: none;
        border-radius: 10px;
        background-color: #f6f6f6;
        width: 100%;
        padding: 5px 10px;
        &:focus {
            &::placeholder {
                color: #f6f6f6;
            }
        }
    }
`;

const TitleBlock = styled.section`
    display: flex;
    justify-content: space-between;
    & h2 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;

    }
    & i {
        cursor: pointer;
        font-size: 20px;
        top: 5px;
        right: 0px;
    }
`;

const Header = ({changeSearch}) => {

    const [isOpenFindFriend, setIsOpenFindFriend] = useState(false);

    const showFindFriend = isOpenFindFriend ? (
        <FindFriendWindow onClose={()=>isOpenFindFriend(false)} overlayClose={false} />
    ) : null;

    const onSearchChange = (e) => {
        e.preventDefault();
        changeSearch(e.target.value);
    };

    return (
        <React.Fragment>
            {showFindFriend}
            <MainHeader>
                <TitleBlock>
                    <h2>친구</h2>
                    <i className="fas fa-user-plus" title="친구 추가" onClick={()=>setIsOpenFindFriend(true)} />
                </TitleBlock>
                <input placeholder="이름 검색" onChange={onSearchChange} />
            </MainHeader>
        </React.Fragment>
    )
};

export default Header;