---
layout: post
title: "On Existential Quantification in Modal Contexts — Quine and Frege"
date: 2025-03-18
tags: ["Philosophy", "Philosophy of Language", "Logic"]
lang: en
related:
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

> This article is a summary of <a href="/public/Quantifying In.pdf">David Kaplan, _Quantifying In_ (1968)</a>.

## 1. Vulgar Occurrence, Accidental Occurrence, and Intermediate Occurrence

Consider the following two sentences:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(1)</div>
<div>Two is greater than one.</div>
</div>

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(2)</div>
<div>Dooli lives with Ko Gil-dong.</div>
</div>

Although 'two' appears in both (1) and (2), it occurs in very different ways. Let us call the way 'two' appears in (1) a **vulgar occurrence**, and the way 'two' appears in (2) an **accidental occurrence**.

When a word occurs vulgarly, it refers and satisfies Leibniz's principle of identity (for instance, substituting 'two' with 'the number of moons of Mars' preserves the truth value of the sentence). When a word occurs accidentally, it does not refer and fails to satisfy Leibniz's principle.

Now consider the following sentences:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(3)</div>
<div>'Two is greater than one' is a true proposition of arithmetic.</div>
</div>

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(4)</div>
<div>Necessarily, two is greater than one.</div>
</div>

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(5)</div>
<div>Copernicus believed that two is greater than one.</div>
</div>

In (3), (4), and (5), 'two' appears to refer. However, substituting 'two' with 'the number of moons of Mars' does not appear to preserve the truth value of the sentences. This is called an **intermediate occurrence**.

In philosophy of language, intermediate occurrences are explained in two main ways. The first is to assimilate intermediate occurrences to accidental occurrences, and the second is to assimilate intermediate occurrences to vulgar occurrences.

## 2. Quine: Intermediate Occurrence is Accidental Occurrence

Quine assimilates intermediate occurrences to accidental occurrences. He argues that the sentence enclosed in quotation marks in (3) is a single word, and that _believed that two is greater than one_ in (5) is an atomic predicate. In particular, Quine's designation of the contexts in which 'two' appears in (3), (4), and (5) as **opaque contexts** suggests that he had in mind the identification of intermediate and accidental occurrences.

Quine contrasts (3), (4), and (5) with the following (6), (7), and (8):

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(6)</div>
<div>Two is such that the result of writing it after 'is greater than one' is a truth of arithmetic.</div>
</div>

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(7)</div>
<div>Two is such that necessarily it is greater than one.</div>
</div>

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(8)</div>
<div>Two is such that Copernicus believed it to be greater than one.</div>
</div>

Unlike (3), (4), and (5), in the sentence forms (6), (7), and (8), 'two' appears to occur vulgarly (though Quine would argue that 'one' still occurs accidentally). However, (6), (7), and (8) are not sentences that can be expressed in classical logic. Classical logic permits the form 'There exists $x$ such that...', but lacks the expression '$n$ is such that...'. Therefore, the task remains to justify the semantics of (6), (7), and (8).

Let us first consider (6). Even with minimal logical analysis, we can see that (6) is not a well-formed formula. The subject _two_ corresponds to the use of a name, while _writing it after 'is greater than one'_ corresponds to the mention of a name. Therefore, (6) is not semantically justified.

The meaning of (7) can be explained by Aristotelian essentialism. This explanation specifies, for any object, what properties are essential and what properties are accidental to it. Quine has explained the justification of (7) in this manner.

There are many examples suggesting that (8) is semantically justified. Consider Russell's famous sentence:

- The length of your yacht is such that I thought that your yacht was longer than that.

This sentence is intuitively comprehensible and appears to be true. This supports the semantic justification of (8). Quine also mentions the following famous pair of sentences:

> a. Ralph believes that someone is a spy.
>
> b. Someone is such that Ralph believes they are a spy.

In (a), existential quantification occurs within the belief context, while in (b) it occurs outside. Since Quine identifies words in belief contexts with accidental occurrences, according to him, note that (b) cannot be derived from

- Ralph believes that Ortcutt is a spy

by applying $\exists$-addition. However, it is possible to derive (b) from

- Ortcutt is such that Ralph believes he is a spy.

