---
layout: post
title: "The Kripke-Wittgenstein Paradox"
date: 2025-07-03
tags: ["Philosophy", "Philosophy of Language"]
lang: en
related:
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

> Please note that section "2.2. Dispositional Analysis" contains considerable additional commentary by the author that is independent from Kripke's original paper.

### Overview

Kripke argues that the core of Wittgenstein's *Philosophical Investigations* lies in what is known as **scepticism about rule following**.

According to Kripke's reading, §1-137 of the *Investigations* is where Wittgenstein criticises and overcomes the linguistic view of the *Tractatus*. In §138-242, scepticism about rule following is presented. The sceptical argument, which questions whether there exists a state of affairs corresponding to propositions such as "Alice means addition by '+'", not only confirms §1-137 by showing that the linguistic view of the *Tractatus* cannot be correct, but also seems to suggest the devastating conclusion that no theory whatsoever that elucidates the problem of meaning is possible.

According to Kripke, Wittgenstein provides a "sceptical solution" to this. That is, whilst accepting the sceptic's conclusion—that there is no state of affairs corresponding to "Alice means addition by '+'"—he elucidates how it can be used meaningfully, unlike propositions such as "green thoughts sleep". This solution emphasises the **publicity of language**—that the meaning of language is inseparable from its function within a community, and therefore discussions of meaning are vacuous at the level of individual language users but valid at the level of linguistic communities.

From §243 onwards applies the "sceptical solution" to other philosophical problems. One implication of the sceptical solution is the impossibility of private language. Nevertheless, there are two representative areas of language that appear to operate in a private manner: mathematical language and psychological language. **However, Wittgenstein argues that the idea that mathematical and psychological languages constitute private languages is a misconception.** In this section, we can glimpse Wittgenstein's distinctive positions in the philosophy of mathematics and psychology.

## 1. The Kripke-Wittgenstein Paradox

The conclusion of the Kripke-Wittgenstein paradox is as follows:

> Propositions of the form "Speaker $A$ means meaning $m$ by symbol $s$"[^1] have no corresponding state of affairs. That is, such propositions lack truth values.

Therefore, for instance, the proposition "Alice means addition by '+'" is as incomprehensible as the proposition "Alice's thoughts are green".

### 1.1. The Appearance of the Sceptic

Why then do Kripke and Wittgenstein make such an extreme claim? The core of the argument lies in an easily overlooked but genuinely contradictory aspect hidden in the process by which language users grasp the meaning of words: from *finite* past learning experiences, one must be able to make correct inferences about the *infinite* cases in which that word could be used.

For example, suppose Alice has never performed addition of two numbers both exceeding 50. Even so, if someone asked Alice '68 + 57', she would readily answer '125'. But at this point, a sceptic approaches Alice and claims that her answer '125' is wrong, and that the answer Alice should have given was '5'. Specifically, the sceptic claims the following:

> If the meaning Alice assigned to '+' in the past matches the meaning she assigns to '+' in the present, then Alice should have answered '5'.

Because—at least according to the sceptic—the meaning Alice assigned to '+' in the past was actually not addition (+) but **quaddition** (⨁). The definition of quaddition is as follows:

$$
x \oplus y =
\begin{cases}
x + y & x, y < 50 \\
5 & \text{otherwise}
\end{cases}
$$

Alice would immediately object that she has used '+' to mean addition, not quaddition, since the past. But here begins the real problem. **How can it be proved that the meaning Alice assigned to '+' in the past was addition rather than quaddition?** Due to the assumption of the problem, it is impossible to prove this from the records of '+' calculations that Alice performed in the past.

The expression 'proof' that has just appeared might make this problem seem epistemological ("How can we know that Alice means addition by '+'?"). However, what Kripke asks is whether even an omniscient observer who could see into Alice's mind could know whether Alice means addition by '+', or whether she means some non-standard operation that agrees with addition in sufficiently many cases. **In this respect, the scepticism Kripke presents is ontological.** The point of the problem is whether there is a state of affairs corresponding to "Alice means addition rather than quaddition". This is revealed by the fact that Kripke goes on to examine attempts to resolve scepticism through counterfactual conditionals or possible worlds—though he concludes that these attempts also fail.

