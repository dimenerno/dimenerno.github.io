---
layout: post
title: "Three Types of Self-referential Sentences"
date: 2026-10-01
tags: ["Logic"]
lang: en
related:
---

In this short essay I’ll classify the three types of self-referential sentences and employ this classification to sketch an explanation that sets apart paradoxical self-referential sentences (e.g. “This sentence is false”) from substantial self-referential sentences (e.g. “This sentence is not provable”). The three types are as follow:

1. **Physicallly self-referring:** The sentence is referred as a physical entity. Thus it can be predicated by, and only by, physical properties such as color, width, location, etc. 
2. **Syntactically self-referring:** The sentence is referred as a syntactic entity. Thus it can be predicated by, and only by, syntactic properties such as grammaticality, word count, provability, etc.
3. **Semantically self-referring:** The sentence is referred as a semantic entity. Thus it can be predicated by, and only by, semantic properties such as truth-falsity, meaningfulness, synonymity, etc.

Here are the examples for each type:

1. This sentence is shown in black.
2. This sentence has thirty five characters.
3. This sentence is true.

1 and 2 are true, while 3 lacks apparent truth-value. **The thesis of this essay is that only physically and syntactically self-referring sentences have truth-conditions, and thus are “substantial”.** Note that the Gödel sentence, the prime example of a “substantial” self-referential sentence, is syntactically self-referring, for provability is a formal notion.

To which type a self-referential sentence belongs can be inferred from the type of predicate used. This may be brought out even more clearly by disambiguiting the notion of sentence. Let us call sentences as physical / syntactic / semantic entities, **markings / strings / propositions**, respectively. We thus rewrite the above examples as follows:

<ol start="4">
    <li>This marking is shown in black.</li>
    <li>This string has thirty five characters.</li>
    <li>This proposition is true.</li>
</ol>


Note that 5 is false. This is expected, since ‘sentence’ and ‘string’ are syntactically different, hence the subject of 2 and 5 are syntactically distinct.

This classification may be made more elaborate by further considerations such as the type-token distinction (e.g. “This sentence is inside parentheses” is true if token-wise but false type-wise), but I will not be concerned with them here for simplicity.

The upshot of the classification is that semantically self-referring sentences lack truth value insofar as one operates with compositional semantics. To determine the truth-condition of 6, the truth-condition of its subject is required. Yet the subject is 6 and we end in a regress. Contrast this with an innocuous example:

<ol start="7">
    <li>Snow is white.</li>
    <li>The above proposition is true.</li>
</ol>

To determine the truth-condition of 8, the truth-condition of its subject is required. The subject is 7 and its truth-condition is given as snow being white. Since this condition holds, 7 is true and so is 8.

To summarize, physically and syntactically self-referring sentences are legitimate since the recursiveness of “this sentence” is effective only once — the depth of recursion is 1. This primary recursion returns a “dormant” version of the sentence with no further self-recursion. This contrasts with semantically self-referring sentences, in which the recursion is not well-founded.

I wanted to keep this essay as short as possible, so let me conclude with a brief sketch on a noteworthy point. The line between syntax and semantics is not always clear. Some forms of conventionalism seem to collapse this distinction in favor of syntax. In such pictures, a properly formed sentence is comparable to a formal automaton that receives relevant evidence and halts on either truth or falsity. Following this analogy, the Liar paradox would be a non-halting automaton.