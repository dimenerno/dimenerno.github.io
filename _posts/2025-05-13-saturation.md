---
layout: post
title: "포화된 구조와 실수체의 완전성"
date: 2025-05-08
tags: ["수학", "집합론"]
related:
  - "η 집합"
---

$\mathfrak{A}$가 $\mathcal{L}$-구조라고 하자. $A$는 $\mathfrak{A}$의 정의역이다.

> **정의.** $X \subseteq A$가 **정의가능<sub>definable</sub>**하다는 것은, 어떤 $\mathcal{L}$-논리식 $\phi$와 자유변수 할당 $g$가 존재하여 다음이 성립한다는 것이다.
>
> $$X = \{ x \in A : \mathfrak{A} \vDash \phi[g^0_x] \}$$
>
> $\phi$가 $v\_0$ 이외의 자유변수를 가지지 않을 때, $X$는 $\emptyset$-정의가능하다고 한다.

_Remark._ 정의가능성은 [괴델의 구성가능성](https://dimenerno.github.io/2024/12/11/VL-axiom/)과 같은 의미이다.

예를 들어 $(\mathbb{R}, <)$에서 $(e, 2\pi)$는 다음의 $\phi$와 $g$에 의해 정의가능하다.

- $\phi \equiv (v\_1 < v\_0 \land v\_0 < v\_2)$
- $g: v\_1 \mapsto e, v\_2 \mapsto 2\pi$

그러나 $(e, 2\pi)$는 $\emptyset$-정의가능하지 않다. $(\mathbb{R}, <)$에서 $e$와 $2\pi$를 특정할 방법이 없기 때문이다.

한편 표준 산술 모형 $(\mathbb{N}, 0, +, S)$에서 짝수의 집합 $E$는 다음의 $\phi$에 의해 $\emptyset$-정의가능하다.

- $\phi \equiv \exists y (x = y + y)$

모든 유한집합은 정의가능하다. 예를 들어 $A = \lbrace a_1, a_2, a_3 \rbrace $는 다음과 같이 정의가능하다.

- $\phi \equiv (v\_0 = v\_1) \lor (v\_0 = v\_2) \lor (v\_0 = v\_3)$
- $g: v\_1 \mapsto a\_1, v\_2 \mapsto a\_2, v\_3 \mapsto a\_3$

같은 이유로 모든 쌍대 유한집합<sub>cofinite set</sub> 또한 정의가능하다.

[저번 글](https://dimenerno.github.io/2025/05/08/resiliency/)에서 탄력적<sub>resilient</sub> 집합족에 대해 알아 보았다. 이제 다음을 정의하자.

> **정의.** $\kappa$가 비가산 기수라고 하자. $\mathfrak{A}$가 **$\kappa$-포화<sub>$\kappa$-saturated</sub>**되었다는 것은, $\kappa$개보다 적은 $A$의 정의가능한 부분집합들의 모임이 언제나 탄력적이라는 것이다. 특히, $\mathfrak{A}$가 $\|A\|$-포화되었을 때, $\mathfrak{A}$는 **포화<sub>saturated</sub>**되었다고 한다.

따라서 $\aleph\_1$-포화된 구조 $\mathfrak{A}$는, 가산 개의 $\mathfrak{A}$의 정의가능한 부분집합들의 모임이 유한 교집합 속성을 만족할 떄, 전체 교집합 또한 공집합이 아닌 구조이다. 한편 구조 $\mathfrak{A}$가 $\|A\|^+$-포화되는 것은 불가능하다. 다음의 집합족이 유한 교집합 속성을 만족하지만 교집합은 공집합이기 때문이다.

$$
\Big\{ A - \{ a \} : a \in A \Big\}
$$

포화된 구조의 중요성은 다음 정리에 있다.

> **정리.** 초등적으로 동등하며 기수가 같은 두 포화된 $\mathcal{L}$-구조는 동형이다.

**증명.** 생략. 기초적인 아이디어는 [저번 글](https://dimenerno.github.io/2025/05/08/resiliency/)에서 본 칸토어의 앞뒤 논법을 일반화한 것이다.

그러나 유감스럽게도 포화된 구조는 구성하기가 까다롭다. 일례로 비가산 기수 $\kappa$와, $\|T\| \leq \kappa$인 건전한 이론 $T$에 대해, $T$는 $\kappa^+$-포화된, 기수 $2^\kappa$의 모델을 가진다. 따라서 일반화된 연속체 가설을 인정할 시 해당 모델은 포화되어 있다. 그러나 ZFC만으로는 포화된 구조가 존재함을 증명할 수 없음이 알려져 있다.

따라서 다음의 더 약한 조건을 가진 개념을 도입한다.

> **정의.** $\mathfrak{A}$가 **특별<sub>special</sub>**하다는 것은, $\mathfrak{A}$가 방향 유도계 $\lbrace  \mathfrak{A}\_\kappa \rbrace \_{\kappa < \|A\|}$의 쌍대 극한이라는 것이다. 여기서 $\kappa$는 무한 기수이며, 각 $\mathfrak{A}\_\kappa$는 $\kappa^+$-포화되어 있다.

모든 포화된 구조는 특별하다. 각 $\mathfrak{A}\_\kappa$를 자기 자신으로 두면 되기 때문이다. 그러나 모든 특별한 구조가 포화된 것은 아니다. 따라서 특별함은 포화보다 엄격히 약한 조건이다. 그럼에도 특별한 구조는 동형성 성질을 만족한다.

> **정리.** 초등적으로 동등하며 기수가 같은 두 특별한 $\mathcal{L}$-구조는 동형이다.

더구나 특별한 구조는 포화된 구조보다 더 구성하기 쉽다. 특히, 다음 뢰벤하임-스콜렘 정리의 특수화가 알려져 있다.

> **특별 뢰벤하임-스콜렘 정리.** $T$가 언어 $\mathcal{L}$의 이론이라고 하자.
>
> 1. $T$가 무한 모델을 가진다면, $T$는 임의의 기수보다 큰 기수의 특별한 모델을 가진다.
> 2. $T$가 무한 모델을 가지고, $\mathcal{L}$이 가산이라면, $T$는 기수가 $\beth\_\omega$인 특별한 모델을 가진다.

이 정리의 응용으로서, 다음의 유명한 결과를 보자.

> **정의.** **실수 닫힌 순서체 이론** 또는 **RCOF**란 다음의 공리들로 이루어진 언어 $(0, 1, +, \cdot, <)$의 이론이다. ($x^n$은 $x \underbrace{\cdot \;\cdots\; \cdot}\_{n} x$를 줄인 표기법)
>
> 1. 순서체 공리
>    - $\forall a, b, c : (a < b) \rightarrow (a + c < b + c)$
>    - $\forall a, b : (a > 0 \land b > 0) \rightarrow ab > 0$
>    - 체 공리
> 2. 제곱근 공리: $\forall a > 0 \; \exists x : x^2 = a$
> 3. 닫힘 공리꼴:
>    - $\forall a\_2, a\_1, a\_0 \; \exists x :x^3 + a\_2x^2 + a\_1x + a\_0 = 0$
>    - $\forall a\_4, a\_3, a\_2, a\_1, a\_0\; \exists x : x^5 + a\_4x^4 + \cdots + a\_0 = 0$
>    - ...
>
> **실수 닫힌체 이론** 또는 **RCF**란 다음의 공리들로 이루어진 언어 $(0, 1, +, \cdot)$의 이론이다.
>
> 1. 체 공리
> 2. 형식적 실수 공리: $\forall x : x^2 \neq -1$
> 3. 제곱근 공리: $\forall a \; \exists x : x^2 = a \lor x^2 = -a$
> 4. 닫힘 공리꼴

> **타르스키 정리.** RCOF와 RCF는 완전하다.

**증명.** 핵심은 다음의 보조정리이다.

> **에르되시-길만-헨릭슨<sub>Erdös-Gillman-Henriksen</sub> 보조정리.** 기수가 같은 두 특별한 실수 닫힌체는 동형이다.

보조정리를 인정하고 타르스키 정리를 증명해 보자. 만약 RCF가 완전하지 않다면, RCF의 확장 $T\_1$과 $T\_2$가 존재하여 $T\_1$의 모델과 $T\_2$의 모델은 초등적으로 동등하지 않다. RCF의 모든 모델은 무한 모델이므로 (why?) 특별 뢰벤하임-스콜렘 정리에 의해 $T\_1$과 $T\_2$는 각각 기수가 $\beth\_\omega$인 모델 $\mathfrak{A}\_1, \mathfrak{A}\_2$를 가진다. 그런데 보조정리에 의해 $\mathfrak{A}\_1 \cong \mathfrak{A}\_2$인데, 이는 $\mathfrak{A}\_1 \not\equiv \mathfrak{A}\_2$와 모순이다. ■
