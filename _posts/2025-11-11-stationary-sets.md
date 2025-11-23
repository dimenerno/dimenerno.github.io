---
layout: post
title: "클럽 집합과 정상 집합"
date: 2025-11-11
tags: ["수학", "집합론"]
related:
---

## 클럽 집합

> **정의.** $C \subseteq \omega\_1$이 **클럽 집합<sub>club set</sub>**이라는 것은 $C$가 닫히고 무계<sub>closed and unbounded</sub>라는 것이다. 즉,
>
> - 임의의 서수열 $(\alpha\_n)\_{n \in \omega} \subseteq C$에 대해 $\alpha\_n \to \alpha$라면 $\alpha \in C$이다.
> - 임의의 $\gamma < \kappa$에 대해 $\alpha > \gamma$인 $\alpha \in C$가 존재한다.

그야말로 정직한 네이밍이 아닐 수 없다.

> **정리.** $C\_1, C\_2 \subseteq \omega\_1$이 두 클럽 집합일 때, $C = C\_1 \cap C\_2$ 또한 클럽 집합이다.

**증명.** $C$가 닫힘이라는 것은 쉽게 보여진다. $C$가 무계임을 보이기 위해 임의의 $\gamma \in \omega\_1$를 잡자. $C\_1$이 무계이므로 $\gamma < \alpha\_0$을 만족하는 가장 작은 $\alpha\_0 \in C\_1$가 있다. $C\_2$가 무계이므로 $\alpha\_0 < \beta\_0$인 가장 작은 $\beta\_0 \in C\_2$가 있다. 다시 $C\_1$이 무계이므로 $\beta\_0 < \alpha\_1$인 $\alpha\_1 \in C\_1$가 있다. 이 과정을 계속 반복하여 서수열 $\lbrace  \alpha\_n \rbrace $과 $\lbrace  \beta\_n \rbrace $을 얻는다. 두 서수열은 같은 서수 $\delta$로 수렴하므로 $\delta \in C$이며, $\delta > \gamma$이다. (p.s. "가장 작은"은 불필요한 선택 공리의 사용을 피하기 위해 사용되었다) ■

위 증명을 살짝 변형하면 다음 정리를 얻을 수 있다.

> **정리.** $\lbrace  C\_n \rbrace \_{n < \omega}$가 클럽 집합들의 가산 모임일 때, $C = \bigcap C\_n$ 또한 클럽 집합이다.

**증명.** 연습문제 (힌트: 삼각형을 사용한다) ■

따라서 가산 개의 클럽 집합들이 주어지면 교집합을 취함으로써 새로운 클럽 집합을 얻을 수 있다. 한편, 비가산 개의 클럽 집합들이 주어지면 다음을 사용할 수 있다.

> **정리.** $\lbrace  C\_\xi \rbrace \_{\xi < \omega\_1}$이 클럽 집합들의 모임일 때, $\lbrace C\_\xi \rbrace $의 **대각 교집합<sub>diagonal intersection</sub>**을 다음과 같이 정의한다.
>
> $$
> \Delta_{\xi < \omega_1} C_\xi = \{ \alpha \in \omega_1 : \forall \xi < \alpha \;\; \alpha \in C_\xi \}
> $$
>
> $D$는 클럽 집합이다.

**증명.** $D$가 닫혀 있음을 먼저 보이자. 서수열 $(\alpha\_n)\_{n \in \omega} \subseteq D$에 대해 $\alpha\_n \to \alpha$라고 하자. 임의의 $\xi < \alpha$에 대해 $\xi < \alpha\_n$인 $n \in \omega$가 존재하며, 대각 교집합의 정의에 의해 $C\_\xi$은 $\lbrace  \alpha\_m : m \geq n \rbrace $을 포함한다. 따라서 $\sup \lbrace  \alpha\_m : m \geq n \rbrace  = \alpha \in C\_\xi$이므로 $\alpha \in D$이다.

이제 $D$가 무계임을 보이자. 임의의 $\gamma < \omega\_1$에 대해, $D\_0 = \bigcap\_{\xi \< \gamma} C\_\xi$는 클럽 집합이므로 무계이다. 따라서 $\alpha\_0 > \gamma$를 만족하는 가장 작은 $\alpha\_0 \in D\_0$가 존재한다. 마찬가지로 $D\_1 = \bigcap\_{\xi \< \alpha\_0} C\_\xi$가 클럽 집합이므로 $\alpha\_1 > \alpha\_0$를 만족하는 가장 작은 $\alpha\_1 \in D\_1$이 존재한다. 이 과정을 귀납적으로 반복하여 얻은 서수열 $(\alpha\_n)$의 극한이 $\alpha$라고 하자. 임의의 $\xi < \alpha$에 대해, 어떤 $n$이 존재하여 $\xi < \alpha\_n$이므로 임의의 $m \geq n$에 대하여 $\alpha\_m \in C\_\xi$이다. 따라서 $\alpha \in C\_\xi$이며 $\alpha \in D$이다. ■

