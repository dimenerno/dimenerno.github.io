---
layout: post
title: "Three Types of Self-referential Sentences"
date: 2026-09-30
tags: ["Logic"]
lang: en
related:
---

In this short essay I’ll classify the three types of self-referential sentences and employ this classification to sketch an explanation that sets apart paradoxical self-referential sentences (e.g. “This sentence is false”) from innocuous self-referential sentences (e.g. “This sentence is not provable”). The three types are as follow:

1. **Physically self-referring:** The sentence is referred to as a physical entity. Thus it can be predicated by, and only by, physical properties such as color, width, location, etc. 
2. **Syntactically self-referring:** The sentence is referred to as a syntactic entity. Thus it can be predicated by, and only by, syntactic properties such as grammaticality, word count, provability, etc.
3. **Semantically self-referring:** The sentence is referred to as a semantic entity. Thus it can be predicated by, and only by, semantic properties such as truth-falsity, meaningfulness, synonymity, etc.

Here are the examples for each type:

1. This sentence is shown in black.
2. This sentence has thirty five characters.
3. This sentence is true.

1 and 2 are true, while 3 lacks apparent truth-value. **The thesis of this essay is that only physically and syntactically self-referring sentences have truth-conditions, and thus are "innocuous".** Note that the Gödel sentence, the prime example of an innocuous self-referential sentence, is syntactically self-referring, for provability is a formal notion.

To which type a self-referential sentence belongs can be inferred from the type of predicate used. This may be brought out even more clearly by disambiguating the notion of sentence. Let us call sentences as physical / syntactic / semantic entities, **markings / strings / propositions**, respectively. We thus rewrite the above examples as follows:

<ol start="4">
    <li>This marking is shown in black.</li>
    <li>This string has thirty five characters.</li>
    <li>This proposition is true.</li>
</ol>


Note that 5 is false. This is expected, since ‘sentence’ and ‘string’ are syntactically distinct, hence the referent of the subject in 2 and 5 are distinct.

This classification may be made more elaborate by further considerations such as the type-token distinction (e.g. “This sentence is inside parentheses” is true if token-wise but false type-wise), but I will not be concerned with them here for simplicity.

The upshot of the classification is that semantically self-referring sentences lack truth value insofar as one operates with compositional semantics. To determine the truth-condition of 6, the truth-condition of its subject is required. Yet the subject is 6 and we end in a regress. Contrast this with an innocuous example:

<ol start="7">
    <li>Snow is white.</li>
    <li>The above proposition is true.</li>
</ol>

To determine the truth-condition of 8, the truth-condition of its subject is required. The subject is 7 and its truth-condition is given as snow being white. Since this condition holds, 7 is true and so is 8.

To summarize, physically and syntactically self-referring sentences are legitimate since the recursiveness of “this sentence” is effective only once — the depth of recursion is 1. This primary recursion returns a “dormant” version of the sentence with no further self-recursion. This contrasts with semantically self-referring sentences, in which the recursion is not well-founded.

I wanted to keep this essay as short as possible. The primary aim of this essay is time-killing and the secondary to break off from the compulsion that one shouldn't start writing unless one has done all the fastidious research. So let me just conclude with a brief sketch on some noteworthy points.

First, I am aware that this account comes close to throwing away some seemingly innocuous self-referential sentences, such as:

<ol start="9">
    <li>This sentence is such that its subject phrase refers to a sentence.</li>
</ol>

Since reference is a semantic notion, by the above account 9 has no truth-condition. Yet 9 seems to be intuitively true. I have a rough idea of how to deal with such cases, by an analogy to the famous sentence by Quine:

<ol start="10">
    <li>Giorgione was so-called because of his size.</li>
</ol>

Here the name 'Giorgione' features both as a syntactic entity (a name with certain characters) and a semantic entity (a name that refers to a certain painter). I think a similar mechanism is at play in 9, which eludes the simple three-way classification given in this essay. I am still optimistic that a careful analysis will render 9 as non-problematic.

Second, I am aware that the line between syntax and semantics is quite muddy. For example, whether truth (or truth-predicate) is a semantic or a syntactic notion is unclear. I personally am skeptical towards the cognitive necessity of formal, syntactic constructions of truth predicates (both typed and type-free), since they seem to provide no philosophically substantial insights other than lending us more elaborate ways of equivocating syntax and semantics and to end in so-called "falsidical paradoxes". I think they should be left properly in the realm of semantics.

Another alternative is to collapse the distinction between syntax and semantics altogether. Some forms of conventionalism seem to do just this. In such pictures, a properly formed sentence is comparable to a quasi-automaton that, relative to relevant evidences, halts with an output of either "true" or "false". Following this analogy, the Liar paradox would be a non-halting automaton.

Finally, I am aware that similar (identical?) points have been made by various philosophers, notably Kripke's theory of "groundedness", and this is part of the reason why I kept this essay short — it is an archive of rough ideas that I had before I seriously engage with related literature.

\* All em-dashes in this essay are human-produced.

**To read:**

- Herzberger, H., ‘Paradoxes of grounding in semantics’, Journal of Philosophy 68 (1970), 145.

- Kripke, S., ‘Outline of a theory of truth’, Journal of Philosophy 72 (1975), 690.

- Yablo, S. Grounding, dependence, and paradox. J Philos Logic 11, 117–137 (1982).