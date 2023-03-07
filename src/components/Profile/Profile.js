import PropTypes from 'prop-types';
import {
  ProfileCard,
  UserInfo,
  UserPhoto,
  UserName,
  UserAbout,
  UserStatsList,
  UserStatsItem,
  UserStatsMark,
  UserStatsMarkValue,
} from './Profile.styled';
export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileCard className="profile">
      <UserInfo className="description">
        <UserPhoto src={avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <UserAbout className="tag">@{tag}</UserAbout>
        <UserAbout className="location">{location}</UserAbout>
      </UserInfo>

      <UserStatsList className="stats">
        <UserStatsItem>
          <UserStatsMark className="label">Followers</UserStatsMark>
          <UserStatsMarkValue className="quantity">
            {stats.followers}
          </UserStatsMarkValue>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsMark className="label">Views</UserStatsMark>
          <UserStatsMarkValue className="quantity">
            {stats.views}
          </UserStatsMarkValue>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsMark className="label">Likes</UserStatsMark>
          <UserStatsMarkValue className="quantity">
            {stats.likes}
          </UserStatsMarkValue>
        </UserStatsItem>
      </UserStatsList>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
