---
layout: post
title: "Defining Gödel Numbers in Peano Arithmetic via the Beta Function"
date: 2025-01-25
tags: [Mathematics, Logic]
lang: en
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

**Abstract.** First-order Peano arithmetic does not permit quantification over predicates, hence it requires separate axioms for addition and multiplication. However, additional operations such as exponentiation and factorial—provided that tuples can be defined in Peano arithmetic—are definable without separate axioms. Since tuples are definable in Peano arithmetic through beta encoding, Peano arithmetic can formalise exponentiation, factorial, prime factorisation, and ultimately Gödel numbers.

## 1. Introduction

> **Definition.** **Peano arithmetic (PA)** is a theory with signature $(0, S, +, \cdot)$, where the axioms are as follows:
>
> 1. $\forall x : S(x) \neq 0$
> 2. $\forall x, y : S(x) = S(y) \rightarrow x = y$
> 3. $\forall x : x + 0 = x$
> 4. $\forall x, y : x + S(y) = S(x + y)$
> 5. $\forall x, y : x \cdot 0 = 0$
> 6. $\forall x, y : x \cdot S(y) = (x \cdot y) + x$
>
> Additionally, it has the following induction axiom schema. For any first-order formula $\phi(x)$:
>
> &emsp;7\. $\big[ \phi(0) \land \forall x \; [ \phi(x) \rightarrow \phi(S(x)) ] \big] \rightarrow \forall x \;\phi(x)$

For convenience, we define $<, -, \bmod$ as follows:

$$

\begin{aligned}
&x < y : &&\exists z \neq 0\; [x + z = y]\\
&x - y = z : &&x = y + z \\
&x \bmod y = z: && (z < y) \land \exists q \;[ qy + z = x ]
\end{aligned}


$$

Historically, the Peano arithmetic first presented by Dedekind was a second-order logic theory, hence it had an induction _axiom_ rather than an induction _axiom schema_. Moreover, it lacked axioms 3 through 7.

> **Definition.** **Second-order Peano arithmetic** is a theory with signature $(0, S)$, where the axioms are as follows:
>
> 1. $\forall x : S(x) \neq 0$
> 2. $\forall x, y : S(x) = S(y) \rightarrow x = y$
> 3. $\forall \phi \bigg[ \big[ \phi(0) \land \forall x \; [ \phi(x) \rightarrow \phi(S(x)) ] \big] \rightarrow \forall x \;\phi(x)\bigg]$

The reason the remaining axioms are unnecessary is that second-order logic permits quantification over predicates, enabling addition and multiplication to be defined using second-order formulae alone. For instance, $w = u + v$ is equivalent to the following formula:

$$
\forall \phi \bigg[ \forall x, y, z \big[ \phi(x, 0, x) \land (\phi(x, S(y), z) \rightarrow \phi(x, y, S(z)) \big] \rightarrow \phi(u, v, w) \bigg]
$$

However, since second-order logic was found to have numerous mathematical and philosophical shortcomings, the first-order Peano arithmetic introduced at the beginning became the standard choice. The implications of this choice are, firstly, that the induction axiom becomes an induction axiom schema, and secondly, that addition and multiplication must be defined through separate axioms.

This raises the question: are there no other operations besides addition and multiplication that need separate definition? For example, can operations such as exponentiation, prime factorisation, and factorial be defined without additional axioms? Furthermore, can Gödel numbering techniques, which map arbitrary formulae to natural numbers, be defined using Peano arithmetic alone?

## 2. Tuples

The insight that answers this question is that if **tuples** can be defined in Peano arithmetic, then numerous other operations become definable. Here, a tuple refers to a finite sequence of natural numbers such as $(1, 4, 2)$.

For instance, suppose the following predicates and functions are defined:

- $\mathrm{Tup}(\tau):$ $\tau$ is a tuple.
- $\mathrm{At}(\tau, i):$ When $\tau$ is a tuple, returns the $i$-th natural number of $\tau$.
- $\mathrm{Len}(\tau):$ Returns the length of $\tau$.

For convenience, let us write $\mathrm{At}(\tau, i)$ as $\tau[i]$. For example, if $\tau = (1, 4, 2)$, then the following holds (assuming indexing starts from 0):

$$

\mathrm{Tup}(\tau) \; \land \;  \mathrm{Len}(\tau) = 3 \;\land\; \tau[1] = 4


$$

Using tuples, we can define $z = x^y$ as follows:

$$

\forall \tau \bigg[ \big[ \mathrm{Tup}(\tau)\; \land \; \tau[0] = 1 \;\land \forall i < y (\tau[i + 1] = \tau[i] \cdot x) \big] \rightarrow \tau[y] = z \bigg]


$$

## 3. Beta Encoding

Can tuples be defined using only addition, multiplication, and first-order formulae? The answer is **"yes"**. As might be expected, it was Gödel who first proved this result. Let us first recall the following theorem:

> **Chinese Remainder Theorem.** Let $(n\_1, \dots, n\_k)$ be pairwise coprime. For any $(r\_1, \dots, r\_k)$ with $0 \leq r\_i < n\_i$, there always exists a number $x$ satisfying:
>
> $$
> x \bmod n_i = r_i
> $$

Gödel's idea was to think of the number $x$ from the Chinese Remainder Theorem as a code for the tuple $(r\_1, \dots, r\_k)$. However, there is a problem here. To decode $(r\_1, \dots, r\_k)$ from $x$, we need $(n\_1, \dots, n\_k)$ to be given, which again requires a tuple.

To solve this problem, Gödel produced the following lemma:

> **Lemma.** $n!+ 1, 2n! + 1, \dots, n \cdot n! + 1$ are pairwise coprime.

**Proof.** For $1 \leq a < b \leq n$, let $u = an! + 1, v = bn! + 1$. By the Euclidean algorithm,

$$

\mathrm{gcd}(u, v) = \mathrm{gcd}(u, v - u) = \mathrm{gcd}(an! + 1, (b - a)n!)


$$

The set of all divisors of $(b - a)n!$ is $\lbrace  1, 2, \dots, n\rbrace $. Since none of these elements divides $an! + 1$, we have $\mathrm{gcd}(an! + 1, (b - a)n!) = \mathrm{gcd}(u, v) = 1$. □

We can now define tuples as **ordered pairs**.

> **Definition.** We represent the tuple $(r\_1, \dots, r\_k)$ as an ordered pair $\langle a, b \rangle$ as follows:
>
> - $b = n! \quad \text{where} \quad n = \max(r\_1, \dots, r\_k, k)$
> - $a \bmod (kb + 1) = r\_k$
>
> where $a$ is chosen to be the smallest natural number satisfying the second condition.

Meanwhile, tuples can be represented as natural numbers through Cantor pairing.

> **Definition.**
>
> $$
> \langle a, b \rangle = \frac{(a + b)(a + b + 1)}{2} + b
> $$

Thus we can encode a tuple $\tau$ as a natural number $n$. Conversely, given $n$, we can decode $\tau$ using only addition, multiplication, and the modulo operation. Since the modulo operation is easily definable from addition, multiplication, and first-order logic, our goal is achieved.

Historically, Gödel's theorem was as follows:

> **$\beta$-function Lemma.** For any sequence of natural numbers $(n\_1, \dots, n\_k)$, there exist natural numbers $a, b$ such that $\beta(a, b, i) = n\_i$ for $1 \leq i \leq k$, where $\beta$ is the function defined as follows:
>
> $$
> \beta(x, y, i) = x \bmod (iy + 1)
> $$

For this reason, the entire process is called **beta encoding**. Gödel used beta encoding to successfully define exponentiation and prime factorisation in PA, enabling the formalisation of Gödel numbers and various related predicates in PA. As indicated by the title, the original goal of this article was to provide an overview of this entire process. However, due to the author's tardily arriving laziness and the belief that readers who have come this far can easily infer the subsequent content, I shall conclude here.

