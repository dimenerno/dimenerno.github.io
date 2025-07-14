---
layout: post
title: "The Kripke-Wittgenstein Paradox"
date: 2025-07-03
tags: ["Philosophy", "Philosophy of Language"]
lang: en
related:
---

> Disclaimer: Section "2.2. Dispositional Analysis" contains considerable commentary by myself that Kripke himself might have found illegitimate or irrelevant (although I expect it not to be likely).

### Overview

Kripke argues that the core of Wittgenstein's _Philosophical Investigations_ lies in a particular **scepticism about rule following**.

According to Kripke's reading of _Philosophical Investigations_, Wittgenstein criticises the Tractarian conception on language in §1-137. In §138-242, scepticism about rule following is explicitly put forward. The sceptical argument, which questions whether there exists states of affairs corresponding to propositions such as "Alice means addition by '+'", not only concludes §1-137 by driving the final nail on the coffin for _Tractatus_, but also seems to imply the devastating conclusion that all meaning propositions are ultimately unintelligile.

According to Kripke, Wittgenstein provides a "sceptical solution" to this. That is, whilst accepting the sceptic's conclusion — that there is no state of affairs corresponding to "Alice means addition by '+'" — he explains how it can nonetheless be _used_ meaningfully — unlike propositions such as "Alice's thoughts are green". This solution emphasises the **publicity of language**: that language is inseparable from its utility within a community, and therefore assertions about meaning are vacuous at the level of individuals, but are valid when situated with respect to a community of language users.

From §243 onwards is the application of the "sceptical solution" to other philosophical problems. One implication of the sceptical solution is the impossibility of private language. Nevertheless, there are two representative areas that appear to operate with a private language: mathematics and psychology. **However, Wittgenstein argues that the idea that mathematics and psychology constitutes private language is a philosophical misconception.** Here we can glimpse Wittgenstein's distinctive philosophy of mathematics and psychology.

## 1. The Kripke-Wittgenstein Paradox

The conclusion of the Kripke-Wittgenstein paradox is as follows:

> Propositions of the form "$A$ means $m$ by symbol $s$" have no corresponding state of affairs.[^1] That is, such propositions lack truth values.

For instance, the proposition "Alice means addition by '+'" is as unintelligible as the proposition "Alice's thoughts are green".

### 1.1. The Appearance of the Sceptic

Why then do Kripke-Wittgenstein make such an extreme claim? The core of the argument lies in an easily overlooked but genuinely contradictory aspect hidden in the process by which language users grasp the meaning of words: from _finite_ past learning experiences and cognitive ability, one must be able to make correct inferences for _infinitely many_ cases in which that word could be used.

For example, suppose Alice has never performed addition of two numbers both exceeding 50. Even so, if someone asked Alice '68 + 57', she would readily answer '125'. But at this point, a sceptic approaches Alice and claims that her answer is wrong, and that the answer she should have given was '5'. Specifically, the sceptic claims the following:

> If what Alice means by '+' presently is what she meant by '+' in the past, then Alice should answer '5'.

Because, at least according to the sceptic, what Alice meant by '+' in the past was actually not addition (+) but **quaddition** (⨁), defined as follows:

$$
x \oplus y =
\begin{cases}
x + y & x, y < 50 \\
5 & \text{otherwise}
\end{cases}
$$

Alice would immediately object that she has never used '+' to mean quaddition. But here begins the real problem. **How can Alice's claim that she has meant addition rather than quaddition with '+' be substantiated?** Due to the assumption of the problem, it is impossible to substantiate her claim just from Alice's previous records of '+' calculations.

The expression 'substantiate' in the previous paragraph might make this problem appear epistemological ("How can _we_ prove that Alice means addition by '+'?"). However, what Kripke asks is whether even an omniscient observer who could even see into Alice's mind, past or future notwithstanding, could conclude whether Alice means addition by '+', or whether she means some non-standard operation that agrees with addition in sufficiently many cases. **In this respect, the scepticism Kripke presents is ontological.** The point of the problem is whether there is _a state of affairs_ corresponding to "Alice means addition rather than quaddition". This is revealed by the fact that Kripke even examines attempts to resolve scepticism through counterfactual conditionals or possible worlds, though he concludes that these attempts also fail.

