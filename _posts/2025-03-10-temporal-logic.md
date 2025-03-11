---
layout: post
title: "시제 논리"
date: 2025-03-10
tags: ["논리학", "철학"]
related:
---

## 도입

다음의 세 문장을 보자.

1. 가영이는 언젠가 등교할 것이다.
2. 나영이는 언젠가 등교할 것이다.
3. 나영이는 가영이가 등교하기 전에 등교하지 않는다.

위로부터 다음을 추론할 수 있다.

&nbsp;&nbsp;&nbsp;4\. 가영이가 먼저 등교하고 나영이가 등교할 것이다.

그러나 고전 논리는 — 적어도 표면적으로는 — 위의 추론 관계를 함의하지 않는다. 따라서 우리에게 필요한 것은 시간에 대해 추론할 수 있는 논리학, 즉 **시제 논리<sub>temporal logic</sub>**이다.

## 1. 고전적 시제 논리

### 1.1. 의미론

시제 논리를 정의하는 길은 두 가지가 있다. 첫째는 고전 논리에 특정 구조를 부과함으로써 시제 논리를 얻는 것이다. 이 방법을 먼저 알아보자.

시제 논리의 부호수<sub>signature</sub>는 하나의 이항 관계 $\prec$와, 0개 이상의 일항 술어 $P, Q, \dots$로 이루어져 있다. 시제 논리의 모델은 다음과 같다. (이 모델을 **크립키<sub>Kripke</sub> 모델**이라고 한다)

$$
\mathcal{T} = (T, \prec^\mathcal{T}, P^\mathcal{T}, Q^\mathcal{T}, \dots)
$$

- 전체<sub>universe</sub> $T$: 상정하는 모든 순간을 의미한다.
- $t\_1 \prec^\mathcal{T} t\_2$: $t\_1$이 $t\_2$보다 과거라는 의미이다.
- $P^\mathcal{T}(t)$: $P$가 시점 $t$에서 참이라는 의미이다.

예를 들어 어제, 오늘, 그리고 내일만을 고려하는 시제 논리의 경우 $T = \lbrace  -1, 0, 1 \rbrace $로 둘 수 있다. 고전 역학은 $T = \mathbb{R}$을 간주한다.

가영이가 등교하는 사건을 $A$, 나영이가 등교하는 사건을 $B$라고 하면 도입의 3은 다음과 같이 쓸 수 있다.

$$
\forall t_1 \forall t_2 \; \big( A(t_1) \land B(t_2) \rightarrow t_1 \prec t_2 \big)
$$

$\phi$가 하나의 자유변수 $x$를 가지는 문장이라고 하자. $t \in T$를 *현재*로 뒀을 때 $\phi$가 참이라는 것을, $\mathcal{T} \vDash \phi[t]$와 같이 적는다.

### 1.2. 프레임

집합과, 그 위에 정의된 이항 관계의 쌍 $(T, \prec)$를 **프레임<sub>frame</sub>**이라고 부른다. $\mathbf{F}$가 프레임의 모임<sub>class</sub>이라고 하자. $(T, \prec) \in \mathbf{F}$인 임의의 모델 $\mathcal{T} = (T, \prec, \lbrace  P^\mathcal{T} \rbrace )$와 임의의 $t \in T$에 대해 $\mathcal{T} \vDash \phi[t]$일 때, $\phi$가 $\mathbf{F}$에 대해 참이라고 한다.

$\mathbf{F}$가 특정 성질을 가질 것을 요구함으로써 시간의 특징을 포착할 수 있다. 다음과 같은 성질을 요구할 수 있다.

- 추이성<sub>transitivity</sub>: 임의의 서로 다른 $t\_1, t\_2, t\_3 \in T$에 대해 $t\_1 \prec t\_2, t\_2 \prec t\_3$라면 $t\_1 \prec t\_3$이다.
- 선형성<sub>linearity</sub>: 임의의 서로 다른 $t\_1, t\_2 \in T$에 대해 $t\_1 \prec t\_2$이거나 $t\_2 \prec t\_1$이다.
- 조밀성<sub>denseness</sub>: 임의의 서로 다른 $t\_1, t\_2 \in T$에 대해 어떤 $t\_3 \in T$가 존재하여 $t\_1 \prec t\_3 \prec t\_2$이다.
- 우 연장성<sub>R-extendability</sub>: 임의의 $t \in T$에 대해 어떤 $t' \in T$가 존재하여 $t \prec t'$이다.
- 좌 연장성<sub>L-extendability</sub>: 임의의 $t \in T$에 대해 어떤 $t' \in T$가 존재하여 $t' \prec t$이다.