In conclusion, Quine's position on intermediate occurrences is twofold. First, intermediate occurrences can be identified with accidental occurrences. Second, when it is necessary to distinguish between cases where words appear inside and outside opaque contexts, the 'such that' construction can be used. Quine calls this construction **belief in the relational sense**. Similarly, we could introduce constructions of modality, assertion, thought, etc., in the relational sense, but the introduction of each construction requires separate justification.

## 3. Frege: Intermediate Occurrence is Vulgar Occurrence

Frege assimilates intermediate occurrences to vulgar occurrences. Frege argues that the reason Leibniz's principle appears to fail in intermediate occurrences is that we confuse the actual referents of words in those contexts. This confusion has two causes. The first is the belief that referring expressions _always_ refer to the same object. The second belief, derived from this, is that referring expressions that refer to the same object in most contexts always refer to the same object.

However, there are many cases that contradict the belief that referring expressions always refer to the same object. For instance, there are cases of ambiguous words:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(11)</div>
<div>F.D.R. ran several times, but F.D.R. was broadcast on television only once.</div>
</div>

A natural analysis of (11) is that the former 'F.D.R.' refers to the politician while the latter 'F.D.R.' refers to the television programme. In this case, both instances of 'F.D.R.' are vulgar occurrences. However, an extreme name-referent-one-to-one-correspondence theorist might argue that (11) reveals that 'was broadcast on television only once' is an opaque context, and that the latter 'F.D.R.' is an accidental occurrence. This position could be made slightly more plausible by arguing that (11) is an incorrect sentence and that the latter 'F.D.R.' should be corrected to 'the television programme named "F.D.R."'.

What this case shows is that what someone understands as an opaque context, someone else can understand as the occurrence of ambiguity. Frege argues that referring expressions usually refer to their ordinary referents, but can also refer to intermediate objects such as senses, and that such ambiguity is what led philosophers into the problem of intermediate occurrences. Frege calls the former **direct reference** and the latter **indirect reference**.

|                                      | Quine               | Frege              |
| ------------------------------------ | ------------------- | ------------------ |
| Two is greater than one              | Referential context | Direct reference   |
| Necessarily, two is greater than one | Opaque context      | Indirect reference |

How then can we determine what the referent of an expression is in intermediate occurrences? The author states that the **principle of compositionality** is key. If the referents of the individual elements that make up a sentence are unclear, we can first identify the referent of the entire sentence and then trace back the referents of the individual elements by understanding how the referent of the sentence can be analysed.

Following this methodology, Frege arrived at the position that expressions within quotations refer to themselves. For example, in $\ulcorner 1 + 2 = 3 \urcorner$, the referent of $\ulcorner 1 \urcorner$ is $\ulcorner 1 \urcorner$. This position of Frege makes it possible to use quantifiers within quotational contexts. If the domain of Roman letters is objects and the domain of Greek letters is expressions, then under Frege's theory we can express the following truth:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(12)</div>
<div>$\exists \alpha \big( \ulcorner \alpha$ is greater than one$\urcorner$ is a true proposition of arithmetic$\big)$ </div>
</div>

Although the ontological status of senses or meanings is unclear compared to expressions, we can attempt a similar approach. First, let us introduce meaning quotation marks exemplified by the following case:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(13)</div>
<div>The meaning of 'grandfather' = <sup>m</sup>father of father<sup>m</sup></div>
</div>

If the domain of Gothic letters is meanings, then Fregeanism can express the following truth:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(14)</div>
<div>$\exists \mathsf{a, b} \big($ <sup>M</sup>$\mathsf{a}$ kicked $\mathsf{b}$<sup>M</sup> $=$  <sup>M</sup>$\mathsf{b}$ was kicked by $\mathsf{a}$<sup>M</sup> $\big)$ </div>
</div>

