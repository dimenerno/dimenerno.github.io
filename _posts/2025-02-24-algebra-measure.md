---
layout: post
title: "대수와 측도의 정의"
date: 2025-02-24
tags: [수학, 측도론]
related:
  - "카라테오도리 정리를 이용한 측도의 구성"
---

## 1. 비탈리 정리

> **정의.** $\mu$가 집합 $X$ 위의 **측도`<sub>`measure`</sub>`**라는 것은 다음을 만족한다는 것이다.
>
> 1. $\mu(\varnothing) = 0$
> 2. 쌍으로 서로소`<sub>`pairwise disjoint`</sub>`인 가산 집합족 $\lbrace A\_n \rbrace$에 대해, $\mu\left( \bigcup A\_n \right) = \sum \mu(A\_n)$

유감스럽게도 $X = \mathbb{R}$일 때, 측도 $\mu$는 실수의 모든 부분집합에 대해서 정의될 수 없다.

> **비탈리 정리.** 다음을 모두 만족하는 $\mathbb{R}$의 측도 $\mu$는 존재하지 않는다.
>
> 1. 항등적으로 0이 아니다.
> 2. 평행이동에 대해 보존적이다. 즉, 임의의 $r \in \mathbb{R}$에 대해 $\mu(A + r) = \mu(A)$.
> 3. $\operatorname{dom} \mu = \mathcal{P}(\mathbb{R})$

**증명.** 그러한 측도 $\mu$가 존재한다고 가정하자. $\mathbb{R}$ 위에서 다음의 동치 관계를 정의하자.

$$
x \sim y \iff x - y \in \mathbb{Q}
$$

선택 공리에 의해 $[0, 1]/{\sim}$의 선택 함수 $\iota$가 존재한다. $V = \operatorname{im} \iota$라고 하자. $V$를 **비탈리 집합<sub>Vitali set</sub>**이라고 부른다. 예를 들어 $V = \lbrace 0.1, \pi - 3, \sqrt{2} - 1, \dots \rbrace$이다. $\mu$는 $V$에서 정의될 수 없음을 보인다.

$V$의 정의에 의해, $q \in \mathbb{Q}$에 대해 $V$와 $V + q$는 서로소이다. 또한 $[0, 1] \subset \bigcup\_{q \in \mathbb{Q}} (V + q) \subset [-1, 3]$이다. 따라서,

$$
1 \leq \sum_{q \in \mathbb{Q}}\mu(V + q) \leq 4.
$$

그런데 $\mu(V + q) = \mu(V)$이므로, $\mu(V) = 0$이면 왼쪽 부등식이 성립하지 않고 $\mu(V) > 0$이면 오른쪽 부등식이 성립하지 않는다. 따라서 모순이다. ■

## 2. $\sigma$-대수

따라서 올바른 측도를 구축하기 위해서는 측도의 정의역을 적절히 제한할 필요가 있다. 이에 대수의 개념을 도입한다.

> **정의.** 집합 $X$의 **대수`<sub>`algebra`</sub>`** $\mathcal{A}\_0$는 다음을 만족하는 집합족이다.
>
> 1. $\varnothing, X \in \mathcal{A}\_0$
> 2. $A \in \mathcal{A}\_0 \implies A^c \in \mathcal{A}\_0$
> 3. $A, B \in \mathcal{A}\_0 \implies A \cup B \in \mathcal{A}\_0$

_Remark._ 2번 공리와 드모르간의 법칙에 의해, 3번 공리는 $A \cap B \in \mathcal{A}\_0$ 또한 시사한다.

대수의 3번 정의를 가산 합집합으로 강화하면 $\sigma$-대수의 정의를 얻는다. 즉,

> **정의.** 집합 $X$의 **$\sigma$-대수** $\mathcal{A}$는 다음을 만족하는 대수이다.
>
> 1. $\lbrace  A\_n \rbrace \_{n \in \mathbb{N}} \subset \mathcal{A}\_0 \implies \bigcup\_{n \in \mathbb{N}} A\_n \in \mathcal{A}$

> **정리.** $\lbrace \mathcal{A}\_i \rbrace\_{i \in I}$가 $X$의 $\sigma$-대수들의 모임이라면 $\bigcap\_{i \in I}\mathcal{A}\_i$ 또한 $X$의 $\sigma$-대수이다.

