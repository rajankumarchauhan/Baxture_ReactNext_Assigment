"use client";
import { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";
import "./UserCard/UserCard.css";

export default function UserCollection() {
  const [users, setUsers] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then((data)=>{
        let filteredData = data.map(item => ({ name: item.name, email: item.email, phone: item.phone, website: item.website }));
        setUsers(filteredData);
    }).catch((err)=>{
      console.log(err);
    })
  }, [])

  const deleteUser = (id)=>{
    let updatedUsers = [...users];
    updatedUsers.splice(id, 1);
    setUsers(updatedUsers);
  }
  const toggleFollow = (email)=>{
    let followed = [...followedUsers];
    const index = followed.indexOf(email);
    if (index !== -1) {
        followed.splice(index, 1);
    }
    else{
        followed.push(email);
    }
    setFollowedUsers(followed);
  }

  return (
  <>
    <div className="userCollection">
        {users.length>0 && users.map((user, id)=>{
            return <UserCard name={user.name} email={user.email} phone={user.phone} website={user.website} key={id} onDeleteUser={()=>{deleteUser(id)}} onToggleFollow={()=>{toggleFollow(user.email)}} followers={followedUsers}/>
        })}
    </div>
  </>
  );
}
