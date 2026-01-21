---
layout: post
title: "Robinson's Test for Model Completeness"
date: 2025-09-11
tags: ["Logic", "Model Theory"]
lang: en
related:
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

In this article, $T$ is a theory in language $\mathcal{L}$. We also write $x_1, \dots, x_n$ as $\vec{x}$.

> **Definition.** A theory $T$ is **model complete** if for any models $\mathfrak{A}, \mathfrak{B}$ of $T$,
>
> $$
> \mathfrak{A} \subseteq \mathfrak{B} \implies \mathfrak{A} \preceq \mathfrak{B}
> $$

**Examples**

1. The theory of fields is not model complete. For the real field $\mathbb{R}$ and the rational field $\mathbb{Q}$, we have $\mathbb{Q} \subseteq \mathbb{R}$ but $\mathbb{Q} \not\preceq \mathbb{R}$ since the truth value of $\exists x (x \cdot x = 2)$ differs in the two models.

2. The theory of torsion-free divisible abelian groups is model complete.

3. Theories admitting quantifier elimination are model complete.

One useful theorem for determining model completeness, including case 2 above, is the following.

> **Robinson's Test.** The following are equivalent:
>
> 1. $T$ is model complete.
> 2. For any models $\mathfrak{A} \subseteq \mathfrak{B}$ of $T$, any $\Sigma_1(\mathcal{L}_\mathfrak{A})$-sentence satisfied by $\mathfrak{B}$ is also satisfied by $\mathfrak{A}$.
> 3. For any $\mathcal{L}$-formula $\phi(\vec{x})$, there exists a $\Pi_1(\mathcal{L})$-formula $\psi(\vec{x})$ such that $T \vdash \forall \vec{x} (\phi(\vec{x}) \leftrightarrow \psi(\vec{x}))$.

### Proof

#### (1) → (2)

Since $T$ is model complete, if $\mathfrak{A} \subseteq \mathfrak{B}$ then $\mathfrak{A} \preceq \mathfrak{B}$. Therefore, $\mathfrak{A}$ and $\mathfrak{B}$ are equivalent with respect to $\mathcal{L}_\mathfrak{A}$-sentences. □

#### (2) → (3)

Suppose $\phi(\vec{x})$ is a $\Sigma_1(\mathcal{L})$-formula. Let $\mathcal{L}'$ be the language obtained by adding constants $\vec{c}$ to $\mathcal{L}$. We can view $T$ as an $\mathcal{L}'$-theory and consider $\mathfrak{A} \subseteq \mathfrak{B}$ as an embedding of $\mathcal{L}'$-structures.

Now consider the $\mathcal{L}'$-theory $T' = T \cup \{ \phi(\vec{c}) \}$. Suppose $\mathfrak{B}$ is a model of $T'$. We show that $\mathfrak{A}$ is also a model of $T'$. Since $\mathfrak{A} \subseteq \mathfrak{B}$ is an embedding of $\mathcal{L}'$-structures, observe that:

$$
\mathfrak{B} \vDash \phi(\vec{c}) \iff \exists \vec{a} \in \mathcal{L}_\mathfrak{A}  \text{ where } \mathfrak{B} \vDash \phi(\vec{a})
$$

Since $\phi(\vec{a})$ is a $\Sigma_1(\mathcal{L}_\mathfrak{A})$-sentence, by assumption it also holds in $\mathfrak{A}$. Therefore, $\mathfrak{A}$ is a model of $T'$.

We now use the following generalisation of the [Łoś-Tarski theorem](/2025/04/17/los-tarski) (proof left as an exercise).

> **Theorem.** Let $T \subseteq T'$ be $\mathcal{L}'$-theories such that:
>
> - For any models $\mathfrak{A} \subseteq \mathfrak{B}$ of $T$, if $\mathfrak{B}$ is a model of $T'$ then $\mathfrak{A}$ is also a model of $T'$.
>
> Then there exists a collection $P$ of $\Pi_1(\mathcal{L}')$-sentences such that $T'$ is equivalent to $T \cup P$.

By the theorem above, $T'$ is equivalent to $T \cup P$ for some collection $P$ of $\Pi_1(\mathcal{L}')$-sentences. That is,

$$
T \cup P \vdash \phi(\vec{c})
$$

By the finiteness of proofs, only finitely many sentences from $P$ are needed to prove $\phi$ from $T \cup P$. Let $\pi(\vec{c})$ be the conjunction of these sentences. Then

$$
T \vdash \forall x (\phi(\vec{x}) \leftrightarrow \pi(\vec{x}))
$$

and $\pi(\vec{x})$ is a $\Pi_1(\mathcal{L})$-formula, completing the proof for the case when $\phi \in \Sigma_1$.

We now prove by structural induction on $\phi$. Since $\exists \leftrightarrow \lnot\forall\lnot$, we need only consider $\lor, \lnot, \forall$. The cases for $\lor$ and $\forall$ are trivial, so we examine the case for $\lnot$.

Suppose for some $\Pi_1(\mathcal{L})$-formula $\psi$ we have $T \vdash \forall \vec{x} (\phi(\vec{x}) \leftrightarrow \psi(\vec{x}))$. Then $\lnot \phi$ is equivalent to $\lnot \psi$, which is a $\Sigma_1(\mathcal{L})$-formula. By the preceding argument, this is equivalent to a $\Pi_1$ sentence. □

#### (3) → (1)

For models $\mathfrak{A} \subseteq \mathfrak{B}$ of $T$, if $\mathfrak{A} \not\preceq \mathfrak{B}$ then by the compactness theorem there exists some $\mathcal{L}_\mathfrak{A}$-sentence $\phi(\vec{a})$ such that $\mathfrak{A} \not\vDash \phi(\vec{a})$ but $\mathfrak{B} \vDash \phi(\vec{a})$.

By assumption, there exists a $\Pi_1$ formula $\psi$ such that $T \vdash \forall \vec{x} (\phi(\vec{x}) \leftrightarrow \psi(\vec{x}))$. Therefore $\mathfrak{B} \vDash \psi(\vec{a})$. However, this is a $\Pi_1$ sentence, and $\Pi_1$ sentences are preserved under submodels, so $\mathfrak{A} \vDash \psi(\vec{a})$, which gives a contradiction. ■
