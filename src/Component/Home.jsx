import useUser from "../useUser";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {user.map((users) => (
          <li key={users.username}>{users.username}</li>
        ))}
      </ul>
      <NavLink to="/profile" > Go to profile </NavLink>
    </div>
  );
};

export default Home;
