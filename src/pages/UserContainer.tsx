import UserList from "./UserList";
import useUsersData from "../hooks/useUsersData";

const UserContainer = () => {
  const { data, error, isLoading } = useUsersData();
console.log(data)
  const props = {
    isLoading,
    error,
    data,
  };
  return <UserList {...props} />;
};

export default UserContainer;