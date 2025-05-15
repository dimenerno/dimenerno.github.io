---
layout: post
title: "η 집합"
date: 2025-05-09
tags: ["수학", "집합론"]
related:
  - "유리수와 실수의 집합론적 정의"
---

가산 조밀 무계 전순서<sub>countable dense unbounded linear order</sub>는 모두 동형임을 보인 칸토어의 앞뒤 논법<sub>back-and-forth argument</sub>에서 핵심이 되는 원리는 다음이다.

> **가산 데데킨트 성질.** $(L, <)$이 전순서라고 하자. 다음은 동치이다.
>
> 1. $(L, <)$은 조밀하고 무계이다.
> 2. $L$의 유한 부분집합 $C, D$에 대해, $C < D$일 경우 $C < y < D$를 만족하는 $y \in L$이 존재한다.

여기서 $C < D$는 $\forall c \in C, d \in D : c < d$를 줄인 표기이다.

유한 데데킨트 성질로부터 동형성 정리를 다음과 같이 보일 수 있다. $(A, <\_A), (B, <\_B)$가 두 가산 조밀 무계 전순서라고 하자. 가산이므로 $A, B$의 원소를 자연수로 인덱싱할 수 있다. $f: A \to B$를 다음과 같이 귀납적으로 정의한다.

1. $f(a\_0) = b\_0$로 두고, $n = 1$로 정한다.
2. $a\_n \in \mathrm{dom} f$을 확인한다.
   1. $a\_n \in \mathrm{dom} f$라면 3으로 넘어간다.
   2. $a\_n \notin \mathrm{dom} f$라면 보조정리에 의해 $C = \lbrace  f(a\_k) : k < n, a\_k <\_A a\_n \rbrace , D = \lbrace  f(a\_k) : k < n, a\_k >\_A a\_n \rbrace $에 대해 $C < y < D$인 $y \in B$가 존재한다. $f(a\_n) = y$로 정의한다.
3. $b\_n \in \mathrm{ran} f$를 확인한다.
   1. $b\_n \in \mathrm{ran} f$라면 4로 넘어간다.
   2. $b\_n \notin \mathrm{ran} f$라면, 보조정리에 의해 $C = \lbrace  f^{-1}(b\_k) : k < n, b\_k <\_B b\_n \rbrace , D = \lbrace  f^{-1}(b\_k) : k < n, b\_k >\_B b\_n \rbrace $에 대해 $C < x < D$인 $x \in A$가 존재한다. $f(x) = b\_n$으로 정의한다.
4. $n$을 $n + 1$로 갱신하고 2로 되돌아간다.

위 과정의 귀납적 극한으로서 얻어지는 $f$는 $A$와 $B$의 동형 사상이다.

그런데 위 보조정리의 다음 일반화는 일반적으로 성립하지 않는다.

> **(틀린 명제)** $(L, <)$이 전순서라고 하자. 다음은 동치이다.
>
> 1. $(L, <)$은 조밀하고 무계이다.
> 2. $L$보다 작은 기수인 $L$의 부분집합 $C, D$에 대해, $C < D$일 경우 $C < y < D$를 만족하는 $y \in L$이 존재한다.

예를 들어 $(\mathbb{R} \setminus \lbrace  0 \rbrace , <)$는 조밀하고 무계인 전순서이며, $C = (-\infty, 0) \cap \mathbb{Q}, D = (0, \infty) \cap \mathbb{Q}$일 때 $C < D$이고 $\|C\|, \|D\| < \|\mathbb{R}\|$이지만 $C < y < D$를 만족하는 실수 $y$는 존재하지 않는다.

만약 위 보조정리의 일반화가 성립했다면, 다음과 같이 기수가 $\kappa > \aleph\_0$인 조밀 무계 전순서가 유일함을 증명할 수 있었을 것이다. 선택 공리를 가정했을 때, $A$와 $B$는 $\kappa$와 순서 동형이도록 정렬될 수 있다. 이제 서수 $\alpha < \kappa$에 대해 초한귀납적으로 $f$를 정의한다.