### 1.2. Two Conditions

There are two noteworthy points about the sceptic's claim. **First, the sceptic's claim is conditional.** The sceptic is not claiming that Alice should answer '5' _in any case_. What he claims is that if the meaning Alice assigned to '+' in the past _matches_ the meaning she assigns to '+' in the present, then she should answer '5'. **Second, the sceptic's claim is normative.** The sceptic's claim is not that — when the aforementioned condition is satisfied — Alice _will_ answer '5', but that she _should_ answer '5'.[^2] In other words, the sceptic claims that had Alice answered '5' to '68 + 57', that answer _would have been justified_.

Therefore, any refutation of the sceptic's claim must also satisfy two conditions. **First, it must explain what fact about a speaker constitutes that speaker's use of a particular symbol with a particular meaning.** This explanation is necessary to elucidate what the antecedent means in the sceptic's claim.[^3] **Second, it must explain how that fact justifies the speaker's use of language.** This explanation is necessary because the sceptic's conclusion is normative.

The significance of the second condition may not be immediately apparent, so let me elaborate. Suppose some mad scientist approached the sceptic and said:

> Actually, I once scanned Alice atom-by-atom in the past. So after hearing your claim, I copied out Alice-2 from that scan and asked her '68 + 57', to which she answered '125'. Therefore, past Alice did not mean quaddition by '+'.

However, the mad scientist's experiment is irrelevant in refuting the sceptic's claim, as it does not satisfy the second condition. The experiment only reveals that Alice _would have_ always answered '125', and does not suggest in any way that Alice _should have_ always answered '125'.

This point can be more clearly understood by examining cases of **systematic errors**. For instance, children learning addition often forget to "carry numbers". Such a child would answer '115' rather than '125' to '68 + 57'. Now suppose there is someone called Johnson who, due to some problem, has failed to correct his tendency to forget carrying even as an adult. Johnson understands what addition is, and when asked about properties of addition rather than specific addition problems (e.g. "Is it associative?"), he answers correctly. However, in situations where Johnson has no instructor to point out his mistakes, he _always_ would answer, and would have answered, '115' to '68 + 57'. Here, the correct claim to make seems to be that although Johnson _does_ mean addition by '+', he is failing to answer '68 + 57' in a way that would be _justified_ by that meaning. It is precisely to make this claim possible that the second condition is needed. If we adopt a theory of meanings that fails to satisfy the second condition, we would have to concede that Johnson means by '+' something like **baddition** — an operation that performs addition without carrying — or **maddition** — an operation that performs baddition when no instructor is present and performs addition when one is present to guide him.[^4]

## 2. Proposed Refutations of the Paradox

### 2.1. Linguistic Regress

The first response Alice would give to the sceptic's claim is probably be this: "In the past, I meant with 'x + y' the result of counting x objects and y objects together. Therefore, I did not use '+' to mean quaddition in the past."

However, the sceptic can simply deploy their scepticism once again. That is, they can claim that Alice has meant with the word 'count' not count, but _quount_. To quount a collection is to count it when the collection's size is less than 50 and to answer 5 when it exceeds 50.

The point is that **attempts to explain the meaning assigned to '+' linguistically leads to infinite regress, as such explanation is equally prone to the possibility of non-standard interpretations**.[^5]

### 2.2. Dispositional Analysis

In the philosophy of mind, **dispositional analysis** is a behaviouristic explanation of psychological states.