도입의 논증은 선형 프레임에 대해 참임을 보일 수 있다.

## 2. 독립적 시제 논리

시제 논리를 정의하는 두 번째 방식은 시제 논리에 특수한 논리 기호를 도입하는 것이다. 각각 다음과 같이 읽는다.

- $\mathsf{F}p$: 언젠가 $p$일 것이다<sub>Future p</sub>
- $\mathsf{P}p$: 언젠가 $p$였다<sub>Past p</sub>
- $\mathsf{G}p$: 언제나 $p$일 것이다<sub>Going to always be p</sub>
- $\mathsf{H}p$: 언제나 $p$였다<sub>Has always been p</sub>

$\mathsf{F}, \mathsf{P}, \mathsf{G}, \mathsf{H}$의 관계는 다음과 같다.

- $\mathsf{F}p \equiv \lnot\mathsf{G}\lnot p$
- $\mathsf{P}p \equiv \lnot\mathsf{H}\lnot p$

독립적 시제 논리의 명제는 **메레디스 번역<sub>Meredith translation</sub>**을 통해 언제나 고전적 시제 논리의 명제로 변환할 수 있다. 예를 들어 $\mathsf{G}p$는 $\forall x \succ t \; p(x)$로 번역된다. 그러나 역은 성립하지 않는다. 따라서 독립적 시제 논리는 고전적 시제 논리보다 표현력이 약하다. 그럼에도 독립적 시제 논리가 연구할 만한 주제인 이유는, 표현력을 일부 포기하는대가로 결정 가능성, 완전성 등의 좋은 성질을 얻을 수 있을 뿐더러, 양상 논리와의 연결 고리를 제공하는 등 철학적 의의 또한 크기 때문이다.

독립적 시제 논리의 모델은 종속적 시제 논리와 마찬가지로 $\mathcal{T} = (T, \prec, \lbrace  P^\mathcal{T} \rbrace )$이다. 만족 관계는 자연스럽게 정의한다. 예를 들어,

- $\mathcal{T} \vDash \mathsf{F}p[t] \iff$ 어떤 $t \prec t'$에 대해, $\mathcal{T} \vDash p[t']$

## 3. 시제 공리

지금까지 시제 논리의 의미론을 살펴 보았다. 이제 시제 논리의 증명을 살펴본다.

### 3.1. 최소 시제 논리

최소 시제 논리 $L\_0$는 다음의 공리로 이루어져 있다.

- $\tau$가 명제 논리의 항진명제일 때, $\tau$
- $\mathsf{G}(\phi \to \psi) \to (\mathsf{G}\phi \to \mathsf{G}\psi)$
- $\mathsf{H}(\phi \to \psi) \to (\mathsf{H}\phi \to \mathsf{H}\psi)$
- $\phi \to \mathsf{GP}\phi$
- $\phi \to \mathsf{HF}\phi$

그리고 다음의 추론 규칙으로 이루어져 있다.

- **MP** $\vdash \phi, \phi \to \psi \implies \vdash \psi$
- **TG1:** $\vdash \phi \implies \vdash \mathsf{G}\phi$
- **TG2:** $\vdash \phi \implies \vdash \mathsf{H}\phi$

MP는 Modus Ponens, TG는 Temporal Generalisation의 약어이다.

TG가 $\vdash \phi \to \mathsf{G}\phi$를 의미하지 않는다는 사실에 유의하라. TG는 _논리적으로 증명된 명제 $\phi$에 한해,_ $\mathsf{G}\phi$ 또는 $\mathsf{H}\phi$를 도출할 수 있다는 의미이다. 즉, TG는 논리적 명제가 시간과 무관하다는 의미이다.

> **정리.** $L\_0$는 건전하다.

**증명.** 명제 논리의 건전성 정리와 거의 동일하게, 논리식의 형태에 대한 귀납법으로 증명한다.

