---
layout: post
title: "양화사 제거"
date: 2025-05-15
tags: ["수학", "논리학", "모델론"]
related:
  - "포화된 구조와 실수체의 완전성"
  - "산술 위계"
---

[이전 글](https://dimenerno.github.io/2025/05/08/saturation/)에서, $\mathcal{L}$-구조 $\mathfrak{A}$에서 **정의가능**한 집합들이 무엇인지에 관해 알아 보았다. $S \subseteq A$가 $\mathfrak{A}$에서 특정 [산술 위계](https://dimenerno.github.io/2025/02/07/arithmetic-hierarchy/)에 속하는 명제 $\phi$로 정의가능할 때, $S$가 그 위계에 속한다고 하자. 예를 들어 $S$가 $\Pi\_1$ 문장으로 정의 가능할 때, $S \in \Pi\_1$이다.

예를 들어 표준 산술 모형 $\mathfrak{N} = (\mathbb{N}, 0, S, +)$에서 짝수의 집합은 $\Sigma\_1$이다.

$$
\{ x \in \mathbb{N} : \mathfrak{N} \vDash \exists y (y + y = x) \}
$$

집합의 구조는 위계가 높아질수록 까다롭기 때문에, 가장 다루기 이상적인 상황은 모든 정의가능한 집합이 $\Delta\_0$으로 환원되는 상황이다. 이같은 특징을 가지는 이론을 양화사 제거 가능한 이론이라고 부른다.

> **정의.** $\mathcal{L}$-이론 $T$가 **양화사 제거<sub>quantifier elimination</sub>** 가능하다는 것은 임의의 $\mathcal{L}$-명제 $\phi$에 대해 어떤 $\Delta\_0$ $\mathcal{L}$-명제 $\psi$가 존재하여 다음이 성립하는 것이다.
>
> $$T \vdash \phi \leftrightarrow \psi$$

$\psi$는 문장<sub>sentence</sub>이 아니라 명제<sub>formula</sub>임에 주목하라. 따라서 $\Pi_1$ 명제는 자명하게 양화사 제거 가능하다. 예를 들어 $\forall x, y \phi(x, y)$는 $\phi(x, y)$로 양화사 제거 가능하다. 한편 $\Sigma_1$ 명제가 양화사 제거 가능할 경우, 다음 정리에서 드러나듯이 모든 명제가 양화사 제거 가능해진다.

> **양화사 제거 판별법.** $T$가 양화사 제거 가능할 충분조건은, $T$가 $\exists x \psi \; (\psi \in \Delta_0)$ 꼴의 명제에 대해 양화사 제거 가능한 것이다.

**증명.** 먼저 임의의 $\Delta_0$ 명제 $\psi$에 대해 $\forall x \psi$가 양화사 제거 가능함을 보이자. $\forall x \psi$는 $\lnot\exists x \lnot \psi$와 동치이고, 가정에 의해 $\exists x \lnot \psi$는 어떤 양화사가 없는 명제 $\theta$와 동치이다. 따라서 $\forall x \psi$는 $\lnot \theta$와 동치이며, 양화사 제거 가능하다. 이제 양화사 개수에 대한 귀납법을 적용하면 임의의 명제에 대해 양화사 제거가 가능함이 보여진다. ■

> **표준 양화사 제거 형식.** $T$가 양화사 제거 가능할 때, 임의의 $\mathcal{L}$-명제 $\phi$에 대해 $T \vdash \phi \leftrightarrow \psi$이다. 여기서 $\psi$는 다음의 특징을 가진다.
>
> - $\phi$가 자유변수를 가지는 경우: $\psi$의 자유변수는 모두 $\phi$의 자유변수이다.
> - $\phi$가 자유변수를 가지지 않는 경우
>   - $\mathcal{L}$이 적어도 하나의 상수 기호를 가지는 경우: $\psi$는 문장이다.
>   - $\mathcal{L}$이 상수 기호를 가지지 않는 경우: $\psi$는 최대 하나의 자유변수를 가지는 명제이다.

**증명.** $T \vdash \phi \leftrightarrow \psi$라고 하자. $\psi$가 자유변수 $x$를 가진다고 하자. $\forall$-첨가에 의해 $T \vdash \forall x(\phi \leftrightarrow \psi(x))$이다. 만약 $\phi$가 자유변수 $y$를 가지면 다음과 같이 $x$를 $y$로 치환할 수 있다.

$$
\begin{align}
&T  \vdash \forall x(\phi \leftrightarrow \psi(x)) \\
&\implies T \vdash \forall y(\phi \leftrightarrow \psi(y)) \\
&\implies T \vdash \phi \leftrightarrow \psi(y)
\end{align}
$$

비슷한 방식으로 나머지 경우를 증명할 수 있다. ■

표준 양화사 제거 형식 덕분에, 어떤 이론이 양화사 제거 가능할 경우 해당 이론이 완전함을 보일 수 있는 경우가 종종 있다. 일례로 다음을 보자.

> **정리.** 조밀 무계 전순서 이론 $T$는 양화사 제거 가능하다.

**증명.** 먼저 다음 개념을 정의한다.

> **정의.** 유한한 변수들의 **배열<sub>arrangement</sub>**이란, 변수들의 순서 관계의 무모순적인 논리곱을 의미한다.

예를 들어 다음은 $\lbrace v_1, v_3, v_7, v_8 \rbrace$의 배열이다.

$$
(v_1 < v_3) \land (v_8 \land v_7) \land (v_3 = v_8)
$$

증명의 핵심은 다음의 보조정리이다.

> **보조정리.** $\mathcal{L} = (<)$의 $\Delta_0$ 명제는 전순서 이론에서 모순과 동치이거나, 어떤 배열들의 논리합과 동치이다.

보조정리를 인정하고 본 정리를 증명해 보자. 양화사 제거 판별법에 의해, $\psi \in \Delta_0$에 대해 $\exists x \psi$가 양화사 제거 가능함을 보이면 된다. 보조정리에 의해 $\psi$는 $\theta_1 \lor \cdots \lor \theta_n$과 동치이며, 각 $\theta_i$는 변수들의 배열이다. $\exists$의 분배법칙에 의해,

$$
T \vdash \exists x \psi \leftrightarrow \Big( (\exists x \theta_1) \lor \cdots (\exists x \theta_n) \Big)
$$

이다. 그런데 조밀 무계 전순서에서는 배열 $\theta$에 대해, $\exists x \theta$는 $\theta$의 순서 관계를 한줄로 쭉 적은 뒤, $x$를 지운 명제와 동치이다. 예를 들어 $\exists x (v_1 < x) \land (x < v_2)$는 $\exists x (v_1 < x < v_2)$로 적을 수 있고, 이는 조밀성에 의해 $v_1 < v_2$와 동치이다. 한편 $\exists x (v_1 < x)$는 무계성에 의해 항진이며, $v_1 = v_1$과 동치이다. 따라서 위 식의 우항은 양화사 제거 가능하며, 이에 따라 $\exists x \psi$ 또한 양화사 제거 가능하다. ■

> **따름정리.** $T$는 완전하다.

**증명.** $T$가 양화사 제거 가능하므로, 표준 양화사 제거 형식에 의해, 최대 1개의 자유변수 $x$를 가지는 임의의 $\Delta_0$ 문장 $\psi \in \Delta_0$에 대해 $T \vdash \psi$이거나 $T \vdash \lnot\psi$임을 보이면 된다. 보조정리에 의해 $\psi$는 $x$의 배열과 동치이다. 그런데 가능한 $x$의 배열은 $x < x$와 $x = x$, 두 가지밖에 없다. 전자의 경우 모순이므로 $T \vdash \lnot\psi$이고, 후자의 경우 항진이므로 $T \vdash \psi$이다. ■

$T$가 양화사 제거 가능한 것과 대조적으로, 조밀 유계 전순서 이론 $T_{\mathrm{bd}}$는 양화사 제거 가능하지 않다. $a$가 $<$의 최솟값일 때, $\phi \equiv \exists y (y < x)$가 양화사 제거 가능하지 않기 때문이다. $T_{\mathrm{bd}}$도 전순서 이론이므로, 만약 $\phi$가 양화사 제거 가능했다면 보조정리에 의해 $\phi$는 $x < x$ 또는 $x = x$와 동치여야 하는데, $\phi$는 $x = a$일 때 참이고 그 외의 경우에는 거짓이기 때문에 전자와 후자 모두에 해당하지 않는다.

그러나 이 경우에는 양화사 제거가 가능한 $T_{\mathrm{bd}}$의 확장을 쉽게 찾을 수 있다. 먼저 언어 $\mathcal{L}$에 두 가지 새로운 상수 기호 $a$와 $b$를 추가한다. 그리고 $a$와 $b$가 각각 최솟값과 최댓값이라는 다음의 공리를 $T_{\mathrm{bd}}$에 추가한 것을 $T_{\mathrm{bd}}'$이라고 하자.

$$
\lnot \exists (x < a) \quad \lnot \exists (b < x)
$$

> **정리.** $T_{\mathrm{bd}}'$는 양화사 제거 가능하다.

**증명.** 연습문제

> **따름정리.** $T_{\mathrm{bd}}$는 완전하다.

**증명.** $T_{\mathrm{bd}}$의 보존적 확장<sub>conservative extension</sub>인 $T_{\mathrm{bd}}'$가 완전하므로, $T_{\mathrm{bd}}$ 또한 완전하다. ■
