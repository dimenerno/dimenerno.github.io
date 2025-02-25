---
layout: post
title: "카라테오도리 정리를 이용한 측도의 구성"
date: 2025-02-25
tags: [수학, 측도론]
related:
  - "대수와 측도의 정의"
---

필자는 카라테오도리 정리<sub>Carathéodory theorem</sub>를 3가지로 구분해서 이해하는 방식을 선호하기 때문에, 이 글에서도 해당 방식을 따른다. 각각 다음과 같다.

1. **카라테오도리 구축 정리:** 임의의 집합족과 양함수로부터 외측도<sub>outer measure</sub> 를 정의할 수 있다.
2. **카라테오도리 제한 정리:** 외측도의 정의역을 가측 집합으로 제한한 함수는 측도가 된다.
3. **카라테오도리 확장 정리:** 대수 $\mathcal{A}\_0$ 위의 예비측도<sub>premeasure</sub> $\mu\_0$를 확장하는 $\sigma(\mathcal{A}\_0)$ 위의 측도는, 집합족을 $\mathcal{A}\_0$, 양함수를 $\mu\_0$로 잡은 뒤 구축 정리를 적용하여 얻은 외측도 $\mu^\ast$에, 제한 정리를 적용하여 얻은 측도가 유일하다.

도식적으로, 다음과 같이 이해할 수 있다.

|        | (1)                   | (2)                         | (3)                     |
| ------ | --------------------- | --------------------------- | ----------------------- |
| 정의역 | 대수 $\mathcal{A}\_0$ | $\sigma$-대수 $\mathcal{A}$ | 멱집합 $\mathcal{P}(X)$ |
| 함수   | 예비측도 $\mu\_0$     | 측도 $\mu$                  | 외측도 $\mu^\ast$       |

구축 정리는 (1) → (3), 제한 정리는 (3) → (2), 확장 정리는 (1) → (2)의 방향을 가진다. 하나하나 살펴 보자.

> **정의.** $X$ 위의 **외측도** $\mu^\ast: \mathcal{P}(X) \to [0, \infty]$는 다음을 만족하는 함수이다.
>
> 1. $\mu^\ast(\varnothing) = 0$
> 2. $A \subset B \implies \mu^\ast(A) \leq \mu^\ast(B)$
> 3. $\mu^\ast\left( \bigcup\_{n \in \mathbb{N}} A\_n  \right) \leq \sum\_{n \in \mathbb{N}} \mu^\ast(A\_n)$

> **카라테오도리 구축 정리.** $X$의 부분집합으로 이루어진 임의의 집합족 $\mathcal{S}$와, $l(\varnothing) = 0$을 만족하는 임의의 함수 $l: \mathcal{S} \to [0, \infty]$가 주어졌을 때, 다음과 같이 정의된 $\mu^\ast$은 외측도이다.
>
> $$
> \mu^*(E) = \inf \left\{ \sum_{n \in \mathbb{N}} l(A_n) : \{ A_n \} \subset \mathcal{S} \text{ covers }E  \right\}
> $$

즉, $\mu^\ast$은 덮개의 극한으로서 $E$의 '측도' 비스무리한 것을 정의하는 함수이며, 구분구적법에서 상합<sub>upper sum</sub>과 개념적으로 비슷하다.

**증명.** 1과 2는 자명하다. 3을 보인다.

$A = \bigcup A\_n$이라고 하고, 임의의 $\epsilon > 0$이 주어졌다고 하자. $\mu^\ast$의 정의에 의해, 각 $n$에 대해 다음을 만족하는 $A\_n$의 덮개 $\mathcal{C}\_n = \lbrace  A\_{nm} \rbrace\_{m \in \mathbb{N}} \subset \mathcal{S}$가 존재한다.

$$
\sum l(A_{nm}) \leq \mu^*(A_n) + \epsilon/2^n
$$

따라서,

$$
\sum_{n, m \in \mathbb{N}} l(A_{nm}) \leq \sum \mu^*(A_n) + \epsilon.
$$

