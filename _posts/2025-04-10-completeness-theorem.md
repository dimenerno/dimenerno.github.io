---
layout: post
title: "완전성 정리와 뢰벤하임-스콜렘 정리"
date: 2025-04-10
tags: ["수학", "논리학"]
related:
---

괴델의 완전성 정리와 뢰벤하임-스콜렘 정리는 수리논리학의 가장 기본적인 정리들이다. 그래도 기본기를 다져보는 김에, 이 정리들의 증명을 복습해 보았다. 이 글에서 $T$는 언어 $\mathcal{L}$의 1차 논리 이론으로 간주한다.

## 괴델의 완전성 정리

> **괴델의 완전성 정리.** $T \vDash \phi$라면 $T \vdash \phi$이다.

### 증명

다음의 동치인 진술을 증명한다. (연습문제: 왜 동치인가?)

> $T$가 건전한<sub>consistent</sub> 이론이라면, $T$는 모델을 가진다.

#### 1. $\mathcal{L}$을 스콜렘 언어 $\mathcal{L}\_S$로 확장하기

$\kappa = \mathrm{max}(\aleph\_0, \|\mathcal{L}\|)$라고 하자. $T$에 상수 $\lbrace  c\_\alpha \rbrace \_{\alpha \in \kappa}$ ($\alpha$는 서수)를 추가한 언어를 $\mathcal{L}\_S$라고 하자. 여기서 첨자 $S$는 각 상수가 **스콜렘 상수<sub>Skolem constant</sub>**의 역할을 담당할 것임을 의미한다.

#### 2. $T$를 헨킨 이론 $T\_H$로 확장하기

$\mathcal{L}\_S$의 명제 중 하나의 자유변수를 가지는 명제들의 집합의 크기는 $\kappa$와 같으므로, 정렬 원리로부터 $\lbrace  P\_\alpha \rbrace \_{\alpha \in \kappa}$와 같이 나타낼 수 있다. 이로부터 다음의 문장 집합을 정의한다.

$$
\Sigma = \{ Q_\alpha := \exists x P_\alpha \rightarrow P_\alpha(c_\lambda) \mid \alpha \in \kappa \}
$$

여기서 $c\_\lambda$는 $P\_\alpha$와 $Q\_\beta \; (\beta < \alpha)$에 등장하지 않는 상수 중 첨자가 최소인 상수이다(그러한 상수가 존재함은 서수가 정렬이라는 사실로부터 보장된다). 이제 $T\_H = T \cup \Sigma$로 정의한다. $T\_H$를 **헨킨 이론<sub>Henkin theory</sub>**이라고 하고, $Q\_\alpha$를 헨킨 공리라고 한다.

#### 3. $T\_H$를 극대적으로 건전한 이론 $\overline{T\_H}$로 확장하기

> **린덴바움 보조정리.** $T$가 건전한 이론일 때, $T$를 확장하는 극대적으로 건전한 이론 $\overline{T}$가 존재한다. 즉, $T \subseteq T'$이고 임의의 $\mathcal{L}$ 문장 $\phi$에 대해 $\phi \in \overline{T}$거나 $\lnot\phi \in \overline{T}$이다.

**증명.** $T$를 확장하는 건전한 이론들의 모임에 $\subseteq$로 순서 관계를 준 뒤, 초른의 보조정리를 적용한다.

$T$가 건전한 이론일 때 $T\_H$ 또한 건전함을 쉽게 보일 수 있다. 따라서 린덴바움 보조정리에 의해 $T\_H$를 확장하는 극대적으로 건전한 이론 $\overline{T\_H}$가 존재한다.

#### 4. $\overline{T\_H}$의 표준적<sub>canonical</sub> 모델 정의하기

$c\_\alpha \sim c\_\beta$를 $(c\_\alpha = c\_\beta) \in \overline{T\_H}$일 때 성립하는 관계로 정의하자. $\overline{T\_H}$가 건전한 이론이라는 사실로부터 $\sim$이 동치 관계임을 보일 수 있다. 따라서 상수들의 동치류 $[c\_\alpha]$가 잘 정의된다. 이제 다음과 같이 $\mathcal{L}\_S$의 구조 $\mathfrak{M}$을 정의한다.

