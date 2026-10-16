---
layout: post
title: "Proving Eternal Recurrence from the Poincaré Recurrence Theorem"
date: 2026-10-15
tags: ["Philosophy", "Physics", "Mechanics", "Measure Theory"]
lang: en
related:
---

## Introduction

In *The Gay Science*, Nietzsche presents a famous thought experiment. One day a demon comes to you and whispers that you will have to live the life you are now living once again, in exactly the same order, and innumerable times more. This is the so-called **eternal recurrence**.

Eternal recurrence is usually read as an existential thought experiment. But in his unpublished notebooks, Nietzsche also attempted to prove it as a cosmological fact. And I do not think this attempt is a fanciful one.

In this post, I formulate and prove a restricted form of eternal recurrence in the language of measure-theoretic dynamical systems. To state the conclusion, from the Poincaré recurrence theorem and reasonable hypotheses about spacetime, one can show the following.

> In almost every world, every finite segment of history recurs infinitely often in an arbitrarily close form.

Of course, "almost every" and "arbitrarily close" are doing a great deal of work here. More on these qualifications mean are discussed in the final section.

## Setup

Throughout, $X$ is a **separable metric space**, i.e. $X$ has a countable dense subset. If we suppose that our universe is a cube filled with finitely many particles, then the state space of the universe is $X = [0, 1]^{6n}$ (where $n$ is the total number of particles in the universe), and $([0, 1] \cap \mathbb{Q})^{6n}$ is a countable dense subset of $X$.

Let $X$ be the state space of the universe, and $T: X \to X$ be the dynamics over one unit of time.

> **Definition.** A **life** of length $N$ starting from the state $x$ is defined as
>
> $$
> \Phi_N(x) = (x, Tx, \ldots, T^{N-1}x) \in X^N
> $$
>
> We also define a metric $D$ on $X^N$ as follows.
>
> $$
> D\big((x_i)_{i<N}, (y_i)_{i<N}\big) = \max_{0 \le i < N} d(x_i, y_i)
> $$

## Theorem

> **Theorem (Restricted Eternal Recurrence).** Let $\mu$ be a **finite measure** on the Borel sets of $X$, and let $T: X \to X$ be measurable and $\mu$-preserving; that is, $\mu(T^{-1}A) = \mu(A)$ for every Borel set $A$. Then for $\mu$-almost every $x \in X$, the following holds.
>
> > For every $N \in \mathbb{N}$ and $\varepsilon > 0$, there are infinitely many $n$ such that $D(\Phi\_N(x), \Phi\_N(T^n x)) < \varepsilon$.

That is, in almost every world, the history of the next $N$ units of time recurs infinitely many times, up to an error of $\varepsilon$.

> Note that ergodicity is not required. Ergodicity is needed to guarantee that a life which has never been realized will eventually be realized. To show that a life which has already been realized will recur, the finiteness of the measure and the separability of the state space suffice.

## The Poincaré Recurrence Theorem

The core of the proof is the following theorem.

> **Poincaré Recurrence Theorem.** Under the hypotheses of the theorem above, if $A \subseteq X$ is a measurable set, then $\mu$-almost every point of $A$ returns to $A$ infinitely often.

**Proof.** Let $B$ be the set of points of $A$ that never return to $A$. That is,

$$
B = \{ x \in A : \forall n \ge 1 \;\; T^n x \notin A \}
$$

We first show that $B, T^{-1}B, T^{-2}B, \ldots$ are pairwise disjoint. For $j < k$, suppose $x \in T^{-j}B \cap T^{-k}B$. Then $y = T^j x \in B$, while $T^{k-j}y = T^k x \in B \subseteq A$. That is, $y$ returns to $A$, which contradicts $y \in B$.

By measure preservation, each of these sets has measure $\mu(B)$. Since the sum of the measures of infinitely many pairwise disjoint sets cannot exceed $\mu(X) < \infty$, it follows that $\mu(B) = 0$.

Now consider a point $x$ that returns to $A$ only finitely many times. If $k$ is the time of the last return of $x$, then $T^k x \in B$. Hence the set of such points is contained in $\bigcup\_k (A \cap T^{-k}B)$. Since each $T^{-k}B$ has measure $\mu(B) = 0$, this set also has measure zero. ■

## Proof of the Theorem

