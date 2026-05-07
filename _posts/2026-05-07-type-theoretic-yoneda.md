---
layout: post
title: "유형론적 요네다 보조정리"
date: 2026-05-07
tags: ["수학", "유형론", "범주론"]
related:
---

> **요네다 보조정리.** $\mathcal{A}$가 범주이고, $A \in \mathcal{A}$이며, $F: \mathcal{A}^\mathrm{op} \to \mathbf{Set}$이라고 하자. 다음의 동형 관계가 $A$와 $F$에서 자연스럽다.
>
> $$
> [\mathrm{hom}_\mathcal{A}(-, A), F] \cong F(A)
> $$

이는 범주론의 잘 알려진 정리이다. 그런데 흥미롭게도, 요네다 보조정리와 비슷한 형태의 정리를 유형론에서 발견할 수 있다.

> **유형론적 요네다 보조정리.** $A$가 유형이고, $B$가 $A$에 의존하는 유형이라고 하자. 각 $a : A$에 대해 다음이 성립한다.
>
> $$
> \prod_{x: A}((x = a) \to B(x)) \simeq B(a)
> $$

둘의 유사성을 조금 더 부각하기 위해 기호를 바꿔 적으면 다음과 같다.

> $\mathcal{A}$가 유형이고, $F$가 $\mathcal{A}$에 의존하는 유형이라고 하자. 각 $A : \mathcal{A}$에 대해 다음이 성립한다.
>
> $$
> \prod_{X: \mathcal{A}}((X = A) \to F(X)) \simeq F(A)
> $$

유형론적 요네다 보조정리는 다음 정리의 특수한 사례이다.

> **정리.** 각 $a: A$에 대해 다음 사상은 동형이다.
>
> $$
> \mathrm{ev} : \prod_{x: A}\prod_{p: a = x} B(x, p) \to B(a, \mathrm{refl}_a); \quad  h \mapsto h(a, \mathrm{refl}_a)
> $$

**증명.** 동일성 유형의 귀납법에 따라 다음 사상이 존재하며, $\mathrm{ev}$의 섹션이다.

$$
\mathrm{ind} : B(a, \mathrm{refl}_a) \to \prod_{x: A}\prod_{p: a = x} B(x, p)
$$

따라서 $\mathrm{ind}$가 $\mathrm{ev}$의 리트랙트라는 것을 보이면 충분하다. 즉, 각 $h: \prod\_{x: A}\prod\_{p: a = x} B(x, p)$에 대해 다음이 성립함을 보이면 충분하다.

$$
\mathrm{ind}(h(a, \mathrm{refl}_a)) = h
$$

함수 외연성 공리에 따라, 다음을 보이면 충분하다.

$$
\prod_{x: A}\prod_{p: a = x} \mathrm{ind}(h(a, \mathrm{refl}_a), x, p) = h(x, p)
$$

동일성 유형의 귀납법에 따라, 다음을 보이면 충분하다.

$$
\mathrm{ind}(h(a, \mathrm{refl}_a), a, \mathrm{refl}_a) = h(a, \mathrm{refl}_a)
$$

이는 $\mathrm{ind}$의 정의로부터 판단적으로 따라 나온다. ■