> **Dispositional analysis of psychological states.** A subject $A$ to be in psychological state $\mathfrak{m}$ in the past, present, or future if and only if, if stimulus $s$ was given / is given / should be given to $A$, then $A$ would have reacted / reacts / will react with response $b = f_\mathfrak{m}(s)$. That is, psychological state ($\mathfrak{m}$) is determined by its stimulus-response disposition ($f_\mathfrak{m}$).

For example, suppose Alice, having just awakened from a light sleep, formed the belief "it is raining now" upon seeing the dim room and hearing the sound of water drops from outside the window. According to dispositional analysis, Alice's belief that it is raining now is amounts to the following disposition:

- If a friend calls to go eat together, she will bring an umbrella.
- If a neighbour calls her saying her laundry is hanging outside, she will rush to collect the laundry.
- If an outdoor schedule is planned for tomorrow, she will check tomorrow's weather, etc…

If phenomena significantly deviating from these stimulus-response correspondences are observed, the dispositional analyst would revise their view of Alice's belief. For instance, if Alice went out but brought sunglasses instead of an umbrella, they would judge that Alice has had the belief that it is sunny, rather than the belief that it is raining.

There are two characteristics of dispositional analysis to note.

1. **It uses counterfactual conditionals.** Even if Alice did not go out, "If Alice _had_ gone out, she would have brought an umbrella" forms part of the analysis of the belief she had had.

2. **It is descriptive.** Because dispositional analysis is based on behaviourism, it consists of descriptive propositions such as "if Alice believes that it is raining, she _will_ bring an umbrella" rather than normative propositions such as "if Alice believes that it is raining, she _should_ bring an umbrella". According to dispositional analysis, if Alice goes out but brings sunglasses instead of an umbrella, it is cannot be the case that she has the belief that it is raining but is _failing_ to act _justifiably_ according to it; rather, she simply does not have the belief that it is raining.

Kripke reports that some philosophers who discussed the rule-following paradox with him attempted to resolve the paradox through dispositional analysis. This approach claims the following:

> **Dispositional analysis of meaning.** $A$ means $\mathfrak{m}$ by symbol $s$ in the past, present, or future if and only if, if sentence $\phi$ containing $s$ was given / is given / should be given to $A$, then $A$ would have answered / answers / will answer with sentence $\psi = f_\mathfrak{m}(\phi)$. That is, meaning ($\mathfrak{m}$) is determined by (counterfactual) question-answer disposition ($f_\mathfrak{m}$).

According to this analysis, for Alice to mean addition by '+' in the past, present, or future means that when x + y had been asked / is asked / will be asked of Alice, she would have answered / answers / will answer with the sum of x and y. The strengths of such an analysis is that, aside from its counterfactual nature it is framed behaviouristically and hence directly observable, and due to its counterfactual nature it is able to cover the infinitely many cases in which Alice may use the symbol '+'. Hence, a dispositional analysist may rebut to the skeptic in the following manner.

1. The sceptic points out that there is no state of affairs that distinguishes whether Alice meant addition by '+' or meant some non-standard operation that agrees with addition in sufficiently many cases.

2. The reason 1 can be claimed is that the number of '+' operations Alice has performed and will perform is finite.

3. However, if we allow counterfactual conditionals such as "if 'x + y' _had been asked_ of Alice, she _would have answered_ the sum of x and y" or "if 'x + y' _should be asked_ of Alice, she _will answer_ the sum of x and y", we can overcome the finitude of 2.

4. Accordingly, if we accept that counterfactuals have objective truth values (e.g. possible world semantics), the dispositional analysis of meaning objectively determines the operation that Alice means by '+'.

This argument satisfies the first condition: to explain _what fact_ about a speaker constitutes that speaker's use of a particular symbol with a particular meaning. That fact is the counterfactual conditional. **However, Kripke points out that dispositional analysis is insufficient to resolve the paradox because it fails to satisfy the second condition: to explain how that fact _justifies_ the speaker's use of the symbol.** This is because, as noted earlier, dispositional analysis is essentially descriptive. To quote Kripke:

> Well and good, I know that '125' is the response I am disposed to give (I am actually giving it!), and maybe it is helpful to be told — **as a matter of brute fact** — that I _would have given_ the same response in the past. **How does any of this indicate that — now _or_ in the past — '125' was an answer _justified_ in terms of instructions I gave myself, rather than a mere jack-in-the-box unjustified and arbitrary response?**
>
> (Italics in original, emphasis mine)

What Kripke points out can be understood step by step as follows. Recall that any claim against the sceptic should result in the following:

> **Claim 1.** If what Alice means by '+' presently is what she meant by '+' in the past, then
>
> 1. Alice should not answer '5', but rather
> 2. Alice should answer '125'.

According to dispositional analysis, the Claim 1 is analysed as the following:

> **Claim 1.1.** If Alice's past disposition regarding '+' matches Alice's present disposition regarding '+', then
>
> 1. Alice should not answer '5', but rather
> 2. Alice should answer '125'.

"As a matter of brute fact", suppose Alice's past question-answer disposition regarding '+' was to respond with the sum of given two numbers. Substituting this fact results in:

> **Claim 1.2.** If Alice's present disposition regarding '+' is to respond with the sum of given two numbers, then
>
> 1. Alice should not answer '5', but rather
> 2. Alice should answer '125'.

However, even after such analysis, there is still no basis for substantiating Claim 1.2. Had the predicates in Claim 1 been "Alice _will_ answer", Claim 1.2 would have held trivially. But the required predicate is "Alice _should_ answer", which does not follow from dispositional analysis.

Then what about simply setting the predicate in Claim 1 as "Alice _will_ answer" from the beginning? That is, we claim the following to the sceptic instead:

> **Claim 2.** If the meaning Alice assigned to '+' in the past matches the meaning she assigns to '+' in the present, then
>
> 1. Alice will not answer '5', but rather
> 2. Alice will answer '125'.

This cannot be done. As explained earlier with the "case of systematic computational error", the fact that Alice did not answer '125' to '68 + 57' does not immediately suggest that Alice did not mean addition by '+'. We sometimes make mistakes in performing addition, but such mistakes do not in themselves imply that '+' was used to mean something other than addition. Indeed, the very fact that I _can_ make mistakes in performing '+' suggests that it is not the results I produce that determine what I mean by '+', but conversely, what I mean by '+' determines the result I _should_ produce.

Nevertheless, to meet the challen of explaining the normativity of meaning through dispositional analysis, one seemingly has to interpret the sceptic's challenge as follows:

> **Claim 3.** If Alice _intends to_ mean by '+' what she meant by '+' in the past,
>
> 1. Alice should not answer '5', but rather
> 2. Alice should answer '125'.

This leads to the following statement:

> **Claim 3.1.** If Alice _intends_ her present disposition regarding '+' to be that which responds with the sum of given two numbers,
>
> 1. Alice should not answer '5', but rather
> 2. Alice should answer '125'.

Certainly, Claim 3.1 appears more plausible than Claims 1.1 and 1.2. However, I find Claim 3.1 to still be problematic.

**The first problem is that Claim 3 is logically independent from Claim 1, and hence irrelevant to the skeptical paradox.** Let $p$ and $q$ be as follows:

- $p:$ What Alice means by '+' is what she meant by '+' in the past.
- $q:$ Alice answers '125'.

Then Claim 1 and Claim 3 are as follows ($W$ means "intends to" and $\Box$ means "should"):

- Claim 1. $p \rightarrow \Box q$
- Claim 3. $Wp \rightarrow \Box q$

However, since $p$ does not suggest $Wp$ (something I do not want can be the case) and $Wp$ does not suggest $p$ either (something I want may not be the case), there is no logical relationship between Claim 1 and Claim 3. Specifically, for the former case, consider a rebellious student who intends to use '+' to mean multiplication, yet answers '125' to '68 + 57' out of habit. For the latter case, consider a student who intends to mean addition by '+' but has not yet fully mastered the practice of addition (e.g. they make carrying mistakes).

