---
layout: post
title: "초한귀납과 초한재귀"
date: 2024-12-05
---

### 1. 초한귀납법

> **정리.** $P$가 서수 위에서 정의된 속성이고 임의의 $\alpha \in \mathrm{Ord}$에 대해
>
> $$
> [ \forall \beta < \alpha : P(\beta)] → P(\alpha)
> $$
>
> 가 성립할 때, $P$는 모든 서수에 대해 참이다. 

*Remark.* $P$의 정의역인 $\mathrm{Ord}$는 집합이 아닌 진모임(proper class)이므로 “술어” 대신 “속성”이란 표현을 사용한다.

**증명.** 서수가 정렬 순서라는 사실과 귀류법을 사용한다.

$\lnot P(\lambda)$인 $\lambda$가 존재한다고 하자. $\Omega = \lbrace  \alpha \in \lambda : \lnot P(\alpha) \rbrace$는 공집합이 아닌 정렬 집합이므로 최소 원소 $\alpha\_0$가 존재한다. 이때 $\forall \beta < \alpha\_0 : P(\beta)$이므로 가정에 의해 $P(\alpha\_0)$가 되어 모순이다. ■

**응용.** 폰 노인만 계층에서 $V\_\alpha$는 추이적이다. 따라서 $V\_{\alpha + 1} = V\_\alpha \cup \mathcal{P}(V\_\alpha)$ 대신 $V\_{\alpha + 1} = \mathcal{P}(V\_\alpha)$로 정의할 수 있다.

### 2. 초한재귀적 정의

*Motivation.* 자연수의 재귀적 정의를 생각해 보자. $n$개의 집합 $x\_1, \dots , x\_n$이 주어졌을 때 집합을 출력하는 함수 $g$가 존재한다면 다음과 같이 $f: \mathbb{N} → V$을 정의할 수 있을 것이다.

$$
f(n) = g(f(0), \dots, f(n - 1))
$$

문제는 $g$가 고정된 수의 매개변수만을 가질 수 있다는 것이다. 따라서 다음과 같이 $g$의 매개변수를 순서쌍으로 묶는다.

$$
f(n) = g(\langle f(0), \dots, f(n - 1) \rangle)
$$

이 순서쌍은 $\lbrace  (0, f(0)), \dots, (n - 1, f(n - 1)) \rbrace = f \upharpoonright n$과 같이 표현할 수 있다. 즉,

$$
f(n) = g(f \upharpoonright n).
$$

이를 서수에 대해서 일반화하면 다음과 같다.

> **정리.** $G: V → V$가 모임함수(class function)이라고 하자. 다음을 만족하는 모임함수 $F: \mathrm{Ord} → V$가 존재한다.
>
> $$
> F(\alpha) = G(F \upharpoonright \alpha)
> $$

**증명.** 초한귀납법을 겁나게 쓰면 된다. (불친절해서 ㅈㅅ)