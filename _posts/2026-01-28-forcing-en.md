---
layout: post
title: "Introduction to Forcing"
date: 2026-01-28
tags: ["Mathematics", "Set Theory", "Logic"]
related:
lang: en
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

Gödel, in 1938, introduced the axiom of constructibility and demonstrated that the negation of the continuum hypothesis is unprovable in ZFC. This is because the constructible universe $L$ is a model of ZFC in which the continuum hypothesis holds. Later, in 1963, Cohen developed forcing and discovered a model of ZFC in which the continuum hypothesis does not hold. This established the independence of the continuum hypothesis from ZFC. This post outlines Cohen's forcing and the proof of the independence of the continuum hypothesis. The proofs are written somewhat loosely, with an emphasis on the basic ideas, so readers should refer to textbooks for more rigorous approach.

It goes without saying that this post assumes the consistency of ZFC.

### 1. Countable Transitive Models

Let $V$ be the cumulative hierarchy. Then $(V, \in)$ is a "model" of ZFC.

> **Theorem.** There exists a submodel $(M, \in)$ of $V$ satisfying the following properties:
>
> 1. $M$ is a model of ZFC.
> 2. $M$ is countable.
> 3. $M$ is transitive. That is, for any $x \in M$ and $y \in V$,
>
> $$
> V \vDash y \in x \implies V \vDash y \in M
> $$

**Proof.** The following theorem is used:

> **Mostowski Collapse Lemma.** Let $X$ be a class with a binary relation $R$ satisfying the following:
>
> 1. **Smallness:** $R^{-1}(x) = \lbrace y \in X : yRx \rbrace$ is a set.
> 2. **Well-foundedness:** Any non-empty subset $S$ of $X$ has an $R$-minimal element.
> 3. **Extensionality:** $x = y$ if and only if $R^{-1}(x) = R^{-1}(y)$.
>
> Then there exists a unique transitive model $(M, \in)$ of $V$ such that $(M, \in)$ is isomorphic to $(X, R)$.

The proof of this lemma is relatively straightforward but lengthy, so refer to Chapter 14 of Hrbacek & Jech instead.

By the downward Löwenheim-Skolem theorem, there exists a countable submodel $(N, \in)$ of $(V, \in)$. Since smallness, well-foundedness, and extensionality are all expressible in first-order logic, it follows that $(N, \in)$ satisfies the conditions of the Mostowski Collapse Lemma if $(V, \in)$ does. Hence, there exists a transitive model $(M, \in)$ isomorphic to $(N, \in)$. Since $N$ and $M$ are isomorphic, $M$ is countable. ■

Thus, $V$ has a countable transitive submodel $M$. The countability and transitivity of $M$ will play an important role in forcing.

### 2. On Notation

Earlier, we referred to $V$ as a "model" with quotation marks because, strictly speaking, a model must be a set. That is, $V$ is too large to be a model. Therefore, the Löwenheim-Skolem theorem cannot be applied to $V$ directly.