$\Delta C\_\xi \supseteq \bigcap C\_\xi$임을 확인하라.

참고로 지금까지의 정의와 정리들은 다음과 같이 일반화될 수 있다. $\kappa$가 $\operatorname{cf}\kappa > \omega$인 비가산 기수라고 하자.

> **정의.** $C \subseteq \kappa$가 **클럽 집합<sub>club set</sub>**이라는 것은 $C$가 닫히고 무계<sub>closed and unbounded</sub>라는 것이다. 즉,
>
> - 임의의 $\alpha < \kappa$에 대해 $\sup (C \cap \alpha) = \alpha$라면 (즉 $C$가 $\alpha$에서 무계라면) $\alpha \in C$이다.
> - 임의의 $\gamma < \kappa$에 대해 $\alpha > \gamma$인 $\alpha \in C$가 존재한다.
>
> **정리.** $\lambda < \operatorname{cf}\kappa$에 대해 $\lbrace  C\_\xi \rbrace \_{\xi < \lambda}$가 클럽 집합들의 모임일 때, $C = \bigcap C\_\xi$ 또한 클럽 집합이다.
>
> **정리.** $\kappa$가 정칙<sub>regular</sub>이라면, $\lbrace  C\_\xi \rbrace \_{\xi < \kappa}$가 클럽 집합들의 모임일 때, $\lbrace C\_\xi \rbrace $의 대각 교집합 또한 클럽 집합이다.

**증명.** $\kappa = \omega\_1$인 경우와 거의 같다. ■

## 정상 집합

유한 교집합 닫힘에 의해 클럽 집합들의 모임은 필터를 생성한다. 해당 필터의 쌍대<sub>dual</sub> 아이디얼에 속하지 않는 집합을 **정상 집합<sub>stationary set</sub>**이라고 한다. 다른 말로 하자면 다음과 같다.

> **정의.** $S \subseteq \omega\_1$이라고 하자. 임의의 클럽 집합 $C \subseteq \omega\_1$에 대해 $C \cap S \neq \varnothing$이라면 $S$는 정상 집합이다.

어떤 클럽 집합 $C$에 대해 $C \cap S = \varnothing$이라면 $S^c \subseteq C$이므로 $C$는 쌍대 아이디얼의 원소이다. 따라서 두 정의는 동치이다.

정상 집합은 $\omega\_1$의 부분집합 중 "유의미하게 큰" 집합들을 포착한다. 이 사실은 다음의 (엄밀하지는 않은) 유비를 통해 더 잘 이해할 수 있다. $\omega\_1$의 측도가 1이라고 할 때, 클럽 집합은 $\mu(C) = 1$인 집합에, 정상 집합은 $\mu(S) > 0$인 집합에 대응된다.

다음의 사실들은 쉽게 증명될 수 있다 (1번과 3번이 측도 유비와 자연스럽게 연결되는 것에 주목하라).

> **정리.** 다음이 성립한다.
>
> 1. 모든 클럽 집합은 정상 집합이다.
> 2. 모든 정상 집합은 무계이다.
> 3. $\bigcup\_{n < \omega} A\_n$가 정상 집합이라면 어떤 $m \in \omega$에 대해 $A\_m$은 정상 집합이다.

정상 집합의 이름이 stationary인 이유는 다음의 정리 때문이다.

> **정리.** $S \subseteq \omega\_1$에 대해, $f: S \to \omega\_1$이 **퇴행적<sub>regressive</sub>**이라는 것은 임의의 $\alpha \in S$에 대해 $f(\alpha) < \alpha$라는 것이다. 다음이 동치이다.
>
> 1. $S$는 정상 집합이다.
> 2. 임의의 퇴행적 함수 $f: S \to \omega\_1$에 대해, $f$는 어떤 무계 집합 $T \subseteq S$ 위에서 상수<sub>constant</sub>이다.
> 3. 임의의 퇴행적 함수 $f: S \to \omega\_1$에 대해, $f$는 어떤 정상 집합 $T \subseteq S$ 위에서 상수이다.

**증명.** 3 ⇒ 2는 자명하므로, 1 ⇒ 3과 2 ⇒ 1을 증명하면 된다.

#### 1 ⇒ 3

대우를 증명한다. 어떤 퇴행적 함수 $f: S \to \omega\_1$에 대해, $S$의 모든 정상 부분집합 위에서 $f$가 상수가 아니라고 하자. 즉, 임의의 $\xi \in \omega\_1$에 대하여 $A\_\xi = f^{-1}(\lbrace  \xi \rbrace )$는 정상 집합이 아니다. 따라서 $A\_\xi \cap C\_\xi = \varnothing$인 클럽 집합 $C\_\xi$가 존재한다.

$D = \Delta\_{\xi < \omega\_1} C\_\xi$라고 하자. $D$는 클럽 집합이므로, 만약 $S$가 정상 집합이라면 $D \cap S \neq \varnothing$이다. $\alpha \in D \cap S$라고 하자. $\alpha \in D$이므로 임의의 $\xi < \alpha$에 대하여 $\alpha \in C\_\xi$이다. 즉, $\alpha \notin A\_\xi$이므로 $f(\alpha) \neq \xi$이다. 그런데 $\alpha \in S$이므로 $f(\alpha) < \alpha$이다. 이는 모순이므로 $S$는 정상 집합이 아니다. □

