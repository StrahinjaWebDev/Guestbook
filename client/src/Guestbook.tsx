import React, { useEffect, useState } from "react";
import { User } from "./model/User";
import { getUsers } from "./api/UserApi/getUsers";

function GuestBook() {
  const [users, setUsers] = useState<User[] | []>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      if (response.success) {
        if (response.data) setUsers(response.data);
      } else {
        console.error(response.error);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);
  return <div></div>;
}

export default GuestBook;
