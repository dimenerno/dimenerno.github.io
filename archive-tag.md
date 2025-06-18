---
layout: page
title: 주제별로 보기
title-en: List by topics
---

<ul>
{% for tag in site.tags %}
  {% assign tag_name = tag[0] %}
  {% assign tag_posts = tag[1] %}
  {% assign representative_post = tag_posts[0] %}
  {% assign lang = representative_post.lang | default: 'ko' %}
  <li class="tag-item" data-lang="{{ lang }}">
    <a href="/tags/{{ tag_name | slugify }}">{{ tag_name }} ({{ tag_posts.size }})</a>
  </li>
{% endfor %}
</ul>

<script>
  function filterTagsByLang(lang) {
  document.querySelectorAll(".tag-item").forEach(item => {
    item.style.display = item.dataset.lang === lang ? "" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ko";
  filterTagsByLang(savedLang);

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.checked = savedLang === "en";
    toggle.addEventListener("change", () => {
      const newLang = toggle.checked ? "en" : "ko";
      localStorage.setItem("lang", newLang);
      filterTagsByLang(newLang);
    });
  }
});
  </script>