However, this issue can be resolved by replacing $V$ with $V\_\kappa$ (where $\kappa$ is an inaccessible cardinal) or with another set-model of ZFC (guaranteed by Gödel's completeness theorem, assuming the consistency of ZFC). For convenience, this post will treat $V$ as if it were a model (set), but readers uncomfortable with this can replace every occurrence of $V$ in this post with $V\_\kappa$.

Additionally, the following conventions will be used:

> **Conventions.**
> 
> 1. "Model of set theory" will be used synonymously with "model of ZFC."
> 2. $V \vDash \phi$ will be abbreviated as $\phi$. **That is, the background of all statements is $V$.**

### 3. Relativisation

Let $M$ be a transitive model of set theory. Since ZFC is a theory in the language of a single binary relation $\in$, the following is guaranteed for any $x, y \in M$ (note that, by the earlier convention, $x \in y$ on the right-hand side means $V \vDash x \in y$):

$$
M \vDash x \in y \iff x \in y
$$

However, this does not automatically hold for other relations. For example, for $x, z \in M$,

$$
M \vDash y = \mathcal{P}(x)
$$

but

$$
y \neq \mathcal{P}(x)
$$

may hold.[^1] Therefore, it is necessary to distinguish between a statement $\phi$ in $V$ and the statement $\phi$ as viewed "internally" in $M$. To this end, we define the following:

> **Definition.** For a statement $\phi$, the relativisation of $\phi$ to $M$, denoted $\phi^M$, is defined recursively as follows:
>
> 1. For $x, y \in M$, $(x \in y)^M$ is $x \in y$.
> 2. For $x, y \in M$, $(x = y)^M$ is $x = y$.
> 3. $(\phi \land \psi)^M$ is $\phi^M \land \psi^M$.
> 4. $(\phi \lor \psi)^M$ is $\phi^M \lor \psi^M$.
> 5. $(\lnot \phi)^M$ is $\lnot \phi^M$.
> 6. $(\forall x:\phi)^M$ is $\forall x \in M: \phi^M$.
> 7. $(\exists x:\phi)^M$ is $\exists x \in M : \phi^M$.

In other words, a statement relativised to $M$ is obtained by restricting the quantifiers in the original statement to $M$.

> **Remark.** By definition, $\phi^M \iff M \vDash \phi$. This may raise the question: why define relativisation when $\vDash$ already exists? The reason is that $M \vDash \phi$ is a meta-statement in model theory, whereas $\phi^M$ is a statement in set theory. That is, relativisation allows the fact that "$\phi$ holds in $M$" to be expressed within $V$. This will become important when defining the forcing relation $\Vdash$.

### 4. Absoluteness

> **Definition.** Let $M, N$ be transitive "models" of set theory, and suppose $M$ is a sub"model" of $N$. Let $\phi$ be an $n$-ary statement. If, for any $x\_1, \dots, x\_n \in M$,
>
> $$
> \phi^M(x_1, \dots x_n) \leftrightarrow \phi^N(x_1, \dots, x_n),
> $$
>
> then $\phi$ is said to be **absolute** between $M$ and $N$. If $N = V$, the reference to $V$ is omitted, and $\phi$ is said to be absolute over $M$.

That is, a statement $\phi$ is absolute over $M$ if $\phi$ as viewed internally in $M$ coincides with $\phi$ as viewed externally in $V$.

> **Definition.** A statement is $\Delta\_0$ if all its quantifiers are bounded, such as $\exists x \in A$ and $\forall x \in A$.

For example, the definition of $y \subseteq x$ is

$$
\forall z \in y (z \in x),
$$

which is a $\Delta\_0$ statement because $\forall z$ is bounded by $y$.

> **Theorem.**
>
> 1. The composition of absolute statements is absolute.
> 2. $\Delta\_0$ statements are absolute between transitive models.

**Proof.** By induction on statements. ■

> **Corollary.** The following statements are absolute between transitive models:
>
> 1. $y \subseteq x$
> 2. $f$ is a function, $f$ is surjective, $f$ is injective

The notion of absoluteness can be extended from statements to sets. For example, $\omega$ is defined as the smallest inductive set. Specifically,

$$
\mathrm{IsInductive}(x) : 0 \in x \land \forall y( y \in x \rightarrow y\cup \{y\} \in x)
$$

and

$$
\mathrm{IsOmega}(x) : \mathrm{IsInductive}(x) \land \forall z\Big(\mathrm{IsInductive}(z) \rightarrow z \subseteq x \Big).
$$

It can be shown that there exists a unique set satisfying $\mathrm{IsOmega}$, which is defined as $\omega$.

If the definition of a set $s$ is given by a statement $\phi$,[^2] then $s$ is said to be absolute between $M$ and $N$ if $\phi$ is absolute between $M$ and $N$. For example, by the corollary above, $\mathrm{IsOmega}$ is absolute between transitive models. Hence, $\omega$ is absolute between transitive models.

> **Corollary.** The following sets are absolute between transitive models:
>
> 1. $\varnothing$
> 2. $x \times y, \lbrace x, y \rbrace, (x, y)$
> 3. $\bigcup x, \bigcap x$
> 4. $\operatorname{dom} x$ when $x$ is a set of ordered pairs
> 5. $\omega\; (=\aleph\_0)$

Here are some examples nof non-absoluteness.

> **Theorem.** The following propositions/sets are not absolute between transitive models:
> 
> 1. $\mathcal{P}(x)$
> 2. $x$ is countable.
> 3. $x$ is a cardinal.
> 4. $\aleph\_n \; (n > 0)$

Let us briefly examine why $\mathcal{P}(x)$ is not absolute. The definition of $\mathcal{P}(x)$ is as follows:

$$
y = \mathcal{P}(x) : \underbrace{\forall z \subseteq x (z \in y)}_{(1)} \land \underbrace{\forall z \in y (z \subseteq x)}_{(2)}
$$

While (2) is $\Delta\_0$ and thus unproblematic, (1) is the issue. Although (1) appears to be a bounded quantifier, it can be expanded as follows:

$$
(1) : \forall z (z \subseteq x \rightarrow z \in y)
$$

This shows that the quantifier in (1) is unbounded. Therefore, $\mathcal{P}(x)$ is not $\Delta\_0$ and, indeed, is not absolute. Similarly, it can be verified that 2, 3, and 4 are also not expressible as $\Delta\_0$ statements.

### 5. Forcing Posets

We now introduce terminology directly related to forcing.

> **Definition.** $(\mathbb{P}, \leq, 1)$ is a forcing poset if $(\mathbb{P}, \leq)$ is a partially ordered set with $1$ as its greatest element.

In the context of forcing, $p \leq q$ is typically interpreted as "$p$ is more detailed than $q$," "$p$ is stricter," "$p$ is more specific," or "$p$ is less likely to occur." Alternatively, $p$ is an "extension" of $q$. For example:

- $p$: The event that the result of rolling a die is an even number less than or equal to 4.
- $q$: The event that the result of rolling a die is an even number.

Here, $p$ is more detailed, stricter, and less likely to occur than $q$. Moreover, $p$ is an extension of $q$ since $p$ imposes additional conditions on $q$. Thus, it is natural to define the order $p \leq q$ in the context of forcing.

A more mathematical example is given by:

$$
\mathrm{Fn}(\omega, \omega) = \{ f \; | \; f : \omega \to \omega \text{ is a partial function with finite domain}\}
$$

with the following order:

$$
f \leq g \iff f|_{\operatorname{dom}g} = g
$$

For instance, $\lbrace (0, 1), (1, 2) \rbrace  \leq \lbrace  (1, 2) \rbrace $. That is, $f \leq g$ means that $f$ is a more detailed function than $g$. Alternatively, $f$ is an extension of $g$. Since $\mathrm{Fn}(\omega, \omega)$ has $\varnothing$ as its greatest element, $\mathrm{Fn}(\omega, \omega)$ is a forcing poset.

Unless otherwise stated, $\mathbb{P}$ will be assumed to be a forcing poset.

### 6. Filters

> **Definition.** A subset $\mathcal{F} \subseteq \mathbb{P}$ is a **filter** on $\mathbb{P}$ if it satisfies the following:
>
> 1. $1 \in \mathcal{F}$.
> 2. If $x \in \mathcal{F}$ and $x \leq y$, then $y \in \mathcal{F}$.
> 3. If $x, y \in \mathcal{F}$, then there exists $z \in \mathcal{F}$ such that $z \leq x$ and $z \leq y$.

Filters have been discussed multiple times on this blog, and their key property is condition 3. That is, any two elements of a filter have a common extension. This property gives filters a certain "directedness." In topology, this directedness is used to make filters converge to a point, and in model theory, filters are used to construct new structures (ultraproducts). Inspired by this, forcing uses filters to construct new models of set theory.

For example, consider the earlier example $\mathbb{P} = \mathrm{Fn}(\omega, \omega)$. For a total function $f: \omega \to \omega$, the following is a filter:

$$
\mathcal{F}_f = \{ g \in \mathrm{Fn}(\omega, \omega) : f \leq g\}
$$

In particular, $\mathcal{F}\_f$ can be thought of as the filter that "represents" the function $f$. Specifically, the following holds:

$$
\bigcup \mathcal{F}_f = f
$$

In summary, a total function can be obtained from the order of partial functions by defining a filter. This suggests an intriguing possibility: for a model of set theory $M$, $\mathbb{P}$ may be an element of $M$, but the filter $\mathcal{F}$ and $\bigcup \mathcal{F}$ may not be elements of $M$. In that case, one might consider "adding" $\mathcal{F}$ to $M$ to obtain a new model of set theory. This is, in essence, the idea behind forcing.

To elaborate, suppose $M$ is a countable transitive submodel of $V$. We will define a suitable forcing poset $\mathbb{P} \in M$ and a filter $\mathcal{F} \subseteq \mathbb{P}$. In particular, $\mathcal{F}$ will be defined to satisfy certain conditions — specifically, $\mathcal{F}$ must be **generic**, and $\mathbb{P}$ must be **separative** — ensuring that $\mathcal{F} \notin M$. By "adding" $\mathcal{F}$ to $M$, we obtain a new model of set theory $M[\mathcal{F}]$. This is conceptually similar to adjoining an element $a$ to a field $F$ to obtain $F(a)$.

Of course, for $M[\mathcal{F}]$ to be a model of set theory, we must add not only $\mathcal{F}$ to $M$ but also all sets that can be obtained from $\mathcal{F}$ and the elements of $M$ through set operations. This is analogous to adjoining $a^2, a + 1, 3a$, etc., when adjoining $a$ to a field $F$. To achieve this systematically, we will introduce the concept of **$\mathbb{P}$-names**.

### 7. Denseness and Generic Filters

> **Definition.** A subset $D \subseteq \mathbb{P}$ is **dense** if the following holds:
>
> $$
> \forall x \in \mathbb{P} \; \exists y \in D : y \leq x
> $$

That is, $D$ always contains an element more detailed than any given $x \in \mathbb{P}$. This is analogous to the set $A = \lbrace 0.9, 0.99, 0.999, ...\rbrace $ being "dense" around 1, as $A$ always contains elements closer to 1 than any given $x \in \mathbb{R}\setminus\lbrace 1\rbrace $.

Returning to the example $\mathbb{P} = \mathrm{Fn}(\omega, \omega)$, for any $n \in \omega$, the following $D\_n$ is dense:

$$
D_n = \{ g \in \mathrm{Fn}(\omega, \omega) : n \in \operatorname{dom}g\}
$$

This is because any partial function can be extended to include $n$ in its domain.

A dense set $D$ can be understood as representing a "common property." For instance, the earlier $D\_n$ represents the property "having $n$ in the domain," which is a "common" property since any partial function can be extended to have $n$ in its domain.

Intuitively, if we want a filter $\mathcal{F}$ on $\mathbb{P}$ to be a new element not in $M$, $\mathcal{F}$ must be *hard to define*. If $\mathcal{F}$ were definable by some $\phi$, then $\exists! x \lnot\phi(x)$ would be a theorem of ZFC, implying $\mathcal{F} \in M$. The difficulty in defining $\mathcal{F}$ means that $\mathcal{F}$ must *lack any special characteristics*. In other words, $\mathcal{F}$ must satisfy *all* common properties.

This leads to the following definition:

> **Definition.** Let $M$ be a transitive model of set theory, $\mathbb{P} \in M$, and $G \subseteq \mathbb{P}$ a filter (not necessarily in $M$). If $G \cap D \neq \varnothing$ for every dense subset $D \in M$ of $\mathbb{P}$, then $G$ is said to be **$\mathbb{P}$-generic over $M$**.

Here, $G \cap D \neq \varnothing$ intuitively means that $G$ satisfies the property represented by $D$. Note that the definition of genericity is relative to the background model $M$.

For a concrete example, let $\mathrm{id}:\omega \to \omega$ be the identity function. The filter $\mathcal{F}\_{\mathrm{id}}$ is not generic. This is because:

$$
D = \{ f \in \mathrm{Fn}(\omega, \omega) \;|\; \exists n \in \operatorname{dom} f : f(n) \neq n \}
$$

is dense, yet $D \cap \mathcal{F} = \varnothing$. This aligns with the fact that $\mathrm{id}$ is easily definable and $\mathrm{id} \in M$.

Conversely, is a generic filter truly not an element of $M$? To ensure this, one additional condition is required.

> **Definition.** For $x, y \in \mathbb{P}$, if there is no $z \in \mathbb{P}$ such that $z \leq x$ and $z \leq y$, then $x$ and $y$ are said to be **incompatible**, denoted $x \perp y$.

> **Definition.** $\mathbb{P}$ is **separative** if, for any $z \in \mathbb{P}$, there exist $x, y \leq z$ such that $x \perp y$.

> **Theorem.** Let $M$ be a transitive model of set theory. If $\mathbb{P} \in M$ is separative and $G \subseteq \mathbb{P}$ is a $\mathbb{P}$-generic filter over $M$, then $G \notin M$.

**Proof.** Suppose $G \in M$. Then $D = \mathbb{P} \setminus G$ is an element of $M$. We show that $D$ is dense. If $D$ is not dense, there exists $x \in \mathbb{P}$ such that $y \leq x$ implies $y \notin D$. That is, $y \in G$. Since $\mathbb{P}$ is separative, there exist $y\_1, y\_2 \leq x$ such that $y\_1 \perp y\_2$. Thus, $y\_1, y\_2 \in G$. By the definition of a filter, there exists $z \in \mathbb{P}$ such that $z \leq y\_1, y\_2$. However, this contradicts $y\_1 \perp y\_2$.

Hence, $D$ is dense. Since $G$ is generic, $G \cap D \neq \varnothing$. However, this contradicts the definition of $D$. Therefore, $G \notin M$. ■

Due to the nature of generic filters, constructing explicit examples of generic filters is challenging. Instead, the following theorem guarantees their existence.

> **Definition.** Let $\mathcal{C}$ be a collection of dense subsets of $\mathbb{P}$. A filter $G \subseteq \mathbb{P}$ is $\mathcal{C}$-generic if $G \cap D \neq \varnothing$ for every $D \in \mathcal{C}$.

> **Theorem.** If $\mathcal{C}$ is a countable collection of dense subsets of $\mathbb{P}$, then a $\mathcal{C}$-generic filter exists.

**Proof.** Let $\mathcal{C} = \lbrace  D\_n \rbrace \_{n \in \omega}$. First, choose $x\_0 \in D\_0$. If $x\_n \in D\_n$ has been chosen, choose $x\_{n+1} \in D\_{n+1}$ such that $x\_{n+1} \leq x\_n$ (such an $x\_{n+1}$ always exists since $D\_{n+1}$ is dense). Then $G = \lbrace  x\_n \rbrace \_{n \in \omega}$ is the desired generic filter. ■

> **Corollary.** If $M$ is a countable transitive model, then there exists a $\mathbb{P}$-generic filter over $M$.

**Proof.** Since $M$ is countable, $\mathcal{C} = \lbrace  D \in M : D \text{ is }\mathbb{P}\text{-dense}\rbrace $ is countable. ■

Thus, in countable transitive models, a $\mathbb{P}$-generic filter can always be assumed. This is why countability is crucial, as mentioned earlier.
> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

### 8. Martin's Axiom (A Digression)

When $\mathcal{C}$ is uncountable, a $\mathcal{C}$-generic filter may not exist. However, if the size of $\mathbb{P}$ is restricted, the possible dense sets become limited, and consequently, even uncountable $\mathcal{C}$ may admit a generic filter.

> **Definition.** A subset $A$ of $\mathbb{P}$ is an **antichain** if, for any $x, y \in A$, $x \perp y$.

> **Definition.** $\mathbb{P}$ satisfies the **countable chain condition** if every antichain in $\mathbb{P}$ is at most countable.

Antichains and the countable chain condition were discussed in [this post](https://dimenerno.github.io/2025/12/26/suslin), where it was explained that the countable chain condition limits the "width" of a partially ordered set (or tree).

> **Definition.** Let $\kappa$ be a cardinal. $\mathrm{MA}\_\kappa$ is the following statement: if $\mathbb{P}$ satisfies the countable chain condition and $\mathcal{C}$ is a collection of $\mathbb{P}$-dense sets with $\|\mathcal{C}\| \leq \kappa$, then a $\mathcal{C}$-generic filter exists.

By the earlier theorem, $\mathrm{MA}\_{\aleph\_0}$ trivially holds. On the other hand, $\mathrm{MA}\_\kappa$ implies $\kappa < 2^{\aleph\_0}$, so $\mathrm{MA}\_\kappa$ does not hold for $\kappa \geq 2^{\aleph\_0}$.

> **Martin's Axiom.** $\mathrm{MA}\_\kappa$ holds for all $\kappa < 2^{\aleph\_0}$.

Martin's Axiom is known to be independent of ZFC. As one might expect, assuming Martin's Axiom makes it easier to obtain generic filters, thereby allowing forcing to be used more freely. However, Martin's Axiom is not necessary for proving the consistency of the continuum hypothesis.

### 9. $\mathbb{P}$-names

We have seen that if $\mathbb{P}$ is separative and $G$ is $\mathbb{P}$-generic, then $G \notin M$. Thus, it appears that $M$ cannot make any statements about $G$. However, by employing a rather ingenious trick, it is possible to make some statements about $G$ even within $M$. This is, in fact, the brilliance of forcing.

The idea is as follows. In [this post](https://dimenerno.github.io/2025/07/18/boolean-algebra), filters were described as collections of "true" elements. That is, if $\mathbb{P}$ is viewed as a collection of events, then $\mathcal{F}$ can be thought of as the collection of events that actually occur.

Building on this, one can conceive of the notion of a *set that probabilistically contains elements* using $\mathbb{P}$. For instance, if $p \in \mathbb{P}$ actually occurs, then a set $X$ containing $a$ as an element can be written as follows:

$$
(a, p) \in X
$$

The filter $G$ specifies which events actually occur. If $p \in G$, then $X$ actually contains $a$ as an element. This can be expressed as follows:

$$
p \in G \iff a \in X_G
$$

Metaphorically, $X$ is in a quantum superposition state, and $X\_G$ is its state after observation.

However, $X$, such a probabilistic set, could itself be an element of another set. Conversely, in $(a, p) \in X$, $a$ could also be a probabilistic set. Thus, it is more accurate to write:

$$
p \in G \iff a_G \in X_G
$$

Formalising the above discussion rigorously yields the definition of $\mathbb{P}$-names.

> **Definition.** A set of the following form is called a **$\mathbb{P}$-name**:
>
> $$
> \sigma = \{ (\tau, p) : p \in \mathbb{P}, \tau \text{ is a }\mathbb{P}\text{-name}\}
> $$
>
> The collection of $\mathbb{P}$-names in $M$ is denoted $M^\mathbb{P}$.

Note that, by definition, $M^\mathbb{P} \subseteq M$, but $M^\mathbb{P} \in M$ is not guaranteed.

> **Definition.** Let $G$ be a filter on $\mathbb{P}$, and let $\sigma$ be a $\mathbb{P}$-name. The **valuation** of $\sigma$ in $G$, denoted $\sigma\_G$, is defined as follows:
>
> $$
> \sigma_G = \{ \tau_G \;|\; \exists p \in G : (\tau, p) \in \sigma \}
> $$

Although this definition may appear circular, it is, in fact, a proper recursive definition.[^3] For example, $\varnothing$ is a $\mathbb{P}$-name, and for any $p \in \mathbb{P}$, $\sigma = \lbrace (\varnothing, p) \rbrace$ is also a $\mathbb{P}$-name. In particular,

$$
p \in G \iff \sigma_G = \{\varnothing\}
$$

A slightly more complex example is the following: for $p, q, r \in \mathbb{P}$,

$$
\tau = \bigg\{ \Big(\big\{ ( \{ (\varnothing, r) \}, p), (\varnothing, q) \big\}, q\Big), (\varnothing, r) \bigg\}
$$

is a $\mathbb{P}$-name. Verify that if $q, r \in G$ and $p \notin G$, then

$$
\tau_G = \{\{ \varnothing\}, \varnothing\}
$$

At this point, let us introduce the following notation:

$$
\check{x} = \{(y, 1): y \in x\}
$$

Recall that $1$ is the greatest element of $\mathbb{P}$. From this, it follows that for any filter $G$, $\check{x}\_G = x$. That is, $\check{x}$ is the "name tag" of $x$.

Earlier, it was stated that $\mathbb{P}$-names allow some statements about $G$ to be made within $M$, even though $G \notin M$. This is because the following $\mathbb{P}$-name serves as the "name tag" of $G$:

$$
\Gamma = \{ (\check{p}, p) : p \in \mathbb{P} \}
$$

The meaning of $\Gamma$ being the name tag of $G$ is that $\Gamma\_G = G$ (verify this directly). This is significant because $\Gamma \in M$ since $\mathbb{P} \in M$. In other words, while $G$ may not be an element of $M$, its name tag is.

Now, define $M[G]$ as follows:

> **Definition.**
>
> $$
> M[G] = \{\sigma_G : \sigma \in M^\mathbb{P} \}
> $$

Since $\check{x}\_G = x$ for $x \in M$, it follows that $M \subset M[G]$. Moreover, since $\Gamma\_G = G$, it follows that $G \in M[G]$.

As you might have guessed, $M[G]$ is the "new" model of set theory we sought to obtain. That is, if $M$ is a transitive model of set theory, then $M[G]$ is also a transitive model of set theory. To prove this, we first define the forcing relation.

### 10. Forcing Relation

The structure of $M[G]$ varies significantly depending on the elements of $G$. Let us return to the earlier example of $\mathrm{Fn}(\omega, \omega)$. Previously, it was stated that if $f: \omega \to \omega$ is a total function, then there exists a filter $\mathcal{F}\_f$ such that $\bigcup \mathcal{F}\_f = f$. The converse also holds to some extent. If $G$ is a generic filter on $\mathrm{Fn}(\omega, \omega)$, then $\bigcup G: \omega \to \omega$ is a total function. Furthermore, if $(1, 2) \in G$, then $\bigcup G : 1 \mapsto 2$. This can be expressed as follows:

$$
(1, 2) \text{ forces } \Big(\bigcup G \Big)(1) = 2
$$

However, since we wish for the above statement to be expressible within $M$, we will instead use $\mathbb{P}$-names. That is,

$$
(1, 2) \text{ forces } \Big(\bigcup \Gamma \Big)(\check{1}) = \check{2}
$$

By defining this rigorously, we obtain the forcing relation.

> **Definition.** Let $\phi(x\_1, \dots, x\_n)$ be a formula with $n$ free variables. For any $\tau\_1, \dots, \tau\_n \in M^\mathbb{P}$ and $p \in \mathbb{P}$, we define
>
> $$
> p \Vdash \phi(\tau_1, \dots, \tau_n)
> $$
>
> as follows: for any $\mathbb{P}$-generic filter $G$ over $M$,
> 
> $$
> p \in G \rightarrow \phi^{M[G]}\big((\tau_1)_G, \dots, (\tau_n)_G\big)
> $$

(At this point, it is worth reminding the reader that the truth of a formula is evaluated with respect to $V$.)

The symbol $\Vdash$ is read as "forces."

As an example, the following statements hold:

$$
(1, 2) \Vdash \Big(\bigcup \Gamma \Big)(\check{1}) = \check{2}
$$

$$
\varnothing \Vdash \bigcup \Gamma \text{ is a function}
$$

### 11. Fundamental theorems of forcing

We have now arrived at what may be called the core theorems of forcing. Unfortunately, the proofs are omitted here, as the author is still studying them; interested readers are referred to Kunen (1980) (Theorem 1 and Theorem 2 appear in Chapter 7, Theorem 3.6).

> **Fundamental Theorem 1 of Forcing.** Given $\mathbb{P}$, there exists a relation $\Vdash^\ast$ that is definable within $M$ such that the following holds: for any formula $\phi$ and any $\mathbb{P}$-names $\tau\_1, \dots, \tau\_n$,
>
> $$
> p \Vdash \phi(\tau_1, \dots, \tau_n) \longleftrightarrow \Big( p \Vdash^* \phi(\tau_1, \dots, \tau_n) \Big)^M
> $$

In other words, even inside $M$ one can faithfully simulate the forcing relation $\Vdash$. Another central theorem is the following.

> **Fundamental Theorem 2 of Forcing.** For any formula $\phi$ and any $\mathbb{P}$-names $\tau\_1, \dots, \tau\_n$,
>
> $$
> \bigg( \phi\Big((\tau_1)_G, \dots, (\tau_n)_G \Big) \bigg)^{M[G]} \longleftrightarrow \;\;\exists p \in G : p \Vdash \phi(\tau_1, \dots, \tau_n)
> $$

Thus, if $\phi(\vec{\tau}\_G)$ is true in $M[G]$, this is because there is some $p \in G$ that forces $\phi(\vec{\tau})$. Intuitively, one may understand this as follows. To say that $G$ is generic is to say that $G$ is maximally “typical”, in the sense of avoiding accidental coincidences or exceptional behaviour. Hence, if $M[G]$ comes to satisfy a sentence $\phi$ that was not satisfied in $M$, this must be due not to some external accident, but rather to conditions internal to $G$.

From Fundamental Theorems 1 and 2, we obtain the following.

> **Theorem.** If $M$ is a transitive model of set theory, then $M[G]$ is also a transitive model of set theory.

(The proof below was written informally by the author, and may contain mistakes.)

**Proof.** We first show transitivity. Let $x \in M[G]$, and suppose $y \in x$. We must show that $y \in M[G]$.

By the definition of $M[G]$, there exists some $\sigma \in M^{\mathbb{P}}$ such that $x = \sigma\_G$. Hence, from $y \in x$ we obtain that there exist a $\mathbb{P}$-name $\tau$ and some $p \in G$ such that $(\tau, p) \in \sigma$ and $y = \tau\_G$. Since $M$ is transitive, from

$$
(\tau, p) \in \sigma \in M
$$

it follows that $(\tau, p) \in M$, and in particular that $\tau \in M$. Therefore $\tau\_G = y \in M[G]$.

We now show that $M[G]$ is a model of ZFC. Let $\theta$ be an axiom of ZFC; it suffices to show that $\theta^{M[G]}$ holds. For instance, suppose that $\theta$ is the Separation axiom for $\phi(x, \vec{c})$ (where $\vec{c}$ are elements of $M[G]$). That is,

$$
\theta \Leftrightarrow \forall x \;\exists y : y = \{z \in x : \phi(z, \vec{c})\}
$$

and

$$
\theta \Leftrightarrow \forall x \in M[G] \;\exists y\in M[G] : y = \{z \in x : \phi^{M[G]}(z, \vec{c})\}
$$

By the meaning of $\forall$, it is enough to show that $\theta^{M[G]}$ holds for an arbitrary $x = a$.

$$
y = \{ z \in \sigma_G : \phi^{M[G]}(z, \vec{c}) \} \in M[G]
$$

By the definition of $M[G]$, there exists some $\vec{\tau} \in M^{\mathbb{P}}$ such that $\vec{c} = \vec{\tau}\_G$. Hence we may rewrite this as

$$
y = \Big\{ \pi_G : \big( \exists p\in G\; (\pi, p) \in \sigma \big)\land\phi^{M[G]}(\pi_G, \vec{\tau}_G) \Big\} 
$$

By Fundamental Theorem 2,

$$
\phi^{M[G]}(\pi_G, \vec{\tau}_G) \longleftrightarrow \exists q \in G: q\Vdash \phi(\pi, \vec{\tau}) 
$$

By Fundamental Theorem 1,

$$
q\Vdash \phi(\pi, \vec{\tau}) \longleftrightarrow \Big( q \Vdash^* \phi(\pi, \vec{\tau}) \Big)^M
$$

Therefore,

$$
y = \Big\{ \pi_G : \big( \exists p\in G\; (\pi, p) \in \sigma \big)\land \big(\exists q \in G\; (q \Vdash^* \phi(\pi, \vec{\tau}))^M \big)  \Big\} 
$$

At this point we use the following lemma.

> **Lemma.** Given $\sigma \in M^{\mathbb{P}}$, define
>
> $$
> \overline{\sigma} = \Big\{ (\tau, q) : \exists p \in \mathbb{P} \; \Big( (\tau, p) \in \sigma \land q \leq p \Big) \Big\}
> $$
>
> Then $\sigma\_G = \overline{\sigma}\_G$, and $\overline{\sigma} \in M^{\mathbb{P}}$.

The proof is almost immediate from the definition of a filter. From the lemma, the directedness of the filter, and the directedness of $\Vdash^\ast$, we obtain: $(r \leq p, q)$

$$
y = \Big\{ \pi_G : \exists r\in G\; \big( (\pi, r) \in \overline{\sigma} \land (r \Vdash^* \phi(\pi, \vec{\tau}))^M \big)  \Big\} 
$$

Hence, if

$$
\check{y} = \Big\{ (\pi, r) \in \overline{\sigma} : \big(r \Vdash^* \phi(\pi, \vec{\tau})\big)^M \  \Big\} 
$$

then $\check{y}\_G = y$. But $\check{y}$ is obtained in $M$ by separating $\sigma$ using the predicate $p \Vdash^\ast \phi(\pi, \vec{\tau})$, and since $M$ satisfies Separation, we have $\check{y} \in M$, and hence $y \in M[G]$.

The remaining axioms may be proved similarly. ■

---

In this way, we defined the forcing relation, examined its properties, and gave a brief proof that $M[G]$ arising from a generic filter is a model of set theory. In the next post, we shall use the results obtained here to prove the consistency of the Continuum Hypothesis.

#### Reference
- Hanul Jeon, _What is forcing?_ (2015)
- K. Kunen, _Set theory: an introduction to independence proofs_ (1980)
- K. Hrbacek & T. Jech, _Introduction to Set Theory_, 3rd edition (1999)


[^1]: $y = \mathcal{P}(x)$ is defined as $\forall z \subseteq x (z \in y) \land \forall z \in y (z \subseteq x)$, and $y \subseteq x$ is defined as $\forall z \in y (z \in x)$.

[^2]: This is a passage that calls to mind Frege–Russell-style descriptivism.
