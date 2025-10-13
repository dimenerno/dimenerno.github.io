---
layout: post
title: "Construction of Measures via Carathéodory's Theorem"
date: 2025-02-25
lang: en
tags: [Mathematics, Measure Theory]
related:
  - "Definitions of Algebra and Measure"
---

I prefer to approach Carathéodory's theorem by dividing it into three subtheorems. They are as follows:

1. **Carathéodory Construction Theorem:** Any collection of sets and a positive function define an outer measure.
2. **Carathéodory Restriction Theorem:** Restricting the domain of an outer measure to measurable sets yields a measure.
3. **Carathéodory Extension Theorem:** There exists a unique extension of premeasure $\mu\_0$ on an algebra $\mathcal{A}\_0$ to a measure $\mu$ on the $\sigma$-algebra $\sigma(\mathcal{A}\_0)$. Furthermore, $\mu$ is the measure obtained by applying the construction theorem with the collection of sets as $\mathcal{A}\_0$ and the positive function as $\mu\_0$, and then applying the restriction theorem.

Schematically, this can be understood as follows:

|          | (1)                      | (2)                            | (3)                        |
| -------- | ------------------------ | ------------------------------ | -------------------------- |
| Domain   | Algebra $\mathcal{A}\_0$ | $\sigma$-algebra $\mathcal{A}$ | Power set $\mathcal{P}(X)$ |
| Function | Premeasure $\mu\_0$      | Measure $\mu$                  | Outer measure $\mu^\ast$   |

The construction theorem goes in the direction (1) → (3), the restriction theorem goes (3) → (2), and the extension theorem goes (1) → (2). Let us examine each one by one.

> **Definition.** An **outer measure** $\mu^\ast: \mathcal{P}(X) \to [0, \infty]$ on $X$ is a function satisfying the following:
>
> 1. $\mu^\ast(\varnothing) = 0$
> 2. $A \subset B \implies \mu^\ast(A) \leq \mu^\ast(B)$
> 3. $\mu^\ast\left( \bigcup\_{n \in \mathbb{N}} A\_n  \right) \leq \sum\_{n \in \mathbb{N}} \mu^\ast(A\_n)$

> **Carathéodory Construction Theorem.** Given any collection $\mathcal{S}$ of subsets of $X$ and any function $l: \mathcal{S} \to [0, \infty]$ satisfying $l(\varnothing) = 0$, the function $\mu^\ast$ defined as follows is an outer measure:
>
> $$
> \mu^*(E) = \inf \left\{ \sum_{n \in \mathbb{N}} l(A_n) : \{ A_n \} \subset \mathcal{S} \text{ covers }E  \right\}
> $$

That is, $\mu^\ast$ is a function that defines something akin to a 'measure' of $E$ as an infimum over covers, and is conceptually similar to the upper sum<sub>upper sum</sub> in Riemann integration.

**Proof.** Properties 1 and 2 are trivial. We prove property 3.

Let $A = \bigcup A\_n$ and suppose an arbitrary $\epsilon > 0$ is given. By the definition of $\mu^\ast$, for each $n$, there exists a cover $\mathcal{C}\_n = \lbrace  A\_{nm} \rbrace\_{m \in \mathbb{N}} \subset \mathcal{S}$ of $A\_n$ satisfying:

$$
\sum l(A_{nm}) \leq \mu^*(A_n) + \epsilon/2^n
$$

Therefore,

$$
\sum_{n, m \in \mathbb{N}} l(A_{nm}) \leq \sum \mu^*(A_n) + \epsilon.
$$

Since $\bigcup \mathcal{C}\_n$ covers $A$, by the definition of $\mu^\ast$, we have $\mu^\ast(A) \leq \sum\_{n, m \in \mathbb{N}} l(A\_{nm})$. ■

> **Definition.** Let $\mu^\ast$ be an outer measure. A set $A$ is said to be **measurable** with respect to $\mu^\ast$ if it satisfies the following for any $E$:
>
> $$\mu^*(E) = \mu^*(E \cap A) + \mu^*(E \cap A^c)$$

> **Definition.** Let $\mu^\ast$ be an outer measure. A set $N$ with $\mu^\ast(N) = 0$ is called a **null set**.

That is, a measurable set is one that 'cleanly' partitions any set with respect to $\mu^\ast$. Therefore, we can expect that $\mu^\ast$ will behave like an ordinary measure on the collection consisting only of measurable sets. The following restriction theorem validates this expectation.

> **Carathéodory Restriction Theorem.** Let $\mu^\ast$ be an outer measure. Let $\mathcal{A}$ be the collection of sets that are measurable with respect to $\mu^\ast$. Then the following hold:
>
> 1. $\mathcal{A}$ is a $\sigma$-algebra.
> 2. $\mu^\ast \|\_\mathcal{A}$ is a measure.
> 3. $\mathcal{A}$ contains all null sets of $\mu^\ast$.

