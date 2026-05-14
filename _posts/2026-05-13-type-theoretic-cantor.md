---
layout: post
title: "유형론적 대각선 논법"
date: 2026-05-13
tags: ["수학", "유형론", "집합론"]
related:
---

## 전사성의 유형론적 정의

> **정의.** 사상 $f: A \to X$에 대해 다음과 같이 정의한다.
>
> $$
> \text{is-surj}(f) := \prod_{x: X} \| \mathrm{fib}_f(x) \|
> $$

위의 정의는 "임의의 공역의 원소는 공집합이 아닌 역사상<sub>fiber</sub>을 가진다"를 표현한 것이다. 이와 동치인 정의는 "공역이 치역과 같다"이다. 후자의 정의를 유형론적으로 옮기기 위해서 다음과 같이 정의한다.

> **정의.** 다음의 가환 도식에서 $\iota$가 임베딩이고, 가환성이 호모토피 $H: f \sim \iota q$에 의해 목격된다고 하자.
>
> <img src="/public/image-inclusion.png" style="width: 230px; margin: 1em auto; mix-blend-mode: multiply;">
>
> 다음이 만족될 경우 $\iota$가 **치역 임베딩의 보편 성질**을 만족한다고 한다: 임의의 임베딩 $m: C \to X$에 대해, 전치 합성
>
> $$
> - \circ (q, H): \hom_X(\iota, m) \to \hom_X(f, m)
> $$
>
> 이 동치 관계<sub>equivalence</sub>이다.

위의 정의는 치역 임베딩의 보편 성질이 정말로 맞다. 즉, 다음이 성립한다.

> **정리.** 사상 $f: A \to X$에 대해 다음이 성립한다.
>
> - 다음은 치역 임베딩의 보편 성질을 만족한다.
>
> $$
> \begin{align}
> &\operatorname{im} f := \sum_{x: X} \| \mathrm{fib}_f(x) \| \\
> &q_f : A \to \operatorname{im} f; &&a \mapsto (f(a), |(a, \mathrm{refl}_{f(a)})) \\
> &\iota_f : \operatorname{im} f \to X; &&\mathrm{pr}_1
> \end{align}
> $$
> 
> - 치역 임베딩의 보편 성질을 만족하는 임베딩은 유일하다. 즉, 두 임베딩 $i: B \to X$와 $i': B' \to X$가 보편 성질을 만족한다면, 다음의 가환 도식을 만족하는 동치 관계 $e: B \simeq B'$의 유형은 수축 가능하다<sub>contractible</sub>.
>
> <img src="/public/uniqueness-of-image.png" style="width: 230px; margin: 1em auto; mix-blend-mode: multiply;">

유형론적으로 치역을 정의했으므로, 전사성의 두 번째 정의를 제시할 수 있다.

> **정리.** 다음의 가환 도식에서 $\iota: B \to X$가 임베딩이라고 하자. $q$가 전사일 필요충분조건은 $\iota$가 치역 임베딩의 보편 성질을 만족하는 것이다.
>
> <img src="/public/image-inclusion.png" style="width: 230px; margin: 1em auto; mix-blend-mode: multiply;">

## 유형론적 대각선 논법

> **정의.** 유형 $X$에 대해, 다음과 같이 정의한다.
> 
> $$
> \mathcal{P}(X) := X \to \mathsf{Prop}
> $$

즉, $X$의 멱집합은 $X$에 대한 명제들의 모임<sub>family of propositions over $X$</sub>이다. 이는 가령 자연수의 부분집합인 짝수 집합이 "짝수임"이라는 자연수에 대한 명제와 대응하는 것으로 이해할 수 있다. 한편, $X$의 멱집합을 $X \to 2$로 정의하지 않는 이유는 이 경우 $X$의 멱집합이 *결정 가능한* 명제로 한정되기 때문이다.

> **칸토어 정리.** $f: X \to \mathcal{P}(X)$라면 $f$는 전사가 아니다.

**증명.** $X$에 대한 다음의 명제 $Q : X \to \mathsf{Prop}$를 정의하자.

$$
Q := \lambda x. \lnot f(x, x)
$$

$f$가 전사라면 $g: \prod_{P: X \to \mathsf{Prop}} \\| \mathrm{fib}_f(P) \\|$가 존재한다. 따라서 $g(Q) : \\| \mathrm{fib}_f(Q) \\|$이다.

다음과 같이 $\mathrm{fib}_f(Q) \to \varnothing$을 정의하자.

$$
(x, p) \mapsto \mathrm{tr}(f(x, x), p)(f(x, x))
$$

명제적 절단<sub>propositional truncation</sub>의 정의로부터, 위의 사상은 $\\| \mathrm{fib}_f(Q) \\| \to \varnothing$을 유도한다. 따라서 $g(Q) \to \varnothing$이다. 이는 모순이므로 $f$는 전사가 아니다. ■