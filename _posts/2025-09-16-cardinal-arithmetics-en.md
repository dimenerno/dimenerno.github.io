---
layout: post
title: "Basic Theorems of Cardinal Arithmetic"
date: 2025-09-16
lang: en
tags: ["Mathematics", "Set Theory"]
related:
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

In this article, all sets and cardinals are infinite.

## 1. Cardinal Addition

When dealing with cardinal arithmetic, it is important to know the precise definitions of each operation. It is easy to confuse definitions with theorems. Let us begin with cardinal addition.

> **Definition.** Let $A, B$ be disjoint sets with cardinalities $\kappa, \lambda$ respectively. Define $\kappa + \lambda$ as $\|A \cup B \|$.

> **Theorem.** Finite cardinal addition satisfies the commutative and associative laws.

To show that the above definition is well-defined, we must prove that $\kappa + \lambda$ does not depend on the choice of $A, B$. This is easily provable in ZF. Moreover, finite cardinal addition is merely finding the maximum cardinal, making it quite easy to compute.

> **Theorem.**
> $$
> \kappa + \lambda = \mathrm{max}(\kappa, \lambda)
> $$

**Proof.** By the lemma in "2. Cardinal Multiplication" and the Cantor-Bernstein theorem, $\aleph\_\alpha = \aleph\_\alpha + \aleph\_\alpha$. Therefore, if $\|A\| \leq \|B\|$, then $\|B\| \leq \|A + B\| \leq \|B + B\| = \|B\|$. ■

Extending the definition of cardinal addition to the infinite case,

> **Definition.** Given a family of pairwise disjoint sets $\lbrace  A\_i \rbrace $ where each $A\_i$ has cardinality $\kappa\_i$ for $i \in I$, we define:
>
> $$
> \sum_{i \in I} \kappa_i = \left| \bigcup_{i \in I}A_i \right|
> $$

Note that proving this definition is well-defined requires the axiom of choice. For each $i \in I$, we must be able to choose a bijection $A\_i \to \kappa\_i$. Therefore, when dealing with cardinal arithmetic, the axiom of choice is almost always presupposed.

From the relation $\kappa + \lambda = \mathrm{max}(\kappa, \lambda)$, one might wish to derive the following relation, but note that this is not a valid equation.

> **Warning.** $\sum\_{i \in I} \kappa\_i = \sup \kappa\_i$ does not hold in general.

## 2. Cardinal Multiplication

How then should we compute infinite cardinal addition? To understand this, let us first define cardinal multiplication.

> **Definition.** Let $A, B$ be sets with cardinalities $\kappa, \lambda$ respectively. Define $\kappa \cdot \lambda$ as $\| A \times B\|$.

> **Theorem.** Finite cardinal multiplication satisfies the commutative and associative laws.

Very conveniently, the computation of finite cardinal multiplication is the same as that of finite cardinal addition.

> **Theorem.**
> $$
> \kappa \cdot \lambda = \mathrm{max}(\kappa, \lambda)
> $$

**Proof.** This follows from the lemma below. ■

> **Lemma.** For any $\alpha \in \mathrm{Ord}$, $\aleph\_\alpha \cdot \aleph\_\alpha = \aleph\_\alpha$

The proof outline is as follows. For any $\alpha \in \mathrm{Ord}$, we show that the order $\prec$ defined as follows is a well-ordering of $\omega\_\alpha \times \omega\_\alpha$. When $\hat{x} = \mathrm{max}(x\_1, x\_2), \hat{y} = \mathrm{max}(y\_1, y\_2)$, 

$$
(x_1, x_2) \prec (y_1, y_2) \iff \begin{cases}
\hat{x} < \hat{y}\\
x_1 < y_1 \quad (\text{if }\hat{x} < \hat{y}) \\
x_2 < y_2 \quad (\text{if }\hat{x} < \hat{y}, x_1 = y_1) \\
\end{cases}
$$

That is, $\prec$ is the maximum-first then lexicographic order. By transfinite induction, we show that $\aleph\_\alpha \cdot \aleph\_\alpha = \aleph\_\alpha$ when $\aleph\_\beta \cdot \aleph\_\beta = \aleph\_\beta$ for all $\beta < \alpha$. For this, it suffices to show that the order type of $(\omega\_\alpha \times \omega\_\alpha, \prec)$ does not exceed $\omega\_\alpha$. We need to show that for any $(\gamma\_1, \gamma\_2) \in \omega\_\alpha \times \omega\_\alpha$,

$$
X = \{ (\xi_1, \xi_2) : (\xi_1, \xi_2) \prec (\gamma_1, \gamma_2) \}
$$

