---
layout: post
title: "Lebesgue Measurable Sets and Borel Measurable Sets"
date: 2025-02-25
tags: [Mathematics, Measure Theory]
lang: en
related:
  - "Construction of Measures via Carathéodory's Theorem"
  - "Definitions of Algebra and Measure"
---

### 1. Lebesgue Measure

From [Carathéodory's theorem](https://dimenerno.github.io/2025/02/25/caratheodory/), we can define a measure $m$ on $\mathbb{R}$ as follows.

1. Show that $\mathcal{A}\_0 = \lbrace \cup^n\_{k=1} (a_k, b_k] : a_k, b_k \in \mathbb{R}^\infty \rbrace $ is an algebra.

2. For $A \in \mathcal{A}\_0$, show that the representation $A = \sqcup^n\_{k=1} (a\_k, b\_k]$ is unique.

3. Define $\rho: \mathcal{A}\_0 \to [0, \infty]$ as:

   $$
   \rho(\sqcup^n_{k=1} (a_k, b_k]) = \sum^n_{k=1}(b_k - a_k)
   $$

   Show that $\rho$ is a premeasure.

4. Apply Carathéodory's extension theorem to $\mathcal{A}\_0, \rho$ to obtain the outer measure $m^\ast$.

5. Restrict the domain of $m^\ast$ to $m^\ast$-measurable sets to obtain $m$.

Since algebras are only closed under finite unions, steps 1, 2, and 3 are almost trivial. For the proofs of steps 4 and 5, see the [related post](https://dimenerno.github.io/2025/02/25/caratheodory/).

> **Definition.** The aforementioned $m$ is called the **Lebesgue measure**. Moreover, sets belonging to the domain of $m$ are called **Lebesgue measurable**.

The following facts follow readily from Carathéodory's theorems.

> **Theorem.**
>
> 1. $m([a, b]) = m((a, b)) = m((a, b]) = m([a, b)) = b - a$
> 2. When $A \subset \mathbb{R}$ is countable, $m(A) = 0$

Since the measure obtained by Carathéodory's extension theorem is a complete measure, the following holds.

> **Theorem.** $m$ is a complete measure.

Furthermore, since $\sigma(\mathcal{A}\_0)$ is the Borel $\sigma$-algebra $\mathcal{B}$, it follows that:

> **Theorem.** Borel measurable sets are Lebesgue measurable.

### 2. Sets That Are Lebesgue Measurable but Not Borel Measurable

> **Definition.** Define the sequence of sets $\lbrace C\_n \rbrace$ as follows:
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
> The **Cantor set** $C$ is defined as $\cap^\infty\_{n = 0}C\_n$.
>
> <img src="/public/cantor.png" width="500px" style="margin: 0 auto;"/>

> **Theorem.**
>
> 1. The Cantor set is uncountable.
> 2. The Cantor set has Lebesgue measure 0.

**Proof.**

1. Elements belonging to the Cantor set are numbers whose ternary decimal expansion contains no digit 2 in any position. There are $2^\aleph\_0$ such numbers, hence uncountable.

2. Since $m(C\_n) = (2/3)^n$, we have $m(C) = \lim\_{n \to infty} (2/3)^n = 0$. ■

> **Definition.** Let $J\_n$ denote the sets removed at each stage in defining the Cantor set. That is,
>
> $$
> \begin{gather}
> J_1 = (1/3, 2/3) \\
> J_2 = (1/9, 2/9) \cup (7/9, 8/9) \\
> \vdots
> \end{gather}
> $$
>
> Define the sequence of functions as follows:
>
> $$
> \begin{gather}
> \operatorname{dom} f_1 = J_1,\; f_1(x) = \frac{1}{2} \\\\
> \operatorname{dom} f_2 = J_1 \cup J_2, \; f_2(x) = \begin{cases} 1/4 & x \in (1/9, 2/9) \\ 1/2 & x \in (1/3, 2/3) \\ 3/4 & x \in (7/9, 8/9) \end{cases} \\\\
> \vdots
> \end{gather}
> $$
>
> Define $f: I \to I$ as follows:
>
> $$f(x) = \inf \{ f_n(y) : y \geq x, y \in \mathrm{dom} f \}$$
>
> $f$ is called the **Cantor function**.
>
> <img src="/public/CantorEscalier.svg.png" width="300px" style="margin: 0 auto;"/>

> **Theorem.** The Cantor function is continuous.

**Proof.** Let $f$ be the Cantor function. Since $f$ is an increasing function, if $f$ has discontinuities, they would be jump discontinuities. Therefore, for some $\epsilon > 0$ and $y\_0 \in I$, the interval $(y\_0 - \epsilon, y\_0 + \epsilon)$ would lie outside $\operatorname{im} f$. However, among the elements of $(y\_0 - \epsilon, y\_0 + \epsilon)$, there exists a number whose binary decimal expansion has finitely many digits. Such a number belongs to $\operatorname{im}f$, which is a contradiction. ■

> **Theorem.** There exist sets that are Lebesgue measurable but not Borel measurable.

**Proof.**

_Lemma._ If $f: I \to I$ is an increasing function, then $f^{-1}$ maps Borel sets to Borel sets.

_Proof of lemma._ Let $\mathcal{A} = \lbrace  S \subset I : f^{-1}(S) \in \mathcal{B} \rbrace $. It is trivial that $\mathcal{G} \subset \mathcal{A}$, where $\mathcal{G}$ is the collection of open sets of $I$. Moreover, it is trivial from properties of inverse functions that $\mathcal{A}$ is a $\sigma$-algebra. Therefore, $\mathcal{A} \supseteq \sigma(\mathcal{G}) = \mathcal{B}$.

Let $f$ be the Cantor function and define $F$ as follows:

$$
F(x) =\inf \{y : f(y) \geq x \}
$$

$F$ is a strictly increasing function with $\operatorname{im} F = C$ (where $C$ is the Cantor set). Let $V$ be the [Vitali set](https://dimenerno.github.io/2025/02/24/algebra-measure/). Since $F[V]$ is contained in $C$, it is a null set and thus, is Lebesgue measurable by the completeness of Lebesgue measure. However, $F[V]$ is not Borel measurable. If it were Borel measurable, then since $F$ is strictly increasing (hence injective), $F^{-1}(F[V]) = V$ would have to be measurable. ■
