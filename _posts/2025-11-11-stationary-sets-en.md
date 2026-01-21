---
layout: post
title: "Club Sets and Stationary Sets"
date: 2025-11-11
tags: ["Mathematics", "Set Theory"]
related:
lang: en
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

## Club Sets

> **Definition.** $C \subseteq \omega\_1$ is a **club set** if $C$ is closed and unbounded. That is,
>
> - For any sequence of ordinals $(\alpha\_n)\_{n \in \omega} \subseteq C$, if $\alpha\_n \to \alpha$, then $\alpha \in C$.
> - For any $\gamma < \kappa$, there exists $\alpha \in C$ such that $\alpha > \gamma$.

The name is indeed quite straightforward.

> **Theorem.** If $C\_1, C\_2 \subseteq \omega\_1$ are two club sets, then $C = C\_1 \cap C\_2$ is also a club set.

**Proof.** It is easy to show that $C$ is closed. To prove that $C$ is unbounded, let us take an arbitrary $\gamma \in \omega\_1$. Since $C\_1$ is unbounded, there exists the smallest $\alpha\_0 \in C\_1$ such that $\gamma < \alpha\_0$. Similarly, since $C\_2$ is unbounded, there exists the smallest $\beta\_0 \in C\_2$ such that $\alpha\_0 < \beta\_0$. Again, since $C\_1$ is unbounded, there exists $\alpha\_1 \in C\_1$ such that $\beta\_0 < \alpha\_1$. Repeating this process, we obtain sequences of ordinals $\lbrace \alpha\_n \rbrace$ and $\lbrace \beta\_n \rbrace$. These sequences converge to the same ordinal $\delta$, so $\delta \in C$ and $\delta > \gamma$. (Note: "the smallest" is used to avoid unnecessary reliance on the axiom of choice.) ■

By slightly modifying the above proof, we can derive the following theorem.

> **Theorem.** If $\lbrace C\_n \rbrace \_{n < \omega}$ is a countable collection of club sets, then $C = \bigcap C\_n$ is also a club set.

**Proof.** Exercise (Hint: Use a triangle argument). ■

Thus, given a countable collection of club sets, we can obtain a new club set by taking their intersection. On the other hand, if we are given an uncountable collection of club sets, the following result can be used.

> **Theorem.** Let $\lbrace C\_\xi \rbrace \_{\xi < \omega\_1}$ be a collection of club sets. The **diagonal intersection** of $\lbrace C\_\xi \rbrace$ is defined as follows:
>
> $$
> \Delta_{\xi < \omega_1} C_\xi = \{ \alpha \in \omega_1 : \forall \xi < \alpha \;\; \alpha \in C_\xi \}
> $$
>
> $D$ is a club set.

**Proof.** First, let us show that $D$ is closed. Suppose $(\alpha\_n)\_{n \in \omega} \subseteq D$ and $\alpha\_n \to \alpha$. For any $\xi < \alpha$, there exists $n \in \omega$ such that $\xi < \alpha\_n$. By the definition of the diagonal intersection, $C\_\xi$ contains $\lbrace \alpha\_m : m \geq n \rbrace$. Hence, $\sup \lbrace \alpha\_m : m \geq n \rbrace = \alpha \in C\_\xi$, so $\alpha \in D$.

Next, let us show that $D$ is unbounded. For any $\gamma < \omega\_1$, let $D\_0 = \bigcap\_{\xi < \gamma} C\_\xi$. Since $D\_0$ is a club set, it is unbounded. Thus, there exists the smallest $\alpha\_0 \in D\_0$ such that $\alpha\_0 > \gamma$. Similarly, let $D\_1 = \bigcap\_{\xi < \alpha\_0} C\_\xi$. Since $D\_1$ is a club set, there exists the smallest $\alpha\_1 \in D\_1$ such that $\alpha\_1 > \alpha\_0$. Repeating this process inductively, we obtain a sequence $(\alpha\_n)$ whose limit is $\alpha$. For any $\xi < \alpha$, there exists $n$ such that $\xi < \alpha\_n$, and for all $m \geq n$, $\alpha\_m \in C\_\xi$. Hence, $\alpha \in C\_\xi$ and $\alpha \in D$. ■

