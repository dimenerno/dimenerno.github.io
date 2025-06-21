---
layout: post
title: "Temporal Logic"
date: 2025-03-10
tags: ["Logic", "Philosophy"]
lang: en
related:
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

## Introduction

Consider the following three statements.

1. Gayeong will go to school at some point.
2. Nayeong will go to school at some point.
3. Nayeong will not go to school before Gayeong goes to school.

From these, we can infer the following.

&nbsp;&nbsp;&nbsp;4\. Gayeong will go to school first, and then Nayeong will go to school.

However, classical logic—at least superficially—does not entail the above inference relation. Therefore, what we need is a logic that can reason about time, namely **temporal logic**.

## 1. Classical Temporal Logic

### 1.1. Semantics

There are two ways to define temporal logic. The first is to obtain temporal logic by imposing a particular structure on classical logic. Let us examine this method first.

The signature of temporal logic consists of one binary relation $\prec$ and zero or more unary predicates $P, Q, \dots$. A model of temporal logic is as follows. (This model is called a **Kripke model**.)

$$
\mathcal{T} = (T, \prec^\mathcal{T}, P^\mathcal{T}, Q^\mathcal{T}, \dots)
$$

- Universe $T$: represents all the moments under consideration.
- $t\_1 \prec^\mathcal{T} t\_2$: means that $t\_1$ is earlier than $t\_2$.
- $P^\mathcal{T}(t)$: means that $P$ is true at time $t$.

For example, in temporal logic considering only yesterday, today, and tomorrow, we can set $T = \lbrace  -1, 0, 1 \rbrace $. Classical mechanics considers $T = \mathbb{R}$.

If we let $A$ denote the event of Gayeong going to school and $B$ denote the event of Nayeong going to school, then statement 3 from the introduction can be written as follows.

$$
\forall t_1 \forall t_2 \; \big( A(t_1) \land B(t_2) \rightarrow t_1 \prec t_2 \big)
$$

Let $\phi$ be a formula with one free variable $x$. When $\phi$ is true with $t \in T$ taken as the *present*, we write this as $\mathcal{T} \vDash \phi[t]$.

### 1.2. Frames

A pair $(T, \prec)$ consisting of a set and a binary relation defined on it is called a **frame**. Let $\mathbf{F}$ be a class of frames. When $\mathcal{T} \vDash \phi[t]$ for any model $\mathcal{T} = (T, \prec, \lbrace  P^\mathcal{T} \rbrace )$ with $(T, \prec) \in \mathbf{F}$ and any $t \in T$, we say that $\phi$ is true with respect to $\mathbf{F}$.

By requiring $\mathbf{F}$ to have certain properties, we can capture characteristics of time. The following properties can be required:

- Transitivity: for any distinct $t\_1, t\_2, t\_3 \in T$, if $t\_1 \prec t\_2$ and $t\_2 \prec t\_3$, then $t\_1 \prec t\_3$.
- Linearity: for any distinct $t\_1, t\_2 \in T$, either $t\_1 \prec t\_2$ or $t\_2 \prec t\_1$.
- Density: for any distinct $t\_1, t\_2 \in T$, there exists some $t\_3 \in T$ such that $t\_1 \prec t\_3 \prec t\_2$.
- Right-extendability: for any $t \in T$, there exists some $t' \in T$ such that $t \prec t'$.
- Left-extendability: for any $t \in T$, there exists some $t' \in T$ such that $t' \prec t$.

The argument from the introduction can be shown to be valid with respect to linear frames.

## 2. Independent Temporal Logic

The second way to define temporal logic is to introduce logical symbols specific to temporal logic. Each is read as follows:

- $\mathsf{F}p$: Future $p$ (at some point $p$ will be the case)
- $\mathsf{P}p$: Past $p$ (at some point $p$ was the case)
- $\mathsf{G}p$: Going to always be $p$ (always $p$ will be the case)
- $\mathsf{H}p$: Has always been $p$ (always $p$ was the case)

The relationships between $\mathsf{F}, \mathsf{P}, \mathsf{G}, \mathsf{H}$ are as follows:

- $\mathsf{F}p \equiv \lnot\mathsf{G}\lnot p$
- $\mathsf{P}p \equiv \lnot\mathsf{H}\lnot p$

Propositions of independent temporal logic can always be translated into propositions of classical temporal logic through the **Meredith translation**. For example, $\mathsf{G}p$ is translated as $\forall x \succ t \; p(x)$. However, the converse does not hold. Therefore, independent temporal logic has weaker expressive power than classical temporal logic. Nevertheless, independent temporal logic is a subject worth studying because, in exchange for sacrificing some expressive power, one can obtain good properties such as decidability and completeness, and it also provides connections to modal logic, amongst other significant philosophical merits.

