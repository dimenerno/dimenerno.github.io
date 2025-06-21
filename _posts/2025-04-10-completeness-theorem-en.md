---
layout: post
title: "Completeness Theorem and Löwenheim-Skolem Theorem"
date: 2025-04-10
tags: ["Mathematics", "Logic"]
lang: en
related:
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

Gödel's completeness theorem and the Löwenheim-Skolem theorem are amongst the most fundamental theorems in mathematical logic. To consolidate the fundamentals, I have revisited the proofs of these theorems. In this article, $T$ is considered as a first-order logical theory in language $\mathcal{L}$.

## Gödel's Completeness Theorem

> **Gödel's Completeness Theorem.** If $T \vDash \phi$, then $T \vdash \phi$.

### Proof

We prove the following equivalent statement. (Exercise: Why is this equivalent?)

> If $T$ is a consistent theory, then $T$ has a model.

#### 1. Extending $\mathcal{L}$ to the Skolem language $\mathcal{L}\_S$

Let $\kappa = \mathrm{max}(\aleph\_0, \|\mathcal{L}\|)$. Let $\mathcal{L}\_S$ be the language obtained by adding constants $\lbrace  c\_\alpha \rbrace \_{\alpha \in \kappa}$ (where $\alpha$ is an ordinal) to $T$. Here, the subscript $S$ indicates that each constant will serve as a **Skolem constant**.

#### 2. Extending $T$ to the Henkin theory $T\_H$

Since the size of the set of formulae in $\mathcal{L}\_S$ with one free variable is equal to $\kappa$, by the well-ordering principle, we can represent them as $\lbrace  P\_\alpha \rbrace \_{\alpha \in \kappa}$. From this, we define the following set of sentences:

$$
\Sigma = \{ Q_\alpha := \exists x P_\alpha \rightarrow P_\alpha(c_\lambda) \mid \alpha \in \kappa \}
$$

where $c\_\lambda$ is the constant with the smallest index amongst the constants that do not appear in $P\_\alpha$ and $Q\_\beta \; (\beta < \alpha)$ (the existence of such a constant is guaranteed by the fact that ordinals are well-ordered). Now we define $T\_H = T \cup \Sigma$. We call $T\_H$ the **Henkin theory** and $Q\_\alpha$ the Henkin axioms.

#### 3. Extending $T\_H$ to a maximally consistent theory $\overline{T\_H}$

> **Lindenbaum's Lemma.** When $T$ is a consistent theory, there exists a maximally consistent theory $\overline{T}$ that extends $T$. That is, $T \subseteq T'$ and for any $\mathcal{L}$ sentence $\phi$, either $\phi \in \overline{T}$ or $\lnot\phi \in \overline{T}$.

**Proof.** We order the collection of consistent theories that extend $T$ by $\subseteq$ and apply Zorn's lemma.

When $T$ is a consistent theory, we can easily show that $T\_H$ is also consistent. Therefore, by Lindenbaum's lemma, there exists a maximally consistent theory $\overline{T\_H}$ that extends $T\_H$.

#### 4. Defining the canonical model of $\overline{T\_H}$

Let $c\_\alpha \sim c\_\beta$ be the relation that holds when $(c\_\alpha = c\_\beta) \in \overline{T\_H}$. From the fact that $\overline{T\_H}$ is a consistent theory, we can show that $\sim$ is an equivalence relation. Therefore, the equivalence classes $[c\_\alpha]$ of constants are well-defined. We now define a structure $\mathfrak{M}$ for $\mathcal{L}\_S$ as follows:

1. Constants: $c\_\alpha^{\mathfrak{M}} = [c\_\alpha]$
2. Predicates: $R^{\mathfrak{M}}(c\_{\alpha_1}^\mathfrak{M}, \dots, c\_{\alpha_n}^{\mathfrak{M}}) \iff \overline{T_H} \vdash R(c\_{\alpha_1}, \dots, c\_{\alpha_n}) $
3. Functions: $f(c\_\alpha^\mathfrak{M}) = c\_\beta^\mathfrak{M} \iff T\_H \vdash \exists x (f(c\_\alpha) = x) \rightarrow f(c\_\alpha) = c\_\beta$

Since $\overline{T\_H}$ is maximally consistent, (2) is well-defined, and since it is a Henkin theory, (3) is well-defined. Therefore, $\mathfrak{M}$ is well-defined, and we can easily verify that $\mathfrak{M}$ is a model of $\overline{T\_H}$. Since $\mathfrak{M}$ is also a model of $T$, $T$ has a model. ■

**Remark 1.** The proof of the completeness theorem depends on the axiom of choice in that it uses the well-ordering principle and Zorn's lemma. It can also be proved using weaker forms of the axiom of choice such as König's lemma or the axiom of dependent choice.

**Remark 2.** The **compactness theorem** is obtained as a corollary of the completeness theorem. (Exercise)

**Remark 3.** The size of the model constructed in the proof of the completeness theorem does not exceed $\kappa = \mathrm{max}(\aleph\_0, \|\mathcal{L}\|)$. Since we take equivalence classes in the final step, there is no guarantee that it equals $\kappa$.

## Löwenheim-Skolem Theorem

> **Löwenheim-Skolem Theorem.** Suppose $T$ has an infinite model. For any $\kappa \geq \mathrm{max}(\aleph\_0, \|\mathcal{L}\|)$, there exists a model of $T$ of size $\kappa$.

### Proof

#### Downward Löwenheim-Skolem Theorem

> **Downward Löwenheim-Skolem Theorem.** $T$ has a model of size not exceeding $\mathrm{max}(\aleph\_0, \|\mathcal{L}\|)$.

**Proof.** This follows immediately from Remark 2. □

#### Upward Löwenheim-Skolem Theorem

> **Upward Löwenheim-Skolem Theorem.** Suppose $T$ has an infinite model. For any infinite cardinal $\kappa$, there exists a model of $T$ of size at least $\kappa$.

**Proof.** Let $\mathcal{L}'$ be the language obtained by adding constants $\lbrace  c\_\alpha \rbrace \_{\alpha \in \kappa}$ to $\mathcal{L}$. Define the following set of $\mathcal{L}'$-sentences:

$$
\Sigma = \{ c_\alpha \neq c_\beta : \alpha, \beta \in \kappa, \alpha \neq \beta \}
$$

Let $T' = T \cup \Sigma$. _Since $T$ has an infinite model $\mathfrak{M}$,_ any finite subtheory of $T'$ is satisfied by $\mathfrak{M}$. Therefore, by the compactness theorem, $T'$ is consistent, and by the completeness theorem, it has a model. Since $\Sigma$ requires that any model of $T'$ has at least $\kappa$ elements, $T'$ has a model of size at least $\kappa$, and thus $T$ also has a model of size at least $\kappa$. □

#### Löwenheim-Skolem Theorem

Let $\kappa \geq \mathrm{max}(\aleph\_0, \|\mathcal{L}\|)$. Define $\mathcal{L}'$ and $T'$ as above.

Since $\mathrm{max}(\aleph\_0, \|\mathcal{L}'\|) = \kappa$, by the downward Löwenheim-Skolem theorem, $T'$ has a model of size not exceeding $\kappa$. However, as pointed out in the proof of the upward Löwenheim-Skolem theorem, every model of $T'$ has size at least $\kappa$. Therefore, $T'$ has a model of size exactly $\kappa$, and thus $T$ also has a model of size exactly $\kappa$. ■

