---
layout: post
title: "Categorical Trace"
date: 2026-01-26
tags: ["Mathematics", "Category Theory", "Algebra"]
related:
lang: en
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

Readers may recall learning about the trace of a matrix in their linear algebra classes.

> **Definition.** For an $n \times n$ matrix $A$, the trace $\mathrm{tr}(A)$ is defined as the sum of the diagonal entries of $A$.

In particular, the trace has the following property:

> **Theorem.** If $A$ and $B$ are similar matrices, then $\operatorname{tr}(A) = \operatorname{tr}(B)$.

In other words, the trace is not merely a function of matrices but also a function of linear transformations.

However, upon revisiting the definition of the trace after learning this result, one might find it somewhat unsatisfactory. While the trace has an intuitive meaning as "the sum of diagonal entries" in the case of matrices, this intuitive interpretation is absent for linear transformations. This contrasts with eigenvalues, which have an intuitive meaning as "the scaling factors of unit squares under the transformation." As a result, the fact that the trace is a function of linear transformations might seem almost coincidental.

While our neighbours in the physics department might shrug and proceed with their calculations, we, the brilliant minds of the mathematics department, should not settle for such a perspective. A more natural and mathematical approach would be to define the trace first as a function of linear transformations and then show that this definition coincides with the traditional one. This is the motivation for the **categorical trace**.

Let us first define a few maps. By the definition of the dual space, for any $k$-vector space $V$, the following map exists:

$$
\mathrm{ev} : V^* \otimes V \to k;\; 
\phi \otimes v \mapsto \phi(v)
$$

Since $(\phi, v) \mapsto \phi(v)$ is a bilinear map, $\mathrm{ev}$ is a linear map by the definition of the tensor product. Thus, we can take the dual of $\mathrm{ev}$, which we shall denote by $\mathrm{coev}$. That is,

$$
\mathrm{coev}: k^* \to (V^* \otimes V)^*
$$

However, since $k^\ast$ is canonically isomorphic to $k$, $V^{\ast\ast}$ is canonically isomorphic to $V$, and $(V \otimes W)^\ast$ is canonically isomorphic to $V^\ast \otimes W^\ast$ for finite-dimensional vector spaces $V$ and $W$, we may equivalently think of $\mathrm{coev}$ as follows:

$$
\mathrm{coev}: k \to V \otimes V^*
$$

> **Remark.** The fact that these are canonical isomorphisms is crucial. For instance, while $V^\ast \cong V$, this isomorphism depends on the choice of a basis, so we cannot write $\mathrm{coev} : k \to V \otimes V$. Our goal is to construct a function of linear transformations from $\mathrm{ev}$ and $\mathrm{coev}$, so basis dependence must be avoided.

> **Remark.** For finite-dimensional spaces $V$ and $W$, the map $\Psi : V^\ast \otimes W^\ast \to (V \otimes W)^\ast$ defined as follows is a canonical isomorphism:
>
> $$
> \Psi : \phi \otimes \psi \mapsto \big( (v\otimes w) \mapsto \phi(v)\psi(w) \big)
> $$
>
> The finite-dimensionality condition is necessary to ensure surjectivity. In this case, the following map can be verified as the inverse of the above map (where $\lbrace e_i\rbrace , \lbrace f_j\rbrace $ are bases of $V$ and $W$, and $\lbrace  g_{ij} \rbrace $ is a basis of $V \otimes W$):
>
> $$
> \Psi^{-1} : g^{ij} \mapsto e^i \otimes f^j
> $$
>
> While $\Psi^{-1}$ appears to depend on the choice of basis, it is not basis-dependent because $\Psi$ itself is not basis-dependent, and $\Psi^{-1}$ is the inverse of $\Psi$.

Since $k$ is a one-dimensional vector space, knowing $\mathrm{coev}(1)$ determines $\mathrm{coev}$ entirely. To compute $\mathrm{coev}(1)$, recall the following definition: for $T : V \to W$,

$$
T^*: W^* \to V^*; \; \psi \mapsto \psi \circ T
$$

Thus,

$$
\mathrm{coev} : 1 \mapsto 1 \circ \mathrm{ev} = \mathrm{ev}
$$

In other words, $\mathrm{coev}(1)$ is none other than $\mathrm{ev}$. This makes sense because $\mathrm{ev}$ is a linear map that sends $V^\ast \otimes V$ to scalars, and hence it is itself an element of $(V^\ast \otimes V)^\ast = V \otimes V^\ast$.

How, then, is $\mathrm{ev}$ expressed in $V \otimes V^\ast$? First, let us see how $\mathrm{ev}$ is expressed in $(V^\ast \otimes V)^\ast$. Choosing a basis $\lbrace e_i\rbrace $ of $V$, we obtain the induced basis $\lbrace  f_{ij} = e^i \otimes e_j \rbrace $ of $V^\ast \otimes V$. From the definition of $\mathrm{ev}$, we have:

$$
\mathrm{ev} = \sum_i f^{ii}
$$

Applying $\Psi^{-1}$, as defined in the Remark above, to the right-hand side yields:

$$
\mathrm{ev} = \sum_i e_i \otimes e^i
$$

Now, let us define the categorical trace.

> **Definition.** For a $k$-vector space $V$ and a linear transformation $T: V \to V$, define $\operatorname{tr}_T: k \to k$ as the composition of the following maps:
>
> $$
> k \xrightarrow{\operatorname{coev}} V \otimes V^* \xrightarrow{T \otimes \mathrm{id}} V \otimes V^* \xrightarrow{\operatorname{twist}} V^* \otimes V \xrightarrow{\operatorname{ev}} k
> $$
>
> This $\mathrm{tr}_T$ is called the **categorical trace**.

Since all the maps used in the definition are basis-independent, the categorical trace is also basis-independent. The relationship between the categorical trace and the traditional trace is as follows:

> **Theorem.** $\mathrm{tr}_T(1) = \mathrm{tr}(T)$

**Proof.** The following holds:

$$
\begin{align}
1 &\xmapsto{\operatorname{coev}} \sum e_i \otimes e^i \\
&\xmapsto{T \otimes \mathrm{id}} \sum T(e_i) \otimes e^i \\
&\xmapsto{\operatorname{twist}} \sum e^i \otimes T(e_i) \\
&\xmapsto{\operatorname{ev}} \sum [T]_{ii}
\end{align}
$$

Here, $[T]$ is the matrix representation of $T$ with respect to the basis $\lbrace  e_i \rbrace $. Thus, $\sum [T]_{ii} = \mathrm{tr}(T)$. ■

This demonstrates that $\mathrm{tr}$ is a function of linear transformations without resorting to cumbersome calculations. Elegant, isn't it?

Meanwhile, the astute reader may have noticed that, despite the name "categorical trace," no particularly categorical concepts have appeared in the discussion so far. Nevertheless, the concept defined in this post is called the "categorical trace" because the definition introduced here can be naturally generalised from vector spaces to symmetric monoidal categories. Interested readers are encouraged to consult the [Wikipedia article](https://en.wikipedia.org/wiki/Categorical_trace) for further details.