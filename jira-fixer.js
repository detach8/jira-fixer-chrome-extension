const spans = document.querySelectorAll("nav span");
spans.forEach((element) => {
  renameSpacesAsProjects(element);
});

function renameSpacesAsProjects(element) {
  const text = element.innerHTML;
  if (/spaces/i.test(text)) {
    element.innerHTML = text.replace(/spaces/gi, "Projects");
  }
}