Verify that $\Delta C\_\xi \supseteq \bigcap C\_\xi$.

The definitions and theorems discussed so far can be generalised as follows. Let $\kappa$ be an uncountable cardinal with $\operatorname{cf}\kappa > \omega$.

> **Definition.** $C \subseteq \kappa$ is a **club set** if $C$ is closed and unbounded. That is,
>
> - For any $\alpha < \kappa$, if $\sup (C \cap \alpha) = \alpha$ (i.e., $C$ is unbounded at $\alpha$), then $\alpha \in C$.
> - For any $\gamma < \kappa$, there exists $\alpha \in C$ such that $\alpha > \gamma$.
>
> **Theorem.** If $\lambda < \operatorname{cf}\kappa$ and $\lbrace C\_\xi \rbrace \_{\xi < \lambda}$ is a collection of club sets, then $C = \bigcap C\_\xi$ is also a club set.
>
> **Theorem.** If $\kappa$ is regular, then the diagonal intersection of a collection $\lbrace C\_\xi \rbrace \_{\xi < \kappa}$ of club sets is also a club set.

**Proof.** The proof is almost identical to the case $\kappa = \omega\_1$. ■

## Stationary Sets

By closure under finite intersections, the collection of club sets generates a filter. A set that does not belong to the dual ideal of this filter is called a **stationary set**. In other words:

> **Definition.** Let $S \subseteq \omega\_1$. If $C \cap S \neq \varnothing$ for every club set $C \subseteq \omega\_1$, then $S$ is a stationary set.

If there exists a club set $C$ such that $C \cap S = \varnothing$, then $S^c \subseteq C$, so $C$ belongs to the dual ideal. Thus, the two definitions are equivalent.

Stationary sets capture "significantly large" subsets of $\omega\_1$. This can be better understood through the following (informal) analogy: if $\omega\_1$ has measure 1, then club sets correspond to sets with $\mu(C) = 1$, and stationary sets correspond to sets with $\mu(S) > 0$.

The following facts are easily proven (note how 1 and 3 naturally align with the measure analogy):

> **Theorem.** The following hold:
>
> 1. Every club set is a stationary set.
> 2. Every stationary set is unbounded.
> 3. If $\bigcup\_{n < \omega} A\_n$ is a stationary set, then there exists some $m \in \omega$ such that $A\_m$ is a stationary set.

The name "stationary" for stationary sets arises from the following theorem.

> **Theorem.** Let $S \subseteq \omega\_1$. A function $f: S \to \omega\_1$ is **regressive** if $f(\alpha) < \alpha$ for all $\alpha \in S$. The following are equivalent:
>
> 1. $S$ is a stationary set.
> 2. For any regressive function $f: S \to \omega\_1$, $f$ is constant on some unbounded set $T \subseteq S$.
> 3. For any regressive function $f: S \to \omega\_1$, $f$ is constant on some stationary set $T \subseteq S$.

**Proof.** 3 ⇒ 2 is trivial, so it suffices to prove 1 ⇒ 3 and 2 ⇒ 1.

#### 1 ⇒ 3

We prove the contrapositive. Suppose there exists a regressive function $f: S \to \omega\_1$ such that $f$ is not constant on any stationary subset of $S$. That is, for every $\xi \in \omega\_1$, $A\_\xi = f^{-1}(\lbrace \xi \rbrace)$ is not stationary. Hence, there exists a club set $C\_\xi$ such that $A\_\xi \cap C\_\xi = \varnothing$.

Let $D = \Delta\_{\xi < \omega\_1} C\_\xi$. Since $D$ is a club set, if $S$ is stationary, then $D \cap S \neq \varnothing$. Let $\alpha \in D \cap S$. Since $\alpha \in D$, for any $\xi < \alpha$, $\alpha \in C\_\xi$. Thus, $\alpha \notin A\_\xi$, so $f(\alpha) \neq \xi$. However, since $\alpha \in S$, $f(\alpha) < \alpha$. This is a contradiction, so $S$ is not stationary. □

