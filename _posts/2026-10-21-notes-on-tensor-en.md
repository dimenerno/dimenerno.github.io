---
layout: post
title: "Notes on Tensor"
date: 2026-10-21
tags: ["Physics", "Mathematics"]
lang: en
related: 
---

> **Basic Theorems.**
>
> 1. $(V \otimes W)^* \simeq V^* \otimes W^*$
> 2. $\hom(V\otimes W, Z) \simeq \hom(V, \hom(W, Z))$
> 3. $V^{**} \simeq V$
>
> **Corollary.** $V^* \otimes W \simeq \hom (V, W)$

## Tensor

> **TFAE.**
>
> 1. $M$ is a type $(n, m)$ tensor
> 2. $M \in V^{\otimes n} \otimes (V^*)^{\otimes m}$
> 3. $M: (V^*)^n \times V^m \to k$
> 4. $M: V^{\otimes m} \to V^{\otimes n}$

### (1, 1)-tensor

Let $\Lambda$ be a (1, 1)-tensor, i.e. $\Lambda: V^* \times V \to k$.

If we fix a basis $\{e_i\}$ for $V$, we can write $\Lambda$ as a matrix form:

$$
\Lambda^\mu_{\;\nu} =\Lambda(e^\mu, e_\nu)
$$

For example, given:

$$
\begin{gather}
\Lambda(e^0, e_0) = a\\
\Lambda(e^1, e_0) = b\\
\Lambda(e^0, e_1) = c\\
\Lambda(e^1, e_1) = d,
\end{gather}
$$

we have:

$$
\Lambda^\mu_{\;\nu} =
\begin{pmatrix}
a & c \\
b & d
\end{pmatrix}
$$

> Note: Specification of matrix component is only relevant with the left-right order (rightmost index corresponds to column) and irrelevant with the up-down position.

Let $\mathbf{a} = a^\mu e_\mu \in V$. Since $\Lambda(-, \mathbf{a}) : V^* \to k$ and $\hom(V^*, k) \simeq V$, we have $\Lambda(-, \mathbf{a}) \in V$. Write $\Lambda(-, \mathbf{a}) = \mathbf{a}' = (a')^\mu e_\mu$. We then have:

$$
(a')^\mu = \Lambda(e^\mu, \mathbf{a}) = \sum_\nu \Lambda(e^\mu, e_\nu)a^\nu = \Lambda^\mu_{\;\nu}a^\nu.
$$

### (0, 2)-tensor

Let $\eta$ be a (0, 2)-tensor, i.e. $\eta: V \times V \to k$.

If we fix a basis $\{e_i\}$ for $V$, we can write $\eta$ as a matrix form:

$$
\eta_{\mu \nu} =\eta(e_\mu, e_\nu)
$$

For example, given:

$$
\begin{gather}
\eta(e_0, e_0) = a\\
\eta(e_1, e_0) = b\\
\eta(e_0, e_1) = c\\
\eta(e_1, e_1) = d,
\end{gather}
$$

we have:

$$
\eta_{\mu\nu} =
\begin{pmatrix}
a & c \\
b & d
\end{pmatrix}
$$

Let $\mathbf{a} = a^\mu e\_\mu \in V$. Since $\eta(-, \mathbf{a}) : V \to k$ and $\hom(V, k) \simeq V^\*$, we have $\Lambda(-, \mathbf{a}) \in V^*$. Write $\Lambda(-, \mathbf{a}) = \mathbf{a}' = (a')\_\mu e^\mu$. We then have:

$$
(a')_\mu = \eta(e_\mu, \mathbf{a}) = \sum_\nu \eta(e_\mu, e_\nu)a^\nu = \eta_{\mu\nu}a^\nu.
$$

Generalizing, for a $(2, 3)$-tensor $T^{\alpha \beta}\_{\gamma \delta \epsilon} : V^\* \times V^\* \times V \times V \times V \to k$, if we product $T$ with 1 dual coordinate $a\_\mu$ and 3 vector coordinates $b^\nu$, then we are left with a coordinate for $\hom(V^\*, k) \simeq V$, which is a contravariant result. Indeed,

$$
T^{\alpha \beta}_{\gamma \delta \epsilon} b_\beta c^\gamma d^\delta e^\epsilon = a^\alpha
$$

Alternatively we can product $T$ with 2 dual coordinates and 2 vector coordinates to obtain a coordinate for $\hom(V, k) \simeq V^*$.

### Index raising/lowering

Let $M^\mu_{\;\nu}$ act on $V$. How does $M$ "act" on $V^*$?

#### 1. $\phi(v)$ conservation
If we require that $\phi(v)$ be conserved, i.e.

$$
(M^*\phi)(Mv) = \phi(v),
$$

then $M$ should act *inversely* on $V^*$. That is,

$$
\begin{gather}
(M^*)_\mu^{\;\nu} a_\nu = a'_\mu \\\\
\text{where} \quad M^* := (M^{-1})^T
\end{gather}
$$

#### 2. Coordinate change
Alternatively, we can simply change $\phi$ to its corresponding vector $v_\phi$, transform $v_\phi$, and change it back to $V^*$. That is,

$$
\begin{gather}
(M')_\mu^{\;\nu}a_\nu := \eta_{\mu \sigma}( M^\sigma_{\;\tau} a^\tau) = \eta_{\mu\sigma} M^\sigma_{\;\tau}\eta^{\tau\nu}a_\nu \\\\
\text{i.e.} \quad M' = \eta M \eta
\end{gather}
$$

> **Theorem.** If $\eta$ is invariant under $M$, i.e. $\eta(Mu, Mv) = \eta(u, v)$, the two conversions coincide.

Hence, we work with 2, since it's much easier to calculate. The point is that, **insofar we deal with Lorentz invariant transformations, index raising/lowering and contraction of indices flow naturally.**

Furthermore, since $\eta$ has nonzero indices only on the diagonal, we can use the following shortcut:

> Multiply by -1 when raising/lowering time index.
> Leave everything else unchanged.

**Example.**

$$
\begin{gather}
\Lambda^\mu_{\;\nu} =
\begin{pmatrix}
\gamma & -\beta\gamma & 0 & 0\\
-\beta\gamma & \gamma & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1
\end{pmatrix} \\\\
\Lambda_{\mu\nu} =
\begin{pmatrix}
-\gamma & \beta\gamma & 0 & 0\\
-\beta\gamma & \gamma & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1
\end{pmatrix} \\\\
\Lambda^{\mu\nu} =
\begin{pmatrix}
-\gamma & -\beta\gamma & 0 & 0\\
\beta\gamma & \gamma & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1
\end{pmatrix}\\\\
\Lambda_{\mu}^{\;\nu} =
\begin{pmatrix}
\gamma & \beta\gamma & 0 & 0\\
\beta\gamma & \gamma & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1
\end{pmatrix}
\end{gather}
$$