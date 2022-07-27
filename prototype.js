function Ted (userName, email) {
 this.userName = userName;
 this.email = email;
}

Ted.prototype.login = function () {
     console.log(`${this.userName} has logged in`)
     return this;
};
Ted.prototype.logOut = function() {
     console.log(`${this.userName} has logged  out`);
     return this;
};

const td = new Ted('Beorn', 'born@gmail.co.uk');

//console.log(td.login(),td.logOut())
td.logOut().login();
console.log(td);