### 1.2. Two Conditions

There are two noteworthy points about the sceptic's claim. **Firstly, the sceptic's claim is conditional.** The sceptic is not claiming that Alice should answer '5' *in any case*. What he claims is that if the meaning Alice assigned to '+' in the past *matches* the meaning she assigns to '+' in the present, then she should answer '5'. **Secondly, the sceptic's claim is normative.** The sceptic's claim is not that—when the aforementioned condition is satisfied—Alice *will* answer '5', but that she *should* answer '5'.[^2] In other words, the sceptic claims that if Alice had answered '5' to '68 + 57', that answer *would have been justified*.

Therefore, any refutation of the sceptic's claim must also have two characteristics. **Firstly, it must explain what fact about a speaker constitutes that speaker's use of a particular symbol with a particular meaning.** This explanation is necessary to elucidate what the antecedent means in the sceptic's claim.[^3] **Secondly, it must explain how that fact justifies the speaker's use of language.** This explanation is necessary because the sceptic's conclusion is normative.

The significance of the second condition may not be immediately apparent, so let me elaborate. Suppose some mad scientist approached the sceptic and said:

> Actually, I once scanned Alice at the atomic level in the past. So after hearing your claim, I asked Alice-2, whom I created by copying that scan, '68 + 57', and Alice-2 answered '125'. Therefore, past Alice did not mean quaddition by '+'.

However, the mad scientist's experiment is insufficient to refute the sceptic's claim. This is because the mad scientist's experiment does not satisfy the second condition. The result of that experiment only guarantees that Alice *would have* always answered '125', but does not guarantee that Alice *should have* always answered '125'.

This can be understood more clearly through **cases of systematic computational error**. For instance, children learning addition often forget to carry. Such a child would answer '115' rather than '125' to '68 + 57'. Now suppose there is someone called Johnson who, due to some problem, has failed to correct his carrying mistakes even as an adult. Johnson understands what addition is, and when asked about properties of addition rather than specific addition problems—such as "Does it satisfy the associative law?"—he answers correctly. However, in situations where Johnson has no instructor to correct his mistakes, he would *always* have answered '115' to '68 + 57', and will continue to do so in future. We would want to claim that Johnson assigns the meaning of addition to '+', but fails to answer '68 + 57' in a *justified manner* according to that meaning. It is precisely to make this claim possible that the second condition is needed. If we adopt a semantics that fails to satisfy the second condition, we would have to accept that Johnson assigns to '+' the meaning of **baddition**—an operation that performs addition without carrying—or **maddition**—an operation that performs baddition when no instructor is present and performs addition with the instructor's correction when one is present.[^4]

## 2. Examination of Refutations of Scepticism

### 2.1. Linguistic Elucidation

The first answer Alice might give upon hearing the sceptic's claim would probably be this: "In the past, I have assigned to 'x + y' the meaning of the operation of counting x objects and y objects together. Therefore, I did not use '+' to mean quaddition in the past."

However, the sceptic can deploy scepticism once again against this. In short, he can claim that in the past Alice consistently understood the word 'count' not as count but as *quount*. To quount a collection is to count it when the collection's size is less than 50 and to answer 5 when it exceeds 50.

The point is that **attempts to prove what meaning was assigned to '+' through other linguistic evidence fall into infinite regress, as such evidence cannot eliminate the possibility that non-standard meanings were assigned to it as well**.[^5]

### 2.2. Dispositional Analysis

In philosophy of mind, **dispositional analysis** is the way behaviourism explains psychological states, with the core as follows:

> **Dispositional analysis of psychological states.** For subject $A$ to be in psychological state $\mathfrak{m}$ in the past, present, or future means that if stimulus $s$ had been given / is given / will be given to $A$, then $A$ would have shown / will show / will show response $b = f_\mathfrak{m}(s)$. That is, psychological state ($\mathfrak{m}$) is reduced to stimulus-response correspondence ($f_\mathfrak{m}$).

