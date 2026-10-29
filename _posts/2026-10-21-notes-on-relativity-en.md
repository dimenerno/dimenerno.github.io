---
layout: post
title: "Notes on Relativity and Field Theory"
date: 2026-10-21
tags: ["Physics", "Relativity"]
lang: en
related: 
---

Throughout the note, we use the following tensors: 

$$
\begin{gather}
\Lambda^\mu_{\;\nu} =
\begin{pmatrix}
\gamma & -\beta\gamma & 0 & 0\\
-\beta\gamma & \gamma & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1
\end{pmatrix} \\ \\
\eta_{\mu\nu} = \begin{pmatrix} -1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}
\end{gather}
$$

## Relativity

### Invariance and Tensor Manipulation

> **Definition.** A transformation $M: V \to V$ is *Lorentz invariant* if it leaves the Minkowski metric (inner product) between two events invariant, i.e.
>
> $$
> \eta(Mu, Mv) = \eta(u,v)
> $$
>
> Note that this condition is equivalent to $M^T\eta M = \eta$.

i.e. $d\tau$ is invariant under Lorentz invariant transformation.

Let $M^\ast : V^\ast \to V^\ast$ be the dual transformation induced by $M$. There are two ways to define $M^\ast$.

1. For every $\phi \in V^\ast, v \in V$, we require that $\phi(v)$ is conserved, i.e. $(M^\ast\phi)(Mv) = \phi(v)$.
2. We conjugate $M$ with coordinate change, i.e. $M^\ast = \eta M \eta^{-1}$.

> **Lemma.** In the first definition, $M^\ast = (M^{-1})^T$.

*Proof.* Since transpose is the pullback

$$
(M^T \phi)(v) := \phi(Mv),
$$

we have $((M^{-1})^T)(\phi)(Mv) = (M^{-1}\phi)(Mv) = \phi(v)$. □

> **Theorem.** If $M$ is $\eta$-invariant, the two definitions agree.

*Proof.* Since $\eta(Mu, Mv) = \eta(u, v)$ implies $M^T\eta M = \eta$, we have

$$
\eta M \eta^{-1} = (M^T)^{-1} = (M^{-1})^T \quad \blacksquare
$$

Thus for Lorentz invariance transformations, we are free to construct tensor equations with simple index manipulation.

### Lagrangian of a free relativistic particle

To construct a Lagrangian, we concoct an expression such that:

1. It is local, i.e. only up to first derivatives.
2. It is Lorentz invariant.

> We may also require Gauge invariance, e.g. see below for concocting the Lagrangian in obtaining Maxwell's equations.

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

We can now find the canonical momentum for $L$. For $t$-coordinate, we have:

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

The conservation law yields a relativistic *definition* of mass. The mass of a system is an invariant, intrinsic to the system. As an example, consider a free particle moving at velocity $v$. Since 4-momentum is a 4-vector, we can Lorentz transform it to have zero velocity, i.e.

$$
P^\mu = \begin{pmatrix} E/c \\ 0 \\ 0 \\ 0 \end{pmatrix}
$$

Note that $E/c$ is a time-invariant quantity that does not depend on $v$ (since we can always Lorentz transform to an appropriate frame). Thus, this quantity is *intrinsic* to the system. We thus define this quantity to be the mass. Matching the dimension, we have $m = E/c^2$.

### Translation between relativistic unit and standard unit

As a general rule,

$$
t \mapsto ct, \quad v \mapsto v/c
$$

Hence, with $\gamma = \frac{1}{\sqrt{1 - v^2}}$ and $\gamma_s = \frac{1}{\sqrt{1 - (v/c)^2}}$,

| Relativistic unit | Standard unit |
| :--- | :--- |
| $x' = \gamma(x - vt)$ | $x' = \gamma_s(x - vt)$ |
| $t' = \gamma(t - vx)$ | $\displaystyle t' = \gamma_s\left(t - \frac{vx}{c^2}\right)$ |
| $X^\mu = (t, x, y, z)$ | $X^\mu = (ct, x, y, z)$ |
| $d\tau^2 = dt^2 - dx^2 - dy^2 - dz^2$ | $c^2 d\tau^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2$ |
| $\displaystyle U^\mu = \frac{dX^\mu}{d\tau} = (\gamma, \gamma\dot{x})$ | $U^\mu = (c\gamma_s, \gamma_s\dot{x})$ |

