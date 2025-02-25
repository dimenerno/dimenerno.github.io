---
layout: post
title: "르베그 가측 집합과 보렐 가측 집합"
date: 2025-02-25
tags: [수학, 측도론]
related:
  - "카라테오도리 정리를 이용한 측도의 구성"
  - "대수와 측도의 정의"
---

### 1. 르베그 측도

[카라테오도리 정리](https://dimenerno.github.io/2025/02/25/caratheodory/)로부터 다음과 같이 측도 $m$을 정의할 수 있다.

1. $\mathcal{A}\_0 = \lbrace \cup^n\_{k=1} (a_k, b_k] : a_k, b_k \in \mathbb{R}^\infty \rbrace $는 대수임을 보인다.

2. $A \in \mathcal{A}\_0$에 대해, $A = \sqcup^n\_{k=1} (a\_k, b\_k]$로 표현하는 방법이 유일함을 보인다.

3. 함수 $\rho: \mathcal{A}\_0 \to [0, \infty]$를

   $$
   \rho(\sqcup^n_{k=1} (a_k, b_k]) = \sum^n_{k=1}(b_k - a_k)
   $$

   와 같이 정의했을 때 $\rho$가 예비측도임을 보인다.

4. $\mathcal{A}\_0, \rho$에 대해 카라테오도리 구축 정리를 적용하여 외측도 $m^\ast$을 얻는다.

5. $m^\ast$의 정의역을 $m^\ast$-가측집합으로 제한하여 측도 $m$을 얻는다.

대수는 유한 합집합에만 닫혀 있기 때문에 1, 2, 3은 거의 자명하다. 4, 5의 증명은 [관련 글](https://dimenerno.github.io/2025/02/25/caratheodory/)을 참조하라.

> **정의.** 상술한 $m$을 **르베그 측도<sub>Lebesgue measure</sub>**라고 부른다. 또한, $m$의 정의역에 속하는 집합을 **르베그 가측<sub>Lebesgue measurable</sub>**이라고 부른다.

카라테오도리 정리들로부터 다음 사실들이 어렵지 않게 따라 나온다.

> **정리.**
>
> 1. $m([a, b]) = m((a, b)) = m((a, b]) = m([a, b)) = b - a$
> 2. $A \subset \mathbb{R}$이 가산일 때, $m(A) = 0$

그리고 카라테오도리 확장 정리로 얻어지는 측도는 완비 측도<sub>complete measure</sub>이므로 다음이 성립한다.

> **정리.** $m$은 완비 측도이다.

또한 $\sigma(\mathcal{A}\_0)$는 보렐 $\sigma$-대수 $\mathcal{B}$이므로, 다음이 따라 나온다.

> **정리.** 보렐 가측 집합은 르베그 가측이다.

### 2. 르베그 가측이지만 보렐 가측이 아닌 집합

> **정의.** 집합열 $\lbrace C\_n \rbrace$을 다음과 같이 정의한다.
>
> $$
> \begin{gather}
> C_0 = [0, 1]\\
> C_1 = I_0 \setminus (1/3, 2/3) \\
> C_2 = I_1 \setminus \{ (1/9, 2/9) \cup (7/9, 8/9) \} \\
> \vdots
> \end{gather}
> $$
>
> **칸토어 집합<sub>Cantor set</sub>** $C$를 $\cap^\infty\_{n = 0}C\_n$으로 정의한다.
>
> <img src="/public/cantor.png" width="500px" style="margin: 0 auto;"/>

> **정리.**
>
> 1. 칸토어 집합은 비가산이다.
> 2. 칸토어 집합은 르베그 측도 0이다.

**증명.**

1. 칸토어 집합에 속하는 원소들은 삼진법으로 소숫점 전개했을 때 어느 자리에도 2가 등장하지 않는 수들이다. 그러한 수는 $2^\aleph\_0$개 있으므로 비가산이다.

2. $m(C\_n) = (2/3)^n$이므로 $m(C) = \lim\_{n \to infty} (2/3)^n = 0$. ■

> **정의.** 칸토어 집합을 정의할 때 각 단계에서 빠지는 집합을 $J\_n$이라고 하자. 즉,
>
> $$
> \begin{gather}
> J_1 = (1/3, 2/3) \\
> J_2 = (1/9, 2/9) \cup (7/9, 8/9) \\
> \vdots
> \end{gather}
> $$
>
> 다음과 같이 함수열을 정의한다.
>
> $$
> \begin{gather}
> \operatorname{dom} f_1 = J_1,\; f_1(x) = \frac{1}{2} \\\\
> \operatorname{dom} f_2 = J_1 \cup J_2, \; f_2(x) = \begin{cases} 1/4 & x \in (1/9, 2/9) \\ 1/2 & x \in (1/3, 2/3) \\ 3/4 & x \in (7/9, 8/9) \end{cases} \\\\
> \vdots
> \end{gather}
> $$
>
> $f: I \to I$를 다음과 같이 정의한다.
>
> $$f(x) = \inf \{ f_n(y) : y \geq x, y \in \mathrm{dom} f \}$$
>
> $f$를 **칸토어 함수<sub>Cantor function</sub>**라고 한다.
>
> <img src="/public/CantorEscalier.svg.png" width="300px" style="margin: 0 auto;"/>

> **정리.** 칸토어 함수는 연속이다.

**증명.** $f$를 칸토어 함수라고 하자. $f$는 증가함수이므로 $f$가 불연속점을 가진다면 해당 불연속은 틈 불연속<sub>gap discontinuity</sub>이며, 따라서 어떤 $\epsilon > 0$와 $y\_0 \in I$에 대해 $(y\_0 - \epsilon, y\_0 + \epsilon)$이 $\operatorname{im} f$ 밖에 속한다. 그런데 $(y\_0 - \epsilon, y\_0 + \epsilon)$의 원소 중에는 이진법으로 소숫점 전개했을 때 자릿수가 유한한 수가 존재한다. 해당 수는 $\operatorname{im}f$에 속하므로 모순이다. ■

> **정리.** 르베그 가측이지만 보렐 가측이 아닌 함수가 존재한다.

**증명.**

_보조정리._ $f$가 증가함수라면 $f^{-1}$은 보렐 집합을 보렐 집합에 사상한다.

_보조정리의 증명._ $\mathcal{A} = \lbrace  S \subset I : f^{-1}(S) \in \mathcal{B} \rbrace $라고 하자. 열린 집합들의 모음 $\mathcal{G}$에 대해 $\mathcal{G} \subset \mathcal{A}$임이 자명하다. 또한 $\mathcal{A}$가 $\sigma$-대수임이 역함수의 성질로부터 자명하다. 따라서 $\mathcal{A} = \sigma(\mathcal{G}) = \mathcal{B}$이다.

$f$가 칸토어 함수라고 하고, $F$를 다음과 같이 정의하자.

$$
F(x) =\inf \{y : f(y) \geq x \}
$$

$F$는 엄격히 증가하는 함수이고, $\operatorname{im} F = C$이다($C$는 칸토어 집합). $V$를 [비탈리 집합](https://dimenerno.github.io/2025/02/24/algebra-measure/)이라고 하자. $F[V]$는 $C$에 포함되므로 르베그 측도 0이며, 르베그 측도의 완비성에 따라 르베그 가측이다. 그러나 $F[V]$는 보렐 가측이 아니다. 만약 보렐 가측이었다면 $F$가 증가함수이므로 $F^{-1}(F[V]) = V$가 가측이어야 하기 때문이다. ■
