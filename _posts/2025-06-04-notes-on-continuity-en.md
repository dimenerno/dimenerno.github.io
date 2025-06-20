---
layout: post
title: "Why is Continuity in Topology defined 'Backwards'?"
date: 2025-06-02
tags: ["Logic", "Topology"]
lang: en
---

> **Definition.** A mapping $f: X \to Y$ is said to be **continuous** if for any open set $V \subseteq Y$, the preimage $f^{-1}[V] \subseteq X$ is also an open set.

Students learning topology for the first time often experience confusion with this definition. Intuitively, it seems more natural to define continuity as “if $U \subseteq X$ is open, then $f[U] \subseteq V$ is also open,” but the actual definition is the inverse. The reasoning behind this intuition might roughly be as follows.

### 1. Epsilon-Delta Definition

According to the epsilon-delta definition, a function $f: X \to Y$ is continuous if the following holds:

$$
\forall \epsilon > 0 \; \exists \delta > 0 : |x - y| < \delta \rightarrow |f(x) - f(y)| < \epsilon
$$

Here the antecedent contains $x, y \in X$, and the consequent contains $f(x), f(y) \in Y$. Therefore, it seems natural for the topological definition of continuity to also have $U \subseteq X$ in the antecedent and $f[U] \subseteq Y$ in the consequent.

### 2. Intuition about Open Sets

When first learning topology, one often thinks of an open set as a “collection of points that are close to each other.” That is, if $U$ is an open set, then $x, y \in U$ implies that $x$ and $y$ are “close.” Thus, if continuous function are those that map “close points” to “close points,” it seems natural to require that they map open sets to open sets.

<div style="margin: 2.5em 0;">
</div>

**However, both of these reasonings are fundamentally flawed.**

<div style="margin: 2.5em 0;">
</div>

### 3. Why the Reasoning behind “Epsilon-Delta Definition" is Incorrect

Judging the antecedent and consequent based solely on $\rightarrow$ can easily lead to misunderstandings. One must also consider the quantifiers. The quantifiers of the epsilon-delta definition can be read linguistically as “for any positive $\epsilon$, there exists some positive $\delta$ such that...” In other words, “if $\epsilon$ is a positive number, then there exists some positive $\delta$ such that...”

_Here we see that the "true" antecedent regards $\epsilon$\, not $\delta$._ And indeed, the space related to $\epsilon$ is not $X$, but $Y$. Therefore, it is only natural that $V \subseteq Y$ appears in the antecedent of the topological definition.

### 4. Why the Reasoning behind “Intuition about Open Sets” is Incorrect

For convenience, let us denote that $x$ and $y$ are “close” as $x \sim y$. The said reasoning is based on the following **incorrect** intuition.

> **Incorrect Intuition about Open Sets.** If $x \in U$ and $y \in U$, then $x \sim y$.

**This should be corrected as follows:**

> **Correct Intuition about Open Sets.** If $x \in U$ and $x \sim y$, then $y \in U$.

A little thought reveals that this is quite trivial. For example, the set of all real numbers $\mathbb{R}$ is an open set. But surely, that does not mean that two arbitrary real numbers are always “close”. Conversely, the set $\lbrace  0 \rbrace $ is not an open set, but when $x, y \in \lbrace  0 \rbrace $, we have $x = y$, so $x$ and $y$ are as “close” as possible. Thus, according to the “incorrect intuition,” $\lbrace 0 \rbrace $ should be an open set.

On the other hand, with the “correct intuition,” it is evident that $\mathbb{R}$ is an open set while $\lbrace  0 \rbrace $ is not. When $x \in \mathbb{R}$, the real number $y$ that is “close” to $x$ is trivially included in $\mathbb{R}$. Meanwhile, $\lbrace  0 \rbrace $ does not include the real numbers that are “not equal to, but in the neighbourhood of” $0$, so it is not an open set.

Furthermore, with the “correct intuition,” the reason why the topological definition of continuous functions should be “backwards” also becomes clear. Let us first note that the following intuition about continuity are indeed correct.

> **Correct Intuition about Continuous Functions.** If $x \sim y$, then $f(x) \sim f(y)$.

Now let us show that this intuitive deifinition of continuity is equivalent to the topological definition of continuity.

#### Intuitive Definition => Topological Definition

Let $f$ be “intuitively continuous”. We need to show that for an open set $V$, the preimage $U = f^{-1}[V]$ is an open set. Let $x \in U$ and assume $x \sim y$. Since $f$ is continuous, we have $f(x) \sim f(y)$. Moreover, since $V$ is an open set and $f(x) \in V$, it follows that $f(y) \in V$. Therefore, $y \in U$. □

#### Topological Definition => Intuitive Definition

Let $f$ be “topologically continuous”. We need to show that if $x \sim y$, then $f(x) \sim f(y)$. Let $V$ be a set that contains only points “close” to $f(x)$. Since $V$ is an open set, if $z \in V$ and $z \sim w$, then by the definition of $V$, we have $f(x) \sim z$, _which implies by transitivity of $\sim$_ that $f(x) \sim w$, hence $w \in V$. Furthermore, since $U = f^{-1}[V]$ is an open set containing $x$, it follows that $y \in U$. Therefore, $f(y) \in V$, which means $f(x) \sim f(y)$. ■

Of course, the above discussion uses the somewhat dubious relation $\sim$, which is not rigorously defined. This may have caused some to feel uneasy in invoking the "transitivity of $\sim$". However, I think using $\sim$ to understand open sets and continuity serves as a helpful intuition for those studying topology for the first time. Additionally, using non-standard analysis, one can rigorously define $x \sim y$ as $\|x - y\| = \epsilon$ — but that is a story for another time.
