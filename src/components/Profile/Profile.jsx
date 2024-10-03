const UserProfile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p style={{ fontSize: 20, fontWeight: 700 }} className="name">
          {username}
        </p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span style={{ fontSize: 15, fontWeight: 700 }} className="label">
            Followers
          </span>
          <span className="quantity">: {stats.followers}</span>
        </li>
        <li>
          <span style={{ fontSize: 15, fontWeight: 700 }} className="label">
            Views
          </span>
          <span className="quantity">: {stats.views}</span>
        </li>
        <li>
          <span style={{ fontSize: 15, fontWeight: 700 }} className="label">
            Likes
          </span>
          <span className="quantity">: {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
