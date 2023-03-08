import PropTypes from 'prop-types';
import { Friend, OnlineStatus, FriendImg } from './FriendListItem.styled';

export const FriendListItem = ({
  id, isOnline, avatar, name}) => {
  return (<Friend className="item" >
        <OnlineStatus
          className="status"
          isOnline={isOnline}
        ></OnlineStatus>
        <FriendImg
          className="avatar"
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{name}</p>
      </Friend>); };
  

FriendListItem.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