그리고 $\bigcup \mathcal{C}\_n$이 $A$를 덮으므로, $\mu^\ast$의 정의에 의해 $\mu^\ast(A) \leq \sum\_{n, m \in \mathbb{N}} l(A\_{nm})$이다. ■

> **정의.** $\mu^\ast$가 외측도라고 하자. 임의의 $E$에 대해 다음을 만족하는 집합 $A$를 $\mu^\ast$에 대해 **가측<sub>measurable</sub>**이라고 한다.
>
> $$\mu^*(E) = \mu^*(E \cap A) + \mu^*(E \cap A^c)$$

> **정의.** $\mu^\ast$가 외측도라고 하자. $\mu^\ast(N) = 0$인 $N$을 **영집합<sub>null set</sub>**이라고 한다.

즉, 가측 집합은 $\mu^\ast$에 대해 임의의 집합을 '깔끔하게' 분할하는 집합이다. 따라서 가측 집합으로만 이루어진 모임 위에서 $\mu^\ast$은 일반적인 측도와 같이 행동할 것으로 예측할 수 있다. 이 예측을 입증하는 것이 다음의 제한 정리이다.

> **카라테오도리 제한 정리.** $\mu^\ast$가 외측도라고 하자. $\mu^\ast$에 대해 가측인 집합들의 모임을 $\mathcal{A}$라고 할 때, 다음이 성립한다.
>
> 1. $\mathcal{A}$는 $\sigma$-대수이다.
> 2. $\mu^\ast \|\_\mathcal{A}$는 측도이다.
> 3. $\mathcal{A}$는 $\mu^\ast$의 모든 영집합을 포함한다.

**증명.**

**1. $\mathcal{A}$는 대수이다.**

여집합 닫힘은 자명하다. 유한 교집합 닫힘임을 보인다.

$A, B$가 가측이라고 하자. $A \cap B$가 가측임을 보이기 위해 다음을 보이면 충분하다.

$$
\mu^*(E \cap (A \cap B)) + \mu^*(E \cap (A \cap B)^c) \leq \mu^*(E) \quad \cdots \quad (*)
$$

$A, B$가 가측이므로 다음이 성립한다.

$$
\begin{aligned}
\mu^*(E) &= \mu^*(E \cap A) + \mu^*(E \cap A^c) \\
&= \mu^*(E \cap A \cap B) + \mu^*(E \cap A \cap B^c) \\ &+ \mu^*(E \cap A^c \cap B) + \mu^*(E \cap A^c \cap B^c)
\end{aligned}
$$

따라서 $(\ast)$은 다음과 동치이다.

$$
\begin{aligned}
\mu^*(E \cap (A^c \cup B^c)) &\leq \mu^*(E \cap A \cap B^c) \\ &+ \mu^*(E \cap A^c \cap B)  \quad \cdots \quad (**) \\ &+ \mu^*(E \cap A^c \cap B^c)
\end{aligned}
$$

간단한 집합론으로부터 다음을 알 수 있다.

$$
A^c \cup B^c = (A \cap B^c) \cup (A^c \cap B) \cup (A^c \cap B^c)
$$

따라서 $(\ast\ast)$가 성립한다. □

**2. $\mathcal{A}$는 $\sigma$-대수이다.**

$A\_n \uparrow A$인 $\lbrace  A\_n \rbrace  \subset \mathcal{A}$에 대해 $A \in \mathcal{A}$임을 보이면 충분하다. (why?)

외측도의 정의에 의해 $\mu^\ast(E \cap A\_n) \leq \mu^\ast(E \cap A)$이다. $C\_1 = A\_1, C\_n = A\_n \setminus A\_{n - 1}$이라고 하자. $\bigsqcup C\_n = A$이다. 또한,

$$
\begin{aligned}
\mu^*(E \cap A_n) &= \mu^*(E \cap A_n \cap C_n) + \mu^*(E \cap A_n \cap C_n^c) \\
&= \mu^*(E \cap C_n) + \mu^*(E \cap A_{n - 1}) \\
&= \cdots \\
&= \sum^n_{k = 1} \mu^*(E \cap C_k)
\end{aligned}
$$