> _Remark._ Single quotation marks denote expressions, while $\ulcorner$...$\urcorner$ signifies the composition of expressions. Similarly, <sup>m</sup>...<sup>m</sup> denotes meanings, while <sup>M</sup>...<sup>M</sup> signifies the composition of meanings. Of course, the composition of expressions is also an expression, and the composition of meanings is also a meaning, so equations 1 and 2 hold. It is helpful to recall that the author explained equations 1 and 2 by analogy with equation 3.
>
> 1. 'The cat is on the mat' $=$ $\ulcorner$The cat is on the mat$\urcorner$
> 2. <sup>m</sup>The cat is on the mat<sup>m</sup> $=$ <sup>M</sup>The cat is on the mat<sup>M</sup>
> 3. $237 = 2 \times 10^2  + 3 \times 10 + 7$
>
> However, single quotation marks and $\ulcorner$...$\urcorner$ are not completely identical, nor are <sup>m</sup>...<sup>m</sup> and <sup>M</sup>...<sup>M</sup> completely identical. In each case, the former is opaque while the latter is transparent. Therefore, 1 is impossible but 2 is possible. This is analogous to how 3 is nonsensical but 4 is correct.
>
> 1. $\exists \alpha\; \big($ '$\alpha$ is on the mat' is true$\big)$
> 2. $\exists \alpha\; \big(\ulcorner \alpha$ is on the mat$\urcorner$ is true$\big)$
> 3. $\exists n\; (237 < 2n7)$
> 4. $\exists n\; (237 < 2 \times 10^2 + n \times 10 + 7)$

## 4. Strengthening Fregeanism through Denotation Predicates

Let us now see how Fregeanism explains (6), (7), and (8).

Before this, it is helpful to clarify precisely what is the object of belief in (4), (5), (7), and (8). When S is a sentence, how can we formalise that someone believes S, or that S is necessary? In this paper, we take the simple path of considering that sentences refer to themselves, and regard necessity as a unary predicate on sentences and belief as a binary predicate between subjects and sentences. Therefore, (4) and (5) can be written as follows:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(15)</div>
<div>$\mathbf{N}$ 'two is greater than one'</div>
</div>

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(16)</div>
<div>Copernicus $\mathbf{B}$ 'two is greater than one'</div>
</div>

To formalise (7) and (8) in Quine's manner, let us introduce predicates $\mathbf{Nec}$ and $\mathbf{Bel}$ to represent Quine's relational belief and relational necessity.

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(17)</div>
<div>$\mathbf{Nec}\big($'$\mathbf{x}$ is greater than one', two$\big)$</div>
</div>

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(18)</div>
<div>Copernicus $\mathbf{Bel}\big($'$\mathbf{x}$ is greater than one', two$\big)$</div>
</div>

Here, the bold letter $\mathbf{x}$ signifies that $\mathbf{x}$ is used not referentially but solely as a placeholder. According to Quine, $\mathbf{x}$ is in an opaque context and therefore cannot refer.

Fregeanism formalises (15) and (16) as follows:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(19)</div>
<div>$\mathbf{N}$ $\ulcorner$two is greater than one$\urcorner$</div>
</div>

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(20)</div>
<div>Copernicus $\mathbf{B} \ulcorner$two is greater than one$\urcorner$</div>
</div>

Due to the aforementioned Remark, we can use the same predicates $\mathbf{N}, \mathbf{B}$.

However, (19) and (20) alone are insufficient. Although 'two' in (19) and (20) is referential, it refers to a different object from 'two' in (7) and (8). The former refers to an expression, while the latter refers to a number. Therefore, logical inferences that were possible from (7) and (8), or (17) and (18), cannot be obtained from (19) and (20) alone. For example, when (17) and the following are given:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(21)</div>
<div>Two = the number of moons of Mars</div>
</div>

we can derive the following:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(22)</div>
<div>$\exists y \big(y =$ the number of moons of Mars $\land$ $\mathbf{Nec}($'$\mathbf{x}$ is greater than one', $y)\big)$</div>
</div>

However, (19) and (21) only derive the following:

- $\exists y \big(y =$ the number of moons of Mars $\land$ $\mathbf{N}\ulcorner$two is greater than one$\urcorner\big)$

Moreover, the following is incorrect because $\alpha$ is an expression, not a number:

- $\exists \alpha \big(\alpha =$ the number of moons of Mars $\land$ $\mathbf{N}\ulcorner \alpha$ is greater than one$\urcorner\big)$

