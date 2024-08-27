document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent form from submitting the default way

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            message.textContent = 'Please fill in all fields.';
            return;
        }

        try {
          const response = await fetch('/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({username, password}),
          });
          
          const data = await response.json();
          if(response.ok) {
              message.textContent = data.message;
              message.style.color = 'green';
          } else {
              message.textContent = data.message;
          }

          
    } catch(error) {
      message.textContent='An error occured.';
      console.error(error);
    }

  });
            
});

