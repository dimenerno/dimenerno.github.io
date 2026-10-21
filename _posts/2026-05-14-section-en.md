---
layout: post
title: "Notes on the Meaning of Sections"
date: 2026-05-14
tags: ["Mathematics", "Type Theory"]
related:
lang: en
---

In type theory, the term "section" appears in two different contexts.

> **Definition.** Given maps $r: B \to A$ and $s: A \to B$, if $rs \sim \mathrm{id}\_A$, then $s$ is called a **section** of $r$, and $r$ is called a **retract** of $s$. That is,
>
> $$
> \begin{gather}
> \mathrm{sec}(r) := \sum_{s': A \to B} rs' \sim \mathrm{id}_A\\
> \mathrm{ret}(s) := \sum_{r': A \to B} r's \sim \mathrm{id}_B
> \end{gather}
> $$

> **Definition.** Let $B$ be a type family over $A$. Given $x: A$, if $b(x): B(x)$, then $b$ is called a **section** of $B$.

The two meanings of section are related. Regarding the first definition, geometrically, a section $s: A \to B$ is a map that includes the space $A$ as a **(cross-)section** in the space $B$, while the corresponding retract $r: B \to A$ is a map that **projects** the space $B$ onto the space $A$. From this, several observations can be made:

- Generally, "expanding and then contracting" preserves the relationship of the original space, but "contracting and then expanding" does not. This suggests that when $r$ and $s$ are in a retract-section relationship, $rs \sim \mathrm{id}\_A$, but $sr \sim \mathrm{id}\_B$ does not generally hold.

- A section *chooses* a point in the $a$-fibre of $r$ for each $a: A$. This can be understood as analogous to selecting a specific $z$-coordinate value for each $z$-contour of a figure.

- In the diagram, the fibre appears like a strand of thread, which is the origin of the term "fibre."

{% tikz %}
\begin{tikzpicture}[>=stealth, line width=0.9pt]
   \useasboundingbox (-1.6,-1.15) rectangle (7.6,3.45);
  \filldraw[fill=gray!20] (0,1.5) ellipse (1.5 and 0.4);
  \draw (0,3) ellipse (1.5 and 0.4);
  \draw (-1.5,3) -- (-1.5,0);
  \draw (1.5,3) -- (1.5,0);
  \draw[dashed] (-1.5,0) arc[start angle=180, end angle=0, x radius=1.5, y radius=0.4];
  \draw (-1.5,0) arc[start angle=180, end angle=360, x radius=1.5, y radius=0.4];
  \draw (-0.9,2.85) -- (-0.9,0.05);
  \fill (-0.9,1.5) circle (2.5pt) node[right] {$s(a)$};
  \node[anchor=west] at (-0.85,0.1) {$\mathit{fib}_r(a)$};
  \node at (0,-1) {$B$};
  \filldraw[fill=gray!20] (6,1.5) ellipse (1.5 and 0.5);
  \fill (5.5,1.6) circle (2.5pt) node[right] {$a$};
  \node at (7.2,0.65) {$A$};
  \draw[->] (1.75,3) -- (5.4,2.05);
  \draw[->] (1.75,0) -- node[below right, pos=0.4] {$r$} (5.35,1.0);
  \draw[->] (4.75,1.9) to[bend right=12] node[above] {$s$} (1.65,1.75);
\end{tikzpicture}
{% endtikz %}

On the other hand, when $b$ is a section of a type family $B$ over $A$, $b$ chooses $b(a): B(a)$ for each $a: A$. Here, $B(a)$ is naturally equivalent to the $a$-fibre of $\mathrm{pr}\_1: \sum\_{x: A}B(x) \to A$. Therefore, when $b$ is a section of $B$ (in the second sense), $\lambda x. b(x)$ is a section of $\mathrm{pr}\_1$ (in the first sense).

{% tikz %}
\begin{tikzpicture}[>=stealth, line width=0.9pt]
   \useasboundingbox (-1.6,-1.15) rectangle (7.6,3.45);
  \filldraw[fill=gray!20] (0,1.5) ellipse (1.5 and 0.4);
  \draw (0,3) ellipse (1.5 and 0.4);
  \draw (-1.5,3) -- (-1.5,0);
  \draw (1.5,3) -- (1.5,0);
  \draw[dashed] (-1.5,0) arc[start angle=180, end angle=0, x radius=1.5, y radius=0.4];
  \draw (-1.5,0) arc[start angle=180, end angle=360, x radius=1.5, y radius=0.4];
  \draw (-0.9,2.85) -- (-0.9,0.05);
  \fill (-0.9,1.5) circle (2.5pt) node[right] {$b(a)$};
  \node[anchor=west] at (-0.85,0.1) {$B(a)$};
  \node at (0,-1) {$\sum_{x:A} B(x)$};
  \filldraw[fill=gray!20] (6,1.5) ellipse (1.5 and 0.5);
  \fill (5.5,1.6) circle (2.5pt) node[right] {$a$};
  \node at (7.2,0.65) {$A$};
  \draw[->] (1.75,3) -- (5.4,2.05);
  \draw[->] (1.75,0) -- node[below right, pos=0.4] {$\mathrm{pr}_1$} (5.35,1.0);
  \draw[->] (4.75,1.9) to[bend right=12] node[above] {$\lambda x.\, b(x)$} (1.65,1.75);
\end{tikzpicture}
{% endtikz %}

Of course, $\lambda x . b(x)$ is judgementally equal to $b$. Thus, the second meaning of section is just a special case of the first.