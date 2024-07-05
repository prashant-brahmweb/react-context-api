import { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Simulate fetching user data (replace with your actual logic)
    const fetchUser = async () => {
      const response = await fetch("https://fakestoreapi.com/users"); // Replace with your API endpoint
      const userData = await response.json();
      console.log(userData);
      setUser(userData);
    };
    fetchUser();
  }, []);

//   data.map((data) => {
//     console.log(data.username);
//     setUser(user.concat(data.username))
//   });

//   console.log(user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