For example, suppose Alice, having just awakened from a light sleep, formed the belief "it is raining now" upon hearing the dim room and the sound of water drops from outside the window. According to dispositional analysis, the meaning of "Alice believes 'it is raining now'" is nothing different from the following (countless) stimulus-response correspondences:

- If a friend calls to go eat together, -> she will bring an umbrella.
- If a neighbour contacts her saying her laundry is hanging outside, -> she will rush to collect the laundry.
- If an outdoor schedule is planned for tomorrow, -> she will check tomorrow's weather, etc…

If phenomena significantly deviating from these stimulus-response correspondences are observed, the dispositional analyst would revise their view of Alice's belief. For instance, if Alice went out but brought sunglasses instead of an umbrella, they would judge that Alice has the belief "the sun is shining brightly" rather than the belief "it is raining".

Two characteristics of dispositional analysis to note from the explanation so far:

1. **It uses counterfactual conditionals.** Even if Alice does not go out in the past, present, or future, "if Alice *had gone out* / *goes out* / *will go out*, she would have brought / will bring / will bring an umbrella" forms part of the dispositional analysis of the belief she had / has / will have.
2. **It is descriptive.** Because dispositional analysis is based on behaviourism, it consists of descriptive propositions such as "if Alice goes out, she *will* bring an umbrella" rather than normative propositions such as "if Alice goes out, she *should* bring an umbrella". According to dispositional analysis, if Alice goes out but brings sunglasses instead of an umbrella, she does not have the belief that it is raining but is *failing* to act *justifiably* according to it; rather, she simply does not have the belief that it is raining in the first place.

Kripke reports that some philosophers who discussed the rule-following paradox with him in private attempted to resolve the paradox through dispositional analysis by relying on the first characteristic of dispositional analysis. This approach claims the following:

> **Dispositional analysis of meaning.** For speaker $A$ to mean meaning $\mathfrak{m}$ by symbol $s$ in the past, present, or future means that if sentence $\phi$ containing $s$ had been given / is given / will be given to $A$, then $A$ would have answered / will answer / will answer with sentence $\psi = f_\mathfrak{m}(\phi)$. That is, meaning ($\mathfrak{m}$) is reduced to question-answer correspondence ($f_\mathfrak{m}$).

According to this analysis, for Alice to mean addition by '+' in the past, present, or future means that when x + y had been asked / is asked / will be asked of Alice, $A$ would have answered / will answer / will answer with the sum of x and y. The train of thought of a philosopher attempting to overcome scepticism through such counterfactual conditionals would roughly be as follows:

1. The sceptic points out that there has been no state of affairs, and will be none in future, that distinguishes whether past Alice meant addition by '+' or meant some non-standard operation that agrees with addition in sufficiently many cases but is not addition.
2. The reason 1 can be claimed is that the number of '+' operations Alice has performed and will perform is finite.
3. However, if we use counterfactual conditionals such as "if 'x + y' *had been asked* of past Alice, I *would have answered* the sum of x and y" or "if 'x + y' *is asked* of future Alice, I *will answer* the sum of x and y", we can overcome the finiteness of 2.
4. Accordingly, if we accept the fact that counterfactual conditionals have objective truth values—through possible world ontology, etc.—the dispositional analysis of meaning objectively determines the operation that Alice means by '+'.

This argument satisfies the first condition that any refutation of the sceptic must have—it must explain *what fact* about a speaker constitutes that speaker's use of a particular symbol with a particular meaning. That fact is the counterfactual conditional. **However, Kripke points out that dispositional analysis is insufficient to resolve the paradox because it fails to satisfy the second condition—it must explain how that fact *justifies* the speaker's use of language.** This is because, as noted earlier, dispositional analysis is essentially descriptive. To quote Kripke:

> Well and good, I know that '125' is the response I am disposed to give (I am actually giving it!), and maybe it is helpful to be told — **as a matter of brute fact** — that I _would have given_ the same response in the past. **How does any of this indicate that — now _or_ in the past — '125' was an answer _justified_ in terms of instructions I gave myself, rather than a mere jack-in-the-box unjustified and arbitrary response?**
> 
> (Italics in original, emphasis mine)

What Kripke points out can be understood step by step as follows. Recalling, any claim against the sceptic must have the following form:

> **Claim 1.** If the meaning Alice assigned to '+' in the past matches the meaning she assigns to '+' in the present, then
> 1. Alice should not answer '5', but rather
> 2. Alice should answer '125'.

According to dispositional analysis, the above claim is synonymous with the following:

> **Claim 1.1.** If Alice's past question-answer disposition regarding '+' matches Alice's present question-answer disposition regarding '+', then
> 1. Alice should not answer '5', but rather
> 2. Alice should answer '125'.

"As a matter of brute fact", suppose Alice's past question-answer disposition regarding '+' was to state the sum when given two numbers. Substituting this fact above:

> **Claim 1.2.** If Alice's present question-answer disposition regarding '+' is to state the sum when given two numbers, then
> 1. Alice should not answer '5', but rather
> 2. Alice should answer '125'.

However, even though Claim 1 has been restated as Claim 1.2, there is still no basis for establishing this. If the predicates in 1 and 2 were "*will answer*", the claim would hold, but what is required is "_should answer_". This is not a fact that can be known from question-answer dispositions alone.

Then could we not set the predicates in 1 and 2 as "*will answer*" from the beginning? That is, claiming the following to the sceptic:

> **Claim 2.** If the meaning Alice assigned to '+' in the past matches the meaning she assigns to '+' in the present, then
> 1. Alice will not answer '5', but rather
> 2. Alice will answer '125'.

This cannot be done. As explained in detail earlier in the "case of systematic computational error", the fact that Alice did not answer '125' to '68 + 57' does not immediately suggest that Alice did not mean addition by '+'. We sometimes make mistakes in performing addition, but such mistakes do not mean that we used '+' to mean something other than addition each time we made them. Rather, the very fact that I can make **mistakes** in performing '+' operations suggests that it is not the computational results I produce that determine the meaning I assign to '+', but conversely, the meaning I assign to '+' that precedes and determines the result I _should produce_.

Nevertheless, to explain the normativity of meaning through dispositional analysis, one would seemingly have to reinterpret the sceptic's challenge as follows:

> **Claim 3.** If Alice *wants to make* the meaning she assigned to '+' in the past match the meaning she assigns to '+' in the present,
> 1. Alice should not answer '5', but rather
> 2. Alice should answer '125'.

This leads to the following statement:

> **Claim 3.1.** If Alice's present question-answer disposition regarding '+' *wants to be* to state the sum when given two numbers,
> 1. Alice should not answer '5', but rather
> 2. Alice should answer '125'.

Certainly, Claim 3.1 appears more plausible than Claims 1.1 and 1.2. However, in my view, Claim 3.1 still has problems.

**The first problem is that even if Claim 3 holds, it does not suggest Claim 1.** Let $p$ and $q$ be as follows:

- $p:$ The meaning Alice assigned to '+' in the past matches the meaning she assigns to '+' in the present.
- $q:$ Alice answers '125'.

In this case, Claim 1 and Claim 3 are respectively as follows ($W$ means "wants to" and $\Box$ means "should"):

- Claim 1. $p \rightarrow \Box q$
- Claim 3. $Wp \rightarrow \Box q$

However, since $p$ does not suggest $Wp$ (something I do not want can happen to me) and $Wp$ does not suggest $p$ either (something I want may not happen to me), there is no logical relationship between Claim 1 and Claim 3. Specifically, for the former case, there is the situation where a rebellious student who resolved to use '+' to mean multiplication answers '125' to '68 + 57' out of habit, making his resolution meaningless. For the latter case, there is the case of a student who wants to use the '+' symbol to mean addition but has not yet fully mastered the concept of addition.

