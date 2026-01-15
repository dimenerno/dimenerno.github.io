---
layout: post
title: "측도 문제와 연속체 가설"
date: 2026-01-15
tags: ["수학", "집합론", "측도론"]
related:
---

> **정의.** 측도 $\mu$가 집합 $X$의 모든 부분집합에 대해 정의될 때, $\mu$를 **$X$ 위의 측도**라고 한다.

> **정리.** 임의의 $A \subseteq \mathbb{R}$과 $x \in \mathbb{R}$에 대해, $\mu(A + x) = \mu(A)$를 만족하는 실수 위의 측도 $\mu$는 존재하지 않는다. ($A + x = \{ a + x : a \in A\}$)

**증명.** [비탈리 집합](https://dimenerno.github.io/2025/02/24/algebra-measure)의 구성을 참고하라.

즉, 평행이동 불변적인 실수 위의 측도는 존재하지 않는다. 대신 평행이동 불변 조건을 약화하여, 르벡 가측인 집합 $A$에 대해서만 $\mu(A) = m(A)$를 만족하는 실수 위의 측도 $\mu$가 가능하지 않을지 물을 수 있다 ($m$은 르벡 측도). 이것을 **측도 문제**라고 한다.

> **측도 문제.** 임의의 르벡 가측 집합 $A\subseteq \mathbb{R}$에 대해 $\mu(A) = m(A)$를 만족하는 실수 위의 측도 $\mu$가 존재하는가?

사실 위 문제는 다음의 일반화된 문제와 동치임이 알려져 있다.

> **일반화된 측도 문제.** 비자명한 $2^{\aleph\_0}$ 위의 측도가 존재하는가?

만약 그러한 측도가 존재한다면, 해당 측도와 $\mathbb{R}$과 $2^{\aleph\_0}$ 사이의 전단사 사상을 사용하여 르벡 측도를 $\mathcal{P}(\mathbb{R})$로 확장할 수 있음이 알려져 있기 때문이다.

> **Remark.** 평행이동 불변 조건이 사라졌기 때문에, 집합 $S$ 위에서 측도의 존재성은 오로지 $S$의 기수에만 의존적이다. 따라서 이후 글에서는 기수 위의 측도에 관해서만 관심을 가진다.

흥미롭게도 측도 문제는 연속체 가설 및 큰 기수 공리와 관련이 있다. 먼저 다음 정리를 보자.

> **정리.** $\nu$ 위의 측도가 존재한다면, 어떤 $\kappa \leq \nu$는 약하게 도달 불가능<sub>weakly inaccessible</sub>하다.

**증명.** $\nu$ 위의 측도 $\mu$가 존재한다고 하자. $\mu$에 대한 영집합<sub>null set</sub>들의 모임 $\mathcal{I}$는 아이디얼<sub>ideal</sub>이다. 특히, $\mathcal{I}$가 다음을 만족함을 쉽게 보일 수 있다.

1.  홑원소집합 포함: 임의의 $\xi < \omega\_1$에 대해, $\lbrace  \xi \rbrace  \in \mathcal{I}$.
2. 가산 닫힘: $\lbrace  A\_n \rbrace \_{n < \omega}$이 $\mathcal{I}$에 속하는 집합들의 모임일 때, $\bigcup\_{n < \omega} A\_n \in \mathcal{I}$.
3. 쌍대 가산 체인 성질<sub>co-c.c.c. (countable chain condition)</sub>: $\lbrace  B\_i \rbrace \_{i \in J}$가 $\mathcal{I}$에 속하지 않는 서로소 집합들의 모임일 때, $\|J\| \leq \aleph\_0$.

$\kappa \leq \nu$가 위 1, 2, 3의 조건을 만족하면서 $\kappa$의 부분집합으로 이루어진 아이디얼 $\mathcal{J}$가 존재하는 최소 기수라고 하자. 다음의 보조정리를 증명한다.

> **정의.** $\mathcal{I}$가 아이디얼이라고 하자. 임의의 $\lambda < \kappa$에 대해, $\lbrace  A\_\xi \rbrace \_{\xi < \lambda}$가 $\mathcal{I}$의 원소들의 모임일 때, $\bigcup A\_\xi \in \mathcal{I}$라면 $\mathcal{I}$가 **$\kappa$-완전<sub>$\kappa$-complete</sub>**하다고 한다.

> **보조정리.** $\mathcal{J}$는 $\kappa$-완전하다.

**증명.** $\mathcal{J}$가 $\kappa$-완전하지 않다고 하자. 그럼 어떠한 $\lambda < \kappa$와 $\mathcal{J}$의 원소들의 모임 $\lbrace  A\_\xi \rbrace \_{\xi < \lambda}$가 존재하여 $\bigcup A\_\xi \notin \mathcal{J}$이다. 필요하다면 다음과 같이 재정의함으로써, 일반성을 잃지 않고 $\lbrace A\_\xi\rbrace $가 쌍으로 서로소라고 가정할 수 있다.

$$
A_\xi' = A_\xi - \bigcup_{\eta < \xi}A_\eta
$$

($A\_\xi' \subseteq A\_\xi$이므로 $A\_\xi \in \mathcal{J}$로부터 $A\_\xi' \in \mathcal{J}$가 따라 나온다. 또한 $A\_\xi'$는 공집합일 수도 있지만, 공집합은 다른 집합과 언제나 서로소이기 때문에 이 사실은 증명에 영향을 미치지 않는다.)

다음과 같이 $\lambda$ 위의 아이디얼 $\mathcal{K}$를 정의한다.

$$
S \in \mathcal{K} \iff \bigcup_{\xi \in S} A_\xi \in \mathcal{J}
$$

$\mathcal{K}$가 1, 2, 3 조건을 만족함을 보이자.

1. 홑원소집합 포함: $\mathcal{K}$의 정의로부터 자명하다.
2. 가산 닫힘: $\mathcal{J}$가 가산 닫힘이므로 $\mathcal{K}$ 또한 가산 닫힘이다.
3. 쌍대 가산 체인 성질: $\lbrace  S\_i \rbrace \_{i \in J}$가 $\mathcal{K}$에 속하지 않는 서로소 집합들의 모임이라고 하자. 각 $i \in J$에 대해 $B\_i = \bigcup\_{\xi \in S\_i} A\_\xi$라고 하자. $B\_i \notin \mathcal{J}$이고, $i \neq j$일 때 $B\_i \cap B\_j = \varnothing$이다 (여기서 $\lbrace A\_\xi\rbrace $가 쌍으로 서로소라는 성질이 사용된다). 즉 $\lbrace B\_i\rbrace \_{i \in J}$는 $\mathcal{J}$의 쌍대 반체인이므로, $J$는 가산이다.

그런데 이는 $\kappa$의 최소성 정의에 모순된다. 따라서 $\mathcal{J}$는 $\kappa$-완전하다. □

위 따름정리로부터 $\kappa$가 약하게 도달 불가능함을, 즉 비가산 정칙 극한 기수임을 보일 수 있다.

#### $\kappa$는 비가산이다.

홑원소집합 포삼 성질과 가산 닫힘 성질에 의해 $\kappa$가 가산이라면 $\kappa \in \mathcal{J}$가 되어 모순이다.

#### $\kappa$는 정칙이다.

$\kappa$가 정칙이 아니라면 어떤 $\lambda < \kappa$에 대해 $\kappa$보다 작은 기수들의 증가열 $\lbrace  \nu\_\xi \rbrace \_{\xi < \lambda}$가 존재하여 $\bigcup\_{\xi < \lambda} \nu\_\xi = \kappa$이다. 홑원소집합 포함 성질과 $\kappa$-완전성에 의해 각 $\nu\_\xi$는 $\mathcal{J}$의 원소이다. 따라서 다시 $\kappa$-완전성에 의해 $\bigcup\_{\xi < \lambda} \nu\_\xi = \kappa$는 $\mathcal{J}$의 원소이다. 그런데 이는 $\mathcal{J}$가 아이디얼이라는 사실에 모순된다.

#### $\kappa$는 극한 기수이다.

$\kappa$가 극한 기수가 아니라면 어떤 서수 $\alpha$에 대해 $\kappa = \aleph\_{\alpha + 1}$이다. 따라서 각 $\gamma < \kappa$에 대해, 전사인 $f\_\gamma: \omega\_\alpha \to \gamma$가 존재한다. 선택 공리를 사용하여 그러한 함수열 $\lbrace  f\_\gamma \rbrace \_{\gamma < \omega\_{\alpha + 1}}$을 얻는다.

이제 각 $\beta < \omega\_\alpha, \gamma < \omega\_{\alpha + 1}$에 대해 다음과 같이 $A\_{\gamma\beta}$를 정의한다.

$$
A_{\gamma\beta} = \{ \xi < \omega_{\alpha + 1} : f_\xi(\beta) = \gamma  \}
$$

다음을 관찰하라.

- $\bigcup\_{\beta < \omega\_\alpha} A\_{\gamma\beta} = \omega\_{\alpha + 1} - (\gamma + 1)$
- $\gamma\_1 \neq \gamma\_2 \implies A\_{\gamma\_1 \beta} \cap A\_{\gamma\_2 \beta} = \varnothing$

특히, $\kappa$-완전성에 의해 $\gamma + 1 \in \mathcal{J}$이므로 $\bigcup\_{\beta < \omega\_\alpha}A\_{\gamma \beta} \notin \mathcal{J}$이다. 따라서 다시 $\kappa$-완전성에 의해 어떤 $\beta$에 대하여 $A\_{\gamma\beta} \notin \mathcal{J}$이다. 각 $\gamma$에 대해 그러한 $\beta\_\gamma$를 선택하여, $\lbrace  A\_{\gamma\beta\_\gamma}\rbrace \_{\gamma < \omega\_{\alpha + 1}}$을 얻는다. 그런데 가능한 $\beta\_\gamma$의 경우의 수는 $\omega\_\alpha$이므로, 비둘기집의 원리에 의해 어떤 $\beta < \omega\_{\alpha}$가 존재하여 $\|\lbrace  A\_{\gamma\beta\_\gamma} : \beta\_\gamma = \beta \rbrace \| = \aleph\_{\alpha + 1}$이다. 그런데 이는 가산 쌍대 체인 성질에 모순된다. ■

> **따름정리.** 측도 문제의 답이 긍정적이라면 연속체 가설의 답은 부정적이다.

**증명.** 측도 문제가 성립하고 $2^{\aleph\_0} = \aleph\_1$이라면, 정리에 의해 $\aleph\_0$ 또는 $\aleph\_1$이 약하게 도달 불가능해야 하는데, $\aleph_0$는 가산이고 $\aleph_1$은 계승<sub>successor</sub> 기수이므로 이는 모순이다. ■

