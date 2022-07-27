const userOne = {
     username: 'Mario',
     email: 'maria@gmail.com'
     ,

     login() {
          console.log('user logged in');
     },
     loggedOut() {
          console.log('user logged  out')
     }
}


console.log(userOne.email, userOne.login())




const userTwo = {
     username: 'chun-li',
     email: 'maria@gmail.com'
     ,
     login() {
          console.log('user logged in');
     },
     loggedOut() {
       //   console.log('user logged  out')
     }
 }

 class User {
     constructor(userName, email) {
          this.userName = userName;
          this.email = email
          this.score = 0;
     }

   loggedOut () {
     console.log(`${this.userName} just logged`);
     return this;
   }

     login() {
          console.log(`${this.userName} just logged in`);
          return this;
     }

     incScore() {
          this.score ++
          console.log(`${this.userName} has a score  of ${this.score}`);
          return this;
     }
 }

 class Admin extends User {

constructor(userName, email, title) {
     super(userName, email)
     this.title = title;

}


     deleteUser(user) {
          users = users.filter( u => u.userName !== user.userName);
     }
 }

 const UserOne = new User('James','james@gmail.com');

 const UserTwo2 = new User('Clerk','clerk@gmail.com');
 const UserThree = new Admin('chun-li','chunli@netninja.co.uk', 'black-belt-ninja')


console.log(UserOne,UserTwo2,UserThree)

let users = [UserOne, UserTwo2, UserThree]

console.log(UserThree)

  

// 
// console.log(users)
// UserThree.deleteUser(UserTwo2)
// console.log(users);
 // use return in the Object when  doing method chaining,
 //UserOne.login().incScore().incScore().loggedOut();