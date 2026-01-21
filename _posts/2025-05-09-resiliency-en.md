---
layout: post
title: "η Sets"
date: 2025-05-09
lang: en
tags: ["Mathematics", "Set Theory"]
related:
   - "Set-Theoretic Definition of Rational and Real Numbers"
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

The key principle in Cantor's back-and-forth argument, which demonstrates that all countable dense unbounded linear orders are isomorphic, is the following.

> **Countable Dedekind Property.** Let $(L, <)$ be a linear order. The following are equivalent:
>
> 1. $(L, <)$ is dense and unbounded.
> 2. For finite subsets $C, D$ of $L$, if $C < D$ then there exists $y \in L$ such that $C < y < D$.

Here $C < D$ is shorthand notation for $\forall c \in C, d \in D : c < d$.

From the finite Dedekind property, the isomorphism theorem can be proved as follows. Let $(A, <_A), (B, <_B)$ be two countable dense unbounded linear orders. Since they are countable, the elements of $A, B$ can be indexed by natural numbers. Define $f: A \to B$ inductively as follows:

1. Set $f(a_0) = b_0$ and let $n = 1$.
2. Check whether $a_n \in \mathrm{dom} f$.
    1. If $a_n \in \mathrm{dom} f$, proceed to step 3.
    2. If $a_n \notin \mathrm{dom} f$, by the lemma there exists $y \in B$ such that $C < y < D$ for $C = \lbrace f(a_k) : k < n, a_k <_A a_n \rbrace$ and $D = \lbrace f(a_k) : k < n, a_k >_A a_n \rbrace$. Define $f(a_n) = y$.
3. Check whether $b_n \in \mathrm{ran} f$.
    1. If $b_n \in \mathrm{ran} f$, proceed to step 4.
    2. If $b_n \notin \mathrm{ran} f$, by the lemma there exists $x \in A$ such that $C < x < D$ for $C = \lbrace f^{-1}(b_k) : k < n, b_k <_B b_n \rbrace$ and $D = \lbrace f^{-1}(b_k) : k < n, b_k >_B b_n \rbrace$. Define $f(x) = b_n$.
4. Update $n$ to $n + 1$ and return to step 2.

The function $f$ obtained as the inductive limit of the above process is an isomorphism between $A$ and $B$.

However, the following generalisation of the above lemma does not hold in general.

> **(False Statement)** Let $(L, <)$ be a linear order. The following are equivalent:
>
> 1. $(L, <)$ is dense and unbounded.
> 2. For subsets $C, D$ of $L$ with cardinality less than that of $L$, if $C < D$ then there exists $y \in L$ such that $C < y < D$.

For example, $(\mathbb{R} \setminus \lbrace 0 \rbrace, <)$ is a dense unbounded linear order, and when $C = (-\infty, 0) \cap \mathbb{Q}$ and $D = (0, \infty) \cap \mathbb{Q}$, we have $C < D$ and $\|C\|, \|D\| < \|\mathbb{R}\|$, but there exists no real number $y$ satisfying $C < y < D$.

If the generalisation of the above lemma held, one could prove the uniqueness of dense unbounded linear orders of cardinality $\kappa > \aleph_0$ as follows. Assuming the axiom of choice, $A$ and $B$ can be well-ordered to be order-isomorphic to $\kappa$. Now define $f$ by transfinite induction for ordinals $\alpha < \kappa$.

1. Set $f(a_0) = b_0$ and let $\alpha = 1$.
2. Check whether $a_\alpha \in \mathrm{dom} f$.
    1. If $a_\alpha \in \mathrm{dom} f$, proceed to step 3.
    2. If $a_\alpha \notin \mathrm{dom} f$, by the generalised lemma there exists $y \in B$ such that $C < y < D$ for $C = \lbrace f(a_\beta) : \beta < \alpha, a_\beta <_A a_\alpha \rbrace$ and $D = \lbrace f(a_\beta) : \beta < \alpha, a_\beta >_A a_\alpha \rbrace$. Define $f(a_\alpha) = y$.
3. Check whether $b_\alpha \in \mathrm{ran} f$.
    1. If $b_\alpha \in \mathrm{ran} f$, proceed to step 4.
    2. If $b_\alpha \notin \mathrm{ran} f$, by the generalised lemma there exists $x \in A$ such that $C < x < D$ for $C = \lbrace f^{-1}(b_\beta) : \beta < \alpha, b_\beta <_B b_\alpha \rbrace$ and $D = \lbrace f^{-1}(b_\beta) : \beta < \alpha, b_\beta >_B b_\alpha \rbrace$. Define $f(x) = b_\alpha$.
4. Complete $f$ by transfinite induction.

However, since the generalised lemma does not hold, Cantor's back-and-forth argument cannot be applied to show that uncountable dense unbounded linear orders are unique. Indeed, uncountable dense unbounded linear orders are not unique—besides $\mathbb{R}$, there are others such as the lexicographic order on $\lbrace 0\rbrace \times \mathbb{R} \sqcup \lbrace 1\rbrace \times \mathbb{Q}$.

