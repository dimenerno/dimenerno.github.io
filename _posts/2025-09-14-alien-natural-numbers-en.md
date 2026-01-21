---
layout: post
title: "Natural Numbers as a Mirage: A Short Story in Logic"
date: 2025-09-14
tags: ["Philosophy", "Logic"]
lang: en
related:
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

One day, Dimen encountered an alien. The alien asked Dimen:

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>Alien</strong>
<p>There's a concept that humans use which I don't understand. What exactly are natural numbers?</p>
</div>

<img src="/public/low1.png" style="width: 100%; max-width: 500px; margin: 0 auto">

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>Dimen</strong>
<p>What do you mean? Natural numbers are a number system that starts from 1 and proceeds sequentially: 2, 3, … and so on.</p>
<strong>Alien</strong>
<p>Hmm... Then are these also natural numbers?</p>
</div>

<img src="/public/low2.png" style="width: 100%; max-width: 400px; margin: 0 auto">

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>Dimen</strong>
<p>No way! Natural numbers continue indefinitely.</p>
<strong>Alien</strong>
<p>Continue indefinitely? Do you mean they form a loop? Then they would continue indefinitely like this: 1, 2, 3, 4, 5, 3, 4, 5, 3, 4, 5, …</p>
</div>

<img src="/public/low3.png" style="width: 100%; max-width: 400px; margin: 0 auto">

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>Dimen</strong>
<p>Good heavens, that's not what I meant. They continue indefinitely without any loops.</p>
<strong>Alien</strong>
<p>Hmm... Then do they branch somewhere?</p>
</div>

<img src="/public/low4.png" style="width: 100%; max-width: 450px; margin: 0 auto">

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>Dimen</strong>
<p>That's not it either! There are no branches!</p>
<strong>Alien</strong>
<p>I see. Then is $c$ also a natural number by any chance?</p>
<strong>Dimen</strong>
<p>$c$? What do you mean?</p>
<strong>Alien</strong>
<p>According to the definition of natural numbers you've given me, there's no reason why $c$ shouldn't be a natural number. You said natural numbers continue indefinitely, but you didn't say that all natural numbers are included in such a chain.</p>
</div>

<img src="/public/low5.png" style="width: 100%; max-width: 450px; margin: 0 auto">

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>Dimen</strong>
<p>What is that supposed to be... Natural numbers contain only natural numbers!</p>
<strong>Alien</strong>
<p>Natural numbers contain only natural numbers—that's nothing but circular reasoning.</p>
<strong>Dimen</strong>
<p>Are you making fun of me?</p>
<strong>Alien</strong>
<p>What are you talking about? I genuinely don't understand what natural numbers are. You need to give me a proper definition of natural numbers for me to understand.</p>
<strong>Dimen</strong>
<p>Natural numbers are... well... that is... ugh, how do I explain this!</p>
</div>

<img src="/public/low6.jpg" style="width: 100%; max-width: 500px; margin: 0 auto">

At that moment, a person named Dedekind appeared.
<div style="margin: 2em auto"></div>

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>Dedekind</strong>
<p>I shall resolve this problem definitively. Natural numbers are a set that satisfies the following three conditions. I have proven that a set satisfying these three conditions is unique, so there is no room for further misunderstanding.</p>
</div>

> **Dedekind's definition of natural numbers.** If a set $A$, an element $e \in A$, and a function $S: A \to A$ satisfy the following three conditions, then $A$, $e$, and $S$ correspond to the set of natural numbers, $0$, and $x \mapsto x + 1$, respectively.
>
> 1. There exists no $x$ such that $S(x) = e$.
> 2. If $S(x) = S(y)$, then $x = y$.
> 3. For any proposition $P(x)$ with domain $A$, if the following two conditions hold, then $P(x)$ is true for all elements of $A$:
>    1. $P(e)$ is true.
>    2. If $P(x)$ is true, then $P(S(x))$ is true.

