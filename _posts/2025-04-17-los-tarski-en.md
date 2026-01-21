---
layout: post
title: "The Łoś-Tarski Preservation Theorem"
date: 2025-04-17
tags: ["Mathematics", "Logic", "Algebra"]
lang: en
related:
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

For subgroups $H, K$ of a group $G$, the intersection $H \cap K$ is always a group. The same holds for rings and fields. This can be explained as a consequence of the Łoś-Tarski theorem.

> _Notation._ In this article, $T$ is a first-order theory in language $\mathcal{L}$, and Fraktur letters $\mathfrak{M}, \mathfrak{N}, \dots$ denote $\mathcal{L}$-structures. Furthermore, we write the domains of $\mathfrak{M}, \mathfrak{N}, \dots$ as $M, N, \dots$ respectively.

## Basic Concepts

> **Definition.** When $N \subseteq M$ and the interpretation in $\mathfrak{N}$ is the restriction of the interpretation in $\mathfrak{M}$ to $N$, we call $\mathfrak{N}$ a **submodel** of $\mathfrak{M}$, and write $\mathfrak{N} \subseteq \mathfrak{M}$. Furthermore, $\mathfrak{M}$ is called an **extension** of $\mathfrak{N}$.

For example, $(2\mathbb{Z}, +)$ is a submodel of $(\mathbb{Z}, +)$, and $(\mathbb{Q}, +, \cdot)$ is a submodel of $(\mathbb{R}, +, \cdot)$.

> **Definition.** When $\mathfrak{M} \vDash \phi \iff \mathfrak{N} \vDash \phi$ for any $\mathcal{L}$-sentence $\phi$, we say that $\mathfrak{M}$ and $\mathfrak{N}$ are **elementarily equivalent**, and write $\mathfrak{M} \equiv \mathfrak{N}$.

