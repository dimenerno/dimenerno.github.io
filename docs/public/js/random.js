function goToRandomPost() {
  const lang = localStorage.getItem("lang") || "ko";
  fetch("/search.json")
    .then((res) => res.json())
    .then((posts) => {
      // 언어에 따라 필터링
      const filtered = posts.filter(post => {
        const isEnglish = post.url.includes("/en") || post.title.match(/[a-zA-Z]/);
        return lang === "en" ? isEnglish : !isEnglish;
      });

      if (filtered.length === 0) {
        alert("해당 언어로 된 포스트가 없습니다.");
        return;
      }

      const randomPost = filtered[Math.floor(Math.random() * filtered.length)];
      window.location.href = randomPost.url;
    })
    .catch((err) => {
      console.error("search.json 로드 실패", err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const randomBtn = document.getElementById("random-post-button");
  if (randomBtn) {
    randomBtn.addEventListener("click", goToRandomPost);
  }
});