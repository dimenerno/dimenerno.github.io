---
layout: post
title: "Type-Theoretic Diagonal Argument"
date: 2026-05-13
tags: ["Mathematics", "Type Theory", "Set Theory"]
related:
lang: en
---

## Type-Theoretic Definition of Surjectivity

> **Definition.** For a map $f: A \to X$, we define:
>
> $$
> \text{is-surj}(f) := \prod_{x: X} \| \mathrm{fib}_f(x) \|
> $$

The above definition expresses that "every element of the codomain has a non-empty fibre." An equivalent definition is "the codomain equals the image." To translate the latter definition into type theory, we define as follows:

> **Definition.** Consider the following commutative diagram where $\iota$ is an embedding, and the commutativity is witnessed by a homotopy $H: f \sim \iota q$.
>
> <img src="/public/image-inclusion.png" style="width: 250px; margin: 1em auto; mix-blend-mode: multiply;">
>
> We say that $\iota$ satisfies the **universal property of the image inclusion** if the following holds: for any embedding $m: C \to X$, the precomposition
>
> $$
> - \circ (q, H): \hom_X(\iota, m) \to \hom_X(f, m)
> $$
>
> is an equivalence.

The above definition indeed satisfies the universal property of the image inclusion. That is, the following holds:

> **Theorem.** For a map $f: A \to X$, the following holds:
>
> - The following satisfies the universal property of the image inclusion:
>
> $$
> \begin{align}
> &\operatorname{im} f := \sum_{x: X} \| \mathrm{fib}_f(x) \| \\
> &q_f : A \to \operatorname{im} f; &&a \mapsto (f(a), |(a, \mathrm{refl}_{f(a)})) \\
> &\iota_f : \operatorname{im} f \to X; &&\mathrm{pr}_1
> \end{align}
> $$
> 
> - The embedding satisfying the universal property of the image inclusion is unique. That is, if two embeddings $i: B \to X$ and $i': B' \to X$ satisfy the universal property, then the type of equivalences $e: B \simeq B'$ satisfying the following commutative diagram is contractible.
>
> <img src="/public/uniqueness-of-image.png" style="width: 250px; margin: 1em auto; mix-blend-mode: multiply;">

Having defined the image type-theoretically, we can now present the second definition of surjectivity.

> **Theorem.** In the following commutative diagram, let $\iota: B \to X$ be an embedding. Then $q$ is surjective if and only if $\iota$ satisfies the universal property of the image inclusion.
>
> <img src="/public/image-inclusion.png" style="width: 250px; margin: 1em auto; mix-blend-mode: multiply;">

## Type-Theoretic Diagonal Argument

> **Definition.** For a type $X$, we define:
> 
> $$
> \mathcal{P}(X) := X \to \mathsf{Prop}
> $$

That is, the power set of $X$ is the family of propositions over $X$. For instance, the set of even natural numbers corresponds to the proposition "is even" over the natural numbers. On the other hand, the power set of $X$ is not defined as $X \to 2$ because, in this case, the power set of $X$ would be restricted to *decidable* propositions.

> **Cantor's Theorem.** For any $f: X \to \mathcal{P}(X)$, $f$ is not surjective.

**Proof.** Define the following proposition $Q : X \to \mathsf{Prop}$ over $X$:

$$
Q := \lambda x. \lnot f(x, x)
$$

If $f$ were surjective, then there would exist $g: \prod_{P: X \to \mathsf{Prop}} \\| \mathrm{fib}_f(P) \\|$. Hence, $g(Q) : \\| \mathrm{fib}_f(Q) \\|$.

Define $\mathrm{fib}_f(Q) \to \varnothing$ as follows:

$$
(x, p) \mapsto \mathrm{tr}(f(x, x), p)(f(x, x))
$$

From the definition of propositional truncation, the above map induces $\\| \mathrm{fib}_f(Q) \\| \to \varnothing$. Thus, $g(Q) \to \varnothing$, which is a contradiction. Therefore, $f$ is not surjective. ■