**Proof.**

**1. $\mathcal{A}$ is an algebra.**

Closure under complements is trivial. We show closure under finite intersections.

Suppose $A, B$ are measurable. To show that $A \cap B$ is measurable, it suffices to prove:

$$
\mu^*(E \cap (A \cap B)) + \mu^*(E \cap (A \cap B)^c) \leq \mu^*(E) \quad \cdots \quad (*)
$$

Since $A, B$ are measurable, the following holds:

$$
\begin{aligned}
\mu^*(E) &= \mu^*(E \cap A) + \mu^*(E \cap A^c) \\
&= \mu^*(E \cap A \cap B) + \mu^*(E \cap A \cap B^c) \\ &+ \mu^*(E \cap A^c \cap B) + \mu^*(E \cap A^c \cap B^c)
\end{aligned}
$$

Therefore, $(\ast)$ is equivalent to:

$$
\begin{aligned}
\mu^*(E \cap (A^c \cup B^c)) &\leq \mu^*(E \cap A \cap B^c) \\ &+ \mu^*(E \cap A^c \cap B)  \quad \cdots \quad (**) \\ &+ \mu^*(E \cap A^c \cap B^c)
\end{aligned}
$$

From elementary set theory, we have:

$$
A^c \cup B^c = (A \cap B^c) \cup (A^c \cap B) \cup (A^c \cap B^c)
$$

Therefore, $(\ast\ast)$ holds. □

**2. $\mathcal{A}$ is a $\sigma$-algebra.**

It suffices to show that for $\lbrace  A\_n \rbrace  \subset \mathcal{A}$ with $A\_n \uparrow A$, we have $A \in \mathcal{A}$. (Why?)

By the definition of outer measure, $\mu^\ast(E \cap A\_n) \leq \mu^\ast(E \cap A)$. Let $C\_1 = A\_1, C\_n = A\_n \setminus A\_{n - 1}$. Then $\bigsqcup C\_n = A$. Moreover,

$$
\begin{aligned}
\mu^*(E \cap A_n) &= \mu^*(E \cap A_n \cap C_n) + \mu^*(E \cap A_n \cap C_n^c) \\
&= \mu^*(E \cap C_n) + \mu^*(E \cap A_{n - 1}) \\
&= \cdots \\
&= \sum^n_{k = 1} \mu^*(E \cap C_k)
\end{aligned}
$$

Therefore, $\sum^\infty \mu^\ast(E \cap C\_n) \leq \mu^\ast(E \cap A)$. Since $\lbrace  E \cap C\_n \rbrace $ covers $E \cap A$, we have $\sum^\infty \mu^\ast(E \cap C\_n) \geq \mu^\ast(E \cap A)$. Therefore, $\sum^\infty \mu^\ast(E \cap C\_n) = \mu^\ast(E \cap A)$.

Thus, for any $\epsilon > 0$, there exists a sufficiently large $N$ such that $\mu^\ast(E \cap A) - \epsilon \leq \mu^\ast(E \cap A\_n)$. Therefore,

$$
\begin{aligned}
\mu^*(E \cap A_n^c) &= \mu^*(E) - \mu^*(E \cap A_n) \\
&\leq \mu^*(E) - \mu^*(E \cap A) + \epsilon
\end{aligned}
$$

whence we obtain:

$$
\mu^*(E) \leq \mu^*(E \cap A_n) + \mu^*(E \cap A_n^c) \leq \mu^*(E) + \epsilon
$$

Letting $n \to \infty$, we get $\mu^\ast(E \cap A) + \mu^\ast(E \cap A^c) = \mu^\ast(E)$. □

**3. $\mu^\ast\|\_\mathcal{A}$ is a measure, 4. $\mathcal{A}$ contains all null sets.**

Left as an exercise to the readers. (Not difficult) ■

> **Definition.** Let $\mathcal{A}\_0$ be an algebra. A function $\rho: \mathcal{A}\_0 \to [0, \infty]$ is called a **premeasure** if it satisfies the following:
>
> 1. $\rho(\varnothing) = 0$
> 2. For any pairwise disjoint countable collection $\lbrace  A\_n \rbrace $, if $\bigcup A\_n \in \mathcal{A}\_0$, then $\rho\left( \bigcup A\_n \right) = \sum \rho(A\_n)$

> **Carathéodory Extension Theorem.** For a premeasure $\rho$ on an algebra $\mathcal{A}\_0$, define:
>
> $$
> \mu^*(E) = \inf \left\{ \sum_{n \in \mathbb{N}} \mu_0(A_n) : \{ A_n \} \subset \mathcal{A}_0 \text{ covers }E \right\}
> $$
>
> Then the following hold:
>
> 1. If $A \in \mathcal{A}\_0$, then $\mu^\ast(A) = \rho(A)$.
> 2. $\sigma(\mathcal{A}\_0)$ is measurable with respect to $\mu^\ast$.
> 3. If $\rho$ is $\sigma$-finite, then $\mu^\ast\|\_{\sigma(\mathcal{A}\_0)}$ is the unique measure that extends $\rho$ to $\sigma(\mathcal{A}\_0)$.

