window.addEventListener('DOMContentLoaded', () => {
  async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
  }

  async function renderUsers() {
    const users = await getUsers();
    const userList = document.getElementById('user-list');

    users.forEach((user) => {
      const li = document.createElement('li');
      li.innerHTML = `
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
            `;
      userList.appendChild(li);
    });
  }

  renderUsers().catch((error) => console.error(error));
});
