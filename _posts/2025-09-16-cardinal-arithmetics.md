---
layout: post
title: "기수 연산의 기본 정리들"
date: 2025-09-16
tags: ["수학", "집합론"]
related:
---

이 글에서 모든 집합과 기수는 무한하다. 또한 $\omega\_\alpha$를 크기가 $\aleph\_\alpha$인 첫 서수로 정의한다 ([어떤 기수의 정의를 채택하냐에 따라](/2025/04/20/cardinality/) $\omega\_\alpha = \aleph\_\alpha$일 수 있다.) 또한 원래 $\mathrm{cf}$는 서수를 인자로 받지만, 이 글에서는 기수도 인자로 받을 수 있다고 한다. 즉, $\mathrm{cf}(\aleph_\alpha) = \mathrm{cf}(\omega_\alpha)$이다.

## 1. 기수 덧셈

기수 산술<sub>cardinal arithmetics</sub>을 다룰 때에는 각 연산의 정의를 정확히 아는 것이 중요하다. 정의와 정리를 혼동하기가 쉽기 때문이다. 먼저 기수 덧셈부터 보자.

> **정의.** $A, B$가 각각 기수가 $\kappa, \lambda$인 서로소 집합이라고 하자. $\kappa + \lambda$를 $\|A \cup B \|$로 정의한다.

> **정리.** 기수의 유한 덧셈은 교환법칙과 결합법칙을 만족한다.

위 정의가 well-defined임을 보이기 위해서는 $\kappa + \lambda$가 $A, B$의 선택에 의존적이지 않음을 보여야 한다. 이는 ZF에서 쉽게 증명 가능하다. 또한 유한한 기수 덧셈은 그저 최대 기수를 구하는 것이기 때문에 계산하기가 상당히 용이하다.

> **정리.**
> $$
> \kappa + \lambda = \mathrm{max}(\kappa, \lambda)
> $$

**증명.** "2. 기수 곱셈"의 보조정리와 칸토어-베른슈타인 정리에 의해, $\aleph\_\alpha = \aleph\_\alpha + \aleph\_\alpha$이다. 따라서 $\|A\| \leq \|B\|$라면 $\|B\| \leq \|A + B\| \leq \|B + B\| = \|B\|$이다. ■

기수 덧셈의 정의를 무한한 경우로 확장하면,

> **정의.** 각 $i \in I$에 대해 $A\_i$가 기수 $\kappa\_i$인 쌍으로 서로소인 집합족 $\lbrace  A\_i \rbrace $가 주어졌을 때, 다음과 같이 정의한다.
>
> $$
> \sum_{i \in I} \kappa_i = \left| \bigcup_{i \in I}A_i \right|
> $$

유의할 점은, 위 정의가 well-defined임을 보이는 데는 선택 공리가 필요하다는 점이다. 각 $i \in I$에 대해 일대일 대응 $A\_i \to \kappa\_i$을 선택할 수 있어야 하기 때문이다. 그래서 기수 산술을 다룰 때에는 거의 언제나 선택 공리를 전제한다.

$\kappa + \lambda = \mathrm{max}(\kappa, \lambda)$ 관계식으로부터 다음의 관계식을 유도하고 싶을 수 있지만, 성립하는 식이 아님에 주의해야 한다.

> **주의.** $\sum\_{i \in I} \kappa\_i = \sup \kappa\_i$는 일반적으로 성립하지 않는다.

## 2. 기수 곱셈

그렇다면 무한한 기수 덧셈은 어떻게 계산해야 할까? 이를 알아보기 위해, 먼저 기수 곱셈을 정의하자.

> **정의.** $A, B$가 각각 기수가 $\kappa, \lambda$인 집합이라고 하자. $\kappa \cdot \lambda$를 $\| A \times B\|$로 정의한다.

> **정리.** 기수의 유한 곱셈은 교환법칙과 결합법칙을 만족한다.

아주 용이하게도 유한 기수 곱셈의 계산은 유한 기수 덧셈의 계산과 같다.

> **정리.**
> $$
> \kappa \cdot \lambda = \mathrm{max}(\kappa, \lambda)
> $$

**증명.** 다음의 보조정리로부터 따라 나온다. ■

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

**기수 곱셈의 정의는 기수 덧셈과 아무 관련이 없다.** 즉, 기수 곱셈의 정의에는 "$\kappa$를 $\lambda$번 더한다"와 같은 의미가 없다. 그럼에도 다음 *정리*에 의해 기수 곱셈을 기수 덧셈과 연관지을 수 있다.

