---
layout: post
title: "기수 덧셈과 기수 곱셈의 기본 정리들"
date: 2025-09-16
tags: ["수학", "집합론"]
related:
---

이 글에서 모든 집합과 기수는 무한집합, 무한기수이다.

기수 산술<sub>cardinal arithmetics</sub>을 다룰 때에는 각 연산의 정의를 정확히 아는 것이 중요하다. 정의와 정리를 혼동하기가 쉽기 때문이다. 먼저 기수 덧셈부터 보자.

> **정의.** $A, B$가 각각 기수가 $\kappa, \lambda$인 서로소 집합이라고 하자. $\kappa + \lambda$를 $\|A \cup B \|$로 정의한다.

> **정리.** 기수의 유한 덧셈은 교환법칙과 결합법칙을 만족한다.

위 정의가 well-defined임을 보이기 위해서는 $\kappa + \lambda$가 $A, B$의 선택에 의존적이지 않음을 보여야 한다. 이는 ZF에서 쉽게 증명 가능하다. 또한 유한한 기수 덧셈은 그저 최대 기수를 구하는 것이기 때문에 계산하기가 상당히 용이하다.

> **정리.**
> $$
> \kappa + \lambda = \mathrm{max}(\kappa, \lambda)
> $$

**증명.** 글 하단에 달린 보조정리와 칸토어-베른슈타인 정리에 의해, $\aleph\_\alpha = \aleph\_\alpha + \aleph\_\alpha$이다. 따라서 $\|A\| \leq \|B\|$라면 $\|B\| \leq \|A + B\| \leq \|B + B\| = \|B\|$이다. ■

기수 덧셈의 정의를 무한한 경우로 확장하면,

> **정의.** 각 $i \in I$에 대해 $A\_i$가 기수 $\kappa\_i$인 쌍으로 서로소인 집합족 $\lbrace  A\_i \rbrace $가 주어졌을 때, 다음과 같이 정의한다.
>
> $$
> \sum_{i \in I} \kappa_i = \left| \bigcup_{i \in I}A_i \right|
> $$

유의할 점은, 위 정의가 well-defined임을 보이는 데는 선택 공리가 필요하다는 점이다. 각 $i \in I$에 대해 일대일 대응 $A\_i \to \kappa\_i$을 선택할 수 있어야 하기 때문이다. 그래서 기수 산술을 다룰 때에는 거의 언제나 선택 공리를 전제한다.

$\kappa + \lambda = \mathrm{max}(\kappa, \lambda)$ 관계식으로부터 다음의 관계식을 유도하고 싶을 수 있지만, 성립하는 식이 아님에 주의해야 한다.

> **주의.** $\sum\_{i \in I} \kappa\_i = \sup \kappa\_i$는 일반적으로 성립하지 않는다.

그렇다면 무한한 기수 덧셈은 어떻게 계산해야 할까? 이를 알아보기 위해, 먼저 기수 곱셈을 정의하자 (이 정의 또한 well-definedness를 보이기 위해서는 선택 공리가 필요하다).

> **정의.** $A, B$가 각각 기수가 $\kappa, \lambda$인 집합이라고 하자. $\kappa \cdot \lambda$를 $\| A \times B\|$로 정의한다.

> **정리.** 기수의 유한 곱셈은 교환법칙과 결합법칙을 만족한다.

아주 용이하게도 유한 기수 곱셈의 계산은 유한 기수 덧셈의 계산과 같다.

> **정리.**
> $$
> \kappa \cdot \lambda = \mathrm{max}(\kappa, \lambda)
> $$

**증명.** 글 하단에 달린 보조정리로부터 따라 나온다. ■

물론, **기수 곱셈의 정의는 기수 덧셈과 아무 관련이 없다.** 즉, 기수 곱셈의 정의에는 "$\kappa$를 $\lambda$번 더한다"와 같은 의미가 없다. 그럼에도 다음 *정리*에 의해 기수 곱셈을 기수 덧셈과 연관지을 수 있다.

> **정리.**
> $$
> \sum_{i \in I} \kappa = |I| \cdot \kappa
> $$

**증명.** $\lbrace  A\_i \rbrace $가 쌍으로 서로소이며 $\|A\_i\| = \kappa$인 집합족이라고 하자. 좌변은 $\bigcup\_{i \in I} A\_i$의 기수이고, 우변은 $I \times A\_k$의 기수이다 ($k$는 $I$의 어떤 원소). $\|A\_i\| = \|A\_k\| = \kappa$이므로, 선택 공리에 의해 각 $i \in I$에 대해 일대일 대응 $f\_i : A\_i \to A\_k$를 정의할 수 있다. 다음의 대응 $f: \bigcup\_{i \in I} A\_i \to I \times A\_k$을 정의하자.

$$
f(x) = (i, f_i(x)) \quad (\text{if } x \in A_i)
$$

위 함수가 일대일 대응임은 쉽게 확인할 수 있다. 따라서 (좌변) = (우변)이다. ■

이로부터 앞선 언급한 "주의"에 해당되는 올바른 관계식을 증명할 수 있다.

> **정리.**
> $$
> \sum_{i \in I} \kappa_i = |I| \cdot \sup \kappa_i
> $$

