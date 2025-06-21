---
layout: page
title: 랜덤 포스트
title-en: Go to a random post
date: 2024-04-04
---

<style>
  .fade-in {
    opacity: 0;
    animation: fadeIn 0.8s ease-in-out forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const postElement = document.querySelector(".content");
    if (postElement) {
      postElement.innerHTML = "";
    }

    const lang = localStorage.getItem("lang") || "ko";

    fetch("/search.json")
      .then(res => res.json())
      .then(posts => {
        const filtered = posts.filter(post => {
          const isEnglish = post.url.includes("/en") || post.title.match(/[a-zA-Z]/);
          return lang === "en" ? isEnglish : !isEnglish;
        });

        if (filtered.length === 0) {
          document.body.innerHTML = "<h2>해당 언어로 된 포스트가 없습니다.</h2>";
          return;
        }

        const randomPost = filtered[Math.floor(Math.random() * filtered.length)];
        window.location.href = randomPost.url;
      })
      .catch(err => {
        document.body.innerHTML = "<h2>search.json 로드 실패</h2>";
        console.error(err);
      });
  });
</script>

<noscript>
  No Javascript support exception
</noscript>