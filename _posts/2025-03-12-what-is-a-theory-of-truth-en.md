---
layout: post
title: "What is a Theory of Truth?"
date: 2025-03-12
tags: ["Philosophy", "Philosophy of Language"]
lang: en
related:
---

> This post was machine translated and has not yet been proofread. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

> This article is a summary of <a href="/public/What is a Theory of Truth.pdf">Scott Soames, _What is a Theory of Truth?_ (1984)</a>.

### Abstract

Field argued through modal objections that Tarski's definition of truth fails to elucidate the meaning of truth. In response, Field proposed a project to define truth from causal theory. However, this paper argues that Field's project also fails because it faces the same modal objections. Instead, the author proposes a redefinition of language that enables Tarski's definition of truth to elucidate what truth is for each language.

## 1. What Does Tarski's Theory Attempt?

### Three Purposes of Theories of Truth

The philosophical significance of Tarski's theory of truth, unlike its indubitable mathematical significance, has been the subject of ongoing debate. One reason for the continuing controversy is that scholars disagree about what the purpose of a theory of truth should be. The main positions are as follows:

1. To explain what 'truth' means.
2. To reduce 'truth' to other predicates and logical relations.
3. To accept 'truth' as a primitive concept and develop philosophical positions from it.

A theory attempting 1 must consider cases where the truth predicate applies to propositions rather than sentences, such as 'Church's theorem is true' or 'John 1:14 is true'. Since Tarski's theory of truth applies only to formal sentences, it does not correspond to 1.

Moreover, his theory does not correspond to 3 either. Tarski expressed his position that his theory of truth is completely unrelated to epistemology as follows:

> The semantic definition of truth does not impose any constraints on the conditions under which the sentence "snow is white" is accepted. It only imposes the constraint that when accepting or rejecting the sentence "snow is white", one must likewise accept or reject "'snow is white' is true". Therefore, we can accept the semantic definition of truth without any modification to existing epistemological attitudes. We can remain naive realists, or remain critical realists, idealists, empiricists, or metaphysicians.

### Semantic Ascent

Nevertheless, Tarski's truth predicate can assist in the articulation of philosophical positions through what Quine called **semantic ascent**. For example, suppose we wish to generalise inferences of the following form:

- Snow is white $\to$ (The sky is blue $\to$ Snow is white)
- The Earth rotates $\to$ (The sun is cold $\to$ The Earth rotates)
- ...

The natural generalisation is as follows:

- For any sentences $p, q$: ($p$ is true $\to$ ($q$ is true $\to$ $p$ is true))

In this formalisation, the truth predicate is indispensable for generalising each enumerated case. One might object that the dependence on the truth predicate can be eliminated as follows:

- For any sentences $p, q$: $p \to (q \to p)$

However, the above sentence is not syntactically correct. Unless we rely on second-order logic, which is fraught with philosophical problems, $p, q$ must be sentences rather than propositions. The sentences here are sentences in the mathematical logical sense, i.e., not propositions without free variables, but sentences in the philosophical sense, i.e., strings of symbols. To use the language of mathematical logic precisely, $p, q$ are Gödel numbers of sentences. In short, it is 2 rather than 1.

1. $p =$ Snow is white, $q = $ The sky is blue
2. $p =$ "Snow is white", $q = $ "The sky is blue"

However, since $\to$ is a logical operator, propositions rather than sentences must appear on both sides<small>(in the language of mathematical logic, sentences rather than Gödel numbers must appear)</small>. Therefore, $p$ must be made into the proposition _$p$ is true_. Formally, this is written as follows:

- $\forall p, q \in \mathbb{N} \;\; T(\ulcorner p \;\dot{\to}\; (q \;\dot{\to}\; p) \urcorner)$

Thanks to such semantic ascent, several philosophical positions can be articulated. For example, realism can be formulated as follows:

> There exists some sentence $s$ such that $s$ is true, but it is impossible for human cognition to find sufficient grounds for $s$.

Because the truth predicate frequently appears in the articulation of philosophical positions, some philosophers believed that 'truth' is a philosophically profound concept. However, as Tarski and Quine already pointed out, this is merely for expressive convenience, and the definition of truth itself is unrelated to other philosophical positions.

