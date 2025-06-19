---
layout: post
title: "Trichotomy and Completeness of Ordinals"
date: 2024-11-21
tags: [Mathematics, Set Theory]
lang: en
---

## 1. Basic Concepts

> **Definition.** A set $(W, <)$ is called a **well-ordered set** if it satisfies the following conditions:
>
> 1. $(W, <)$ is a total order.
> 2. Every non-empty subset of $W$ has a least element.

> **Definition.** If $(W, <)$ is a well-ordered set, a subset $S$ of $W$ such that $x < a \rightarrow x \in S$ for some $a \in S$ is called an **initial segment.**

> **Theorem.** If $S$ is an initial segment of a well-ordered set $(W, <)$, then for some $a \in W$, the following holds:
>
> $$
> S = W[a] := \{ x \in W : x < a \}
> $$

**Proof.** Let $a$ be the least element of $W \setminus S$.

## 2. Trichotomy of Order

> **Theorem.**
>
> 1. A well-ordered set cannot be isomorphic to its initial segment.
> 2. The only order-preserving automorphism of a well-ordered set is the identity map.
> 3. The isomorphism between two well-ordered sets is unique.

**Proof.** We first prove the following lemma:

> **Lemma.** If $f: (W, <) \to (W, <)$ is order-preserving, then for all $x \in W$, $x \leq f(x)$.

_Proof of the Lemma._ Assume for contradiction that $S = \lbrace x \in W : x > f(x) \rbrace$ is nonempty. Since $W$ is a well-ordered set, there exists a least element $c = \min S$. Since $c \in S$, we have $c > f(c)$, and since $f$ is order-preserving, it follows that $f(c) > f(f(c))$. On the other hand, since $c = \min S$, we have $f(c) \notin S$, and thus $f(f(c)) \geq f(c)$, leading to a contradiction. □

**Proof of (1).**

Assume $f: (W, <) \to (W[a], <)$ is an isomorphism. The inclusion map $j: W[a] \to W$ implies that $jf: (W, <) \to (W, <)$ is order-preserving. Therefore, $jf(a) \geq a$. However, since $a \notin \mathrm{im}f$, this leads to a contradiction. □

**Proof of (2).**

Assume $f: (W, <) \to (W, <)$ is an isomorphism. Since $f^{-1}$ is also an isomorphism, for all $x \in W$, we have $x \leq f(x)$ and $f(x) \leq f^{-1}(f(x)) = x$. Thus, $x = f(x)$. □

**Proof of (3).**

Assume $f, g: (W_1, <_1) \to (W_2, <_2)$ are isomorphisms. The composition $g^{-1}f: (W_1, <_1) \to (W_1, <_1)$ is an automorphism, and by (2), it must be the identity map. Therefore, $f = g$. ■

> **Trichotomy of Order.** For well-ordered sets $(W_1, <_1)$ and $(W_2, <_2)$, exactly one of the following holds:
>
> 1. $(W_1, <_1) \sim (W_2, <_2)$
> 2. For some $a$, $(W_1[a], <_1) \sim (W_2, <_2)$
> 3. For some $b$, $(W_1, <_1) \sim (W_2[b], <_2)$
>
> In each case, the isomorphism is unique, and in cases 2 and 3, $a$ and $b$ are unique.

**Proof.**

The preceding theorems guarantee that 1, 2, and 3 are mutually exclusive and establish the claim of uniqueness. Therefore, it suffices to show that any pair of well-ordered sets $(W_1, <_1)$ and $(W_2, <_2)$ falls into one of the three cases.

We define a partial function $f: W_1 \to W_2$ as follows:

$$
f := \{ (x, y) \in (W_1, W_2) : (W_1[x], <_1) \sim (W_2[y], <_2) \}
$$

It can be easily verified that $f$ is injective and order-preserving. We now consider two cases.

_Case 1._ $\mathrm{dom} f = W_1$

This corresponds to case 3 of the theorem, concluding the proof.

_Case 2._ $\mathrm{dom} f \subsetneq W_1$

First, we show that for some $a \in W$, $\mathrm{dom}f = W_1[a]$. If $x \in \mathrm{dom}f$, then $W_1[x] \sim W_2[f(x)]$. Let $\phi$ be the isomorphism of that isomorphism. For $x' < x$, we have $W_1[x'] = W_2[\phi(x')]$, thus $x' \in \mathrm{dom}f$. Therefore, $\mathrm{dom} f$ is an initial segment.

Next, we show that $\mathrm{im} f = W_2$. Assume $\mathrm{dom}f = W_1[a]$. By a similar argument as above, we can show that $\mathrm{im}f$ is also an initial segment of $W_2$. If $\mathrm{im}f = W_2[b]$, then $(a, b) \in f$, which implies $a \in \mathrm{dom}f$, leading to a contradiction. ■

## 3. Completeness of Ordinals

> **Completeness of Ordinals.** Every well-ordered set is order-isomorphic to some ordinal.

**Proof.** Let $(W, <)$ be a well-ordered set. We define $A$ and $S$ as follows:

$$
\begin{gather}
A = \{ a \in W : W[a] \sim \alpha_a \text{ where } \alpha_a \in \mathrm{Ord} \}\\
S = \{ \alpha_a \in \mathrm{Ord} : a \in A \}
\end{gather}
$$

It can be easily shown that $S$ is an ordinal and $A$ is an initial segment. Let $S = \beta$ and $A = W[c]$. The function $f: A \to S; a \mapsto \alpha_a$ is an order isomorphism between $(A, <)$ and $(S, \in)$. Thus, $W[c] \simeq \beta$, which implies $c \in A$, leading to a contradiction. Therefore, $A = W \sim \beta$. ■

## 4. Axiom of Replacement

The existence of $S$ in the above proof cannot be guaranteed without the Axiom of Replacement. This is because, due to Burali-Forti's paradox, $\mathrm{Ord}$ is not a set, and thus the existence of $S$ cannot be guaranteed by the Axiom of Separation (see: [List of ZFC Axioms](https://dimenerno.github.io/2024/11/18/ZFC/en)).

Another example demonstrating the necessity of the Axiom of Replacement is that without it, we cannot guarantee the existence of $\omega + \omega$. For each $n \in \mathbb{N}$, the existence of $\omega + n$ can be shown using the Axiom of Pairing and the Axiom of Union, but the existence of $\omega + \omega := \bigcup_{n \in \mathbb{N}} (\omega + n)$ cannot be established. However, we cannot simply add an axiom allowing the union of arbitrary sets, as this would make "the set of all sets" a set, leading to Russell's paradox.

In both cases, what we need is an axiom stating that "given a well-defined one-to-one correspondence $R(x,y)$ and a set $X$, the collection $\lbrace y : R(x, y), x \in X \rbrace$ is a set." This axiom is the Axiom of Replacement. Using the Axiom of Replacement, we can show that given:

$$
\begin{gather}
\omega = \lbrace 0, 1, 2, ... \rbrace \\
R(x, y): y = \omega + x,
\end{gather}
$$

the image $\mathrm{im}R\|\_\omega = \lbrace \omega, \omega + 1, \omega + 2, ... \rbrace$ exists, and thus $\omega \cup \mathrm{im}R\|\_\omega = \omega + \omega$ exists.
