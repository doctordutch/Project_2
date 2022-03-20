async function logout() {
    const response = await fetch('/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }

//  passport.deserializeUser(function(user, done) {
//    done(null, {id: user.id, email: user.email, role: user.role});
//  });


  document.querySelector('#logout').addEventListener('click', logout);