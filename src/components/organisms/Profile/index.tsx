import React, { FC } from "react";
import Permission from "../../atoms/Permission";
import { useAuth } from "../../contexts/Auth";

const Profile: FC = () => {
  const { user } = useAuth();

  return (
    <Permission role={user.role} perform="users:getSelf">
      <div>
        <h2>User Profile</h2>
        <ul>
          <li>ID: {user.id}</li>
          <li>Email: {user.email}</li>
          <li>Role: {user.role}</li>
        </ul>
      </div>
    </Permission>
  );
};

export default Profile;
