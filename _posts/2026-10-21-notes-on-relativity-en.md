---
layout: post
title: "Notes on Relativity"
date: 2026-10-21
tags: ["Physics", "Relativity"]
lang: en
related: 
---

Throughout the note, we use the following tensor: 

$$
\Lambda^\mu_{\;\nu} =
\begin{pmatrix}
\gamma & -\beta\gamma & 0 & 0\\
-\beta\gamma & \gamma & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1
\end{pmatrix}
$$

> **Definition.** A transformation $M$ is *Lorentz invariant* if it leaves the Minkowski metric (inner product) between two events invariant, i.e.
>
> $$
> \eta(Mu, Mv) = \eta(u,v)
> $$
>
> Note that this condition is equivalent to $M^T\eta M = \eta$.

> **Corollary.** $d\tau$ is invariant under Lorentz invariant transformation.

See [*Notes on Tensor*](https://dimenerno.github.io/2026/10/18/notes-on-tensor/en). Due to Lorentz invariance, we are free to use index raising/lowering & index contraction to construct tensor equations.

### Clock

A clock should measure a *Lorentz invariant quantity*.

Consider a light clock, i.e. light traversing between two mirrors:
- Trajectory of light is Lorentz invariant
- The distance betwee mirrors is Lorentz invariant under smooth impulse, *if the mirrors are connected by a **rigid** rod* (⇒ rigidity: tendency to maintain equilibrium)
- Hence, a rigid rod with mirrors attached at each end is an ideal clock

### Lagrangian of a free relativistic particle

> **Criteria for Lagrangian:**
> - Local (Up to first derivative only)
> - Lorentz invariant
> - (Gauge invariant => Action must be invariant under Gauge transform)

Since $d\tau$ is Lorentz invariant, we will use this to construct the Lagrangian:

$$
S = -mc\int d\tau
$$

Note that $c$ is simply a constant, added to match the dimensions. From $d\tau^2 = dt^2 - \frac{dx^2}{c^2}$, we have

$$
d\tau = \sqrt{\dot{t}^2 - \frac{\dot{x}^2}{c^2}} d\lambda
$$

where $\lambda$ is a formal variable and dot stands for $d/d\lambda$. We then have:

$$
S = \int \underbrace{-mc\sqrt{\dot{t}^2 - \frac{\dot{x}^2}{c^2}}}_{L(x, t, \dot{x}, \dot{t})}d\lambda
$$

To minimize $S$, we use Euler-Lagrange equation:

$$
\frac{d}{d\lambda}\frac{\partial L}{\partial \dot{X^\mu}} = \frac{\partial L}{\partial X^\mu}
$$

### 4-momentum

The canonical momentum for $L$ are:

$$
P_t =-mc\frac{\dot t} {\sqrt{\dot t^{2}-\dot{x}^{2}/c^2}}
$$

If we let $\lambda = \tau$,

$$
\dot{t} = \gamma, \; \dot{x} = \gamma v, \; \sqrt{\dot t^{2}-\dot{x}^{2}/c^2} = 1
$$

Hence,

$$
P_t = -mc \gamma 
$$

or alternatively, $P^t = mc\gamma$. Indeed, we have:

$$
P^\mu = mU^\mu
$$

### Conservation Laws

Since $P^\mu$ is the canonical momentum obtained from the Lagrangian, we can use Noether's law:

$$
\sum P^\mu f(\mathbf{x}) \text{ is conserved}
$$

Hence we obtain that $P^t$ is conserved under time translation. **Hence, $P^0$ is the energy of the system**. Matching the dimension, we have $cP^t = E$.

### Mass

Consider a free particle moving at velocity $v$. Since 4-momentum is a 4-vector, we can Lorentz transform it to have zero velocity, i.e.

$$
P^\mu = \begin{pmatrix} E/c \\ 0 \\ 0 \\ 0 \end{pmatrix}
$$

Note that $E/c$ is a time-invariant quantity that does not depend on $v$ (since we can always Lorentz transform to an appropriate frame). Thus, this quantity is *intrinsic* to the system. **We thus define this quantity to be the mass**. Matching the dimension, we have $m = E/c^2$.

### Translation between relativistic unit and standard unit

> **General rule:**
>
> $$
> t \mapsto ct, \quad v \mapsto v/c
> $$

Hence, with $\gamma = \frac{1}{\sqrt{1 - v^2}}$ and $\gamma_s = \frac{1}{\sqrt{1 - (v/c)^2}}$,

| Relativistic unit | Standard unit |
| :--- | :--- |
| $x' = \gamma(x - vt)$ | $x' = \gamma_s(x - vt)$ |
| $t' = \gamma(t - vx)$ | $\displaystyle t' = \gamma_s\left(t - \frac{vx}{c^2}\right)$ |
| $X^\mu = (t, x, y, z)$ | $X^\mu = (ct, x, y, z)$ |
| $d\tau^2 = dt^2 - dx^2 - dy^2 - dz^2$ | $c^2 d\tau^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2$ |
| $\displaystyle U^\mu = \frac{dX^\mu}{d\tau} = (\gamma, \gamma\dot{x})$ | $U^\mu = (c\gamma_s, \gamma_s\dot{x})$ |