## Field Theory

### Lorentz Force

The following equation is familiar:

$$
\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})
$$

Indeed, this equation is Lorentz invariant. We can show this by constructing a Lorentz invariant Lagrangian. Assume a 4-vector $A_\mu(t, x)$ that encodes $\mathbf{E}$ and $\mathbf{B}$ (indeed, without loss of information) in the following way.

$$
\begin{align}
F_{\mu \nu} &= \partial_\mu A_\nu -\partial_\nu A_\mu \\

&= \begin{pmatrix}
0 & -E_x & -E_y & -E_z \\
E_x & 0 & B_z & -B_y \\
E_y & -B_z & 0 & B_x \\
E_z & B_y & -B_x & 0 \\
\end{pmatrix}

\end{align}
$$

> Convention: $x$ stands for all the spatial coordinates of $X^\mu$.

The following is a scalar including a *product* of the particle's position with the field (hence represents the action of *interaction*):

$$
S_{\mathrm{int}}=e\int dX^\mu A_\mu(t, x)
$$

The following is the action for a free particle:

$$
S_{\mathrm{part}} = \int -m\sqrt{1-\dot{x}^2}dt
$$

We thus add the two together to obtain the total action $S = S_{\mathrm{int}} + S_{\mathrm{part}}$. To find the Lagrangian, we rewrite the integral to factor out $dt$, by which we obtain:

$$
\mathcal{L} = -m\sqrt{1-\dot{x}^2} + eA_0(t, x) + e\dot{X^n}A_n(t, x)
$$

Using Euler-Lagrange, we indeed obtain the equation for relativistic Lorentz force:

$$
m \frac{d}{dt}\frac{\dot{X_p}}{\sqrt{1 - \dot{x}^2}} = e(\mathbf{E} + \mathbf{v} \times \mathbf{B})_p
$$

We thus see that the Lorentz force is Lorentz invariant. More succintly,

$$
m\frac{d^2 X_\mu}{d\tau^2} =  e F_{\mu\nu} \frac{dX^\nu}{d\tau}
$$

### Homogeneous Maxwell Equations

> **Definition.**
>
> $$
> \begin{align}
> F_{\mu \nu} &= \partial_\mu A_\nu -\partial_\nu A_\mu \\
> 
> &= \begin{pmatrix}
> 0 & -E_x & -E_y & -E_z \\
> E_x & 0 & B_z & -B_y \\
> E_y & -B_z & 0 & B_x \\
> E_z & B_y & -B_x & 0 \\
> \end{pmatrix}
> 
> \end{align}
> $$

The above definition yields the following *mathematical identities*.

$$
\begin{gather}
\nabla \cdot \mathbf{B} = 0 \\
\nabla \times \mathbf{E} + \frac{\partial \mathbf{B}}{\partial t} = 0
\end{gather}
$$

### Current density 4-vector

$$
\rho = \frac{dQ}{dxdydz}, \, j_x = \frac{dQ}{dydzdt}
$$

To write succintly,

$$
J^\mu = \frac{dQ}{dxdydzdt}dX^\mu
$$

We thus have the following local conservation equation:

$$
\partial_\mu J^\mu = 0 \quad \left(\text{i.e. } \frac{\partial{\rho}}{\partial{t}} + \nabla \cdot\mathbf{J} = 0 \right)
$$

This suggests that the following is a 4-vector.

$$
J^\mu = \begin{pmatrix} \rho \\ J_x \\ J_y \\ J_z \end{pmatrix}
$$

Indeed, a simple thought experiment proves that $J^\mu$ respects Lorentz transformation, see pg. 412-413 of *The Theoretical Minimum: Special Relativity and Field Theory*.