The model of independent temporal logic is $\mathcal{T} = (T, \prec, \lbrace  P^\mathcal{T} \rbrace )$, the same as dependent temporal logic. The satisfaction relation is defined naturally. For example,

- $\mathcal{T} \vDash \mathsf{F}p[t] \iff$ for some $t \prec t'$, $\mathcal{T} \vDash p[t']$

## 3. Temporal Axioms

So far we have examined the semantics of temporal logic. Now let us examine proofs in temporal logic.

### 3.1. Minimal Temporal Logic

The minimal temporal logic $L\_0$ consists of the following axioms:

- When $\tau$ is a tautology of propositional logic, $\tau$
- $\mathsf{G}(\phi \to \psi) \to (\mathsf{G}\phi \to \mathsf{G}\psi)$
- $\mathsf{H}(\phi \to \psi) \to (\mathsf{H}\phi \to \mathsf{H}\psi)$
- $\phi \to \mathsf{GP}\phi$
- $\phi \to \mathsf{HF}\phi$

And it consists of the following inference rules:

- **MP** $\vdash \phi, \phi \to \psi \implies \vdash \psi$
- **TG1:** $\vdash \phi \implies \vdash \mathsf{G}\phi$
- **TG2:** $\vdash \phi \implies \vdash \mathsf{H}\phi$

MP is an abbreviation for Modus Ponens, and TG is an abbreviation for Temporal Generalisation.

Note that TG does not mean $\vdash \phi \to \mathsf{G}\phi$. TG means that _only for logically proven propositions $\phi$,_ one can derive $\mathsf{G}\phi$ or $\mathsf{H}\phi$. That is, TG means that logical propositions are independent of time.

> **Theorem.** $L\_0$ is sound.

**Proof.** The proof is by induction on the form of logical formulae, almost identical to the soundness theorem for propositional logic.

> **Theorem.** Provability in $L\_0$ is closed under the following rules:
>
> 1. **Mirror rule:** Let the mirror proposition $\bar{\phi}$ be the proposition obtained by swapping $\mathsf{G}$ with $\mathsf{H}$ and $\mathsf{F}$ with $\mathsf{P}$ in proposition $\phi$. If $\vdash \phi$, then $\vdash \bar{\phi}$.
> 2. **Becker's rule:** Let $\mathsf{T}$ be one of $\mathsf{G, H, F, P}$. If $\vdash \phi \to \psi$, then $\vdash \mathsf{T}\phi \to \mathsf{T}\psi$.
> 3. **Dual rule:** Let the dual proposition $\phi^\ast$ be the proposition obtained by swapping $\land$ with $\lor$, $\mathsf{G}$ with $\mathsf{F}$, and $\mathsf{H}$ with $\mathsf{P}$ in proposition $\phi$. If $\vdash \phi$, then $\vdash \phi^\ast$.

**Proof.** Exercise (^^)

> **Theorem.** $L\_0$ is complete with respect to the class of all frames $\mathbf{F}\_0$.

**Proof.** TODO

### 3.2. Temporal Logic of Classical Mechanics

Consider the class $\mathbf{F}\_1$ of frames that have transitivity, linearity, density, and left and right extendability. $\mathbf{F}\_1$ represents time as postulated in classical mechanics. Let us find an axiom system that is sound and complete for $\mathbf{F}\_1$.

The temporal logic of classical mechanics $L\_1$ is obtained by adding the following axioms to $L\_0$:

- $\mathsf{G} p \to \mathsf{GG}p$ (transitivity)
- $(\mathsf{P}p \land \mathsf{P}q) \to (\mathsf{P}(p \land \mathsf{P}q) \lor \mathsf{P}(p \land q) \lor \mathsf{P}(\mathsf{P}p \land q))$ (left linearity)
- $(\mathsf{F}p \land \mathsf{F}q) \to (\mathsf{F}(p \land \mathsf{F}q) \lor \mathsf{F}(p \land q) \lor \mathsf{F}(\mathsf{F}p \land q))$ (right linearity)
- $\mathsf{H}p \to \mathsf{P}p$ (left extendability)
- $\mathsf{G}p \to \mathsf{F}p$ (right extendability)
- $\mathsf{GG}p \to \mathsf{G}p$ (density)