**증명.** $\kappa = \sup \lbrace  \kappa\_i : i \in I \rbrace $라고 하고, 좌변을 $L$, 우변을 $R$이라고 하자. 앞선 정리에 의해 $\|I\| \cdot \kappa = \sum\_{i \in I} \kappa$이고 $\kappa\_i \leq \kappa$이므로 $L ≤ R$이다. 반대로, $\| I \| = \sum\_{i \in I} 1 \leq L$이고, $\kappa = \sup \kappa\_i \leq L$이다. 글 하단의 보조정리에 의해 $L = L \cdot L$이므로 $L \geq \| I \| \cdot \kappa = R$이다. 따라서 칸토어-베른슈타인 정리에 의해 $L = R$이다. (이 증명에는 선택 공리가 암시적으로 많이 사용되었으니 관심 있는 독자는 생략된 논증을 자세히 써 봐도 좋을 것이다) ■

이제 기수 곱셈도 무한 경우로 일반화하자.

> **정의.** 각 $i \in I$에 대해 $A\_i$가 기수 $\kappa\_i$인 집합족 $\lbrace  A\_i \rbrace $가 주어졌을 때, 다음과 같이 정의한다.
>
> $$
> \prod_{i \in I} \kappa_i = \left| \prod_{i \in I}A_i \right|
> $$

무한 기수 덧셈이 기수 곱셈과 관련이 있었던 것처럼, 무한 기수 곱셈은 기수 지수와 관련이 있다.

> **정의.** $A, B$가 각각 기수가 $\kappa, \lambda$인 집합이라고 하자. $\kappa^\lambda$를 $\|A^B \|$로 정의한다. ($A^B$는 $B$에서 $A$로 가는 함수들의 집합이다)

> **정리.** 기수의 지수 연산은 지수법칙을 만족한다. 즉,
>
> - $\kappa^{\lambda + \mu} = \kappa^\lambda \cdot \kappa^\mu$
> - $(\kappa^\lambda)^\mu = \kappa^{\lambda \cdot \mu}$
> - $(\kappa \cdot \lambda)^{\mu} = \kappa^\mu \cdot \lambda^\mu$

하지만 기수 덧셈과 기수 곱셈의 경우와는 달리, 기수 곱셈과 기수 지수 사이에는 일률적인 관계가 없으며, 때문에 무한 기수 곱셈과 관련해서는 알려진 결과도 많지 않다. 적어도 다음은 잘 알려져 있다.

> **정리.** $\prod_{n \in \omega} n = 2^{\aleph_0}$

**증명.** $\prod_{n \in \omega} n \geq \prod_{n \in \omega} 2 = 2^{\aleph_0}$이다. 역으로, $\prod_{n \in \omega} n \leq \prod_{n \in \omega} \aleph_0 = {\aleph_0}^{\aleph_0}$이다. 그런데

$$
2^{\aleph_0} \leq {\aleph_0}^{\aleph_0} \leq (2^{\aleph_0})^{\aleph_0} = 2^{\aleph_0 \cdot \aleph_0}
$$

이므로 ${\aleph_0}^{\aleph_0} = 2^{\aleph_0}$이다. ■

대신 기수 곱셈을 계산할 때 **쾨니히 정리<sub>König's Theorem</sub>**가 유용하게 사용될 수 있다. 이에 대해서는 다음 글에서 알아보겠다. 

---

> **보조정리.** 임의의 $\alpha \in \mathrm{Ord}$에 대해, $\aleph\_\alpha \cdot \aleph\_\alpha = \aleph\_\alpha$

증명 개요는 다음과 같다. 임의의 $\alpha \in \mathrm{Ord}$에 대해, 다음과 같이 정의된 순서 $\prec$가 $\omega\_\alpha \times \omega\_\alpha$의 정렬 순서임을 보인다. $\hat{x} = \mathrm{max}(x\_1, x\_2), \hat{y} = \mathrm{max}(y\_1, y\_2)$일 때, 

$$
(x_1, x_2) \prec (y_1, y_2) \iff \begin{cases}
\hat{x} < \hat{y}\\
x_1 < y_1 \quad (\text{if }\hat{x} < \hat{y}) \\
x_2 < y_2 \quad (\text{if }\hat{x} < \hat{y}, x_1 = y_1) \\
\end{cases}
$$

즉, $\prec$은 최댓값 우선 후 사전식 순서이다. 초한귀납법에 따라 모든 $\beta < \alpha$에 대해 $\aleph\_\beta \cdot \aleph\_\beta = \aleph\_\beta$일 때 $\aleph\_\alpha \cdot \aleph\_\alpha = \aleph\_\alpha$임을 보인다. 이를 위해 $(\omega\_\alpha \times \omega\_\alpha, \prec)$의 순서형<sub>order type</sub>이 $\omega\_\alpha$를 넘지 않음을 보이면 된다. 이를 위해 임의의 $(\gamma\_1, \gamma\_2) \in \omega\_\alpha \times \omega\_\alpha$에 대해

$$
X = \{ (\xi_1, \xi_2) : (\xi_1, \xi_2) \prec (\gamma_1, \gamma_2) \}
$$

라면 $\|X\| < \aleph\_\alpha$임을 보이면 된다. $\gamma = \mathrm{max}(\gamma\_1, \gamma\_2) + 1$이라고 하자. $\omega\_\alpha$는 극한 서수이므로 $\gamma \in \omega\_\alpha$이며, 따라서 $\|\gamma\| = \aleph\_\delta \; (\delta < \alpha)$이다. 한편으로 $X \subseteq \gamma \times \gamma$이므로 $\|X\| \leq \aleph\_\delta \cdot \aleph\_\delta$이며 이는 귀납 가정에 의해 $\aleph\_\delta$이다. ■