**Proof.**

**1. If $A \in \mathcal{A}\_0$, then $\mu^\ast(A) = \rho(A)$.**

Since $A$ is a cover of $A$, we have $\mu^\ast(A) \leq \rho(A)$. If $\mu^\ast(A) < \rho(A)$, then there exists some cover $\lbrace  A\_n \rbrace $ of $A$ such that $\sum \rho(A\_n) < \rho(A)$. However, since $\rho$ is a premeasure, this is a contradiction. □

**2. $\sigma(\mathcal{A}\_0)$ is measurable with respect to $\mu^\ast$.**

First, we show that $\mathcal{A}\_0$ is measurable. For any $A \in \mathcal{A}\_0$, it suffices to show $\mu^\ast(E \cap A) + \mu^\ast(E \cap A^c) \leq \mu^\ast(E)$. By the definition of $\mu^\ast$, for any $\epsilon > 0$, there exists some cover $\mathcal{C}$ of $E$ such that:

$$
\sum^\infty_{n = 1} \rho(C_n) \leq \mu^*(E) + \epsilon
$$

Since $\mathcal{A}\_0$ is an algebra, $A \cap C\_n, A^c \cap C\_n \in \mathcal{A}\_0$. Therefore,

$$
\begin{aligned}
\mu^*(E \cap A) + \mu^*(E \cap A^c) &\leq \sum^\infty_{n = 1} \mu^*(A \cap C_n) + \sum^\infty_{n = 1} \mu^*(A^c \cap C_n) \\
&= \sum^\infty_{n = 1} \rho(A \cap C_n) + \sum^\infty_{n = 1} \rho(A^c \cap C_n) \\
&= \sum^\infty_{n = 1} \rho(C_n) \leq \mu^*(E) + \epsilon
\end{aligned}
$$

(Strictly speaking, one should consider $\sum^n\_{k=1}$ and then take the limit $n \to \infty$) Therefore, $\mu^\ast(E \cap A) + \mu^\ast(E \cap A^c) \leq \mu^\ast(E)$, and $\mathcal{A}\_0$ is measurable. By the Carathéodory restriction theorem, measurable sets form a $\sigma$-algebra, so $\sigma(\mathcal{A}\_0)$ is also measurable. □

**3. If $\rho$ is $\sigma$-finite, then $\mu^\ast\|\_{\sigma(\mathcal{A}\_0)}$ is the unique measure that extends $\rho$ to $\sigma(\mathcal{A}\_0)$.**

First, assume $\rho < \infty$. Suppose a measure $\nu$ defined on $\sigma(\mathcal{A}\_0)$ agrees with $\rho$ on $\mathcal{A}\_0$. Let $\mu = \mu^\ast\|\_{\sigma(\mathcal{A}\_0)}$. We show $\nu = \mu$.

Let $E \in \sigma(\mathcal{A}\_0)$. There exists some cover $\lbrace  A\_n \rbrace  \subset \mathcal{A}\_0$ of $E$ such that:

$$
\sum \rho(A_n) \leq \mu(E) + \epsilon
$$

Since $\nu$ agrees with $\rho$ on $\mathcal{A}\_0$, we have $\sum \rho(A\_n) = \sum \nu(A\_n) \geq \nu(E)$. Therefore, $\nu \leq \mu$.

Now define $B\_n = \bigcup^n\_{k=1}A\_k$ and let $A = \bigcup^\infty\_{n = 1} A\_n = \lim\_{n \to \infty} B\_n$. Since $\mu(B) = \sum \rho(A\_n) \leq \mu(E) + \epsilon$, we have $\mu(B \setminus E) \leq \epsilon$. Since $\nu$ is a measure,

$$
\mu(A) = \lim \rho(B_n) = \lim \nu(B_n) = \nu(A)
$$

Therefore,

$$
\begin{aligned}
\mu(E) \leq \mu(B) &= \mu(B \setminus E) + \mu(E) \\
&\leq \epsilon + \nu(E)
\end{aligned}
$$

That is, $\mu \leq \nu$. Therefore, $\mu = \nu$.

Now assume $\rho$ is $\sigma$-finite. There exists a collection $\lbrace  C\_n \rbrace $ such that $C\_n \uparrow X$ and $\rho(C\_n) < \infty$. By the preceding argument, $\mu$ and $\nu$ agree on $C\_n$. Therefore,

$$
\mu(A) = \lim \mu(A \cap C_i) = \lim \nu (A \cap C_i) = \nu(A)
$$

so $\mu$ and $\nu$ agree on the entire space. ■

In the next article, we shall construct Lebesgue measure using Carathéodory's theorem, and then show that while every Borel measurable set is Lebesgue measurable, the converse does not hold.
