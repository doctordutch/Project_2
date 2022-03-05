const routeHome = (req, res, next) => {
    const context = {
      name: 'Justin',
      date: new Date()
    }
    res.render('home', context)
  }
  
  module.exports = routeHome