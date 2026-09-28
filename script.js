// Show the styled placeholder when a photo has not been added yet.
document.querySelectorAll('.photo-frame img').forEach((image) => {
  const markMissing = () => image.classList.add('is-missing');
  image.addEventListener('error', markMissing);
  if (image.complete && image.naturalWidth === 0) markMissing();
});
