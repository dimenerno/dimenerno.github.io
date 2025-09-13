---
layout: post
title: "자연수라는 신기루: 논리와 언어에 관한 짧은 이야기"
date: 2025-09-13
tags: ["철학", "논리학"]
related:
---

어느 날 디멘은 외계인을 만났습니다. 외계인이 디멘에게 물었습니다.

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>외계인</strong>
<p>인간들이 사용하는 개념 중에서 이해되지 않는 게 있어. 도대체 자연수가 뭐야?</p>
</div>

<img src="/public/low1.png" style="width: 100%; max-width: 500px; margin: 0 auto">

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>디멘</strong>
<p>뭐긴 뭐야. 자연수란 1부터 시작해서 2, 3, … 이렇게 순서대로 나아가는 수 체계야.</p>
<strong>외계인</strong>
<p>음…그러면 이것도 자연수야?</p>
</div>

<img src="/public/low2.png" style="width: 100%; max-width: 400px; margin: 0 auto">

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>디멘</strong>
<p>엥, 그럴 리가! 자연수는 끝없이 이어져.</p>
<strong>외계인</strong>
<p>끝없이 이어진다고? 고리를 이룬다는 말인가? 그럼 1, 2, 3, 4, 5, 3, 4, 5, 3, 4, 5, … 이렇게 끝없이 이어지는데.</p>
</div>

<img src="/public/low3.png" style="width: 100%; max-width: 400px; margin: 0 auto">

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>디멘</strong>
<p>맙소사, 그 뜻이 아니야. 고리 같은 거 없이 끝없이 이어져.</p>
<strong>외계인</strong>
<p>흠...그럼 중간에 가지라도 치나?</p>
</div>

<img src="/public/low4.png" style="width: 100%; max-width: 450px; margin: 0 auto">

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>디멘</strong>
<p>그것도 아니야! 가지는 없어!</p>
<strong>외계인</strong>
<p>알겠어. 그렇다면 혹시 $c$도 자연수니?</p>
<strong>디멘</strong>
<p>$c$라니, 무슨 말이야?</p>
<strong>외계인</strong>
<p>너가 알려준 자연수의 정의대로라면 $c$가 자연수가 아닐 이유는 없는데? 자연수는 끝없이 이어진다고 했지만 모든 자연수가 그러한 연쇄에 포함된다고 말하지는 않았잖아.</p>
</div>

<img src="/public/low5.png" style="width: 100%; max-width: 450px; margin: 0 auto">

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>디멘</strong>
<p>저건 또 뭐야... 자연수에는 자연수밖에 없어!</p>
<strong>외계인</strong>
<p>자연수에는 자연수밖에 없다니, 순환논법이 따로 없네.</p>
<strong>디멘</strong>
<p>너 지금 나 놀리는 거지?</p>
<strong>외계인</strong>
<p>무슨 소리야, 난 진짜 자연수가 뭔지 모르겠어. 너야말로 자연수의 정의를 제대로 알려줘야 내가 이해를 할 거 아니야.</p>
<strong>디멘</strong>
<p>자연수란...음...그러니까...하, 이걸 어떻게 설명하지!</p>
</div>

<img src="/public/low6.jpg" style="width: 100%; max-width: 500px; margin: 0 auto">

그 순간, 데데킨트라는 사람이 나타났습니다.
<div style="margin: 2em auto"></div>

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>데데킨트</strong>
<p>내가 이 문제를 확실히 해결해 주지. 자연수란 다음 세 가지 조건을 만족하는 집합을 말해. 이 세 가지 조건을 만족하는 집합이 유일하다는 사실은 내가 증명해 놓았으니 더 이상 오해의 여지라고는 없지.</p>
</div>

> **데데킨트의 자연수 정의.** 집합 $A$, 원소 $e \in A$, 그리고 함수 $S: A \to A$가 다음 세 가지 조건을 만족한다면 $A, e, S$는 각각 자연수 집합, $0$, 그리고 $x \mapsto x + 1$에 대응된다.
>
> 1. $S(x) = e$를 만족하는 $x$는 존재하지 않는다.
> 2. $S(x) = S(y)$라면 $x = y$이다.
> 3. $A$를 정의역으로 하는 임의의 명제 $P(x)$에 대해 다음 두 조건이 성립한다면 $P(x)$는 $A$의 모든 원소에 대해 참이다.
>    1. $P(0)$이 참이다.
>    2. $P(x)$가 참이라면 $P(S(x))$가 참이다.

데데킨트의 대답에 외계인은 흡족해했지만, 이내 또다시 의아하다는 표정을 지었습니다.
<div style="margin: 2em auto"></div>