**증명.** $\sigma$-대수의 정의로부터 쉽게 증명할 수 있다. 그런데 이렇게만 적으면 재미 없으니까, 조금 독특한 증명을 남긴다. **워시-타르스키 정리`<sub>`Łoś-Tarski theorem`</sub>`**에 따르면 1차 이론이 교집합에 대해 보존적일 필요충분조건은 1차 이론의 모든 문장이 $\Pi\_1$ 문장인 것이다. 그리고 $\sigma$-대수의 세 공리는 모두 $\Pi\_1$ 문장이므로, $\sigma$-대수는 교집합에 대해 보존적이다. ■

> **따름정리.** $\mathcal{C}$가 $X$의 부분집합으로 이루어진 집합족일 때, $\mathcal{C}$를 포함하는 가장 작은 $\sigma$-대수가 존재한다. 그러한 $\sigma$-대수를 $\sigma(\mathcal{C})$와 같이 적는다.

**증명.** $\mathcal{S} = \lbrace \mathcal{A} : \mathcal{A} \text{ is an algebra containing } \mathcal{C} \rbrace$라고 하자. $\mathcal{P}(X) \in \mathcal{S}$이므로 $\mathcal{S}$는 공집합이 아니다. $\sigma(\mathcal{C}) = \bigcap\_{\mathcal{A} \in \mathcal{S}} \mathcal{A}$이다.

대표적인 $\sigma$-대수의 예시로, 보렐 $\sigma$-대수를 살펴보자.

> **정의.** $\mathcal{G}$가 $\mathbb{R}$의 열린 집합들의 집합족이라고 하자. $\sigma(\mathcal{G})$를 **보렐 $\sigma$-대수`<sub>`Borel $\sigma$-algebra`</sub>`**라고 하며, $\mathcal{B}$와 같이 적는다.

보렐 $\sigma$-대수는 **보렐 위계`<sub>`Borel hierarchy`</sub>`**를 통해서 이해할 수도 있다. $\Sigma\_1$을 열린 집합들의 모임, $\Pi\_1$을 닫힌 집합들의 모임이라고 하자. 다음과 같이 정의한다.

- $\Delta\_n = \Sigma\_n \cap \Pi\_n$
- $\Sigma\_{n + 1} = \lbrace S : \exists \lbrace P\_n \rbrace \_{n \in \mathbb{N}} \subset \Pi\_n \; S = \bigcup\_{n \in \mathbb{N}} P\_n \rbrace$
- $\Pi\_n = \lbrace P : \exists S \in \Sigma\_n \; P = S^c \rbrace$

즉 $\Sigma\_2 = F\_\sigma$, $\Pi\_2 = G\_\delta$이다. 합집합을 $\exists$, 교집합을 $\forall$로 생각했을 때 [산술 위계](https://dimenerno.github.io/2025/02/07/arithmetic-hierarchy/)와 정의의 형태가 유사함에 주목하라.

> **정리.** $\mathcal{B} = \Sigma\_{\omega\_1} = \Pi\_{\omega\_1} = \Delta\_{\omega\_1}$

**증명.** 생략. 하지만 직관적으로 이해할 수 있다. $\mathcal{B}$는 가산 교집합과 가산 합집합, 그리고 여집합에 대해 닫혀 있어야 하므로 모든 가산 서수 $\alpha$에 대해 $\Sigma\_\alpha, \Pi\_\alpha, \Delta\_\alpha \subset \mathcal{B}$이다. 이 사실로부터 초한 귀납을 취해 정리를 얻는다. ■

어떤 집합 위의 대수와 예비측도라는 것이 주어졌을 때, 이로부터 측도를 정의하는 방법이 알려져 있다. 이 방법을 카라테오도리 방법`<sub>`Carathéodory method`</sub>`이라고 부른다. 예비측도는 구성하기가 매우 쉽기 때문에, 이 방법을 이용하면 측도를 아주 쉽게 구성할 수 있다. 카라테오도리 방법에 대해서는 [다음 글](http://dimenerno.github.io/2025/02/25/caratheodory/)에서 알아본다.
