---
layout: post
title: "Categorical Proofs of the Commutative Law, Distributive Law, and Exponential Law"
date: 2025-12-27
tags: ["Mathematics", "Category Theory"]
related:
lang: en
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

> **Theorem.**
>
> 1. Distributive law: $(A + B) \times C = A \times C + B \times C$
> 2. Exponential law: $(A \times B)^C = A^C \times B^C$

In a [previous post](https://dimenerno.github.io/2025/04/02/box-v-product), we explored categorical sums and products. Sums are a type of colimit, while products are a type of limit. From this observation, the distributive and exponential laws can be generalised into the following theorem.

> **Theorem.** Left adjoints preserve colimits, and right adjoints preserve limits.

The precise meaning of this theorem is as follows. Let $F: \mathcal{A} \to \mathcal{B}$ and $G: \mathcal{B} \to \mathcal{A}$, and suppose $F \dashv G$. The statement that $G$ **preserves limits** means that for any small category $\mathbf{I}$ and functor $D : \mathbf{I} \to \mathcal{B}$, the following holds:

> If $\big(B \xrightarrow{q\_I} D(I)\big)\_{I \in \mathbf{I}}$ is a limit cone in $\mathcal{B}$, then $\big(G(B) \xrightarrow{G(q\_I)} G(D(I))\big)\_{I \in \mathbf{I}}$ is a limit cone in $\mathcal{A}$.

From this, we can deduce the following when $G$ preserves limits:

$$
G\left(\lim_{\leftarrow \mathbf{I}} D\right) \cong \lim_{\leftarrow \mathbf{I}} G \circ D
$$

For colimits, the definition is analogous, replacing cones with cocones.

On the other hand, for any $X, Y, Z \in \mathbf{Set}$, the following holds: $\hom(X \times Y, Z) \cong \hom(X, Z^Y)$ (this is a common technique in functional programming known as currying). From this, the following adjoint relationship arises:

$$
(-) \times Y \dashv (-)^Y
$$

Thus, the functor $(-) \times Y$ preserves colimits, and the functor $(-)^Y$ preserves limits. From this, we can derive the generalised distributive and exponential laws.

> **Theorem.** For sets $A, B, Y$, if $A$ and $B$ are disjoint, the following holds:
>
> 1. $(A + B) \times Y \cong (A \times Y) + (B \times Y)$
> 2. $(A \times B)^Y \cong A^Y \times B^Y$

Here, $+$ denotes the disjoint union of sets, which is equivalent to $\sqcup$, but the notation $+$ is used to emphasise its similarity to the distributive law. The left-hand side corresponds to $G\left(\lim\_{\leftarrow \mathbf{I}} D\right)$, while the right-hand side corresponds to $\lim\_{\leftarrow \mathbf{I}} G \circ D$. By applying cardinality operations to the sets in the above theorem, we recover the distributive and exponential laws for natural numbers.

Additionally, the following property of limits is also known (the $\bullet, -$ notation is explained in [this post](https://dimenerno.github.io/2025/03/21/yoneda)):

> **Theorem.** Let $\mathbf{I}$ and $\mathbf{J}$ be small categories, and let $\mathcal{S}$ be a locally small category that admits limits of shape $\mathbf{I}$ and $\mathbf{J}$. For $D: \mathbf{I} \times \mathbf{J} \to \mathcal{S}$, the following holds:
>
> $$
> \lim_{\leftarrow \mathbf{J}}\lim_{\leftarrow \mathbf{I}} D(\bullet, -) \cong \lim_{\leftarrow \mathbf{I} \times \mathbf{J}} D \cong \lim_{\leftarrow \mathbf{I}}\lim_{\leftarrow \mathbf{J}} D(-, \bullet)
> $$

In other words, limits satisfy the commutative law. This can be thought of as a generalisation of the commutative laws for addition and multiplication.