**Proof.** Since $X$ is separable, so is $X^N$, and hence $X^N$ has a countable dense subset $Q\_N$. For each $q \in Q\_N$ and $r \in \mathbb{Q}^+$, define

$$
A_{N,q,r} = \Phi_N^{-1}\big( B(q, r) \big)
$$

Since $T$ is measurable, so is $\Phi\_N$, and therefore $A\_{N,q,r}$ is a measurable set. Applying the lemma to each $A\_{N,q,r}$, we obtain a null set $E\_{N,q,r}$ consisting of the points that do not return to that set infinitely often. Now let $E$ be the union of the sets $E\_{N,q,r}$ over all $N, q, r$. Since $E$ is a union of countably many null sets, $\mu(E) = 0$.

Take any $x \notin E$ and any $N, \varepsilon$. By the density of $Q\_N$, we can choose $q \in Q\_N$ and $r \in \mathbb{Q}^+$ such that $D(\Phi\_N(x), q) < r < \varepsilon/2$. Then $x \in A\_{N,q,r}$, and since $x \notin E$, there are infinitely many $n$ such that $T^n x \in A\_{N,q,r}$. For each such $n$, the triangle inequality gives

$$
D(\Phi_N(T^n x), \Phi_N(x)) \le D(\Phi_N(T^n x), q) + D(q, \Phi_N(x)) < 2r < \varepsilon \quad \blacksquare
$$

## Discussion

The theorem above differs from Nietzsche's eternal recurrence in four respects.

- **It is approximate.** What returns is not the same life but a life within $\varepsilon$ of it. Apart from exceptions of measure zero, exactly the same life never comes again.
- **It holds only in almost every world.** Each individual history of the actual world is, taken by itself, a set of measure zero. So the claim that our world does not belong to the exceptional null set $E$ is a separate assumption of **typicality**.
- **Only finite segments recur.** For an entire infinite history to recur exactly, the orbit would have to be periodic.
- **The hypotheses are strong.** We need a finite invariant measure, determinism, and separability.

In my view, the finite invariant measure is the hardest of these assumptions to accept, determinism the next hardest, and separability the easiest. I therefore offer a brief defense of the finite invariant measure and of determinism.

### Finite Invariant Measure

Our universe may be actually infinite, or it may be potentially infinite (for instance, if the universe is finite in size at every moment but expands without bound). In such cases, recurrence cannot in general be expected. However, what (the restricted form of) eternal recurrence requires is not the exact return of states but the return of "sufficiently similar" lives. So if we identify sufficiently similar states, we may assume that the resulting quotient set is finite, and with this we can replace the assumption of a finite invariant measure by a different assumption. A few points of caution are in order, however.

First, "sufficient similarity" cannot be used as an equivalence relation as it stands, since similarity is in general not transitive. Instead, partition the state space into finitely many cells $P\_1, \ldots, P\_k$ of observationally indistinguishable states, and identify two states that belong to the same cell, writing $x \sim y$. Then $\sim$ is automatically an equivalence relation, and a life of length $N$ is described by a sequence of cell indices $(i\_0, \ldots, i\_{N-1})$. There are only $k^N$ such sequences.

But this alone is not enough. Even if the quotient set $X/{\sim}$ is finite, for dynamics to be defined on it we need the **congruence condition** $x \sim y \implies Tx \sim Ty$. Without this condition, two states starting in the same cell could move into different cells, so the dynamics at the coarse-grained level of description would not be deterministic. For the same reason, restricting the discussion to "a finite universe of sufficiently large size" is meaningful only when that region is $T$-invariant.

Interestingly, if the congruence condition holds, no measure is needed at all. Since $T$ induces a map $\bar{T}$ on the finite set $X/{\sim}$, the pigeonhole principle implies that the sequence of cells eventually becomes periodic. Moreover, if $\bar{T}$ is injective, that is, if information is preserved even at the coarse-grained level of description, then the cells cycle periodically (the proof in Nietzsche's notebooks also relies on a similar idea). Thus the measure-theoretic assumption of a finite invariant measure can be replaced by the assumption that "the universe has, at finite resolution, a macrodynamics that is autonomous (i.e., $T$-invariant) and reversible (i.e., $\bar{T}$ is injective)."

### Determinism

Determinism is commonly thought to have been refuted by quantum mechanics, but this is a distortion of the debate over the interpretation of quantum mechanics. A variety of deterministic interpretations of quantum mechanics have been proposed, and they are consistent with all experimental results to date.