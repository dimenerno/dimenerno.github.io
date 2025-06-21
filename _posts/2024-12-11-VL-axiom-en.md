---
layout: post
title: "Consistency of the V = L Axiom"
date: 2024-12-11
tags: [Mathematics, Set Theory]
lang: en
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

## 1. Universe

### 1.1. Von Neumann Universe

We define $\lbrace  V\_\alpha \rbrace$ [transfinitely recursively](https://dimenerno.github.io/2024/12/05/transfinite-recursion/).

- $V\_0 = \varnothing$
- $V\_{\alpha + 1} = V\_\alpha \cup \mathcal{P}(V\_\alpha)$
- When $\lambda$ is a limit ordinal, $V\_\lambda = \bigcup\_{\alpha < \lambda} V\_\alpha$

The first few $V\_\alpha$ are as follows:

- $V\_1 = \lbrace  \varnothing \rbrace$
- $V\_2 = \lbrace  \varnothing, \lbrace  \varnothing \rbrace \rbrace$
- $V\_3 = \lbrace  \varnothing, \lbrace  \varnothing \rbrace, \lbrace  \lbrace  \varnothing \rbrace \rbrace, \lbrace  \varnothing, \lbrace  \lbrace  \varnothing\rbrace \rbrace  \rbrace$
- $V\_\omega = \mathsf{HF}$

The collection of all $V\_\alpha$ for every ordinal $\alpha$ is called the **Von Neumann universe**.

$$
V = \bigcup_{\alpha \in \mathrm{Ord}} V_\alpha
$$

When $x \in y \in z$ implies $x \in z$, we call $z$ a **transitive set**. This is an important property of $V$.

> **Theorem.**
>
> 1. For $\alpha \in \mathrm{Ord}$, $V\_\alpha$ is transitive.
> 2. $V$ is transitive.

The proof uses transfinite induction. Accordingly, we may define $V$ as follows without loss of generality:

- $V\_0 = \varnothing$
- $V\_{\alpha + 1} = \mathcal{P}(V\_\alpha)$
- When $\lambda$ is a limit ordinal, $V\_\lambda = \bigcup\_{\alpha < \lambda}V\_\alpha$

Intuitively, $V$ appears to contain all sets. Indeed, we can prove the following:

> **Theorem.** If $x$ is a set, then $x \in V$.

**Proof.** For a set $x$, we define the **transitive closure** $\bar{x}$ of $x$ as the smallest transitive set containing $x$ as an element (this definition is justified because the intersection of transitive sets is transitive).

Assume $x \notin V$. By the axiom of separation, $y = \lbrace  u \in \bar{x} : u \notin V \rbrace$ is a set, and by the axiom of foundation, there exists an $\in$-minimal element $z$ of $y$. If there exists $w \in z$ such that $w \notin V$, then by transitivity $w \in y$, contradicting the $\in$-minimality of $z$. Therefore, all elements of $z$ are in $V$, and by the axiom of replacement, $\Omega = \lbrace  \alpha \in \mathrm{Ord} \mid \exists w \in z : w \in V\_\alpha\rbrace$ is a set. By the Burali-Forti theorem, $\beta = \bigcup\_{\alpha \in \Omega}\alpha$ is an ordinal, and **$z \in V\_{\beta + 1}$.** (This part requires that $V\_{\beta + 1} = \mathcal{P}(V\_\beta)$) This yields a contradiction. ■

Consequently, $V$ is not a set. Therefore, whilst $V$ is a model of ZFC in the sense that it contains all sets, [many mathematicians require models to be sets](https://math.stackexchange.com/questions/56726/how-can-there-be-genuine-models-of-set-theory), so it is not a model in the strict sense. However, for convenience in this article, we shall refer to $V$ as a model of set theory. Moreover, we shall understand $x \in V$ as a formal expression for "$x$ is a set".

### 1.2. Gödel Constructible Universe

First, we define constructibility as follows:

> **Definition.** $u$ is **constructible** from a set $S$ if there exist some first-order logical formula $\phi(y, x\_1, \dots, x\_n)$ and $c\_1, \dots, c\_n \in S$ such that the following holds:
>
> $$
> y \in u \iff y \in S \land \phi(y, c_1, \dots, c_n)
> $$
>
> where the domain of quantifiers in $\phi$ is $S$.

For example, when $S = \lbrace 0, 1, 2\rbrace$, the following constructs $u = \lbrace  1, 2 \rbrace$:

- $\phi(y, x\_1, x\_2) := (y = x\_1) \lor (y = x\_2)$
- $c\_1 = 1, c\_2 = 2$

Also, when $S = \mathbb{N}$, the following constructs $u = \lbrace 0, 3, 6, 9, \dots \rbrace$:

- $\phi(y, x\_1) := x\_1 \mid y$
- $c\_1 = 3$

Gödel's constructibility differs from constructibility in the general sense, namely expressibility in language. For instance, since the set of real numbers expressible in language is countable, some real numbers cannot be expressed in language. Let such a real number be $r$. Now when $S = \mathbb{R}$, the following constructs $u = \lbrace  r \rbrace$:

- $\phi(y, x\_1) := x\_1 = y$
- $c\_1 = r$

That is, Gödel's constructibility is powerful in that it allows initialisation of free variables to arbitrary elements. However, it has limitations in that the number of free variables is finite. We now define $\lbrace  L\_\alpha \rbrace$ transfinitely recursively:

- $L\_0 = \varnothing$
- $L\_{\alpha + 1} = \lbrace  x : x \text{ is constructible from } L\_\alpha  \rbrace$
- When $\lambda$ is a limit ordinal, $L\_\lambda = \bigcup\_{\alpha < \lambda} L\_\alpha$
- $L = \bigcup\_{\alpha < \lambda} L\_\alpha$

We can easily show that $L\_\alpha = V\_\alpha$ when $\alpha < \omega$. When $\alpha = n$, we can construct $x \in V\_\alpha$ with at most $n$ disjunctions $\lor$. Therefore:

- $L\_1 = \lbrace  \varnothing \rbrace$
- $L\_2 = \lbrace  \varnothing, \lbrace  \varnothing \rbrace \rbrace$
- $L\_3 = \lbrace  \varnothing, \lbrace  \varnothing \rbrace, \lbrace  \lbrace  \varnothing \rbrace \rbrace, \lbrace  \varnothing, \lbrace  \lbrace  \varnothing\rbrace \rbrace  \rbrace$
- $L\_\omega = \mathsf{HF}$

However, $L\_{\omega + 1} \subsetneq V\_{\omega + 1}$. Since $\mathcal{P}(\mathbb{N}) \subset V\_{\omega + 1}$, $V\_{\omega + 1}$ is uncountable, whereas since the set of first-order logical sentences and $L\_\omega$ are both countable, $L\_{\omega + 1}$ is also countable. In general, when $\alpha$ is countable, $L\_\alpha$ is countable.

Nevertheless, $L$ shares many properties with $V$. For instance:

> **Theorem.** For $\alpha \in \mathrm{Ord}$, the following hold:
>
> 1. $L\_\alpha$ is transitive. (Therefore $L$ is transitive)
> 2. $\alpha \in L\_{\alpha + 1} \setminus L\_{\alpha}$

The proof uses transfinite induction.

Note that $L$ is not a set by the Burali-Forti theorem since it contains all ordinals. Instead, there exists a first-order logical formula $\mathsf{IsInL}\_\alpha(x)$ corresponding to $x \in L\_\alpha$. The proof is somewhat intricate and involves arithmetising propositions using Gödel numbers. ([See link](https://math.stackexchange.com/questions/198437/a-formula-that-defines-constructible-universe)) Therefore, we shall understand $x \in L$ as a formal expression replacing $\exists \alpha \in \mathrm{Ord} :\mathsf{IsInL}\_\alpha(x)$. (Of course, $\alpha \in \mathrm{Ord}$ should also be understood as a formal expression replacing a first-order logical formula)

## 2. Relativisation

### 2.1. Relativisation of Propositions

First-order logical propositions may contain quantifiers. Hence, the meaning of a proposition changes depending on how the domain of quantifiers is set.

For a proposition $\phi$ and a set (or class) $A$, we define the relativisation $\phi^A$ of $\phi$ as the proposition where all quantifiers in $\phi$ are restricted to $A$. To add a bit of narrative expression, $\phi^A$ can be said to be $\phi$ understood from "inside" $A$. For example, when $\phi : \forall x \; \exists y : y < x$:

- $\phi^\mathbb{N} : \forall x \in \mathbb{N} \; \exists y \in \mathbb{N} : y < x$
- $\phi^\mathbb{Z} : \forall x \in \mathbb{Z} \; \exists y \in \mathbb{Z} : y < x$

If $T\_\mathbb{Q}$ is a theory of rational numbers with sufficient expressive power to characterise natural numbers and integers, then:

- $T\_\mathbb{Q} \vdash \phi$
- $T\_\mathbb{Q} \not\vdash \phi^\mathbb{N}$
- $T\_\mathbb{Q} \vdash \phi^{\mathbb{Z}}$

Therefore, $\phi$ successfully distinguishes between natural numbers and rational numbers, but fails to distinguish between integers and rational numbers. Generalising this observation, for a theory $T$ and a set $A$, the more formulas $\phi$ such that $T \vdash \phi \leftrightarrow \phi^A$, the better $A$ "conforms" to the description of $T$.

Generalising the above discussion slightly, we define:

> **Definition.** For a theory $T$ and a set $A$,
>
> $$
> T \vdash \forall x_1, \dots, x_n \in A (\phi(x_1, \dots, x_n) \leftrightarrow \phi^A(x_1, \dots, x_n))
> $$
>
> when this holds, $\phi$ is said to be **absolute** with respect to $A$.

For instance, with respect to $T\_\mathbb{Q}$, $\phi(x) : \exists y (y < x)$ is absolute with respect to integers but not absolute with respect to natural numbers.

### 2.2. $L$-Relativisation

Our goal now is to show that $L$ conforms maximally with $\mathsf{ZF}$. That is:

> **Theorem 1.** If $\phi$ is an axiom of ZF, then $\mathsf{ZF} \vdash \phi^L$.

Let us express the meaning of Theorem 1 in words:

> "When viewed from inside $L$, $L$ is a model of ZF" can be proved in ZF.

Of course, we only know $L \subset V$ and do not know whether $V = L$, so some set $x$ may not belong to $L$. However, even if there exists a set $x$ such that $x \in V \setminus L$, the absence of such $x$ does not break the *internal consistency* of $L$—this is the content of Theorem 1.

For example, suppose some set $x = \lbrace  y, z \rbrace$ is absent from $L$ for some sets $y, z$. At first glance, the absence of $x$ seems to suggest that $L$ does not satisfy the pairing axiom $\mathsf{Pair}$:

$$
\mathsf{Pair} := \forall y, z \; \exists x \; \forall w: w \in x \leftrightarrow (w = y \lor w = z)
$$

However, the pairing axiom as viewed from inside $L$ is:

$$
\mathsf{Pair}^L := \forall y, z \in L \; \exists x \in L \; \forall w \in L: w \in x \leftrightarrow (w = y \lor w = z)
$$

Note that the quantification $\forall y, z$ is also restricted to $L$. That is, the absence of $x = \lbrace  y, z \rbrace$ causes problems for $L$ only when $y, z \in L$. Conversely, if $x = \lbrace  y, z \rbrace \notin L$ implies $y, z \notin L$, then $L$ satisfies $\mathsf{Pair}^L$. This is the meaning of "$L$ lacks sets in a way that maintains internal consistency".

The key reason Theorem 1 holds is that $L$ and $V$ **share the property of transitivity**.

> **Lemma.** The following predicates are absolute with respect to $L$ in ZF:
>
> 1. $x \in y$
> 2. $x \subset y$
> 3. $x = \bigcup y$
> 4. $x = \lbrace  y, z \rbrace$
> 3. $\alpha \in \mathrm{Ord}$
> 4. $x$ is transitive
> 5. [$\Delta\_0$ formulas](https://math.stackexchange.com/questions/404699/delta-0-formulas)

Moreover, we can prove:

> **Theorem 2.** $\mathsf{ZF} \vdash (V = L)^L$

Here, $V = L$ means "every set belongs to $L$". Therefore, at first glance, $(V = L)^L$ appears to be the trivial proposition "every set belonging to $L$ belongs to $L$". However, when we actually write $V = L$ as a logical formula:

$$
\forall x \; \exists \alpha  : \alpha \in \mathrm{Ord} \land x \in L_\alpha
$$

so $(V = L)^L$ becomes:

$$
\forall x \in L \; \exists \alpha \in L : (\alpha \in \mathrm{Ord})^L \land (x \in L_\alpha)^L
$$

Note particularly that since $\alpha \in \mathrm{Ord}$ and $x \in L\_\alpha$ are formal expressions of first-order logical formulas rather than the genuine $\in$-predicate, they must likewise be relativised to $L$. Accordingly, to prove $(V = L)^L$ in ZF, we must prove that $\alpha \in \mathsf{Ord}$ and $x \in L\_\alpha$ are absolute. Both proofs are possible using transfinite induction.

From Theorems 1 and 2, we can prove:

> **Theorem 3.** $\mathsf{ZFL} \vdash \phi \implies \mathsf{ZF} \vdash \phi^L$

**Proof.** We prove by induction on the proof length of $\mathsf{ZFL} \vdash \phi$. When the proof length is 0, $\phi$ is an axiom of ZFL. When $\phi$ is an axiom of ZF, it follows from Theorem 1, and when $\phi$ is $V = L$, it follows from Theorem 2.

Now assume $\phi$ is proved by applying an inference rule to $\lbrace  \psi\_1, \dots, \psi\_n \rbrace$. The proof length of $\psi\_k$ is smaller than that of $\phi$, so by the induction hypothesis $\mathsf{ZF} \vdash \psi\_k^L$. We can easily show that logical axioms and inference rules are absolute with respect to $L$. Therefore, if $(\psi\_1 \land \dots \land \psi\_n) \rightarrow \phi$ is logically valid, then $(\psi\_1^L \land \dots \land \psi\_n^L) → \phi^L$ is also logically valid, and consequently $\mathsf{ZF} \vdash \phi^L$. ■

As a corollary of Theorem 3, we obtain Theorem 4:

> **Theorem 4.** If ZF is consistent, then ZFL is also consistent.

**Proof.** If ZFL is inconsistent, then $\mathsf{ZFL} \vdash \varnothing \neq \varnothing$, and by Theorem 3, $\mathsf{ZF} \vdash (\varnothing \neq \varnothing)^L \iff \mathsf{ZF} \vdash \varnothing \neq \varnothing$.

Therefore, **V = L is consistent with ZF**.
