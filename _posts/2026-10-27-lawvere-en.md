---
layout: post
title: "Lawvere's Theorem: Generalizing Cantor, Russell, Turing, Tarski, and Gödel"
date: 2026-10-27
tags: ["Mathematics", "Category Theory", "Logic"]
lang: en
related: 
---

Students of mathematical logic would have at some point noticed that Cantor's proof of the uncountability of the reals, Russell's set-theoretic paradox, Turing's halting problem, Gödel's incompleteness theorem, and Tarski's undefinability theorem all share a similarity. They all employ a **diagonal argument**, whereby one "feeds" an argument to itself. This similarity can be formulated precisely in the language of category theory.

## Lawvere's Theorem

> **Definition.** A category $\mathcal{C}$ is **Cartesian closed** if it satisfies the following.
>
> 1. $\mathcal{C}$ has a terminal object $1$.
> 2. $\mathcal{C}$ admits arbitrary [products](https://dimenerno.github.io/2025/04/02/box-v-product) of finitely many objects.
> 3. For every $B \in \mathcal{C}$, $(-) \times B : \mathcal{C} \to \mathcal{C}$ has a right adjoint.

We call the right adjoint of $(-) \times B$ the **exponential** and denote it $(-)^B$. Thus,

$$
\hom(A \times B, C) \cong \hom(A, C^B)
$$

naturally in $A, B, C$. Thus, a Cartesian closed category is a generalization of currying. Until further notice, we assume that $\mathcal{C}$ is Cartesian closed.

> **Definition.** The **diagonalization** $\Delta_A$ of $A \in \mathcal{C}$ is the unique map induced by the following diagram:
>
> {%tikz%}
\begin{tikzpicture}[>=stealth, scale=1.1, transform shape, every node/.style={inner sep=2pt}]
  \node (A)  at (0,0)      {$A$};
  \node (P)  at (1.6,0)    {$A \times A$};
  \node (A1) at (3.2,1.0)  {$A$};
  \node (A2) at (3.2,-1.0) {$A$};
  \draw[->] (A) -- node[above left, font=\small] {$\mathrm{id}_A$} (A1);
  \draw[->] (A) -- node[below left, font=\small] {$\mathrm{id}_A$} (A2);
  \draw[->, dashed] (A) -- (P);
  \draw[->] (P) -- node[below right, font=\small] {$\pi_1$} (A1);
  \draw[->] (P) -- node[above right, font=\small] {$\pi_2$} (A2);
\end{tikzpicture}
{%endtikz%}

> **Definition.** A **point** of $X \in \mathcal{C}$ is a morphism $1 \to X$.

Note that a point is a category-theoretic generalization of an element of a set. For example, in $\mathbf{Set}$, $\Delta_A: A \to A \times A$ is the map $a \mapsto (a, a)$.

Furthermore, we can generalize the notion of surjectivity. Thus,

> **Definition.** $f: X \to Y$ is **point surjective** if for every point $y$ of $Y$, there exists a point $x$ of $X$ such that $f\circ x = y$.

I will also write $f(x) = y$ in place of $f \circ x = y$.

The following gives a category-theoretic generalization of the diagonal argument.

> **Lawvere's Theorem.** Let $\mathcal{C}$ be a Cartesian closed category. If $f: A \to B^A$ is point surjective, then for every $g: B \to B$, there exists a point $b$ of $B$ such that $g(b) = b$.

*Proof.* Let $\bar{f} : A \times A \to B$ be the adjoint of $f$. Define $\phi: A \to B$ as $g \circ \bar{f} \circ \Delta_A$.

Since

$$
\hom(A, B) \cong \hom(1 \times A, B) \cong \hom(1, B^A),
$$

let $\bar{\phi} : 1 \to B^A$ be the adjoint of $\phi$. By point surjectivity of $f$, there exists a point $a: 1 \to A$ such that $f(a) = \bar{\phi}$. By naturality of the adjunction, we have the following commutative diagram.

$$
\begin{CD}
\hom(1\times A,\, B) @>{\overline{(-)}}>{\cong}> \hom(1,\, B^A) \\
@A{(-)\circ(a\,\times\,\mathrm{id}_A)}AA @AA{(-)\circ a}A \\
\hom(A\times A,\, B) @>{\cong}>{\overline{(-)}}> \hom(A,\, B^A)
\end{CD}
$$

Chasing $\bar f$ around the square, and identifying $1 \times A$ with $A$ (under which $a \times \mathrm{id}_A$ becomes $\langle a \circ \operatorname{!}_A, \mathrm{id}_A \rangle : A \to A \times A$), we obtain

$$
\bar{f} \circ \langle a \circ \operatorname{!}_A, \mathrm{id}_A \rangle = \phi
$$

Hence, since $\langle a \circ \operatorname{!}_A, \mathrm{id}_A \rangle \circ a = \langle a, a \rangle = \Delta_A \circ a$,

$$
\begin{align}
\bar{f} \circ \langle a \circ \operatorname{!}_A, \mathrm{id}_A \rangle \circ a &= \bar{f} \circ \Delta_A \circ a \\
&= \phi \circ a
\end{align}
$$

Let $b := \bar f \circ \Delta_A \circ a$. The following diagram then commutes.

{%tikz%}
\begin{tikzpicture}[>=stealth, scale=1.1, transform shape, every node/.style={inner sep=2pt}]
  \node (1) at (0,0)   {$1$};
  \node (A) at (1.2,0) {$A$};
  \node (P) at (2.6,0) {$A \times A$};
  \node (B) at (4.0,0) {$B$};
  \node (C) at (5.2,0) {$B$};
  \draw[->] (1) -- node[above, font=\small] {$a$} (A);
  \draw[->] (A) -- node[above, font=\small] {$\Delta_A$} (P);
  \draw[->] (P) -- node[above, font=\small] {$\bar{f}$} (B);
  \draw[->] (B) -- node[above, font=\small] {$g$} (C);
  \draw[->] (1.south) to[out=-45, in=-135] node[above, font=\small] {$b$} (B.south);
  \draw[->] (A.north) to[out=45, in=135] node[above, font=\small] {$\phi$} (C.north);
\end{tikzpicture}
{%endtikz%}

In particular, $g(b) = g \circ \bar f \circ \Delta_A \circ a = \phi(a) = \bar f \circ \Delta_A \circ a = b$. ■

## Cantor and Russell

> **Corollary (Cantor).** In $\mathbf{Set}$, there is no (point) surjective map $f: A \to 2^A$.

*Proof.* Assume otherwise. Then by Lawvere's theorem, every map $2 \to 2$ has a fixed point. However, $0 \mapsto 1, 1 \mapsto 0$ does not have a fixed point. ■

> **Corollary (Russell).** The axiom of naive comprehension is inconsistent.

*Proof.* Assume naive comprehension, and suppose the sets it produces form a Cartesian closed category as in $\mathbf{Set}$. Then $\phi(x): x = x$ defines the set of all sets $S$, and $2^S$ is the set of all propositions over $S$. Consider

$$
f : S \to 2^S, \qquad x \mapsto (y \mapsto [y \in x]).
$$

By naive comprehension, every $P \in 2^S$ determines a set $\lbrace y : P(y)\rbrace $, so $f$ is (point) surjective. This contradicts Lawvere's theorem, with $0 \mapsto 1, 1 \mapsto 0$. (Unwinding the proof, the point $a$ is the set $\lbrace x : x \notin x\rbrace $.) ■

## Weak point-surjectivity

Let $\mathbf{Def}$ be the category of definable subsets of $\mathbb{N}$:

- **Objects** $A$: subsets of $\mathbb{N}$ definable in the standard model, i.e. $A = \lbrace n : \mathbb{N} \models \varphi(\bar n)\rbrace $.

- **Morphisms** $f : A \to B$: functions whose graph is definable, i.e. $f(a) = b \iff \mathbb{N} \models \Phi(\bar a, \bar b)$. (Note that $f$ is not required to provably be a function, albeit a total function, in PA.)

Then $1 = \lbrace 0\rbrace $ is the terminal object, and

$$
\begin{gather}
A \times B = \{ \langle a, b \rangle : a \in A, b \in B \} \\
\pi_1 : \langle a, b \rangle \mapsto a, \quad \pi_2 : \langle a, b \rangle \mapsto b
\end{gather}
$$

is the product, where $\langle \cdot, \cdot \rangle$ is the code for a pair. Note that $\langle \cdot, \cdot \rangle$, $\pi_1$, and $\pi_2$ are definable with Cantor's pairing:

$$
\langle a, b \rangle = \tfrac{1}{2}(a+b)(a+b+1) + b.
$$

We now prove the following lemma:

> **Lemma.** $\mathbf{Def}$ is *not* Cartesian closed.

*Proof of the lemma.* Let $2 = \lbrace 0, 1 \rbrace$. Assume otherwise. Then $2^\mathbb{N}$ is an object of $\mathbf{Def}$, and is thus definable with a formula $\phi$.

$2^\mathbb{N}$ has a point $p_0$, adjoint to the constant function $0$. Define $\Theta: \mathbb{N} \to 2^\mathbb{N}$ as follows:

$$
\Theta(n) = \begin{cases}
n &n \in 2^\mathbb{N} \\
p_0 &\text{otherwise}
\end{cases}
$$

It is routine to check that $\Theta$ is definable, hence a morphism. Let $i : 2^\mathbb{N} \to \mathbb{N}$ be the inclusion. For every point $p$ of $2^\mathbb{N}$ we have $\Theta(i \circ p) = p$, so $\Theta$ is point surjective. Thus, by Lawvere's theorem, every morphism $2 \to 2$ has a fixed point. But $0 \mapsto 1, 1 \mapsto 0$ is definable and has no fixed point, a contradiction. □

> **Remarks.**
>
> 1. Intuitively, an exponential $2^\mathbb{N}$ in $\mathbf{Def}$ would be a definable set of codes for all definable subsets of $\mathbb{N}$, together with a definable evaluation map $2^\mathbb{N} \times \mathbb{N} \to 2$; that is essentially a definable truth predicate. We will make this precise below as Tarski's theorem.
>
> 2. Let $\mathbf{Rec}$ be the category whose objects are *decidable* subsets of $\mathbb{N}$ and whose morphisms are *total computable* functions (not necessarily provably total). The same argument shows that $\mathbf{Rec}$ is also not Cartesian closed.

So Lawvere's theorem, as stated, cannot be applied inside the categories where computation and arithmetic live.

Fortunately, the proof of Lawvere's theorem can be generalized so as to not use exponentials: we only need a way to package "every morphism $A \to B$ has a code in $A$". Let us thus define as follows:

> **Definition.** Let $\mathcal{C}$ have finite products. A morphism $\phi : A \times A \to B$ is **weakly point surjective** if for every $h : A \to B$ there is a point $a$ of $A$ such that $\phi(\langle a, x \rangle) = h(x)$ for every point $x$ of $A$.

> **Lawvere's Theorem (finite products).** Let $\mathcal{C}$ be a category with finite products. If $\phi : A \times A \to B$ is weakly point surjective, then for every $g : B \to B$, there exists a point $b$ of $B$ such that $g(b) = b$.

*Proof.* Let $h := g \circ \phi \circ \Delta_A$. Choose $a$ as in the definition, and let $b := \phi \circ \langle a, a \rangle$. Then

$$
b = \phi(\langle a, a \rangle) = h(a) = g \circ \phi \circ \Delta_A \circ a = g(b). \quad ■
$$

The Cartesian closed version is the special case $\phi = \bar f$.

## Turing, Tarski, and Gödel

> **Corollary (Turing).** The halting problem is undecidable.

*Proof.* Working in $\mathbf{Rec}$, we will identify each decidable subset with its decision program. As with $\mathbf{Def}$, it has finite products via the pairing code.

Assume that the halting problem is decidable, i.e. there exists a morphism $H : \mathbb{N} \times \mathbb{N} \to 2$ such that $H(e, n) = 1$ if program $e$ halts on input $n$, and $H(e, n) = 0$ otherwise. For a morphism $f: \mathbb{N} \to 2$, let $e_f$ be the program

```
on input n:
  if f(n) = 1: return
  else: infinite loop
```

Then $H(e_f, n) = f(n)$ for every $n$, so $H$ is weakly point surjective. By Lawvere's theorem, $0 \mapsto 1, 1 \mapsto 0$ has a fixed point, a contradiction. ■

> **Corollary (Tarski).** There is no formula $\mathrm{True}(x)$ such that
> 
> $$
> \mathbb{N} \models \mathrm{True}(\ulcorner \sigma \urcorner) \iff \mathbb{N} \models \sigma
> $$
> 
> for every sentence $\sigma$.

*Proof.* Work in $\mathbf{Def}$, and fix a Gödel numbering $\psi_0, \psi_1, \dots$ of the formulas with one free variable.

Suppose $\mathrm{True}$ exists. The substitution function $\mathrm{sub}(m, n) = \ulcorner \psi_m(\bar n) \urcorner$ is computable, hence definable. So

$$
\phi(m, n) := [\mathbb{N} \models \psi_m(\bar n)] = \chi_{\mathrm{True}}(\mathrm{sub}(m, n))
$$

is a morphism of $\mathbf{Def}$. It is weakly point surjective: if $f : \mathbb{N} \to 2$ is defined by a formula $\gamma(x, y)$, then $\psi(x) := \gamma(x, 1)$ satisfies $\phi(\ulcorner \psi \urcorner, n) = f(n)$. But $0 \mapsto 1, 1 \mapsto 0$ is definable and has no fixed point, contradicting Lawvere's theorem. ■

For Gödel, recall the following fact about Robinson arithmetic $\mathsf{Q}$.

> For every decidable $D \subseteq \mathbb{N}$, there is a formula $\psi_D(x)$ such that $n \in D \Rightarrow \mathsf{Q} \vdash \psi_D(\bar n)$ and $n \notin D \Rightarrow \mathsf{Q} \vdash \neg\psi_D(\bar n)$.

> **Corollary (Gödel).** For every consistent, recursively enumerable axiomatization $T \supseteq \mathsf{Q}$ of arithmetic, there exists an arithmetical truth unprovable in $T$.

*Proof.* We prove the following lemma:

> **Lemma.** If $T$ is a consistent extension of $\mathsf{Q}$, then the set of theorems of $T$ is undecidable.

*Proof.* Suppose it is decidable, and work in $\mathbf{Rec}$. Define

$$
\phi(m, n) = \begin{cases}
1 & T \vdash \psi_m(\bar n) \\
0 & \text{otherwise}
\end{cases}
$$

This is computable, since $\mathrm{sub}$ is computable and $T$ is decidable. It is also weakly point surjective; given a computable $f : \mathbb{N} \to 2$, let $D = f^{-1}(1)$. We then have:

- If $f(n) = 1$, then $T \vdash \psi_D(\bar n)$, so $\phi(\ulcorner \psi_D \urcorner, n) = 1$.
- If $f(n) = 0$, then $T \vdash \neg\psi_D(\bar n)$, so by consistency $T \nvdash \psi_D(\bar n)$, and $\phi(\ulcorner \psi_D \urcorner, n) = 0$.

By Lawvere's theorem, $0 \mapsto 1, 1 \mapsto 0$ has a fixed point, a contradiction. □

Now suppose that $T$ is complete. Then the following procedure is total for every sentence $\varphi$, so the set of theorems of $T$ is decidable.

```
for n in ℕ:
  if n is a proof of φ:
    return True
  if n is a proof of ¬φ:
    return False
```

This contradicts the lemma above. ■

A few remarks:

1. The argument uses only consistency, not $\omega$-consistency, so it has the strength of the Gödel–Rosser theorem.

2. Unwinding the proof, the point $a$ codes a formula representing $n \mapsto [T \nvdash \psi_n(\bar n)]$, so $\psi_a(\bar a)$ is the Gödel sentence; i.e. the sentence "I am not provable."