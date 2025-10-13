---
layout: post
title: "Adjoints, Normal Transformations, and the Spectral Theorem"
date: 2025-02-13
tags: [Mathematics, Algebra]
lang: en
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

In this article, we assume that all vector spaces are inner product spaces. Furthermore, all transformations are linear transformations.

## 1. Adjoints of Linear Transformations

> **Definition.** Let $(V, \langle \cdot \rangle_V), (W, \langle \cdot \rangle_W)$ be inner product vector spaces. For $T: V \to W$, the **adjoint** $T^\ast: W \to V$ of $T$ is the linear transformation satisfying the following condition:
>
> $$
> \forall v \in V, w \in W : \quad \langle w, Tv \rangle_W = \langle T^\ast w, v \rangle_V
> $$

If one recalls the [definition of adjoints in category theory](https://dimenerno.github.io/2025/02/13/three-definitions-of-adjoint/), the form of this equation is similar.

To justify this definition, we must show that the adjoint exists uniquely for every $T$. This follows from the Riesz representation theorem.

> **Riesz Representation Theorem.** Let $V$ be an inner product space. For $\phi \in V^\ast$, there exists a unique vector $v$ satisfying:
>
> $$
> \forall u \in V : \quad \phi(u) = \langle u, v \rangle
> $$

When $V$ is finite-dimensional, the above theorem is easily shown by choosing an orthogonal basis for $V$. When $V$ is a general Hilbert space, the proof is more involved and shall be omitted.

From the Riesz representation theorem, we can justify the definition of the adjoint as follows. Given $w \in W$, the mapping $v \mapsto \langle w, Tv \rangle$ is an element of $V^\ast$. Therefore, there exists some $u_w \in V$ such that

$$
\forall v \in V : \langle w, Tv \rangle = \langle u_w, v \rangle
$$

At this point, one can easily show that the mapping $w \mapsto u_w$ is linear. This linear mapping is the adjoint we seek.

> **Definition.** A linear mapping $T : V \to V$ satisfying $T^\ast = T$ is called **self-adjoint**.

When the matrix representation of $T : V \to W$ is $M$, the matrix representation of $T^\ast$ in the same basis is the conjugate transpose of $M$, namely $M^\dagger$ — this can be shown, albeit somewhat tediously, without much difficulty. Therefore, the matrix of a self-adjoint transformation is a Hermitian matrix.

> **Complex Self-Adjoint Criterion.** When $V$ is a complex vector space, $T: V \to V$ is self-adjoint if and only if $\langle Tv, v \rangle \in \mathbb{R}$ for any $v \in V$.

**Proof.** The necessary condition is trivial, so we prove the sufficient condition. First, we establish the following lemma.

_Lemma._ Let $V$ be a complex vector space. For $T : V \to V$, $T = 0$ if and only if $\langle Tv, v \rangle = 0$ for any $v \in V$.

_Proof of the lemma._ The necessary condition is trivial, so we prove the sufficient condition. For any $u, v \in V$,

$$
\langle T(u + v) , u + v \rangle = \langle Tu, v \rangle + \langle Tv, u \rangle = 0
$$

and

$$
\begin{aligned}
\langle T(u + iv), u + iv \rangle &= \langle T(u), iv \rangle + \langle T(iv), u \rangle \\ &= -i \langle Tu, v \rangle + i \langle Tv, u \rangle = 0
\end{aligned}
$$

Solving these two equations simultaneously yields $\langle Tu, v \rangle = 0$. From this, it is easy to show that $T = 0$. □

We now prove the main theorem. Since $\langle Tv, v \rangle \in \mathbb{R}$, we have $\langle Tv, v \rangle = \langle v, Tv \rangle$. Also, by the definition of the adjoint, $\langle Tv, v \rangle = \langle v, T^\ast v \rangle$. Therefore, $\langle v, (T - T^\ast)v \rangle = 0$. From the lemma, it follows that $T = T^\ast$. ■

> **Trivial Self-Adjoint Criterion.** Let $V$ be a real or complex vector space. For a self-adjoint transformation $T: V \to V$, $T = 0$ if and only if $\langle Tv, v \rangle = 0$ for any $v \in V$.

**Proof.** For complex vector spaces, this follows from the lemma above. Therefore, we prove only the case when $V$ is a real vector space. The necessary condition is trivial, so we prove the sufficient condition. For any $u, v \in V$,

$$
\begin{aligned}
\langle T(u + v), u + v \rangle &= \langle Tu, v \rangle + \langle Tv, u \rangle &&(\because \langle Tv, v \rangle = 0) \\
&= \langle Tu, v \rangle + \langle u, Tv \rangle &&(\because \mathrm{im} \langle \cdot \rangle \subset \mathbb{R}) \\
&= 2\langle Tu, v \rangle &&(\because T^\ast = T)
\end{aligned}
$$

That is, $\langle Tu, v \rangle = 0$ for any $u, v \in V$, so $T = 0$. ■

## 2. Normal Linear Transformations

> **Definition.** For $T : V \to V$, when $TT^\ast = T^\ast T$, we call $T$ **normal**.

Every self-adjoint transformation is normal, but the converse does not hold.

> **Normal Criterion.** Let $V$ be a real or complex vector space. $T: V \to V$ is normal if and only if $\lVert Tv \rVert = \lVert T^\ast v \rVert$ for any $v$.

**Proof.** This follows from the "Trivial Self-Adjoint Criterion". ■

> **Conjugacy of Normal Eigenvectors.** Let $V$ be a real or complex vector space, and let $T : V \to V$ be normal. When $v$ is an eigenvector of $T$ with eigenvalue $\lambda$, then $v$ is an eigenvector of $T^\ast$ with eigenvalue $\bar{\lambda}$.

**Proof.** When $T$ is normal, $T - \lambda I$ is also easily shown to be normal. Therefore,

$$
\lVert (T - \lambda I) v \rVert = \lVert (T - \lambda I)^\ast v \rVert = \lVert (T^\ast - \bar{\lambda} I) v \rVert = 0. \quad \blacksquare
$$

The origin of the name 'normal' lies in the following theorem.

> **Normality of Normal Eigenvectors.** Let $T: V \to V$ be normal. If $u, v \in V$ are eigenvectors of $T$ with distinct eigenvalues, then $u$ and $v$ are orthogonal.

**Proof.** Let the eigenvalues of $u, v$ be $\alpha, \beta$ respectively.

$$
\begin{aligned}
(\alpha - \beta)\langle u, v \rangle &= \langle \alpha u, v \rangle - \langle u, \bar{\beta}v \rangle \\
&= \langle Tu, v \rangle - \langle u, T^\ast v \rangle = 0.
\end{aligned}
$$

Since $\alpha - \beta \neq 0$, we have $\langle u, v \rangle = 0$. ■

## 3. Spectral Theorems

while it is commonly claimed that the name 'spectral' derives from the spectral theorem being used to explain atomic spectra in quantum mechanics, this is not factual. Hilbert had already used the term 'spectrum' before the spectral theorem was employed to explain atomic spectra. The precise origin is unknown, but one might conjecture that it arose from the imagery that eigenvectors characterise the properties of Hilbert spaces, similar to how light spectra characterise light.

> **Complex Spectral Theorem.** Let $V$ be a complex vector space. $T: V \to V$ is normal if and only if the eigenvectors of $T$ form an orthogonal basis for $V$.

**Proof.** _TODO_ ■

> **Real Spectral Theorem.** Let $V$ be a real vector space. $T: V \to V$ is self-adjoint if and only if the eigenvectors of $T$ form an orthogonal basis for $V$.

**Proof.** _TODO_ ■
