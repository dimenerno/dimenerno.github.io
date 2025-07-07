---
layout: post
title: "Transfinite Induction and Transfinite Recursion"
date: 2024-12-05
tags: [Mathematics, Set Theory]
lang: en
---

### 1. Transfinite Induction

> **Theorem.** Let $P$ be a property defined on ordinals, and suppose that for any $\alpha \in \mathrm{Ord}$,
>
> $$
> [ \forall \beta < \alpha : P(\beta)] → P(\alpha).
> $$
>
> Then $P$ is true for all ordinals.

_Remark._ Since $\mathrm{Ord}$, the domain of $P$, is a proper class rather than a set, we use the term "property" instead of "predicate".

**Proof.** Suppose there exists $\lambda$ such that $\lnot P(\lambda)$. Then $\Omega = \lbrace  \alpha \in \lambda : \lnot P(\alpha) \rbrace$ is a non-empty well-ordered set, so it has a minimal element $\alpha\_0$. Since $\forall \beta < \alpha\_0 : P(\beta)$, by hypothesis we have $P(\alpha\_0)$, which is a contradiction. ■

**Application.** Show that the von Neumann hierarchy may be defined as $V\_{\alpha + 1} = \mathcal{P}(V\_\alpha)$ instead of $V\_{\alpha + 1} = V\_\alpha \cup \mathcal{P}(V\_\alpha)$.

### 2. Transfinite Recursive Definition

_Motivation._ Consider recursive definitions on natural numbers. Given $n$ sets $x\_1, \dots , x\_n$ and a function $g$ that outputs a set, we would like to define $f: \mathbb{N} → V$ as follows:

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

**Proof.** Apply transfinite induction extensively. (Sorry for the brevity, lol.) It is worth remarking that the proof does not depend on the axiom of choice, for the well-orderedness of ordinals is provable from ZF. Note, however, that the proof that every well-ordered set is order isomorophic to an ordinal _does_ require AC.
