---
layout: post
title: "On Reference — Descriptivism and Causal Theory"
date: 2025-01-07
tags: [Philosophy, Philosophy of Language]
lang: en
related:
  - "On Reference — Descriptivism and Causal Theory"
  - "On Reference — Character Model and Intentionalism"
  - "On Reference — Definite Descriptions"
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

> This article is a summary and analysis of the [Stanford Encyclopedia of Philosophy entry on reference](https://plato.stanford.edu/entries/reference/).

## 1. Introduction

In "That is Venus" and "The last Queen of England is Elizabeth II", the expressions 'that', 'Venus', 'the last Queen of England', and 'Elizabeth II' are expressions that **refer** to exactly one object in this world by specifying it. However, the specific principles by which these expressions come to refer to particular objects are shrouded with philosophical puzzles.

This article addresses six questions:

1. **The subject of referring:** Is reference done by the speaker via their intention, or by the word via its meaning?
2. **The meaning of referring expressions:** Is it a (defininte) description, the referent, or something else?
3. **The mechanism of reference:** What grounds the correspondence between referring expressions and referred objects?
4. **The scope of theories of reference:** Do all referring expressions share a common mechanism?
5. **The privacy of reference:** To what extent does reference depend on the speaker's private states (e.g. intentions to refer)?
6. **The significance of theories of reference:** Does the reference relation actually exist? Is it philosophically significant?

This article examines four theories: **descriptivism, causal theory, character model, and intentionalism**, and briefly discusses **referential scepticism**.

|                | Descriptivism                                                                                  | Causal Theory                                                                              | Character Model                                                                                       | Intentionalism                                                                     |
| -------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Subject**    | Speaker                                                                                        | Referring expression                                                                       | Pluralistic                                                                                           | Speaker                                                                            |
| **Meaning**    | Descriptive content                                                                            | Referent                                                                                   | Character and content                                                                                 |                                                                                    |
| **Mechanism**  | Words are associated with specific descriptive content and refer to objects that satisfy them. | Words are associated with causal chains that trace back to the referent's initial baptism. | Words are associated with conventional referential rules (character) to refer its referent (content). | Words are epiphenomenal to the speaker's intention to refer to a specific objects. |
| **Scope**      | Broad                                                                                          | Narrow (names)                                                                             | Moderate                                                                                              | Broad                                                                              |
| **Privacy**    | Strong privacy                                                                                 | Weak privacy                                                                               | Moderate privacy                                                                                      | Strong~moderate privacy                                                            |
| **Scholars**   | (Frege), Russell, Strawson, Reichenbach                                                        | Mill, Kripke, Kaplan                                                                       | Kaplan                                                                                                | Kaplan, Grice, Reimer                                                              |
| **Strengths**  | Solves Frege's puzzle                                                                          | Solves Kripke's arguments                                                                  | Explains how pure indexicals work                                                                     | Explains how impure indexicals work                                                |
| **Weaknesses** | Kripke's modal and semantic arguments                                                          | Problems with names having multiple bearers                                                | Speaker-hearer dilemma arises with impure indexicals                                                  | Humpty Dumpty problem                                                              |

## 2. Proper Names

### 2.1. Descriptivist Theory of Proper Names

> **Descriptivist Thesis.**
>
> 1. A proper name $n$ is associated with specific **descriptive content** $P$.
> 2. $n$ is associated with $P$ because the **speaker** privately (mentally) associates $n$ with $P$.
> 3. When there exists a **unique** object $c$ that satisfies $P$, $n$ refers to $c$.
> 4. The **meaning** of $n$ ($P$) and the referent of $n$ ($c$) are distinct, with the former determining the latter.

For example, a speaker who associates the name 'Venus' with the descriptive content "the second planet of the solar system" refers to Venus using 'Venus' because there is a unique object satisfying that descriptive content, and that object is Venus.

_Remark._

1. Whilst it is standard to understand descriptive content as descriptions, scholars such as Searle argue that descriptive content need not be linguistically specifiable but may also be based on perception.

2. The satisfaction relation of descriptive content is speaker-independent. As we shall see, this spells problem in explaining indexicals.

3. Furthermore, the satisfaction relation is _de dicto_. As we shall see, this spells problem in dealing with modality.

4. Theses 1, 3, 4 provide a **semantics** for names — a theory specifing the domain (names) and codomain (descriptive content) of the meaning function $M$ — while thesis 2 provides a **metasemantics** for names — a theory explaining how the map $n \mapsto M(n)$ is defined for each name $n$.

#### Argument 1. Cases of Names with Multiple Bearers

Consider a case where A and B know two people named 'Boris Johnson'. One is a colleague of A and B, and the other is the former Prime Minister of Britain. When A says to B, "Boris Johnson has made a grave mistake," B asks, "Which Boris Johnson do you mean?" To this, A replies, "The former Prime Minister of Britain."

In the above case, it appears that (1) the speaker A has the authority to determine what 'Boris Johnson' refers to, and this determination is made (2) via the descriptive content that the speaker has in mind.

#### Argument 2. Frege's Puzzle

Consider the following examples:

> 1. The morning star is the evening star.
> 2. Santa Claus lives at the North Pole.
> 3. Fred believes that Mark Twain was American but does not believe that Samuel Clemens was American.

Let us first make some remarks. Statement 1 is true but not a priori. Statement 2 is not incomprehensible. Fred's belief expressed in Statement 3 is not inconsistent.

If the meaning of a name were its referent, then 1 would be a priori by the law of self-identity, 2 would be nonsense as it has as its subject an expression lacking a referent, and in case 3, Fred's belief would be inconsistent since Mark Twain and Samuel Clemens share the same referent. On the other hand, descriptivism provides adequate explanations for all three statements by distinguishing between the meaning and referent of names.

#### Objection 1. The Modal Argument

Even if I associate the description "the former British Prime Minister who implemented Brexit" with 'Boris Johnson', I can still assert the following sentence as true:

> 1\. Boris Johnson might not have implemented Brexit.

However, if the meaning of a name is equivalent to a description, then 1 is equivalent to 2.

> 2\. The following might have been the case: the former British Prime Minister who implemented Brexit did not implement Brexit.

But 2 is false. Therefore, the meaning of a name is not descriptive content.

_Remark._ Since the meaning of the name is _de dicto_, the inference from 1 to 2 is a _de dicto_ substitution. In the case of _de re_ substitution, 1 becomes 3.

> 3\. Let $c$ be _that person_ who is the former British Prime Minister who implemented Brexit. Then the following might have been the case: $c$ did not implement Brexit.

Unlike 2, there is no problem in regarding 3 as true. Hence, to deal with the modal argument, descriptivists may attempt to modify theses 3 and 4.

3. When there exists a unique object $c$ that satisfies $P$ **in the actual world**, $n$ refers to $c$.

4. The meaning of $n$ is the referent of $n$, i.e., $c$. (That is, the meaning of $n$ is de re)

However, this modified descriptivism not only fails to adequately explain Frege's puzzle but also fails to adequately explain the following semantic argument, making it a theory with many limitations.

#### Objection 2. The Semantic Argument

The semantic argument is an argument that refutes a group of theories belonging to descriptivism, including the modified descriptivism just presented. The gist is that in many cases, the descriptive content $P$ that a speaker associates with a name $n$ fails to _uniquely_ pick out a specific object in the world (i.e., the description is **insufficient**), and descriptive content is **unnecessary** for reference in the first place.

As a case showing that descriptive content is insufficient, there is the **Feynman-Gell-Mann thought experiment** presented by Kripke. The descriptive content that most people associate with the name 'Feynman' is something like "a famous American physicist". This description also applies to Gell-Mann. However, we seem to successfully refer to Feynman with the name 'Feynman'.

Furthermore, as a case showing that descriptive content is unnecessary, consider the **Gödel-Schmidt thought experiment** likewise presented by Kripke. Kripke assumes the following situation:

> In fact, the mathematician who first proved the incompleteness of arithmetic was not Gödel but an unknown mathematician named Schmidt. However, before publishing the proof, Schmidt died under mysterious circumstances, and his proof fell into Gödel's hands and was published under Gödel's name.

(Regarding this bizarre thought experiment, there is a rumour that it was Kripke's way of venting his jealousy towards Gödel, a logician greater than himself)

If (P1) the above assumption is true, (P2) descriptivism is correct, and (P3) the descriptive content that most people associate with the name 'Gödel' is "the mathematician who first proved the incompleteness of arithmetic", then (C) the object that most people refer to with the name 'Gödel' is Schmidt, not Gödel. However, this is counterintuitive. Therefore, descriptivism is not correct.

_Remark._ To overcome the semantic argument, descriptivists can take one of two approaches:

1. The descriptive content associated with a name can transcend information personally available to the speaker.

2. The descriptive content associated with a name can adopt "the person whom the person who transmitted this name to me intended to refer to with that name".

Strawson chooses approach 1. According to him, speakers can rely on others for the task of providing the descriptive content that should be associated with names. In this case, the meaning of 'Feynman' or 'Gödel' is the descriptive content that Feynman experts or Gödel experts associate with each name. However, Strawsonian theory has the limitation of being counterintuitive in that it makes the speaker's referential intention irrelevant to the actual reference.

Approach 2 is closely connected to causal theory. Let us examine this theory.

### 2.2. Millianism and Causal Theory of Proper Names

> **Millian Thesis.** The meaning of a proper name is its referent.

As the name suggests, this position traces back to John Stuart Mill. Millian theories imply that identity statements such as "The morning star is the evening star" are **a posteriori but necessarily true**.

_Remark._ Kripke also argues that there exist sentences that are **a priori but contingently true**, citing "The length of the standard metre is 1m" as an example.

The Millian thesis provides semantics for names. A representative metasemantics supplementing this is the causal theory.

> **Causal Theory**.
>
> 1. There is an **initial baptism**, an event in which object $c$ is first called by name $n$.
> 2. Starting with those who participated in the initial baptism, speakers who refer to $c$ with $n$ transmit this usage to other speakers through communication. Such transmission of usage forms a **causal chain** of the name.
> 3. The meaning (referent) of name $n$ is the object named in the initial baptism that occurred at the starting point of $n$'s causal chain.

One subtle problem with causal theory is distinguishing which communicative transmissions substantially participate in the causal chain. For instance, if I called my arrogant cat 'Napoleon' to a work colleague, this communication does not substantially participate in the causal chain of the name 'Napoleon' (parasitic use of names). There are also cases where the referent of a name changes along the way, such as the **Madagascar case** (confused use of names). We omit discussion of this problem here.

### 2.3. The Problem of Names with Multiple Bearers

In cases of names with multiple bearers, such as the earlier 'Boris Johnson' example, the authority to determine reference seems to lie with the speaker. This fact poses no problem for classical descriptivism. However, this

In cases of names with multiple bearers, such as the earlier 'Boris Johnson' example, the authority to determine reference seems to lie with the speaker. This fact poses no problem for classical descriptivism. However, this spells trouble for Strawsonian and causal theories.

In the case of Strawson's theory, the referent of a name $n$ is uniquely determined by a group of experts, so it can have at most one referent. However, since names with multiple bearers are clearly possible, Strawson's theory must consider names in a more nuanced way. That is, it must acknowledge the possibility of names that are literally equivalent ($\ulcorner n_1 \urcorner = \ulcorner n_2 \urcorner$) but semantically different ($n_1 \mapsto c_1, n_2 \mapsto c_2, c_1 \neq c_2$). However, this raises the question of what principle determines $i$ when the speaker utters $\ulcorner n_i \urcorner$. _This principle cannot be the speaker's internal description, as one can imagine a speaker who can refer to either $c_1$ or $c_2$ using $\ulcorner n_i \urcorner$, but lacks sufficient descriptive content to distinguish between $c_1$ and $c_2$._

> I cannot accept the italicised content. Are there really such cases?

A similar problem arises in Millianism. To overcome this issue, Kaplan considers names as **psychological phenomena**. That is, a name $n$ is a psychological phenomenon intertwined with the literal content $\ulcorner n \urcorner$ and the intention to refer to $c$ using $\ulcorner n \urcorner$, and what is transmitted through the causal chain is this psychological phenomenon. According to this view, names with multiple bearers are distinguished as $n_1 = (\ulcorner n \urcorner, c_1), n_2 = (\ulcorner n \urcorner, c_2)$, and a speaker who has successfully acquired $n_1$ and $n_2$ can choose to use either $n_1$ or $n_2$ according to their intention.

Another approach that differs from Kaplan's is the attempt to resolve the problem of multiple bearers through a combination of causal theory and indexical theory. This approach has been adopted by Lucanati, Pelcher, and Rainsbury, and requires an understanding of the indexical theory that will be examined in the following text.
