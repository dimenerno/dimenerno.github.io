---
layout: post
title: "Saturated Structures and the Completeness of Real Closed Fields"
date: 2025-05-13
tags: ["Mathematics", "Set Theory"]
lang: en
related:
  - "η sets"
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

Let $\mathfrak{A}$ be an $\mathcal{L}$-structure. Let $A$ be the domain of $\mathfrak{A}$.

> **Definition.** A subset $X \subseteq A$ is said to be **definable** if there exist some $\mathcal{L}$-formula $\phi$ and free variable assignment $g$ such that the following holds:
>
> $$X = \{ x \in A : \mathfrak{A} \vDash \phi[g^0_x] \}$$
>
> When $\phi$ has no free variables other than $v\_0$, we say that $X$ is $\emptyset$-definable.

_Remark._ Definability has the same meaning as [Gödel's constructibility](https://dimenerno.github.io/2024/12/11/VL-axiom/).

For example, in $(\mathbb{R}, <)$, the interval $(e, 2\pi)$ is definable by the following $\phi$ and $g$:

- $\phi \equiv (v\_1 < v\_0 \land v\_0 < v\_2)$
- $g: v\_1 \mapsto e, v\_2 \mapsto 2\pi$

However, $(e, 2\pi)$ is not $\emptyset$-definable, as there is no way to specify $e$ and $2\pi$ in $(\mathbb{R}, <)$.

On the other hand, in the standard arithmetic model $(\mathbb{N}, 0, +, S)$, the set of even numbers $E$ is $\emptyset$-definable by the following $\phi$:

- $\phi \equiv \exists y (x = y + y)$

All finite sets are definable. For instance, $A = \lbrace a_1, a_2, a_3 \rbrace $ is definable as follows:

- $\phi \equiv (v\_0 = v\_1) \lor (v\_0 = v\_2) \lor (v\_0 = v\_3)$
- $g: v\_1 \mapsto a\_1, v\_2 \mapsto a\_2, v\_3 \mapsto a\_3$

For the same reason, all cofinite sets are also definable.

In [the previous post](http://dimenerno.github.io/2025/05/09/resiliency/), we examined resilient families of sets. We now define the following:

> **Definition.** Let $\kappa$ be an uncountable cardinal. We say that $\mathfrak{A}$ is **$\kappa$-saturated** if every collection of fewer than $\kappa$ definable subsets of $A$ is resilient. In particular, when $\mathfrak{A}$ is $\|A\|$-saturated, we say that $\mathfrak{A}$ is **saturated**.

Therefore, an $\aleph\_1$-saturated structure $\mathfrak{A}$ is one in which, whenever a countable collection of definable subsets of $\mathfrak{A}$ satisfies the finite intersection property, their total intersection is also non-empty. Meanwhile, it is impossible for a structure $\mathfrak{A}$ to be $\|A\|^+$-saturated, since the following family of sets satisfies the finite intersection property but has empty intersection:

$$
\Big\{ A - \{ a \} : a \in A \Big\}
$$

The importance of saturated structures lies in the following theorem:

> **Theorem.** Two elementarily equivalent saturated $\mathcal{L}$-structures of the same cardinality are isomorphic.

**Proof.** Omitted. The basic idea is a generalisation of [Cantor's back-and-forth argument](https://dimenerno.github.io/2025/05/08/resiliency/) seen in the previous post.

Unfortunately, saturated structures are difficult to construct. For instance, for an uncountable cardinal $\kappa$ and a consistent theory $T$ with $\|T\| \leq \kappa$, the theory $T$ has a $\kappa^+$-saturated model of cardinality $2^\kappa$. Therefore, under the generalised continuum hypothesis, such a model is saturated. However, it is known that ZFC alone cannot prove the existence of saturated structures.

We therefore introduce the following concept with a weaker condition:

> **Definition.** We say that $\mathfrak{A}$ is **special** if $\mathfrak{A}$ is the direct limit of a directed system $\lbrace  \mathfrak{A}\_\kappa \rbrace \_{\kappa < \|A\|}$, where $\kappa$ is an infinite cardinal and each $\mathfrak{A}\_\kappa$ is $\kappa^+$-saturated.

Every saturated structure is special, as we can take each $\mathfrak{A}\_\kappa$ to be itself. However, not every special structure is saturated. Therefore, being special is a strictly weaker condition than being saturated. Nevertheless, special structures satisfy the isomorphism property:

> **Theorem.** Two elementarily equivalent special $\mathcal{L}$-structures of the same cardinality are isomorphic.

Moreover, special structures are easier to construct than saturated structures. In particular, the following specialisation of the Löwenheim-Skolem theorem is known:

> **Special Löwenheim-Skolem Theorem.** Let $T$ be a theory in language $\mathcal{L}$.
>
> 1. If $T$ has an infinite model, then $T$ has a special model of cardinality greater than any given cardinal.
> 2. If $T$ has an infinite model and $\mathcal{L}$ is countable, then $T$ has a special model of cardinality $\beth\_\omega$.

As an application of this theorem, we consider the following famous result:

> **Definition.** The **theory of real closed ordered fields** or **RCOF** is a theory in the language $(0, 1, +, \cdot, <)$ consisting of the following axioms: ($x^n$ is an abbreviation for $x \underbrace{\cdot \;\cdots\; \cdot}\_{n} x$)
>
> 1. Ordered field axioms
>    - $\forall a, b, c : (a < b) \rightarrow (a + c < b + c)$
>    - $\forall a, b : (a > 0 \land b > 0) \rightarrow ab > 0$
>    - Field axioms
> 2. Square root axiom: $\forall a > 0 \; \exists x : x^2 = a$
> 3. Closure axiom schemas:
>    - $\forall a\_2, a\_1, a\_0 \; \exists x :x^3 + a\_2x^2 + a\_1x + a\_0 = 0$
>    - $\forall a\_4, a\_3, a\_2, a\_1, a\_0\; \exists x : x^5 + a\_4x^4 + \cdots + a\_0 = 0$
>    - ...
>
> The **theory of real closed fields** or **RCF** is a theory in the language $(0, 1, +, \cdot)$ consisting of the following axioms:
>
> 1. Field axioms
> 2. Formally real axiom: $\forall x : x^2 \neq -1$
> 3. Square root axiom: $\forall a \; \exists x : x^2 = a \lor x^2 = -a$
> 4. Closure axiom schemas

> **Tarski's Theorem.** RCOF and RCF are complete.

**Proof.** The key is the following lemma:

> **Erdős-Gillman-Henriksen Lemma.** Two special real closed fields of the same cardinality are isomorphic.

Assuming the lemma, we prove Tarski's theorem. If RCF were not complete, there would exist extensions $T\_1$ and $T\_2$ of RCF such that models of $T\_1$ and models of $T\_2$ are not elementarily equivalent. Since all models of RCF are infinite models (why?), by the special Löwenheim-Skolem theorem, $T\_1$ and $T\_2$ each have models $\mathfrak{A}\_1, \mathfrak{A}\_2$ of cardinality $\beth\_\omega$. However, by the lemma, $\mathfrak{A}\_1 \cong \mathfrak{A}\_2$, which contradicts $\mathfrak{A}\_1 \not\equiv \mathfrak{A}\_2$. ■

