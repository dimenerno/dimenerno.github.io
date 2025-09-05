---
layout: post
title: "모델 완전성에 대한 로빈슨 판별법"
date: 2025-09-11
tags: ["논리학", "모델론"]
related:
---

이 글에서 $T$는 언어 $\mathcal{L}$의 이론이다. 또한 $x_1, \dots, x_n$을 $\vec{x}$로 쓴다.

> **정의.** 이론 $T$가 **모델 완전<sub>model complete</sub>**하다는 것은 임의의 $T$의 모델 $\mathfrak{A}, \mathfrak{B}$에 대해
>
> $$
> \mathfrak{A} \subseteq \mathfrak{B} \implies \mathfrak{A} \preceq \mathfrak{B}
> $$
>
> 라는 것이다.

**예시**

1. 체<sub>field</sub> 이론은 모델 완전하지 않다. 실수체 $\mathbb{R}$과 유리수체 $\mathbb{Q}$에 대해 $\mathbb{Q} \subseteq \mathbb{R}$이지만 $\exists x (x \cdot x = 2)$의 진릿값이 두 모델에서 다르므로 $\mathbb{Q} \not\preceq \mathbb{R}$이기 때문이다.

2. 비꼬임 가분 아벨군<sub>torsion-free divisible abelian group</sub> 이론은 모델 완전하다. (증명 어려움)

3. 양화사 제거 가능한 이론은 모델 완전하다. (증명 쉬움)

2를 비롯하여, 모델 완전성을 판별하는 데 유용한 정리 중 하나는 다음이다.

> **로빈슨 판별법<sub>Robinson's Test</sub>.** $T$가 모델 완전할 필요충분조건은 다음이 성립하는 것이다.
>
> - 임의의 $T$의 모델 $\mathfrak{A} \subseteq \mathfrak{B}$에 대해, $\mathfrak{B}$가 만족하는 $\Sigma_1$ $\mathcal{L}_\mathfrak{A}$-문장은 $\mathfrak{A}$ 또한 만족한다.

### 증명

다음의 보조정리를 먼저 증명한다.

> **보조정리.** $T$가 모델 완전할 필요충분조건은 다음이 성립하는 것이다.
>
> - 임의의 $\mathcal{L}$-명제 $\phi(\vec{x})$에 대해, $T \vDash \forall \vec{x} (\phi(\vec{x}) \leftrightarrow \psi(\vec{x}))$를 만족하는 $\Pi_1$ 명제 $\psi(\vec{x})$가 존재한다.

(이는 예시 3의 진술, 즉 양화사 제거 가능성은 모델 완전성보다 강한 조건임을 더 명확하게 보여준다.)

**보조정리의 증명.** 먼저 충분조건임을 보이자. $T$의 모델 $\mathfrak{A} \subseteq \mathfrak{B}$에 대해, 만약 $\mathfrak{A} \not\preceq \mathfrak{B}$라면 콤팩트성 정리에 의해 어떤 $E(\mathfrak{A})$의 문장 $\phi(\vec{a})$가 존재하여 $\mathfrak{B} \not\vDash \phi(\vec{a})$이다. 가정에 의해 $T \vDash \forall \vec{x} (\phi(\vec{x}) \leftrightarrow \psi(\vec{x}))$를 만족하는 $\Pi_1$ 명제 $\psi$가 존재한다. 따라서 $\mathfrak{B} \not\Vdash \psi(\vec{a})$이다. 그런데 이는 $\Pi_1$ 문장이고, $\Pi_1$ 문장은 부분모델에 대해 보존되므로 $\mathfrak{A} \not\Vdash \psi(\vec{a})$가 되어 모순이다.

이제 필요조건임을 보이자. $\phi(\vec{x})$가 임의의 $\mathcal{L}$-명제라고 하자. [워시-타르스키 정리](/2025/04/17/los-tarski/)의 다음 일반화를 사용한다 (증명은 연습문제).

> **정리.** $\mathcal{L}$의 이론 $T \subseteq T'$에 대해 다음이 성립한다고 하자.
>
> - 임의의 $T$의 모델 $\mathfrak{A} \subseteq \mathfrak{B}$에 대해 $\mathfrak{B}$가 $T'$의 모델이라면 $\mathfrak{A}$도 $T'$의 모델이다.
>
> 이때, 어떤 $\Pi_1$ $\mathcal{L}$-문장들의 모임 $P$가 존재하여 $T'$은 $T \cup P$와 동치이다.

$\mathcal{L}$에 상수 $\vec{c}$를 추가한 언어를 $\mathcal{L}'$이라고 하자. $T$를 $\mathcal{L}'$-이론으로 생각할 수 있다. 이제 $\mathcal{L}'$-이론 $T' = T \cup \{ \phi(\vec{c}) \}$를 생각하자.

임의의 $T$ 모델 $\mathfrak{A} \subseteq \mathfrak{B}$에 대해 $\mathfrak{B} \vDash T' \implies \mathfrak{A} \vDash T'$임을 보이자. $T$가 모델 완전하므로 $\mathfrak{A} \preceq \mathfrak{B}$이며, 따라서

$$
\mathfrak{B} \vDash \phi(\vec{c}) \iff f $\mathfrak{A} \vDash \exists \phi(\vec{c})
$$

이므로

워시-타르스키 정리에 의해, 임의의 $T$ 모델 $\mathfrak{A} \subseteq \mathfrak{B}$에 대해 $\mathfrak{B} \vDash T' \implies \mathfrak{A} \vDash T'$임을 보이면 $T'$은 어떤 $\Pi_1$ $\mathcal{L}'$-문장들의 모임 $P$에 대해 $T \cup P$와 동치이다. 즉,

$$
T \cup P \vdash \phi(\vec{c})
$$

증명의 유한성에 의해 $T \cup P$에서 $\phi$를 증명하는 데 필요한 $P$의 명제는 유한하다. 그 명제들의 논리곱을 $\pi(\vec{c})$라고 하면

$$
T \vdash \forall x (\phi(\vec{x}) \leftrightarrow \pi(\vec{x}))
$$

이고 $\pi(\vec{x})$는 $\Pi_1$ $\mathcal{L}$-문장이므로 증명이 완료된다.

따라서, 모델 $\mathfrak{A} \subseteq \mathfrak{B}$에 대해 $\mathfrak{B} \vDash T' \implies \mathfrak{A} \vDash T'$임을 보이자.

$$
T \vDash \forall \vec{x} (\phi(\vec{x}) \leftrightarrow \psi(\vec{x}))
$$

이 얻어져 증명이 완료된다.
