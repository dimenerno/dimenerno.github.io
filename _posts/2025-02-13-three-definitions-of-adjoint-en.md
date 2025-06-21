---
layout: post
title: "Three Approaches to Adjoints"
date: 2025-02-13
tags: [Mathematics, Category Theory]
lang: en
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

> The content of this text is based on Tom Leinster, *Basic Category Theory*.

Let $\mathcal{A}, \mathcal{B}$ be categories and $F: \mathcal{A} \to \mathcal{B}, G: \mathcal{B} \to \mathcal{A}$ be functors.

## 1. Definition of Adjoint Using the Naturality Axiom

$F \dashv G$ means that for any $A \in \mathcal{A}, B \in \mathcal{B}$, there exists a bijection $\Psi\_{A, B} : \mathrm{Hom}\_\mathcal{A}(A, G(B)) \to \mathrm{Hom}\_\mathcal{B}(F(A), B)$ such that for any $p: A' \to A, q: B \to B'$, the following commutative diagram is satisfied.

<!-- https://q.uiver.app/#q=WzAsNixbMCwwLCJcXG1hdGhybXtIb219KEEnLCBHKEIpKSJdLFswLDEsIlxcbWF0aHJte0hvbX0oQSwgRyhCKSkiXSxbMCwyLCJcXG1hdGhybXtIb219KEEsIEcoQicpKSJdLFsyLDAsIlxcbWF0aHJte0hvbX0oRihBJyksIEIpIl0sWzIsMSwiXFxtYXRocm17SG9tfShGKEEpLCBCKSJdLFsyLDIsIlxcbWF0aHJte0hvbX0oRihBKSwgQicpIl0sWzAsMywiXFxQc2lfe0EnLCBCfSJdLFsxLDQsIlxcUHNpX3tBLCBCfSJdLFsyLDUsIlxcUHNpX3tBLCBCJ30iXSxbMCwxLCIoLSlcXGNpcmMgcCIsMl0sWzEsMiwiRyhxKVxcY2lyYyAoLSkiLDJdLFszLDQsIigtKVxcY2lyYyBGKHApIl0sWzQsNSwicSBcXGNpcmMgKC0pIl1d -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMCwwLCJcXG1hdGhybXtIb219KEEnLCBHKEIpKSJdLFswLDEsIlxcbWF0aHJte0hvbX0oQSwgRyhCKSkiXSxbMCwyLCJcXG1hdGhybXtIb219KEEsIEcoQicpKSJdLFsyLDAsIlxcbWF0aHJte0hvbX0oRihBJyksIEIpIl0sWzIsMSwiXFxtYXRocm17SG9tfShGKEEpLCBCKSJdLFsyLDIsIlxcbWF0aHJte0hvbX0oRihBKSwgQicpIl0sWzAsMywiXFxQc2lfe0EnLCBCfSJdLFsxLDQsIlxcUHNpX3tBLCBCfSJdLFsyLDUsIlxcUHNpX3tBLCBCJ30iXSxbMCwxLCIoLSlcXGNpcmMgcCIsMl0sWzEsMiwiRyhxKVxcY2lyYyAoLSkiLDJdLFszLDQsIigtKVxcY2lyYyBGKHApIl0sWzQsNSwicSBcXGNpcmMgKC0pIl1d&embed" width="100%" height="300px" style="border-radius: 8px; border: none;"></iframe>

For convenience, we denote $\Psi\_{A, B}(f) = \bar{f}$ for $f: A \to G(B)$, and $\Psi\_{A, B}^{-1}(g) = \bar{g}$ for $g: F(A) \to B$. Accordingly, the above commutative diagram can be expressed as follows:

