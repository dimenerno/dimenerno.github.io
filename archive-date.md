---
layout: page
title: 날짜별로 보기
title-en: List by dates
---

{% assign postsByYearMonth = site.posts | group_by_exp: "post", "post.date | date: '%B %Y'" %}
{% for yearMonth in postsByYearMonth %}
  <h2 style="margin-bottom: 0.6em">{{ yearMonth.name }}</h2>
  <ul class="post-list">
    {% for post in yearMonth.items %}
      <li class="post-item" data-lang="{{ post.lang | default: 'ko' }}">
        <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

<script>
function filterPostItemsByLang(lang) {
  document.querySelectorAll(".post-list").forEach(ul => {
    const items = ul.querySelectorAll(".post-item");
    let visibleCount = 0;

    items.forEach(item => {
      const match = item.dataset.lang === lang;
      item.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    // h2는 ul 바로 이전 형제
    const heading = ul.previousElementSibling;
    if (visibleCount === 0) {
      ul.style.display = "none";
      if (heading && heading.tagName === "H2") {
        heading.style.display = "none";
      }
    } else {
      ul.style.display = "";
      if (heading && heading.tagName === "H2") {
        heading.style.display = "";
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ko";
  filterPostItemsByLang(savedLang);

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    // 토글 UI 상태 초기화
    toggle.checked = savedLang === "en";

    // 토글 변경 시 리스트 갱신
    toggle.addEventListener("change", () => {
      const newLang = toggle.checked ? "en" : "ko";
      localStorage.setItem("lang", newLang);
      filterPostItemsByLang(newLang);
    });
  }
});
</script>