> **정리.**
> $$
> \sum_{i \in I} \kappa = |I| \cdot \kappa
> $$

**증명.** $\lbrace  A\_i \rbrace $가 쌍으로 서로소이며 $\|A\_i\| = \kappa$인 집합족이라고 하자. 좌변은 $\bigcup\_{i \in I} A\_i$의 기수이고, 우변은 $I \times A$의 기수이다 $(\|A\| = \kappa)$. 선택 공리에 의해 각 $i \in I$에 대해 일대일 대응 $f\_i : A\_i \to A$를 정의할 수 있다. 다음의 대응 $f: \bigcup\_{i \in I} A\_i \to I \times A$을 정의하자.

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

기수 곱셈을 계산할 때 쾨니히 정리<sub>König's Theorem</sub>가 유용하게 사용될 수 있다.

> **쾨니히 정리.** 인덱스 집합 $I$에 대해 $\kappa\_i < \lambda\_i$라고 하자. 다음이 성립한다.
>
> $$
> \sum \kappa_i < \prod \lambda_i
> $$

당연한 거 아니냐고 생각할 수 있겠지만, 일반적으로 1, 2는 고사하고 3도 성립하지 않는다는 사실에 유의하라.

1. $\kappa\_i < \lambda\_i$라면 $\sum \kappa\_i < \sum \lambda\_i$
2. $\kappa\_i < \lambda\_i$라면 $\prod \kappa\_i < \prod \lambda\_i$
3. $\kappa\_i \leq \lambda\_i$일 때 $\sum \kappa\_i < \prod \lambda\_i$

물론 1, 2, 3에서 결론부의 부등호를 $<$에서 $\leq$로 약화하면 모두 성립한다. 쾨니히 정리의 특징은 결론부가 엄격한 부등호라는 것이다.

**증명.** $\lbrace  A\_i \rbrace , \lbrace  B\_i \rbrace $가 각각 기수가 $\kappa\_i, \lambda\_i$인 (쌍으로 서로소인) 집합들의 모임이라고 하자. 귀류법에 따라, $f: \prod B\_i \to \cup A\_i$인 단사함수가 존재한다고 하자. 임의의 $i \in I$에 대해, $f$의 단사성으로부터 $\|f^{-1}(A\_i)\| = \|A\_i\|$이다. 그런데 $\|A\_i\| < \|B\_i\|$이므로 $\pi\_i (f^{-1}(A\_i)) \subset B\_i$는 $B\_i$보다 크기가 엄격히 작으며, 이에 따라 $b\_i \in B\_i \setminus \pi\_i (f^{-1}(A\_i))$가 존재한다. 각 $i$에 대해 그러한 $b\_i$를 고른 뒤, $b = (b\_i)\_{i \in I}$를 생각하면, 임의의 $i \in I$에 대해 $\pi\_i(b) = b\_i$이므로 $f(b) \notin \cup A\_i$가 되어 모순이다. ■

## 3. 기수 지수

> **정의.** $A, B$가 각각 기수가 $\kappa, \lambda$인 집합이라고 하자. $\kappa^\lambda$를 $\|A^B \|$로 정의한다. ($A^B$는 $B$에서 $A$로 가는 함수들의 집합이다)

기수 곱셈의 경우와 마찬가지로, 비록 기수 지수의 정의는 기수 곱셈과 아무 관련이 없지만, 다음 정리에 의해 둘 사이에 다리를 놓을 수 있다.

> **정리.**
> $$
> \prod_{i \in I} \kappa = \kappa^{|I|}
> $$

또한 기수 지수는 일반적인 지수의 여러 좋은 성질을 공유한다.

> **정리.** 기수의 지수 연산은 지수법칙을 만족한다. 즉,
>
> - $\kappa^{\lambda + \mu} = \kappa^\lambda \cdot \kappa^\mu$
> - $(\kappa^\lambda)^\mu = \kappa^{\lambda \cdot \mu}$
> - $(\kappa \cdot \lambda)^{\mu} = \kappa^\mu \cdot \lambda^\mu$

그럼에도 기수 지수를 정확히 계산하기란 굉장히 까다로운데, 일반화된 연속체 가설<sub>Generalized Continuum Hypothesis</sub>을 전제하지 않으면 얻을 수 있는 결과가 제한적이기 때문이다. 우선 일반화된 연속체 가설 없이 증명할 수 있는 정리들을 보자.

> **정리.**
> 
> 1. $2^{\aleph\_\alpha} > \aleph\_\alpha$
> 2. $\alpha \leq \beta \implies \kappa^{\aleph\_\alpha} \leq \kappa^{\aleph\_\beta}$
> 3. $\mathrm{cf}(\kappa^{\aleph\_\alpha}) > \aleph\_\alpha$

