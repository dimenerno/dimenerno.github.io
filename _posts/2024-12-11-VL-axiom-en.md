---
layout: post
title: "Consistency of the V = L Axiom"
date: 2024-12-11
tags: [Mathematics, Set Theory]
lang: en
---

## 1. Universe

### 1.1. Von Neumann Universe

We define $\lbrace  V\_\alpha \rbrace$ using [transfinite recursion](https://dimenerno.github.io/2024/12/05/transfinite-recursion/).

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

**Proof.** By transfinite induction.

Accordingly, we can also define $V$ as follows:

- $V\_0 = \varnothing$
- $V\_{\alpha + 1} = \mathcal{P}(V\_\alpha)$
- When $\lambda$ is a limit ordinal, $V\_\lambda = \bigcup\_{\alpha < \lambda}V\_\alpha$

Intuitively, $V$ appears to contain all sets. Indeed, we can prove the following:

> **Theorem.** If $x$ is a set, then $x \in V$.

**Proof.** For a set $x$, we define the **transitive closure** $\bar{x}$ of $x$ as the smallest transitive set containing $x$ as an element. Note that this is well-defined as the intersection of transitive sets is transitive.

Assume $x \notin V$. By the axiom of separation, $y = \lbrace  u \in \bar{x} : u \notin V \rbrace$ is a set, and by the axiom of foundation, there exists an $\in$-minimal element $z$ of $y$. If there exists $w \in z$ such that $w \notin V$, then by transitivity $w \in y$, contradicting the $\in$-minimality of $z$. Therefore, all elements of $z$ are in $V$, and by the axiom of replacement, $\Omega = \lbrace  \alpha \in \mathrm{Ord} \mid \exists w \in z : w \in V\_\alpha\rbrace$ is a set. Let $\beta = \bigcup\_{\alpha \in \Omega}\alpha$. Then $\beta$ is an ordinal, and $z \in V\_{\beta + 1}$. (This is where the definition of von Neumann universe $V\_{\beta + 1} = \mathcal{P}(V\_\beta)$ is invoked.) This yields a contradiction. ■

Consequently, $V$ is not a set. Therefore, whilst $V$ is a model of ZFC in the sense that it contains all sets, [many mathematicians require models to be sets](https://math.stackexchange.com/questions/56726/how-can-there-be-genuine-models-of-set-theory), so it is not a model in the strict sense. (This explains why our proof that $V$ is a 'model' of ZFC does not contradict Gödel's incompleteness theorems; within ZFC, $V$ is not recognised as a valid set-theoretic object.) However, for convenience, in this article, we shall refer to $V$ as a model of set theory. Moreover, we shall understand $x \in V$ as a formal expression for "$x$ is a set".

### 1.2. Gödel Constructible Universe

First, we define [constructibility](https://dimenerno.github.io/2025/05/13/saturation) as follows:

> **Definition.** Let $\mathfrak{A}$ be an $\mathcal{L}$-structure and let $A$ be the underlying domain of $\mathfrak{A}$. $u$ is **constructible** from $\mathfrak{A}$ if there exist some $\mathcal{L}$-formula $\phi(y, x\_1, \dots, x\_n)$ and $a\_1, \dots, a\_n \in A$ such that the following holds:
>
> $$
> y \in u \iff y \in A \land \mathfrak{A} \vDash \phi(y, a_1, \dots, a_n)
> $$

Sometimes we abuse the notation and say that $u$ is constructible from $A$.

For example, with respect to the standard model of arithmetics, the following constructs $u = \lbrace  1, 2 \rbrace$:

- $\phi(y, x\_1, x\_2) : (y = x\_1) \lor (y = x\_2)$
- $a\_1 = 1, a\_2 = 2$

The following constructs $u = \lbrace 2, 5, 10, 17, \dots \rbrace$:

- $\phi(y, x\_1) : \exists z (z \cdot z + x\_1 = y)$
- $a\_1 = 1$

Gödel's constructibility differs from constructibility in the general sense, namely expressibility in language. For instance, since the set of real numbers expressible in language is countable, some real numbers cannot be expressed in language. Let such a real number be $r$. With respect to the standard model of real numbers, the following "constructs" $u = \lbrace  r \rbrace$:

- $\phi(y, x\_1) : x\_1 = y$
- $a\_1 = r$

That is, Gödel's constructibility is more versatile than linguistic constructibility in that it allows initialisation of free variables to arbitrary elements. Nonetheless, it is constrained to have only finite number of free variables.

We now define $\lbrace  L\_\alpha \rbrace$ using transfinite recursion:

- $L\_0 = \varnothing$
- $L\_{\alpha + 1} = \lbrace  x : x \text{ is constructible from } L\_\alpha  \rbrace$
- When $\lambda$ is a limit ordinal, $L\_\lambda = \bigcup\_{\alpha < \lambda} L\_\alpha$
- $L = \bigcup\_{\alpha < \lambda} L\_\alpha$

We can easily show that $L\_\alpha = V\_\alpha$ when $\alpha < \omega$. Specifically, when $\alpha = n$, we can construct $x \in V\_\alpha$ with at most $n$ disjunctions. Therefore:

- $L\_1 = \lbrace  \varnothing \rbrace$
- $L\_2 = \lbrace  \varnothing, \lbrace  \varnothing \rbrace \rbrace$
- $L\_3 = \lbrace  \varnothing, \lbrace  \varnothing \rbrace, \lbrace  \lbrace  \varnothing \rbrace \rbrace, \lbrace  \varnothing, \lbrace  \lbrace  \varnothing\rbrace \rbrace  \rbrace$
- $L\_\omega = \mathsf{HF}$

However, $L\_{\omega + 1} \subsetneq V\_{\omega + 1}$. This is because although $\mathcal{P}(\mathbb{N}) \subset V\_{\omega + 1}$ is uncountable, since the set of first-order logical sentences and $L\_\omega$ are both countable, $L\_{\omega + 1}$ is countable. In general, when $\alpha$ is countable, $L\_\alpha$ is countable.

Nevertheless, $L$ shares many properties with $V$. For instance:

> **Theorem.** For $\alpha \in \mathrm{Ord}$, the following hold:
>
> 1. $L\_\alpha$ is transitive. (Therefore $L$ is transitive)
> 2. $\alpha \in L\_{\alpha + 1} \setminus L\_{\alpha}$

**Proof.** By transfinite induction.

Note that $L$ is not a set since it contains all ordinals. However, there exists a first-order formula $\mathsf{IsInL}\_\alpha(x)$ that expresses $x \in L\_\alpha$. The proof is intricate and involves arithmetising propositions using Gödel numbers. ([See link](https://math.stackexchange.com/questions/198437/a-formula-that-defines-constructible-universe)) At any rate, this means that we may understand $x \in L$ as a formal expression expressing $\exists \alpha \in \mathrm{Ord} :\mathsf{IsInL}\_\alpha(x)$. The two will be co-extensional for models of ZF.

## 2. Relativisation

### 2.1. Relativisation of Formulas

> **Definition.** Let $T$ be an $\mathcal{L}$-theory and $\psi$ an $\mathcal{L}$-formula. We define the **relativisation** $\phi^\psi$, read as the relativisaion of $\phi$ respect to $\psi$, as the formula where all quantifiers in $\phi$ are restricted to satisfy $\psi$.

Using $\mathsf{PA}$ as an example, if $\psi(x) : \exists z(z + z = x)$ and $\phi(x) : \exists z(z \cdot z = x)$, then:

$$
\phi^\psi(x) : \exists z (\psi(z) \land z \cdot z = x)
$$

Semantically, $\phi(x)$ expresses "$x$ is a perfect square" while $\phi^\psi(x)$ expresses "$x$ is a square of an even number".

When it is clear that what $\psi(x)$ is supposed to express is $x \in S$, then we abuse the notation and write $\phi^S$ instead of $\phi^\psi$. Hence in the case of the previous example, we may write $\phi^E$ instead, where $E$ is the set of even numbers. That is,

$$
\phi^E(x) : \exists z \in E (z \cdot z = x)
$$

To use a bit of metaphoric expression, $\phi^S$ is how $\phi$ is "seen from" $S$.

For example, let $o(x)$ be the first-order formula expressing "$x$ is an ordinal". Specifically, it is defined as:

$$
o(x) : \mathrm{tr}(x) \land \forall y \in x \; \mathrm{tr}(y)
$$

where $\mathrm{tr}(x) : \forall y \in x \; \forall z \in y (z \in x)$ expresses "$x$ is transitive". By the abuse of notation, we may write $\phi^{\mathrm{Ord}}$ instead of $\phi^o$. $\phi^{\mathrm{Ord}}$ is how $\phi$ is "seen from" the class of all ordinals. Define:

- $\phi\_1 : \forall x \exists y \forall z (z \subset x \rightarrow z \in y)$
- $\phi\_2 : \forall x \forall y \exists z (z = x \cup y)$

That is, $\phi\_1$ expresses closure under power set operation and $\phi\_2$ expresses closure under set union. We have:

- $\mathsf{ZFC} \not\vdash \phi\_1^\mathrm{Ord}$
- $\mathsf{ZFC} \vdash \phi\_2^\mathrm{Ord}$,

since the set of ordinals is closed under union but not under power set. Put in another way, $\phi\_1$ successfully distinguishes the class of all sets — what ZFC tries to describe — and the class of ordinals, while $\phi\_2$ cannot. Generalising this observation, for a theory $T$ and a set $A$, the more formulas $\phi$ such that $T \vdash \phi \leftrightarrow \phi^A$, the better $A$ "conforms" to the description of $T$.

This leads us to the following definition.

> **Definition.** For an $\mathcal{L}$-theory $T$ and a set $A$, $\phi$ is said to be **absolute** with respect to $A$ if for every $\mathcal{L}$-formula $\phi$,
>
> $$
> T \vdash \forall x_1, \dots, x_n \in A (\phi(x_1, \dots, x_n) \leftrightarrow \phi^A(x_1, \dots, x_n))
> $$

Note that the definition simply becomes $T \vdash \phi^A$ when $\phi$ has no free variables, and it is given that $T \vdash \phi$.

### 2.2. $L$-Relativisation

Our goal now is to show that the axioms of ZF are absoulte with respect to $L$. That is:

> **Theorem 1.** If $\phi$ is an axiom of ZF, then $\mathsf{ZF} \vdash \phi^L$.

That is to say,

> "When _seen from_ $L$, $L$ is a model of ZF" can be proved in ZF.

Of course, we only know that $L \subset V$ and do not know whether $V = L$, which leaves open the possibility of some set $x$ not belonging to $L$. Yet according to Theorem 1 states is that, even if there exists such a set $x$, its abscence does not break the _internal consistency_ of $L$.

For example, suppose some set $x = \lbrace  y, z \rbrace$ is absent from $L$. At first glance, the absence of $x$ seems to suggest that $L$ does not satisfy the pairing axiom $\mathsf{Pair}$:

$$
\mathsf{Pair} := \forall y, z \; \exists x \; \forall w: w \in x \leftrightarrow (w = y \lor w = z)
$$

However, the pairing axiom as viewed from inside $L$ is:

$$
\mathsf{Pair}^L := \forall y, z \in L \; \exists x \in L \; \forall w \in L: w \in x \leftrightarrow (w = y \lor w = z)
$$

Note that the quantification $\forall y, z$ is also restricted to $L$. That is, the absence of $x = \lbrace  y, z \rbrace$ causes problems in $L$ _only when_ $y, z \in L$. Conversely, if $x = \lbrace  y, z \rbrace \notin L$ implies $y, z \notin L$, then $L$ satisfies $\mathsf{Pair}^L$. This is, $L$ lacks sets only in a way that maintains internal consistency.

Although we do not give the full proof, we highlight that the key reason Theorem 1 holds is that $L$, like $V$, is a transitivie class of sets, which leads to the following lemma.

> **Lemma.** The following predicates are absolute with respect to $L$ in ZF:
>
> 1. $x \in y$
> 2. $x \subset y$
> 3. $x = \bigcup y$
> 4. $x = \lbrace  y, z \rbrace$
> 5. $\alpha \in \mathrm{Ord}$
> 6. $x$ is transitive
> 7. [$\Delta\_0$ formulas](https://math.stackexchange.com/questions/404699/delta-0-formulas)

From this lemma, it is not too difficult to prove Theorem 1. Moreover, we can prove:

> **Theorem 2.** $\mathsf{ZF} \vdash (V = L)^L$

Here, $V = L$ is a formal expression standing for $\forall x (x \in L)$. At first glance it may seem that $(V = L)^L$ is thus the trivial proposition $\forall x \in L (x \in L)$. However, when we actually expand $V = L$ as a first-order formula, we have:

$$
\forall x \; \exists \alpha  \; (\alpha \in \mathrm{Ord} \land x \in L_\alpha)
$$

so $(V = L)^L$ becomes:

$$
\forall x \in L \; \exists \alpha \in L \; (\alpha \in \mathrm{Ord})^L \land (x \in L_\alpha)^L
$$

Note particularly that since $\alpha \in \mathrm{Ord}$ and $x \in L\_\alpha$ are formal expressions of first-order formulas rather than a genuine $\in$-relation, they must likewise be relativised to $L$. Thus, to prove $(V = L)^L$ in ZF, _we must prove that $\alpha \in \mathrm{Ord}$ and $x \in L\_\alpha$ are also absolute_. The former follows from the previous lemma, and the latter also "almost" follows from the lemma, except that $x \in L\_\alpha$ is a $\Sigma_1$-sentence, so slightly more argument is required to secure its absoluteness.

From Theorems 1 and 2, we can prove:

> **Theorem 3.** $\mathsf{ZFL} \vdash \phi \implies \mathsf{ZF} \vdash \phi^L$

**Proof.** We prove by induction on the proof length of $\mathsf{ZFL} \vdash \phi$. When the proof length is 0, $\phi$ is an axiom of ZFL. When $\phi$ is an axiom of ZF, it follows from Theorem 1, and when $\phi$ is $V = L$, it follows from Theorem 2.

Now assume $\phi$ is proved by applying an inference rule to $\lbrace  \psi\_1, \dots, \psi\_n \rbrace$. The proof length of $\psi\_k$ is smaller than that of $\phi$, so by the induction hypothesis $\mathsf{ZF} \vdash \psi\_k^L$. We can easily show that logical axioms and inference rules are absolute with respect to $L$. Using modus ponens as an example, this means that:

$$
\mathsf{ZF} \vdash ((\phi \land \phi \rightarrow \psi) \rightarrow \psi)^L
$$

Therefore, if $(\psi\_1 \land \dots \land \psi\_n) \rightarrow \phi$ is logically valid, then $(\psi\_1^L \land \dots \land \psi\_n^L) → \phi^L$ is also logically valid, and consequently $\mathsf{ZF} \vdash \phi^L$. ■

As a corollary of Theorem 3, we obtain Theorem 4:

> **Theorem 4.** If ZF is consistent, then ZFL is also consistent.

**Proof.** If ZFL is inconsistent, then $\mathsf{ZFL} \vdash \varnothing \neq \varnothing$, and by Theorem 3, $\mathsf{ZF} \vdash (\varnothing \neq \varnothing)^L \iff \mathsf{ZF} \vdash \varnothing \neq \varnothing$, which contradicts the consistency of ZF. ■

Therefore, **V = L is consistent with ZF**.
