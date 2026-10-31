---
layout: post
title: "Proving Eternal Recurrence from a Self-Locating Argument"
date: 2026-10-16
tags: ["Philosophy", "Probability Theory", "Essay"]
lang: en
related:
  - "Proving Eternal Recurrence from the Poincaré Recurrence Theorem"
---

In the [previous post](https://dimenerno.github.io/2026/10/15/poincare-eternal-return/en), I used the Poincaré recurrence theorem to prove a restricted form of eternal recurrence. I must confess, however, that even I find the assumptions used in that proof unpersuasive. But while having dinner yesterday, it suddenly occurred to me that a kind of anthropic principle could make them significantly more plausible, so I would like to present the idea here. You do not need to have read the previous post to follow this one.

## Assumptions

Following Max Tegmark's classification, let us assume that the **Level IV multiverse** holds. That is, every mathematical structure we can conceive of logically and mathematically is, in its own right, an independent universe. A leading argument for the Level IV multiverse is the fine-tuning problem (which also appeals to the anthropic principle), but in this post let us simply grant that there are reasonable grounds for accepting it.

Let us also assume that an eternally recurring universe is logically and mathematically consistent, and that among such universes there is one containing a moment identical to ours within the observable region. This assumption, at least, I take to have been adequately argued for in the [previous post](https://dimenerno.github.io/2026/10/15/poincare-eternal-return/en).

Together, the two assumptions suggest the following.

> There exists an eternally recurring universe containing a "twin-me" who, within the observable region, lives the same life as I do.

## The Argument

Now let us argue as follows. Let $@$ be our actual universe, and let $U\_1$ and $U\_2$ be two universes identical to $@$ within the observable region. $U\_1$ is a non-recurring universe, and $U\_2$ is an eternally recurring one. Given that either $@ = U\_1$ or $@ = U\_2$, which of the two possibilities is more probable?

According to the anthropic principle, the answer is this: it is *infinitely* more probable that **I** belong to $U\_2$ than to $U\_1$. For in $U\_1$ an instance of "me" is realized only once, whereas in $U\_2$ instances of "me" are realized infinitely many times. Therefore,

$$
P(@ = U_1 \mid @ \in \{U_1, U_2\}) = 0, \qquad P(@ = U_2 \mid @ \in \{U_1, U_2\}) = 1.
$$

By now the reader has probably guessed where I am heading. Consider the collection $\mathcal{U}$ of all universes sufficiently similar to $@$ within the observable region, including $U\_1$ and $U\_2$. Then $\mathcal{U}$ can be divided into a non-recurring type and an eternally recurring type. My claim is that, by the anthropic argument above, $@$ is overwhelmingly likely to belong to the eternally recurring type.

The argument sketched above suggests that our universe is overwhelmingly likely to be an eternally recurring one. Of course, making the argument rigorous would require a careful treatment of probability distributions over possible worlds and the attendant measure problem, but I leave this part as an exercise for the reader.