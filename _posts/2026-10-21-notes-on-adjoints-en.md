---
layout: post
title: "Notes on Adjoints, Representables, Limits"
date: 2026-10-18
tags: ["Mathematics", "Category Theory"]
lang: en
related: 
---

## Functorialness of Cones

Define the diagonal functor $\Delta : \mathcal{A} \to [ \mathbf{I}, \mathcal{A} ]$, where $\Delta (A) : \mathbf{I} \to \mathcal{A}$ maps every element and map of $\mathbf{I}$ to $A$ and $1_A$, respectively.

We then have,

$$
\mathrm{Cone}(A, D) = \hom_{[\mathbf{I}, \mathcal{A}]}(\Delta A, D)
$$

Hence, $\mathrm{Cone}(A, D)$ is functorial in $A$ (contravariantly) and $D$ (covariantly).

## Limits as Representables

Varying $A$ yields the following theorem:

> A limit of $D$ is a representation of $\hom_{[\mathbf{I}, \mathcal{A}]}(\Delta -, D)$.

Varying $D$ yields the following theorem:

> Let $\alpha$ be a natural transformation between $D, D’ : \mathbf{I} \to \mathcal{A}$. The limits of $D, D'$ induce $\lim_{\leftarrow I}\alpha : \lim_{\leftarrow I} D \to \lim_{\leftarrow I}D'$ such that,
>
> - (a) commutes
> - (c) commutes if (b) commutes
>
> {%tikz%}
\begin{tikzpicture}[line width=0.8pt, scale=0.75, transform shape]
  % top row
  \node[font=\Large] at (0.9,6.85) {$A$};
  \node[font=\Large] at (4.25,6.85) {$\lim D$};
  \draw (8.6,6.85) circle (1.18);
  \node[font=\Large] at (10.45,6.85) {$D$};
  \draw[->] (1.65,7.1) -- (7.95,7.78);
  \draw[->] (1.65,6.85) -- (3.0,6.85);
  \draw[->] (1.65,6.62) -- (7.95,5.92);
  \draw[->] (5.5,7.05) -- (7.95,7.65);
  \draw[->] (5.5,6.67) -- (7.95,6.1);
  % bottom row
  \node[font=\Large] at (0.9,1.7) {$A'$};
  \node[font=\Large] at (4.25,1.7) {$\lim D'$};
  \draw (8.6,1.7) circle (1.18);
  \node[font=\Large] at (10.45,1.7) {$D'$};
  \draw[->] (1.65,1.95) -- (7.95,2.63);
  \draw[->] (1.65,1.7) -- (3.0,1.7);
  \draw[->] (1.65,1.47) -- (7.95,0.77);
  \draw[->] (5.5,1.9) -- (7.95,2.5);
  \draw[->] (5.5,1.52) -- (7.95,0.95);
  % vertical maps
  \draw[->] (0.9,6.05) -- (0.9,2.45);
  \node[font=\large] at (0.55,4.3) {$s$};
  \draw[->] (8.6,5.2) -- (8.6,3.32);
  \node[font=\large] at (9.1,4.3) {$\alpha$};
  \draw[dotted] (4.35,6.05) -- (4.35,4.72);
  \draw[dotted, ->] (4.35,3.9) -- (4.35,2.45);
  \node[font=\large] at (4.35,4.3) {$\lim\alpha$};
  % regions
  \draw[rounded corners=12pt] (1.25,5.65) rectangle (8.15,2.88);
  \node[font=\large] at (1.78,5.98) {(c)};
  \draw[rounded corners=12pt] (1.47,5.48) rectangle (3.45,3.04);
  \node[font=\large] at (2.46,4.26) {(b)};
  \draw[rounded corners=12pt] (5.25,5.48) rectangle (7.9,3.04);
  \node[font=\large] at (6.58,4.26) {(a)};
\end{tikzpicture}
{%endtikz%}

## Limits as Adjoints

If $\mathcal{A}$ has *all* limits of shape $\mathbf{I}$, we can give a second reformulation:

> $\lim_{\leftarrow \mathbf{I}} : [\mathbf{I}, \mathcal{A}] \to \mathcal{A}$ is the right adjoint to the diagonal functor $\Delta : \mathcal{A} \to [ \mathbf{I}, \mathcal{A} ]$.

## Representables preserve Limits

For a locally small category $\mathcal{S}$ that has products and equalizers, one can construct limits for arbitrary $D: \mathbf{I} \to \mathcal{S}$ by taking the equalizer of the following:

$$
\prod_{I \in \mathbf{I}} D(I)\; \substack{\underrightarrow{\;\;s\;\;}\\ \overrightarrow{\;\;t\;\;}} \prod_{I \xrightarrow{u} J} D(J)
$$

where $s_u = Du \circ \pi_I$ and $t_u = \pi_J$. In light of this, we have:

$$
\mathrm{Cone}(A, D) \cong \lim_{\leftarrow I}\hom_\mathcal{A} (A, D(-))
$$

*Proof.* Since $\hom_\mathcal{A}(A, D(-))$ is a functor into $\mathbf{Set}$, its limit is given by the above formula, which is the set of all families $\big(f_I : A \to D(I)\big)_{I \in \mathbf{I}}$ such that $Du \circ f_I = f_J$, which happens to coincide with $\mathrm{Cone}(A, D)$. ■

Since $\mathrm{Cone}(A, D) \cong \hom_\mathcal{A} (A, \lim D)$, we have

$$
\hom_\mathcal{A}\left(A, \lim_{\leftarrow \mathbf{I}} D\right)  \cong \lim_{\leftarrow \mathbf{I}} \hom_\mathcal{A} (A, D(-))
$$

that is, **representables preserve limits.**

To dualize the result, note that $\hom_\mathcal{A}(-, A)$ is a contravariant functor from $\mathcal{A}$, and hence a covariant functor from $\mathcal{A}^{\mathrm{op}}$. Hence, $\hom_\mathcal{A}(-, A) : \mathcal{A}^{\mathrm{op}} \to \mathbf{Set}$ preserves limits in $\mathcal{A}^\mathrm{op}$, i.e.

$$
\hom_\mathcal{A}\left( \lim_{\leftarrow \mathbf{I}^{\rm{op}}} D^{\rm{op}}, A\right)  \cong \lim_{\leftarrow \mathbf{I}^{\rm{op}}} \hom_\mathcal{A} (D^{\rm{op}}(-), A)
$$

where $D^{\rm{op}}: \mathbf{I}^{\rm{op}} \to \mathcal{A}^{\rm{op}}$. If we dualize $D^\mathrm{op}$ to $D: \mathbf{I} \to \mathcal{A}$, we have $\lim_{\leftarrow \mathbf{I}^{\rm{op}}} D^{\rm{op}} = \lim_{\rightarrow \mathbf{I}} D$. 

Hence,

$$
\hom_\mathcal{A}\left( \lim_{\rightarrow \mathbf{I}} D, A\right)  \cong \lim_{\leftarrow \mathbf{I}} \hom_\mathcal{A} (D(-), A).
$$

Note that RHS is limit, not colimit.

> **Corollary.** Left adjoints preserve colimits and right adjoints preserve limits.

*Proof.* From the definition of adjointness and $\mathrm{Cone}(A, D) \cong \lim \hom_\mathcal{A} (A, D(-)) \cong \hom_\mathcal{A}(A, \lim D)$, we have

$$
\begin{align}
\hom_\mathcal{A} (A, G(\lim D)) &\cong \hom_\mathcal{B} (F(A), \lim D) \\
&\cong \lim \hom_\mathcal{B} (F(A), D(-)) \\
&\cong \lim \hom_\mathcal{A}(A, GD(-)) \\
&\cong \mathrm{Cone}(A, G\circ D).
\end{align}
$$

Hence, $G(\lim D)$ represents $\mathrm{Cone}(-, G \circ D)$, i.e. $G(\lim D) \cong \lim G \circ D$. ■ 

## Limits in Functor Categories are Pointwise-computed

> **Theorem.** Let $D: \mathbf{I} \to [\mathbf{A}, \mathcal{S}]$ be a diagram, and that for each $A \in \mathbf{A}$, $D(-)(A) : \mathbf{I} \to \mathcal{S}$ has a limit. Then there exists a cone on $D$ such that its image under $\mathrm{ev}_A$ is a limit cone on $D(-)(A)$ for each $A \in \mathbf{A}$. Moreover, any such cone on $D$ is a limit cone.

*Proof.* Follows from “Limits as Representables, varying $D$”. Refer to the following diagram.

{%tikz%}
\begin{tikzpicture}[line width=0.8pt, scale=0.7, transform shape]
  % top row
  \node[font=\Large] at (1.05,7.6) {$L(A)$};
  \draw (7.2,7.6) circle (1.9);
  \node[font=\Large] at (10.5,7.6) {$D(-)(A)$};
  \draw[->] (1.95,7.72) -- (6.18,9.02);
  \draw[->] (1.95,7.48) -- (6.18,6.22);
  % bottom row
  \node[font=\Large] at (1.1,2.25) {$L(A')$};
  \draw (7.2,2.25) circle (1.9);
  \node[font=\Large] at (10.55,2.25) {$D(-)(A')$};
  \draw[->] (1.95,2.37) -- (6.18,3.67);
  \draw[->] (1.95,2.13) -- (6.18,0.87);
  % vertical maps
  \draw[->] (1.05,6.85) -- (1.05,3.02);
  \node[font=\Large, anchor=west] at (1.3,4.9) {$Lf = \lim\alpha_f$};
  \draw[->] (7.2,6.08) -- (7.2,3.78);
  \node[font=\Large, anchor=west] at (7.4,4.9) {$\alpha_f = D(-)(f)$};
\end{tikzpicture}
{%endtikz%}

> **Corollaries.**
>
> 1. Limits commute with limits.
> 2. $\mathrm{ev}_A : [\mathbf{A} , \mathcal{S} ] \to \mathcal{S}$ preserves limits.
> 3. $よ: \mathbf{A} \to [\mathbf{A}^{\rm{op}}, \mathbf{Set}]$ preserves limits.

## Density Theorem

> **Theorem.** Every presheaf is a colimit of representables. More precisely, for $X : \mathbf{A}^{\rm{op}} \to \mathbf{Set}$, $X$ is the colimit of
>
> $$
> \mathbf{E}(X) \xrightarrow{P} \mathbf{A} \xrightarrow{よ} [\mathbf{A}^{\rm{op}}, \mathbf{Set}].
> $$