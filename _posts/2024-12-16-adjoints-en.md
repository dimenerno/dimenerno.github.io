---
layout: post
title: "An Intuitive Understanding of Adjoints"
date: 2024-12-16
tags: [Mathematics, Category-theory]
lang: en
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

One of the central concepts in category theory is that of an adjoint.

> **Definition.** Let $\mathcal{A}, \mathcal{B}$ be categories, and let $F: \mathcal{A} \to \mathcal{B}, G: \mathcal{B} \to \mathcal{A}$ be functors. We say that $F$ is a **left adjoint** to $G$ if for any $A \in \mathcal{A}, B \in \mathcal{B}$, there exists a natural bijection between $\mathcal{B}(F(A), B)$ and $\mathcal{A}(A, G(B))$. That is,
>
> $$\begin{gather}
> (F(A) \xrightarrow{g} B) \quad \mapsto \quad (A \xrightarrow{\bar{g}} G(B))\\
> (A \xrightarrow{f} G(B)) \quad \mapsto \quad (F(A) \xrightarrow{\bar{f}} B)
> \end{gather}$$
>
> We also call $G$ the **right adjoint** to $F$. This is denoted symbolically as $F \dashv G$.

The author previously understood this definition only at a formal level, but has recently discovered several ways to understand adjoints intuitively.

### 1. Adjoints as Type Conversions

Left adjoints can be likened to downcasting type conversions in programming, whilst right adjoints correspond to upcasting type conversions.

For instance, let $\mathbf{Z}$ be a category whose objects are integers, with a unique morphism $x \to y$ existing if and only if $x \leq y$. Similarly, let $\mathbf{Z}^2$ be a category whose objects are pairs of integers, with a unique morphism $\mathbf{x} \to \mathbf{y}$ existing if and only if $\mathbf{x} \preceq \mathbf{y}$ (where $\preceq$ denotes the lexicographic order).

If $F: \mathbf{Z} \to \mathbf{Z}^2, G: \mathbf{Z}^2 \to \mathbf{Z}$ are defined by $F(x) = (x, 0)$ and $G(x, y) = x$ respectively, then they naturally become functors. Moreover, $F \dashv G$. This is because for $x \in \mathbf{Z}, y \in \mathbf{Z}^2$, we have $F(x) \leq y$ if and only if $x \leq G(y)$.

![](https://velog.velcdn.com/images/dimenerno/post/8040c20d-c1bc-4d92-bd45-256f48b79d75/image.png)

The above discussion can be expressed in code as follows:

```java
class Z {
	int x;
}

class Z2 extends Z {
	// int x;
	int y;
}

Z2 F(Z z) {
	return new Z2(z, 0);
}

Z G(Z2 z2) {
	return new Z(z2.x);
}
```

Note that in this code, $F$ essentially corresponds to downcasting, whilst $G$ corresponds to upcasting.

### 2. Adjoints as Approximations

When $F \dashv G$, the functors $F$ and $G$ can be thought of as methods for approximating objects in $\mathcal{A}$ and $\mathcal{B}$ with respect to each other. In particular, the left adjoint represents approximation 'from left to right', whilst the right adjoint represents approximation 'from right to left'.

For example, let $\mathbf{Z}$ be a category whose objects are integers, with a unique morphism $x \to y$ existing if and only if $x \leq y$. Similarly, let $\mathbf{R}$ be a category whose objects are real numbers, with a unique morphism $x \to y$ existing if and only if $x \leq y$. Then $\lceil \cdot \rceil, \lfloor \cdot \rfloor$ become functors $\mathbf{R} → \mathbf{Z}$ in the standard manner, and the inclusion map $\iota$ becomes a functor $\mathbf{Z} → \mathbf{R}$. Moreover, one can verify that $\lceil \cdot \rceil \dashv \iota \dashv \lfloor \cdot \rfloor$.

![](https://velog.velcdn.com/images/dimenerno/post/e26ee728-09b0-4280-ac4c-511f89cef615/image.png)

That is, $\lceil \cdot \rceil$ is a transformation that 'lifts from left to right' by mapping $r$ to $\lceil r \rceil$ with $r \leq \lceil r \rceil$, whilst $\lfloor \cdot \rfloor$ is a transformation that 'pulls from right to left' by mapping $r$ to $\lfloor r \rfloor$ with $\lfloor r \rfloor \leq r$.

Furthermore, let $I$ and $T$ be the initial object and terminal object of $\mathcal{A}$ respectively. That is, for any $A \in \mathcal{A}$:

- There exists a unique morphism $I \to A$.
- There exists a unique morphism $A \to T$.

For instance, in $\mathbf{Set}$, the empty set is the initial object and any singleton set is a terminal object.

For the singleton category $\mathcal{U}$, there exists a unique functor $F: \mathcal{A} \to \mathcal{U}$. Let $G\_I, G\_T: \mathcal{U} \to \mathcal{A}$ be functors with images $I$ and $T$ respectively. Then by a similar principle to the previous case, one can verify that $G\_T \dashv F \dashv G\_I$. (Since the terminal object is the 'rightmost' object, $G\_T$ represents approximation 'from left to right', whilst since the initial object is the 'leftmost' object, $G\_I$ represents approximation 'from right to left'.)

### 3. Adjoints as Construction and Destruction

Left adjoints signify construction, whilst right adjoints signify destruction. Therefore, free functors are generally left adjoints, whilst forgetful functors are right adjoints.

For instance, let $\mathbf{Grp}$ be the category of groups and $\mathbf{Mon}$ be the category of monoids. Let $F$ be the free functor and $U$ be the forgetful functor. Define $R: \mathbf{Mon} → \mathbf{Grp}$ as follows:

- $R(M) = \lbrace  m \in M : \exists m^{-1} \in M \rbrace$
- $R(f): m \mapsto f(m)$

Then the following diagram holds, yielding $F \dashv U \dashv R$.

![](https://velog.velcdn.com/images/dimenerno/post/1640d6b4-bd6a-4098-9fe8-e9a7ab164041/image.png)

One can understand that $U \dashv R$ because $R$ is more destructive than $U$.