**The second problem is that Claim 3 falls into infinite regress.** For convenience of explanation, let me return to the case of psychological states. Converting the normative problem of meaning to one about psychological states would be as follows: Alice can go out carrying something other than an umbrella, despite having the belief that it is raining outside. For instance, consider a situation where Alice hurriedly prepared to go out and grabbed something from the umbrella stand right before leaving the house, but what she grabbed was not an umbrella but a walking stick. Dispositional analysis, as it stands, must conclude from such a case that Alice did not have the belief that it was raining, which is outlandish. In response, the dispositional analyst might instead put forward the following claims ($s$ stands for 'a dim room and the sound of water drops falling outside the window'):

> **Claim 4.** If Alice _intends to have_ the belief that she had in the past regarding $s$,
>
> 1. Alice should not bring a walking stick, but rather
> 2. Alice should bring an umbrella.

> **Claim 4.1.** If Alice _intends to have_ the disposition that she had in the past regarding $s$,
>
> 1. Alice should not bring a walking stick, but rather
> 2. Alice should bring an umbrella.

> **Claim 4.2.** If Alice _intends_ her disposition regarding $s$ to be that of bringing an umbrella when going out,
>
> 1. Alice should not bring a walking stick, but rather
> 2. Alice should bring an umbrella.

As mentioned earlier, Claim 4 is of the form $Wp \rightarrow \Box q$, so it has no logical relationship with $p \rightarrow \Box q$ in the first place, but even setting aside that problem, the seemingly plausible Claim 4.2 is problematic. The motivation for dispositional analysis in the first place is to translate statements about psychological states into behaviourist expressions. However, Claim 4.2 has merely changed a statement about one specific psychological state — the _belief_ that it is raining outside — into a statement about another psychological state — the _intention_ to bring an umbrella when going out. Now we must analyse what 'being in a state of intending to bring an umbrella when going out' dispositionally, which falls into infinite regress.

For the same reason, Claim 3 also falls into infinite regress. Recalling the earlier discussion, a necessary condition that a refutation to the sceptic must satisfy is to "explain what fact about a speaker constitutes that speaker's use of a particular symbol with a particular meaning", to which Claim 3.1 purportedly answers "the intention to have certain question-answer disposition". But then the sceptic can ask, "What fact about a speaker constitutes that speaker's having the intention to have the disposition aligning with addition rather than the disposition aligning with quaddition?" It is not at all clear how dispositional analysis can provide such a distinction of intention.

In conclusion, attempts to resolve the paradox through dispositional analysis fail to explain the normativity of meaning. Attempts to force dispositional analysis to fit so as to explain normativity not only deviate from what the problem requires but also fall into infinite regress.

### 2.3. Mechanistic Approach

Then, instead of relying on abstract explanations like linguistic regress or dispositional analysis, could we not respond to the sceptic by designing and constructing a concrete machine that performs addition? For instance, one could construct a mechanical calculator or a full adder with logic circuits. However, Kripke argues that this attempt is also inappropriate for three main reasons.

**First, the rules for using the machine remain susceptible to skeptical interpretations.** Taking Turing machines as an example, users are expected to interpret the sequences of 0 and 1 output by the Turing machine in binary notation. However, the sceptic can claim that the correct way to interpret the sequence is with _quinary_ notation, according to which the Turing machine is outputting quaddition, not addition.

**Second, actual machines can only receive finite inputs.** In that sense, actual machines are not in any way more 'resilient' to the skeptical argument than Alice. If instead of implementing a concrete machine we present the algorithm of the machine, this returns us to "2.1. Linguistic Regress".

