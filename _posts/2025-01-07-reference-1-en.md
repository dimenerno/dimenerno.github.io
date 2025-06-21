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

In "That is Venus" and "The last Queen of England is Elizabeth II", the expressions 'that', 'Venus', 'the last Queen of England', and 'Elizabeth II' are expressions that **refer** to exactly one object in this world by specifying it. However, the specific principles by which these expressions come to refer to particular objects are filled with philosophical puzzles.

This article addresses six questions:

1. **The subject of reference:** Is it the speaker or the word?
2. **The meaning of referring expressions:** Is it a description, the referent, or something else?
3. **The mechanism of reference:** How do referring expressions become connected to specific persons/objects?
4. **The scope of theories of reference:** Do all referring expressions share a common mechanism?
5. **The privacy of reference:** To what extent does reference depend on the speaker's private features (e.g., psychological states)?
6. **The significance of theories of reference:** Does the referential relation actually exist? Is it philosophically significant?

This article examines four theories: **descriptivism, causal theory, character model, and intentionalism**, and briefly discusses **referential scepticism**.

|          | Descriptivism                                                              | Causal Theory                                                                   | Character Model                                                       | Intentionalism                                                |
|----------|----------------------------------------------------------------------------|---------------------------------------------------------------------------------|-----------------------------------------------------------------------|---------------------------------------------------------------|
| Subject  | Speaker                                                                    | Referring expression                                                            | Pluralistic                                                           | Speaker                                                       |
| Meaning  | Descriptive content                                                        | Referent                                                                        | Character and content                                                 |                                                               |
| Mechanism| Words are associated with specific descriptive content and refer to objects that satisfy it. | Words are associated with causal chains that trace back to the referent's dubbing ceremony. | Words are associated with conventional referential rules (character) and refer to objects (content). | Words are associated with intentions to refer to specific objects. |
| Scope    | Broad                                                                      | Narrow (names)                                                                  | Moderate                                                              | Broad                                                         |
| Privacy  | Strong privacy                                                             | Weak privacy                                                                    | Moderate privacy                                                      | Strong~moderate privacy                                       |
| Scholars | (Frege), Russell, Strawson, Reichenbach                                   | Mill, Kripke, Kaplan                                                           | Kaplan                                                                | Kaplan, Grice, Reimer                                        |
| Strengths| Explains Frege's puzzle                                                   | Solves Kripke's arguments                                                       | Elucidates the principles of pure indexicals                         | Elucidates the principles of impure indexicals               |
| Weaknesses| Kripke's modal and semantic arguments                                     | Problems with names having multiple bearers                                     | Speaker-hearer dilemma arises with impure indexicals                 | The Humpty Dumpty problem                                     |

## 2. Proper Names

### 2.1. Descriptivist Theory of Proper Names

> **Descriptivist Thesis.**
>
> 1. A proper name $n$ is associated with specific **descriptive content** $P$.
> 2. $n$ is associated with $P$ because the **speaker** mentally associates $n$ with $P$.
> 3. When there exists a **unique** object $c$ that satisfies $P$, $n$ refers to $c$.
> 4. The **meaning** of $n$ and the referent of $n$ are distinct, with the former determining the latter.
> 5. The meaning of $n$ is $P$.

For example, a speaker who associates the name 'Venus' with the descriptive content "the second planet of the solar system" refers to Venus using 'Venus' because there is a unique object satisfying that descriptive content, and that object is Venus.

*Remark.*

1. Whilst it is standard to understand descriptive content as descriptions, scholars such as Searle argue that descriptive content need not be linguistically specifiable but may also be based on perception.

2. Descriptive content has the characteristic that the object satisfying it remains invariant. As we shall see, this is why descriptivism fails to adequately explain indexicals.

