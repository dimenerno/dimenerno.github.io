---
layout: post
title: "Fréchet Filters and Nonstandard Natural Numbers"
date: 2025-01-22
lang: en
tags: [Mathematics, Logic]
related:
  - "Fréchet Filters and Nonstandard Natural Numbers"
  - "Łoś's Theorem"
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

According to the Löwenheim-Skolem theorem, there exist models that are elementarily equivalent to the standard arithmetic model but structurally nonisomorphic. In other words, there exist number systems that satisfy all first-order logical statements satisfied by the natural numbers, yet are not the natural numbers themselves.

In this article (series), we construct the **hypernaturals**, a representative nonstandard model of arithmetic, using **ultraproducts**, and prove **Łoś's theorem**, which guarantees that this model is elementarily equivalent to the standard arithmetic model.

## 1. Overview

By the compactness theorem, we know that first-order logic cannot distinguish between the finite and the infinite. Therefore, we might reasonably expect to be able to define a model that is first-order logically indistinguishable from the natural numbers by appropriately employing infinity.

Accordingly, let us define the hypernaturals $[0], [1], [2], \dots$ as follows:

$$
\begin{aligned}
[0] &= (0, 0, 0, 0, 0, \dots) \\
[1] &= (1, 1, 1, 1, 1, \dots) \\
[2] &= (2, 2, 2, 2, 2, \dots)
\end{aligned}
$$

However, upon reflection, requiring all entries to be 0 in order to regard something as $[0]$ is excessively stringent. For instance, it would be natural to regard the tuple $(1, 1, 0, 0, 0, \dots)$, where only the first two entries are 1 and all remaining entries are 0, as $[0]$ as well. Therefore, let us consider any tuple as $[n]$ if all but finitely many entries equal $n$. That is,

$$
[n] = \lbrace (x_1, x_2, x_3, \dots) \in \mathbb{N}^\omega : \lbrace i \in \mathbb{N}: x_i \neq n \rbrace \text{ is finite} \rbrace
$$

However, this now gives rise to the following problem. Should the following tuple be considered as $[0]$ or as $[1]$?

$$
(0, 1, 0, 1, 0, 1, \dots)
$$

To resolve this ambiguity, we shall arbitrarily adopt either the set of even numbers or the set of odd numbers. If we adopt the set of even numbers, the above tuple becomes $[0]$ (assuming indices begin from 0), whilst if we adopt the set of odd numbers, it becomes $[1]$.

However, this adoption process requires careful consideration. If the set of multiples of 6 is adopted, then the set of multiples of 3 must also be adopted for logical consistency, since tuples satisfying the latter trivially satisfy the former. Moreover, since the set of multiples of 3 is adopted, the set of numbers that are _not_ multiples of 3 must be rejected. The result of this process of adoption and rejection for all subsets of the natural numbers will correspond to a structure called an **ultrafilter**. Given an appropriate ultrafilter, we can map any tuple to a hypernatural based upon it, and this entire process is called an **ultraproduct**.

## 2. Definition of Ultrafilters

> **Definition.** Let $X$ be a set. A collection $\mathcal{F}$ of subsets of $X$ is called a **filter** on $X$ if it satisfies the following:
>
> 1. $X \in \mathcal{F}$
> 2. $\varnothing \not\in \mathcal{F}$
> 3. Upward closure: $A \in \mathcal{F}, A \subset B \implies B \in \mathcal{F}$
> 4. Finite intersection closure: $A, B \in \mathcal{F} \implies A \cap B \in \mathcal{F}$

Intuitively, a filter is a "collection of large sets". From this perspective, axioms 1 and 2 express the trivial principle that the whole set is large and the empty set is small. Axiom 3 expresses the principle that a set containing a large set is large, whilst axiom 4 expresses the principle that finite intersections of large sets remain large.

As an aside, filters are used not only in ultraproducts but also in converting models of fuzzy logic into models of classical logic. In this context, filters become "collections of true statements" rather than "collections of large sets". Moreover, the conversion from fuzzy logic to classical logic is also one way of understanding Cohen's forcing method.

Filters can be understood more intuitively through **Hasse diagrams**. The shaded region represents a filter on $X = \lbrace 0, 1, 2 \rbrace$. If we understand the Hasse diagram as a flow of water from $\varnothing$ to $X$, the region where ink spreads when dropped at a particular point forms a filter.

<img src="https://velog.velcdn.com/images/dimenerno/post/86ac1e36-13fe-46fb-a9cc-b6749d1c5a69/image.png" width="400px" style="margin: 20px auto 30px auto;">

By axioms 2 and 4, if $A \in \mathcal{F}$, then $A^c := X \setminus A \notin \mathcal{F}$. Strengthening this fact by requiring that for _every_ subset of $X$, either the set or its complement is in the filter, we obtain the definition of an **ultrafilter**.

> **Definition.** A filter $\mathcal{F}$ on $X$ is an ultrafilter if it satisfies:
>
> $$
> \forall A \in \mathcal{P}(X) : A \in \mathcal{F} \lor A^c \in \mathcal{F}
> $$

The filter in the previous diagram is an ultrafilter. Note that an ultrafilter occupies exactly half of the Hasse diagram.

## 3. Ultrafilters on Infinite Sets

A filter with a least element is called a principal filter, whilst a filter that is not principal is called a free filter. All filters we have seen so far are principal filters, which perfectly match the image of "the region where ink dropped at a specific point spreads".

Unlike principal filters, free filters are difficult to grasp intuitively, due to the following theorem:

> **Theorem.** Every filter on a finite set is principal.

_Proof._ Suppose $A_0 \in \mathcal{F}$ is not a minimal element. Then there exists some $B \in \mathcal{F}$ such that $A_1 = A_0 \cap B \subsetneq A$. That is, $\|A_1\| < \|A_0 \|$. If $A_1$ is a minimal element, the proof is complete; otherwise, we repeat the same process. Since the given set has finite cardinality, this process cannot continue indefinitely and must terminate at a minimal element. ■

This theorem can also be understood as follows: a free filter is one that contains an infinitely descending chain of subsets within it (and thus cannot reach a minimal element through finite intersections alone) but never reaches the empty set. Accordingly, only filters on infinite sets can be free filters.

![](https://velog.velcdn.com/images/dimenerno/post/3769cca8-52df-4faa-af87-4225e588e89d/image.png)

Let us examine a concrete example.

> **Definition.** Let $X$ be an infinite set. A subset $A \subset X$ is **cofinite** if $X \setminus A$ is a finite set.

> **Theorem.** Let $\mathcal{F}$ be the collection of all cofinite subsets of $\mathbb{N}$. Then $\mathcal{F}$ is a free filter.

The proof is left as an exercise. The $\mathcal{F}$ in the above theorem is called the **Fréchet filter**. For instance, the set of numbers greater than 10, $\lbrace 11, 12, 13, 14, \dots \rbrace$, is an element of $\mathcal{F}$, but the set of even numbers is not an element of $\mathcal{F}$.

The Fréchet filter is not an ultrafilter. However, it can be extended to an ultrafilter by the following theorem:

> **Theorem.** Every filter can be extended to an ultrafilter.

_Proof._ Let $\Omega$ be the collection of all filters on $X$, ordered by inclusion. Under this ordering, the union of filters forming a chain is itself a filter, as can be shown without difficulty. Therefore, by Zorn's lemma, $\Omega$ has a maximal element $\mathcal{U}$. If $\mathcal{U}$ is not an ultrafilter, then there exists some $A_0 \subset X$ such that $A_0, A_0^c \notin U$. Define $\mathcal{V}$ as follows:

$$
\mathcal{V} = \mathcal{U} \cup \lbrace A \subset X : A_0 \subset A \rbrace \cup \lbrace A_0 \cap U : U \in \mathcal{U} \rbrace
$$

One can verify that $\mathcal{V}$ is a filter. This contradicts the maximality of $\mathcal{U}$. Therefore, $\mathcal{U}$ is an ultrafilter. ■

Hence, the set of natural numbers possesses a free ultrafilter extending from the Fréchet filter. Let us call this filter the **Fréchet ultrafilter**.

![](https://velog.velcdn.com/images/dimenerno/post/30387200-2e80-4a74-82a2-b696ffe7e1cd/image.png)

## 4. The Hypernaturals

To summarise our discussion thus far, free ultrafilters, including the Fréchet ultrafilter, possess the following properties:

1. They contain all cofinite sets as elements.
2. They do not contain finite sets as elements.
3. For $A \subset \mathbb{N}$, either $A$ is an element of the filter or $A^c$ is an element of the filter.

Thanks to these three properties, the Fréchet ultrafilter is perfectly suited to resolving the ambiguity problem we encountered when outlining the basic idea of ultraproducts in the introduction. We can now define the hypernaturals as follows:

Let $\mathcal{U}$ be a free ultrafilter. Define the following equivalence relation on $\mathbb{N}^\omega$:

$$
(n_0, n_1, n_2, \dots) \sim (m_0, m_1, m_2, \dots) \iff \lbrace i \in \mathbb{N} : n_i = m_i \rbrace \in \mathcal{U}
$$

It is not difficult to verify that this is indeed an equivalence relation. Therefore, we can take equivalence classes as follows:

$$
\mathbb{N}^* := \mathbb{N}^\omega/\sim
$$

We call $\mathbb{N}^*$ the **hypernaturals**. The reason we wrote hypernaturals as $[n]$ in the introduction is that the definition of hypernaturals consists of equivalence classes. What remains is to define operations and predicate relations on the hypernaturals.

Addition of hypernaturals is defined naturally as follows:

$$
(n_0, n_1, \dots) + (m_0, m_1, \dots) = (n_0 + m_0, n_1 + m_1, \dots)
$$

There is one subtle issue here. Since the definition of hypernaturals involves equivalence classes, we must show that the result of the above addition is unaffected regardless of which representative of an equivalence class we choose. That is, for

$$
\begin{gather}
(n_0, n_1, \dots), (n_0', n_1',  \dots) \in [n]\\
(m_0, m_1,  \dots), (m_0', m_1', \dots) \in [m]
\end{gather}
$$

we must show that

$$
(n_0, n_1, \dots) + (m_0, m_1,  \dots), (n_0', n_1', \dots) + (m_0', m_1', \dots) \in [n + m]
$$

Fortunately, this is not difficult to establish.

Multiplication and successor can be defined similarly. Meanwhile, binary relations such as $<$ are defined as follows:

$$
(n_0, n_1, n_2, \dots) < (m_0, m_1, m_2, \dots) \iff \lbrace i \in \mathbb{N} : n_i < m_i \rbrace \in \mathcal{U}
$$

This definition can be naturally generalised to ternary and quaternary relations.

We have thus defined the hypernaturals. In the next article, we shall examine various nonstandard features of the hypernaturals and Łoś's theorem, which shows that despite such nonstandardness, the hypernaturals and natural numbers cannot be distinguished by first-order logic.