satisfies $\|X\| < \aleph\_\alpha$. Let $\gamma = \mathrm{max}(\gamma\_1, \gamma\_2) + 1$. Since $\omega\_\alpha$ is a limit ordinal, $\gamma \in \omega\_\alpha$, and therefore $\|\gamma\| = \aleph\_\delta$ for some $\delta < \alpha$. On the other hand, $X \subseteq \gamma \times \gamma$, so $\|X\| \leq \aleph\_\delta \cdot \aleph\_\delta$, which equals $\aleph\_\delta$ by the induction hypothesis. ■

**The definition of cardinal multiplication has no relation to cardinal addition.** That is, there is no meaning like "adding $\kappa$ exactly $\lambda$ times" in the definition of cardinal multiplication. Nevertheless, the following *theorem* allows us to relate cardinal multiplication to cardinal addition.

> **Theorem.**
> $$
> \sum_{i \in I} \kappa = |I| \cdot \kappa
> $$

**Proof.** Let $\lbrace  A\_i \rbrace $ be a family of pairwise disjoint sets with $\|A\_i\| = \kappa$. The left side is the cardinality of $\bigcup\_{i \in I} A\_i$, and the right side is the cardinality of $I \times A$ where $\|A\| = \kappa$. By the axiom of choice, for each $i \in I$ we can define a bijection $f\_i : A\_i \to A$. Define the following correspondence $f: \bigcup\_{i \in I} A\_i \to I \times A$:

$$
f(x) = (i, f_i(x)) \quad (\text{if } x \in A_i)
$$

It is easily verified that this function is a bijection. Therefore (left side) = (right side). ■

From this, we can prove the correct relation corresponding to the aforementioned "warning".

> **Theorem.**
> $$
> \sum_{i \in I} \kappa_i = |I| \cdot \sup \kappa_i
> $$

**Proof.** Let $\kappa = \sup \lbrace  \kappa\_i : i \in I \rbrace $, and denote the left side as $L$ and the right side as $R$. By the previous theorem, $\|I\| \cdot \kappa = \sum\_{i \in I} \kappa$, and since $\kappa\_i \leq \kappa$, we have $L ≤ R$. Conversely, $\| I \| = \sum\_{i \in I} 1 \leq L$ and $\kappa = \sup \kappa\_i \leq L$. By the lemma at the bottom of this article, $L = L \cdot L$, so $L \geq \| I \| \cdot \kappa = R$. Therefore, by the Cantor-Bernstein theorem, $L = R$. (The axiom of choice is implicitly used extensively in this proof, so interested readers may wish to write out the omitted arguments in detail.) ■

Now let us generalise cardinal multiplication to the infinite case.

> **Definition.** Given a family of sets $\lbrace  A\_i \rbrace $ where each $A\_i$ has cardinality $\kappa\_i$ for $i \in I$, we define:
>
> $$
> \prod_{i \in I} \kappa_i = \left| \prod_{i \in I}A_i \right|
> $$

König's theorem can be usefully employed when computing cardinal multiplication.

> **König's Theorem.** For an index set $I$, suppose $\kappa\_i < \lambda\_i$. The following holds:
>
> $$
> \sum \kappa_i < \prod \lambda_i
> $$

One might think this is obvious, but note that in general, not only do 1 and 2 fail to hold, but even 3 does not hold.

1. If $\kappa\_i < \lambda\_i$, then $\sum \kappa\_i < \sum \lambda\_i$
2. If $\kappa\_i < \lambda\_i$, then $\prod \kappa\_i < \prod \lambda\_i$
3. If $\kappa\_i \leq \lambda\_i$, then $\sum \kappa\_i < \prod \lambda\_i$

Of course, if we weaken the inequality in the conclusion from $<$ to $\leq$ in 1, 2, and 3, they all hold. The distinctive feature of König's theorem is that the conclusion involves a strict inequality.

**Proof.** Let $\lbrace  A\_i \rbrace , \lbrace  B\_i \rbrace $ be collections of (pairwise disjoint) sets with cardinalities $\kappa\_i, \lambda\_i$ respectively. By contradiction, suppose there exists an injective function $f: \prod B\_i \to \cup A\_i$. For any $i \in I$, by the injectivity of $f$, $\|f^{-1}(A\_i)\| = \|A\_i\|$. But since $\|A\_i\| < \|B\_i\|$, $\pi\_i (f^{-1}(A\_i)) \subset B\_i$ has strictly smaller cardinality than $B\_i$, and accordingly there exists $b\_i \in B\_i \setminus \pi\_i (f^{-1}(A\_i))$. Choosing such $b\_i$ for each $i$ and considering $b = (b\_i)\_{i \in I}$, we have $\pi\_i(b) = b\_i$ for any $i \in I$, so $f(b) \notin \cup A\_i$, which is a contradiction. ■

## 3. Cardinal Exponentiation

