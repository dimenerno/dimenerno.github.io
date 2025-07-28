---
layout: post
title: "초필터를 사용한 스톤-체흐 콤팩트화"
date: 2026-07-22
tags: ["수학", "위상수학"]
related:
  - "스톤-체흐 콤팩트화"
---

[이전 글](https://dimenerno.github.io/2025/07/10/stone-cech)에서 $X$의 스톤-체흐 콤팩트화 $\beta X$를, $[0, 1]^C$에서 $X$의 폐포를 취한 것으로 구성했었다. 그런데 $X$가 이산 공간<sub>discrete space</sub>인 경우 초필터<sub>ultrafilter</sub>를 사용하여 $\beta X$를 구성할 수도 있다. 이에 앞서, 몇 가지 개념을 복습하자.

> **정의.** $X$가 **이산 공간**이라는 것은, $X$의 모든 부분집합이 열린집합이라는 것이다.

**Remark.** 이는 $X$의 홑원소 집합들이 열린집합임과 동치이다.

> **정의.** $\mathcal{F}$가 집합 $S$의 **필터**라는 것은, $\mathcal{F}$가 다음을 만족하는 $S$의 부분집합족이라는 것이다.
>
> 1. $S \in \mathcal{F}$
> 2. $\varnothing \notin \mathcal{F}$
> 3. $A \in \mathcal{F}, A \subset B \implies B \mathcal{F}$
> 4. $A, B \in \mathcal{F} \implies A \cap B \in \mathcal{F}$

> **정의.** $\mathcal{F}$가 집합 $S$의 [**초필터**](https://dimenerno.github.io/2025/01/22/hypernaturals)라는 것은, $\mathcal{F}$가 필터이며 추가로 다음을 만족한다는 것이다.
>
> $$
> \forall A \subset S : A \in \mathcal{F} \lor S \setminus A \in \mathcal{F}
> $$

초필