$\mathrm{cf}(\kappa) \leq \kappa$이므로 3이 1을 함의한다는 사실에 주목하라.

**증명.** 1은 칸토어의 정리이고, 2는 선택 공리를 사용하면 자명하다. 3의 증명은 쾨니히 정리를 사용한다. $\mathrm{cf}(\kappa^{\aleph\_\alpha}) = \aleph\_\lambda$라고 하자. $\mathrm{cf}$의 정의에 의해 $\xi\_i < \kappa^{\aleph\_\alpha}$이며 $\sum\_{i < \omega\_\lambda} \xi\_i = \kappa^{\aleph\_\alpha}$을 만족하는 $\lbrace  \xi\_i \rbrace \_{i < \omega\_\lambda}$가 존재한다. 쾨니히 정리에 의해 다음이 성립한다.

$$
\kappa^{\aleph_\alpha} = \sum_{i < \omega_\lambda} \xi_i < \prod_{i < \omega_\lambda} \kappa^{\aleph_\alpha} = \kappa^{\aleph_\alpha \cdot \aleph_\lambda}
$$

그런데 만약 $\aleph\_\lambda = \aleph\_\alpha$라면 $\kappa^{\aleph\_\alpha \cdot \aleph\_\lambda} = \kappa^{\aleph\_\alpha}$이므로 $<$가 성립하지 않는다. 따라서 $\aleph\_\lambda > \aleph\_\alpha$이다. ■

다음의 두 정리는 특히 유용하다.

> **정리.**
> 
> $$
> \aleph_\alpha^{\aleph_\beta} =
> \begin{cases}
> 2^{\aleph_\beta} & (\aleph_\alpha \leq \aleph_\beta) \\
> \mathrm{card} \{ A \subseteq \omega_\alpha : |A| = \aleph_\beta \} & (\aleph_\beta < \aleph_\alpha)
> \end{cases}
> $$

**증명.** $\aleph\_\alpha \leq \aleph\_\beta$인 경우의 증명은 다음과 같다.

$$
2^{\aleph_\beta} \leq \aleph_\alpha^{\aleph_\beta} \leq (2^{\aleph_\alpha})^{\aleph_\beta} = 2^{\aleph_\alpha \cdot \aleph_\beta} = 2^{\aleph_\beta}
$$

$\aleph\_\alpha > \aleph\_\beta$인 경우를 증명하자. 좌변의 집합을 $S$라고 하자. 각 $S$의 원소는 $\aleph\_\beta$에서 $\aleph\_\alpha$로 가는 단사함수로 생각할 수 있으므로 $\|S\| \leq {\aleph\_\alpha}^{\aleph\_\beta}$이다. 역방향을 보이기 위해 먼저 $\aleph\_\beta < \aleph\_\alpha$이므로 $\aleph\_\alpha = \aleph\_\beta \cdot \aleph\_\alpha$임을 관찰하자. 따라서,

$$
|S| = |T| \quad \text{where} \quad T = \{ A \subseteq \omega_\beta \times \omega_\alpha : |A| = \aleph_\beta \}
$$

그런데 $T$의 각 원소는 $\omega\_\alpha$에서 _중복을 허용하고_ $\aleph\_\beta$개의 원소를 뽑는 경우의 수로 생각될 수 있다. 이는 $T$에서 ${\aleph\_\alpha}^{\aleph\_\beta}$로 가는 전사 관계를 정의한다. 따라서 ${\aleph\_\alpha}^{\aleph\_\beta} = \|S\|$이다. ■

이의 따름정리는 하우스도르프 정리이다.

> **하우스도르프 정리.**
>
> $$
> \aleph_{\alpha+1}^{\aleph_\beta} = \aleph_\alpha^{\aleph_\beta} \cdot \aleph_{\alpha + 1}
> $$

**증명.** $\beta > \alpha$라면 앞선 정리에 의해 정리가 자명하게 성립한다. 따라서 $\beta \leq \alpha$라고 하자. $\aleph\_{\alpha+1}^{\aleph\_\beta} \geq \aleph\_\alpha^{\aleph\_\beta}, \aleph\_{\alpha + 1}$이므로 $\geq$ 방향은 자명하게 성립한다. 따라서 $\leq$ 방향을 보이면 충분하다.