**Third, machines can malfunction.** Gears could fall out, and wires might melt from overuse. Therefore, to confer our way of meaning _entirely_ to the machine and claim "this machine _always_ calculates the operation I mean" is to bite the bullet. But nor can we claim "this machine always calculates the operation I mean _unless it malfunctions_". To make such a claim, we would need to provide criteria for judging whether the machine is operating normally or malfunctioning. Yet those criteria would ultimately depend on the _intention_ of the designer — could not some eccentric designer create a machine that calculates addition through the falling out of gears and the melting of wires? Therefore, relying on the expression "_unless it malfunctions_" puts the semantic intention, not the concrete working of the machine, into precedence — something which the skeptic claims to be non-existent in the first place.

### 2.4. Occam's Razor

Kripke also considers the following claim:

> **Occamist semantics.** When two hypotheses "Speaker $A$ means meaning $\mathfrak{m}\_1$ by symbol $s$" and "Speaker $A$ means meaning $\mathfrak{m}\_2$ by symbol $s$" are in an underdetermined state, we should preferentially accept the hypothesis of the simpler of $\mathfrak{m}\_1$ and $\mathfrak{m}\_2$.

For example, consider the following two hypotheses:

&nbsp;&nbsp;&nbsp;&nbsp;H1. Past Alice meant addition by '+'.

&nbsp;&nbsp;&nbsp;&nbsp;H2. Past Alice meant quaddition by '+'.

Since both terms in Alice's past '+' operation records are 50 or below, H1 and H2 are in an underdetermined state. What Occamist semantics claims is that in this case we should preferentially accept the H1 hypothesis. This is because addition is a simpler operation than quaddition.

However, Kripke only briefly mentions and passes over this claim, because it is self-evident that it is inappropriate for refuting scepticism. This is not only because the predicate 'simple' is subjective, difficult to define, or because quaddition might be simpler than addition for Martians—though these reasons are also very legitimate. The more essential reason is that the conclusion of the sceptical argument is not "it is undetermined which of H1 and H2 is true", but "it is undetermined _what state of affairs_ the truth of either H1 or H2 _corresponds to_". According to the sceptical argument, we are in a situation where we are not even certain whether H1 and H2 represent different states of affairs. If the states of affairs that hypotheses represent are so unclear, we cannot even _apply_ Occam's razor before considering whether its application is justified.

### 2.5. Psychologism

A more important objection that Kripke considers is psychologism.

> **Psychologistic semantics.** For speaker $A$ to mean $\mathfrak{m}$ by symbol $s$ means that a distinctive<sub>queer</sub> psychological experience $p_\mathfrak{m}$ corresponding to $\mathfrak{m}$ has formed in the speaker's mind.

Here, "distinctive psychological experience" can be thought of as similar to qualia. In short, just as "seeing red" is a distinctive experience that cannot be reduced to other predicates or experiences, so too is "meaning addition by '+'" such a distinctive experience.

Kripke does not deny the possibility that such distinctive experiences exist.[^6] However, Kripke points out that psychologism also fails to resolve the sceptical argument. The problem once again lies in normativity condition laid out in "1.2. Two Conditions".

As a simple example, suppose Alice feels pain in her forehead every time she uses the '+' symbol. This fact satisfies condition 1 of "1.2. Two Conditions". That is, Alice means addition by '+' if and only if her use of '+' induces pain in her forehead. However, how could such pain possibly inform — let alone provide justification for — Alice that she should answer '125' to '68 + 57'?

Kripke connects this discussion to a more general empiricist refutation. An empiricist may claim that to mean 'triangle' is to have an impression of a triangle in one's mind when using that word. But how does an impression of a triangle inform of, or justify the rule for using the word 'triangle'? For instance, even if the impression that comes to my mind is an acute triangle, I can legitimately point to an obtuse triangle and call it a triangle. On the other hand, I cannot point to a triangular prism and call it a triangle, even if it has a base the same shape as the impression in my mind. In short, even when some impression is presented in the mind, how that impression should be _interpreted_ so as to justify rules for using a word remains obscure.

Nevertheless, Kripke emphasises that we should not sway to the opposite extreme and conclude that psychological experiences or feelings are completely irrelevant to problems of meaning. Kripke mentions the following cases derived from discussions in the _Philosophical Investigations_:

