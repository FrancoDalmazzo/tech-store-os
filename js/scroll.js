const bar = document.getElementById("progressBar");
const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  bar.style.width = `${progress}%`;
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
