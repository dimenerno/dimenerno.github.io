---
layout: post
title: "Definitions of Algebra and Measure"
date: 2025-02-24
tags: [Mathematics, Measure Theory]
lang: en
related:
  - "Construction of Measures via Carathéodory's Theorem"
---

## 1. Vitali's Theorem

> **Definition.** A **measure** $\mu$ on a set $X$ satisfies the following conditions:
>
> 1. $\mu(\varnothing) = 0$
> 2. For any countable collection of pairwise disjoint sets $\lbrace A\_n \rbrace$, $\mu\left( \bigcup A\_n \right) = \sum \mu(A\_n)$

Unfortunately, when $X = \mathbb{R}$, the domain of measure cannot range over all subsets of the real numbers.

> **Vitali's Theorem.** There does not exist a measure $\mu$ on $\mathbb{R}$ that satisfies all of the following conditions:
>
> 1. It is not identically zero.
> 2. It is invariant under translation. That is, for any $r \in \mathbb{R}$, $\mu(A + r) = \mu(A)$.
> 3. $\operatorname{dom} \mu = \mathcal{P}(\mathbb{R})$

**Proof.** Suppose such a measure $\mu$ exists. Define the following equivalence relation on $\mathbb{R}$:

$$
x \sim y \iff x - y \in \mathbb{Q}
$$

By the axiom of choice, there exists a choice function $\iota$ for $[0, 1]/{\sim}$. Let $V = \operatorname{im} \iota$. We call $V$ a **Vitali set**. For example, $V = \lbrace 0.1, \pi - 3, \sqrt{2} - 1, \dots \rbrace$. We shall show that $\mu$ cannot be defined on $V$.

By the definition of $V$, for $q \in \mathbb{Q}$, $V$ and $V + q$ are disjoint. Moreover, $[0, 1] \subset \bigcup\_{q \in \mathbb{Q}} (V + q) \subset [-1, 3]$. Therefore,

$$
1 \leq \sum_{q \in \mathbb{Q}}\mu(V + q) \leq 4.
$$

However, since $\mu(V + q) = \mu(V)$, if $\mu(V) = 0$, then the left inequality fails, and if $\mu(V) > 0$, then the right inequality fails. This is a contradiction. ■

## 2. $\sigma$-algebra

Therefore, to construct a proper measure, it is necessary to appropriately restrict the domain of the measure. To this end, we introduce the concept of an algebra.

> **Definition.** An **algebra** $\mathcal{A}\_0$ on a set $X$ is a collection of sets satisfying the following conditions:
>
> 1. $\varnothing, X \in \mathcal{A}\_0$
> 2. $A \in \mathcal{A}\_0 \implies A^c \in \mathcal{A}\_0$
> 3. $A, B \in \mathcal{A}\_0 \implies A \cup B \in \mathcal{A}\_0$

_Remark._ By axiom 2 and De Morgan's laws, axiom 3 also implies that $A \cap B \in \mathcal{A}\_0$.

Strengthening the third condition of an algebra to countable unions yields the definition of a $\sigma$-algebra. That is,

> **Definition.** A **$\sigma$-algebra** $\mathcal{A}$ on a set $X$ is an algebra satisfying the following condition:
>
> 1. $\lbrace  A\_n \rbrace \_{n \in \mathbb{N}} \subset \mathcal{A}\_0 \implies \bigcup\_{n \in \mathbb{N}} A\_n \in \mathcal{A}$

> **Theorem.** If $\lbrace \mathcal{A}\_i \rbrace\_{i \in I}$ is a collection of $\sigma$-algebras on $X$, then $\bigcap\_{i \in I}\mathcal{A}\_i$ is also a $\sigma$-algebra on $X$.

**Proof.** This can be proved easily from the definition of a $\sigma$-algebra. However, to spice things up, we provide a slightly unconventional proof. By the **Łoś-Tarski theorem**, a first-order theory is preserved under intersections if and only if every sentence of the first-order theory is a $\Pi\_1$ sentence. Since all three axioms of a $\sigma$-algebra are $\Pi\_1$ sentences, $\sigma$-algebras are preserved under intersections. ■

> **Corollary.** Let $\mathcal{C}$ be a collection of subsets of $X$. There exists the smallest $\sigma$-algebra containing $\mathcal{C}$. Such $\sigma$-algebra is denoted $\sigma(\mathcal{C})$.

**Proof.** Let $\mathcal{S} = \lbrace \mathcal{A} : \mathcal{A} \text{ is a $\sigma$-algebra containing } \mathcal{C} \rbrace$. Since $\mathcal{P}(X) \in \mathcal{S}$, $\mathcal{S}$ is non-empty. Then $\sigma(\mathcal{C}) = \bigcap\_{\mathcal{A} \in \mathcal{S}} \mathcal{A}$.

As a representative example of a $\sigma$-algebra, let us examine the Borel $\sigma$-algebra.

> **Definition.** Let $\mathcal{G}$ be the collection of open sets in $\mathbb{R}$. We call $\sigma(\mathcal{G})$ the **Borel $\sigma$-algebra** and denote it by $\mathcal{B}$.

The Borel $\sigma$-algebra can also be understood through the **Borel hierarchy**. Let $\Sigma\_1$ be the collection of open sets and $\Pi\_1$ be the collection of closed sets. We define:

- $\Delta\_n = \Sigma\_n \cap \Pi\_n$
- $\Sigma\_{n + 1} = \lbrace S : \exists \lbrace P\_n \rbrace \_{n \in \mathbb{N}} \subset \Pi\_n \; S = \bigcup\_{n \in \mathbb{N}} P\_n \rbrace$
- $\Pi\_n = \lbrace P : \exists S \in \Sigma\_n \; P = S^c \rbrace$

That is, $\Sigma\_2 = F\_\sigma$ and $\Pi\_2 = G\_\delta$. Note that when we think of union as $\exists$ and intersection as $\forall$, the form of the definition is similar to the [arithmetic hierarchy](https://dimenerno.github.io/2025/02/07/arithmetic-hierarchy/).

> **Theorem.** $\mathcal{B} = \Sigma\_{\omega\_1} = \Pi\_{\omega\_1} = \Delta\_{\omega\_1}$

**Proof.** Omitted. However, this can be understood intuitively. Since $\mathcal{B}$ must be closed under countable intersections, countable unions, and complements, we have $\Sigma\_\alpha, \Pi\_\alpha, \Delta\_\alpha \subset \mathcal{B}$ for all countable ordinals $\alpha$. From this fact, we obtain the theorem by transfinite induction. ■

There is a known method for defining a measure from an algebra and a premeasure on some set. This method is called the **Carathéodory method**. Since premeasures are very easy to construct, using this method allows us to construct measures very easily. The Carathéodory method will be discussed in the [next post](http://dimenerno.github.io/2025/02/25/caratheodory/).
