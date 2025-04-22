---
layout: page
title: 주제별로 보기
---

{% capture tags %}
{% for tag in site.tags %}
{{ tag[1].size | plus: 1000 }}#{{ tag[0] }}#{{ tag[1].size }}
{% endfor %}
{% endcapture %}

{% assign sortedtags = tags | split: ' ' | sort %}

<ul>
{% for tag in sortedtags reversed %}
    {% assign tagitems = tag | split: '#' %}
    <li><a href="/tags/{{ tagitems[1] | slugify }}">{{ tagitems[1] }} ({{ tagitems[2] }})</a></li>
{% endfor %}
<li style="color: white;">피부 미용 (김현서)</li>
<li style="color: white;">자녀 양육 (김현서)</li>
</ul>

<!-- {% assign postsByYearMonth = site.posts | group_by_exp: "post", "post.date | date: '%B %Y'" %}
{% for yearMonth in postsByYearMonth %}
  <h2>{{ yearMonth.name }}</h2>
  <ul>
    {% for post in yearMonth.items %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %} -->
