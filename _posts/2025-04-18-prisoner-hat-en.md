---
layout: post
title: "Infinite Prisoner Hat Problem"
date: 2025-04-18
tags: ["Mathematics", "Logic"]
lang: en
related:
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

You have likely encountered puzzles where prisoners attempt to guess the colour of their own hats. Consider the following example:

> Three prisoners A, B, and C stand in a line. A guard selects three hats from two black hats and three white hats, places them on each prisoner, and announces that if any one of them correctly guesses their hat colour, all will be freed, but if they guess incorrectly, all will be executed. Each prisoner can see the hat colours of those in front of them, but cannot see their own hat colour or those of prisoners behind them. After a long silence, one prisoner correctly identifies their hat colour. Which prisoner solved the problem?
>
> <img src="/public/hat-1.png" style="max-height: 180px; margin: 0 auto; mix-blend-mode: multiply;">

<div onclick="toggleAnswer(1)" style="cursor: pointer; font-weight: bold; display: inline-block; margin-bottom: 1em;">
<u>View Answer</u>
</div>

<div id="answer1" class="answer" style="padding-bottom: 1em;">
<p><strong>C provides the correct answer.</strong></p>
<p>If both B and C wore black hats, A would have correctly guessed that their hat was white. However, since a "long silence" ensued, A could not determine their hat colour, indicating that the hat colours of B and C represent one of the cases: (white, black), (black, white), or (white, white).</p>
<p>Considering this information, if C's hat were black, B would have correctly guessed that their hat was white. The fact that a "long silence" continued indicates that B also could not determine their hat colour, therefore C's hat must be white.</p>
</div>

A more challenging problem follows:

> One hundred prisoners stand in a line. A guard randomly places either a black or white hat on each prisoner, then instructs them to guess their hat colour in order, starting from prisoner 1. Those who guess correctly are freed, while those who guess incorrectly are executed. The prisoners may discuss strategy beforehand, but after the hats are placed, all communication and actions are forbidden except stating their answer. What is the maximum number of prisoners whose survival can be guaranteed with certainty?
>
> <img src="/public/hat-2.png" style="max-height: 180px; margin: 0 auto; mix-blend-mode: multiply;">

<div onclick="toggleAnswer(8)" style="cursor: pointer; font-weight: bold; display: inline-block; margin-bottom: 1em;">
<u>View Hint</u>
</div>

<div id="answer8" class="answer" style="padding-bottom: 1em;">
<p>The survival of 99 prisoners, excluding the first, can be guaranteed.</p>
</div>

<div></div>

<div onclick="toggleAnswer(2)" style="cursor: pointer; font-weight: bold; display: inline-block; margin-bottom: 1em;">
<u>View Answer</u>
</div>

<div id="answer2" class="answer" style="padding-bottom: 1em;">
<p><strong>The survival of 99 prisoners, excluding the first, can be guaranteed.</strong></p>
<p>The first prisoner can observe the hat colours of the remaining 99 prisoners. If the number of black hats amongst them is even, they guess their own hat is black; if odd, they guess white. The second prisoner can then compare the information conveyed by the first prisoner with the parity of black hats amongst those in front of them to correctly determine their own hat colour. Similarly, the third prisoner can use the information from the first prisoner and the fact that the second prisoner correctly identified their hat colour to determine their own, and in this manner, all 99 prisoners can be freed.</p>
</div>

Let us now make the problem more formidable:

> **Infinitely many prisoners stand in a line.** A guard randomly places either a black or white hat on each prisoner, then instructs them to guess their hat colour in order, starting from prisoner 1. Those who guess correctly are freed, while those who guess incorrectly are executed. The prisoners may discuss strategy beforehand, but after the hats are placed, all communication and actions are forbidden except stating their answer. What strategy minimises the number of prisoners who die? **We assume that all prisoners possess infinite computational power and are mathematically omniscient.** That is, when $f$ is a mathematically well-defined function, prisoners can always compute the value of $f$, and when discussing strategy beforehand, they may agree to employ $f$.
>
> <img src="/public/hat-3.png" style="max-height: 180px; margin: 0 auto; mix-blend-mode: multiply;">

<div onclick="toggleAnswer(3)" style="cursor: pointer; font-weight: bold; display: inline-block; margin-bottom: 1em;">
<u>View Hint 1</u>
</div>

<div id="answer3" class="answer" style="padding-bottom: 1em;">
<p>The survival of all prisoners except the first can be guaranteed.</p>
</div>

<div></div>

