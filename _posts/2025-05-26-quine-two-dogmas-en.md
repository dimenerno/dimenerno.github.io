---
layout: post
title: "Quine, Two Dogmas of Empiricism"
date: 2025-05-26
tags: ["Philosophy", "Philosophy of Language"]
lang: en
related:
---

## Overview

The distinction between analytic and synthetic propositions, and the verification principle, are the two pillars of logical positivism. However, in *Two Dogmas of Empiricism*, Quine argues that both the analytic-synthetic distinction and the verification principle are ungrounded. Quine argues that the definition of analyticity is circular. Furthermore, he argues that propositions cannot be verified in isolation, and that only the entire web of beliefs can stand up to verification. The arguments Quine presents in _Two Dogmas_ not only undermine logical positivism but also suggest skepticism about meaning and a radical form of holism. This post also examines some objections to Quine's arguments.

## 1. Quine's Attack on the Analytic-Synthetic Distinction

Quine claims that all previous attempts to define analyticity are unsatisfactory. He examines the definitions provided by Kant and Frege as examples.

### 1.1. Kant's Definition of Analyticity

Kant's first definition of analyticity is as follows:

> “All $a$ are $b$” is analytic $\iff$ $a$ is conceptually contained in b

However, not only this definition relies on the metaphorical expression “conceptually contained”, but it is also limited to propositions with a subject-predicate structure. Kant's second definition of analyticity is as follows:

> $P$ is analytic $\iff$ $\lnot P$ implies a contradiction

But this definition requires an explanation of what a contradiction is. If contradiction is defined as “a proposition that is analytically false,” then this is merely a circular definition.

### 1.2. Frege's Definition of Analyticity

Frege's definition of analyticity is as follows:

> $P$ is analytic $\iff$ $P$ is a law of logic, or is derivable solely from the definitions of terms involved and the laws of logic 

By "law of logic", Quine understands it to be a sentence that is true regardless of how the non-logical terms are interpreted. For example, $(φ → ψ) → (¬ψ → ¬φ)$ is a law of logic because it is true no matter how $φ$ and $ψ$ are interpreted. Accordingly, “All bachelors are unmarried” is analytic as it can be derived solely from the definition of “bachelor” and laws of logic as follows:

1. Bachelor(x) := ¬Married(x) ∧ Male(x) (definition of bachelor)
2. ∀x [ ¬Married(x) ∧ Male(x) → ¬Married(x) ] (law of logic)
3. ∴ ∀x [ Bachelor(x) → ¬Married(x) ] (from 1 and 2)

### 1.3. Quine's Attack on Synonymy

**Quine challenges Frege’s definition by questioning how we can determine the definition of a word.** That is, he questions under what conditions “$a$ and $b$ are _synonymous_” holds. Quine examines several possible answers to this question. The first attempt is as follows:

> (i) $a$ and $b$ are synonymous $\iff$ $a$ and $b$ are listed as synonyms in the dictionary.

But clearly this approach is flawed, since a dictionary merely records already known synonyms. What we want to know is the criterion by which dictionary compilers list two words as synonyms. The second attempt is as follows:

> (ii) $a$ and $b$ are synonymous $\iff$ for any predicate $P$, $P(a)$ and $P(b)$ have the same truth value.

But this too is inadequate. For example, let $a$ = bachelor, $b$ = unmarried man, and $P(x)$: $x$ is a two-syllable word. Although $a$ and $b$ are synonymous, $P(a)$ is true while $P(b)$ is false.

To address this, Quine introduces the notion of **cognitive meaning**. Cognitive meaning is related only to the referent or concept, and excludes aspects such as word length, poetic mood, etc. Thus, (ii) is revised as follows:

> (iii) $a$ and $b$ are synonymous $\iff$ for any predicate $P$ _relevant only to cognitive meaning,_ $P(a)$ and $P(b)$ have the same truth value.

