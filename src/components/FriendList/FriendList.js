import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendsList } from './FriendList.styled';


export default function FriendList({friends}) {
  return <FriendsList className="friend-list">{FriendListItem(friends)}</FriendsList>;
}

FriendList.propTypes = {
  friends: PropTypes.array,
};