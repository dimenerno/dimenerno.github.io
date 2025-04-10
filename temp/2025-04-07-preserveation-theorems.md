---
layout: post
title: "모델론에서의 보존 정리"
date: 2025-04-07
tags: ["수학", "논리학", "대수학"]
related:
---

군 $G$의 부분군 $H, K$에 대해 $H \cap K$는 언제나 군이지만 $H \cup K$는 일반적으로 군이 아니다. 예를 들어 $\mathbb{Z}$의 부분군 $2\mathbb{Z}$와 $3\mathbb{Z}$에 대해, $2\mathbb{Z} \cap 3\mathbb{Z} = 6\mathbb{Z}$는 군이지만 $2\mathbb{Z} \cup 3\mathbb{Z}$는 군이 아니다<small>(일례로 2 + 3 = 5이므로 덧셈에 대해 닫혀있지 않다)</small>. 따라서 군의 구조는 교집합에 대해 보존되지만 합집합에 대해 보존되지는 않는다.

그러나 군 $G$의 부분군열 $\lbrace  H\_n \rbrace \_{n \in \mathbb{N}}$에 대해, $H\_1 \leq H\_2 \leq H\_3 \leq \cdots$라면 $\bigcup\_{n \in \mathbb{N}}H\_n$은 군이다. 예를 들어 $Z\_2 \leq Z\_4 \leq Z\_8 \leq \cdots$의 합집합은 $p$-adic 정수의 덧셈군 $\mathbb{Z}\_{(2)}$와 동형이다. 이와 같이 군의 구조는 어떤 연산에 대해서는 보존되지만 어떤 연산에 대해서는 보존되지 않는다. 이것은 모델론에서의 보존 정리로 설명할 수 있다.

> _Notation._ 본 글에서 $T$는 언어 $\mathcal{L}$의 1차 논리 이론이며, $\mathfrak{M}, \mathfrak{N}$은 $\mathcal{L}$-구조<sub>structure</sub>이다. 또한 $\mathfrak{M}, \mathfrak{N}, \dots$의 정의역을 $M, N, \dots$와 같이 적는다.

## 기본 개념

> **정의.** $N \subseteq M$이고 $\mathfrak{N}$에서의 해석<sub>interpretation</sub>이 $\mathfrak{M}$에서의 해석을 $N$으로 제한한 것일 때, $\mathfrak{N}$을 $\mathfrak{M}$의 **부분모델<sub>submodel</sub>**이라고 하며, 기호로 $\mathfrak{N} \subseteq \mathfrak{M}$과 같이 적는다. 또한, $\mathfrak{M}$을 $\mathfrak{N}$의 **확장<sub>extension</sub>**이라고 한다.

일례로 $(2\mathbb{Z}, +)$는 $(\mathbb{Z}, +)$의 부분모델이고, $(\mathbb{Q}, +, \cdot)$는 $(\mathbb{R}, +, \cdot)$의 부분모델이다.

> **정의.** 임의의 $\mathcal{L}$-문장 $\phi$에 대해 $\mathfrak{M} \vDash \phi \iff \mathfrak{N} \vDash \phi$일 때 $\mathfrak{M}$과 $\mathfrak{N}$이 **기초적으로 동등<sub>elementarily equivalent</sub>**하다고 하며, 기호로 $\mathfrak{M} \equiv \mathfrak{N}$과 같이 적는다.

따라서 뢰벤하임-스콜렘 정리는, $\kappa$가 $\|\mathcal{L}\|$보다 크거나 같은 기수일 때, 임의의 무한 구조 $\mathfrak{M}$과 기초적으로 동등하며 크기가 $\kappa$인 모델 $\mathfrak{N}$이 존재한다는 진술이다.

> **정의.** $\mathfrak{M}$과 $\mathfrak{N}$이 구조적으로 동일할 때 **동형<sub>isomorphic</sub>**이라고 하며, 기호로 $\mathfrak{M} \cong \mathfrak{N}$과 같이 적는다. 구체적으로, 어떤 일대일 대응 $\phi: M \to N$이 존재하여, $\mathcal{L}$의 임의의 함수 $f$와 관계 $R$에 대해 다음이 임의의 $a\_1, \dots, a\_n \in M$에 대해 성립할 때 $\mathfrak{M} \cong \mathfrak{N}$이다.
>
> $$
> \begin{gather}
> \phi(f_\mathfrak{M}(a_1, \dots, a_n)) = f_\mathfrak{N}(\phi(a_1), \dots, \phi(a_n)), \\\\
> R_\mathfrak{M}(a_1, \dots, a_n) \iff R_\mathfrak{N}(\phi(a_1), \dots, \phi(a_n))
> \end{gather}
> $$