- [The phenomenon where saying the same word dozens of times makes it feel 'strange', as if the meaning has drained out of the word](https://en.wikipedia.org/wiki/Semantic_satiation)
- The difference between saying 'bat' whilst thinking of the animal versus thinking of the sports equipment (compare this to [Necker cube](https://en.wikipedia.org/wiki/Necker_cube) illusion)
- _Semantic zombies:_ speakers — akin to philosophical zombies in philosophy of mind — who cannot be distinguished from ordinary language users by their utterances yet have no internal sense of meaning whatsoever

Kripke acknowledges that the above cases are problems that need further discussion, but passes over them, for otherwise he would stray away from the main point too much.

### 2.6. Platonism

The final objection Kripke considers is Platonism.

> **Platonistic semantics.** $A$ means $\mathfrak{m}$ by symbol $s$ if and only if $A$ accesses the Platonic object $\pi_\mathfrak{m}$ corresponding to meaning $\mathfrak{m}$.

Therefore, for Alice to mean addition by '+' is for Alice to establish some relationship with the specific set, residing in the Platonic realm, whose elements consist of triples $(a, b, c)$ where $c = a + b$.

This may be the answer Frege might have given to the sceptic. According to Frege, symbols appear to speakers with particular senses<sub>_Sinn_</sub>, which uniquely determines reference<sub>_Bedeutung_</sub>. Frege takes both sense and reference to be Platonic objects.

> Frege's philosophy of language: Symbol $\to$ Speaker $\to$ Sense $\to$ Reference

However, Kripke rejects Platonism with almost the same logic as before. Platonism not only fails to explain how finite humans can relate to infinite entities like the extension of addition, but also leaves the problem explaining what fact consists in Alice accessing the Platonic extension of addition, rather than the extension of quaddition.

<div style="margin: 2em 0">$$\cdot \quad \cdot \quad \cdot$$</div>

We have thus examined the Kripke-Wittgenstein paradox and the main objections and counter-objections to it. Ultimately, Kripke concludes that a "direct" solution of the sceptical argument is impossible. Therefore, the discussion now moves to developing a "skeptical solution" — explaining how, despite the conclusion of the sceptical argument being correct, meaning-attributing sentences can be used legitimately in our language games. This is closely related to Kripke's reading of Wittgenstein's private language argument, which I hope to discuss in a future article.

---

[^1]: Following Fregean theory, propositions that lack corresponding states of affairs, i.e., propositions that lack truth values, are not propositions in the true sense, so the expression "arrangements of symbols that appear to be propositions but are not propositions" would be more accurate.
[^2]: If the sceptic's claim had been the former, it would have been immediately refuted by the fact that Alice said '125' rather than '5', just as the claim "heavier balls fall faster" was immediately refuted by the Tower of Pisa experiment. (The fact that the Tower of Pisa experiment was never actually conducted is now well known, but it serves as a good example.)
[^3]: Returning to the Tower of Pisa example, this would be explaining what fact constitutes 'a heavier ball', which could be explained as "the side that tilts when hung on a balance".
[^4]: Of course, in this case the '+' he performs does not satisfy the associative law (for example, he would answer 21 to "(10 + 7) + (10 + 4)" but 31 to "(10 + (7 + 4)) + 10"), so we would have to claim that he is fundamentally unable to assign a consistent meaning to '+'.
[^5]: Readers who have studied mathematical logic will be able to connect this to the Löwenheim-Skolem theorem.
[^6]: Kripke does call the existence of experiences distinctive to meaning "dubious". By contrast, in the _Philosophical Investigations_, he devotes considerable space to denying the existence of such experiences. Wittgenstein urges us to compare the case of pretending to read a foreign language one does not know with the case of reading that foreign language unconsciously after sufficient learning, emphasising that there is no special 'feeling' in either the former or the latter case.