> **Definition.** Let $A, B$ be sets with cardinalities $\kappa, \lambda$ respectively. Define $\kappa^\lambda$ as $\|A^B \|$, where $A^B$ is the set of functions from $B$ to $A$.

As in the case of cardinal multiplication, although the definition of cardinal exponentiation has no relation to cardinal multiplication, the following theorem allows us to bridge the two.

> **Theorem.**
> $$
> \prod_{i \in I} \kappa = \kappa^{|I|}
> $$

Moreover, cardinal exponentiation shares several nice properties of ordinary exponentiation.

> **Theorem.** Cardinal exponentiation satisfies the laws of exponents. That is,
>
> - $\kappa^{\lambda + \mu} = \kappa^\lambda \cdot \kappa^\mu$
> - $(\kappa^\lambda)^\mu = \kappa^{\lambda \cdot \mu}$
> - $(\kappa \cdot \lambda)^{\mu} = \kappa^\mu \cdot \lambda^\mu$

Nevertheless, computing cardinal exponentiation precisely is quite challenging, as the results obtainable without assuming the Generalised Continuum Hypothesis are limited. Let us first examine theorems that can be proved without the Generalised Continuum Hypothesis.

> **Theorem.**
> 
> 1. $2^{\aleph\_\alpha} > \aleph\_\alpha$
> 2. $\alpha \leq \beta \implies \kappa^{\aleph\_\alpha} \leq \kappa^{\aleph\_\beta}$
> 3. $\mathrm{cf}(\kappa^{\aleph\_\alpha}) > \aleph\_\alpha$

Note that since $\mathrm{cf}(\kappa) \leq \kappa$, property 3 implies 1.

**Proof.** 1 is Cantor's theorem, and 2 is trivial using the axiom of choice. The proof of 3 uses König's theorem. Let $\mathrm{cf}(\kappa^{\aleph\_\alpha}) = \aleph\_\lambda$. By the definition of $\mathrm{cf}$, there exists $\lbrace  \xi\_i \rbrace \_{i < \omega\_\lambda}$ such that $\xi\_i < \kappa^{\aleph\_\alpha}$ and $\sum\_{i < \omega\_\lambda} \xi\_i = \kappa^{\aleph\_\alpha}$. By König's theorem, the following holds:

$$
\kappa^{\aleph_\alpha} = \sum_{i < \omega_\lambda} \xi_i < \prod_{i < \omega_\lambda} \kappa^{\aleph_\alpha} = \kappa^{\aleph_\alpha \cdot \aleph_\lambda}
$$

But if $\aleph\_\lambda = \aleph\_\alpha$, then $\kappa^{\aleph\_\alpha \cdot \aleph\_\lambda} = \kappa^{\aleph\_\alpha}$, so the strict inequality $<$ does not hold. Therefore $\aleph\_\lambda > \aleph\_\alpha$. ■

The following two theorems are particularly useful.

> **Theorem.**
> 
> $$
> \aleph_\alpha^{\aleph_\beta} =
> \begin{cases}
> 2^{\aleph_\beta} & (\aleph_\alpha \leq \aleph_\beta) \\
> \mathrm{card} \{ A \subseteq \omega_\alpha : |A| = \aleph_\beta \} & (\aleph_\beta < \aleph_\alpha)
> \end{cases}
> $$

**Proof.** The proof for the case $\aleph\_\alpha \leq \aleph\_\beta$ is as follows:

$$
2^{\aleph_\beta} \leq \aleph_\alpha^{\aleph_\beta} \leq (2^{\aleph_\alpha})^{\aleph_\beta} = 2^{\aleph_\alpha \cdot \aleph_\beta} = 2^{\aleph_\beta}
$$

Let us prove the case $\aleph\_\alpha > \aleph\_\beta$. Let $S$ denote the set on the left. Each element of $S$ can be thought of as an injective function from $\aleph\_\beta$ to $\aleph\_\alpha$, so $\|S\| \leq {\aleph\_\alpha}^{\aleph\_\beta}$. To show the reverse direction, first observe that since $\aleph\_\beta < \aleph\_\alpha$, we have $\aleph\_\alpha = \aleph\_\beta \cdot \aleph\_\alpha$. Therefore,

$$
|S| = |T| \quad \text{where} \quad T = \{ A \subseteq \omega_\beta \times \omega_\alpha : |A| = \aleph_\beta \}
$$

But each element of $T$ can be thought of as the number of ways to choose $\aleph\_\beta$ elements from $\omega\_\alpha$ _with repetition allowed_. This defines a surjective relation from $T$ to ${\aleph\_\alpha}^{\aleph\_\beta}$. Therefore ${\aleph\_\alpha}^{\aleph\_\beta} = \|S\|$. ■

A corollary of this is Hausdorff's theorem.

> **Hausdorff's Theorem.**
>
> $$
> \aleph_{\alpha+1}^{\aleph_\beta} = \aleph_\alpha^{\aleph_\beta} \cdot \aleph_{\alpha + 1}
> $$