#### 2 ⇒ 1

마찬가지로 대우를 증명한다. $S$가 정상 집합이 아니라고 하자. 그러면 어떤 클럽 집합 $C$에 대해 $S \cap C = \varnothing$이다. 다음의 함수를 정의하자.

$$
f(\alpha) = \sup (C \cap \alpha)
$$

임의의 $\alpha \in S$에 대하여 $f(\alpha) \leq \alpha$이다. 만약 $f(\alpha) = \alpha$라면, $C$는 $\alpha$로 수렴하는 서수열을 가진다. 그런데 $C$는 닫힌 집합이므로, $\alpha \in C$이다. 이는 $S \cap C = \varnothing$에 모순이다. 따라서 $f(\alpha) < \alpha$이며, $f$는 퇴행적이다.

만약 어떤 무계 집합 $T$ 위에서 $f$의 값이 $\gamma < \omega\_1$로 일정했다면, 어떤 무계인 서수열 $(\alpha\_n)$에 대해 $\sup (C \cap \alpha\_n) = \gamma$이다. 그런데 $C$는 무계이므로, 이는 $\sup \alpha\_n = \gamma$를 함축한다. 그런데 $(\alpha\_n)$이 무계이므로 $\sup \alpha\_n = \omega\_1$이다. 이는 모순이다. 따라서 $f$는 어떠한 무계 집합 위에서도 상수가 아닌 퇴행적 함수이다. ■

위 정리는 다음의 정리로 일반화될 수 있다.

> **포더 보조정리<sub>Fodor's lemma</sub>.** $\kappa$가 비가산 정칙 기수라고 하자. 임의의 $S \subseteq \kappa$에 대해 다음이 동치이다.
>
> 1. $S$는 정상 집합이다.
> 2. 임의의 퇴행적 함수 $f: S \to \omega\_1$에 대해, $f$는 어떤 무계 집합 $T \subseteq S$ 위에서 상수이다.
> 3. 임의의 퇴행적 함수 $f: S \to \omega\_1$에 대해, $f$는 어떤 정상 집합 $T \subseteq S$ 위에서 상수이다.

## 정상 집합의 응용

정상 집합의 한 응용으로서 조합론의 다음 정리를 보자.

> **Δ-계 보조정리<sub>Δ-system lemma</sub>.** $\lbrace A\_\xi\rbrace \_{\xi < \omega\_1}$가 $\omega\_1$의 유한부분집합들의 모임이라고 하자. 어떤 무계인 $I \subseteq \omega\_1$와 유한집합 $A$가 존재하여, 임의의 $i, j \in I, i \neq j$에 대해 $A\_i \cap A\_j = A$이다.

**증명.** 비둘기집의 원리에 의해 일반성을 잃지 않고, 임의의 $\xi < \omega\_1$에 대해 $\|A\_\xi \| = n$이라고 가정할 수 있다. 다음과 같이 정의하자.

$$
C = \{ \alpha < \omega_1 : \forall \xi < \alpha \;\; \operatorname{max}C_\xi < \alpha \}
$$

$C$는 클럽 집합이다. 또한 $0 \leq k \leq n$에 대해 다음과 같이 정의하자.

$$
T_k = \{ \alpha \in C : |A_\alpha \cap \alpha | = k \}
$$

$\bigcup\_{0 \leq k \leq n} T\_k = C$이므로 어떤 $m$에 대해 $T\_m$은 정적 집합이다. 이제 $0 \leq l < m$에 대해 다음의 함수를 정의하자.

$$
f_l(\alpha) : T_m \to \omega_1; \quad \alpha \mapsto \text{$l$th element of $A_\alpha$}
$$

$\|A\_\alpha \cap \alpha\| > l$이므로 $f\_l(\alpha) < \alpha$이다. 따라서 각 $l$에 대해 $f\_l$는 퇴행적이다. 이제 다음의 단계를 반복한다.

- $f\_0$가 상수가 되는 정적 집합 $S\_0 \subseteq T\_m$이 존재한다.
- $f\_1 \|\_{S\_0}$이 상수가 되는 정적 집합 $S\_1 \subseteq S\_0$가 존재한다.
- $f\_2 \|\_{S\_1}$이 상수가 되는 정적 집합 $S\_2 \subseteq S\_1$이 존재한다.
- ...
- $f\_{m-1} \|\_{S\_{m-2}}$가 상수가 되는 정적 집합 $S\_{m-1} \subseteq S\_{m-2}$가 존재한다.

그러면 임의의 $0 \leq l < m$에 대해 $f\_l$은 $S\_{m-1}$에서 상수이다. 이제 $S\_{m-1} = I$가 찾고자 하는 집합임을 쉽게 확인할 수 있다. ■
