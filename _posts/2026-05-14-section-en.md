---
layout: post
title: "Notes on the Meaning of Sections"
date: 2026-05-14
tags: ["Mathematics", "Type Theory"]
related:
lang: en
---

In type theory, the term "section" appears in two different contexts.

> **Definition.** For a map $r: B \to A$, if $s: A \to B$ satisfies $fs \sim \mathrm{id}\_A$, then $s$ is called a **section** of $r$, and $r$ is called a **retract** of $s$. That is,
>
> $$
> \begin{gather}
> \mathrm{sec}(r) := \sum_{s': A \to B} r's \sim \mathrm{id}_A\\
> \mathrm{ret}(s) := \sum_{r': A \to B} rs' \sim \mathrm{id}_B
> \end{gather}
> $$

> **Definition.** Let $B$ be a type family over $A$. Given $x: A$, if $b(x): B(x)$, then $b$ is called a **section** of $B$.

The two meanings of section are related. Regarding the first definition, geometrically, a section $s: A \to B$ is a map that includes the space $A$ as a **(cross-)section** in the space $B$, while the corresponding retract $r: B \to A$ is a map that **projects** the space $B$ onto the space $A$. From this, several observations can be made:

- Generally, "expanding and then contracting" preserves the relationship of the original space, but "contracting and then expanding" does not. This suggests that when $r$ and $s$ are in a retract-section relationship, $rs \sim \mathrm{id}\_A$, but $sr \sim \mathrm{id}\_B$ does not generally hold.

- A section *chooses* a point in the $a$-fibre of $r$ for each $a: A$. This can be understood as analogous to selecting a specific $z$-coordinate value for each $z$-contour of a figure.

- In the diagram, the fibre appears like a strand of thread, which is the origin of the term "fibre."

<img src="/public/section-1.png" style="width: 400px; margin: 2.5em auto; mix-blend-mode: multiply;">

On the other hand, when $b$ is a section of a type family $B$ over $A$, $b$ chooses $b(a): B(a)$ for each $a: A$. Here, $B(a)$ is naturally equivalent to the $a$-fibre of $\mathrm{pr}\_1: \sum\_{x: A}B(x) \to A$. Therefore, when $b$ is a section of $B$ (in the second sense), $\lambda x. b(x)$ is a section of $\mathrm{pr}\_1$ (in the first sense).

<img src="/public/section-2.png" style="width: 400px; margin: 2.5em auto; mix-blend-mode: multiply;">

Of course, $\lambda x . b(x)$ is judgementally equal to $b$. Thus, the second meaning of section is just a special case of the first.