<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>외계인</strong>
<p>세 번째 조건에 "임의의 명제"라는 표현이 말이 돼? $P(x)$가 임의의 명제라면 $P(x)$는 "$x$가 자연수이다" 가 될 수도 있잖아. 하지만 자연수의 정의에 자연수에 대한 명제가 포함되는 건 순환논법일 텐데?</p>
<strong>데데킨트</strong>
<p>엇...그런가...?</p>
<strong>외계인</strong>
<p>애초에 "명제"라는 것이 정확히 뭐야? "$x$는 자기 자신을 포함하지 않는 집합이다" 는 잘 정의된 명제야?</p>
<strong>디멘</strong>
<p>(만약 $x$가 자기 자신을 포함하지 않는 집합이라면 $x$는 $x$의 정의에 해당하므로 자기 자신을 포함하게 되고, $x$가 자기 자신을 포함하는 집합이라면 $x$는 $x$의 정의에 해당하지 않으므로 자기 자신을 포함하지 않게 되고...엥?)</p>
</div>

<div style="margin: 1em auto"></div>
뜻밖의 지적에 데데킨트가 우물쭈물하자 옆에서 뢰벤하임이라는 사람이 끼어들었습니다. 
<div style="margin: 2em auto"></div>

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>뢰벤하임</strong>
<p>확실히 "임의의 명제"라는 표현은 문제가 있어 보이네. 아무래도 수학에서 이런 표현은 제한해야겠어. 이렇게 제한된 논리학을 <strong>1차 논리</strong>라고 부르자.</p>
</div>

<img src="/public/low7.jpg" style="width: 100%; max-width: 500px; margin: 0 auto">

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>데데킨트</strong>
<p>그렇다면 이제 어떻게 1차 논리로 자연수를 정확하게 정의할 수 있는지 알아봐야겠군.</p>
</div>

<div style="margin: 1em auto"></div>
이 말에 스콜렘이라는 사람이 불쑥 나타났습니다.
<div style="margin: 2em auto"></div>

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>스콜렘</strong>
<p>맞아. 그리고 내가 이 질문에 대한 답을 발견했어.</p>
</div>

<div style="margin: 1em auto"></div>
스콜렘의 발언에 모두가 주의를 집중했습니다.
<div style="margin: 2em auto"></div>

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>스콜렘</strong>
<p><strong>불가능해.</strong> 1차 논리로는 자연수의 필요충분조건을 기술할 수 없어. 구체적으로, 자연수의 정의를 시도하는 모든 1차 논리적 정의에는 자연수가 아닌 반례가 존재해. <strong>따라서 자연수는 논리로 환원될 수 없어.</strong> 자연수를 순환논법 없이는 정의할 수 없다는 말이야.</p>
</div>

> **뢰벤하임-스콜렘 정리.** 자연수를 비롯하여, 원소가 무한히 많은 수 체계는 1차 논리로 유일하게 특정될 수 없다.

<img src="/public/low8.jpg" style="width: 100%; max-width: 400px; margin: 2em auto">

순간 정적이 흘렀습니다.
<div style="margin: 2em auto"></div>

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>외계인</strong>
<p>그렇다면 인간들은 어떻게 자연수가 뭔지 아는 거야? 알고 보면 인간들은 저마다 자연수를 다르게 알고 있는 거 아냐?</p>
</div>

<div style="margin: 1em auto"></div>
외계인의 질문에 아무도 대답하지 못했습니다. 그들은 신기루 같은 자연수의 실체에 대해 할 말이 더 이상 남아 있지 않았습니다.
<div style="margin: 2em auto"></div>


<img src="/public/low9.png" style="width: 100%; max-width: 400px; margin: 0 auto">

_Note._ 이야기의 자연스러운 흐름을 위해 왜곡된 역사적 · 수학적 · 철학적 내용이 있습니다. 1차 논리의 탄생은 뢰벤하임을 비롯한 여러 수학자들의 점진적인 연구로 이루어졌습니다. 또한 데데킨트의 자연수 정의가 사용하는 2차 논리가 정말로 순환적인지에 관해서는 더 자세한 논의가 필요합니다. 마지막으로 스콜렘의 역설은 자연수에 관한 것이 아닌 집합론에 관한 것인데, 뢰벤하임-스콜렘 정리의 귀결이라는 점에서 두 현상은 유사하기 때문에 말풍선에 넣었습니다.

### 더 읽어보기

- [크립키-비트겐슈타인 역설](/2025/07/03/kripkenstein)
- [사적 언어](/2025/07/21/private-language)
- [뢰벤하임-스콜렘 정리](/2025/04/10/completeness-theorem)
- [2차 논리는 "양의 탈을 쓴 집합론"인가?](https://plato.stanford.edu/entries/logic-higher-order/#SetTheoSheeClot)