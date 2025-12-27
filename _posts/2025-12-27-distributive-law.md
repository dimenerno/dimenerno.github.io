---
layout: post
title: "교환법칙, 분배법칙, 지수법칙의 범주론적 증명"
date: 2025-12-27
tags: ["수학", "범주론"]
related:
---

> **정리.**
>
> 1. 분배법칙: $(A + B) \times C = A \times C + B \times C$
> 2. 지수법칙: $(A \times B)^C = A^C \times B^C$

[이전 글](https://dimenerno.github.io/2025/04/02/box-v-product)에서 범주론적 합과 곱을 살펴 보았다. 합은 쌍극한의 일종이고, 곱은 극한의 일종이다. 이 관찰로부터, 분배법칙과 지수법칙을 다음 정리로 일반화할 수 있다.

> **정리.** 좌 어드조인트는 쌍극한<sub>colimit</sub>을, 우 어드조인트는 극한<sub>limit</sub>을 보존한다.

이 정리의 정확한 의미는 다음과 같다. $F: \mathcal{A} \to \mathcal{B}, G: \mathcal{B} \to \mathcal{A}$에 대해 $F \dashv G$라고 하자. $G$가 **극한을 보존<sub>preserves limits</sub>**한다는 것은, 임의의 작은 범주<sub>small category</sub> $\mathbf{I}$와 함자 $D : \mathbf{I} \to \mathcal{B}$에 대해 다음이 성립한다는 것이다.

> $\big(B \xrightarrow{q\_I} D(I)\big)\_{I \in \mathbf{I}}$가 $\mathcal{B}$에서 극한 고깔<sub>limit cone</sub>일 때, $\big(G(B) \xrightarrow{G(q\_I)} GD(I)\big)\_{I \in \mathbf{I}}$가 $\mathcal{A}$에서 극한 고깔이다.

이로부터, $G$가 극한을 보존할 때 다음이 성립함을 알 수 있다.

$$
G\left(\lim_{\leftarrow \mathbf{I}} D\right) \cong \lim_{\leftarrow \mathbf{I}} G \circ D
$$

쌍극한의 경우에는 고깔을 쌍고깔로 바꿔 정의한다.

한편, 임의의 $X, Y, Z \in \mathbf{Set}$에 대해 $\hom(X \times Y, Z) \cong \hom(X, Z^Y)$가 성립한다 (이는 함수형 프로그래밍에서 자주 등장하는 커링<sub>Currying</sub> 기법이다). 이로부터 다음의 어드조인트 관계가 따라 나온다.

$$
(-) \times Y \dashv (-)^Y
$$

따라서 함자 $(-) \times Y$는 쌍극한을 보존하고, $(-)^Y$는 극한을 보존한다. 이로부터 일반화된 분배법칙과 지수법칙을 얻을 수 있다.

> **정리.** 집합 $A, B, Y$에 대해, $A, B$가 서로소라면 다음이 성립한다.
>
> 1. $(A + B) \times Y \cong (A \times Y) + (B \times Y)$
> 2. $(A \times B)^Y \cong A^Y \times B^Y$

여기서 $+$는 서로소 집합의 합집합으로, $\sqcup$과 의미가 같으나 분배법칙과의 유사성을 강조하기 위해 사용되었다. 좌변이 $G\left(\lim\_{\leftarrow \mathbf{I}} D\right)$에, 우변이 $\lim\_{\leftarrow \mathbf{I}} G \circ D$에 대응된다. 위 정리에 집합의 크기 연산을 취하면 자연수에서의 분배법칙과 지수법칙을 얻는다.

참고로 극한에 대한 다음 성질 또한 알려져 있다 ($\bullet, -$ 표기법은 [이 글](https://dimenerno.github.io/2025/03/21/yoneda)을 참고)

> **정리.** $\mathbf{I}, \mathbf{J}$가 작은 범주이고, $\mathcal{S}$가 $\mathbf{I}, \mathbf{J}$ 모양의 극한들을 가지는 국소적으로 작은 범주라고 하자. $D: \mathbf{I} \times \mathbf{J} \to \mathcal{S}$에 대해, 다음이 성립한다.
>
> $$
> \lim_{\leftarrow \mathbf{J}}\lim_{\leftarrow \mathbf{I}} D(\bullet, -) \cong \lim_{\leftarrow \mathbf{I} \times \mathbf{J}} D \cong \lim_{\leftarrow \mathbf{I}}\lim_{\leftarrow \mathbf{J}} D(-, \bullet)
> $$

즉, 극한끼리는 교환법칙을 만족한다. 이것은 덧셈의 교환법칙과 곱셈의 교환법칙을 일반화한 것으로 생각할 수 있다.