### Physicalism and Reduction

Tarski's theory of truth corresponds to 2, and his philosophical background played a role here. Tarski was a moderate physicalist. The meaning of 'moderate' is that he understood the terminus of reduction to include not only physics but also logic and set theory. He wanted a definition of truth compatible with his physicalism, and therefore rejected the approach of accepting truth as a primitive concept and listing axioms about its characteristics. Instead, he reduced truth to set theory by inductively defining a certain set, then showing both ① that a predicate having that set as its truth set entails all T-schemas, and ② that the set satisfying that inductive definition is unique.

In modern times, Tarski's theory of truth has become the subject of philosophical criticism. The author of this paper argues that this is unjust criticism. The main thrust of the criticism is that his theory lacks the conditions that a theory of truth should properly possess, but these conditions are in fact unjust or incoherent.

## 2. Field's Criticism

### Two Stages of Tarskian Definition

Field distinguishes Tarski's definition of truth into two stages. The first is **primitive denotation**. In this stage, one defines what it means for a name $n$ to *denote* an object $o$ in language $L$, and for a predicate $P$ to *hold* of an object $o$. This definition consists of the following:

- Name $n$ denotes object $o$ in $L$ $\iff$ one of the following holds:
  - $n = \text{'apple'}, o = $ apple
  - $n = \text{'banana'}, o = $ banana
  - $n = \text{'coconut'}, o = $ coconut
  - ...
- Predicate $P$ holds of object $o$ in $L$ $\iff$ one of the following holds:
  - $P = \text{'Round'}, o = $ apple, coconut, ...
  - $P = \text{'Long'}, o = $ banana, ...
  - ...

The second stage is the **recursive definition of truth**. This definition is as follows:

- Sentence $S$ is true in $L$ $\iff$ $S \in K$

where $K$ is the unique set satisfying the following:

1. When there exists an object $o$ such that $n$ denotes $o$ and $P$ holds of $o$, then $\ulcorner Pn \urcorner \in K$
2. When $A \in K$ or $B \in K$, then $\ulcorner A \lor B \urcorner \in K$
3. When $A \notin K$, then $\ulcorner \lnot A \urcorner \in K$

#### Modal Objections and Field's Project

Field argues that **primitive denotation fails to elucidate the meaning of '$n$ denotes $o$'**. According to Field, the denotation relation depends on the psychology of language users. Therefore, it was possible for 'apple' to denote banana rather than apple. However, in Tarski's primitive denotation, since 'apple' is coupled with apple _within the necessary and sufficient condition_ for $n$ to denote $o$, it is necessary that 'apple' denotes apple. In short, the problem is that the definition of denotation is hardcoded.

Therefore, Field seeks to overcome Tarski's limitations by presenting a physicalist reduction of denotation. Field's project is to present a physico-causal theory of denotation based on Kripke's theory, thereby providing a theory that derives the correct definition of truth for _any speaker's language_ $L$.

#### Problems with Field's Project

However, Field's project has problems. The first problem is the issue raised by the denotation of abstract objects that appear to lack causal efficacy.

However, a more serious second problem is that, following Field's objection, not only does primitive denotation fail to elucidate the meaning of denotation, but **the recursive definition of truth also fails to elucidate the meaning of truth**. This is because rules related to logical operators are hardcoded in the recursive definition of truth. Therefore, the modal objection is equally valid. For instance, whilst it is clearly contingent that $\lor$ means disjunction, according to the recursive definition, "$T(\ulcorner A \lor B \urcorner) \Leftrightarrow T(\ulcorner A \urcorner)$ or $T(\ulcorner B \urcorner)$" is necessary.

Therefore, Field must also present physicalist reductions of 3, 4, 5, ... as well as 1 and 2.

1. Name $n$ denotes object $o$.
2. Predicate $P$ holds of object $o$.
3. Sentence $A$ is the negation of sentence $B$.
4. Sentence $A$ is the disjunction of sentences $B, C$.
5. Sentence $A$ existentially quantifies variable $u$ in sentence $B$. (...)