이다. 따라서 $\sum^\infty \mu^\ast(E \cap C\_n) \leq \mu^\ast(E \cap A)$이다. 그런데 $\lbrace  E \cap C\_n \rbrace $이 $E \cap A$를 덮으므로, $\sum^\infty \mu^\ast(E \cap C\_n) \geq \mu^\ast(E \cap A)$이다. 따라서 $\sum^\infty \mu^\ast(E \cap C\_n) = \mu^\ast(E \cap A)$이다.

따라서 임의의 $\epsilon > 0$에 대해, 충분히 큰 $N$이 존재하여 $\mu^\ast(E \cap A) - \epsilon \leq \mu^\ast(E \cap A\_n)$이다. 따라서,

$$
\begin{aligned}
\mu^*(E \cap A_n^c) &= \mu^*(E) - \mu^*(E \cap A_n) \\
&\leq \mu^*(E) - \mu^*(E \cap A) + \epsilon
\end{aligned}
$$

이므로 다음을 얻는다.

$$
\mu^*(E) \leq \mu^*(E \cap A_n) + \mu^*(E \cap A_n^c) \leq \mu^*(E) + \epsilon
$$

$n \to \infty$로 보내면 $\mu^\ast(E \cap A) + \mu^\ast(E \cap A^c) = \mu^\ast(E)$이다. □

**3. $\mu^\ast\|\_\mathcal{A}$는 측도이다, 4. $\mathcal{A}$는 모든 영집합을 포함한다.**

Left as an exercise to the readers. (어렵지 않음) ■

> **정의.** $\mathcal{A}\_0$가 대수라고 하자. $\rho: \mathcal{A}\_0 \to [0, \infty]$가 **예비측도**라는 것은 다음을 만족한다는 것이다.
>
> 1. $\rho(\varnothing) = 0$
> 2. 쌍으로 서로소인 가산 집합족 $\lbrace  A\_n \rbrace $에 대해, $\bigcup A\_n \in \mathcal{A}\_0$라면 $\rho\left( \bigcup A\_n \right) = \sum \rho(A\_n)$

> **카라테오도리 확장 정리.** 대수 $\mathcal{A}\_0$ 위의 예비측도 $\rho$에 대해, 다음과 같이 정의하자.
>
> $$
> \mu^*(E) = \inf \left\{ \sum_{n \in \mathbb{N}} \mu_0(A_n) : \{ A_n \} \subset \mathcal{A}_0 \text{ covers }E \right\}
> $$
>
> 이 때, 다음이 성립한다.
>
> 1. $A \in \mathcal{A}\_0$라면 $\mu^\ast(A) = \rho(A)$이다.
> 2. $\sigma(\mathcal{A}\_0)$는 $\mu^\ast$에 대해 가측이다.
> 3. $\rho$가 $\sigma$-유한이라면, $\rho$의 정의역을 $\sigma(\mathcal{A}\_0)$로 확장하는 측도는 $\mu^\ast\|\_{\sigma(\mathcal{A}\_0)}$가 유일하다.

**증명.**

**1. $A \in \mathcal{A}\_0$라면 $\mu^\ast(A) = \rho(A)$이다.**

$A$가 $A$의 덮개이므로 $\mu^\ast(A) \leq \rho(A)$이다. 만약 $\mu^\ast(A) < \rho(A)$라면 어떤 $A$의 덮개 $\lbrace  A\_n \rbrace $이 존재하여 $\sum \rho(A\_n) < \rho(A)$이다. 그런데 $\rho$가 예비측도이므로 이는 모순이다. □

**2. $\sigma(\mathcal{A}\_0)$는 $\mu^\ast$에 대해 가측이다.**

먼저 $\mathcal{A}\_0$가 가측임을 보인다. 임의의 $A \in \mathcal{A}\_0$에 대해 $\mu^\ast(E \cap A) + \mu^\ast(E \cap A^c) \leq \mu^\ast(E)$임을 보이면 충분하다. $\mu^\ast$의 정의에 의해, 임의의 $\epsilon > 0$에 대해 어떤 $E$의 덮개 $\mathcal{C}$가 존재하여 다음이 성립한다.

