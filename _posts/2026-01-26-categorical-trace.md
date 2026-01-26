---
layout: post
title: "범주론적 대각합"
date: 2026-01-26
tags: ["수학", "범주론", "대수학"]
related:
---

독자는 선형대수학 수업에서 행렬의 대각합<sub>trace</sub>을 배웠을 것이다.

> **정의.** $n\times n$ 행렬 $A$의 대각합 $\mathrm{tr}(A)$를, $A$의 대각 성분들의 합으로 정의한다.

특히, 대각합은 다음의 성질을 가진다.

> **정리.** $A$와 $B$가 닮은 행렬이면 $\operatorname{tr}(A) = \operatorname{tr}(B)$이다.

즉, 대각합은 행렬에 대한 함수일 뿐 아니라 선형 변환에 대한 함수이기도 하다.

그런데 이 결과를 알고 나서 대각합의 정의를 다시 보면 불만족스러운<small>(짜치는)</small> 점이 있다. 대각합이 선형 변환에 대한 함수임에도 불구하고, “대각선 성분의 합”이라는 직관적 의미가 있는 행렬의 경우와 달리 선형 변환의 경우에는 직관적 의미가 읽히지 않기 때문이다. 이는 고윳값이 “단위 정사각형이 변환된 후의 넓이”라는 직관적 의미를 가지는 것과 대조된다. 때문에 대각합이 선형 변환에 대한 함수라는 사실은 마치 우연처럼 보인다.

옆집 물리학과 애들이라면 그게 뭐 어째서 ‒ 하며 계산이나 하러 가겠지만, 우리 우수한 수학과의 인재들은 이를 차치해서는 안 될 것이다. 더욱 자연스럽고 수학적인 방식은, 대각합을 먼저 선형 변환에 대한 함수로서 정의한 뒤, 이 정의가 기존의 정의와 일치함을 보이는 것이다. 이것이 **범주론적 대각합<sub>categorical trace</sub>**의 동기이다.

먼저 몇 가지 함수를 정의하자. 쌍대 공간의 정의에 따라, 임의의 $k$-벡터 공간 $V$에 대해 다음 사상이 존재한다.

$$
\mathrm{ev} : V^* \otimes V \to k;\; 
\phi \otimes v \mapsto \phi(v)
$$

그런데 $(\phi, v) \mapsto \phi(v)$가 쌍선형 사상<sub>bilinear map</sub>이므로, 텐서곱의 정의에 의해 $\mathrm{ev}$는 선형 사상이다. 따라서 $\mathrm{ev}$의 쌍대를 취할 수 있는데, 이를 $\mathrm{coev}$라고 하자. 즉,

$$
\mathrm{coev}: k^* \to (V^* \otimes V)^*
$$

그런데 $k^\ast$는 $k$와 표준적<sub>canonically</sub>으로 동형이고, $V^{\ast\ast}$는 $V$와 표준적으로 동형이며, $V, W$가 유한 차원 벡터 공간일 때 $(V \otimes W)^\ast$는 $V^\ast \otimes W^\ast$와 표준적으로 동형이므로, $\mathrm{coev}$를 다음과 같이 생각해도 무방하다.

$$
\mathrm{coev}: k \to V \otimes V^*
$$

> **Remark.** 그냥 동형이 아니라 표준적으로 동형이라는 사실이 중요하다. 일례로 $V^\ast \cong V$이지만, 이 동형은 특정 기저의 선택에 의존적이기 때문에 $\mathrm{coev} : k \to V \otimes V$라고 할 수는 없다. 우리의 목표는 $\mathrm{ev}$와 $\mathrm{coev}$로부터 *선형 변환에 대한* 함수를 구성하는 것이기 때문에, 기저 의존성이 개입되어서는 안 된다.

> **Remark.** $V, W$가 유한 차원 공간일 때, 다음과 같이 정의되는 $\Psi : V^\ast \otimes W^\ast \to (V \otimes W)^\ast$는 표준 동형 사상이다.
>
> $$
> \Psi : \phi \otimes \psi \mapsto \big( (v\otimes w) \mapsto \phi(v)\psi(w) \big)
> $$
>
> 유한 차원 조건이 필요한 이유는 전사성을 보장하기 위해서이다. 이 경우, 다음 사상이 위 사상의 역사상임을 확인할 수 있다. ($\lbrace e\_i\rbrace , \lbrace f\_j\rbrace $는 $V, W$의 기저이고, $\lbrace  g\_{ij} \rbrace $는 $V \otimes W$의 기저이다.)
>
> $$
> \Psi^{-1} : g^{ij} \mapsto e^i \otimes f^j
> $$
>
> 표면적으로 $\Psi^{-1}$은 기저 선택에 의존적인 것으로 보이지만, $\Psi$가 기저 의존적이지 않고, $\Psi^{-1}$이 $\Psi$의 역사상이기 때문에, $\Psi^{-1}$ 또한 기저 의존적이지 않다.

