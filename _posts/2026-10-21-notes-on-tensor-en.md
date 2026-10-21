---
layout: post
title: "Notes on Field Theory"
date: 2026-10-18
tags: ["Physics", "Relativity"]
lang: en
related: 
---

### Lorentz Force

$$
\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})
$$

Q) Is this equation Lorentz invariant?

A) Proof by construction of Lorentz invariant Lagrangian: Assume a 4-vector $A_\mu(t, x)$ that encodes all the information about $\mathbf{E}$ and $\mathbf{B}$ in the following way.

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

Or more succintly,

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
2. Gauge-invariant
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

Q) How should we add $\mathbf{J}$ to the Lagrangian?

A) Although $A^\mu A_\mu$ is not Gauge invariant, $J^\mu A_\mu$ is! Let's check this fact.

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