#### 2 ⇒ 1

We again prove the contrapositive. Suppose $S$ is not stationary. Then there exists a club set $C$ such that $S \cap C = \varnothing$. Define the following function:

$$
f(\alpha) = \sup (C \cap \alpha)
$$

For any $\alpha \in S$, $f(\alpha) \leq \alpha$. If $f(\alpha) = \alpha$, then $C$ contains a sequence of ordinals converging to $\alpha$. Since $C$ is closed, $\alpha \in C$. This contradicts $S \cap C = \varnothing$. Thus, $f(\alpha) < \alpha$, and $f$ is regressive.

If $f$ were constant on some unbounded set $T$, then for some $\gamma < \omega\_1$, there would exist an unbounded sequence $(\alpha\_n)$ such that $\sup (C \cap \alpha\_n) = \gamma$. Since $C$ is unbounded, this implies $\sup \alpha\_n = \gamma$. However, since $(\alpha\_n)$ is unbounded, $\sup \alpha\_n = \omega\_1$. This is a contradiction. Thus, $f$ is a regressive function that is not constant on any unbounded set. ■

The above theorem can be generalised as follows:

> **Fodor's Lemma.** Let $\kappa$ be an uncountable regular cardinal. For any $S \subseteq \kappa$, the following are equivalent:
>
> 1. $S$ is a stationary set.
> 2. For any regressive function $f: S \to \omega\_1$, $f$ is constant on some unbounded set $T \subseteq S$.
> 3. For any regressive function $f: S \to \omega\_1$, $f$ is constant on some stationary set $T \subseteq S$.

## Applications of Stationary Sets

As an application of stationary sets, consider the following combinatorial theorem:

> **Δ-System Lemma.** Let $\lbrace A\_\xi\rbrace \_{\xi < \omega\_1}$ be a collection of finite subsets of $\omega\_1$. There exist an unbounded set $I \subseteq \omega\_1$ and a finite set $A$ such that for any $i, j \in I$ with $i \neq j$, $A\_i \cap A\_j = A$.

**Proof.** By the pigeonhole principle, we may assume without loss of generality that $\|A\_\xi \| = n$ for all $\xi < \omega\_1$. Define:

$$
C = \{ \alpha < \omega_1 : \forall \xi < \alpha \;\; \operatorname{max}C_\xi < \alpha \}
$$

$C$ is a club set. For $0 \leq k \leq n$, define:

$$
T_k = \{ \alpha \in C : |A_\alpha \cap \alpha | = k \}
$$

Since $\bigcup\_{0 \leq k \leq n} T\_k = C$, there exists some $m$ such that $T\_m$ is stationary. For $0 \leq l < m$, define:

$$
f_l(\alpha) : T_m \to \omega_1; \quad \alpha \mapsto \text{$l$th element of $A_\alpha$}
$$

Since $\|A\_\alpha \cap \alpha\| > l$, $f\_l(\alpha) < \alpha$. Thus, $f\_l$ is regressive. Now, repeat the following steps:

- There exists a stationary set $S\_0 \subseteq T\_m$ such that $f\_0$ is constant on $S\_0$.
- There exists a stationary set $S\_1 \subseteq S\_0$ such that $f\_1 \|\_{S\_0}$ is constant on $S\_1$.
- There exists a stationary set $S\_2 \subseteq S\_1$ such that $f\_2 \|\_{S\_1}$ is constant on $S\_2$.
- ...
- There exists a stationary set $S\_{m-1} \subseteq S\_{m-2}$ such that $f\_{m-1} \|\_{S\_{m-2}}$ is constant on $S\_{m-1}$.

For each $0 \leq l < m$, $f\_l$ is constant on $S\_{m-1}$. It is now easy to verify that $S\_{m-1} = I$ is the desired set. ■
