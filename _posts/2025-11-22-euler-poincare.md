---
layout: post
title: "오일러-푸앵카레 정리"
date: 2025-11-22
tags: ["수학", "위상수학"]
related:
---

독자 분은 어렸을 때 다음의 정리를 배웠을 것이다.

> **오일러 공식.** 볼록다면체의 꼭짓점, 모서리, 면의 개수를 $v, e, f$라고 할 때, $v - e + f= 2$이다.

예를 들어 정육면체의 경우 $v = 8, e = 12, f = 6$이므로 $v - e + f = 2$가 성립한다. 볼록다면체라는 조건은 중요한데, 만약 다면체에 "구멍"이 있으면 공식이 성립하지 않기 때문이다. 예를 들어 아래의 구멍 난 프리즘의 경우 $v = 16, e = 32, f = 16$이므로 $v - e + f = 0$이다.

<img src="/public/punctured-prism.png" style="width: 100%; max-width: 300px; margin: 1em auto 1.5em auto;">

이로부터 우리는 $v - e + f$의 값이 도형의 위상에 의해 결정된다고 추측할 수 있다. 이것이 오일러-푸앵카레 정리의 내용이다. 정리를 진술하기 앞서, 먼저 다음의 개념을 정의하자.

> **정의.** 위상 공간 $X$에 대해, $X$의 호몰로지 군 $H\_p(X)$의 자유 부분<sub>free part</sub>의 랭크를 $X$의 $p$번째 **베티 수<sub>Betti number</sub>**라고 하며 $R\_p(X)$라고 적는다.

원래 $b\_p(X)$라고 적는 것이 관행인데, 이 글에서는 $b\_p$를 다른 의미로 사용할 것이기 때문에 다른 표기법을 채택했다.

예를 들어 토러스의 호몰로지 군은 다음과 같다.

- $H\_0(X) = \mathbb{Z}$
- $H\_1(X) = \mathbb{Z} \oplus \mathbb{Z}$
- $H\_2(X) = \mathbb{Z}$