$k$는 1차원 벡터 공간이므로, $\mathrm{coev}(1)$을 알면 $\mathrm{coev}$ 전체가 결정된다. $\mathrm{coev}(1)$을 구하기 위해 다음의 정의를 떠올리자. $T : V \to W$에 대해,

$$
T^*: W^* \to V^*; \; \psi \mapsto \psi \circ T
$$

이다.  따라서, 

$$
\mathrm{coev} : 1 \mapsto 1 \circ \mathrm{ev} = \mathrm{ev}
$$

즉, $\mathrm{coev}(1)$은 다름아닌 $\mathrm{ev}$이다. 이는 말이 되는 게, $\mathrm{ev}$는 $V^\ast \otimes V$를 스칼라로 보내는 선형 사상이므로 그 자체로 $(V^\ast \otimes V)^\ast = V \otimes V^\ast$의 원소이다.

그렇다면 $\mathrm{ev}$는 어떻게 $V \otimes V^\ast$로 표현될까? 우선 $\mathrm{ev}$가 $(V^\ast \otimes V)^\ast$에서 어떻게 표현되는지를 보자. $V$의 기저 $\lbrace e\_i\rbrace $를 선택한다면, $V^\ast \otimes V$의 기저가 $\lbrace  f\_{ij} = e^i \otimes e\_j \rbrace $로 유도된다. $\mathrm{ev}$의 정의로부터 다음이 따라 나온다.

$$
\mathrm{ev} = \sum_i f^{ii}
$$

위의 Remark에서 정의한 $\Psi^{-1}$을 우변에 취하면 다음을 얻는다.

$$
\mathrm{ev} = \sum_i e_i \otimes e^i
$$

이제 범주론적 대각합을 정의하자.

> **정의.** $k$-벡터 공간 $V$와 선형 변환 $T: V \to V$에 대해, $\operatorname{tr}\_T: k \to k$를 다음 사상들의 합성으로 정의한다.
>
> $$
> k \xrightarrow{\operatorname{coev}} V \otimes V^* \xrightarrow{T \otimes \mathrm{id}} V \otimes V^* \xrightarrow{\operatorname{twist}} V^* \otimes V \xrightarrow{\operatorname{ev}} k
> $$
>
> $\mathrm{tr}\_T$를 **범주론적 대각합**이라고 한다.

정의에 사용된 사상들이 모두 기저 비의존적이므로, 범주론적 대각합 또한 기저 비의존적이다. 범주론적 대각합과 기존의 대각합은 다음의 관계에 있다.

> **정리.** $\mathrm{tr}\_T(1) = \mathrm{tr}(T)$

**증명.** 다음이 성립한다.

$$
\begin{align}
1 &\xmapsto{\operatorname{coev}} \sum e_i \otimes e^i \\
&\xmapsto{T \otimes \mathrm{id}} \sum T(e_i) \otimes e^i \\
&\xmapsto{\operatorname{twist}} \sum e^i \otimes T(e_i) \\
&\xmapsto{\operatorname{ev}} \sum [T]_{ii}
\end{align}
$$

여기서 $[T]$는 $\lbrace  e\_i \rbrace $를 기저로 선택했을 때 $T$의 행렬 표현이다. 따라서 $\sum [T]\_{ii} = \mathrm{tr}(T)$이다. ■

이로써 구차한 계산 없이 $\mathrm{tr}$이 선형 변환에 대한 함수임을 보일 수 있다. 우아하지 않은가?

한편 예리한 독자는 "범주론적 대각합"이라는 이름이 무색하게, 지금까지의 논의에서 특별히 범주론적인 개념은 등장하지 않았음을 눈치챘을 것이다. 그럼에도 불구하고 이 글에서 정의한 개념의 이름이 "범주론적 대각합"인 이유는, 이 글에서 소개한 정의를 벡터 공간에서 대칭적 모노이드 범주<sub>symmetric monoidal category</sub>로 자연스럽게 일반화할 수 있기 때문이다. 관심 있는 독자는 [위키피디아 문서](https://en.wikipedia.org/wiki/Categorical_trace)를 참고하길 바란다.