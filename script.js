document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkToggle");

  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    toggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
});
