---
layout: post
title: "The Continuum Hypothesis for Closed Sets and Borel Sets"
date: 2025-09-25
tags: ["Mathematics", "Set Theory", "Topology"]
lang: en
related:
---

The continuum hypothesis (CH) asks whether $\aleph\_1 = 2^{\aleph\_0}$ holds. This is equivalent to asking whether there exists an uncountable set whose cardinality is smaller than that of the real numbers. As is well known, CH is neither provable nor disprovable in ZFC, but it can be proven for certain restricted cases. Cantor proved that CH holds when restricted to closed subsets of the real numbers.

> **Theorem.** If $F \subseteq \mathbb{R}$ is a closed set, then $\|F\| = \aleph\_0$ or $\|F\| = 2^{\aleph\_0}$.

The proof of this theorem uses the concept of a **perfect set**. I previously introduced this when discussing the [Cantor-Bendixson theorem](https://dimenerno.github.io/2024/12/25/Cantor-Bendixson), but let me reintroduce it here.

> **Definition.** For a topological space $X$, a subset $P \subseteq X$ is said to be perfect if $P = P'$, where $P'$ is the set of limit points of $P$ in $X$.

In general, for a subset $A \subseteq X$, there are two reasons why $A$ and $A'$ may not include one or the other.

1. If $x$ is an isolated point of $A$, then $x \in A$ but $x \notin A'$
2. If $x$ is a limit point of $A$ that does not belong to $A$, then $x \notin A$ but $x \in A'$

Therefore, a perfect set is a closed set with no isolated points. Accordingly, when given a closed set $F$, one might expect that removing all isolated points from $F$ would yield a perfect set. The problem is that the set obtained after removing isolated points may itself have isolated points. For example,

$$
F = \mathbb{N} \cup \lbrace  m - 1/n : m \geq 0, n > 1 \rbrace
$$

The set obtained by removing the isolated points of $F$ is $\mathbb{N}$, each of whose points is isolated. However, if we repeat this process of 'removing' isolated points transfinitely, we obtain the following interesting result.

> **Cantor-Bendixson Theorem.** If $F \subseteq \mathbb{R}$ is a closed set, then there exist a countable set $C$ and a perfect set $P$ such that $F = P \sqcup C$.

**Proof.** Although a proof is presented in the previous link, here we present Cantor's alternate proof.

Define transfinitely as follows:

$$
\begin{gather}
F_0 = F \\
F_{\alpha + 1} = F_\alpha' \\
F_\lambda = \bigcap_{\alpha < \lambda} F_\alpha \quad (\lim \lambda)
\end{gather}
$$

Observe the following:

1. Each $F\_\alpha$ is a closed set.
2. If $\alpha \leq \beta$, then $F\_\alpha \supseteq F\_\beta$.
3. $F\_\alpha \setminus F\_{\alpha + 1}$ is the set of isolated points of $F\_\alpha$.
4. If $\alpha \neq \beta$, then $F\_{\alpha} \setminus F\_{\alpha + 1}$ and $F\_{\beta} \setminus F\_{\beta+1}$ are disjoint.

If $F\_{\alpha} \setminus F\_{\alpha+1} \neq \varnothing$ for all $\alpha \in \mathrm{Ord}$, then for the Hartogs number $\gamma$ of $\mathcal{P}(F)$, the function $f : \gamma \to \mathcal{P}(F); \alpha \mapsto F\_{\alpha} \setminus F\_{\alpha + 1}$ would be injective, which is a contradiction. Therefore, there exists $\xi$ such that $F\_{\xi} \setminus F\_{\xi+1} = \varnothing$. Setting $P = F\_\xi$, we have that $P$ is either empty or perfect.

Let $C = F \setminus P$. Let $\mathcal{B} = \lbrace  B\_n \rbrace $ be a countable basis for $\mathbb{R}$. Define $f: C \to \omega$ as follows:

$$
f(x) = \mathop{\arg \min}\limits_{n \in \omega} : B_n \cap F_\alpha = \{ x \} \quad (x \in F_\alpha \setminus F_{\alpha + 1})
$$

Verify that $f$ is well-defined and injective. ■

> **Theorem.** If $P \subseteq \mathbb{R}$ is a non-empty perfect set, then $\|P\| = 2^{\aleph\_0}$.

**Proof.** We prove the following two lemmas.

> **Lemma.** If $P \subseteq \mathbb{R}$ is a non-empty perfect set, then there exist non-empty perfect disjoint sets $P\_1, P\_2 \subset P$.

_Proof._ Let $\alpha = \inf P$ and $\beta = \sup P$ (where $\alpha, \beta$ may be $\pm \infty$). If $(\alpha, \beta) \subset P$, then for any $r, s$ with $\alpha < r < s < \beta$, the sets $P \cap (-\infty, r]$ and $P \cap [s, \infty)$ satisfy the conditions. If $(\alpha, \beta) \not\subset P$, then there exists some $x \in (\alpha, \beta)$ such that $x \notin P$. Since $P = P'$, $x$ is not a limit point of $P$. Therefore, there exists sufficiently small $\delta > 0$ such that $(x - \delta, x + \delta)$ is disjoint from $F$ and $\alpha < x - \delta, x + \delta < \beta$. In this case, $P \cap (-\infty, x - \delta]$ and $P \cap [x + \delta, \infty)$ satisfy the conditions. □

> **Lemma.** If $P \subseteq \mathbb{R}$ is a non-empty perfect set, then for any $n > 0$, there exists a non-empty perfect set $P' \subset P$ such that $\mathrm{diam} P' < 1/n$.

_Proof._ For $\mathcal{J} = \lbrace  (m/n, (m+1)/n) : m \in \mathbb{Z} \rbrace $, there exists $(k/n, (k+1)/n) \in \mathcal{J}$ such that $J \cap F \neq \varnothing$ (otherwise $P = \lbrace  m/n : m \in \mathbb{Z} \rbrace $, which is not perfect). Let $a = \inf F \cap (k/n, (k+1)/n)$ and $b = \sup F \cap (k/n, (k+1)/n)$ and take $E = F \cap [a, b]$. Since $E$ is a closed set, if $E$ has no isolated points, then $E$ is perfect. For contradiction, assume that $x \in E$ is an isolated point of $E$. By the definition of supremum and inifimum, $x \neq a, b$. Hence there exists sufficiently small $\delta > 0$ such that $E \cap (x - \delta, x + \delta) = \lbrace  x\rbrace $ and $k/n < x - \delta, x + \delta < (k + 1)/n$. In this case, $F \cap (x - \delta, x + \delta) = \lbrace  x\rbrace $, so $x$ is an isolated point of $F$, which is a contradiction. Hence, $E$ is perfect. □

Let $P$ be a non-empty perfect set. From the two lemmas above, using the axiom of choice, we can inductively define:

- $P\_1, P\_2 \subset P, P\_1 \cap P\_2 = \varnothing, \mathrm{diam} P\_1, \mathrm{diam} P\_2 < 1/2$
- $P\_{11}, P\_{12} \subset P\_1, P\_{11} \cap P\_{12} = \varnothing, \mathrm{diam} P\_{11}, \mathrm{diam} P\_{12} < 1/4$
- $P\_{21}, P\_{22} \subset P\_2, P\_{21} \cap P\_{22} = \varnothing, \mathrm{diam} P\_{21}, \mathrm{diam} P\_{22} < 1/4$
- $P\_{111}, P\_{112} \subset P\_{11}, P\_{111} \cap P\_{112} = \varnothing, \mathrm{diam} P\_{111}, \mathrm{diam} P\_{112} < 1/8$
- ...

Let $A$ be the intersection of all $P\_i$. $A$ has the same cardinality as the Cantor set. Since the Cantor set has the same cardinality as the real numbers, $\|P\| = 2^{\aleph\_0}$. ■

From the above theorem and the Cantor-Bendixson theorem, we obtain the following result.

> **Corollary.** If $F \subseteq \mathbb{R}$ is a closed set, then $\|F\| = \aleph\_0$ or $\|F\| = 2^{\aleph\_0}$.

Incidentally, a result similar to the Cantor-Bendixson theorem holds for Borel sets.

> **Theorem.** If $B \subseteq \mathbb{R}$ is an uncountable Borel set, then $B$ contains a perfect set.

**Proof.** Omitted.

Therefore, more generally, the following holds.

> **Corollary.** If $B \subseteq \mathbb{R}$ is a Borel set, then $\|B\| = \aleph\_0$ or $\|B\| = 2^{\aleph\_0}$.
