import UseUsers from "../../../../hooks/UseUsers";
const Admin = () => {
  const [users] = UseUsers();

  return (
    <div>
      <p>{users?.length}</p>
    </div>
  );
};

export default Admin;