> **Hamblin's theorem.** In $L\_1$, combinations of temporal symbols are equivalent to one of 14 tenses. The 14 tenses are $\mathsf{FH, H, PH, HP, P, GP}$ and $\mathsf{PG, G, FG, GF, F, HF}$, together with $\mathsf{GH} = \mathsf{HG}$ and $\mathsf{FP} = \mathsf{PF}$.

**Proof.** In transitive frames, nested tenses such as $\mathsf{PP}$ can easily be shown to be equivalent to the single tense $\mathsf{P}$. Therefore, it suffices to show that combinations $\mathsf{XYZ}$ of tenses where $\mathsf{X} \neq \mathsf{Y}$ and $\mathsf{Y} \neq \mathsf{Z}$ are equivalent to some combination of two tenses. By the mirror rule and dual rule, we need only consider the case where $\mathsf{Z} = \mathsf{G}$. Meanwhile, to show that $\mathsf{XY}$ and $\mathsf{X'Y'}$ are not equivalent to each other, one can find a Kripke model where the implication relation does not hold.

> **Theorem.** $L\_1$ is complete with respect to $\mathbf{F}\_1$.

## 4. Temporal Predicate Logic

In classical logic, predicate logic is obtained by adding the following axioms to propositional logic:

- $\forall x \phi \to \phi[y/x]$ (provided $y$ is free for $x$ in $\phi$)
- $\forall x (\phi \to \psi) \to (\phi \to \forall x \psi)$ (provided $x$ is not a free variable of $\phi$)
- $x = x$
- $x = y \to (\phi[x/z] \to \phi[y / z]$) (provided $x, y$ are free for $z$ in $\phi$)

And the following inference rule is added:

- **UG (Universal Generalisation):** $\vdash \phi \implies \vdash \forall x \phi$

The logical system obtained by adding the aforementioned axioms and inference rule to temporal logic $L\_0$ is called temporal predicate logic $L\_P$.

> **Theorem.** $L\_P$ proves the following:
>
> - **Direct Barcan:** $\forall x \mathsf{G}\phi \to \mathsf{G}\forall x \phi$
> - **Converse Barcan:** $\mathsf{G}\forall x \phi \to \forall x \mathsf{G} \phi$
> - **Permanence of identity:** $x = y \to \mathsf{G}(x = y)$

**Proof.** Let us prove only the converse Barcan formula.

$$
\begin{aligned}
&1.  &&\forall x \phi \to \phi &&&\text{Axiom} \\
&2. &&\mathsf{G}\forall x \phi \to \mathsf{G} \phi &&&\text{Becker}\\
&3. &&\forall x (\mathsf{G}\forall x \phi \to \mathsf{G}\phi) &&&\text{2, UG}\\
&4. &&\forall x (\mathsf{G}\forall x \phi \to \mathsf{G}\phi) \to (\mathsf{G}\forall x \phi \to \forall x \mathsf{G}\phi) &&&\text{Axiom}\\
&5. &&\mathsf{G}\forall x \phi \to \forall x \mathsf{G} \phi \quad &&&\text{3, 4, MP} \\
& \blacksquare
\end{aligned}
$$

In natural language terms:

- Direct Barcan: suppose that all objects currently existing will always be \_\_\_\_. Then for any future time point, all objects existing at that time will be \_\_\_\_.
- Converse Barcan: suppose that for any future time point, all objects existing at that time will be \_\_\_\_. Then all objects currently existing will always be \_\_\_\_.
- Permanence of identity: two identical objects are always identical.

The permanence of identity is intuitively correct, as constants behave like rigid designators in temporal logic. However, the Barcan formulae are intuitively false. As an example, let us substitute "$x$ exists" for $\phi(x)$.

- Converse Barcan: ① suppose that for any future time point, all objects existing at that time exist. ② Then all objects currently existing will always exist.

But this proposition is false. ① holds trivially, but ② does not hold since not all objects currently existing will exist forever. Therefore, the converse Barcan formula is problematic.

The reason $L\_P$ derives pathological propositions like the Barcan formulae is that TG is not valid for open formulae (TG is needed for the proof of Becker's rule. That is, the problem in the proof is at step 2). As mentioned earlier, TG means that logically true propositions are true regardless of time. However, open formulae are neither true nor false. Open formulae are satisfied or not satisfied by particular objects.

To overcome this problem, one might propose restricting TG to apply only to closed formulae, but it is known that restricted temporal predicate logic fails to prove some desirable propositions. The task of creating a temporal predicate logic that is both sound and complete remains an unsolved problem.

