---
layout: post
title: "Notes on General Covariance"
date: 2025-02-27
tags: [Physics, Mechanics]
lang: en
related:
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

A theory is said to be **general covariant** when the form of physical laws is preserved under differentiable coordinate transformations. Specifically, suppose coordinate systems $\lbrace q_i \rbrace$ and $\lbrace q'\_i \rbrace$ are related by:

$$
q_i' = f_i(\{ q \})
$$

Let each $f\_i$ be differentiable for all $i$. If a theory is generally covariant, then the physical laws must have the same form when using coordinate system $\lbrace q_i \rbrace$ as when using coordinate system $\lbrace q_i' \rbrace$.

Consider an example. Suppose we describe the position of a particle in a system with zero potential using either polar coordinates $(r, \theta)$ or Cartesian coordinates $(x, y)$. The two coordinate systems are related by:

$$
\begin{gather}
x = f_1(r, \theta) = r \cos \theta\\
y = f_2(r, \theta) = r \sin \theta
\end{gather}
$$

Since $f\_1$ and $f\_2$ are differentiable, a generally covariant theory must have the same form when expressed in both coordinate systems.

First, consider the case of Newtonian mechanics. The physical laws of Newtonian mechanics are:

$$
\begin{gather}
-\frac{dV(x, y)}{dx} = m\ddot{x} \\
-\frac{dV(x, y)}{dy} = m\ddot{y}
\end{gather}
$$

Since $V(x, y) = 0$, we have $\ddot{x} = \ddot{y} = 0$. That is, the particle undergoes uniform linear motion. If Newtonian mechanics were generally covariant, then expressing the above laws in terms of $(r, \theta)$ instead of $(x, y)$ should yield the same result.

$$
\begin{gather}
-\frac{dV(r, \theta)}{dr} = m\ddot{r} \\
-\frac{dV(r, \theta)}{d\theta} = m\ddot{\theta}
\end{gather}
$$

Since $V(r, \theta) = 0$, we have $\ddot{r} = \ddot{\theta} = 0$. This time, the particle undergoes uniform circular motion. Since the results differ, **Newtonian mechanics is not generally covariant.**

Now consider the case of [Lagrangian mechanics](http://dimenerno.github.io/2025/02/27/euler-lagrange/). The physical laws of Lagrangian mechanics are:

$$
\begin{gather}
\frac{\partial \mathcal{L}}{\partial x} = \frac{d}{dt} \frac{\partial \mathcal{L}}{\partial \dot{x}} \\
\frac{\partial \mathcal{L}}{\partial y} = \frac{d}{dt} \frac{\partial \mathcal{L}}{\partial \dot{y}}
\end{gather}
$$

Substituting $\mathcal{L}(x, y) = T - V = \frac{m}{2}(\dot{x}^2 + \dot{y}^2)$ yields $\ddot{x} = \ddot{y} = 0$, i.e., uniform linear motion. This is the same as in Newtonian mechanics thus far.

Now let us substitute $(r, \theta)$ for $(x, y)$ in the Euler-Lagrange equations:

$$
\begin{gather}
\frac{\partial \mathcal{L}}{\partial r} = \frac{d}{dt} \frac{\partial \mathcal{L}}{\partial \dot{r}} \\
\frac{\partial \mathcal{L}}{\partial \theta} = \frac{d}{dt} \frac{\partial \mathcal{L}}{\partial \dot{\theta}}
\end{gather}
$$

Substituting $x = r\cos\theta, y = r\sin\theta$ and simplifying, $\mathcal{L}(r, \theta)$ becomes:

$$
\mathcal{L}(r, \theta) = \frac{m}{2}(\dot{r}^2 + r^2 \dot{\theta}^2)
$$

> _Remark._ while in the Euler-Lagrange equations we simply substitute $(r, \theta)$ for $(x, y)$, in the Lagrangian we substitute the relation $x = r \cos \theta, y = r \sin \theta$ because the Lagrangian is not a function of **pairs of real numbers** but rather a function of **points in spacetime**. General covariance does not mean that the form of equations is preserved under mindless, uniform coordinate transformations, but rather that when the functions describing a physical system are maintained while the coordinates expressing them are changed, the form of equations is preserved.

Substituting and calculating yields:

$$
\begin{gather}
\ddot{r} = r\dot{\theta}^2 \\
2\dot{r}\dot{\theta} + r\ddot{\theta} = 0
\end{gather}
$$

Although the differential equations are complex and difficult to interpret, the above two differential equations are equivalent to $\ddot{x} = \ddot{y} = 0$. For instance, one can verify that $\theta = \tan^{-1}t, r = \sqrt{1 + t^2}$ is a solution to the equations.

In general, the following holds:

> **Theorem.** Lagrangian mechanics possesses general covariance.

It may seem surprising that Newtonian mechanics lacks general covariance while Lagrangian mechanics possesses it, but upon reflection, this is quite natural. Newton's first law is commonly expressed mathematically as $F = 0 \implies \ddot{x} = 0$, but the precise statement is:

> The spacetime diagram of a particle not subject to external forces is linear.

Note the expression 'linear'. Linearity is a concept dependent upon specific geometry. For example, in Euclidean geometry, 'linear' refers to what we commonly call a straight line, but in spherical geometry, 'linear' is given by great circles. Therefore, the above statement is most accurately written as:

> **Newtonian mechanics**. The spacetime diagram of a particle not subject to external forces is linear in Euclidean geometry.

Linear motion in Euclidean geometry is given by $\ddot{x} = \ddot{y} = 0$ in Cartesian coordinates. Therefore, $F = 0 \implies \ddot{x} = 0$ is a correct equation only when Euclidean geometry and Cartesian coordinates are presupposed.

Conversely, if a theory does not depend upon specific geometry, then that theory is generally covariant. Lagrangian mechanics is an example of such a theory. The statement of Lagrangian mechanics can be expressed as:

> **Lagrangian mechanics**. The path that extremises the integral of the Lagrangian is the particle's trajectory.

The Lagrangian is not a function dependent upon specific geometry, but merely a function that outputs real values for points in spacetime. Therefore, the above statement is not dependent upon any particular geometry, and Lagrangian mechanics is generally covariant.

According to the hole argument, generally covariant theories are indeterministic in a metaphysical sense. An explanation of this will be provided later.