The alien was satisfied with Dedekind's answer, but soon looked puzzled again.
<div style="margin: 2em auto"></div>

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>Alien</strong>
<p>Does the expression "any proposition" in the third condition make sense? If $P(x)$ is any proposition, then $P(x)$ could be "$x$ is a natural number". But including a proposition about natural numbers in the definition of natural numbers would be circular reasoning, wouldn't it?</p>
<strong>Dedekind</strong>
<p>Oh... is that so...?</p>
<strong>Alien</strong>
<p>What exactly is a "proposition" anyway? Is "$x$ is a set that does not contain itself" a well-defined proposition?</p>
<strong>Dimen</strong>
<p>(If $x$ is a set that does not contain itself, then $x$ satisfies the definition of $x$, so it contains itself; but if $x$ is a set that contains itself, then $x$ does not satisfy the definition of $x$, so it does not contain itself... huh?)</p>
</div>

<div style="margin: 1em auto"></div>
As Dedekind hesitated at this unexpected criticism, a person named Löwenheim interjected from the side.
<div style="margin: 2em auto"></div>

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>Löwenheim</strong>
<p>Indeed, the expression "any proposition" seems problematic. We should restrict such expressions in mathematics. Let us call this restricted logic <strong>first-order logic</strong>.</p>
</div>

<img src="/public/low7.jpg" style="width: 100%; max-width: 500px; margin: 0 auto">

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>Dedekind</strong>
<p>Then we must now discover how to define natural numbers precisely using first-order logic.</p>
</div>

<div style="margin: 1em auto"></div>
At these words, a person named Skolem suddenly appeared.
<div style="margin: 2em auto"></div>

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>Skolem</strong>
<p>Precisely. And I have discovered the answer to this question.</p>
</div>

<div style="margin: 1em auto"></div>
Everyone focused their attention on Skolem's statement.
<div style="margin: 2em auto"></div>

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>Skolem</strong>
<p><strong>It's impossible.</strong> First-order logic cannot describe the necessary and sufficient conditions for natural numbers. Specifically, every first-order logical definition that attempts to define natural numbers has counterexamples that are not natural numbers. <strong>Therefore, natural numbers cannot be reduced to logic.</strong> Natural numbers cannot be defined without circular reasoning.</p>
</div>

> **Löwenheim-Skolem theorem.** Mathematical systems with infinitely many elements, including natural numbers, cannot be uniquely characterised by first-order logic.

<img src="/public/low8.jpg" style="width: 100%; max-width: 400px; margin: 2em auto">

A moment of silence followed.
<div style="margin: 2em auto"></div>

<div style="display: grid; grid-template-columns: 5em 1fr;">
<strong>Alien</strong>
<p>Then how do humans know what natural numbers are? Don't humans actually understand natural numbers differently from one another?</p>
</div>

<div style="margin: 1em auto"></div>
No one could answer the alien's question. They had nothing more to say about the mirage-like reality of natural numbers.
<div style="margin: 2em auto"></div>

<img src="/public/low9.png" style="width: 100%; max-width: 400px; margin: 0 auto">

_Note._ For the natural flow of the narrative, there are distorted historical, mathematical, and philosophical contents. The birth of first-order logic was achieved through the gradual research of several mathematicians, including Löwenheim. Moreover, whether Dedekind's definition of natural numbers using second-order logic is truly circular requires more detailed discussion. Finally, Skolem's paradox concerns set theory rather than natural numbers, but it was included in the speech bubble because the two phenomena are similar as consequences of the Löwenheim-Skolem theorem.

### Further Reading

- [Kripke-Wittgenstein Paradox](/2025/07/03/kripkenstein)
- [Private Language](/2025/07/21/private-language)
- [Löwenheim-Skolem Theorem](/2025/04/10/completeness-theorem)
- [Is Second-Order Logic "Set Theory in Sheep's Clothing"?](https://plato.stanford.edu/entries/logic-higher-order/#SetTheoSheeClot)