However, this is also inadequate. **This is because the extension of “any predicate” is language-relative.** (This is partly related to Quine's skepticism about second-order logic.) For example, let us call creatures with a heart “cordate” ($c$) and those with a kidney “renate” ($r$). All known species either have both a heart and a kidney or neither. Thus in a language $L_1$ that contains only the predicate $\mathrm{HasHeart}(x)$, both $\mathrm{HasHeart}(c)$ and $\mathrm{HasHeart}(r)$ are true, so cordate and renate are synonymous. Yet in a language $L_2$ that contains the predicate $\mathrm{NecessarilyHasHeart}(x)$, $\mathrm{NecessarilyHasHeart}(c)$ is true but $\mathrm{NecessarilyHasHeart}(r)$ is false, so they are no longer synonymous.

Thus, (iii) makes synonymy language-dependent. Indeed, for (iii) to be valid, it seems that the assumed language must include modality. Accordingly, (iii) is revised as follows:

> (iv) $a$ and $b$ are synonymous $\iff$ in a language $L$ with modal expressions, for any predicate $P$ relevant only to cognitive meaning, $P(a)$ and $P(b)$ have the same truth value.

However, Quine claims that even this is inadequate. **For now the meaning of modality must be explained.** That is, he now asks under what conditions “$a$ is necessarily $b$” holds. To define necessity as follows is to give a circular definition:

> $a$ is necessarily $b$ $\iff$ “All a are b” is analytically true.

Therefore, Frege's definition of analyticity is circular unless either a valid definitions of synonymy, or necessity, is provided.

## 2. Reflections on Quine's Attack

Quine's attack targets synonymy, but its implications are much broader.

### 2.1. Logical Skepticism

First, Quine's attack also undermines his own definition of laws of logic. For example, according to Quine, $P(x) ∧ Q(x) → P(x)$ is a law of logic because it is true no matter what is substituted for $P, Q, x$. **However, for this criterion to be coherent, the terms substituted for x must be synonymous.**

For example, let $P(x):$ $x$ is large, $Q(x):$ $x$ is wet, and $x$ = bank. Then, $P(x) ∧ Q(x) → P(x)$ becomes “A large and wet bank is a large bank.” For this sentence to be true, the two "bank"s of the subject and predicate must be synonymous<sub>A large and wet riverland is a large riverland</sub>. Otherwise, the sentence is false<sub>A large and wet riverland is a large financial establishment</sub>. Thus, Quine's definition of law of logic also depends on synonymy.

### 2.2. Semantic Skepticism

Second, Quine's attack renders translation between languages fictitious. If someone asks for the translation of “Dieser Apfel ist rot,” we would say "This apple is red.” That this is the _correct_ translation relies upon 'dieser', 'Apfel', 'ist', and 'rot' being respectively synonymous with 'this', 'apple', 'is', and 'red'. Generally, the following seems to hold:

> $φ$ is a translation of $ψ$ $\iff$ $φ$ is synonymous with $ψ$.

Hence if the notion in the right side is ambiguous, then that in the left is also ambiguous. **Consequently, Quine's skepticism about synonymy extends to skepticism about translation, and hence to skepticism about meaning.** (For an argument connecting skepticism about translation to skepticism about meaning, see forthcoming article.)

## 3. Objections to Quine's Attack on the Analytic-Synthetic Distinction

Quine's attack has the following structure:

> If the definition of a concept $C$ is circular, then $C$ is unintelligible.

Let us call this _Quine's Socratic Condition_. **It may be the case that Quine's Socratic Condition is too strong of a requirement.** For example, “red” or “blue” cannot be defined in a non-circular way — a person born blind cannot "make colors appear before them", no matter how many utterances involving color words are given to them — but that does not mean that color words are unintelligible. Indeed, Davidson and others have argued that language learning requires some primitive terms — i.e. were there a language all of whose concepts satisfy the Socratic Condition, that language would be unlearnable.

Nevertheless, Quine might argue that although not every concept should satisfy the Socratic Condition, especially those that relate to immediate sense data, certain vaguer concepts—such as analyticity—must. Consider the following sentence:

> Everything green has an extension.

Whether this sentence is analytic is ambiguous. Quine claims that this ambiguity arises not because of ambiguity in “green” or “extension,” but of “analytic.” This, he argues, shows that analyticity, unlike color words, cannot be legitimised without a rigorous definition.

In response, Grice and Strawson argue that the ambiguity in whether “Everything green has an extension” is analytic arises not from "analytic," but from “everything green.” For example, it is unclear whether a “green flash” counts as “everything green,” so the truth value of the sentence remains undetermined. On the other hand, analyticity seems to be used in a consistent way by almost every philosopher and every layman, so there is no reason to think of it so ambiguous as to require the Socratic Condition.

## 4. Quine's Critique of Logical Positivism

### 4.1. Critique of Reductionism

According to logical positivism, every truth is either analytic or synthetic. Analytic truths can be verified through logical analysis, and synthetic truths can be verified through sense data. Thus, the meaning of a sentence is generally taken to be a logical compound of sense data. This is the reductionist thesis of positivism. For example, the meaning of “The cat is on the table or in the box” is analyzed into sense data corresponding to “cat,” “table,” “box,” and logical connectives such as “or” and “is.”

**However, Quine argues that semantic reductionists bear the burden of proof to show that it is actually possible to reduce natural language sentences to logical compounds of sense data.** He refers to Carnap's attempt in _The Logical Structure of the World_ to reconstruct natural language solely from sense data and logical connectives, but notes that, as Carnap himself admitted, the project failed.

Quine claims that reductionism cannot be justified unless this burden of proof is met.

### 4.2. Critique of Verification Principle

According to logical positivism, the meaning of a sentence is its verifiability. Under this verificationist theory of meaning, analyticity can be defined as follows:

> P is analytic $\iff$ P is true regardless of the outcome of verification

However, Quine argues that the logical positivist definition of analyticity is also problematic. **Quine claims that it is impossible to verify individual propositions in isolation,** hence the verificationist theory of meaning cannot account for the meaning of individual sentences.

Consider the following proposition:

> (i) Water boils at 100°C

One way to verify this proposition is to put a thermometer in boiling water. But if the thermometer reads 102°C, should we reject (i)? Not necessarily. Instead, we might reject “the thermometer is working,” “the water is pure,” “superheating did not occur,” “I read the thermometer correctly,” and so on.

**Thus, Quine argues that what is subject to verification is always the entire web of beliefs.** This is his holistic epistemology. In the above case, what is being tested is not the proposition “water boils at 100°C,” but the entire web of beliefs: “this is pure water, the thermometer is working, superheating did not occur, water boils at 100°C, …” and so on.

### 4.3. Implications of Epistemological Holism

Quine's holism is radical in that it applies to all propositions. Quine claims that there is no sharp boundary between domains within the web of beliefs. Thus, mathematics does not enjoy a privileged epistemological status over science or philosophy. This leads to Quine's naturalism.

For Quien, that a proposition $φ$ is _certain_, does not mean that $φ$ is true in all cases — something which cannot be verified in isolation — but that $φ$ is located deep within the web of beliefs. When evidence contrary to the web of beliefs is presented, we must revise the web so as to minimise the likelihood of future contrary evidence. Hence in a pragmatic spirit, it is preferable to revise beliefs at the periphery rather than those at the core. Thus, beliefs at the core persist almost permanently and acquire the status of certainty. **However, if it becomes more practical to abandon a core belief—such as a law of logic—Quine holds that it is appropriate to do so.**

### 4.4. Objections to Epistemological Holism

**Crispin Wright argues that Quine's holism is incoherent because it leads to infinite regress.** Consider a web of beliefs consisting of the following two elements:

- A scientific theory of the world $T$
- A logical system $\mathcal{S}$

Suppose that $p → q$ is a law derivable from $T$ and $\mathcal{S}$. For example, if $T$ is Newtonian mechanics and $\mathcal{S}$ is first-order logic, $p$ might be “photons have no mass” and $q$ might be “photons are not affected by gravity.”

Now suppose that, contrary to $T$ and $\mathcal{S}$, an observation is made that supports $p$ and $¬q$—for example, gravitational lensing. According to Quine's holism, the following four propositions are all candidates for rejection:

1. Reject $p ∧ ¬q$ (the gravitational lensing observation was mistaken)
2. Reject $T$ (Newtonian mechanics is false)
3. Reject $\mathcal{S}$ (first-order logic is false)
4. Reject $T \vdash_\mathcal{S} p → q$ (the derivation of $p → q$ from Newtonian mechanics and first-order logic is mistaken)

Which of these four to reject is determined by pragmatic considerations. Suppose, for example, that pragmatism suggests the following:

{:start="5"}

5. It is most practical to reject (4).

However, Wright points out that (5) itself is part of the web of beliefs. Thus, instead of rejecting (4), we could choose to reject (5). Conversely, to avoid rejecting (5), the following belief is required:

{:start="6"}

6. It is practical not to reject (5).

But to avoid rejecting (6), we require the belief that it is practical not to reject (6), and so on, leading to infinite regress. Thus, Wright argues that to avoid infinite regress in epistemology, some beliefs—such as (4)—must be placed outside the scope of pragmatic considerations.

## References

Quine, Willard V. O. (1951). Two Dogmas of Empiricism. Philosophical Review 60 (1):20–43.

Miller, Alexander (1998). Philosophy of Language. New York: Routledge.

