---
layout: post
title: "스톤-체흐 콤팩트화"
date: 2026-07-07
tags: ["수학", "위상수학"]
related:
---

국소적으로 콤팩트<sub>locally compact</sub>한 하우스도르프 공간 $X$에 대해서는 $X$의 한점 콤팩트화<sub>one-point compactification</sub> 공간 $X^\ast$가 존재한다. $X^\ast$는 $X$를 조밀한 부분공간으로서 가지는 "가장 작은" 콤팩트 하우스도르프 공간이다.

스톤-체흐 콤팩트화는 어떤 면에서 이의 반대 개념이다. $X$의 스톤-체흐 콤팩트화 공간 $\beta X$는 $X$를 조밀한 부분공간으로서 가지는 "가장 큰" 콤팩트 하우스도르프 공간이다. 여기서 "가장 큰"의 정확한 정의는 다음의 보편 성질<sub>universal property</sub>이다.

> **정의.** 위상공간 $X$의 **스톤-체흐 콤팩트화<sub>Stone-Čech compactification</sub>** $\beta X$는 다음 조건을 만족하는 공간이다. 어떤 연속사상 $\iota : X \to \beta X$가 존재하여, $K$가 임의의 콤팩트 하우스도르프 공간이고 $f: X \to K$가 연속사상일 때, $f = \beta f \circ \iota$를 만족하는 연속사상 $\beta f: \beta X \to K$가 유일하게 존재한다.
>
> <img src="/public/stone-cech-1.png" style="width: 100%; max-width: 140px; mix-blend-mode: multiply; margin: 0 auto 0.5em auto;">

한점 콤팩트화가 국소적으로 콤팩트한 공간에서만 가능한 것과 달리, 스톤-체흐 콤팩트화는 _모든_ 위상공간에서 가능하다. 뿐만 아니라 스톤-체흐 콤팩트화는 일반 위상공간의 범주 $\mathbf{Top}$를 콤팩트 하우스도르프 공간의 범주 $\mathbf{CHaus}$로 보내는 함자이다. 즉 다음과 같이 스톤-체흐 콤팩트화를 정의할 수도 있다.

> **정의.** 망각함자<sub>forgetful functor</sub> $U: \mathbf{CHaus} \to \mathbf{Top}$의 우 어드조인트  $\beta: \mathbf{Top} \to \mathbf{CHaus}$에 대해, $\beta X \in \mathbf{CHaus}$를 $X$의 스톤-체흐 콤팩트화라고 한다.

[예전 글](http://dimenerno.github.io/2025/02/13/three-definitions-of-adjoint/)에서 다룬 동치성으로 인해 이는 처음의 정의와 동치이다.

$\beta$의 존재성 증명은 크게 세 단계로 구성된다. 첫째, 임의의 위상공간 $X$에 대해 $\beta X$를 정의한다. 둘째, $\beta X$가 보편 성질을 만족함을 보인다. 셋째, $X$와 $\beta X$의 관계가 함수적<sub>functorial</sub>임을, 즉 $\beta$가 함자임을 보인다.

> **정리.** 망각함자 $U: \mathbf{CHaus} \to \mathbf{Top}$는 좌 어드조인트를 가진다.

**증명.**

#### 1. $\beta X$의 정의

집합 $C$를 다음과 같이 정의하자.

$$C = \{ f \mid f : X \to [0, 1] \text{ is continuous } \}$$

**$\beta X$를 $[0, 1]^C$로 정의하자.** $[0, 1]$에는 표준 위상이 부여된 것으로 생각하여, $\beta X$에 곱 위상을 부여한다. 티호노프 정리에 의해 $\beta X$는 콤팩트 공간이다. 그리고 $[0, 1]$이 하우스도르프이며, 하우스도르프 공간의 임의곱은 하우스도르프이므로 $\beta X$는 콤팩트 하우스도르프이다.

이제 다음의 사상 $e$를 고려하자. $(x \in X)$

$$
e: x \mapsto (f \mapsto f(x))
$$

여기서 $f \in C$이다. 잘 따져보면 $e : X \to \beta X$임을 알 수 있다. 표로 정리해 보면 다음과 같다 (연속사상인 경우 $\to^\ast$와 같이 표기했다).

| 이름        | 정의                                     | 풀어쓰기                                   |
|-----------|----------------------------------------|----------------------------------------|
| $C$       | $\lbrace  f \mid f : X \to^\ast [0, 1] \rbrace $           | $X \to^\ast [0, 1]$                    |
| $\beta X$ | $[0, 1]^C$                             | $X \to^\ast [0, 1] \to [0, 1]$              |
| $e$       | $x \mapsto (f \mapsto f(x))$ | $X \to X \to^\ast [0, 1] \to [0, 1]$ |

**이제 $e$가 연속임을 보이자.** $[0, 1]$은 거리 위상이므로, $\beta X = [0, 1]^C$의 토폴로지는 균등 노름<sub>uniform norm</sub>으로 생성된 것으로 간주할 수 있다. 따라서 임의의 $f : C \to [0, 1]$에 대해,

$$N_f(\epsilon) = \{ g : \lVert f - g \rVert < \epsilon \}$$

의 $e$에 대한 역상<sub>preimage</sub>이 열린집합임을 보이면 된다.

#### 2. $\beta X$의 보편 성질 확인

#### 3. $\beta$의 함자 조건 확인