> **정리.** $L\_0$에서 증명 가능성은 다음 규칙에 대해 닫혀 있다.
>
> 1. **거울 규칙<sub>mirror rule</sub>:** 명제 $\phi$에 등장하는 $\mathsf{G}$와 $\mathsf{H}$, $\mathsf{F}$와 $\mathsf{P}$를 서로 바꾼 명제를 거울 명제 $\bar{\phi}$라고 하자. $\vdash \phi$라면 $\vdash \bar{\phi}$이다.
> 2. **베커 규칙<sub>Becker's rule</sub>:** $\mathsf{T}$가 $\mathsf{G, H, F, P}$ 중 하나라고 하자. $\vdash \phi \to \psi$라면 $\vdash \mathsf{T}\phi \to \mathsf{T}\psi$이다.
> 3. **쌍대 규칙<sub>dual rule</sub>:** 명제 $\phi$에 등장하는 $\land$와 $\lor$, $\mathsf{G}$와 $\mathsf{F}$, $\mathsf{H}$와 $\mathsf{P}$를 서로 바꾼 명제를 쌍대 명제 $\phi^\ast$라고 하자. $\vdash \phi$라면 $\vdash \phi^\ast$이다.

**증명.** 연습문제 (^^)

> **정리.** $L\_0$는 모든 프레임의 모임 $\mathbf{F}\_0$에 대해 완전하다.

**증명.** TODO

### 3.2. 고전역학의 시제 논리

추이성, 선형성, 조밀성, 좌우 연장성을 가지는 프레임들의 모임 $\mathbf{F}\_1$을 고려하자. $\mathbf{F}\_1$은 고전역학에서 상정하는 시간이다. $\mathbf{F}\_1$에서 건전하고 완전한 공리계를 찾아 보자.

고전역학의 시제 논리 $L\_1$은 $L\_0$에 다음 공리를 추가한 것이다.

- $\mathsf{G} p \to \mathsf{GG}p$ (추이성)
- $(\mathsf{P}p \land \mathsf{P}q) \to (\mathsf{P}(p \land \mathsf{P}q) \lor \mathsf{P}(p \land q) \lor \mathsf{P}(\mathsf{P}p \land q))$ (좌 선형성)
- $(\mathsf{F}p \land \mathsf{F}q) \to (\mathsf{F}(p \land \mathsf{F}q) \lor \mathsf{F}(p \land q) \lor \mathsf{F}(\mathsf{F}p \land q))$ (우 선형성)
- $\mathsf{H}p \to \mathsf{P}p$ (좌 연장성)
- $\mathsf{G}p \to \mathsf{F}p$ (우 연장성)
- $\mathsf{GG}p \to \mathsf{G}p$ (조밀성)

> **햄린<sub>Hamblin</sub>의 정리.** $L\_1$에서 시제 기호의 조합은 14가지 시제 중 하나와 동치이다. 14가지 시제는 $\mathsf{FH, H, PH, HP, P, GP}$와 $\mathsf{PG, G, FG, GF, F, HF}$, 그리고 $\mathsf{GH} = \mathsf{HG}$와 $\mathsf{FP} = \mathsf{PF}$이다.

**증명.** 추이적 프레임에서 $\mathsf{PP}$와 같이 중첩된 시제는 단일 시제 $\mathsf{P}$와 동치임을 쉽게 보일 수 있다. 따라서 $\mathsf{X} \neq \mathsf{Y}$, $\mathsf{Y} \neq \mathsf{Z}$인 시제들의 조합 $\mathsf{XYZ}$은 어떤 두 시제 조합과 동치임을 보이면 된다. 거울 규칙과 쌍대 규칙에 의해 $\mathsf{Z} = \mathsf{G}$인 경우만 고려하면 된다. 한편 $\mathsf{XY}$와 $\mathsf{X'Y'}$가 서로 동치가 아니라는 것을 보이기 위해서는 함의 관계가 성립하지 않는 크립키 모델을 찾으면 된다.

> **정리.** $L\_1$은 $\mathbf{F}\_1$에 대해 완전하다.

## 4. 시제 술어 논리

고전 논리학에서 술어 논리는 명제 논리에 다음 공리를 추가한 것이다.