However, it is unclear how 3, 4, 5, ... can be reduced without circular dependence on truth. The author argues that attempts at this work so far have not been successful. As an example, he mentions Quine's attempt to reduce truth-functional operators to collective acceptance or rejection by the linguistic community, which is problematic for reasons given in <a href="/public/Quine on Alternative Logics.pdf">Alan Berger, _Quine on 'Alternative Logics' and Verdict Tables_ (1980)</a>. (I haven't read this yet, but it's probably a modal problem.)

> **Addition.** Burgess points out in *Truth* that Field's project's dependence on Kripke's theory is also problematic. This is because Kripke's theory is not a theory of reference. Kripke's theory is about how the initial act of using name $n$ to refer to object $o$ continues to form the semantics of names; in his theory, reference is a primitive concept. Kripke himself strongly objected to the popular opinion that his theory is reductionist about reference.

## 3. The Relationship Between Meaning and Truth

Most philosophers of language acknowledge that meaning and truth are in a mutually suggestive relationship. For instance, they acknowledge the following:

- If sentence $S$ means $p$ in language $L$, then the necessary and sufficient condition for $S$ to be true in $L$ is $p$.

Therefore, some philosophers expected that Tarski's theory of truth could be extended to a theory of meaning. However, the modal objection also shows that Tarski's theory of truth cannot be connected to a theory of meaning. For example, Tarski's truth predicate defined for Peano arithmetic suggests 1 but not 2. Rather, Tarski's definition suggests 3.

1. $T(\ulcorner 1 \;\dot{+}\; 1 = 2 \urcorner) \Leftrightarrow 1 + 1 = 2$
2. If the meaning of $\dot{+}$ were multiplication, then $T(\ulcorner 1 \;\dot{+}\; 1 = 2 \urcorner) \Leftrightarrow 1 \times 1 = 2$
3. If the meaning of $\dot{+}$ were multiplication, then $T(\ulcorner 1 \;\dot{+}\; 1 = 2 \urcorner) \Leftrightarrow 1 + 1 = 2$

Of course, since Tarski requires that the definition of truth be materially adequate, he would argue that if the meaning of $\dot{+}$ were actually multiplication, then $T$ suggesting $T(\ulcorner 1 \;\dot{+}\; 1 = 2 \urcorner) \Leftrightarrow 1 + 1 = 2$ would not be a correct definition of truth. That is, Tarski claims the following: ($\square p$ means that $p$ is necessary.)

&nbsp;&nbsp;&nbsp;a.&nbsp; $\square($ $T$ is a truth predicate $\to$ ( sentence $S$ means $\phi$ $\to$ $\;T(S) \Leftrightarrow \phi$ ) $)$

However, the approach of deriving a theory of meaning from a theory of truth depends on the following proposition:

&nbsp;&nbsp;&nbsp;b.&nbsp; $T$ is a truth predicate $\to$ $\square($ sentence $S$ means $\phi$ $\to$ $\;T(S) \Leftrightarrow \phi$ $)$

a and b are different propositions. Tarski's theory guarantees a but not b.

## 4. Newly Defining 'Theory of Truth'

### Meaning as an Essential Property of Language

The criticism of Tarski's definition of truth examined so far presupposes that the objects denoted by names in language $L$ must be contingent, i.e., that semantics is dependent on the speakers of $L$. However, instead of viewing language in this way, the author proposes to view information about what names denote as also part of the language.

For instance, in first-order logic, language $L$ can be regarded as a triple $\langle S_L, D_L, F_L \rangle$<small>(the language spoken of here is quite different from the language of model theory. The language here has not only syntax but also semantics)</small>. The meaning of each is as follows:

- $S_L$: The set of well-formed formulae
- $D_L$: The set of denotable objects
- $F_L$: An interpretation function that maps each name to an object

When language is defined in this way, Tarski's definition of truth produces a materially adequate truth predicate $T_L$ for _any_ language $L$. Moreover, since $F_L$ is merely a set of tuples, it does not depart from Tarski's physicalist line. In short, **the author argues that by regarding the semantics of a language as an essential property of that language, Tarski's definition of truth can be elevated to a general definition of truth.** Therefore, there is no case where name $n$ in language $L$ denoted an object other than the object $o$ it denotes. The community of language users is not the agent that gives semantics to language, but the agent that chooses which language to use. And the problem of determining the language used by a community is a matter of pragmatics, not semantics.

