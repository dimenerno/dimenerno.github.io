---
layout: post
title: "Urysohn Lemma"
date: 2025-07-08
tags: ["Mathematics", "Topology"]
lang: en
related:
---

> **Urysohn Lemma.** Let $X$ be a normal space. If $A$ and $B$ are disjoint closed sets in $X$, then there exists a continuous function $f: X \to [0, 1]$ such that $f[A] = \lbrace  0 \rbrace$ and $f[B] = \lbrace 1 \rbrace$.
>
> <img src="/public/urysohn-1.png" style="width: 100%; max-width: 320px; mix-blend-mode: multiply; margin: 2em auto 1em auto;">

The separation axioms, e.g. normality, separate points from closed sets in the _given_ space. The significance of the Urysohn Lemma lies in the fact that, in the case of the normal space, two closed sets can be further separated in a _nice_ space. Specifically, with respect to an appropriate continuous map defined on the normal space to $[0, 1]$, two closed sets can be separated in $[0, 1]$. And the myriad "nice" properties of $[0, 1]$ — being a compact Hausdorff metric space, and a space which we are very familiar with and can visualise easily — suggest the remarkable potential of the Urysohn lemma.

#### Proof

Let us denote $Q = [0, 1] \cap \mathbb{Q}$ (actually it suffices for $Q$ to be a countable dense subset of $[0, 1]$). Since $Q$ is countable, there exists an enumeration of the elements of $Q$. For instance, consider the lexicographic enumeration of the numerators and denominators, $\prec$.

$$
0 \prec 1 \prec 1/2 \prec 1/3 \prec 2/3 \prec 1/4 \prec 1/5 \prec 2/5 \prec \cdots
$$

Let us now define the collection $\lbrace  U\_q \rbrace \_{q \in Q}$. First, let $U\_1 = X \setminus B$ (since $B$ is a closed set, $U\_1$ is an open set). By normality, there exists an open set $U\_0$ such that $A \subset U\_0$ and $\overline{U\_0} \subset U\_1$. The remaining $U\_q$ are recursively defined in the following manner. For any $p \prec q$,

- If $p < q$, then $\overline{U\_p} \subset U\_q$.
- If $q < p$, then $\overline{U\_q} \subset U\_p$.

By normality, these conditions can be satisfied, allowing us to fully define the collection $\lbrace  U\_q \rbrace \_{q \in Q}$.

<img src="/public/urysohn-2.png" style="width: 100%; max-width: 400px; mix-blend-mode: multiply; margin: 2em auto 1em auto;">

Now, let us define the function $f: X \to [0, 1]$ as follows.

$$
f(x) = \begin{cases}
\sup_{<}\{q \in Q : x \notin U_q \} & x \notin U_0 \\
0 & x \in U_0
\end{cases}
$$

The notation $\sup\_<$ indicates that we are taking the supremum with respect to $<$ rather than $\prec$. From the definition, it follows that $f[A] = 0$ and $f[B] = 1$.

To complete the proof, we must show that $f$ is continuous. Since $\lbrace  B\_\epsilon(q) \cap [0, 1] : q \in Q, \epsilon \in \mathbb{Q}\_{>0} \rbrace$ forms a basis for the topology on $[0, 1]$, it suffices to show that for any $q \in Q$ and postivie rational $\epsilon$ smaller than a certain supremum, the set $S\_{q, \epsilon} = f^{-1}(B\_\epsilon(q) \cap [0, 1])$ is an open set. Indeed,

- If $0 < q < 1$, then $S\_{q, \epsilon} = (X \setminus \overline{U\_{q-\epsilon}}) \cap U\_{q + \epsilon}$, which is an open set.
- If $q = 0$, then $S\_{0, \epsilon} = U\_\epsilon$, which is an open set.
- If $q = 1$, then $S\_{1, \epsilon} = X \setminus \overline{U\_{1 - \epsilon}}$, which is an open set.

Thus, $f$ is continuous. ■

#### Remarks

- The converse of the Urysohn lemma trivially holds. That is, for any closed sets $A, B \subset X$, if there exists a continuous function $f: X \to [0, 1]$ that separates $A$ and $B$, then the sets $U = f^{-1}[0, 1/2)$ and $V = f^{-1}(1/2, 1]$ are disjoint open sets that separate $A$ and $B$, implying that $X$ is normal. In simple terms, **in normal spaces, the Urysohn separation property and the separation axiom are equivalent.**

- This does not hold in regular spaces. Specifically, given any closed set $F$ and point $a$ in a regular space $X$, it is not always the case that there exists a continuous function $f: X \to [0, 1]$ satisfying $f(a) = 0$ and $f[F] = \lbrace 1 \rbrace$. A regular space that is Urysohn separable is called a **Tychonoff space** or a **completely regular space**, which is a strictly stronger condition than regularity.

- The reason the proof of the Urysohn Lemma does not go through for regular spaces is that constructing the collection $\lbrace  U\_q \rbrace $ satisfying $p < q \implies \overline{U\_p} \subset U\_q$ requires the normality axiom.