$\aleph\_{\alpha + 1}$은 계승자 기수<sub>successor cardinal</sub>이므로 [정칙<sub>regular</sub>](https://dimenerno.github.io/2025/05/04/regular-singular)이며, 이에 따라 $\aleph\_\beta < \mathrm{cf}(\aleph\_{\alpha + 1})$이다. 따라서 $f \in \omega\_\alpha^{\omega\_\beta}$는 상계를 가진다. 즉,

$$
\aleph_{\alpha+1}^{\aleph_\beta} = \bigcup_{\gamma < \omega_{\alpha + 1}} \gamma^{\omega_\beta}
$$

여기서 각 $\gamma$는 기수가 $\aleph\_\alpha$ 이하이다. 따라서 다음이 성립한다.

$$
\aleph_{\alpha+1}^{\aleph_\beta} \leq \sum_{\gamma < \omega_{\alpha + 1}} |\gamma|^{\aleph_\beta} \leq \sum_{\gamma < \omega_{\alpha + 1}} {\aleph_\alpha}^{\aleph_\beta} =  {\aleph_\alpha}^{\aleph_\beta} \cdot \aleph_{\alpha + 1} \quad \blacksquare
$$

## 4. 일반화된 연속체 가설 하에서

일반화된 연속체 가설을 전제하면 훨씬 더 강력한 결과들을 증명할 수 있다.

> **정리.** $\aleph\_\alpha$가 정칙 기수인 경우, 다음이 성립한다.
> 
> $$
> \aleph_\alpha^{\aleph_\beta} = \begin{cases}
> \aleph_{\beta + 1} & \aleph_\alpha \leq \aleph_\beta \\
> \aleph_{\alpha} & \aleph_\beta < \aleph_\alpha \end{cases}
> $$

**증명.** $\aleph\_\alpha \leq \aleph\_\beta$인 경우 $\aleph\_\alpha^{\aleph\_\beta} = 2^{\aleph\_\beta}$이므로 GCH에 의해 성립한다. $\aleph\_\alpha > \aleph\_\beta$인 경우,

$$
\aleph_\alpha^{\aleph_\beta} = |S| \quad \text{where} S = \{ A \subseteq \omega_\alpha : |A| = \aleph_\beta \}
$$

이다. $\aleph\_\alpha$가 정칙이므로 $S$의 각 원소는 유계이다. 따라서,

$$
S \subseteq \bigcup_{\lambda \in \omega_\alpha} \mathcal{P}(\lambda)
$$

이다. 임의의 $\lambda \in \omega\_\alpha$에 대해 $\|\lambda\| = \aleph\_\delta$라고 하면, $\aleph\_\delta < \aleph\_\alpha$이므로 $2^{\|\lambda\|} = \aleph\_{\delta + 1} < \aleph\_\alpha$이다. 따라서 다음이 성립한다.

$$
\begin{align}
|S| &\leq \sum_{\lambda \in \omega_\alpha} 2^{|\lambda} \\
&\leq \sum_{\lambda \in \omega_\alpha} \aleph_\alpha \\
&= \aleph_\alpha \cdot \aleph_\alpha = \aleph_\alpha \quad \blacksquare
\end{align}
$$

> **정리.** $\aleph\_\alpha$가 특이 기수인 경우, 다음이 성립한다.
> 
> $$
> \aleph_\alpha^{\aleph_\beta} = \begin{cases}
> \aleph_{\beta + 1} & \aleph_\alpha \leq \aleph_\beta \\
> \aleph_{\alpha + 1} & \mathrm{cf}(\aleph_\alpha) \leq \aleph_\beta < \aleph_\alpha \\
> \aleph_{\alpha} & \aleph_\beta < \mathrm{cf}(\aleph_\alpha) \end{cases}
> $$

**증명.** 첫 번째 경우와 세 번째 경우는 이전 정리의 증명과 거의 같으므로, 두 번째 경우만 살펴보자. 다음이 성립한다.

$$
\aleph_\alpha \leq \aleph_\alpha^{\aleph_\beta} \leq \aleph_\alpha^{\aleph_\alpha} = 2^{\aleph_\alpha} = \aleph_{\alpha+1}
$$

따라서 $\aleph\_\alpha < \aleph\_\alpha^{\aleph\_\beta}$임을 보이면 충분하다. 만약 $\aleph\_\alpha = \aleph\_\alpha^{\aleph\_\beta}$라면 $\mathrm{cf}(\aleph\_\alpha) = \mathrm{cf}(\aleph\_\alpha^{\aleph\_\beta}) > \aleph\_\beta$인데, 가정에 의해 $\mathrm{cf}(\aleph\_\alpha) \leq \aleph\_\beta$이므로 모순이다. ■