- $\forall x \phi \to \phi[y/x]$ (단, $y$는 $\phi$에서 $x$에 대해 자유)
- $\forall x (\phi \to \psi) \to (\phi \to \forall x \psi)$ (단, $x$는 $\phi$의 자유변수가 아님)
- $x = x$
- $x = y \to (\phi[x/z] \to \phi[y / z]$) (단, $x, y$는 $\phi$에서 $z$에 대해 자유)

그리고 다음의 추론 규칙을 추가한다.

- **UG<sub>Universal Generalisation</sub>:** $\vdash \phi \implies \vdash \forall x \phi$

시제 논리 $L\_0$에 상술한 공리들과 추론 규칙을 추가한 논리 체계를 시제 술어 논리 $L\_P$라고 하자.

> **정리.** $L\_P$는 다음을 증명한다.
>
> - **정 바르칸<sub>direct Barcan</sub>:** $\forall x \mathsf{G}\phi \to \mathsf{G}\forall x \phi$
> - **역 바르칸<sub>converse Barcan</sub>:** $\mathsf{G}\forall x \phi \to \forall x \mathsf{G} \phi$
> - **동일성의 영속성<sub>permanence of identity</sub>:** $x = y \to \mathsf{G}(x = y)$

**증명.** 역 바르칸 명제만 증명해 보자.

$$
\begin{aligned}
&1.  &&\forall x \phi \to \phi &&&\text{Axiom} \\
&2. &&\mathsf{G}\forall x \phi \to \mathsf{G} \phi &&&\text{Becker}\\
&3. &&\forall x (\mathsf{G}\forall x \phi \to \mathsf{G}\phi) &&&\text{2, UG}\\
&4. &&\forall x (\mathsf{G}\forall x \phi \to \mathsf{G}\phi) \to (\mathsf{G}\forall x \phi \to \forall x \mathsf{G}\phi) &&&\text{Axiom}\\
&5. &&\mathsf{G}\forall x \phi \to \forall x \mathsf{G} \phi \quad &&&\text{3, 4, MP} \\
& \blacksquare
\end{aligned}
$$

자연 언어로 풀어 쓰자면,

- 정 바르칸: 현재 존재하는 모든 대상이 언제나 \_\_\_\_라고 하자. 그러면 임의의 미래 시점에 대해, 그때 존재하는 모든 대상은 \_\_\_\_이다.
- 역 바르칸: 임의의 미래 시점에서 대해, 그때 존재하는 모든 대상은 \_\_\_\_라고 하자. 그러면 현재 존재하는 모든 대상이 언제나 \_\_\_\_이다.
- 동일성의 영속성: 동일한 두 대상은 언제나 동일하다.

동일성의 영속성은 시제 논리에서 상수가 고정 지시어<sub>rigid designator</sub>처럼 행동한다고 직관적으로 올바르다. 그러나 바르칸 명제는 직관적으로 틀렸다. 일례로 $\phi(x)$를 "$x$가 존재한다”로 치환해 보자.

- 역 바르칸: ① 임의의 미래 시점에서 대해, 그때 존재하는 모든 대상은 존재한다고 하자. ② 그러면 현재 존재하는 모든 대상이 언제나 존재한다.

하지만 이 명제는 틀렸다. ①은 자명하게 성립하지만, 현재 존재하는 모든 대상이 영원히 존재할 것은 아니므로 ②는 성립하지 않기 때문이다. 따라서 역 바르칸 명제는 문제적이다.

$L\_P$가 바르칸 명제 같은 병리적 명제를 도출하는 이유는 TG가 열린 명제에 대해 유효하지 않기 때문이다(TG는 베커 규칙의 증명에 필요하다. 즉, 증명의 문제는 2단계에 있다). 앞서 말했듯이 TG는 논리적으로 참인 명제는 시간에 상관 없이 참이라는 의미이다. 그러나 열린 명제는 참도 아니고 거짓도 아니다. 열린 명제는 특정 대상에 의해 만족되거나, 만족되지 않기 때문이다.

이 문제를 극복하기 위해 TG를 닫힌 명제에 대해서만 적용 가능하도록 제안하는 방안을 강구할 수 있으나, 제한된 시제 술어 논리는 일부 바람직한 명제를 증명하지 못함이 알려져 있다. 건전하면서도 완전한 시제 술어 논리를 만드는 작업은 아직도 해결되지 않은 문제이다.
