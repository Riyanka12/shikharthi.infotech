const nameField = document.getElementById("title-field");
const ratingField = document.getElementById("content-field");
const commentField = document.getElementById("comment-field");
const submitField = document.getElementById("submit-btn");

async function publish() {
  const name = titleField.value;
  const rating = contentField.value;
  const comment = commentField.valiue;

  await fetch("/api/submit", {
    method: "submit",
    headers: {
      "review-Type": "application/json",
    },
    body: JSON.stringify({ name, rating, comment }),
  });
}

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  submit();
  nameField.value = "";
  ratingField.value = "";
  commentField.value="";
});
