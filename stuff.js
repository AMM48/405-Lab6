let likeBtn = document.getElementById("like-btn");
let dislikeBtn = document.getElementById("dislike-btn");
let likes = 1945;
let dislikes = 1939;
likeBtn.innerHTML += " " + likes;

dislikeBtn.innerHTML += " " + dislikes;
// let voted = false;
let like = () => {
  if (document.cookie == false) {
    likeBtn.innerHTML = "Likes " + ++likes;
    // voted = true;
    document.cookie = "voted=true" + ";Max-Age=" + 60;
  }
};

let dislike = () => {
  if (document.cookie == false) {
    dislikeBtn.innerHTML = "Dslikes " + ++dislikes;
    // voted = true;
    document.cookie = "voted=true" + ";Max-Age=" + 30;
  }
};
