---
layout: post
title: "Type-Theoretic Yoneda Lemma"
date: 2026-05-07
tags: ["Mathematics", "Type Theory", "Category Theory"]
related:
lang: en
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

> **Yoneda Lemma.** Let $\mathcal{A}$ be a category, $A \in \mathcal{A}$, and $F: \mathcal{A}^\mathrm{op} \to \mathbf{Set}$. The following isomorphism is natural in $A$:
>
> $$
> [\mathrm{hom}_\mathcal{A}(-, A), F] \cong F(A)
> $$

This is a well-known theorem in category theory. Interestingly, a theorem similar in form to the Yoneda Lemma can also be found in type theory.

> **Type-Theoretic Yoneda Lemma.** Let $A$ be a type, and let $B$ be a type dependent on $A$. For each $a : A$, the following holds:
>
> $$
> \prod_{x: A}((x = a) \to B(x)) \simeq B(a)
> $$

To highlight the similarity between the two, we can rewrite the notation as follows:

> Let $\mathcal{A}$ be a type, and let $F$ be a type dependent on $\mathcal{A}$. For each $A : \mathcal{A}$, the following holds:
>
> $$
> \prod_{X: \mathcal{A}}((X = A) \to F(X)) \simeq F(A)
> $$

The type-theoretic Yoneda Lemma is a special case of the following theorem:

> **Theorem.** For each $a: A$, the following map is an isomorphism:
>
> $$
> \mathrm{ev} : \prod_{x: A}\prod_{p: a = x} B(x, p) \to B(a, \mathrm{refl}_a); \quad  h \mapsto h(a, \mathrm{refl}_a)
> $$

**Proof.** By induction on the identity type, the following map exists and serves as a section of $\mathrm{ev}$:

$$
\mathrm{ind} : B(a, \mathrm{refl}_a) \to \prod_{x: A}\prod_{p: a = x} B(x, p)
$$

Thus, it suffices to show that $\mathrm{ind}$ is a retraction of $\mathrm{ev}$. That is, for each $h: \prod\_{x: A}\prod\_{p: a = x} B(x, p)$, we need to show:

$$
\mathrm{ind}(h(a, \mathrm{refl}_a)) = h
$$

By the principle of function extensionality, this amounts to showing:

$$
\prod_{x: A}\prod_{p: a = x} \mathrm{ind}(h(a, \mathrm{refl}_a), x, p) = h(x, p)
$$

By induction on the identity type, it suffices to show:

$$
\mathrm{ind}(h(a, \mathrm{refl}_a), a, \mathrm{refl}_a) = h(a, \mathrm{refl}_a)
$$

This follows judgmentally from the definition of $\mathrm{ind}$. ■