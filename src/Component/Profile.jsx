import useUser from "../useUser";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Profile</h1>
      <ul>
        {user.map((users) => (
          <li key={users.username}>{users.username}</li>
        ))}
      </ul>
      <NavLink to="/"> Back to Home </NavLink>
    </div>
  );
};
export default Profile;
