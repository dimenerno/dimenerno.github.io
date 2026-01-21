---
layout: post
title: "Regular Cardinals, Singular Cardinals, and Inaccessible Cardinals"
date: 2025-05-04
tags: ["Mathematics", "Set Theory"]
lang: en
related:
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

In this article, $\kappa$ denotes an infinite cardinal. Moreover, we adopt the approach of defining cardinals as initial ordinals (see method 3 in [this post](https://dimenerno.github.io/2025/04/20/cardinality/)). Accordingly, every cardinal is also an ordinal.

> **Definition.** Let $\theta$ be a limit ordinal less than $\kappa$. For each $\nu$, consider an increasing sequence of ordinals $\langle \alpha\_\nu : \nu < \theta \rangle$ where $\alpha\_\nu < \kappa$. If we always have $\lim\_{\nu \to \theta} \alpha\_\nu < \kappa$, then $\kappa$ is called a **regular cardinal**. A cardinal that is not regular is called a **singular cardinal**.

_Remark._ $\alpha\_\nu$ and $\theta$ are generally ordinals, not necessarily cardinals.

For example, $\aleph\_0$ is a regular cardinal. This is because the supremum of fewer than $\aleph\_0$ many—that is, finitely many—cardinals less than $\aleph\_0$—that is, natural numbers—does not reach $\aleph\_0$.

In contrast, $\aleph\_\omega$ is a singular cardinal. This is because in the following sequence of cardinals, each cardinal is less than $\aleph\_\omega$, and the length of the sequence is also $\aleph\_0 < \aleph\_\omega$, yet their supremum is $\aleph\_\omega$.

$$
\aleph_0 \quad \aleph_1 \quad \aleph_2 \quad \aleph_3 \quad \cdots
$$

> **Theorem. (Characterisation of Singular Cardinals)** $\kappa$ is a singular cardinal if and only if $\kappa$ is the sum of fewer than $\kappa$ many cardinals, each less than $\kappa$. That is, for $\|I\| < \kappa$ and $\kappa\_i < \kappa \;(\forall i \in I)$, we have
>
> $$\sum_{i \in I} \kappa_i = \kappa$$

_Remark._ $\kappa\_i$ denotes cardinals, not general ordinals. Moreover, $\sum$ denotes cardinal addition, not ordinal addition.

**Proof.**

($\Rightarrow$) If $\kappa$ is a singular cardinal, then there exists a sequence of ordinals $\langle \alpha\_\nu : \nu < \theta\rangle$ such that

$$
\lim_{\nu \to \theta} \alpha_\nu = \sup \alpha_\nu = \bigcup_{\nu < \theta}\alpha_\nu = \kappa
$$

In general, an ordinal $\alpha$ is the union of all ordinals $\beta < \alpha$ that are less than it. Therefore, the following holds:

$$
\kappa = \bigcup_{\nu < \theta}\alpha_\nu = \bigcup_{\nu < \theta}\left( \alpha_\nu - \bigcup_{\xi < \nu} \alpha_\xi \right)
$$

Let $A\_\nu = \alpha\_\nu - \bigcup\_{\xi < \nu} \alpha\_\xi$. while $A\_\nu$ is no longer an ordinal, this is not important. What matters is that $\lbrace  A\_\nu \rbrace $ are pairwise disjoint. Therefore, letting $\kappa\_\nu = \|A\_\nu\|$, by the definition of cardinal addition, we have

$$
\sum_{\nu < \theta} \kappa_\nu = \left| \bigcup_{\nu < \theta} A_\nu \right| = \kappa
$$

($\Leftarrow$) Let $\kappa = \sum\_{i \in I}\kappa\_i$. Setting $\|I\| = \lambda$, by the properties of cardinal addition, we have $\kappa = \lambda \cdot \sup \kappa\_i$. Since $\lambda < \kappa$, by the properties of cardinal multiplication, we have $\kappa = \sup \kappa\_i$. For each $i \in I$, we have $\kappa\_i < \kappa$, yet $\sup \kappa\_i = \kappa$. Therefore, by transfinite induction, we can construct an increasing sequence of cardinals

$$\langle \kappa_\nu : \kappa_\nu = \kappa_i \text{ for some } i \in I, \nu < \theta\rangle$$

Since $\theta \leq \lambda$, the theorem is proved. ■

> **Definition.** When $\kappa = \aleph\_{\alpha + 1}$ for some $\alpha \in \mathrm{Ord}$, we call $\kappa$ a **successor cardinal**. A cardinal that is not a successor cardinal is called a **limit cardinal**.

> **Theorem.** Every successor cardinal is regular.

**Proof.** Let $\kappa = \aleph\_{\alpha + 1}$. If $\kappa$ is a singular cardinal, then by the characterisation of singular cardinals, we have $\kappa = \sum\_{i \in I} \kappa\_i$ where $\kappa\_i, \|I\| < \kappa$. This is equivalent to $\kappa\_i , \|I\| \leq \aleph\_\alpha$. However,

$$
\sum_{i \in I} \kappa_i \leq \sum_{i \in I} \aleph_\alpha = |I| \cdot  \aleph_\alpha \leq  \aleph_\alpha \cdot \aleph_\alpha =  \aleph_\alpha < \kappa
$$

which is a contradiction. ■

Therefore, every singular cardinal is a limit cardinal. However, not every limit cardinal is singular. This is because $\aleph_0$ is a regular limit cardinal. But do there exist other regular limit cardinals beyond $\aleph_0$?

> **Definition.** An uncountable regular limit cardinal is called an **inaccessible cardinal**.<a href="#sub1" id="sup1"><sup>1</sup></a>

Let $\aleph_\alpha$ be an inaccessible cardinal. The limit of the following increasing sequence of cardinals is $\aleph_\alpha$:

$$

\langle \aleph_\beta : \beta < \alpha \rangle : \aleph_0 \quad \aleph_1 \quad \aleph_2 \quad \cdots \quad \to \aleph_\alpha
$$

Therefore, for $\aleph_\alpha$ to be regular, the length of the above sequence, namely $\alpha$, must not be less than $\aleph_\alpha$. Since $\alpha \leq \aleph_\alpha$, it follows that $\alpha = \aleph_\alpha$.

> **Theorem.** A necessary condition for $\aleph_\alpha$ to be inaccessible is that $\alpha = \aleph_\alpha$.

This suggests that $\alpha$ is an enormously large cardinal. For instance, consider the following sequence of cardinals $\langle \alpha_n : n \in \omega \rangle$:

$$
\alpha_0 = \aleph_0, \alpha_{n + 1} = \aleph_{\alpha_n}
$$

Let $\kappa$ be the supremum of this sequence. By the definition of supremum, if $\lambda < \kappa$, then there exists $n$ such that $\alpha_n > \lambda$. Therefore, $\aleph_\lambda = \alpha_{n+1} < \kappa$, and

$$
\aleph_\kappa = \sum_{\lambda < \kappa} \aleph_\lambda \leq \sum_{\lambda < \kappa} \kappa = \kappa
$$

In other words, a cardinal satisfying $\alpha = \aleph_\alpha$ has a magnitude at least comparable to the following:

$$
\kappa = \aleph_{\aleph_{\aleph_{\aleph_{\ddots}}}}
$$

There is an important point to note here. Although $\kappa$ satisfies $\kappa = \aleph_\kappa$, we have not shown that $\kappa$ is inaccessible. Indeed, $\kappa$ is a singular cardinal, as it is the limit of a sequence $\alpha_n$ of length $\omega$.

In fact, the existence of inaccessible cardinals is independent of ZFC.

> **Theorem.** The existence of inaccessible cardinals is independent of ZFC.

Therefore, the existence of inaccessible cardinals must be assumed as an axiom. The class of axioms that assume the existence of inaccessible cardinals are called **large cardinal axioms**, and research related to these forms an important part of set theory.

---

<a href="#sup1" id="sub1">1.</a> Strictly speaking, this corresponds to a **weakly inaccessible cardinal**. A cardinal $\kappa$ is called **strongly inaccessible** if it is weakly inaccessible and additionally satisfies $2^\lambda < \kappa$ whenever $\lambda < \kappa$. Under the continuum hypothesis, weak and strong inaccessibility are equivalent.
