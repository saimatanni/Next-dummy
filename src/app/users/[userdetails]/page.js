async function getUser(id) {
  let data = await fetch(`http:/localhost:3000/api/users/${id}`);
  data = await data.json();
  return data;
}

export default async function UserList({ params }) {
  let users = await getUser(params.userdetails);
  console.log('users', users)
  return (
    <div>
      <h3>User details</h3>
      <h4>
        {users[0].name}
      </h4>

    </div>
  );
}