**Proof.** If $\beta > \alpha$, then by the previous theorem the statement holds trivially. Therefore suppose $\beta \leq \alpha$. Since $\aleph\_{\alpha+1}^{\aleph\_\beta} \geq \aleph\_\alpha^{\aleph\_\beta}, \aleph\_{\alpha + 1}$, the $\geq$ direction holds trivially. Therefore it suffices to show the $\leq$ direction.

Since $\aleph\_{\alpha + 1}$ is a successor cardinal, it is regular, and accordingly $\aleph\_\beta < \mathrm{cf}(\aleph\_{\alpha + 1})$. Therefore $f \in \omega\_\alpha^{\omega\_\beta}$ has an upper bound. That is,

$$
\aleph_{\alpha+1}^{\aleph_\beta} = \bigcup_{\gamma < \omega_{\alpha + 1}} \gamma^{\omega_\beta}
$$

where each $\gamma$ has cardinality at most $\aleph\_\alpha$. Therefore the following holds:

$$
\aleph_{\alpha+1}^{\aleph_\beta} \leq \sum_{\gamma < \omega_{\alpha + 1}} |\gamma|^{\aleph_\beta} \leq \sum_{\gamma < \omega_{\alpha + 1}} {\aleph_\alpha}^{\aleph_\beta} =  {\aleph_\alpha}^{\aleph_\beta} \cdot \aleph_{\alpha + 1} \quad \blacksquare
$$

## 4. Under the Generalised Continuum Hypothesis

Assuming the Generalised Continuum Hypothesis allows us to prove much stronger results.

> **Theorem.** If $\aleph\_\alpha$ is a regular cardinal, the following holds:
> 
> $$
> \aleph_\alpha^{\aleph_\beta} = \begin{cases}
> \aleph_{\beta + 1} & \aleph_\alpha \leq \aleph_\beta \\
> \aleph_{\alpha} & \aleph_\beta < \aleph_\alpha \end{cases}
> $$

**Proof.** For the case $\aleph\_\alpha \leq \aleph\_\beta$, $\aleph\_\alpha^{\aleph\_\beta} = 2^{\aleph\_\beta}$, so it holds by GCH. For the case $\aleph\_\alpha > \aleph\_\beta$,

$$
\aleph_\alpha^{\aleph_\beta} = |S| \quad \text{where} S = \{ A \subseteq \omega_\alpha : |A| = \aleph_\beta \}
$$

Since $\aleph\_\alpha$ is regular, each element of $S$ is bounded. Therefore,

$$
S \subseteq \bigcup_{\lambda \in \omega_\alpha} \mathcal{P}(\lambda)
$$

For any $\lambda \in \omega\_\alpha$, let $\|\lambda\| = \aleph\_\delta$. Then $\aleph\_\delta < \aleph\_\alpha$, so $2^{\|\lambda\|} = \aleph\_{\delta + 1} < \aleph\_\alpha$. Therefore the following holds:

$$
\begin{align}
|S| &\leq \sum_{\lambda \in \omega_\alpha} 2^{|\lambda} \\
&\leq \sum_{\lambda \in \omega_\alpha} \aleph_\alpha \\
&= \aleph_\alpha \cdot \aleph_\alpha = \aleph_\alpha \quad \blacksquare
\end{align}
$$

> **Theorem.** If $\aleph\_\alpha$ is a singular cardinal, the following holds:
> 
> $$
> \aleph_\alpha^{\aleph_\beta} = \begin{cases}
> \aleph_{\beta + 1} & \aleph_\alpha \leq \aleph_\beta \\
> \aleph_{\alpha + 1} & \mathrm{cf}(\aleph_\alpha) \leq \aleph_\beta < \aleph_\alpha \\
> \aleph_{\alpha} & \aleph_\beta < \mathrm{cf}(\aleph_\alpha) \end{cases}
> $$

**Proof.** The first and third cases are almost the same as the proof of the previous theorem, so we examine only the second case. The following holds:

$$
\aleph_\alpha \leq \aleph_\alpha^{\aleph_\beta} \leq \aleph_\alpha^{\aleph_\alpha} = 2^{\aleph_\alpha} = \aleph_{\alpha+1}
$$

Therefore it suffices to show that $\aleph\_\alpha < \aleph\_\alpha^{\aleph\_\beta}$. If $\aleph\_\alpha = \aleph\_\alpha^{\aleph\_\beta}$, then $\mathrm{cf}(\aleph\_\alpha) = \mathrm{cf}(\aleph\_\alpha^{\aleph\_\beta}) > \aleph\_\beta$, but by assumption $\mathrm{cf}(\aleph\_\alpha) \leq \aleph\_\beta$, which is a contradiction. ■