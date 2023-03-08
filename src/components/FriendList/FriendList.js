import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem';
import { FriendsList } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendsList className="friend-list">
      {friends.map((friend) => (
        <FriendListItem 
        key={friend.id}
        isOnline ={friend.isOnline}
        avatar = {friend.avatar}
        name = {friend.name}
        />
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
