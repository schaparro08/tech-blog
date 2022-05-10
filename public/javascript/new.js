const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post`, {
    // Create the functionality to help create the buttons for your website.
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);