**The second problem is that Claim 3 falls into infinite regress in the first place.** For convenience of explanation, let me return to the case of psychological states. Converting the current problem to one about psychological states would be as follows: Alice can go out carrying something other than an umbrella despite having the belief that it is raining outside. For instance, consider a situation where Alice hurriedly prepared to go out and grabbed something from the umbrella stand before leaving the house, but what she grabbed was not an umbrella but a walking stick. According to existing dispositional analysis, in this case Alice did not have the belief that it was raining in the first place, which is a counter-intuitive conclusion. In response, the dispositional analyst might instead put forward the following claims:

> **Claim 4.** If Alice *wants to make* the belief she formed in the past regarding 'a dim room and the sound of water drops falling outside the window' match the belief she forms in the present regarding the same situation,
> 1. Alice should not bring a walking stick, but rather
> 2. Alice should bring an umbrella.

> **Claim 4.1.** If Alice *wants to make* the stimulus-response correspondence Alice would have shown regarding 'a dim room and the sound of water drops falling outside the window' match Alice's present stimulus-response correspondence regarding the same situation,
> 1. Alice should not bring a walking stick, but rather
> 2. Alice should bring an umbrella.

> **Claim 4.2.** If Alice's stimulus-response correspondence regarding 'a dim room and the sound of water drops falling outside the window' *wants to be* to bring an umbrella in situations of going out,
> 1. Alice should not bring a walking stick, but rather
> 2. Alice should bring an umbrella.

As mentioned earlier, Claim 4 is of the form $Wp \rightarrow \Box q$, so it has no logical relationship with $p \rightarrow \Box q$ in the first place, but even setting aside that problem, the seemingly plausible Claim 4.2 has an essential problem. The reason we attempt dispositional analysis in the first place is to translate statements about psychological states into behaviourist expressions. However, Claim 4.2 has merely changed a statement about one specific psychological state—the belief that it is raining outside—into a statement about another psychological state—the *intention to show* the response of bringing an umbrella in situations of going out. Now we must explain what 'being in a state of wanting to show the response of bringing an umbrella in situations of going out' means through dispositional analysis, which ultimately falls into infinite regress.

For the same reason, Claim 3 also falls into infinite regress. Recalling the earlier discussion, one necessary condition that any refutation of the sceptic's claim must satisfy is to "explain what fact about a speaker constitutes that speaker's use of a particular symbol with a particular meaning". However, Claim 3.1 provides the answer "the intention to make question-answer dispositions match in a particular way" to this problem. The sceptic can then ask in return, "What fact about a speaker constitutes that speaker's having the intention to make question-answer dispositions regarding the '+' symbol match in a particular way—for instance, the question-answer disposition corresponding to addition rather than quaddition?"

In conclusion, attempts to solve the problem of meaning through dispositional analysis fail to explain the normativity of meaning. Attempts to force dispositional analysis to fit so as to explain normativity not only deviate from what the problem requires but also fall into the fallacy of infinite regress.

### 2.3. Mechanistic Approach

Then, instead of relying on abstract explanations like linguistic elucidation or dispositional analysis, could we not respond to the sceptic by designing and presenting a concrete machine corresponding to the operation that '+' means? For instance, creating a mechanical calculator or designing a full adder with logic circuits. However, Kripke argues that this attempt is also inappropriate for three main reasons.

**Firstly, the method of using the machine remains a problem requiring elucidation.** Taking Turing machines as an example, we would interpret the binary sequences output by the Turing machine in binary notation to read the results. However, the sceptic can claim that the correct way to interpret this machine is in *quinary notation*, and according to quinary notation, the Turing machine is outputting quaddition, not addition.

**Secondly, actual machines can only receive finite inputs.** In that sense, actual machines do not become more 'capable' entities than Alice. If instead of implementing an actual machine we present the algorithm of the machine, this returns us to "2.1. Linguistic Elucidation".