By the [Löwenheim-Skolem theorem](https://dimenerno.github.io/2025/04/10/completeness-theorem/), if $\kappa$ is an infinite cardinal at least $\|\mathcal{L}\|$, then for any infinite structure $\mathfrak{M}$, there exists a model $\mathfrak{N}$ of cardinality $\kappa$ that is elementarily equivalent to $\mathfrak{M}$. (cf. Łoś-Vaught test)

> **Definition.** When $\mathfrak{M}$ and $\mathfrak{N}$ are structurally identical, they are called **isomorphic**, written $\mathfrak{M} \cong \mathfrak{N}$. Specifically, $\mathfrak{M} \cong \mathfrak{N}$ when there exists a bijection $\phi: M \to N$ such that for any function $f$ and relation $R$ in $\mathcal{L}$, the following holds for any $a_1, \dots, a_n \in M$:
>
> $$
> \begin{gather}
> \phi(f_\mathfrak{M}(a_1, \dots, a_n)) = f_\mathfrak{N}(\phi(a_1), \dots, \phi(a_n)), \\\\
> R_\mathfrak{M}(a_1, \dots, a_n) \iff R_\mathfrak{N}(\phi(a_1), \dots, \phi(a_n))
> \end{gather}
> $$

$(\mathbb{Z}, +)$ and $(2\mathbb{Z}, +)$ are isomorphic via $\phi: x \mapsto 2x$, but $(\mathbb{Q}, +, \cdot)$ and $(\mathbb{R}, +, \cdot)$ are not isomorphic.

The proof of the following theorem is almost trivial.

> **Theorem.** Two isomorphic structures are elementarily equivalent.

> **Definition.** Let $\mathfrak{N} \subseteq \mathfrak{M}$. When $\mathfrak{N} \vDash \phi[g] \iff \mathfrak{M} \vDash \phi[g]$ for any $\mathcal{L}$-formula $\phi$ and any assignment $g$ of free variables in $\mathfrak{N}$, we call $\mathfrak{N}$ an **elementary submodel** of $\mathfrak{M}$, and write $\mathfrak{N} \preceq \mathfrak{M}$.

Conditions 2 and 3 are stronger than 1, but 2 and 3 do not imply each other.

1. $\mathfrak{N} \subseteq \mathfrak{M}$, $\mathfrak{N} \equiv \mathfrak{M}$
2. $\mathfrak{N} \subseteq \mathfrak{M}$, $\mathfrak{N} \cong \mathfrak{M}$
3. $\mathfrak{N} \preceq \mathfrak{M}$

The reason why 2 and 3 do not imply each other is that 2 requires structural equivalence, making it no weaker than 3, while 3 requires equivalence for arbitrary assignments, making it no weaker than 2. For instance, for $\mathfrak{M} = (\mathbb{R}, +, \cdot)$, for $\mathfrak{N}$ to be an isomorphic submodel of $\mathfrak{M}$, it must be _structurally_ identical with respect to _constructible_ real numbers, whereas for $\mathfrak{N}$ to be an elementary submodel of $\mathfrak{M}$, the two models must be _elementarily_ equivalent with respect to _all_ real numbers.

|                       | 2                     | 3                   |
| --------------------- | --------------------- | ------------------- |
| 2 is no weaker than 3 | Structural identity   | Elementary identity |
| 3 is no weaker than 2 | Constructible objects | Arbitrary objects   |

For example, as we saw earlier, $(2\mathbb{Z}, +)$ is an isomorphic submodel of $(\mathbb{Z}, +)$, but considering the assignment $x \mapsto 2$ for $\exists y \; (y + y = x)$, we can see that it is not an elementary submodel.

## The Łoś-Tarski Theorem

Let $\mathfrak{M}$ be a model of $T$. What kind of theory must $T$ be for any submodel of $\mathfrak{M}$ to also be a model of $T$? The answer is given by the following theorem.

> **The Łoś-Tarski Preservation Theorem.** A necessary and sufficient condition for submodels of models of $T$ to also be models of $T$ is that $T$ is equivalent to a theory consisting of $\Pi_1$ sentences.

What $\Pi_1$ sentences are has been covered in the [arithmetic hierarchy](https://dimenerno.github.io/2025/02/07/arithmetic-hierarchy/) article. To explain briefly, these are theories having only $\forall$ as quantifiers. Intuitively, $\Pi_1$ sentences become easier to satisfy as the domain is restricted, so if $T$ is a $\Pi_1$ theory, then $T$ will be preserved under submodels. The necessity is somewhat more challenging to prove.

**Proof.** The sufficiency is almost trivial, so we prove only the necessity. We prove the following lemma.

> **Lemma.** Let $T$ be a consistent theory in language $\mathcal{L}$. When a set $\Delta$ of $\mathcal{L}$-sentences satisfies the following two conditions, $\Delta$ contains an axiomatisation of $T$.
>
> 1. $\Delta$ is closed under disjunction. That is, if $\phi, \psi \in \Delta$, then $\phi \lor \psi \in \Delta$.
> 2. For a model $\mathfrak{A}$ of $T$, if $\mathfrak{B}$ satisfies all sentences in $\Delta$ that are satisfied in $\mathfrak{A}$, then $\mathfrak{B}$ is also a model of $T$.

_Proof of the lemma._ Let $\Gamma = \lbrace  \delta \in \Delta : T \vDash \delta \rbrace $. To show that $\Delta$ contains an axiomatisation of $T$, it suffices to show the following:

$$
\mathfrak{B} \vDash \Gamma \implies \mathfrak{B} \vDash T
$$

Suppose $\mathfrak{B}$ is a model of $\Gamma$. Define:

$$
\Sigma = \{ \lnot \delta : \delta \in \Delta, \mathfrak{B} \not\vDash \delta \}
$$

We show that $T \cup \Sigma$ is a consistent theory. If $T \cup \Sigma$ were inconsistent, then for some $\lnot\delta_1, \dots, \lnot\delta_n \in \Sigma$, we would have $T \vdash \lnot(\lnot\delta_1 \land \cdots \land \lnot\delta_n)$, so $T \vdash \delta_1 \lor \cdots \lor \delta_n$. Since $\Delta$ is closed under disjunction, $\delta_1 \lor \cdots \lor \delta_n \in \Delta$. By the definition of $\Gamma$, $\delta_1 \lor \cdots \lor \delta_n \in \Gamma$, so $\mathfrak{B} \vDash \delta_1 \lor \cdots \lor \delta_n$. This contradicts $\lnot\delta_1, \dots, \lnot\delta_n \in \Sigma$.

Since $T \cup \Sigma$ is consistent, by the completeness theorem it has a model. Let this model be $\mathfrak{A}$. Since $\mathfrak{B}$ satisfies all sentences in $\Delta$ that $\mathfrak{A}$ satisfies, by assumption $\mathfrak{B}$ is a model of $T$. □

Now we proceed to the proof of the main theorem. Let $\Delta$ be the set of all $\Pi_1$ sentences in $\mathcal{L}$. Our goal is to show that $\Delta$ contains an axiomatisation of $T$. Since $\Pi_1$ sentences are closed under disjunction, by the lemma it suffices to show the following:

> Let $T$ be a theory that is preserved under submodels. For a model $\mathfrak{A}$ of $T$, if $\mathfrak{B}$ satisfies all $\Pi_1$ sentences satisfied in $\mathfrak{A}$, then $\mathfrak{B}$ is also a model of $T$.

Following the notation from [this article](https://dimenerno.github.io/2025/05/01/elementary-embedding/), let us define $E(\mathfrak{B})$. That is, $\mathfrak{M}$ satisfies $E(\mathfrak{B})$ when $\mathfrak{B} \preceq \mathfrak{M}$.

We show that $T \cup E(\mathfrak{B})$ is consistent. If $T \cup E(\mathfrak{B})$ were inconsistent, then there would exist some sentence $\phi(b_1, \dots, b_n)$ from $E(\mathfrak{B})$ such that $T \cup \lbrace  \phi \rbrace $ has no model. Therefore, $\mathfrak{A}$, being a model of $T$, cannot be extended to an $\mathcal{L} \cup \lbrace b_1, \dots, b_n \rbrace $ model that satisfies $\phi$. That is, the following holds:

$$
\mathfrak{A} \vDash \forall x_1 \cdots \forall x_n \lnot \phi(x_1, \dots, x_n)
$$

The right-hand side is a $\Pi_1$ sentence, so by assumption $\mathfrak{B} \vDash \forall x_1 \cdots \forall x_n \lnot \phi(x_1, \dots, x_n)$. However, since $\phi(b_1, \dots, b_n) \in E(\mathfrak{B})$, this is a contradiction. Therefore, $T \cup E(\mathfrak{B})$ is consistent and by the completeness theorem has a model $\mathfrak{C}$. Since $\mathfrak{C}$ satisfies $E(\mathfrak{B})$, we have $\mathfrak{B} \preceq \mathfrak{C}$. Meanwhile, since $\mathfrak{C}$ is a model of $T$, which is preserved under submodels, $\mathfrak{B}$ is a model of $T$. ■

## Applications

The first-order logical axiomatisation of groups differs depending on whether the identity element and inverse are represented as separate constant $e$ and function $(-)^{-1}$.

#### Without representation

Define theory $T_1$ in language $\mathcal{L}\_1 = \lbrace G, \cdot \rbrace $ as follows:

- $\forall x, y, z : (x \cdot y) \cdot z = x \cdot (y \cdot z)$
- $\exists x \forall y : x \cdot y = y \cdot x = y$
- $\forall x \exists y \forall z : (x \cdot y) \cdot z = (y \cdot x) \cdot z = z$

#### With representation

Define theory $T_2$ in language $\mathcal{L}\_2 = \lbrace G, \cdot, e, (-)^{-1} \rbrace $ as follows:

- $\forall x, y, z : (x \cdot y) \cdot z = x \cdot (y \cdot z)$
- $\forall x : x \cdot e = e \cdot x = x$
- $\forall x : x \cdot x^{-1} = x^{-1} \cdot x = e$

$T_1$ is not a $\Pi_1$ theory, but $T_2$ is a $\Pi_1$ theory. Therefore, by the Łoś-Tarski theorem, $T_1$ is not submodel-preserving while $T_2$ is preserving. That $T_1$ is not submodel-preserving means that a subset of a group being closed under the operation does not always make it a subgroup<small>(for instance, the subset $\mathbb{Z}_{> 0}$ of $\mathbb{Z}$ is closed under the operation but is not a group as it lacks inverses)</small>. Conversely, that $T_2$ is submodel-preserving means the following holds:

> For a group $G$, if a subset $H$ of $G$ satisfies the following, then $H$ is a subgroup of $G$:
>
> 1. Closed under the operation.
> 2. Closed under inverses.
> 3. Contains the identity element of $G$.

However, the following stronger result generally holds:

> For a group $G$, if a subset $H$ of $G$ satisfies the following, then $H$ is a subgroup of $G$:
>
> 1. Closed under the operation.
> 2. Closed under inverses.

That is, even in language $\mathcal{L}_3 = \lbrace  G, \cdot, (-)^{-1} \rbrace$ lacking a constant to denote the identity element, the theory of groups is submodel-preserving, which means there exists a $\Pi_1$ theory formalising groups in $\mathcal{L}_3$. With some clever thinking, one can indeed discover that the following theory $T_3$ exists:

- $\forall x, y, z : (x \cdot y) \cdot z = x \cdot (y \cdot z)$
- $\forall x, y : (x \cdot x^{-1}) \cdot y = y \cdot (x \cdot x^{-1}) = y$
