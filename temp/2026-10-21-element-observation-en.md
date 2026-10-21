---
layout: post
title: "Elements, Observations, and Gauge Invariance"
date: 2026-10-21
tags: ["Mathematics", "Category Theory", "Philosophy"]
related:
---

## Elements and Observations

In the $\mathbf{Set}$ category, an element of a set $A$ is specified as a morphism $1 \to A$, where $1$ is the terminal object. A natural generalization leads to the following definition.

Let $\mathcal{C}$ be a category, and $X, A$ be its objects. 

> **Definition.** An **element** of $A$ of **shape** $X$ is a morphism $X \to A$.

We can then define the *dual* of an element:

> **Definition.** An **observation** of $A$ **valued in** $X$ is a morphism $A \to X$.

The name "observation" is apt, for a morphism $A \to X$ can be thought of as an "assignment" of a "value" from $X$ to each "element" of $A$.

For example, let $\mathcal{C} = \mathbf{Set}$. Then an observation of $A$ valued in $2$ is an assignment of 0 or 1 to each element of $A$; i.e. a **subset** of $A$. An observation of $A$ valued in $\mathbb{N}$ is an **ordering** of subsets of $A$.

Here are some more examples.

$\mathbf{Top}$
- Element of a space $A$ specifies a subspace of $A$.
- Observation of a space $A$ specifies a map with domain $A$.

$\mathbb{Z}$
- Element of an integer $n$ specifies a number less than or equal to $n$.
- Observation of an integer $n$ specifies a number greater than or equal to $n$.

{% tikz %}
\begin{tikzpicture}[line width=1pt, line cap=round, line join=round]
  % mountains
  \draw (0,0) -- (0.6,0.5) -- (1.2,0) -- (1.9,0.9) -- (2.6,0)
        -- (3.6,1.4) -- (4.6,0) -- (5.8,1.95) -- (7.0,0)
        -- (8.3,2.5) -- (9.6,0);
  % figures: body (flat side down), head, eyes
  \draw (0.55,0.5) -- (0.65,0.5) -- (0.6,0.6) -- cycle;
  \draw (0.6,0.74) circle (0.14);
  \draw (0.56,0.71) -- (0.56,0.77) (0.64,0.71) -- (0.64,0.77);
  \draw (3.54,1.4) -- (3.66,1.4) -- (3.6,1.5) -- cycle;
  \draw (3.6,1.7) circle (0.2);
  \draw (3.55,1.66) -- (3.55,1.74) (3.65,1.66) -- (3.65,1.74);
  \draw (8.24,2.5) -- (8.36,2.5) -- (8.3,2.6) -- cycle;
  \draw (8.3,2.78) circle (0.18);
  \draw (8.25,2.74) -- (8.25,2.82) (8.35,2.74) -- (8.35,2.82);
  % arrows
  \draw[-latex] (3.25,1.72) to[bend right=8] (0.95,0.85);
  \draw[-latex] (7.95,2.78) to[bend right=8] (4.0,1.95);
  % labels
  \node[rotate=20, align=center, font=\small] at (1.9,1.75)
    {$n$ ``observes''\\ its element};
  \node[rotate=11, align=center, font=\small] at (5.9,2.95)
    {$n$ is ``observed by''\\ its observatory (observation)};
  \node at (3.6,0.8) {$n$};
\end{tikzpicture}
{% endtikz %}

A recurrent theme of category theory is that a concept and its dual carry the same information. This theme, in our context, is expressed in the following theorem.

> **Theorem.** For $A, B \in \mathcal{C}$,
>
> $$
> \begin{gather*}
> \hom(-, A) \cong \hom(-, B) \\ \Updownarrow \\ A \cong B \\ \Updownarrow \\ \hom(A, -) \cong \hom(B, -)
> \end{gather*}
> $$

*Proof.* A straight corollary of the [Yoneda lemma](https://dimenerno.github.io/2025/03/21/yoneda). ■ 

That is, two objects of a category are isomorphic, iff they have naturally isomorphic elements of every shape, iff they have naturally isomorphic observations in every value.

The naturality condition imposes that it is not sufficient to independently choose some bijection $\hom(X, A) \cong \hom(X, B)$ for each $X$. The bijections should cohere with every change of shape $X' \to X$.

## Gauge invariance

The above discussion resembles a familiar principle from physics.

> **Leibniz invariance.** Two objects are isomorphic iff no observation can tell them apart.

For example, an electromagnetic field is described by a potential $A$. However, the description is redundant in the sense that for any smooth function $\lambda$, the potentials $A$ and $A'$, where

$$
A'_\mu = A_\mu + \partial_\mu \lambda
$$

describe the same physical situation. Such a change of description is called a **gauge transformation**. Note that a *description* may be understood as an *observation* in the above sense; i.e. an assignment of values to a given domain.

A quantity counts as physical only if gauge transformations leave it unchanged. Thus the potential is not such a quantity, although the field $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$ is.

Another quantity that is guage-invariant is the **Wilson loop**:

$$
W_\gamma(A) = \exp\left( i \oint_\gamma A \right)
$$

For every closed curve $\gamma$, the result of the integral is gauge-invariant, since $\oint_\gamma \partial \lambda = 0$.

Gauge invariance therefore has two theses.

1. **Identification.** Gauge-equivalent descriptions describe the same physical state.

2. **Completeness.** Gauge-invariant observables suffice to tell states apart.

**Giles' Theorem** shows that for a broad class of gauge theories, a potential is determined up to gauge transformation by its Wilson loops.

Put generally, a physical state could be recovered from the totality of its gauge-invariant observations. And here we find a direct analogy with the Yoneda lemma, in the following form:

| Gauge theory | Category theory |
| --- | --- |
| potential $A_\mu$ | object $A$ |
| gauge transformation | isomorphism $A \to A'$ |
| physical state (gauge orbit) | isomorphism class $[A]$ |
| totality of Wilson loops | $\hom(A, -)$ |
| Giles' theorem | Yoneda lemma |

One subtlety: a *single* observation $f : A \to X$ is not gauge invariant, any more than $A_\mu$ is. An automorphism $\varphi : A \to A$ moves it to $f \circ \varphi$. What is invariant is the *pattern* of observations. The automorphism $\varphi$ induces a natural automorphism

$$
\varphi^* : \hom(A, -) \Rightarrow \hom(A, -), \qquad f \mapsto f \circ \varphi,
$$

which shuffles the observations among themselves while preserving how they fit together. Gauge transformations act *on* the observations. They do not change the functor up to natural isomorphism, and by Yoneda that functor determines the object.