**Thirdly, machines can malfunction.** Someone might drop the machine causing gears to fall out, or wires might melt from overuse. Therefore, we cannot transfer the responsibility of meaning elucidation entirely to the machine and claim "this machine *always* calculates the operation I mean". Nor can we claim "this machine *always calculates the operation I mean unless it malfunctions*". To make such a claim, we would need to provide criteria for judging whether the machine is operating normally or malfunctioning, and those criteria would ultimately depend on what *intention* we wish to use this machine for (could not some eccentric designer create a machine that calculates addition through the falling out of gears and the melting of wires?). Therefore, the moment we use the expression *unless it malfunctions*, the speaker's intention, not the machine, takes precedence.

### 2.4. Occam's Razor

Kripke also considers the following claim:

> **Occamist semantics.** When two hypotheses "Speaker $A$ means meaning $\mathfrak{m}\_1$ by symbol $s$" and "Speaker $A$ means meaning $\mathfrak{m}\_2$ by symbol $s$" are in an underdetermined state, we should preferentially accept the hypothesis of the simpler of $\mathfrak{m}\_1$ and $\mathfrak{m}\_2$.

For example, consider the following two hypotheses:

&nbsp;&nbsp;&nbsp;&nbsp;H1. Past Alice meant addition by '+'.

&nbsp;&nbsp;&nbsp;&nbsp;H2. Past Alice meant quaddition by '+'.

Since both terms in Alice's past '+' operation records are 50 or below, H1 and H2 are in an underdetermined state. What Occamist semantics claims is that in this case we should preferentially accept the H1 hypothesis. This is because addition is a simpler operation than quaddition.

However, Kripke only briefly mentions and passes over this claim, because it is self-evident that it is inappropriate for refuting scepticism. This is not only because the predicate 'simple' is subjective, difficult to define, or because quaddition might be simpler than addition for Martians—though these reasons are also very legitimate. The more essential reason is that the conclusion of the sceptical argument is not "it is undetermined which of H1 and H2 is true", but "it is undetermined *what state of affairs* the truth of either H1 or H2 *corresponds to*". According to the sceptical argument, we are in a situation where we are not even certain whether H1 and H2 represent different states of affairs. If the states of affairs that hypotheses represent are so unclear, we cannot even *apply* Occam's razor before considering whether its application is justified.

### 2.5. Psychologism

A more important objection that Kripke considers is psychologism.

> **Psychologistic semantics.** For speaker $A$ to mean $\mathfrak{m}$ by symbol $s$ means that a distinctive<sub>queer</sub> psychological experience $p_\mathfrak{m}$ corresponding to $\mathfrak{m}$ has formed in the speaker's mind.

Here, "distinctive psychological experience" can be thought of as similar to qualia. In short, just as "seeing red" is a distinctive experience that cannot be reduced to other predicates or experiences, so too is "meaning addition by '+'" such a distinctive experience.

Kripke does not deny the possibility that such distinctive experiences exist.[^6] However, Kripke points out that psychologistic semantics also fails to resolve the sceptical argument. The problem once again lies in condition 2 of "1.2. Two Conditions".

As a simple example, suppose Alice feels pain in her forehead every time she uses the '+' symbol. This fact satisfies condition 1 of "1.2. Two Conditions". That is, for the meaning Alice assigned to '+' in the past to be the same as the meaning she assigns in the present means that the past pain Alice felt when using the '+' symbol is qualitatively the same as the present pain. However, how could that pain possibly inform Alice that she should answer '125' to '68 + 57'?

Kripke connects this discussion to a more general empiricist refutation. According to empiricism, for me to mean 'triangle' is for me to conjure up an impression of a triangle in my mind. But how does this impression of a triangle inform me of the rule for using the word 'triangle'? For instance, even if the impression that comes to my mind is an acute triangle, I can legitimately point to an obtuse triangle and call it a triangle. Conversely, I cannot point to a triangular prism with a base exactly the same shape as the impression in my mind and call it a triangle. In short, even when some impression is presented in the mind, how that impression should be *interpreted* remains shrouded in mystery.