$$
\begin{gather}
\overline{A \xrightarrow{f} G(B) \xrightarrow{G(q)} G(B') } = F(A) \xrightarrow{\bar{f}} B \xrightarrow{q} B' \\
\overline{F(A') \xrightarrow{F(p)} F(A) \xrightarrow{g} B} = A' \xrightarrow{p} A \xrightarrow{\bar{g}} G(B) \\\\
\mathrm{i.e.}\\\\
\overline{G(q) \circ f} = q \circ \bar{f}\\
\overline{g \circ F(p)} = \bar{g} \circ p
\end{gather}
$$

The above two conditions are called the naturality axioms. From the naturality axioms, we can prove the following:

> **Theorem 1.** The transformation $\eta: 1\_{\mathcal{A}} \to GF$ defined by $\eta\_A := \overline{1\_{F(A)}} : A \to GF(A)$ is a natural transformation. Moreover, the transformation $\epsilon: FG \to 1\_{\mathcal{B}}$ defined by $\epsilon\_B := \overline{1\_{G(B)}} : FG(B) \to B$ is also a natural transformation. We call $\eta$ the **unit** and $\epsilon$ the **counit**.

**Proof.** This follows from the following commutative diagram.

<!-- https://q.uiver.app/#q=WzAsNixbMCwwLCJcXG1hdGhybXtIb219KEEnLCBHRihBJykpIFxcbWlkX3tcXGV0YV97QSd9fSJdLFswLDEsIlxcbWF0aHJte0hvbX0oQSwgR0YoQScpKSBcXG1pZF97e1xcZXRhX3tBJ30gXFxjaXJjIGZ9LFxcOyB7R0YoZikgXFxjaXJjIFxcZXRhX0F9fSJdLFsyLDAsIlxcbWF0aHJte0hvbX0oRihBJyksIEYoQScpKSBcXG1pZF97MV97RihBJyl9fSJdLFsyLDEsIlxcbWF0aHJte0hvbX0oRihBKSwgRihBJykpIFxcbWlkX3tGKGYpfSJdLFswLDIsIlxcbWF0aHJte0hvbX0oQSwgR0YoQSkpIFxcbWlkX3tcXGV0YV9BfSJdLFsyLDIsIlxcbWF0aHJte0hvbX0oRihBKSwgRihBKSkgXFxtaWRfezFfe0YoQSl9fSJdLFswLDEsIigtKVxcY2lyYyBmIiwyXSxbMiwzLCIoLSlcXGNpcmMgRihmKSJdLFswLDIsIlxcb3ZlcmxpbmV7KC0pfSIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dLFs0LDEsIkdGKGYpIFxcY2lyYyAoLSkiXSxbNSwzLCJGKGYpIFxcY2lyYyAoLSkiLDJdLFs0LDUsIlxcb3ZlcmxpbmV7KC0pfSIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dLFsxLDMsIlxcb3ZlcmxpbmV7KC0pfSIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dXQ== -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMCwwLCJcXG1hdGhybXtIb219KEEnLCBHRihBJykpIFxcbWlkX3tcXGV0YV97QSd9fSJdLFswLDEsIlxcbWF0aHJte0hvbX0oQSwgR0YoQScpKSBcXG1pZF97e1xcZXRhX3tBJ30gXFxjaXJjIGZ9LFxcOyB7R0YoZikgXFxjaXJjIFxcZXRhX0F9fSJdLFsyLDAsIlxcbWF0aHJte0hvbX0oRihBJyksIEYoQScpKSBcXG1pZF97MV97RihBJyl9fSJdLFsyLDEsIlxcbWF0aHJte0hvbX0oRihBKSwgRihBJykpIFxcbWlkX3tGKGYpfSJdLFswLDIsIlxcbWF0aHJte0hvbX0oQSwgR0YoQSkpIFxcbWlkX3tcXGV0YV9BfSJdLFsyLDIsIlxcbWF0aHJte0hvbX0oRihBKSwgRihBKSkgXFxtaWRfezFfe0YoQSl9fSJdLFswLDEsIigtKVxcY2lyYyBmIiwyXSxbMiwzLCIoLSlcXGNpcmMgRihmKSJdLFswLDIsIlxcb3ZlcmxpbmV7KC0pfSIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dLFs0LDEsIkdGKGYpIFxcY2lyYyAoLSkiXSxbNSwzLCJGKGYpIFxcY2lyYyAoLSkiLDJdLFs0LDUsIlxcb3ZlcmxpbmV7KC0pfSIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dLFsxLDMsIlxcb3ZlcmxpbmV7KC0pfSIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dXQ==&embed" width="100%" height="260" style="border-radius: 8px; border: none;"></iframe>

> **Theorem 2.** For $f: A \to G(B), g: F(A) \to B$, the following holds:
>
> $$
> \begin{gather}
> \bar{f} = \epsilon_B \circ F(f) \\
> \bar{g} = G(g) \circ \eta_A
> \end{gather}
> $$

**Proof.** This follows from the following commutative diagram.

<!-- https://q.uiver.app/#q=WzAsNixbMCwwLCJcXG1hdGhybXtIb219KEEsIEdGKEEpKSBcXG1pZF97XFxldGFfQX0iXSxbMCwxLCJcXG1hdGhybXtIb219KEEsIEcoQikpIFxcbWlkX3tHKGcpIFxcY2lyY1xcZXRhX0EgPVxcYmFye2d9fSJdLFsyLDAsIlxcbWF0aHJte0hvbX0oRihBKSwgRihBKSkgXFxtaWRfezFfe0YoQSl9fSJdLFsyLDEsIlxcbWF0aHJte0hvbX0oRihBKSwgQikgXFxtaWRfe2d9Il0sWzEsMCwiXFxvdmVyc2V0e1xcb3ZlcmxpbmV7KC0pfX17XFxsb25ncmlnaHRhcnJvd30iXSxbMSwxLCJcXG92ZXJzZXR7XFxvdmVybGluZXsoLSl9fXtcXGxvbmdyaWdodGFycm93fSJdLFswLDEsIkcoZykgXFxjaXJjICgtKSIsMl0sWzIsMywiZyBcXGNpcmMgKC0pIl1d -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMCwwLCJcXG1hdGhybXtIb219KEEsIEdGKEEpKSBcXG1pZF97XFxldGFfQX0iXSxbMCwxLCJcXG1hdGhybXtIb219KEEsIEcoQikpIFxcbWlkX3tHKGcpIFxcY2lyY1xcZXRhX0EgPVxcYmFye2d9fSJdLFsyLDAsIlxcbWF0aHJte0hvbX0oRihBKSwgRihBKSkgXFxtaWRfezFfe0YoQSl9fSJdLFsyLDEsIlxcbWF0aHJte0hvbX0oRihBKSwgQikgXFxtaWRfe2d9Il0sWzEsMCwiXFxvdmVyc2V0e1xcb3ZlcmxpbmV7KC0pfX17XFxsb25ncmlnaHRhcnJvd30iXSxbMSwxLCJcXG92ZXJzZXR7XFxvdmVybGluZXsoLSl9fXtcXGxvbmdyaWdodGFycm93fSJdLFswLDEsIkcoZykgXFxjaXJjICgtKSIsMl0sWzIsMywiZyBcXGNpcmMgKC0pIl1d&embed" width="100%" height="200" style="border-radius: 8px; border: none;"></iframe>

## 2. Definition of Adjoint Using Unit and Counit

$F \dashv G$ means that there exist natural transformations $\eta: 1\_{\mathcal{A}} \to GF$ and $\epsilon: FG \to 1\_{\mathcal{B}}$ such that for any $A \in \mathcal{A}, B \in \mathcal{B}$, the following commutative diagrams are always satisfied:

<!-- https://q.uiver.app/#q=WzAsNixbMCwwLCJGKEEpIl0sWzEsMCwiXFw7RkdGKEEpIl0sWzEsMSwiRihBKSJdLFsyLDAsIkcoQikiXSxbMywwLCJcXDtHRkcoQikiXSxbMywxLCJHKEIpIl0sWzAsMSwiRihcXGV0YV9BKSJdLFsxLDIsIlxcZXBzaWxvbl97RihBKX0iXSxbMCwyLCIxX3tGKEEpfSIsMl0sWzMsNCwiXFxldGFfe0coQil9Il0sWzQsNSwiRyhcXGVwc2lsb25fQikiXSxbMyw1LCIxX3tHKEIpfSIsMl1d -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMCwwLCJGKEEpIl0sWzEsMCwiXFw7RkdGKEEpIl0sWzEsMSwiRihBKSJdLFsyLDAsIkcoQikiXSxbMywwLCJcXDtHRkcoQikiXSxbMywxLCJHKEIpIl0sWzAsMSwiRihcXGV0YV9BKSJdLFsxLDIsIlxcZXBzaWxvbl97RihBKX0iXSxbMCwyLCIxX3tGKEEpfSIsMl0sWzMsNCwiXFxldGFfe0coQil9Il0sWzQsNSwiRyhcXGVwc2lsb25fQikiXSxbMyw1LCIxX3tHKEIpfSIsMl1d&embed" width="100%" height="220" style="border-radius: 8px; border: none;"></iframe>

The above two conditions are called the triangle identities.

## 3. Definition of Adjoint Using Initial Objects

> **Definition.** When $P: \mathcal{A} \to \mathcal{C}$ and $Q: \mathcal{B} \to \mathcal{C}$ are functors, we define the **comma category** $(P \Rightarrow Q)$ as follows:
>
> - Objects: For a morphism $h: P(A) \to Q(B)$ in $\mathcal{C}$, the triplet $(A, h, B)$
> - Morphisms: When the following commutative diagram holds, $(f, g): (A, h, B) \to (A', h', B')$

<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJQKEEpIl0sWzIsMCwiUChBJykiXSxbMCwxLCJRKEIpIl0sWzIsMSwiUShCJykiXSxbMCwyLCJoIiwyXSxbMSwzLCJoJyJdLFswLDEsIlAoZikiXSxbMiwzLCJRKGcpIiwyXV0=&embed" width="100%" height="230" style="border-radius: 8px; border: none;"></iframe>

$F \dashv G$ means that there exists a natural transformation $\eta: 1_{\mathcal{A}} \to GF$ such that for each $A \in \mathcal{A}$, when we regard $A$ as a functor $A: 1 \mapsto A$ from the singleton category $\mathbf{1}$ to $\mathcal{A}$, $\eta_A : A \to GF(A)$ is an initial object in the comma category $(A \Rightarrow G)$.

## 4. Proof of Equivalence

The definitions 1, 2, and 3 are all equivalent. Specifically, the following theorem holds:

> **Theorem 3.** Let $\mathcal{A}, \mathcal{B}$ be categories and $F: \mathcal{A} \to \mathcal{B}, G: \mathcal{B} \to \mathcal{A}$ be functors. Then 1, 2, and 3 are in one-to-one correspondence.
>
> 1. A bijection $\Psi$ satisfying the naturality axioms
> 2. A pair of natural transformations $(\eta: 1\_{\mathcal{A}} \to GF, \epsilon: FG \to 1\_{\mathcal{B}})$ satisfying the triangle identities
> 3. A natural transformation $\eta: 1\_{\mathcal{A}} \to GF$ such that for each $A \in \mathcal{A}$, $\eta\_A : A \to GF(A)$ is an initial object in $(A \Rightarrow G)$

**Proof.** We show that 1 and 2 are in one-to-one correspondence, and that 2 and 3 are in one-to-one correspondence.

#### 1 and 2 are in one-to-one correspondence.

Given $\Psi$, we define $\eta$ and $\epsilon$ as the unit and counit respectively. That $\eta$ and $\epsilon$ satisfy the triangle identities follows easily from Theorem 2.

Conversely, suppose we are given a pair of natural transformations $(\eta, \epsilon)$ satisfying the triangle identities. From this, we define $\Psi$ as follows. For $f: A \to G(B), g: F(A) \to B$:

$$
\begin{gather}
\Psi_{A, B}(f) = \bar{f} = \epsilon_B \circ F(f) \\
\Psi_{A, B}^{-1} = \bar{g} = G(g) \circ \eta_A
\end{gather}
$$

First, we show that $\Psi_{A, B}^{-1}$ is indeed the inverse of $\Psi_{A, B}$, i.e., that $\bar{\bar{g}} = g, \bar{\bar{f}} = f$. The former follows from the following commutative diagram. The latter can be obtained by replacing $F, G$ with $G, F$ respectively in the diagram and then taking the appropriate dual.

<!-- https://q.uiver.app/#q=WzAsNSxbMCwwLCJGKEEpIl0sWzEsMCwiRkdGKEEpIl0sWzEsMSwiRihBKSJdLFsyLDAsIkZHKEIpIl0sWzIsMSwiQiJdLFsxLDMsIkZHKGcpIl0sWzIsNCwiZyJdLFsxLDIsIlxcZXBzaWxvbl97RihBKX0iLDJdLFszLDQsIlxcZXBzaWxvbl9CIl0sWzAsMSwiRihcXGV0YV9BKSJdLFswLDIsIjEiLDIseyJjdXJ2ZSI6Mn1dXQ== -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNSxbMCwwLCJGKEEpIl0sWzEsMCwiRkdGKEEpIl0sWzEsMSwiRihBKSJdLFsyLDAsIkZHKEIpIl0sWzIsMSwiQiJdLFsxLDMsIkZHKGcpIl0sWzIsNCwiZyJdLFsxLDIsIlxcZXBzaWxvbl97RihBKX0iLDJdLFszLDQsIlxcZXBzaWxvbl9CIl0sWzAsMSwiRihcXGV0YV9BKSJdLFswLDIsIjEiLDIseyJjdXJ2ZSI6Mn1dXQ==&embed" width="100%" height="250" style="border-radius: 8px; border: none;"></iframe>

Now we show that $\Psi$ satisfies the naturality axioms. We shall prove only one axiom. For $f: A \to G(B), q: B \to B'$, we show that $\overline{G(q) \circ f} = q \circ \bar{f}$. First,

$$
\overline{G(q) \circ f} = \epsilon_{B'} \circ FG(q) \circ F(f)
$$

and

$$
q \circ \bar{f} = q \circ \epsilon_B \circ F(f)
$$

Therefore, it suffices to show that $\epsilon\_{B'} \circ FG(q) = q \circ \epsilon_B$. This is nothing other than the definition of a natural transformation. Hence $\Psi$ satisfies the naturality axioms.

#### 2 and 3 are in one-to-one correspondence.

Given a pair of natural transformations $(\eta, \epsilon)$ satisfying the triangle identities, let us show that for each $A \in \mathcal{A}$, $\eta_A : A \to GF(A)$ is an initial object in $(A \Rightarrow G)$.

Conversely, when $\eta$ is a natural transformation such that for each $A \in \mathcal{A}$, $\eta_A : A \to GF(A)$ is an initial object in $(A \Rightarrow G)$, let us show that there exists a unique $\epsilon: FG \to 1_{\mathcal{B}}$ such that $(\eta, \epsilon)$ satisfies the triangle identities.

