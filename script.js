const form = document.getElementById('userForm');
        const userInfo = document.getElementById('userInfo');
        const themeSelect = document.getElementById('theme');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(form);
            const userData = {};
            for (const [key, value] of formData.entries()) {
                userData[key] = value;
            }
            localStorage.setItem('user', JSON.stringify(userData));
            displayUserInfo(userData);
            form.reset();
        });

        function displayUserInfo(userData) {
            userInfo.innerHTML = `
                <h2>User Card</h2>
                <p><strong>Name:</strong> ${userData.name}</p>
                <p><strong>Phone Number:</strong> ${userData.phone}</p>
                <p><strong>Village:</strong> ${userData.village}</p>
                <p><strong>City:</strong> ${userData.city}</p>
            `;
        }

        // Check if there's existing user data in localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            displayUserInfo(userData);
        }

        // Theme selector
        themeSelect.addEventListener('change', function () {
            const selectedTheme = themeSelect.value;
            document.body.className = selectedTheme === 'dark' ? 'dark-mode' : '';
            localStorage.setItem('theme', selectedTheme);
        });

        // Check if there's a stored theme preference
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            document.body.className = storedTheme === 'dark' ? 'dark-mode' : '';
            themeSelect.value = storedTheme;
        }