import React, { useContext, useState, useEffect } from "react";
import { appContext } from "../../../../context/AppProvider";
import Button from "../../Custom/Button";
import { getUsers } from "../../../api/UserApi/getUsers";
import { User } from "../../../model/User";
import { toast } from "react-hot-toast";

const Admin = () => {
  const [users, setUsers] = useState<User[] | []>([]);

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

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <>
      {user?.admin && (
        <div className="w-[20em] bg-second h-[70%] xl:w-[40em] rounded-[90px] flex flex-col gap-5 items-center">
          <p className="mt-7 text-fourth text-opacity-50 font-bold text-2xl">Manage users</p>
          <Button label="Add new user" secondary />
          <div className="bg-first flex flex-col gap-4 rounded-2xl">
            {users.map((user) => {
              return (
                <div key={user.id} className="flex justify-between items-center w-[15em] xl:w-[30em] mt-5">
                  <p className="flex-grow text-fourth text-opacity-100 ml-4 text-lg">{user.username}</p>
                  <Button label="Delete" third />
                  <Button label="Edit" primary />
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
