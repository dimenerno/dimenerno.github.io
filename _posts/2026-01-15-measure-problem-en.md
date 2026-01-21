---
layout: post
title: "The Measure Problem and the Continuum Hypothesis"
date: 2026-01-15
tags: ["Mathematics", "Set theory", "Measure theory"]
related:
lang: en
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

> **Definition.** When a measure $\mu$ is defined for all subsets of a set $X$, $\mu$ is called a **measure on $X$**.

> **Theorem.** For any $A \subseteq \mathbb{R}$ and $x \in \mathbb{R}$, there does not exist a measure $\mu$ on the real numbers satisfying $\mu(A + x) = \mu(A)$. (Here, $A + x = \lbrace a + x : a \in A\rbrace$.)

**Proof.** Refer to the construction of the [Vitali set](https://dimenerno.github.io/2025/02/24/algebra-measure).

Thus, a translation-invariant measure on the real numbers does not exist. Instead, one may weaken the translation-invariance condition and ask whether there exists a measure $\mu$ on the real numbers such that $\mu(A) = m(A)$ for Lebesgue measurable sets $A$, where $m$ denotes the Lebesgue measure. This is called the **measure problem**.

> **Measure Problem.** Does there exist a measure $\mu$ on the real numbers such that $\mu(A) = m(A)$ for any Lebesgue measurable set $A \subseteq \mathbb{R}$?

In fact, the above problem is known to be equivalent to the following generalised problem:

> **Generalised Measure Problem.** Does there exist a non-trivial probabilistic measure $\mu$ on $2^{\aleph\_0}$? (A measure is **probabilistic** if the measure of the whole space is 1.)

If such a measure exists, it is known that the Lebesgue measure can be extended to $\mathcal{P}(\mathbb{R})$ using this measure and a bijection between $\mathbb{R}$ and $2^{\aleph\_0}$.

> **Remark 1.** Since the translation-invariance condition has been removed, the existence of a measure on a set $S$ depends solely on the cardinality of $S$. Therefore, in the subsequent discussion, we focus only on measures on (uncountable) cardinals.

> **Remark 2.** It is known that if $\mu$ is a probabilistic measure on $S$, $C = \lbrace  x \in S : \mu(\lbrace  x \rbrace ) > 0 \rbrace $ is at most countable. Hence if $\|S\| = \kappa$ is uncountable, we have $\|S\| = \|S \setminus C\|$, and $\mu$ restricted to $S \setminus C$ is a measure satisfying $\mu(\lbrace  x \rbrace ) = 0$ for all $x \in S \setminus C$. It follows that if a measure $\mu$ exists on an uncountable cardinal $\kappa$, we may assume without loss of generality $\mu(\lbrace  \alpha \rbrace ) = 0$ for all $\alpha < \kappa$. Indeed, we will assume this fact from now on.

Interestingly, the measure problem is related to the continuum hypothesis and large cardinal axioms. Let us first examine the following theorem:

> **Theorem.** If a measure exists on $\nu$, then some $\kappa \leq \nu$ is weakly inaccessible.

**Proof.** Suppose a measure $\mu$ exists on $\nu$. The collection $\mathcal{I}$ of null sets with respect to $\mu$ forms an ideal. In particular, it can be easily shown that $\mathcal{I}$ satisfies the following properties:

1. Contains singletons: For any $\xi < \nu$, $\lbrace \xi \rbrace \in \mathcal{I}$.
2. Countably closed: If $\lbrace A\_n \rbrace\_{n < \omega}$ is a collection of sets in $\mathcal{I}$, then $\bigcup\_{n < \omega} A\_n \in \mathcal{I}$.
3. Satisfies the countable chain condition: If $\lbrace B\_i \rbrace\_{i \in J}$ is a collection of pairwise disjoint sets not in $\mathcal{I}$, then $\|J\| \leq \aleph\_0$.

Let $\kappa \leq \nu$ be the smallest cardinal such that there exists an ideal $\mathcal{J}$ on $\kappa$ satisfying the above three conditions. We now prove the following lemma:

> **Definition.** Let $\mathcal{I}$ be an ideal. If for any $\lambda < \kappa$, $\lbrace A\_\xi \rbrace\_{\xi < \lambda}$ is a collection of sets in $\mathcal{I}$, and $\bigcup A\_\xi \in \mathcal{I}$, then $\mathcal{I}$ is said to be **$\kappa$-complete**.

> **Lemma.** $\mathcal{J}$ is $\kappa$-complete.

**Proof.** Suppose $\mathcal{J}$ is not $\kappa$-complete. Then there exist some $\lambda < \kappa$ and a collection $\lbrace A\_\xi \rbrace\_{\xi < \lambda}$ of sets in $\mathcal{J}$ such that $\bigcup A\_\xi \notin \mathcal{J}$. Without loss of generality, we may redefine $\lbrace A\_\xi \rbrace$ as follows to assume that the sets are pairwise disjoint:

$$
A_\xi' = A_\xi - \bigcup_{\eta < \xi} A_\eta
$$

(Since $A\_\xi' \subseteq A\_\xi$, it follows that $A\_\xi' \in \mathcal{J}$ from $A\_\xi \in \mathcal{J}$. Additionally, $A\_\xi'$ may be empty, but this does not affect the proof as empty sets are trivially disjoint.)

Define an ideal $\mathcal{K}$ on $\lambda$ as follows:

$$
S \in \mathcal{K} \iff \bigcup_{\xi \in S} A_\xi \in \mathcal{J}
$$

We verify that $\mathcal{K}$ satisfies the three conditions:

1. Contains singletons: This is immediate from the definition of $\mathcal{K}$.
2. Countably closed: Since $\mathcal{J}$ is countably closed, so is $\mathcal{K}$.
3. Satisfies the countable chain condition: Suppose $\lbrace S\_i \rbrace\_{i \in J}$ is a collection of pairwise disjoint sets not in $\mathcal{K}$. For each $i \in J$, let $B\_i = \bigcup\_{\xi \in S\_i} A\_\xi$. Then $B\_i \notin \mathcal{J}$, and $B\_i \cap B\_j = \varnothing$ for $i \neq j$ (using the disjointness of $\lbrace A\_\xi \rbrace$). Thus, $\lbrace B\_i \rbrace\_{i \in J}$ forms a pairwise disjoint antichain in $\mathcal{J}$, implying that $J$ is countable.

This contradicts the minimality of $\kappa$. Hence, $\mathcal{J}$ is $\kappa$-complete. □

From the above lemma, it follows that $\kappa$ is weakly inaccessible, i.e., an uncountable regular limit cardinal.

#### $\kappa$ is uncountable.

The singleton containment and countable closure properties imply that if $\kappa$ were countable, $\kappa \in \mathcal{J}$, leading to a contradiction.

#### $\kappa$ is regular.

If $\kappa$ were not regular, there would exist some $\lambda < \kappa$ and an increasing sequence $\lbrace \nu\_\xi \rbrace\_{\xi < \lambda}$ of cardinals less than $\kappa$ such that $\bigcup\_{\xi < \lambda} \nu\_\xi = \kappa$. By the singleton containment and $\kappa$-completeness properties, each $\nu\_\xi$ belongs to $\mathcal{J}$. Hence, by $\kappa$-completeness, $\bigcup\_{\xi < \lambda} \nu\_\xi = \kappa$ belongs to $\mathcal{J}$, contradicting the fact that $\mathcal{J}$ is an ideal.

#### $\kappa$ is a limit cardinal.

If $\kappa$ were not a limit cardinal, there would exist some ordinal $\alpha$ such that $\kappa = \aleph\_{\alpha + 1}$. For each $\gamma < \kappa$, there exists a surjection $f\_\gamma: \omega\_\alpha \to \gamma$. Using the axiom of choice, we obtain a sequence of such functions $\lbrace f\_\gamma \rbrace\_{\gamma < \omega\_{\alpha + 1}}$.

For each $\beta < \omega\_\alpha$ and $\gamma < \omega\_{\alpha + 1}$, define:

$$
A_{\gamma\beta} = \{ \xi < \omega_{\alpha + 1} : f_\xi(\beta) = \gamma \}
$$

Observe the following:

- $\bigcup\_{\beta < \omega\_\alpha} A\_{\gamma\beta} = \omega\_{\alpha + 1} - (\gamma + 1)$
- $\gamma\_1 \neq \gamma\_2 \implies A\_{\gamma\_1 \beta} \cap A\_{\gamma\_2 \beta} = \varnothing$

In particular, by $\kappa$-completeness, $\gamma + 1 \in \mathcal{J}$ implies $\bigcup\_{\beta < \omega\_\alpha} A\_{\gamma \beta} \notin \mathcal{J}$. Hence, for some $\beta$, $A\_{\gamma\beta} \notin \mathcal{J}$. Choosing such $\beta\_\gamma$ for each $\gamma$, we obtain $\lbrace A\_{\gamma\beta\_\gamma} \rbrace\_{\gamma < \omega\_{\alpha + 1}}$. However, the possible values of $\beta\_\gamma$ are limited to $\omega\_\alpha$, so by the pigeonhole principle, there exists some $\beta < \omega\_\alpha$ such that $\|\lbrace A\_{\gamma\beta\_\gamma} : \beta\_\gamma = \beta \rbrace\| = \aleph\_{\alpha + 1}$. This contradicts the countable chain condition. ■

> **Corollary.** If the measure problem has a positive solution, then the continuum hypothesis has a negative solution.

**Proof.** If the measure problem holds and $2^{\aleph\_0} = \aleph\_1$, then by the theorem, $\aleph\_0$ or $\aleph\_1$ must be weakly inaccessible. However, $\aleph\_0$ is countable, and $\aleph\_1$ is a successor cardinal, leading to a contradiction. ■