1. 상수: $c\_\alpha^{\mathfrak{M}} = [c\_\alpha]$
2. 술어: $R^{\mathfrak{M}}(c\_{\alpha_1}^\mathfrak{M}, \dots, c\_{\alpha_n}^{\mathfrak{M}}) \iff \overline{T_H} \vdash R(c\_{\alpha_1}, \dots, c\_{\alpha_n}) $
3. 함수: $f(c\_\alpha^\mathfrak{M}) = c\_\beta^\mathfrak{M} \iff T\_H \vdash \exists x (f(c\_\alpha) = x) \rightarrow f(c\_\alpha) = c\_\beta$

$\overline{T\_H}$가 극대적으로 건전하므로 2가 잘 정의되고, 헨킨 이론이므로 3이 잘 정의된다. 따라서 $\mathfrak{M}$이 잘 정의되며, $\mathfrak{M}$이 $\overline{T\_H}$의 모델임을 쉽게 확인할 수 있다. 그리고 $\mathfrak{M}$은 $T$의 모델이기도 하므로, $T$는 모델을 가진다. ■

**Remark 1.** 완전성 정리의 증명은 정렬 원리와 초른의 보조정리를 사용한다는 점에서 선택 공리에 의존적이다. 쾨니히 보조정리나 의존적 선택 공리와 같이 더 약한 유형의 선택 공리로도 증명할 수 있긴 하다.

**Remark 2.** **콤팩트성 정리**가 완전성 정리의 따름정리로서 얻어진다. (연습문제)

**Remark 3.** 완전성 정리의 증명에서 구축하는 모델의 크기는 $\kappa = \mathrm{max}(\aleph\_0, \|\mathcal{L}\|)$를 넘지 않는다. 마지막 단계에서 동치류를 취하므로 $\kappa$와 같다는 보장은 없다.

## 뢰벤하임-스콜렘 정리

> **뢰벤하임-스콜렘 정리.** $T$가 무한 모델을 가진다고 하자. 임의의 $\kappa \geq \mathrm{max}(\aleph\_0, \|\mathcal{L}\|)$에 대해, 크기가 $\kappa$인 $T$의 모델이 존재한다.

### 증명

#### 하향 뢰벤하임-스콜렘 정리

> **하향 뢰벤하임-스콜렘 정리.** $T$는 크기가 $\mathrm{max}(\aleph\_0, \|\mathcal{L}\|)$을 넘지 않는 모델을 가진다.

**증명.** Remark 2에서 즉시 얻어진다. □

#### 상향 뢰벤하임-스콜렘 정리

> **상향 뢰벤하임-스콜렘 정리.** $T$가 무한 모델을 가진다고 하자. 임의의 무한 기수 $\kappa$에 대해, 크기가 $\kappa$ 이상인 $T$의 모델이 존재한다.

**증명.** $\mathcal{L}'$을 $\mathcal{L}$에 상수 $\lbrace  c\_\alpha \rbrace \_{\alpha \in \kappa}$를 추가한 언어로 정의하자. 다음의 $\mathcal{L}'$-문장 집합을 정의하자.

$$
\Sigma = \{ c_\alpha \neq c_\beta : \alpha, \beta \in \kappa, \alpha \neq \beta \}
$$

$T' = T \cup \Sigma$라고 하자. _$T$가 무한 모델 $\mathfrak{M}$을 가지므로,_ 임의의 $T'$의 유한 부분이론은 $\mathfrak{M}$에 의해 만족된다. 따라서 콤팩트성 정리에 의해 $T'$은 건전하며, 완전성 정리에 의해 모델을 가진다. $\Sigma$는 $T'$의 모델이 적어도 $\kappa$개의 원소를 가질 것을 요구하므로, $T'$은 크기가 $\kappa$ 이상인 모델을 가지며, 이에 따라 $T$ 또한 크기가 $\kappa$ 이상인 모델을 가진다. □

#### 뢰벤하임-스콜렘 정리

$\kappa \geq \mathrm{max}(\aleph\_0, \|\mathcal{L}\|)$라고 하자. $\mathcal{L}'$과 $T'$을 앞선 바와 같이 정의한다.

$\mathrm{max}(\aleph\_0, \|\mathcal{L}'\|) = \kappa$이므로 하향 뢰벤하임-스콜렘 정리에 의해 $T'$은 크기가 $\kappa$를 넘지 않는 모델을 가진다. 그런데 상향 뢰벤하임-스콜렘 정리의 증명에서 지적했듯이 $T'$의 모든 모델은 크기가 $\kappa$ 이상이다. 따라서 $T'$은 크기가 정확히 $\kappa$인 모델을 가지며, 이에 따라 $T$ 또한 크기가 정확히 $\kappa$인 모델을 가진다. ■
