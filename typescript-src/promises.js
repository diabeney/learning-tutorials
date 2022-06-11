// <----------- Promises ---------->
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var firstArray = [2, 4, 5, 7, 8, 23, 56, 43];
var secondArray = [1, 5, 6, 7, 9, 0, 7, 5, 4, 54, 56, 79, 74];
function filterer(value) {
    var result = value.filter(function (element) { return element % 2 === 0 && element !== 0; });
    // console.log(result)
}
var evenFilter = new Promise(function (resolve, reject) {
    var spreadArray = function (a, b) {
        var result = __spreadArray(__spreadArray([], a, true), b, true);
        return result;
    };
    var finalArray = spreadArray(firstArray, secondArray);
    resolve(finalArray);
})
    .then(function (value) { filterer(value); });




const user = document.querySelectorAll('.user');
const avatar = document.querySelectorAll('.user_avatar');
const username = document.querySelectorAll('.username  > p');
const message = document.querySelectorAll('.message > p')




// Fetching Data 
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => {

    for(let i =0; i<user.length;i++) {

    }
      const getUsername = commits[20].author.login;
      const getAvatarUrl = commits[20].author.avatar_url;
      const getUserMessage = commits[20]['commit']['message']
      username.forEach(element => {
          element.innerHTML ="@"+getUsername;
      })

      avatar.forEach(avatar => {
        var imgNode = document.createElement('img');
        imgNode.src = getAvatarUrl;
        avatar.appendChild(imgNode);
      })

      message.forEach(userMessage => {
          userMessage.innerHTML = getUserMessage
      })
  })


