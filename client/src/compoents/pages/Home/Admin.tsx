import React, { useContext, useState, useEffect } from "react";
import { appContext } from "../../../../context/AppProvider";
import Button from "../../Custom/Button";
import { getUsers } from "../../../api/UserApi/getUsers";
import { User } from "../../../model/User";
import { toast } from "react-hot-toast";
import { createPortal } from "react-dom";
import AddUserModal from "../../Modals/AddUserModal";
import { deleteUser } from "../../../api/UserApi/deleteUser";
import EditUserModal from "../../Modals/EditUserModal";

const Admin = () => {
  const [users, setUsers] = useState<User[] | []>([]);
  const [addUser, setAddUser] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { user } = useContext(appContext);

  const fetchAllUsers = async () => {
    try {
      const response = await getUsers();
      if (response.success && response.data) {
        setUsers(response.data);
      } else {
        console.log(response.error);
        toast.error("Error while loading users, please try again later...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      const userToDelete = users?.find((user) => user.id === userId);
      if (userToDelete?.id === userId) {
        await deleteUser(userId);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        toast.success("User deleted successfully!");
      } else {
        toast.error("Error while deleting user, please try again later...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <>
      {user?.admin && (
        <div className="w-[20em] bg-second h-[23em] xl:h-[70%] xl:w-[40em] rounded-[90px] flex flex-col gap-5 items-center">
          <p className="mt-7 text-fourth text-opacity-50 font-bold text-2xl">Manage users</p>
          <Button label="Add new user" secondary onClick={() => setAddUser(true)} />
          {addUser && createPortal(<AddUserModal onCancel={() => setAddUser(false)} />, document.body)}
          <div className="bg-first bg-opacity-20 flex flex-col gap-4 rounded-2xl scroll-modern overflow-y-auto max-h-[20em]">
            {users.map((user) => {
              return (
                <div key={user.id} className="flex justify-between items-center w-[15em] xl:w-[30em] mt-5 ">
                  <p className="flex-grow text-fourth text-opacity-100 ml-4 text-lg">
                    {user.username} <span className="text-red-700 font-bold text-base text-opacity-80"> {user.admin ? "(ADMIN)" : ""}</span>
                  </p>
                  <Button label="Delete" onClick={() => user.id && handleDeleteUser(user.id)} third />
                  <Button
                    label="Edit"
                    onClick={() => {
                      setEditUser(true);
                      setSelectedUser(user);
                    }}
                    primary
                  />
                  {editUser &&
                    createPortal(
                      <EditUserModal onCancel={() => setEditUser(false)} user={selectedUser} setEditUser={setEditUser} />,
                      document.body
                    )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
