---
layout: post
title: "어드조인트, 정규 변환, 그리고 스펙트럼 정리"
date: 2025-02-13
tags: [수학, 대수학]
---

이 글에서 모든 벡터 공간은 내적 공간이라고 가정한다. 또한, 모든 변환은 선형 변환이다.

## 1. 선형 변환의 어드조인트

> **정의.** $(V, \langle \cdot \rangle_V), (W, \langle \cdot \rangle_W)$가 내적 벡터 공간이라고 하자. $T: V \to W$에 대해, $T$의 **어드조인트<sub>adjoint</sub>** $T^\ast: W \to V$는 다음 조건을 만족하는 선형 변환이다.
>
> $$
> \forall v \in V, w \in W : \quad \langle w, Tv \rangle_W = \langle T^\ast w, v \rangle_V
> $$

[범주론의 어드조인트 정의](https://dimenerno.github.io/2025/02/13/three-definitions-of-adjoint/)를 떠올려 보면 식의 형태가 비슷하다.

이 정의를 정당화하려면 모든 $T$에 대해 어드조인트가 유일하게 존재함을 보여야 한다. 이는 리스 표현 정리<sub>Riesz representation theorem</sub>로부터 얻어진다.

> **리스 표현 정리.** $V$가 내적 공간이라고 하자. $\phi \in V^\ast$에 대해, 다음을 만족하는 벡터 $v$가 유일하게 존재한다.
> 
> $$
> \forall u \in V : \quad \phi(u) = \langle u, v \rangle
> $$

$V$가 유한 차원일 경우, 위 정리는 $V$의 직교 기저를 잡음으로써 쉽게 보여진다. $V$가 일반적인 힐베르트 공간일 경우에는 증명이 더 까다롭기 때문에 생략한다.

리스 표현 정리로부터 어드조인트의 정의를 다음과 같이 정당화할 수 있다. $w \in W$가 주어졌을 때, 사상 $v \mapsto \langle w, Tv \rangle$는 $V^\ast$의 원소이다. 따라서 어떤 $u_w \in V$가 존재하여

$$
\forall v \in V : \langle w, Tv \rangle = \langle u_w, v \rangle
$$

이다. 이 때 사상 $w \mapsto u_w$는 선형임을 쉽게 보일 수 있다. 이 선형 사상이 우리가 구하고자 하는 어드조인트이다.

> **정의.** $T^\ast = T$인 선형 사상 $T : V \to V$를 **자기 어드조인트<sub>self-adjoint</sub>**라고 한다. 

$T : V \to W$의 행렬 표현이 $M$일 때, 동일한 기저에서 $T^\ast$의 행렬 표현은 $M$의 켤레 전치, 즉 $M^\dagger$임을 — 다소 번거롭긴 하지만 — 어렵지 않게 보일 수 있다. 따라서 자기 어드조인트 변환의 행렬은 에르미트<sub>Hermitian</sub> 행렬이다.

> **복소 자기 어드조인트 판별볍.** $V$가 복소 벡터 공간일 때, $T: V \to V$가 자기 어드조인트 변환일 필요충분조건은 임의의 $v \in V$에 대해 $\langle Tv, v \rangle \in \mathbb{R}$인 것이다.

**증명.** 필요조건은 자명하므로 충분조건임을 보인다. 먼저 다음 보조정리를 증명한다.

*보조정리.* $V$가 복소 벡터 공간이라고 하자. $T : V \to V$에 대해, $T = 0$일 필요충분조건은 임의의 $v \in V$에 대해 $\langle Tv, v \rangle = 0$인 것이다.

*보조정리의 증명.* 필요조건은 자명하므로 충분조건임을 보인다. 임의의 $u, v \in V$에 대해,

$$
\langle T(u + v) , u + v \rangle = \langle Tu, v \rangle + \langle Tv, u \rangle = 0
$$

이고,

$$
\begin{aligned}
\langle T(u + iv), u + iv \rangle &= \langle T(u), iv \rangle + \langle T(iv), u \rangle \\ &= -i \langle Tu, v \rangle + i \langle Tv, u \rangle = 0
\end{aligned}
$$

이다. 두 식을 연립하면 $\langle Tu, v \rangle = 0$을 얻는다. 이로부터 $T = 0$임을 보이기는 쉽다. □

이제 본 정리를 보인다. $\langle Tv, v \rangle \in \mathbb{R}$이므로, $\langle Tv, v \rangle = \langle v, Tv \rangle$이다. 또한 어드조인트의 정의에 의해 $\langle Tv, v \rangle = \langle v, T^\ast v \rangle$이다. 따라서 $\langle v, (T - T^\ast)v \rangle = 0$이다. 보조정리로부터 $T = T^\ast$가 따라 나온다. ■

> **자명한 자기 어드조인트 판별법.** $V$가 실수 또는 복소 벡터 공간이라고 하자. 자기 어드조인트 변환 $T: V \to V$에 대해, $T = 0$일 필요충분조건은 임의의 $v \in V$에 대해 $\langle Tv, v \rangle = 0$인 것이다.

**증명.** 복소 벡터 공간인 경우에는 위의 보조정리로부터 따라 나온다. 따라서 $V$가 실수 벡터 공간인 경우에만 증명한다. 필요조건은 자명하므로 충분조건임을 보인다. 임의의 $u, v \in V$에 대해,

$$
\begin{aligned}
\langle T(u + v), u + v \rangle &= \langle Tu, v \rangle + \langle Tv, u \rangle &&(\because \langle Tv, v \rangle = 0) \\
&= \langle Tu, v \rangle + \langle u, Tv \rangle &&(\because \mathrm{im} \langle \cdot \rangle \subset \mathbb{R}) \\
&= 2\langle Tu, v \rangle &&(\because T^\ast = T)
\end{aligned}
$$

즉 임의의 $u, v \in V$에 대해 $\langle Tu, v \rangle = 0$이므로 $T = 0$이다. ■

## 2. 정규 선형 변환

> **정의.** $T : V \to V$에 대해 $TT^\ast = T^\ast T$일 때, $T$를 **정규<sub>normal</sub>**라고 한다.

모든 자기 어드조인트 변환은 정규 변환이지만 그 역은 성립하지 않는다.

> **정규 판별법.** $V$가 실수 또는 복소 벡터 공간이라고 하자. $T: V \to V$가 정규일 필요충분조건은 임의의 $v$에 대해 $\lVert Tv \rVert = \lVert T^\ast v \rVert$인 것이다.

**증명.** "자명한 자기 어드조인트 판별법"으로부터 따라 나온다. ■

> **정규 고유벡터의 켤레성.** $V$가 실수 또는 복소 벡터 공간이고, $T : V \to V$가 정규라고 하자. $v$가 고윳값 $\lambda$를 가지는 $T$의 고유벡터일 때, $v$는 고윳값 $\bar{\lambda}$를 가지는 $T^\ast$의 고유벡터이다.

**증명.** $T$가 정규일 때, $T - \lambda I$ 또한 정규임을 쉽게 보일 수 있다. 따라서,

$$
\lVert (T - \lambda I) v \rVert = \lVert (T - \lambda I)^\ast v \rVert = \lVert (T^\ast - \bar{\lambda} I) v \rVert = 0. \quad \blacksquare
$$

'정규'라는 이름의 유래는 다음 정리에 있다.

> **정규 고유벡터의 정규성.** $T: V \to V$가 정규라고 하자. $u, v \in V$가 서로 다른 고윳값을 가지는 $T$의 고유벡터라면 $u$와 $v$는 직교한다.

**증명.** $u, v$의 고윳값이 $\alpha, \beta$라고 하자.

$$
\begin{aligned}
(\alpha - \beta)\langle u, v \rangle &= \langle \alpha u, v \rangle - \langle u, \bar{\beta}v \rangle \\
&= \langle Tu, v \rangle - \langle u, T^\ast v \rangle = 0.
\end{aligned}
$$

$\alpha - \beta \neq 0$이므로 $\langle u, v \rangle = 0$이다. ■

## 3. 스펙트럼 정리<sub>Spectral theorems</sub>

'스펙트럼'이라는 이름은, 스펙트럼 정리가 양자역학에서 원자의 스펙트럼을 설명할 때 쓰였던 것에서 유래했다는 설이 흔히 전해지지만, 이것은 사실이 아니다. 스펙트럼 정리를 사용해서 원자의 스펙트럼을 설명하기 이전에 이미 힐베르트가 '스펙트럼'이라는 표현을 쓴 바 있기 때문이다. 정확한 유래는 알려져 있지 않은데, 고유벡터들이 힐베르트 공간의 특성을 나타낸다는 점에서 빛의 스펙트럼과 유사하다는 이미지 때문이 아니었을까 추측해 봄직하다.

> **복소 스펙트럼 정리.** $V$가 복소 벡터 공간이라고 하자. $T: V \to V$가 정규일 필요충분조건은, $T$의 고유벡터들이 $V$의 직교 기저를 이루는 것이다.

**증명.** *TODO* ■

> **실수 스펙트럼 정리.** $V$가 실수 벡터 공간이라고 하자. $T: V \to V$가 자기 어드조인트일 필요충분조건은, $T$의 고유벡터들이 $V$의 직교 기저를 이루는 것이다.

**증명.** *TODO* ■