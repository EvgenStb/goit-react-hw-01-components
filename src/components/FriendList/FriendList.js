// import PropTypes from 'prop-types';
import {
  FriendsList,
  Friend,
  OnlineStatus,
  FriendImg,
} from './FriendList.styled';


export default function FriendList({ friends }) {
  const handledList = friends.map(({ id, name, avatar, isOnline }) => {
    return (
      <Friend className="item" key={id}>
        <OnlineStatus
          className="status"
          isOnline={isOnline ? true : false}
        ></OnlineStatus>
        <FriendImg
          className="avatar"
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{name}</p>
      </Friend>
    );
  });
  return <FriendsList className="friend-list">{handledList}</FriendsList>;
}