$(\mathbb{Z}, +)$와 $(2\mathbb{Z}, +)$는 $\phi: x \mapsto 2x$를 통해 동형이지만 $(\mathbb{Q}, +, \cdot)$와 $(\mathbb{R}, +, \cdot)$은 동형이 아니다.

다음 정리의 증명은 거의 자명하다.

> **정리.** 동형인 두 구조는 기초적으로 동등하다.

> **정의.** $\mathfrak{N} \subseteq \mathfrak{M}$이라고 하자. 임의의 $\mathcal{L}$-명제 $\phi$와 $\mathfrak{N}$에서의 자유변수 할당<sub>assignment</sub> $g$에 대해, $\mathfrak{N} \vDash \phi[g] \iff \mathfrak{M} \vDash \phi[g]$일 때 $\mathfrak{N}$이 $\mathfrak{M}$의 **기초적 부분모델<sub>elementary submodel</sub>**이라고 하며, 기호로 $\mathfrak{N} \preceq \mathfrak{M}$과 같이 적는다.

2와 3은 1보다 강하지만, 2와 3은 서로를 시사하지 않는다.

1. $\mathfrak{N} \subseteq \mathfrak{M}$, $\mathfrak{N} \equiv \mathfrak{M}$
2. $\mathfrak{N} \subseteq \mathfrak{M}$, $\mathfrak{N} \cong \mathfrak{M}$
3. $\mathfrak{N} \preceq \mathfrak{M}$

2와 3이 서로를 시사하지 않는 이유는, 2가 구조적 동등을 요구한다는 점에서 3보다 약하지 않은 한편, 3이 임의의 할당에 대한 동등을 요구한다는 점에서 2보다 약하지 않기 때문이다. 예를 들어 $\mathfrak{M} = (\mathbb{R}, +, \cdot)$에 대해, $\mathfrak{N}$이 $\mathfrak{M}$의 동형인 부분모델이기 위해서는 _구성 가능한_ 실수에 대해 _구조적으로_ 동일해야 하는 반면, $\mathfrak{N}$이 $\mathfrak{M}$의 기초적 부분모델이기 위해서는 두 모델이 _모든_ 실수에 대해 _기초적으로_ 동등해야 한다.

|                       | 2                | 3             |
| --------------------- | ---------------- | ------------- |
| 2가 3보다 약하지 않다 | 구조적 동일성    | 기초적 동일성 |
| 2가 3보다 약하지 않다 | 구성 가능한 대상 | 임의의 대상   |

일례로 앞서 보았듯이 $(2\mathbb{Z}, +)$는 $(\mathbb{Z}, +)$의 동형인 부분모델이지만, $\exists y \; (y + y = x)$에 $x \mapsto 2$ 할당을 고려하면 기초적 부분모델은 아님을 알 수 있다.

## 부분모델에 대한 보존 정리

$\mathfrak{M}$이 $T$의 모델이라고 하자. $T$가 어떤 이론이어야 $\mathfrak{M}$의 임의의 부분모델 또한 $T$의 모델이 될까? 그 답은 다음의 정리로 주어진다.

> **워시-타르스키<sub>Łoś-Tarski</sub> 보존 정리.** $T$의 모델의 부분모델 또한 $T$의 모델일 필요충분조건은 $T$가 $\Pi_1$ 문장으로 이루어진 이론과 동치인 것이다.

$\Pi_1$ 문장이 무엇인지에 대해서는 [산술 위계](https://dimenerno.github.io/2025/02/07/arithmetic-hierarchy/) 글에서 다룬 바 있으므로, 간략히만 설명하자면 $\forall$만을 양화사로 가지는 이론이다. 직관적으로 $\Pi_1$ 문장은 정의역이 제한될수록 만족시키기 쉬우므로, $T$가 $\Pi_1$ 이론이라면 $T$는 부분모델에 대해 보존될 것이다. 필요조건은 증명하기가 좀 더 까다롭다.

**증명.** 필요조건만 증명한다.