To what extent can the property of the lemma be generalised? The concept related to this question is as follows.

> **Definition.**
>
> 1. A family of sets $\mathcal{C}$ has the **finite intersection property** if the finite intersection of set-elements from $\mathcal{C}$ is always non-empty.
> 2. A family of sets $\mathcal{C}$ is **resilient** if, whenever $\mathcal{D}$ is a subfamily of $\mathcal{C}$ with the finite intersection property, we have $\bigcap_{D \in \mathcal{D}} D \neq \varnothing$.

Readers familiar with topology will recognise this as a familiar concept.

> **Cantor's Nested Interval Theorem.** $K$ is compact if and only if every collection $\mathcal{F}$ of closed subsets of $K$ is resilient.

**Proof.** $(\Rightarrow)$ Suppose $\mathcal{F}$ is not resilient. Then there exists a collection $\mathcal{C}$ of closed sets such that $\mathcal{C}$ has the finite intersection property but $\bigcap_{C \in \mathcal{C}} C = \varnothing$. By De Morgan's laws, $\bigcup_{C \in \mathcal{C}} C^c = K$. That is, $\lbrace C^c : C \in \mathcal{C} \rbrace$ is an open cover of $K$. Since $K$ is compact, this has a finite subcover. However, in this case, again by De Morgan's laws, for some finite $\mathcal{C}' \subset \mathcal{C}$ we have $\bigcap_{C \in \mathcal{C}'} C = \varnothing$. This contradicts the finite intersection property of $\mathcal{C}$.

$(\Leftarrow)$ The proof follows in almost exactly the same manner. ■

We can now generalise the lemma as follows.

> **Uncountable Dedekind Property.** Let $(L, <)$ be a linear order and let $\kappa$ be an uncountable cardinal. The following are equivalent:
>
> 1. $(L, <)$ is dense and unbounded. Moreover, any collection of fewer than $\kappa$ open intervals and half-lines is resilient.
> 2. For subsets $C, D$ of $L$, if $\|C\|, \|D\| < \kappa$ and $C < D$, then there exists $y \in L$ such that $C < y < D$.

**Proof.** $(\Rightarrow)$

#### i. $D = \varnothing$

Consider $\mathcal{C} = \lbrace (c, \infty) : c \in C \rbrace$. Since $\|\mathcal{C}\| = \|C\| < \kappa$, by the premise $\mathcal{C}$ is resilient. Since $\mathcal{C}$ has the finite intersection property, $\bigcap_{c \in C} (c, \infty) = (c', \infty)$. This $c'$ is the desired $y$.

#### ii. $C = \varnothing$

Almost identical to case i.

#### iii. $C, D \neq \varnothing$

Consider $\mathcal{E} = \lbrace (c, d) : c \in C, d \in D \rbrace$. By the cardinal arithmetic $\lambda \cdot \epsilon = \mathrm{max}(\lambda, \epsilon)$, we have $\|\mathcal{E}\| < \kappa$, and $\mathcal{E}$ is resilient. Since $\mathcal{E}$ has the finite intersection property ($\because$ countable Dedekind property), $\bigcap_{c \in C, d \in D} (c, d) = (c', d')$. Since $(c', d') \neq \varnothing$, there exists $y \in (c', d')$, which is the desired $y$.

$(\Leftarrow)$ That $(L, <)$ is dense and unbounded is trivial.

Let $\mathcal{E}$ be a collection of fewer than $\kappa$ open intervals and half-lines. Suppose $\mathcal{F} \subseteq \mathcal{E}$ has the finite intersection property. Then for $C = \lbrace c : (c, d) \in \mathcal{F} \text{ or } (c, \infty) \in \mathcal{F} \rbrace$ and $D = \lbrace d : (c, d) \in \mathcal{F} \text{ or } (-\infty, d) \in \mathcal{F}\rbrace$, we have $C < D$. Otherwise, for some $c' \in C, d' \in D$ we would have $d' < c'$, in which case for an open interval $(c', d'') \in \mathcal{F}$ with left endpoint $c'$ and an open interval $(c'', d') \in \mathcal{F}$ with right endpoint $d'$, we would have $(c', d'') \cap (c'', d') = \varnothing$, contradicting the finite intersection property of $\mathcal{F}$.

Therefore $C < D$, and by the condition there exists $y$ such that $C < y < D$. From this it follows that $y \in \bigcap_{I \in \mathcal{F}} I$, showing that $\mathcal{E}$ is resilient. ■

> **Definition.** A set satisfying the uncountable Dedekind property is called an [**$\eta$ set**](https://en.wikipedia.org/wiki/Η_set). In particular, a set satisfying the uncountable Dedekind property for $\kappa = \aleph_\alpha$ is called an $\eta_\alpha$ set.

$\eta$ sets were introduced by Hausdorff. $\eta$ sets are closely related to the concept of **saturation**, which we shall explore in the following article.