### Deriving the non-homogeneous Maxwell's equations

Simple algebra shows that the non-homogeneous equations are equivalent to:

$$
\partial_\mu F^{\mu\nu} = -J^\nu
$$

To derive this, we will first set up a Lagrangian that is

1. Lorentz invariant 
2. Gauge invariant
3. Local

First, we adopt the following notation:

$$
\partial_\mu \phi = \phi_{,\mu}
$$

By locality, the Lagrangian should depend only up to first derivative, i.e.

$$
\mathcal{L}(\phi, \phi_{,\mu})
$$

To respect gauge invariance, the Lagrangian must be invariant under the following transformation:

$$
A_\mu \Rightarrow A_\mu + \frac{\partial S}{\partial X^\mu}
$$

where $S$ is a scalar field. Since $F^{\mu\nu}$ is gauge invariant, we are free to use these terms in the Lagrangian, but we are prohibited from using such terms as $A_\mu A^\mu$ (although it is a perfectly fine scalar).

### Lagrangian when $\mathbf{J} = 0$

The above considerations lead us to postulate the following Lagrangian:

$$
\begin{align}
\mathcal{L} &= -\frac{1}{4}F_{\mu\nu}F^{\mu\nu} \\
&= -\frac{1}{4}(A_{\nu,\mu}-A_{\mu,\nu})(A^{\nu,\mu}-A^{\mu,\nu}) \\
&= \frac{1}{2}(E^2 - B^2)
\end{align}
$$

To find the eqution of motion, use the Euler-Lagrange equations for field:

$$
\frac{\partial}{\partial X^\mu} \frac{\partial \mathcal{L}}{\partial \phi_{,\mu}} = \frac{\partial \mathcal{L}}{\partial \phi}
$$

Note that each $\phi$ is a field; since we are dealing with four fields $A_t, A_x, A_y, A_z$, we will obtain a system of four equations, each of them being:

$$
\frac{\partial}{\partial X^\nu} \frac{\partial \mathcal{L}}{\partial A_{\mu,\nu}} = \frac{\partial \mathcal{L}}{\partial A_\mu}
$$

Calculating the terms yield:

$$
\frac{\partial F^{\mu\nu}}{\partial X^\nu} = 0
$$

i.e.

$$
\partial_\mu F^{\mu\nu} = 0 = J_\mu.
$$

### Lagrangian when $\mathbf{J} \neq 0$

To add $\mathbf{J}$ to the Lagrangian, we will use the fact that although $A^\mu A_\mu$ is not Gauge invariant, $J^\mu A_\mu$ is. Let's check this fact.

Let the new action be:

$$
\mathcal{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu} \underbrace{- J^\mu(x)A_\mu(x)}_{\text{new term}}
$$

The gauge transform is:
$$
\mathcal{L}' = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu} - J^\mu(x)\left( A_\mu(x) + \frac{\partial S}{\partial X^\mu} \right)
$$

Thus,

$$
\begin{align}
\Delta S &=  \int -J^\mu(x)\frac{\partial S}{\partial X^\mu} d^4x \\ 
&= \int -\frac{J^\mu(x)}{\partial X^\mu} S \,d^4x \quad(\because \text{partial integral}) \\
&= \int -(\partial_\mu J^\mu)S \,d^4x \\
&= 0 \quad (\because \text{continuity equation})
\end{align}
$$

Thus, $\mathcal{L}$ is Gauge invariant. Let us now extract the equation of motion:

$$
\frac{\partial}{\partial X^\nu} \frac{\partial \mathcal{L}}{\partial A_{\mu,\nu}} = \frac{\partial \mathcal{L}}{\partial A_\mu}
$$

Since the new term only explicitly depends on $A_\mu$, its effect on LHS is nil. Calculating the RHS, we obtain:

$$
\frac{\partial \mathcal{L}}{\partial A_\mu} = -J^\mu
$$

Hence,

$$
\partial_\mu F^{\mu\nu} = -J^\nu \qquad \blacksquare
$$
