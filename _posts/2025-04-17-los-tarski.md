---
layout: post
title: "워시-타르스키 보존 정리"
date: 2025-04-17
tags: ["수학", "논리학", "대수학"]
related:
---

군 $G$의 부분군 $H, K$에 대해 $H \cap K$는 언제나 군이다. 환과 체의 경우에도 마찬가지이다. 이는 워시-타르스키 정리의 따름결과로 설명할 수 있다.

> _Notation._ 본 글에서 $T$는 언어 $\mathcal{L}$의 1차 논리 이론이며, 프락투르 글자 $\mathfrak{M}, \mathfrak{N}, \dots$은 $\mathcal{L}$-구조<sub>structure</sub>이다. 또한 $\mathfrak{M}, \mathfrak{N}, \dots$의 정의역을 $M, N, \dots$와 같이 적는다.

## 기본 개념

> **정의.** $N \subseteq M$이고 $\mathfrak{N}$에서의 해석<sub>interpretation</sub>이 $\mathfrak{M}$에서의 해석을 $N$으로 제한한 것일 때, $\mathfrak{N}$을 $\mathfrak{M}$의 **부분모델<sub>submodel</sub>**이라고 하며, 기호로 $\mathfrak{N} \subseteq \mathfrak{M}$과 같이 적는다. 또한, $\mathfrak{M}$을 $\mathfrak{N}$의 **확장<sub>extension</sub>**이라고 한다.

일례로 $(2\mathbb{Z}, +)$는 $(\mathbb{Z}, +)$의 부분모델이고, $(\mathbb{Q}, +, \cdot)$는 $(\mathbb{R}, +, \cdot)$의 부분모델이다.

> **정의.** 임의의 $\mathcal{L}$-문장 $\phi$에 대해 $\mathfrak{M} \vDash \phi \iff \mathfrak{N} \vDash \phi$일 때 $\mathfrak{M}$과 $\mathfrak{N}$이 **기초적으로 동등<sub>elementarily equivalent</sub>**하다고 하며, 기호로 $\mathfrak{M} \equiv \mathfrak{N}$과 같이 적는다.

