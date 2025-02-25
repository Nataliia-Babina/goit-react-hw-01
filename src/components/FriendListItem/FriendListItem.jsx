import css from "../FriendList/FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.container}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <h3 className={css.name}>{name}</h3>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;