<div onclick="toggleAnswer(4)" style="cursor: pointer; font-weight: bold; display: inline-block; margin-bottom: 1em;">
<u>View Hint 2</u>
</div>

<div id="answer4" class="answer" style="padding-bottom: 1em;">
<p>The axiom of choice is employed.</p>
</div>

<div></div>

<div onclick="toggleAnswer(5)" style="cursor: pointer; font-weight: bold; display: inline-block; margin-bottom: 1em;">
<u>View Answer</u>
</div>

<div id="answer5" class="answer" style="padding-bottom: 1em;">

<p>By representing black hats as 0 and white hats as 1, the prisoners' hat arrangement can be expressed as an infinite sequence such as 101011... When a decimal point is placed at the beginning and read in binary, the prisoners' hat arrangement corresponds bijectively to a real number between 0 and 1 inclusive.</p>

<p>For real numbers $a, b \in [0, 1]$, we define $a \sim b$ when their binary expansions differ in finitely many digits. For example:</p>

$$
0.11111\dots \sim 0.01111\dots, \; 0.10101\dots \not\sim 0.01010\dots
$$

<p>It can be readily shown that $\sim$ is an equivalence relation. Therefore, we may form the quotient $[0, 1]/\sim$. By the axiom of choice, there exists a choice function $\iota$ for $[0, 1]/\sim$. Since we have assumed that the prisoners are mathematically omniscient, they can agree beforehand on which choice function $\iota$ to employ.</p>

<p>When the hat-guessing begins, the $n$-th prisoner can observe all hat colours except for $n$ hats. That is, when the real number corresponding to the prisoners' hat arrangement is $r$, the $n$-th prisoner knows all digits except for $n$ digits after the decimal point of $r$. Thus, they know which equivalence class of $[0, 1]/\sim$ contains $r$, and when the equivalence class containing $r$ is denoted $[r]$, they can compute $\iota([r])$.</p>

<p>The following strategy is now employed: By the definition of $\sim$, $r$ and $\iota([r])$ differ in only finitely many digits. The first prisoner guesses their hat colour as black if the hat arrangement they observe differs from the hat arrangement corresponding to $\iota([r])$ by an even number of positions, and white if they differ by an odd number. The remaining prisoners can then determine their hat colours in the same manner as in the 100-prisoner problem.</p>

<p>Thus, the axiom of choice ensures that when taking $N \to \infty$ in the $N$-prisoner problem, the conclusion that all prisoners except the first can survive remains valid.</p>

</div>

while the above puzzle is remarkably intriguing, the following puzzle is even more extraordinary:

> Infinitely many prisoners stand in a line. A guard randomly places either a black or white hat on each prisoner, then instructs them to guess their hat colour in order, starting from prisoner 1. Those who guess correctly are freed, while those who guess incorrectly are executed. The prisoners may discuss strategy beforehand, but after the hats are placed, all communication and actions are forbidden except stating their answer. Furthermore, **the moment the hats are placed, the prisoners completely lose their hearing and cannot exchange any information whatsoever.** Is there a strategy that ensures only finitely many prisoners die? (Similarly, prisoners possess infinite computational power and are mathematically omniscient.)
>
> <img src="/public/hat-4.png" style="max-height: 180px; margin: 0 auto; mix-blend-mode: multiply;">

<div onclick="toggleAnswer(6)" style="cursor: pointer; font-weight: bold; display: inline-block; margin-bottom: 1em;">
<u>View Answer</u>
</div>

<div id="answer6" class="answer" style="padding-bottom: 1em;">

<p>As in the previous problem, let $\iota$ be a choice function for $[0, 1]/\sim$. The following strategy is employed: The $n$-th prisoner guesses their hat colour as the colour corresponding to the $n$-th digit of $\iota([r])$. By the definition of $\sim$, all prisoners except finitely many will answer correctly.</p>

</div>

This puzzle is particularly extraordinary because the hearing loss condition renders the hat-guessing events of any two distinct prisoners independent, suggesting that each prisoner should have the same probability $p$ of guessing correctly. In this case, the probability that all $N$ prisoners guess correctly would be $p^N$, which converges to 0 as $N \to \infty$. However, in reality, infinitely many prisoners guess correctly.

The root of this paradox lies in the fact that the probability of an arbitrary prisoner guessing correctly is **undefined**. Upon careful consideration, the event of an arbitrary prisoner guessing correctly is equivalent to the event that a given real number $r \in [0, 1]$ belongs to a [Vitali set](https://dimenerno.github.io/2025/02/24/algebra-measure/). Since Vitali sets are non-measurable, no probability can be defined for this event.