### Type and Token

Field's physicalist background led him to focus on utterances rather than sentences. Field argues that Tarski only provided a definition of truth for sentences, but failed to provide a definition of truth for utterances. If Tarski had heard this objection, he would have said that this work should be divided into two stages as follows:

1. Through what principle does utterance $u$ in language $L$ become an utterance of sentence $s$?
2. What does it mean for sentence $s$ to be true in language $L$?

Therefore, Tarski's definition is a **type definition**. In contrast, Field seeks to answer the following question:

- What does it mean for token $t$ to be true in language $L$?

Here, a token might be graphite marks on paper, chalk marks on a blackboard, or speech sounds. That is, what Field seeks is a **token definition**. However, it is questionable whether a token definition of truth is possible. Field himself attempted to reach a token definition by modifying Tarski's definition as follows:

- A token of $\ulcorner \lnot e \urcorner$ is true $\Leftrightarrow$ the token of $e$ contained in that token is not true.

However, as mentioned earlier, the above definition hardcodes the meaning of $\lnot$ as negation, so it faces the same modal objection. Therefore, the above definition should be modified as follows:

- A token of proposition $A$ that is the negation of proposition $B$ is true $\Leftrightarrow$ some token of $B$ is false

But even if '...is the negation of' can be reduced physicalistically, it is unclear how to specify the relevant token of $B$ in a given context. For example, consider the following sentence:

> Trump's claim about climate crisis is wrong.

It is unclear which of the numerous utterance tokens Trump has made regarding climate crisis should be the object of negation in the above sentence. The token of $B$ might not even exist. For example, consider the following sentence:

> If Trump were to give a lecture on ethics, most of the content would be wrong.

To my knowledge, Trump has never given a lecture on ethics, so the token that is the object of negation in the above sentence does not exist. However, it seems perfectly reasonable to claim that the above sentence is true. This reveals the difficulties faced by a token definition of truth. From this, the author argues that we should accept Tarski's type definition of truth for now, and regard whether the pragmatic relationship between language, expression, speaker, and utterance can be reduced to physicalism as a separate issue.

### The Problem of Pragmatics

Although the author has attributed the relationship between language and speaker to the realm of pragmatics, this does not mean that this problem is unimportant. This is because there are various philosophical considerations regarding the relationship between language and speaker. For instance, Quine argues that the statement "speaker $A$ uses language $L$" cannot be reduced physicalistically<small>(the gavagai argument)</small>. According to the author, Quine's position can be seen as accepting Tarski's definition of truth whilst rejecting the physicalist reduction of the relationship between language and speaker.

### The Problem of Truth-Conditional Semantics

Finally, the author argues that attempts to derive a theory of meaning from the concept of truth, particularly theories that the acquisition of the concept of truth is a prerequisite for semantic competence, cannot all succeed. Although not explained in detail, it is probably the following problem. Attempts to derive a theory of meaning from the concept of

하지만 $\leftrightarrow$를 고전 논리의 동치 관계로 이해하든, 양상 논리의 필연적 동치 관계로 이해하든 간에 2는 성립하지 않는다. 예를 들어 다음은 필연적으로 성립한다.

- $1 + 1 = 2 \leftrightarrow $ 페르마의 마지막 정리

그러나 $1 + 1 = 2$의 의미가 페르마의 마지막 정리인 것은 아니다.

## 5. 결론

결론적으로 논문의 저자는 참에 대한 이론이 의미에 대한 이론과 직결되어 있어야 한다는 요구는 부당하다고 주장함으로써 타르스키의 참 정의와, 그것이 함의하는 참에 대한 축소주의<sub>deflationism</sub>를 옹호한다. 이것이 참에 대한 이론이 불필요함을 의미하지는 않는다. 크립키의 참 이론은 타르스키의 참 이론을 실질적으로 발전시켰다. 그러나 그 발전은 이미 우리에게 익숙한 참의 성질들을 T-스키마로써 정확히 해명하고, 올바르게 설계된 형태론으로 거짓말쟁이 역설과 같은 모순을 회피하는 데 있다. 참에 대한 이론으로부터 이 이상을 기대하는 것은 바람직하지 않다.
