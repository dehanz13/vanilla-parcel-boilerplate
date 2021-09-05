import axios from "axios";

const User = async () => {
  const res = await axios.get("https://randomuser.me/api");
  const user = res.data.results[0];

  console.log(user);

  const template = `
		<div class="card">
			<img src="${user.picture.large}" />
			<div class="card-body">
				<h1>${user.name.first} ${user.name.last}</h1>
				<ul>
					<li><a href="#">${user.email}</a></li>
					<li><a href="#">${user.phone}</a></li>
					<li><a href="#">${user.location.city}</a></li>
				</ul>
			<div>
		<div>
	`;

  return template;
};

export default User;
