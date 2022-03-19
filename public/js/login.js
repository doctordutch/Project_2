async function signupFormHandler(event) {
    event.preventDefault();

  
    if (username && email && password) {
      const response = await fetch('/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
      } else {
        alert(response.statusText);
      }
    }
  }

  async function loginFormHandler(event) {
    event.preventDefault();
  
    if (email && password) {
      const response = await fetch('/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);