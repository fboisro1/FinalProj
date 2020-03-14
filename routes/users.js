var express = require('express');
var router = express.Router();

//An array for user on the server

let serverUserArray = [];

//constructor for the user object on the server
var UserObj = function (pUserWage, pUserHours, pName) {
  this.UserWage = pUserWage;
  this.UserHours = pUserHours;
  this.Name = pName;
  this.ID = serverUserArray.length + 1;
  
}

serverUserArray.push(new UserObj(25, 84, "Sefu Kaba"));
serverUserArray.push(new UserObj(27, 86, "Roofus"));
serverUserArray.push(new UserObj(28, 85, "Roody"));

//POST to addNewUser
router.post('/addNewUser', function(req, res){
  console.log(req.body);
  serverUserArray.push(req.body);
  console.log(serverUserArray);
  res.status(200).send(JSON.stringify('success'));
});

//GET userList

router.get('/userList', function(req, res){
  res.json(serverUserArray);
});

module.exports = router;