따라서 토러스의 0차, 1차, 2차 베티 수는 각각 1, 2, 1이다. 베티 수는 직관적으로 구멍의 의미를 가진다 ([이전 글](https://dimenerno.github.io/2025/11/05/euler-poincare) 참조). 특히, 0차 베티 수는 $K$를 이루는 연결 요소들의 수이다. 즉, 두 개의 사면체를 하나의 단체 복합체로 간주한다면 이 복합체의 0차 베티 수는 2이다.

> **오일러-푸앵카레 정리.** $n$-단체 복합체 $K$에 대해, $\alpha\_p \; (p \leq n)$를 $K$의 $p$-단체들의 개수라고 하자. 다음이 성립한다.
>
> $$
> \sum^n_{p = 0} (-1)\alpha_p = \sum^n_{p=0}(-1)^p R_p(K)
> $$

위 정리의 증명에서는 $p$-체인들을 자유군의 원소로 보는 것보다 선형 공간의 원소로 보는 것이 더 자연스럽기 때문에 이 접근을 취한다.

**증명.** $K$의 $p$-체인, 고리, 경계가 각각 유리수체에 대해 이루는 선형 공간을 $C\_p, Z\_p, B\_p$라고 하자. $\lbrace  d^i\_p \rbrace $가 고리를 선형 생성하지 않는 $C\_p$의 극대 부분집합이라고 하고, $\lbrace  d^i\_p \rbrace $가 생성하는 선형공간을 $D\_p$라고 하자. 다음이 성립한다 ($\oplus$는 벡터 공간의 직합).

$$
\begin{gather}
C_p = D_p \oplus Z_p\\\\
\alpha_p = \dim C_p = \dim D_p + \dim Z_p
\end{gather}
$$

$p \leq n - 1$에 대해, $b^i\_p = \partial d^i\_{p + 1}$라고 하자. $\lbrace  b^i\_p \rbrace $가 생성하는 선형 공간을 $B\_p$라고 하자. $\partial$은 선형 연산자이므로, $\lbrace  d^i\_{p +1} \rbrace $가 $D\_{p + 1}$의 선형 기저라는 사실로부터 $\lbrace  b^i\_p \rbrace $가 $B\_p$의 선형 기저라는 사실이 따라 나온다. 다음의 보조정리를 증명한다.

> **보조정리.** $B\_p$는 $K$의 모든 $p$-경계들을 포함한다.

_증명._ 만약 $b\_p$가 $K$의 $p$-경계라면, 어떤 $c\_{p + 1} \in C\_{p + 1}$에 대해 $\partial c\_{p + 1} = b\_p$이다. $C\_{p + 1} = D\_{p + 1} \oplus Z\_{p + 1}$ 관계에 의해 어떤 유일한 $d\_{p + 1} \in D\_{p + 1}, z\_{p + 1} \in Z\_{p + 1}$이 존재하여 $c\_{p + 1 } = d\_{p + 1} + z\_{p + 1}$이다. 그런데 $\partial z\_{p + 1} = 0$이므로 $\partial d\_{p + 1} = b\_p$이다. 따라서 $b\_p \in B\_p$이다. □

$\lbrace  z^i\_p \rbrace $가 $B\_p$의 원소를 선형 생성하지 않는 $Z\_p$의 극대 부분집합이라고 하고, $\lbrace  z^i\_p \rbrace $가 생성하는 선형공간을 $G\_p$라고 하자. 보조정리에 의해 다음이 성립한다.

$$
\dim G_p = R_p
$$

따라서 다음이 성립한다.

$$
\begin{gather}
Z_p = B_p \oplus G_p\\\\
\dim Z_p = \dim B_p + \dim G_p = \dim D_{p + 1} + R_p
\end{gather}
$$

앞선 결과와 연립하면 다음을 얻는다 ($p \leq n - 1$).

$$
\alpha_p = \dim D_{p + 1} + \dim D_p + R_p
$$

$p = n$일 때 $\alpha\_n = \dim D\_n + R\_n$이고, $p = 0$일 때 $\alpha\_0 = \dim D\_1 + R\_0$이다. 따라서 다음을 얻는다 (wlog, $n$은 짝수).

$$
\begin{alignat}{3}
&\alpha_n      &&= \;\cancel{\dim D_n} + R_p \\
&-\alpha_{n-1} &&= \;\cancel{-\dim D_{n}} \cancel{- \dim D_{n - 1}} - R_{n - 1} \\
&\alpha_{n-2}  &&= \;\cancel{\dim D_{n - 1}} \cancel{ + \dim D_{n - 2}} + R_{n - 2} \\
&&\vdots \\
&-\alpha_{1}   &&= \;\cancel{-\dim D_{2}} \cancel{-\dim D_{1}} - R_{1} \\
&\alpha_{0}    &&= \;\cancel{\dim D_{1}} + R_{0} \\
\hline
&\sum_{p = 0}^n (-1)^p \alpha_p &&= \;\sum_{p=0}^n (-1)^p R_p(K) \quad \blacksquare
\end{alignat}
$$

> **정의.** 위상공간 X에 대해, 다음 값을 **오일러 종수<sub>Euler characteristic</sub>**라고 한다.
>
> $$
> \xi(X) = \sum (-1)^p R_p(X)
> $$

> **따름정리.** 다면체 $P$의 꼭짓점, 모서리, 면의 개수를 $v, e, f$라고 하자. 2차원 위상공간으로서의 $P$의 표면을 $X$라고 하자. 다음이 성립한다.
>
> $$
> v - e + f = \xi(X)
> $$

**증명.** $k$각형의 삼각화는 $k - 3$개의 모서리를 추가함으로써 얻을 수 있는데, 이 과정에서 $k - 3$개의 면이 생긴다. 따라서 $P$는 $P$의 삼각화와 $v - e + f$ 값이 같으며, 이는 오일러 종수와 같다. ■

<img src="/public/triangulation.png" style="width: 100%; max-width: 400px; margin: 1em auto 1.5em auto;">

앞서 우리는 구멍이 하나 있는 다면체의 경우 $v - e + f = 0$임을 보았다. 실제로 토러스의 0차, 1차, 2차 베티 수는 1, 2, 1이며, $1 - 2 + 1 = 0$이다. 한편 구의 호몰로지 군은 다음과 같다.

- $H\_0(K) = \mathbb{Z}$
- $H\_1(K) = 0$
- $H\_2(K) = \mathbb{Z}$

따라서 구의 0차, 1차, 2차 베티 수는 1, 0, 1이며, $1 - 0 + 1 = 2$이다. 따라서 볼록다면체의 경우 $v - e + f = 2$이다.