$$
\sum^\infty_{n = 1} \rho(C_n) \leq \mu^*(E) + \epsilon
$$

$\mathcal{A}\_0$가 대수이므로, $A \cap C\_n, A^c \cap C\_n \in \mathcal{A}\_0$이다. 따라서,

$$
\begin{aligned}
\mu^*(E \cap A) + \mu^*(E \cap A^c) &\leq \sum^\infty_{n = 1} \mu^*(A \cap C_n) + \sum^\infty_{n = 1} \mu^*(A^c \cap C_n) \\
&= \sum^\infty_{n = 1} \rho(A \cap C_n) + \sum^\infty_{n = 1} \rho(A^c \cap C_n) \\
&= \sum^\infty_{n = 1} \rho(C_n) \leq \mu^*(E) + \epsilon
\end{aligned}
$$

(엄밀히 따지자면 $\sum^n\_{k=1}$을 고려한 다음에 $n \to \infty$ 극한을 취해야 한다) 따라서 $\mu^\ast(E \cap A) + \mu^\ast(E \cap A^c) \leq \mu^\ast(E)$이며, $\mathcal{A}\_0$는 가측이다. 카라테오도리 제한 정리에 의해 가측 집합은 $\sigma$-대수를 이루므로, $\sigma(\mathcal{A}\_0)$ 또한 가측이다. □

**3. $\rho$가 $\sigma$-유한이라면, $\rho$의 정의역을 $\sigma(\mathcal{A}\_0)$로 확장하는 측도는 $\mu^\ast\|\_{\sigma(\mathcal{A}\_0)}$가 유일하다.**

먼저 $\rho < \infty$를 가정하자. $\sigma(\mathcal{A}\_0)$ 위에서 정의된 측도 $\nu$가 $\mathcal{A}\_0$에서 $\rho$와 일치한다고 하자. 또한 $\mu = \mu^\ast\|\_{\sigma(\mathcal{A}\_0)}$라고 하자. $\nu = \mu$임을 보인다.

$E \in \sigma(\mathcal{A}\_0)$라고 하자. 어떤 $E$의 덮개 $\lbrace  A\_n \rbrace  \subset \mathcal{A}\_0$가 존재하여,

$$
\sum \rho(A_n) \leq \mu(E) + \epsilon
$$

이다. $\nu$가 $\mathcal{A}\_0$에서 $\rho$와 일치하므로, $\sum \rho(A\_n) = \sum \nu(A\_n) \geq \nu(E)$이다. 따라서 $\nu \leq \mu$이다.

이제 $B\_n = \bigcup^n\_{k=1}A\_k$로 정의하고, $A = \bigcup^\infty\_{n = 1} A\_n = \lim\_{n \to \infty} B\_n$이라고 하자. $\mu(B) = \sum \rho(A\_n) \leq \mu(E) + \epsilon$이므로 $\mu(B \setminus E) \leq \epsilon$이다. $\nu$가 측도이므로,

$$
\mu(A) = \lim \rho(B_n) = \lim \nu(B_n) = \nu(A)
$$

따라서,

$$
\begin{aligned}
\mu(E) \leq \mu(B) &= \mu(B \setminus E) + \mu(E) \\
&\leq \epsilon + \nu(E)
\end{aligned}
$$

즉 $\mu \leq \nu$이다. 따라서 $\mu = \nu$이다.

이제 $\rho$가 $\sigma$-유한하다고 가정하자. 어떤 집합족 $\lbrace  C\_n \rbrace $이 존재하여 $C\_n \uparrow X$이고, $\rho(C\_n) < \infty$이다. 앞선 논의에 의해 $C\_n$에서 $\mu$와 $\nu$는 일치한다. 따라서,

$$
\mu(A) = \lim \mu(A \cap C_i) = \lim \nu (A \cap C_i) = \nu(A)
$$

이므로 $\mu$와 $\nu$는 전체 공간에서 일치한다. ■

다음 글에서는 카라테오도리 정리를 이용하여 르베그 측도를 구성한 뒤, 모든 보렐 가측 집합은 르베그 가측 집합이지만 그 역은 성립하지 않음을 보인다.
