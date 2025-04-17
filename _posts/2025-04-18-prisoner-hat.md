---
layout: post
title: "무한 죄수 모자 문제"
date: 2025-04-18
tags: ["수학", "논리학"]
related:
---

<head>
  <style>
    .answer {
      display: none;
      margin-top: 10px;
      color: #333;
    }
  </style>
</head>

<script>
  function toggleAnswer(id) {
    const answer = document.getElementById("answer" + id);
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  }
</script>

아마 여러분은 죄수들이 자신의 모자 색을 맞추는 내용의 퍼즐을 제법 보았을 것이다. 예시는 다음과 같다.

> 3명의 죄수 A, B, C가 일렬로 서 있다. 간부는 검은 모자 2개와 흰 모자 3개 중 세 개를 골라 각 죄수에게 씌우고는, 만약 어느 한 명이라도 자신의 모자의 색을 맞추면 모두 풀려나지만 틀릴 경우 모두 사형에 처해질 것이라고 말한다. 죄수는 자기 앞에 있는 죄수들의 모자 색은 볼 수 있지만, 자신의 모자 색이나 자기 뒤에 있는 죄수들의 모자 색은 볼 수 없다. 오랜 침묵이 흐른 후, 한 죄수가 자신의 모자 색을 정확히 맞췄다. 문제를 맞춘 죄수는 누구인가?

<div onclick="toggleAnswer(1)" style="cursor: pointer; font-weight: bold; display: inline-block; margin-bottom: 1em;">
답안 보기
</div>

<div id="answer1" class="answer" style="padding-bottom: 1em;">
<p><strong>C가 정답을 맞춘다.</strong></p>
<p>만약 B와 C의 모자 색이 모두 검은색이었다면 A는 자신의 모자가 흰색임을 맞췄을 것이다. 그러나 "오랜 침묵"이 흘렀으므로, A는 자신의 모자 색을 맞추지 못하는 상황이며 이는 B, C의 모자 색이 (흰, 검), (검, 흰), (흰, 흰)의 경우 중 하나임을 시사한다.</p>
<p>이 사실을 고려했을 때, 만약 C의 모자 색이 검정색이었다면 B는 자신의 모자 색이 흰색임을 맞췄을 것이다. 그럼에도 "오랜 침묵"이 흘렀다는 것은 B 또한 자신의 모자 색을 맞추지 못하는 상황임을 의미하므로, C의 모자 색은 흰색이다.</p>
</div>

조금 더 어려운 문제도 있다.

> 100명의 죄수가 일렬로 서 있다. 간부는 각 죄수에게 검은 모자와 흰 모자를 무작위로 씌우고는, 처음에 서 있는 사람부터 차례대로 자신의 모자 색을 맞추게 시킨다. 맞추는 사람은 풀려나지만, 틀린 사람은 사형에 처해진다. 죄수들은 사전에 전략을 의논할 수 있지만 모자가 씌워진 이후부터는 정답을 외치는 것 이외의 모든 발언과 행동이 금지된다. 최대 몇 명의 생존을 확실히 보장할 수 있는가?

<div onclick="toggleAnswer(2)" style="cursor: pointer; font-weight: bold; display: inline-block; margin-bottom: 1em;">
답안 보기
</div>

<div id="answer2" class="answer" style="padding-bottom: 1em;">
<p><strong>첫 번째 죄수를 제외한 99명의 생존을 보장할 수 있다.</strong></p>
<p>첫 번째 죄수는 자신을 제외한 99명의 모자 색을 볼 수 있다. 그 중 검은색 모자가 짝수 개라면 자신의 모자 색을 검은색으로 맞추고, 홀수 개라면 흰색으로 맞춘다. 그러면 두 번째 죄수는 첫 번째 죄수가 전달한 정보와, 자기 앞에 있는 모자들 중 검은색 모자의 홀짝성을 비교함으로서 자신의 모자 색을 정확히 맞출 수 있다. 세 번째 죄수 또한 첫 번째 죄수가 전달한 정보와, 두 번째 죄수가 자신의 모자 색을 맞췄다는 사실로부터 자신의 모자 색을 정확히 맞출 수 있고, 이같은 식으로 99명이 모두 풀려날 수 있다.</p>
</div>

이제 문제를 더 괴랄하게 만들어 보자.

> **무한히 많은 죄수가 일렬로 서 있다.** 간부는 각 죄수에게 검은 모자와 흰 모자를 무작위로 씌우고는, 처음에 서 있는 사람부터 차례대로 자신의 모자 색을 맞추게 시킨다. 맞추는 사람은 풀려나지만, 틀린 사람은 사형에 처해진다. 죄수들은 사전에 전략을 의논할 수는 있지만 모자가 씌워진 이후부터는 정답을 외치는 것 이외의 모든 발언과 행동이 금지된다. 가능한 적은 죄수가 죽도록 하는 전략은 무엇인가? 단, 죄수는 각각의
