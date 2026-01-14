// Get query parameter for post filename, e.g., post.html?file=radical-privacy-guide.md
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

const postFile = getQueryParam('file');

if (postFile) {
  fetch(`../../blog/posts/${postFile}`)
    .then(response => response.text())
    .then(markdown => {
      // Convert Markdown to HTML
      document.getElementById('post').innerHTML = marked.parse(markdown);
    })
    .catch(err => {
      document.getElementById('post').innerHTML = "<p>Error loading post.</p>";
      console.error(err);
    });
} else {
  document.getElementById('post').innerHTML = "<p>No post specified.</p>";
}