[뢰벤하임-스콜렘 정리](https://dimenerno.github.io/2025/04/10/completeness-theorem/)에 의해 $\kappa$가 $\|\mathcal{L}\|$ 이상의 무한 기수라면, 임의의 무한 구조 $\mathfrak{M}$과 기초적으로 동등하며 크기가 $\kappa$인 모델 $\mathfrak{N}$이 존재한다. (cf. 워시-보트 판별<sub>Łoś-Vaught test</sub>)

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
| 3이 2보다 약하지 않다 | 구성 가능한 대상 | 임의의 대상   |

일례로 앞서 보았듯이 $(2\mathbb{Z}, +)$는 $(\mathbb{Z}, +)$의 동형인 부분모델이지만, $\exists y \; (y + y = x)$에 $x \mapsto 2$ 할당을 고려하면 기초적 부분모델은 아님을 알 수 있다.

## 워시-타르스키 정리

$\mathfrak{M}$이 $T$의 모델이라고 하자. $T$가 어떤 이론이어야 $\mathfrak{M}$의 임의의 부분모델 또한 $T$의 모델이 될까? 그 답은 다음의 정리로 주어진다.

> **워시-타르스키<sub>Łoś-Tarski</sub> 보존 정리.** $T$의 모델의 부분모델 또한 $T$의 모델일 필요충분조건은 $T$가 $\Pi\_1$ 문장으로 이루어진 이론과 동치인 것이다.

$\Pi\_1$ 문장이 무엇인지에 대해서는 [산술 위계](https://dimenerno.github.io/2025/02/07/arithmetic-hierarchy/) 글에서 다룬 바 있다. 간략히만 설명하자면 $\forall$만을 양화사로 가지는 이론이다. 직관적으로 $\Pi\_1$ 문장은 정의역이 제한될수록 만족시키기 쉬우므로, $T$가 $\Pi\_1$ 이론이라면 $T$는 부분모델에 대해 보존될 것이다. 필요조건은 증명하기가 좀 더 까다롭다.

**증명.** 충분조건은 거의 자명하므로 필요조건만 증명한다. 다음의 보조정리를 증명한다.

> **보조정리.** $T$가 언어 $\mathcal{L}$의 무모순적인 이론이라고 하자. $\mathcal{L}$ 문장들의 집합 $\Delta$가 다음 두 조건을 만족할 때, $\Delta$는 $T$의 공리화를 포함한다.
>
> 1. $\Delta$는 선언<sub>disjunction</sub>에 대해 닫혀 있다. 즉, $\phi, \psi \in \Delta$라면 $\phi \lor \psi \in \Delta$이다.
> 2. $T$의 모델 $\mathfrak{A}$에 대해, $\mathfrak{B}$가 $\mathfrak{A}$에서 만족되는 모든 $\Delta$의 문장들을 만족한다면 $\mathfrak{B}$ 또한 $T$의 모델이다.

_보조정리의 증명._ $\Gamma = \lbrace  \delta \in \Delta : T \vDash \delta \rbrace $라고 하자. $\Delta$가 $T$의 공리화를 포함함을 보이기 위해서는 다음을 보이면 충분하다.

$$
\mathfrak{B} \vDash \Gamma \implies \mathfrak{B} \vDash T
$$

$\mathfrak{B}$가 $\Gamma$의 모델이라고 하자. 다음과 같이 정의한다.

$$
\Sigma = \{ \lnot \delta : \delta \in \Delta, \mathfrak{B} \not\vDash \delta \}
$$

$T \cup \Sigma$는 무모순적인 이론임을 보이자. 만약 $T \cup \Sigma$가 모순적이라면 어떤 $\lnot\delta\_1, \dots, \lnot\delta\_n \in \Sigma$에 대해 $T \vdash \lnot(\lnot\delta\_1 \land \cdots \land \lnot\delta\_n)$이므로, $T \vdash \delta\_1 \lor \cdots \lor \delta\_n$이다. $\Delta$가 선언에 대해 닫혀 있으므로 $\delta\_1 \lor \cdots \lor \delta\_n \in \Delta$이다. $\Gamma$의 정의에 의해 $\delta\_1 \lor \cdots \lor \delta\_n \in \Gamma$이므로 $\mathfrak{B} \vDash \delta\_1 \lor \cdots \lor \delta\_n$이다. 이는 $\lnot\delta\_1, \dots, \lnot\delta\_n \in \Sigma$에 모순이다.

$T \cup \Sigma$가 무모순적이므로 완전성 정리에 의해 모델을 가진다. 해당 모델을 $\mathfrak{A}$라고 하자. $\mathfrak{B}$는 $\mathfrak{A}$가 만족시키는 $\Delta$의 문장들을 모두 만족시키므로, 가정에 의해 $T$의 모델이다. □

이제 본 정리의 증명으로 넘어가자. $\Delta$를 모든 $\mathcal{L}$의 $\Pi\_1$ 문장들의 집합이라고 하자. 우리의 목표는 $\Delta$가 $T$의 공리화를 포함함을 보이는 것이다. $\Pi\_1$ 문장들은 선언에 대해 닫혀 있으므로, 보조정리에 의해 다음을 보이면 충분하다.

> $T$가 부분모델에 대해 보존적인 이론이라고 하자. $T$의 모델 $\mathfrak{A}$에 대해, $\mathfrak{B}$가 $\mathfrak{A}$에서 만족되는 모든 $\Pi\_1$ 문장들을 만족한다면 $\mathfrak{B}$ 또한 $T$의 모델이다.

$\mathcal{L}\_\mathfrak{B}$를 $\mathcal{L}$에 $\mathfrak{B}$의 정의역과 일대일 대응되는 개수만큼의 상수를 추가한 언어로 정의한다. $\Delta\_\mathfrak{B}$가 $\mathfrak{B}$에서 참인 $\mathcal{L}\_\mathfrak{B}$ 문장들의 집합이라고 하자. 즉, $\mathfrak{M}$이 $\Delta\_\mathfrak{B}$를 만족할 때 $\mathfrak{B} \preceq \mathfrak{M}$이다.

$T \cup \Delta\_{\mathfrak{B}}$는 무모순적임을 보이자. 만약 $T \cup \Delta\_{\mathfrak{B}}$가 모순적이라면, 어떤 $\Delta\_{\mathfrak{B}}$의 문장 $\phi(b\_1, \dots, b\_n)$이 존재하여 $T \cup \lbrace  \phi \rbrace $는 모델을 가지지 않는다. 따라서 $T$의 모델인 $\mathfrak{A}$는 $\phi$를 만족시키는 $\mathcal{L} \cup \lbrace b_1, \dots, b_n \rbrace $ 모델로 확장될 수 없다. 즉, 다음이 성립한다.

$$
\mathfrak{A} \vDash \forall x_1 \cdots \forall x_n \lnot \phi(x_1, \dots, x_n)
$$

우변은 $\Pi\_1$ 문장이므로, 가정에 의해 $\mathfrak{B} \vDash \forall x\_1 \cdots \forall x\_n \lnot \phi(x\_1, \dots, x\_n)$이다. 그런데 $\phi(b\_1, \dots, b\_n) \in \Delta\_\mathfrak{B}$이므로, 이는 모순이다. 따라서 $T \cup \Delta\_{\mathfrak{B}}$는 무모순적이며, 완전성 정리에 의해 모델 $\mathfrak{C}$를 가진다. 그리고 $\mathfrak{C}$는 $\Delta\_\mathfrak{B}$를 만족하므로, $\mathfrak{B} \preceq \mathfrak{C}$이다. 한편 $\mathfrak{C}$는 부분모델에 대해 보존적인 이론 $T$의 모델이므로, $\mathfrak{B}$는 $T$의 모델이다. ■

## 응용

군의 1차 논리적 공리화는, 항등원과 역원을 별도의 상수 $e$와 함수 $(-)^{-1}$로 표현하는지의 여부에 따라 구분된다.

#### 표현하지 않는 경우

언어 $\mathcal{L}_1 = \lbrace  G, \cdot \rbrace $의 이론 $T_1$를 다음과 같이 정의한다.

- $\forall x, y, z : (x \cdot y) \cdot z = x \cdot (y \cdot z)$
- $\exists x \forall y : x \cdot y = y \cdot x = y$
- $\forall x \exists y \forall z : (x \cdot y) \cdot z = (y \cdot x) \cdot z = z$

#### 표현하는 경우

언어 $\mathcal{L}_2 = \lbrace  G, \cdot, e, (-)^{-1} \rbrace $의 이론 $T_2$를 다음과 같이 정의한다.

- $\forall x, y, z : (x \cdot y) \cdot z = x \cdot (y \cdot z)$
- $\forall x : x \cdot e = e \cdot x = x$
- $\forall x : x \cdot x^{-1} = x^{-1} \cdot x = e$

$T_1$은 $\Pi_1$ 이론이 아니지만 $T_2$는 $\Pi_1$ 이론이다. 따라서 워시-타르스키 정리에 의해, $T_1$은 부분모델 보존적이지 않지만 $T_2$는 보존적이다. $T_1$이 부분모델 보존적이지 않다는 것은, 군의 부분집합이 연산에 대해 닫혀 있다고 해서 언제나 부분군인 것은 아님을 의미한다<small>(일례로 $\mathbb{Z}$의 부분집합 $\mathbb{Z}_{> 0}$은 연산에 대해 닫혀 있지만 역원을 결여하므로 군이 아니다)</small>. 반면 $T_2$가 부분모델 보존적이라는 것은 다음이 성립함을 의미한다.

> 군 $G$에 대해, $G$의 부분집합 $H$가 다음을 만족한다면 $H$는 $G$의 부분군이다.
>
> 1. 연산에 대해 닫혀 있다.
> 2. 역원에 대해 닫혀 있다.
> 3. $G$의 항등원을 포함한다.

그런데 위보다 더 강한 다음의 결과가 일반적으로 성립한다.

> 군 $G$에 대해, $G$의 부분집합 $H$가 다음을 만족한다면 $H$는 $G$의 부분군이다.
>
> 1. 연산에 대해 닫혀 있다.
> 2. 역원에 대해 닫혀 있다.

즉, 항등원을 지시할 상수를 결여하는 언어 $\mathcal{L}_3 = \lbrace  G, \cdot, (-)^{-1} \rbrace$에서도 군의 이론은 부분모델 보존적이며, 이는 $\mathcal{L}_3$로 군을 형식화하는 $\Pi_1$ 이론이 존재함을 의미한다. 머리를 잘 굴려보면 실제로 다음의 이론 $T_3$가 존재함을 발견할 수 있다.

- $\forall x, y, z : (x \cdot y) \cdot z = x \cdot (y \cdot z)$
- $\forall x, y : (x \cdot x^{-1}) \cdot y = y \cdot (x \cdot x^{-1}) = y$