3. The meaning of $n$ is [de dicto](https://velog.io/@dimenerno/De-Re%EC%97%90-%EB%8C%80%ED%95%9C-%EC%BD%B0%EC%9D%B8%EC%9D%98-%EA%B3%B5%EA%B2%A9). As we shall see, this is why descriptivism faces modal objections.

4. Theses 1, 3, 4, and 5 provide a **semantics** for names—that is, a theory explaining what the codomain of the meaning function $M$ having names as its domain is—whilst thesis 2 provides a **metasemantics** for names—that is, a theory explaining how the mapping $n \mapsto M(n)$ is defined for each name $n$.

#### Argument 1. Cases of Names with Multiple Bearers

Consider a case where A and B know two people named 'Boris Johnson'. One is a colleague of A and B, and the other is the former Prime Minister of Britain. When A says to B, "Boris Johnson has made a grave mistake," B asks, "Which Boris Johnson do you mean?" To this, A replies, "The former Prime Minister of Britain."

In the above case, it appears that (1) the speaker A has the authority to determine what 'Boris Johnson' refers to, and this determination is made (2) via the descriptive content that the speaker has in mind.

#### Argument 2. Frege's Puzzle

Consider the following examples:

> 1. The morning star is the evening star.
> 2. Santa Claus lives at the North Pole.
> 3. Fred believes that Mark Twain was American but does not believe that Samuel Clemens was American.

Statement 1 is true but not a priori. Statement 2 is not nonsense. In case 3, Fred's belief is consistent.

If the meaning of a name were its referent, then 1 should be a priori according to the law of self-identity, 2 should be nonsense as it is a sentence lacking a referent (meaning), and in case 3, Fred's belief should be inconsistent since Mark Twain and Samuel Clemens have the same meaning. However, descriptivism provides adequate explanations for all three examples by distinguishing between the meaning and referent of names.

#### Objection 1. The Modal Argument

Even if I associate the description "the former British Prime Minister who implemented Brexit" with 'Boris Johnson', I can still assert the following sentence as true:

> 1\. Boris Johnson might not have implemented Brexit.

However, if the meaning of a name is equivalent to a description, then 1 is equivalent to 2.

> 2\. The following might have been the case: the former British Prime Minister who implemented Brexit did not implement Brexit.

But 2 is false. Therefore, the meaning of a name is not descriptive content.

*Remark.* Since the meaning of the name is descriptive content (dicto) rather than the object (re), the inference 1 → 2 is a [De Dicto substitution](https://velog.io/@dimenerno/De-Re%EC%97%90-%EB%8C%80%ED%95%9C-%EC%BD%B0%EC%9D%B8%EC%9D%98-%EA%B3%B5%EA%B2%A9). In the case of De Re substitution, 1 becomes 3.

> 3\. When the former British Prime Minister who implemented Brexit is $c$, the following might have been the case: $c$ did not implement Brexit.

Unlike 2, there is no problem in regarding 3 as true.

*Remark.* To deal with the modal argument, descriptivists can modify theses 3 and 4 and reject thesis 5.

3. When there exists a unique object $c$ that satisfies $P$ **in the actual world**, $n$ refers to $c$.

4. The meaning of $n$ is the referent of $n$, i.e., $c$. (That is, the meaning of $n$ is de re)

However, this modified descriptivism not only fails to adequately explain Frege's puzzle but also fails to adequately explain the following semantic argument, making it a theory with many limitations.

#### Objection 2. The Semantic Argument

The semantic argument is an argument that refutes a group of theories belonging to descriptivism, including the modified descriptivism just presented. The gist is that in many cases, the descriptive content $P$ that a speaker associates with a name $n$ fails to *uniquely* pick out a specific object in the world (i.e., the description is **insufficient**), and descriptive content is **unnecessary** for reference in the first place.

As a case showing that descriptive content is insufficient, there is the **Feynman-Gell-Mann thought experiment** presented by Kripke. The descriptive content that most people associate with the name 'Feynman' is something like "a famous American physicist". This description also applies to Gell-Mann. However, we seem to successfully refer to Feynman with the name 'Feynman'.

Furthermore, as a case showing that descriptive content is unnecessary, consider the **Gödel-Schmidt thought experiment** likewise presented by Kripke. Kripke assumes the following situation:

> In fact, the mathematician who first proved the incompleteness of arithmetic was not Gödel but an unknown mathematician named Schmidt. However, before publishing the proof, Schmidt died under mysterious circumstances, and his proof fell into Gödel's hands and was published under Gödel's name.

(Regarding this bizarre thought experiment, there is a rumour that it was Kripke's way of venting his jealousy towards Gödel, a logician greater than himself)

If (P1) the above assumption is true, (P2) descriptivism is correct, and (P3) the descriptive content that most people associate with the name 'Gödel' is "the mathematician who first proved the incompleteness of arithmetic", then (C) the object that most people refer to with the name 'Gödel' is Schmidt, not Gödel. However, this is counterintuitive. Therefore, descriptivism is not correct.

*Remark.* To overcome the semantic argument, descriptivists can take one of two approaches:

1. The descriptive content associated with a name can transcend information personally available to the speaker.

2. The descriptive content associated with a name can adopt "the person whom the person who transmitted this name to me intended to refer to with that name".

Strawson chooses approach 1. According to him, speakers can rely on others for the task of providing the descriptive content that should be associated with names. In this case, the meaning of 'Feynman' or 'Gödel' is the descriptive content that Feynman experts or Gödel experts associate with each name. However, Strawsonian theory has the limitation of being counterintuitive in that it makes the speaker's referential intention irrelevant to the actual reference.

Approach 2 is closely connected to causal theory. Let us examine this theory.

### 2.2. Millianism and Causal Theory of Proper Names

> **Millian Thesis.** The meaning of a proper name is its referent.

As the name suggests, this position traces back to John Stuart Mill. Millian theories imply that identity statements such as "The morning star is the evening star" are **a posteriori but necessarily true**.

*Remark.* Kripke also argues that there exist sentences that are **a priori but contingently true**, citing "The length of the standard metre is 1m" as an example.

The Millian thesis provides semantics for names. A representative metasemantics supplementing this is the causal theory.

> **Causal Theory**.
>
> 1. There is a **dubbing ceremony**, an event in which object $c$ is first called by name $n$.
> 2. Starting with those who participated in the dubbing ceremony, speakers who refer to $c$ with $n$ transmit this usage to other speakers through communication. Such transmission of usage forms a **causal chain** of the name.
> 3. The meaning (referent) of name $n$ is the object named in the dubbing ceremony that occurred at the starting point of $n$'s causal chain.

One subtle problem with causal theory is distinguishing which communicative transmissions substantially participate in the causal chain. For instance, if I called my arrogant cat 'Napoleon' to a work colleague, this communication does not substantially participate in the causal chain of the name 'Napoleon' (parasitic use of names). There are also cases where the referent of a name changes along the way, such as the **Madagascar case** (confused use of names). We omit discussion of this problem here.

### 2.3. The Problem of Names with Multiple Bearers

In cases of names with multiple bearers, such as the earlier 'Boris Johnson' example, the authority to determine reference seems to lie with the speaker. This fact poses no problem for classical descriptivism. However, this

앞선 ‘보리스 존슨‘의 사례와 같이 다수의 담지자가 있는 이름의 경우, 지시의 결정권은 화자에게 있는 듯하다. 이 사실은 고전적 기술주의의 경우 문제가 되지 않는다. 그러나 스트로슨주의와 인과 이론에게 이 문제는 골칫거리이다.

스트로슨주의의 경우 이름 $n$의 지시체는 전문가 집단에 의해 유일하게 결정되므로 최대 1개의 지시체만을 가질 수 있다. 그러나 다수의 담지자가 있는 이름이 분명 가능하므로, 스트로슨주의는 이름을 더 세분화해서 생각해야 한다. 즉, 문자적으로 동등하지만($\ulcorner n_1 \urcorner = \ulcorner n_2 \urcorner$) 의미론적으로 다른($n_1 \mapsto c_1, n_2 \mapsto c_2, c_1 \neq c_2$) 이름들이 가능하다고 보는 것이다. 그러나 이 경우, 화자가 $\ulcorner n_i \urcorner$를 발화할 때 $i$를 결정하는 원리가 무엇이냐는 문제가 생긴다. *해당 원리가 화자의 내면 기술구일 수는 없는데, $\ulcorner n_i \urcorner$을 사용하여 $c_1$ 또는 $c_2$를 지시할 수 있으나 $c_1$과 $c_2$를 구별해 내는 데 충분한 지시적 내용을 갖추지 못한 화자를 떠올릴 수 있기 때문이다.*

> 필자는 이탤릭체 내용을 받아들이지 못했다. 그런 경우가 정말로 있나?

밀주의에도 비슷한 문제가 발생한다. 이 문제를 극복하기 위해 캐플런은 이름을 **심리 현상**으로 간주한다. 즉, 이름 $n$은 문자적 내용 $\ulcorner n \urcorner$과, $\ulcorner n \urcorner$으로 $c$를 지시하려는 의도가 얽힌 심리 현상이며, 인과적 사슬을 통해 전달되는 것은 이 심리 현상이다. 이에 따르면 다수의 담지자를 가지는 이름은 $n_1 = (\ulcorner n \urcorner, c_1), n_2 = (\ulcorner n \urcorner, c_2)$과 같이 구별되는 이름이며, $n_1$과 $n_2$를 성공적으로 습득한 화자는 자신의 의도에 따라 $n_1$ 또는 $n_2$를 선택하여 사용할 수 있다.

캐플런과 구별되는 또 하나의 노선은 다수의 담지자 문제를 인과 이론과 지표사 이론의 혼합으로 해결하려는 시도이다. 이 노선은 르카나티, 펠처, 래인스버리 등에 의해 채택되었으며, 다음 글에서 살펴 볼 지표사 이론에 대한 이해를 요구한다.