1. $f(a\_0) = b\_0$로 두고, $\alpha = 1$로 정한다.
2. $a\_\alpha \in \mathrm{dom} f$을 확인한다.
   1. $a\_\alpha \in \mathrm{dom} f$라면 3으로 넘어간다.
   2. $a\_\alpha \notin \mathrm{dom} f$라면 일반화된 보조정리에 의해 $C = \lbrace  f(a\_\beta) : \beta < \alpha, a\_\beta <\_A a\_\alpha \rbrace , D = \lbrace  f(a\_\beta) : \beta < \alpha, a\_\beta >\_A a\_\alpha \rbrace $에 대해 $C < y < D$인 $y \in B$가 존재한다. $f(a\_\alpha) = y$로 정의한다.
3. $b\_\alpha \in \mathrm{ran} f$를 확인한다.
   1. $b\_\alpha \in \mathrm{ran} f$라면 4로 넘어간다.
   2. $b\_\alpha \notin \mathrm{ran} f$라면, 일반화된 보조정리에 의해 $C = \lbrace  f^{-1}(b\_\beta) : \beta < \alpha, b\_\beta <\_B b\_\alpha \rbrace , D = \lbrace  f^{-1}(b\_\beta) : \beta < \alpha, b\_\beta >\_B b\_\alpha \rbrace $에 대해 $C < x < D$인 $x \in A$가 존재한다. $f(x) = b\_\alpha$로 정의한다.
4. 초한귀납적으로 $f$를 완성한다.

그러나 일반화된 보조정리가 성립하지 않으므로, 칸토어의 앞뒤 논법은 비가산 조밀 무계 전순서가 유일하다는 것을 보이는 데 적용될 수 없다. 실제로 비가산 조밀 무계 전순서는 $\mathbb{R}$ 이외에도 $\lbrace 0\rbrace  \times \mathbb{R} \sqcup \lbrace 1\rbrace  \times \mathbb{Q}$에 사전식 순서를 준 순서 등 유일하지 않다.

그렇다면 보조정리의 성질은 어느 정도까지 일반화될 수 있을까? 이 물음과 관련된 개념은 다음과 같다.

> **정의.**
>
> 1. 집합족 $\mathcal{C}$가 **유한 교집합 속성<sub>finite intersection property</sub>**을 가진다는 것은, $\mathcal{C}$의 집합-원소들의 유한한 교집합은 언제나 공집합이 아니라는 것이다.
> 2. 집합족 $\mathcal{C}$가 **탄력적<sub>resilient</sub>**이라는 것은, $\mathcal{D}$가 유한 교집합 속성을 가지는 $\mathcal{C}$의 부분모임일 때, $\bigcap\_{D \in \mathcal{D}} D \neq \varnothing$인 것이다.

위상수학을 공부한 독자라면 이는 친숙한 개념일 것이다.

> **칸토어 축소구간 정리.** $K$가 콤팩트할 필요충분조건은 $K$의 모든 닫힌 집합들의 모임 $\mathcal{F}$가 탄력적인 것이다.

**증명.** $(\Rightarrow)$ $\mathcal{F}$가 탄력적이지 않다고 하자. 그러면 어떤 닫힌 집합들의 모임 $\mathcal{C}$가 존재하여, $\mathcal{C}$가 유한 교집합 속성을 가지지만 $\bigcap\_{C \in \mathcal{C}} C = \varnothing$이다. 드 모르간 법칙에 의해 $\bigcup\_{C \in \mathcal{C}} C^c = K$이다. 즉 $\lbrace  C^c : C \in \mathcal{C} \rbrace $는 $K$의 열린 덮개이다. $K$가 콤팩트하므로 이는 유한 부분 덮개를 가진다. 그러나 이 경우 다시 드 모르간 법칙에 의해, 어떤 유한한 $\mathcal{C}' \subset \mathcal{C}$에 대해 $\bigcap\_{C \in \mathcal{C}'} C = \varnothing$이다. 이는 $\mathcal{C}$의 유한 교집합 속성에 모순된다.

