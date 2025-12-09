const fetchBtn = document.getElementById('fetch-btn');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userImg = document.getElementById('user-img');

async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();

        const user = data.results[0];
        const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
        const email = user.email;
        const picture = user.picture.large;

        // Update the DOM
        userName.textContent = fullName;
        userEmail.textContent = email;
        userImg.src = picture;

    } catch (error) {
        console.error('Error fetching user:', error);
        alert('Failed to fetch user. Please try again.');
    }
}

// Event listener for button click
fetchBtn.addEventListener('click', fetchRandomUser);

// Fetch a user on page load
fetchRandomUser();
