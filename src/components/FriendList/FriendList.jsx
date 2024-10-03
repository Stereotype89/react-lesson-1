const onlineStyle = {
  height: '15px',
  width: '15px',
  borderRadius: '50%',
  display: 'inline-block',
};

const getBgColor = variant => {
  switch (variant) {
    case false:
      return 'red';
    case true:
      return 'green';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const Panel = ({ title, children }) => (
  <div className="profile">
    <h2>{title}</h2>
    <ul className="friend-list">{children}</ul>
  </div>
);

export const Profile = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li
        className="item"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          border: 'solid 1px black',
          boxShadow: '2px 2px 2px gray',
          borderRadius: '5px',
          marginBottom: '10px',
          padding: '10px',
        }}
      >
        <span
          className="status"
          style={{ ...onlineStyle, backgroundColor: getBgColor(isOnline) }}
        ></span>
        <img
          style={{
            padding: '3px',
            marginLeft: '30px',
            marginRight: '30px',
            border: 'solid 1px',
            borderRadius: '5px',
            boxShadow: '2px 2px 2px gray',
          }}
          src={avatar}
          alt="User avatar"
          width="60"
        ></img>
        <p className="name">{name}</p>
      </li>
    </>
  );
};
