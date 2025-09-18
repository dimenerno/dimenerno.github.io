---
layout: post
title: "초필터를 이용한 티호노프 정리의 증명"
date: 2025-08-11
tags: ["수학", "위상수학"]
related:
  - "불 대수 구조의 아이디얼과 필터"
---

> **티호노프 정리.** 콤팩트 공간들의 곱공간은 콤팩트 공간이다.

굉장히 단순하고 강력한 정리이지만, Munkres 등의 학부 위상 책을 보면 증명이 상당히 복잡하다. 아예 증명을 생략하는 책도 많은 듯하다. 하지만 초필터를 이용하면 매우 간단하게 이를 증명해 보일 수 있다.

## 1. 선행 개념

여기서 소개된 개념의 자세한 설명과 증명은 _Stephen Willard, General Topology_ 4장을 참고하라.

### 필터와 초필터

[이전 글](https://dimenerno.github.io/2025/07/18/boolean-algebra)에서 불 대수 구조의 필터를 소개했다. 위상공간에서 $\cup$과 $\cap$을 각각 논리합과 논리곱에 대응하면 불 대수 구조가 되므로, 위상공간에서 필터를 정의할 수 있다.

> **정의.** 위상공간 $X$에 대해, $X$ 위의 필터 $\mathcal{F}$는 다음 조건을 만족하는 $X$의 부분집합들의 모임이다.
>
> 1. $X \in \mathcal{F}, \varnothing \notin \mathcal{F}$
> 2. $A, B \in \mathcal{F} \implies A \cap B \in \mathcal{F}$
> 3. $A \in \mathcal{F}, A \subseteq B \implies B \in \mathcal{F}$

추가로 다음을 만족하면 초필터이다.

<blockquote>
<ol start="4">
  <li>$A \notin \mathcal{F} \implies X \setminus A \in \mathcal{F}$</li>
</ol>
</blockquote>

### 근방 필터

위상수학에서 중요한 필터 중 하나는 근방 필터이다. 먼저 근방을 다음과 같이 정의한다.

> **정의.** 위상공간 $X$에 대해 $N \subseteq X$가 $x \in X$의 **근방<sub>neighbourhood</sub>**이라는 것은, 어떤 열린집합 $U$가 존재하여 $x \in U \subseteq N$라는 것이다.

**근방은 열린집합일 필요가 없다는 점에 주목하라.** 근방이 열린집합일 경우 열린 근방이라고 한다. 이는 근방과 열린 근방을 동의어로 사용하는 일부 교재의 관행과 대조적이므로 주의를 요한다.

> **표기.** $x$의 근방들의 모임을 $\mathcal{N}(x)$ 또는 $\mathcal{N}\_x$라고 표기한다.

$\mathcal{N}(x)$는 필터임을 쉽게 확인할 수 있다. 이에 따라 $\mathcal{N}(x)$를 **근방 필터**라고 부른다.

### 필터의 생성

> **정의.** 위상공간 $X$의 부분집합들의 모임 $\mathcal{C}$가 다음을 만족할 때, $\mathcal{C}$를 **예비 필터<sub>prefilter</sub>** 또는 **필터 기저<sub>filter base</sub>**라고 부른다.
>
> 1. $\varnothing \notin \mathcal{C}$
> 2. $A, B \in \mathcal{C} \implies \exists C \in \mathcal{C} : C \subseteq A \cap B$

즉, 필터가 교집합에 대해 닫혀 있는 한편 예비 필터는 교집합에 대해 "약하게" 닫혀 있다. $\mathcal{C}$가 예비 필터일 때, $\mathcal{C}$로부터 다음과 같이 필터 $\mathcal{F}$를 **생성<sub>generate</sub>**할 수 있다.

$$
\mathcal{F} = \{ F \subseteq X : C \subseteq F \text{ for some } C \in \mathcal{C} \}
$$

또한 사상 $f: X \to Y$와 $X$ 위의 필터 $\mathcal{F}$가 주어졌을 때, 다음 집합족은 예비 필터이다.

$$
\mathcal{C} = \{ f(F) : F \in \mathcal{F} \}
$$

> **표기.** $\mathcal{C}$가 생성하는 필터를 $f(\mathcal{F})$와 같이 표기한다.

$f$가 전사<sub>onto</sub>일 경우 $\mathcal{C} = f(\mathcal{F})$라서 다루기 편하다. 또한 $f$가 전사일 때 다음이 (자명하게) 성립한다.

> **정리.** $f: X \to Y$가 전사이고 $\mathcal{F}$가 $X$ 위의 초필터일 때, $f(\mathcal{F})$는 $Y$의 초필터이다.

### 초필터로의 확장

모든 필터는 초필터로 확장될 수 있다. 증명은 [이전 글](https://dimenerno.github.io/2025/01/22/hypernaturals/)을 참고하라 (선택 공리를 사용한다).

> **정리.** $\mathcal{F}$가 $X$ 위의 필터일 때, $X$ 위의 초필터 $\mathcal{U}$가 존재하여 $\mathcal{U} \supseteq \mathcal{F}$이다.

### 필터의 수렴

> **정의.** 필터 $\mathcal{F}$가 $\mathcal{N}(x)$를 포함할 때 $\mathcal{F}$는 $x$로 **수렴**한다고 하며, $\mathcal{F} \to x$와 같이 적는다.

예를 들어 예비 필터 $\lbrace  (0, \epsilon) : \epsilon > 0 \rbrace $로 생성되는 필터는 $0$으로 수렴한다 (이 예시는 $\mathcal{F} \to x$라고 해서 $\mathcal{F}$의 모든 원소가 $x$를 원소로 가질 필요는 없음을 보여준다).

필터 수렴의 주요 성질은 다음과 같다.

> **정리.**
>
> 1. $E \subseteq X$에 대해 $x \in \overline{E}$일 필요충분조건은 어떤 필터 $\mathcal{F}$가 존재하여 $E \in \mathcal{F}$이고, $\mathcal{F} \to x$인 것이다.
> 2. $f: X \to Y$가 연속일 필요충분조건은 임의의 필터 $\mathcal{F}$에 대해 $\mathcal{F} \to x$라면 $f(\mathcal{F}) \to f(x)$인 것이다.

이는 1차 가산 공간에서 점렬로 폐포와 연속함수를 특징지었던 것을 일반화한 것이다.

곱공간에서 필터의 수렴은 각 요소 공간에서의 수렴과 동치이다. 즉, 다음이 성립한다.

> **정리.** 곱공간 $\prod\_{i \in I}X\_i$ 위의 필터 $\mathcal{F}$가 $x$로 수렴할 필요충분조건은 각각의 $i \in I$에 대해 $\pi\_i(\mathcal{F}) \to \pi\_i(x)$인 것이다.

## 2. 티호노프 정리의 증명

이제 티호노프 정리를 증명해 보자. 핵심은 다음의 보조정리이다.

> **보조정리.** $X$가 콤팩트할 필요충분조건은 $X$의 모든 초필터가 수렴하는 것이다.

#### 증명

$(\Rightarrow)$ $\mathcal{F}$가 수렴하지 않는 $X$의 초필터라고 하자. $\mathcal{F}$가 어느 점으로도 수렴하지 않는다는 것은, 임의의 $x \in X$에 대해 어떤 열린집합 $U\_x$가 존재하여 $U\_x \notin \mathcal{F}$라는 것이다. $\mathcal{F}$가 초필터이므로 $X \setminus U\_x \in \mathcal{F}$이다. 이제 $U\_x$들의 모임 $\mathcal{C} = \lbrace  U\_x : x \in X \rbrace $를 생각하자. $\mathcal{C}$는 $X$를 덮으며, $X$가 콤팩트하므로 유한 부분덮개 $\lbrace U\_{x_1}, \dots, U\_{x_n} \rbrace $을 가진다. 따라서,

$$
\begin{align}
&X \setminus (U_{x_1} \cup \dots \cup U_{x_n}) \\
&= (X \setminus U_{x_1}) \cap \dots \cap (X \setminus U_{x_n}) \\
&= \varnothing
\end{align}
$$

그런데 각 $1 \leq i \leq n$에 대해 $X \setminus U\_{x\_i} \in \mathcal{F}$이므로, 필터의 교집합 닫힘에 의해 $\varnothing \in \mathcal{F}$가 되어 모순이다. □

$(\Leftarrow)$ $X$가 콤팩트하지 않다고 하자. 그러면 어떤 $X$의 열린 덮개 $\mathcal{C}$가 존재하여 $\mathcal{C}$는 유한 부분덮개를 가지지 않는다. 따라서 다음과 같이 $\mathcal{P}$를 정의할 때,

$$
\mathcal{P} = \{ X \setminus (U_1 \cup \dots \cup U_n) : U_i \in \mathcal{C} \}
$$

$\mathcal{P}$는 유한 교집합에 대해 닫혀 있으며 공집합을 원소로 가지지 않으므로 예비 필터이다. 이에 따라 $\mathcal{P}$는 필터로 확장될 수 있으며, 이 필터는 초필터로 확장될 수 있다. 그러한 초필터를 $\mathcal{F}$라고 하자. 가정에 의해 $\mathcal{F}$는 어떤 점 $x$로 수렴한다. 즉, $\mathcal{N}(x) \subseteq \mathcal{F}$이다. 따라서 다음이 성립한다.

$$
x \in \bigcap_{F \in \mathcal{F}} \overline{F}
$$

그런데 이는 $\bigcap\_{P \in \mathcal{P}} \overline{P} = \bigcap\_{P \in \mathcal{P}} P = \varnothing$ ($\mathcal{C}$가 $X$의 덮개이므로) 에 모순된다. ■

이제 티호노프 정리는 거의 자명하게 따라 나온다.

> **정리.** 콤팩트 공간들의 곱공간은 콤팩트 공간이다.

#### 증명

각각의 $i \in I$에 대해 $X\_i$가 콤팩트 공간이라고 하자. $X$가 콤팩트할 필요충분조건은 임의의 $\prod\_{i \in I}$ 위의 초필터 $\mathcal{F}$가 수렴하는 것이고, $\mathcal{F}$가 수렴할 필요충분조건은 $\pi\_i(\mathcal{F})$가 $X\_i$에서 수렴하는 것이다. 그런데 $\pi\_i$는 전사이므로 $\pi\_i(\mathcal{F})$는 초필터이고, $X\_i$는 콤팩트하므로 $\pi\_i(\mathcal{F})$는 수렴한다. 이에 따라 $X$는 콤팩트하다. ■
