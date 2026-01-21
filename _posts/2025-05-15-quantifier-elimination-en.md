---
layout: post
title: "Quantifier Elimination"
date: 2025-05-15
lang: en
tags: ["Mathematics", "Logic", "Model Theory"]
related:
  - "Saturated Structures and Completeness of Real Fields"
  - "Arithmetic Hierarchy"
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

In the [previous article](https://dimenerno.github.io/2025/05/08/saturation/), we examined what sets are **definable** in an $\mathcal{L}$-structure $\mathfrak{A}$. When $S \subseteq A$ is definable by a formula $\phi$ belonging to a particular [arithmetic hierarchy](https://dimenerno.github.io/2025/02/07/arithmetic-hierarchy/) in $\mathfrak{A}$, we say that $S$ belongs to that hierarchy. For instance, when $S$ is definable by a $\Pi\_1$ sentence, we have $S \in \Pi\_1$.

For example, in the standard arithmetic model $\mathfrak{N} = (\mathbb{N}, 0, S, +)$, the set of even numbers is $\Sigma\_1$.

$$
\{ x \in \mathbb{N} : \mathfrak{N} \vDash \exists y (y + y = x) \}
$$

Since the structure of sets becomes more complex as the hierarchy level increases, the most ideal situation is when all definable sets can be reduced to $\Delta\_0$. Theories possessing such a property are called theories admitting quantifier elimination.

> **Definition.** An $\mathcal{L}$-theory $T$ **admits quantifier elimination** if for any $\mathcal{L}$-formula $\phi$, there exists some $\Delta\_0$ $\mathcal{L}$-formula $\psi$ such that the following holds:
>
> $$T \vdash \phi \leftrightarrow \psi$$
>
> where all free variables of $\psi$ are free variables of $\phi$.

> **Quantifier Elimination Test.** A sufficient condition for $T$ to admit quantifier elimination is that $T$ admits quantifier elimination for formulae of the form $\exists x \psi$ where $\psi \in \Delta_0$.

**Proof.** First, we show that for any $\Delta_0$ formula $\psi$, the formula $\forall x \psi$ admits quantifier elimination. The formula $\forall x \psi$ is equivalent to $\lnot\exists x \lnot \psi$, and by assumption, $\exists x \lnot \psi$ is equivalent to some quantifier-free formula $\theta$. Therefore, $\forall x \psi$ is equivalent to $\lnot \theta$ and admits quantifier elimination. By applying induction on the number of quantifiers, we can show that quantifier elimination is possible for any formula. ■

When a theory admits quantifier elimination, it is often possible to show that the theory is complete. Consider the following example.

> **Theorem.** The theory $T$ of dense unbounded linear orders admits quantifier elimination.

**Proof.** First, we define the following concept.

> **Definition.** An **arrangement** of finite variables is a consistent conjunction of order relations amongst the variables.

For instance, the following is an arrangement of $\lbrace v_1, v_3, v_7, v_8 \rbrace$:

$$
(v_1 < v_3) \land (v_8 \land v_7) \land (v_3 = v_8)
$$

The key to the proof is the following lemma.

> **Lemma.** A $\Delta_0$ formula in $\mathcal{L} = (<)$ is either equivalent to a contradiction in the theory of linear orders, or equivalent to a disjunction of arrangements.

Accepting the lemma, we prove the main theorem. By the quantifier elimination test, it suffices to show that $\exists x \psi$ admits quantifier elimination for $\psi \in \Delta_0$. By the lemma, $\psi$ is equivalent to $\theta_1 \lor \cdots \lor \theta_n$, where each $\theta_i$ is an arrangement of variables. By the distributivity of $\exists$, we have

$$
T \vdash \exists x \psi \leftrightarrow \Big( (\exists x \theta_1) \lor \cdots (\exists x \theta_n) \Big)
$$

However, in dense unbounded linear orders, for an arrangement $\theta$, the formula $\exists x \theta$ is equivalent to the formula obtained by writing out the order relations of $\theta$ in a single line and then removing $x$. For example, $\exists x (v_1 < x) \land (x < v_2)$ can be written as $\exists x (v_1 < x < v_2)$, which by density is equivalent to $v_1 < v_2$. On the other hand, $\exists x (v_1 < x)$ is a tautology by unboundedness and is equivalent to $v_1 = v_1$. Therefore, the right-hand side of the above equation admits quantifier elimination, and consequently $\exists x \psi$ also admits quantifier elimination. ■

> **Corollary.** $T$ is complete.

**Proof.** Since $T$ admits quantifier elimination, by the standard quantifier elimination procedure, it suffices to show that for any $\Delta_0$ sentence $\psi \in \Delta_0$ with at most one free variable $x$, either $T \vdash \psi$ or $T \vdash \lnot\psi$. By the lemma, $\psi$ is equivalent to an arrangement of $x$. However, there are only two possible arrangements of $x$: $x < x$ and $x = x$. In the former case, since it is a contradiction, we have $T \vdash \lnot\psi$; in the latter case, since it is a tautology, we have $T \vdash \psi$. ■

In contrast to $T$ admitting quantifier elimination, the theory $T_{\mathrm{bd}}$ of dense bounded linear orders does not admit quantifier elimination. This is because when $a$ is the minimum element of $<$, the formula $\phi \equiv \exists y (y < x)$ does not admit quantifier elimination. Since $T_{\mathrm{bd}}$ is also a theory of linear orders, if $\phi$ admitted quantifier elimination, then by the lemma, $\phi$ would have to be equivalent to either $x < x$ or $x = x$. However, $\phi$ is true when $x = a$ and false otherwise, so it corresponds to neither case.

Nevertheless, in this case we can easily find an extension of $T_{\mathrm{bd}}$ that admits quantifier elimination. First, we add two new constant symbols $a$ and $b$ to the language $\mathcal{L}$. Then we define $T_{\mathrm{bd}}'$ as $T_{\mathrm{bd}}$ with the addition of the following axioms stating that $a$ and $b$ are the minimum and maximum elements, respectively:

$$
\lnot \exists (x < a) \quad \lnot \exists (b < x)
$$

> **Theorem.** $T_{\mathrm{bd}}'$ admits quantifier elimination.

**Proof.** Exercise.

> **Corollary.** $T_{\mathrm{bd}}$ is complete.

**Proof.** Since $T_{\mathrm{bd}}'$, which is a conservative extension of $T_{\mathrm{bd}}$, is complete, $T_{\mathrm{bd}}$ is also complete. ■