However, this problem can be solved by introducing the **denotation predicate** $\Delta$ that Church introduced. Let $\Delta(\alpha, c)$ when and only when $\alpha$ denotes $c$. Then under Frege's theory, (22), (17), and (18) can be written as follows respectively:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(23)</div>
<div>$\exists y \Big(y =$ the number of moons of Mars $\land$ $\exists \alpha \big(\Delta(\alpha, y) \land \mathbf{N}\ulcorner \alpha$ is greater than one$\urcorner\big)\Big)$</div>
</div>

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(24)</div>
<div>$\exists \alpha \big(\Delta(\alpha, 2) \land \mathbf{N}\ulcorner \alpha$ is greater than one$\urcorner\big)$</div>
</div>

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(25)</div>
<div>$\exists \alpha \big(\Delta(\alpha, 2)$ $\land$ Copernicus $\mathbf{B}\ulcorner \alpha$ is greater than one$\urcorner\big)$</div>
</div>

The author of the paper emphasises that (23), (24), and (25) not only capture the intuitive meaning of the original sentences but also, unlike Quine, do not require the introduction and definition of additional predicates such as $\mathbf{Bel}$ and $\mathbf{Nec}$.

## 5. The Ortcutt Paradox

Quine presented the following thought experiment. Ralph sees a suspicious figure in a brown hat taking a briefcase from under a bench in an alley and believes that he is a spy. Meanwhile, Ralph respects the mayor of his city and believes that he could not possibly be a spy. However, the suspicious person and the mayor are actually the same individual, Mr Ortcutt.

Quine formalises this as follows:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(26)</div>
<div>Ralph $\mathbf{B}$ 'the man in the brown hat is a spy'</div>
</div>

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(27)</div>
<div>Ralph $\mathbf{B}$ 'the mayor is not a spy'</div>
</div>

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(28)</div>
<div>The man in the brown hat = the mayor = Ortcutt</div>
</div>

Expressing (26) and (27) as relational beliefs:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(29)</div>
<div>Ralph $\mathbf{Bel}($'$\mathbf{x}$ is a spy', the man in the brown hat$)$</div>
</div>

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(30)</div>
<div>Ralph $\mathbf{Bel}($'$\mathbf{x}$ is not a spy', the mayor$)$</div>
</div>

By (28), (29) and (30) respectively suggest the following:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(32)</div>
<div>Ralph $\mathbf{Bel}($'$\mathbf{x}$ is a spy', Ortcutt$)$</div>
</div>

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(33)</div>
<div>Ralph $\mathbf{Bel}($'$\mathbf{x}$ is not a spy', Ortcutt$)$</div>
</div>

Therefore, Ralph appears to believe the following:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(34)</div>
<div>Ralph $\mathbf{Bel}($'$\mathbf{x}$ is a spy and $\mathbf{x}$ is not a spy', Ortcutt$)$</div>
</div>

However, (34) is problematic. Quine argues that the problem lies in deriving (34) from (32) and (33). Fregean formalisation proves that Quine's intuition is correct. Although the detailed process is omitted, (26), (27), and (28) only derive the following:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(37)</div>
<div>$\exists \alpha, \beta \big( \Delta(\alpha,$ Ortcutt$) \land \Delta(\beta,$ Ortcutt$)$ $\land$ Ralph $\mathbf{B}\ulcorner \alpha$ is a spy$\urcorner \land$ Ralph $\mathbf{B}\ulcorner \beta$ is not a spy $\urcorner\big)$</div>
</div>

This is fine so far. The problem is the second paradox. Suppose (9) is true, i.e., Ralph believes in the existence of spies. Also, since Ralph believes that there are no two people in the world with exactly the same height (a very reasonable belief), he believes that there exists a shortest spy. Therefore, (39) holds:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(39)</div>
<div>Ralph $\mathbf{B}$ 'the shortest spy is a spy'</div>
</div>

Exporting 'the shortest spy' in Quine's manner:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(40)</div>
<div>Ralph $\mathbf{Bel}\big($'$\mathbf{x}$ is a spy', the shortest spy$\big)$</div>
</div>

By $\exists$-addition:

<div style="display: grid; grid-template-columns: 2.5em auto; margin-bottom: 1.5em; margin-left: 1em; line-height: 1.5;">
<div>(41)</div>
<div>$\exists y\Big($Ralph $\mathbf{Bel}\big($'$\mathbf{x}$ is a spy', $y\big)\Big)$</div>
</div>

And (41) has the same content as (10). Therefore, a contradiction arises where (9) and (10) imply each other. The author of the paper relates that this problem was so intractable that he once leaned towards the position that quantifying in modal and belief contexts is impossible, but that a way to tackle this occurred to him. This will be introduced in the next article.
