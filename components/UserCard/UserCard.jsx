import { Avatar, Text, Button, Paper } from "@mantine/core";
import "./UserCard.css";
import { At, PhoneCall, World, UserPlus, UserMinus, Trash, Star } from "tabler-icons-react";
import Link from "next/link";

export default function UserCard({name, email, phone, website, onDeleteUser, followers, onToggleFollow}) {
  const deleteUser = ()=>{
    onDeleteUser();
  }
  const toggleFollow = ()=>{
    onToggleFollow();
  }
  const isFollowed = followers.includes(email);
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      bg="var(--mantine-color-body)"
      className="userBox"
    >
      <Avatar
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
        size={120}
        radius={120}
        mx="auto"
      />
      <div className="userDetailsBox">
        <Text ta="center" fz="lg" fw={500} mt="md">
          {name}
          {isFollowed && <Star
              size={15}
              strokeWidth={2}
              color={"black"}
              className="starIcon"
            />}
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          <div className="userDetail">
            <At
              size={15}
              strokeWidth={2}
              color={"#868e96"}
              className="userDetailIcons"
            />
            <Link href={`mailto:${email}`} className="userDetailLink">
              {email}
            </Link>
          </div>
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          <div className="userDetail">
            <PhoneCall
              size={15}
              strokeWidth={2}
              color={"#868e96"}
              className="userDetailIcons"
            />
            <Link href={`tel:${phone}`} className="userDetailLink">
              {phone}
            </Link>
          </div>
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          <div className="userDetail">
            <World
              size={15}
              strokeWidth={2}
              color={"#868e96"}
              className="userDetailIcons"
            />
            <Link href={`https://${website}`} className="userDetailLink">
              {website}
            </Link>
          </div>
        </Text>
      </div>

      <div className="buttonBox">
        <Button variant="default" fullWidth mt="md" className={!isFollowed?"followButton":"unfollowButton"} onClick={toggleFollow}>
          {!isFollowed && <UserPlus
            size={15}
            strokeWidth={2}
            color={"#ffffff"}
            className="buttonIcons"
          />}
          {isFollowed && <UserMinus
            size={15}
            strokeWidth={2}
            color={"black"}
            className="buttonIcons"
          />}
          {!isFollowed?"Follow":"Unfollow"}
        </Button>
        <Button variant="default" fullWidth mt="md" className="deleteButton" onClick={deleteUser}>
          <Trash
            size={15}
            strokeWidth={2}
            color={"#228BE6"}
            className="buttonIcons"
          />
          Delete
        </Button>
      </div>
    </Paper>
  );
}