Nevertheless, Kripke emphasises that we should not swing to the opposite extreme and conclude that psychological experiences or feelings are completely irrelevant to problems of meaning. Kripke mentions the following cases derived from discussions in the *Philosophical Investigations*:

- [The phenomenon where saying the same word dozens of times makes it feel 'strange', as if the meaning has drained out of the word leaving only a shell](https://en.wikipedia.org/wiki/Semantic_satiation)
- The difference between saying 'bat' whilst thinking of the animal versus thinking of the sports equipment (compare this to [Necker cube](https://en.wikipedia.org/wiki/Necker_cube) illusion)
- *Semantic zombies*—similar to philosophical zombies in philosophy of mind—speakers who cannot be distinguished from ordinary language users by their utterance records alone but have no internal semantics whatsoever

Kripke acknowledges that the above cases are problems that need to be elucidated, but unfortunately passes over them due to space constraints.

### 2.6. Platonism

Finally, the objection Kripke considers is Platonism.

> **Platonistic semantics.** For speaker $A$ to mean $\mathfrak{m}$ by symbol $s$ means that the speaker is directed towards the Platonic object $\pi_\mathfrak{m}$ corresponding to meaning $\mathfrak{m}$.

Therefore, for Alice to mean addition by '+' is for Alice to establish some relationship with Platonic addition.

This would have been the answer Frege might have given to the sceptic. According to Frege, symbols appear to speakers as particular senses<sub>sense, _Sinn_</sub>, and sense uniquely determines reference. Here, both sense and reference are Platonic objects.

> Frege's philosophy of language: Symbol -> Speaker -> Sense -> Reference

However, Kripke rejects Platonism with almost the same logic as before. Platonism not only fails to explain how finite humans can relate to infinite sets like addition, but consequently raises the problem of how to determine whether the Platonic object Alice is directed towards is the addition set or the quaddition set.

<div style="margin: 2em 0">$$\cdot \quad \cdot \quad \cdot$$</div>

We have thus examined the Kripke-Wittgenstein paradox and the main objections and counter-objections to it. Ultimately, Kripke concludes that direct refutation of the sceptical argument is impossible. Therefore, the discussion now moves to elucidating why, if indeed the conclusion of the sceptical argument is correct that "Alice means addition by '+'" lacks a corresponding state of affairs no less than "Alice's thoughts are green", the former can be used meaningfully in linguistic life unlike the latter. This is closely related to Kripke's reading of Wittgenstein's private language argument, which shall be examined in detail in the next article.

---

[^1]: Following Fregean theory, propositions that lack corresponding states of affairs, i.e., propositions that lack truth values, are not propositions in the true sense, so the expression "arrangements of symbols that appear to be propositions but are not propositions" would be more accurate.

[^2]: If the sceptic's claim had been the former, it would have been immediately refuted by the fact that Alice said '125' rather than '5', just as the claim "heavier balls fall faster" was immediately refuted by the Tower of Pisa experiment. (The fact that the Tower of Pisa experiment was never actually conducted is now well known, but it serves as a good example.)

[^3]: Returning to the Tower of Pisa example, this would be explaining what fact constitutes 'a heavier ball', which could be explained as "the side that tilts when hung on a balance".

[^4]: Of course, in this case the '+' he performs does not satisfy the associative law (for example, he would answer 21 to "(10 + 7) + (10 + 4)" but 31 to "(10 + (7 + 4)) + 10"), so we would have to claim that he is fundamentally unable to assign a consistent meaning to '+'.

[^5]: Readers who have studied mathematical logic will be able to connect this to the Löwenheim-Skolem theorem.

[^6]: Kripke does call the existence of experiences distinctive to meaning "dubious". By contrast, in the *Philosophical Investigations*, he devotes considerable space to denying the existence of such experiences. Wittgenstein urges us to compare the case of pretending to read a foreign language one does not know with the case of reading that foreign language unconsciously after sufficient learning, emphasising that there is no special 'feeling' in either the former or the latter case.

