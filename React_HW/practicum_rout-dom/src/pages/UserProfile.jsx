import { useParams } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "Max",
    age: "30",
    bio: "Software Developer",
  },
  {
    id: 2,
    name: "Alice",
    age: "27",
    bio: "QA Tester",
  },
  {
    id: 3,
    name: "john",
    age: "25",
    bio: "UI/UX Designer",
  },
];

function UserProfile() {
  const { userId } = useParams();
  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return <h2>Пользователь не найден</h2>;
  }

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default UserProfile;
