---
layout: post
title: "Notes on the Definition of Cardinality"
date: 2025-04-20
lang: en
tags: ["Mathematics", "Set Theory"]
related:
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

> **Definition.** When there exists an injective mapping from $X$ to $Y$, we write $\|X\| \leq \|Y\|$. When there exists a bijective mapping, we write $\|X\| = \|Y\|$.

A common misunderstanding amongst students first studying set theory is to implicitly treat the $\|\cdot\|$ and $\leq$ in the above definition as analogous to $\|\cdot\|$ and $\leq$ for complex numbers. In other words, just as $\|z\|$ is a real number for a complex number $z$ and $\leq$ is the ordering relation on real numbers, they think that $\|X\|$ for a set $X$ is the size of the set—the so-called **cardinality**—and $\leq$ is the ordering relation on cardinalities.

However, this is a problematic approach. This is because **<u>there is no guarantee that we can define cardinality as a mathematical object</u> using only the definition above.** What we have defined is merely a binary relation.

Let us consider an example for understanding. When $A$ likes $B$, we might write $\|A\| \leq \|B\|$. However, if we interpret this notation to mean that $\|A\|$ represents '$A$'s affection level' and $\leq$ is the ordering relation on affection levels, this would be completely incorrect. Similarly, $\|X\| \leq \|Y\|$ is merely a binary relation defined by the existence of an injective mapping; the relation itself does not suggest the concept of cardinality.

In particular, since everything is a set in ZFC, if we wish to define cardinality, we must prove the following fact.

> **Theorem 1.** For any sets $X, Y$, there exist sets $\mathrm{Card}(X), \mathrm{Card}(Y)$ such that the following holds:
>
> 1. $\|X\| \leq \|Y\|$ iff $\mathrm{Card}(X) \subseteq \mathrm{Card}(Y)$
> 2. $\|X\| = \|Y\|$ iff $\mathrm{Card}(X) = \mathrm{Card}(Y)$
>
> We call $\mathrm{Card}(X)$ the cardinality of $X$.

That is, we must ① define $\mathrm{Card}(X)$, and ② show that the above statement holds for this definition.

For convenience of expression, let us refer to $\|X\| \leq \|Y\|$ and $\|X\| = \|Y\|$ as "$Y$ is not smaller than $X$" and "$X$ and $Y$ have the same size", respectively. Regarding ①, there are broadly four possible approaches. Let us briefly examine them:

1. Cantor's definition

   - Definition: Define $\mathrm{Card}(X)$ as the collection of all sets having the same size as $X$.
   - Advantage: The definition is most intuitive
   - Disadvantage: $\mathrm{Card}(X)$ is actually a class, not a set

2. Scott's trick

   - Definition: When the rank of the first set to appear in the von Neumann hierarchy amongst sets having the same size as $X$ is $V_\alpha$, define $\mathrm{Card}(X)$ as $V_\alpha$.
   - Advantage: Defines cardinality without the class problem
   - Disadvantage: The definition is not intuitive and has ad-hoc aspects

3. Defining cardinality using the well-ordering theorem

   - Definition: Define $\mathrm{Card}(X)$ as the smallest ordinal that is not smaller than the ordinals corresponding to well-orderings of $X$.
   - Advantage: The definition is somewhat intuitive and avoids the class problem
   - Disadvantage: Without the axiom of choice, we cannot guarantee the existence of a well-ordering for arbitrary sets

4. Defining cardinality using Hartogs numbers
   - Definition: Define the Hartogs number of $X$ as the smallest ordinal greater than the ordinals corresponding to well-orderable subsets of $X$.
   - Advantage: The definition is reasonably intuitive, avoids the class problem, and is not dependent on the axiom of choice
   - Disadvantage: Inconvenient to handle and has many limitations

In modern set theory, either 2 or 3 is adopted as the definition of cardinality. In both cases, one can prove that Theorem 1 holds in ZFC.

What is interesting is that whilst the axiom of choice is not required to define cardinality using Scott's trick, the axiom of choice is needed to prove that cardinality defined by Scott's trick satisfies Theorem 1. This is because the following is equivalent to the axiom of choice:

> **Theorem 2.** For any sets $X, Y$, either $\|X\| \leq \|Y\|$ or $\|Y\| \leq \|X\|$.

That is, even without using the axiom of choice, we can a) define $\mathrm{Card}(X)$ through Scott's trick, or b) define $\|X\| \leq \|Y\|$ through the existence of injective mappings, but the axiom of choice is required to prove that a) and b) mesh together.

