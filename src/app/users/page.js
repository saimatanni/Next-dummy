import Link from "next/link";

async function getUser() {
  let data = await fetch("http:/localhost:3000/api/users");
  data = await data.json();
  return data;
}
export default async function UserList() {
  let users = await getUser();
  return (
    <div>
      <h1>User List</h1>
      {users.map((item) => (
        <div key={item.id}>
          <p>
            <Link href={`users/${item.id}`}> {item.name}</Link>
          </p>
        </div>
      ))}
    </div>
  );
}
