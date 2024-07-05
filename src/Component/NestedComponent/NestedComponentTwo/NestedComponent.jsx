import useUser from "../../../useUser";
import { NavLink } from "react-router-dom";

const NestedComponent = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Nested Component</h1>
      <ul>
        {user.map((users) => (
          <li key={users.username}>{users.username}</li>
        ))}
      </ul>
      <NavLink to="/"> Back to Home </NavLink>
    </div>
  );
};
export default NestedComponent;
