---
layout: post
title: "Notes on the Seifert-van Kampen Theorem"
date: 2025-04-04
lang: en
tags: ["Mathematics", "Topology", "Category Theory"]
related:
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

Consider an open cover $U, V$ of a topological space $X$. In the category of topological spaces $\mathbf{Top}$, the limit of the following pushout diagram is $X$.

<img src="/public/seifert-1.png" style="margin: 1.5em auto 2em auto; width: 250px">

The Seifert-van Kampen theorem states that when $U, V$ are path connected and $x_0 \in U \cap V$, the above limit is preserved under the functor $\pi_1(-, x_0): \mathbf{Top} \to \mathbf{Grp}$.

<img src="/public/seifert-2.png" style="margin: 2em auto; width: 300px">

However, the limit of a pushout is the colimit of the left diagram. If the object corresponding to $I$ is an initial object, then the morphisms $I \to J, J \to K$ are uniquely determined, so the colimit of the left diagram is essentially the same as the colimit of the right diagram, which corresponds to the [categorical sum](https://dimenerno.github.io/2025/04/02/box-v-product/).

<div style="display: grid; margin: 0 auto; width: 400px; grid-template-columns: 1fr 1fr; gap: 3em; align-items: center;">
  <img src="/public/pushout-diag.png" style="width: 200px; margin: 1em 0 2em 0;">
  <img src="/public/product-diag.png" style="width: 200px; margin: 1em 0 2em 0;">
</div>

The initial object in $\mathbf{Grp}$ is the trivial group, and the categorical sum is the free product. Accordingly, when $U \cap V$ is a simply connected space, we obtain the conclusion that $\pi_1(X)$ is the free product of $\pi_1(U)$ and $\pi_1(V)$.
