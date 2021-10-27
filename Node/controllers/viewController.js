// login
exports.login = function(req, res){
    console.log("login")
    res.render('login.html')
}

// signup
exports.signup = function(req, res){
    console.log("signup")
    res.render('signup.html')
}