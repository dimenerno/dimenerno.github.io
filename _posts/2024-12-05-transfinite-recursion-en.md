---
layout: post
title: "Transfinite Induction and Transfinite Recursion"
date: 2024-12-05
tags: [Mathematics, Set theory]
lang: en
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

### 1. Transfinite Induction

> **Theorem.** Let $P$ be a property defined on ordinals, and suppose that for any $\alpha \in \mathrm{Ord}$,
>
> $$
> [ \forall \beta < \alpha : P(\beta)] → P(\alpha)
> $$
>
> holds. Then $P$ is true for all ordinals.

*Remark.* Since $\mathrm{Ord}$, the domain of $P$, is a proper class rather than a set, we use the term "property" instead of "predicate".

**Proof.** We employ the fact that ordinals form a well-ordering and proceed by contradiction.

Suppose there exists $\lambda$ such that $\lnot P(\lambda)$. Then $\Omega = \lbrace  \alpha \in \lambda : \lnot P(\alpha) \rbrace$ is a non-empty well-ordered set, so it has a minimal element $\alpha\_0$. Since $\forall \beta < \alpha\_0 : P(\beta)$, by hypothesis we have $P(\alpha\_0)$, which is a contradiction. ■

**Application.** In the von Neumann hierarchy, $V\_\alpha$ is transitive. Therefore, instead of $V\_{\alpha + 1} = V\_\alpha \cup \mathcal{P}(V\_\alpha)$, we may define $V\_{\alpha + 1} = \mathcal{P}(V\_\alpha)$.

### 2. Transfinite Recursive Definition

*Motivation.* Consider recursive definitions on natural numbers. Given $n$ sets $x\_1, \dots , x\_n$ and a function $g$ that outputs a set, we would like to define $f: \mathbb{N} → V$ as follows:

$$
f(n) = g(f(0), \dots, f(n - 1))
$$

The problem is that $g$ can only take a fixed number of parameters. Therefore, we group the parameters of $g$ into an ordered pair:

$$
f(n) = g(\langle f(0), \dots, f(n - 1) \rangle)
$$

This ordered pair can be represented as $\lbrace  (0, f(0)), \dots, (n - 1, f(n - 1)) \rbrace = f \upharpoonright n$. That is,

$$
f(n) = g(f \upharpoonright n).
$$

Generalising this to ordinals, we obtain the following:

> **Theorem.** Let $G: V → V$ be a class function. There exists a class function $F: \mathrm{Ord} → V$ satisfying
>
> $$
> F(\alpha) = G(F \upharpoonright \alpha)
> $$

**Proof.** One applies transfinite induction extensively. (My apologies for the brevity.)