let submitbtn = document.getElementById("submitbtn");
let starimage = document.getElementById("starimage");
let starcontainer = document.getElementById("starcontainer");
let ratingtext = document.getElementById("ratingtext");
let heading = document.getElementById("heading");
let ratings = document.getElementById("ratings");
let thankyou = document.getElementById("thankyou");
let thankyoupara = document.getElementById("thankyoupara");
let ratingbutton = document.querySelectorAll(".ratingvalue");

// changesColorOfSelectingRating
ratingbutton.forEach((ratingvalue) =>
  ratingvalue.addEventListener("click", ratingdisplay)
);

function ratingdisplay(event) {
  ratingbutton.forEach(() => {
    event.target.style.backgroundColor = "hsl(25, 97%, 53%)";
    event.target.style.color = "white";
    selectedrating = event.target.value;
  });
}

// ShowsContentAfterSubmitting
submitbtn.addEventListener("click", thankyoumsg);
function thankyoumsg() {
  thankyou.src = "./images/illustration-thank-you.svg";
  thankyou.style.display = "block";
  starcontainer.style.display = "none";
  heading.style.marginLeft = "5.5rem";
  heading.innerHTML = "Thank you!";
  let rating = selectedrating;
  ratingtext.innerHTML = `you choose ${rating} out of 5`;
  ratingtext.style.marginTop = "15px";
  ratingtext.style.display = "block";
  thankyoupara.innerHTML =
    "<p>We appreciate you taking the time to give a rating.</p><p>If you ever need more support,dont hesitate to</p><p>get in touch!</p>";
  thankyoupara.style.textAlign = "center";
  thankyoupara.style.marginTop = "30px";
  thankyoupara.style.marginLeft = "-30px";
  ratings.style.display = "none";
  submitbtn.style.display = "none";
}