$(\Leftarrow)$ 거의 비슷한 방식으로 증명한다. ■

이제 다음과 같이 보조정리를 일반화할 수 있다.

> **비가산 데데킨트 성질.** $(L, <)$이 전순서이고, $\kappa$가 비가산 기수라고 하자. 다음은 동치이다.
>
> 1. $(L, <)$은 조밀하고 무계이다. 또한, $\kappa$개보다 적은 임의의 열린 구간 및 반직선들의 모임은 탄력적이다.
> 2. $L$의 부분집합 $C, D$에 대해, $\|C\|, \|D\| < \kappa$이고 $C < D$라면 $C < y < D$를 만족하는 $y \in L$이 존재한다.

**증명.** $(\Rightarrow)$

#### i. $D = \varnothing$

$\mathcal{C} = \lbrace  (c, \infty) : c \in C \rbrace$를 고려하자. $\|\mathcal{C}\| = \|C\| < \kappa$이므로 전제에 의해 $\mathcal{C}$는 탄력적이다. $\mathcal{C}$가 유한 교집합 속성을 가지므로 $\bigcap\_{c \in C} (c, \infty) = (c', \infty)$이다. 해당 $c'$이 찾고자 하는 $y$이다.

#### ii. $C = \varnothing$

i.의 경우와 거의 동일하다.

#### iii. $C, D \neq \varnothing$

$\mathcal{E} = \lbrace  (c, d) : c \in C, d \in D \rbrace $를 고려하자. 기수 관계식 $\lambda \cdot \epsilon = \mathrm{max}(\lambda, \epsilon)$에 의해 $\|\mathcal{E}\| < \kappa$이며, $\mathcal{E}$는 탄력적이다. $\mathcal{E}$가 유한 교집합 속성을 가지므로 ($\because$ 가산 데데킨트 성질) $\bigcap\_{c \in C, d \in D} (c, d) = (c', d')$이다. $(c', d') \neq \varnothing$이므로 $y \in (c', d')$가 존재하며, 이것이 우리가 찾고자 하는 $y$이다.

$(\Leftarrow)$ $(L, <)$이 조밀하고 무계임은 자명하다.

$\mathcal{E}$가 $\kappa$개보다 적은 열린 구간 및 반직선들의 모임이라고 하자. $\mathcal{F} \subseteq \mathcal{E}$가 유한 교집합 속성을 가진다고 하자. 그렇다면 $C = \lbrace  c : (c, d) \in \mathcal{F} \text{ or } (c, \infty) \in \mathcal{F} \rbrace $, $D = \lbrace  d : (c, d) \in \mathcal{F} \text{ or } (-\infty, d) \in \mathcal{F}\rbrace $에 대하여 $C < D$이다. 그렇지 않다면 어떤 $c' \in C, d' \in D$에 대해 $d' < c'$라는 것인데, 이 경우 $c'$을 왼쪽 끝점으로 가지는 열린 구간 $(c', d'') \in \mathcal{F}$와 $d'$을 오른쪽 끝점으로 가지는 열린 구간 $(c'', d') \in \mathcal{F}$에 대해 $(c', d'') \cap (c'', d') = \varnothing$이 되어 $\mathcal{F}$의 유한 교집합 속성에 모순되기 때문이다.

따라서 $C < D$이며, 조건에 의해 $C < y < D$인 $y$가 존재한다. 이로부터 $y \in \bigcap\_{I \in \mathcal{F}} I$가 따라 나오며, $\mathcal{E}$가 탄력적임이 보여진다. ■

> **정의.** 비가산 데데킨트 성질을 만족하는 집합을 [**$\eta$ 집합**](https://en.wikipedia.org/wiki/Η_set)이라고 한다. 특히, $\kappa = \aleph_\alpha$에 대해 비가산 데데킨트 성질을 만족하는 집합을 $\eta_\alpha$ 집합이라고 한다.

$\eta$ 집합은 하우스도르프에 의해 제시되었다. $\eta$ 집합은 다음 글에서 알아 볼 **포화<sub>saturation</sub>** 개념과 밀접한 관련이 있다.
