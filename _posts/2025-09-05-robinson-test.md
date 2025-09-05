---
layout: post
title: "모델 완전성에 대한 로빈슨 판별법"
date: 2025-09-05
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

2. 비꼬임 가분 아벨군<sub>torsion-free divisible abelian group</sub> 이론은 모델 완전하다.

3. 양화사 제거 가능한 이론은 모델 완전하다.

2를 비롯하여, 모델 완전성을 판별하는 데 유용한 정리 중 하나는 다음이다.

> **로빈슨 판별법<sub>Robinson's Test</sub>.** 다음은 동치이다.
>
> 1. $T$가 모델 완전하다.
> 2. 임의의 $T$의 모델 $\mathfrak{A} \subseteq \mathfrak{B}$에 대해, $\mathfrak{B}$가 만족하는 $\Sigma_1(\mathcal{L}_\mathfrak{A})$-문장은 $\mathfrak{A}$에서도 만족된다.
> 3. 임의의 $\mathcal{L}$-명제 $\phi(\vec{x})$에 대해, $T \vdash \forall \vec{x} (\phi(\vec{x}) \leftrightarrow \psi(\vec{x}))$를 만족하는 $\Pi_1(\mathcal{L})$-명제 $\psi(\vec{x})$가 존재한다.

### 증명

#### (1) → (2)

$T$가 모델 완전하므로 $\mathfrak{A} \subseteq \mathfrak{B}$라면 $\mathfrak{A} \preceq \mathfrak{B}$이다. 따라서 $\mathfrak{A}, \mathfrak{B}$는 $\mathcal{L}_\mathfrak{A}$-문장들에 대해 동치이다. □

#### (2) → (3)

$\phi(\vec{x})$가 $\Sigma_1(\mathcal{L})$-명제라고 하자. $\mathcal{L}$에 상수 $\vec{c}$를 추가한 언어를 $\mathcal{L}'$이라고 하자. $T$를 $\mathcal{L}'$-이론으로 생각하고, $\mathfrak{A} \subseteq \mathfrak{B}$를 $\mathcal{L}'$-구조들의 임베딩으로 생각할 수 있다.

이제 $\mathcal{L}'$-이론 $T' = T \cup \{ \phi(\vec{c}) \}$를 생각하자. $\mathfrak{B}$가 $T'$의 모델이라고 하자. $\mathfrak{A}$ 또한 $T'$의 모델임을 보인다. $\mathfrak{A} \subseteq \mathfrak{B}$가 $\mathcal{L}'$-구조들의 임베딩이므로 다음이 성립함을 관찰하라.

$$
\mathfrak{B} \vDash \phi(\vec{c}) \iff \exists \vec{a} \in \mathcal{L}_\mathfrak{A}  \text{ where } \mathfrak{B} \vDash \phi(\vec{a})
$$

$\phi(\vec{a})$는 $\Sigma_1(\mathcal{L}_\mathfrak{A})$-문장이므로 가정에 의해 $\mathfrak{A}$에서도 성립한다. 따라서 $\mathfrak{A}$는 $T'$의 모델이다.

이제 [워시-타르스키 정리](/2025/04/17/los-tarski/)의 다음 일반화를 사용한다 (증명은 연습문제).

> **정리.** $\mathcal{L}'$-이론 $T \subseteq T'$에 대해 다음이 성립한다고 하자.
>
> - 임의의 $T$의 모델 $\mathfrak{A} \subseteq \mathfrak{B}$에 대해 $\mathfrak{B}$가 $T'$의 모델이라면 $\mathfrak{A}$도 $T'$의 모델이다.
>
> 이때, 어떤 $\Pi_1(\mathcal{L}')$-문장들의 모임 $P$가 존재하여 $T'$은 $T \cup P$와 동치이다.

위 정리에 의해 $T'$은 어떤 $\Pi_1(\mathcal{L}')$-문장들의 모임 $P$에 대해 $T \cup P$와 동치이다. 즉,

$$
T \cup P \vdash \phi(\vec{c})
$$

증명의 유한성에 의해 $T \cup P$에서 $\phi$를 증명하는 데 필요한 $P$의 명제는 유한하다. 그 명제들의 논리곱을 $\pi(\vec{c})$라고 하면,

$$
T \vdash \forall x (\phi(\vec{x}) \leftrightarrow \pi(\vec{x}))
$$

이고 $\pi(\vec{x})$는 $\Pi_1(\mathcal{L})$-명제이므로, $\phi \in \Sigma_1$일 때 증명이 완료되었다.

이제 $\phi$에 대한 구조적 귀납법으로 증명하자. $\exists \leftrightarrow \lnot\forall\lnot$이므로, $\lor, \lnot, \forall$에 대해서만 고려하면 된다. $\lor, \forall$의 경우는 자명하므로 $\lnot$의 경우를 살핀다.

어떤 $\Pi_1(\mathcal{L})$-명제 $\psi$에 대해 $T \vdash \forall \vec{x} (\phi(\vec{x}) \leftrightarrow \psi(\vec{x}))$라고 하자. 그러면 $\lnot \phi$는 $\lnot \psi$와 동치이며, 이는 $\Sigma_1(\mathcal{L})$-명제이다. 그리고 이는 앞선 논증에 의해 $\Pi_1$ 문장과 동치이다. □

#### (3) → (1)

$T$의 모델 $\mathfrak{A} \subseteq \mathfrak{B}$에 대해, 만약 $\mathfrak{A} \not\preceq \mathfrak{B}$라면 콤팩트성 정리에 의해 어떤 $\mathcal{L}_\mathfrak{A}$의 문장 $\phi(\vec{a})$가 존재하여 $\mathfrak{A} \not\vDash \phi(\vec{a})$이지만 $\mathfrak{B} \vDash \phi(\vec{a})$이다.

가정에 의해 $T \vdash \forall \vec{x} (\phi(\vec{x}) \leftrightarrow \psi(\vec{x}))$를 만족하는 $\Pi_1$ 명제 $\psi$가 존재한다. 따라서 $\mathfrak{B} \vDash \psi(\vec{a})$이다. 그런데 이는 $\Pi_1$ 문장이고, $\Pi_1$ 문장은 부분모델에 대해 보존되므로 $\mathfrak{A} \vDash \psi(\vec{a})$가 되어 모순이다. ■
