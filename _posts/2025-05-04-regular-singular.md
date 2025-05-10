---
layout: post
title: "정칙 기수와 특이 기수, 그리고 도달 불가능 기수"
date: 2025-05-04
tags: ["수학", "집합론"]
related:
---

이 글에서 $\kappa$는 무한 기수이다. 또한, 기수를 초기 서수<sub>initial ordinal</sub>로 정의하는 방식을 택한다([이 글](https://dimenerno.github.io/2025/04/20/cardinality/)의 3번). 이에 따라 모든 기수는 서수이기도 하다.

> **정의.** $\theta$가 $\kappa$보다 작은 극한 서수라고 하자. 각 $\nu$에 대해 $\alpha\_\nu < \kappa$인 증가하는 서수열 $\langle \alpha\_\nu : \nu < \theta \rangle$에 대하여, 언제나 $\lim\_{\nu \to \theta} \alpha\_\nu < \kappa$일 때, $\kappa$를 **정칙 기수<sub>regular cardinal</sub>**라고 한다. 정칙 기수가 아닌 기수를 **특이 기수<sub>singular cardinal</sub>**라고 한다.

*Remark.* $\alpha\_\nu$와 $\theta$는 일반적으로 기수가 아니라 서수이다.

예를 들어 $\aleph\_0$는 정칙 기수이다. $\aleph\_0$개보다 적은 개수의 — 즉, 유한한 — $\aleph\_0$보다 작은 기수들 — 즉, 자연수 —  의 상한은 $\aleph\_0$에 달하지 않기 때문이다.

반면 $\aleph\_\omega$는 특이 기수이다. 다음 기수열에서 각각의 기수는 $\aleph\_\omega$보다 작고, 기수열의 길이 또한 $\aleph\_0 < \aleph\_\omega$이지만, 그 상한은 $\aleph\_\omega$이기 때문이다.

$$
\aleph_0 \quad \aleph_1 \quad \aleph_2 \quad \aleph_3 \quad \cdots
$$

> **정리. (특이 기수 판별법)** $\kappa$가 특이 기수일 필요충분조건은 $\kappa$가 $\kappa$개보다 적은 개수의 $\kappa$보다 작은 기수들의 합일 것이다. 즉, $\|I\| < \kappa$, $\kappa\_i < \kappa \;(\forall i \in I)$에 대하여,
>
> $$\sum_{i \in I} \kappa_i = \kappa$$

*Remark.* $\kappa\_i$는 일반적인 서수가 아닌 기수이다. 그리고 $\sum$은 서수 덧셈이 아니라 기수 덧셈이다.

**증명.** 

($\Rightarrow$) $\kappa$가 특이 기수라면 어떤 서수열 $\langle \alpha\_\nu : \nu < \theta\rangle$이 존재하여,

$$
\lim_{\nu \to \theta} \alpha_\nu = \sup \alpha_\nu = \bigcup_{\nu < \theta}\alpha_\nu = \kappa
$$

이다. 일반적으로 서수 $\alpha$는 자기보다 작은 서수 $\beta < \alpha$들의 합집합이다. 따라서 다음이 성립한다.

$$
\kappa = \bigcup_{\nu < \theta}\alpha_\nu = \bigcup_{\nu < \theta}\left( \alpha_\nu - \bigcup_{\xi < \nu} \alpha_\xi \right)
$$

$A\_\nu = \alpha\_\nu - \bigcup\_{\xi < \nu} \alpha\_\xi$라고 하자. $A\_\nu$는 더이상 서수가 아니지만 그건 중요하지 않다. 중요한 것은 $\lbrace  A\_\nu \rbrace $가 쌍으로 서로소라는 것이다. 따라서 $\kappa\_\nu = \|A\_\nu\|$라고 하면 기수 덧셈의 정의에 의해,

$$
\sum_{\nu < \theta} \kappa_\nu = \left| \bigcup_{\nu < \theta} A_\nu \right| = \kappa
$$

이다.

($\Leftarrow$) $\kappa = \sum\_{i \in I}\kappa\_i$라고 하자. $\|I\| = \lambda$라고 하면 기수 덧셈의 성질에 의해 $\kappa = \lambda \cdot \sup \kappa\_i$이다. $\lambda < \kappa$이므로, 기수 곱셈의 성질에 의해 $\kappa = \sup \kappa\_i$이다. 각 $i \in I$에 대해 $\kappa\_i < \kappa$인데 $\sup \kappa\_i = \kappa$이므로, 초한귀납법을 통해 증가하는 기수열

$$\langle \kappa_\nu : \kappa_\nu = \kappa_i \text{ for some } i \in I, \nu < \theta\rangle$$

을 구축할 수 있으며, $\theta \leq \lambda$이므로 정리가 보여졌다. ■

> **정의.** 어떤 $\alpha \in \mathrm{Ord}$에 대해 $\kappa = \aleph\_{\alpha + 1}$일 때, $\kappa$를 **계승 기수<sub>successor cardinal</sub>**라고 한다. 계승 기수가 아닌 기수를 **극한 기수<sub>limit cardinal</sub>**라고 한다.

> **정리.** 모든 계승 기수는 정칙이다.

**증명.** $\kappa = \aleph\_{\alpha + 1}$이라고 하자. $\kappa$가 특이 기수라면, 특이 기수 판별법에 의해 $\kappa = \sum\_{i \in I} \kappa\_i$이며 $\kappa\_i, \|I\| < \kappa$이다. 이는 $\kappa\_i , \|I\| \leq \aleph\_\alpha$와 같다. 그런데

$$
\sum_{i \in I} \kappa_i \leq \sum_{i \in I} \aleph_\alpha = |I| \cdot  \aleph_\alpha \leq  \aleph_\alpha \cdot \aleph_\alpha =  \aleph_\alpha < \kappa
$$

이므로 모순이다. ■

따라서 모든 특이 기수는 극한 기수이다. 그러나 모든 극한 기수가 특이 기수인 것은 아니다. $\aleph_0$는 정칙인 극한 기수이기 때문이다. 그러나 $\aleph_0$ 이외에 정칙인 극한 기수가 존재할까?

> **정의.** 비가산 정칙 극한 기수를 **도달 불가능 기수<sub>inaccessible cardinal</sub>**라고 한다.<a href="#sub1" id="sup1"><sup>1</sup></a>

$\aleph_\alpha$가 도달 불가능 기수라고 하자. 다음의 증가 기수열의 극한은 $\aleph_\alpha$이다.

$$

\langle \aleph_\beta : \beta < \alpha \rangle : \aleph_0 \quad \aleph_1 \quad \aleph_2 \quad \cdots \quad \to \aleph_\alpha
$$

따라서 $\aleph_\alpha$가 정칙이기 위해서는 위 기수열의 길이인 $\alpha$가 $\aleph_\alpha$보다 작아서는 안 된다. 그런데 $\alpha \leq \aleph_\alpha$이므로, $\alpha = \aleph_\alpha$임이 따라 나온다.

> **정리.** $\aleph_\alpha$가 도달 불가능할 필요조건은 $\alpha = \aleph_\alpha$인 것이다.

이는 $\alpha$가 무지막지하게 큰 기수임을 시사한다. 일례로 다음의 기수열 $\langle \alpha_n : n \in \omega \rangle$을 보자.

$$
\alpha_0 = \aleph_0, \alpha_{n + 1} = \aleph_{\alpha_n}
$$

위 기수열의 상한을 $\kappa$라고 하자. 상한의 정의에 의해 $\lambda < \kappa$라면 $\alpha_n > \lambda$인 $n$이 존재한다. 따라서 $\aleph_\lambda = \alpha_{n+1} < \kappa$이며,

$$
\aleph_\kappa = \sum_{\lambda < \kappa} \aleph_\lambda \leq \sum_{\lambda < \kappa} \kappa = \kappa
$$

이다. 다시 말해, $\alpha = \aleph_\alpha$를 만족하는 기수는 적어도 다음에 비견되는 크기를 가진다.

$$
\kappa = \aleph_{\aleph_{\aleph_{\aleph_{\ddots}}}}
$$

여기서 집고 넘어갈 점이 있다. 비록 $\kappa$가 $\kappa = \aleph_\kappa$를 보이긴 했지만, $\kappa$가 도달 불가능함을 보인 것은 아니다. 오히려 $\kappa$는 특이 기수이다. 길이가 $\omega$인 기수열 $\alpha_n$의 극한이기 때문이다. 

사실 도달 불가능 기수의 존재성은 ZFC와 독립적이다.

> **정리.** 도달 불가능 기수의 존재성은 ZFC와 독립이다.

따라서 도달 불가능 기수의 존재는 공리로서 가정해야 한다. 도달 불가능 기수의 존재를 가정하는 부류의 공리들을 **큰 기수 공리<sub>large cardinal axioms</sub>**라고 부르며, 이와 관련된 연구는 집합론의 중요한 부분을 이룬다.

---

<a href="#sup1" id="sub1">1.</a> 엄밀히 말해 이는 **약한 도달 불가능 기수<sub>weakly inaccessible cardinal</sub>**에 해당한다. $\kappa$가 **강한 도달 불가능 기수<sub>strongly inaccessible cardinal</sub>**라는 것은 $\kappa$가 약한 도달 불가능 기수이며, 추가로 $\lambda < \kappa$일 때 $2^\lambda < \kappa$인 것이다. 연속체 가설을 인정할 때 약한 도달 불가능성과 강한 도달 불가능성은 동치이다.