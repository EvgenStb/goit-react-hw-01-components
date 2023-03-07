import PropTypes from 'prop-types';
import { Friend, OnlineStatus, FriendImg } from './FriendListItem.styled';

export default function FriendListItem(friends) {
  return friends.map(({ id, name, avatar, isOnline }) => {
    return (
      <Friend className="item" key={id}>
        <OnlineStatus className="status" isOnline={isOnline}></OnlineStatus>
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
}

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};