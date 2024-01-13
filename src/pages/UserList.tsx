const UserList = ({ error, data, isLoading }) => {
  if (isLoading && !error) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>Somthing went wrong</p>;
  }
  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default UserList;
