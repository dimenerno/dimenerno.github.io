---
layout: post
title: "닫힌집합과 보렐 집합에서의 연속체 가설"
date: 2025-09-23
tags: ["수학", "집합론", "위상수학"]
related:
---

연속체 가설은 $\aleph\_1 = 2^{\aleph\_0}$가 성립하는지에 관한 질문이다. 이는 비가산 집합 중 실수 집합보다 크기가 작은 집합이 있는지에 관한 질문과 같다. 잘 알려져 있듯이 연속체 가설은 ZFC에서 증명과 반증이 불가능하지만, 몇몇 제한적인 경우에 대해서는 증명할 수 있다. 일찍이 칸토어는 연속체 가설을 실수의 닫힌집합으로 제한할 경우 성립함을 증명했다.

> **정리.** $F \subseteq \mathbb{R}$이 닫힌집합이라면 $\|F\| = \aleph\_0$이거나 $\|F\| = 2^{\aleph\_0}$이다.

이 정리의 증명은 **완벽한 집합<sub>perfect set</sub>**이라는 개념을 사용한다. 이에 관해서는 예전에 [칸토어-벤딕슨 정리](https://dimenerno.github.io/2024/12/25/Cantor-Bendixson)를 다루며 소개한 적 있지만 다시 소개하겠다.

> **정의.** 위상공간 $X$에 대해 $P \subseteq X$가 완벽하다는 것은 $P = P'$이라는 것이다. ($P'$은 $X$에 대한 $P$의 극점<sub>limit point</sub>들의 집합)

일반적으로 부분집합 $A \subseteq X$에 대해 $A$와 $A'$이 서로 포함 관계가 아닌 이유는 두 가지이다:

1. $x$가 $A$의 고립점일 경우 $x \in A$이지만 $x \notin A'$
2. $x$가 $A$에 속하지 않는 극점일 경우 $x \notin A$이지만 $x \in A'$

따라서 완벽한 집합은 고립점을 가지지 않는 닫힌집합이다. 이에 따라, 어떤 닫힌집합 $F$가 주어졌을 때 $F$의 고립점들을 모두 '덜어' 내면 완벽한 집합이 되지 않을까 기대할 수 있다. 문제는, 고립점을 덜어 낸 집합이 또다시 고립점을 가질 수 있다는 것이다. 예를 들어,

$$
F = \mathbb{N} \cup \lbrace  m - 1/n : m \geq 0, n > 1 \rbrace
$$

일 때, $F$의 고립점들을 덜어 낸 집합은 $\mathbb{N}$으로 또다시 가산 개의 고립점을 가진다. 그러나 이같이 고립점을 '덜어' 내는 과정을 초한귀납적으로 반복한다면 다음의 흥미로운 결과를 얻을 수 있다.

> **칸토어-벤딕슨 정리.** $F \subseteq \mathbb{R}$가 닫힌집합이라면 어떤 가산집합 $C$와 완벽한 집합 $P$가 존재하여 $F = P \sqcup C$이다.

**증명.** 앞선 링크에 증명이 소개되어 있지만, 여기서는 칸토어의 증명을 소개한다.

초한귀납적으로 다음과 같이 정의하자.

$$
\begin{gather}
F_0 = F \\
F_{\alpha + 1} = F_\alpha' \\
F_\lambda = \bigcup_{\alpha < \lambda} F_\alpha \quad (\lim \lambda)
\end{gather}
$$

다음을 관찰하라.

1. 각 $F\_\alpha$는 닫힌집합이다.
2. $\alpha \leq \beta$라면 $F\_\alpha \supseteq F\_\beta$이다.
3. $F\_\alpha \setminus F\_{\alpha + 1}$은 $F\_\alpha$의 고립점들의 집합이다.
4. $\alpha \neq \beta$라면 $F\_{\alpha} \setminus F\_{\alpha + 1}$와 $F\_{\beta} \setminus F\_{\beta+1}$는 서로소이다.

만약 모든 $\alpha \in \mathrm{Ord}$에 대해 $F\_{\alpha} \setminus F\_{\alpha+1} \neq \varnothing$이었다면 $\mathcal{P}(F)$의 하르토그 수 $\gamma$에 대해 $f : \gamma \to \mathcal{P}(F); \alpha \mapsto F\_{\alpha} \setminus F\_{\alpha + 1}$가 단사이므로 모순이다. 따라서 $F\_{\xi} \setminus F\_{\xi+1} = \varnothing$인 $\xi$가 존재한다. 따라서 $P = F\_\xi$로 두면 $P$는 공집합이거나 완벽한 집합이다.

$C = F \setminus P$라고 하자. $\mathcal{B} = \lbrace  B\_n \rbrace $이 $\mathbb{R}$의 가산 기저라고 하자. 다음과 같이 $f: C \to \omega$를 정의한다.

$$
f(x) = \mathop{\arg \min}\limits_{n \in \omega} : B_n \cap F_\alpha = \{ x \} \quad (x \in F_\alpha \setminus F_{\alpha + 1})
$$

$f$가 well-defined이며 단사임을 확인하라. ■

> **정리.** $P \subseteq \mathbb{R}$이 공집합이 아닌 완벽한 집합이라면 $\|P\| = 2^{\aleph\_0}$이다.

**증명.** 다음의 두 보조정리를 증명한다.

> **보조정리.** $P \subseteq \mathbb{R}$이 공집합이 아닌 완벽한 집합이라면, 어떤 공집합이 아니며 완벽한 서로소 집합 $P\_1, P\_2 \subset P$가 존재한다.

_증명._ $\alpha = \inf P, \beta = \sup P$라고 하자 ($\alpha, \beta$는 $\pm \infty$일 수도 있다). $(\alpha, \beta) \subset P$라면 $\alpha < r < s < \beta$인 임의의 $r, s$에 대해 $P \cap (-\infty, r], P \cap [s, \infty)$가 조건을 만족한다. $(\alpha, \beta) \not\subset P$라면, 어떤 $x \in (\alpha, \beta)$가 존재하여 $x \notin P$이다. $P = P'$이므로, $x$는 $P$의 극점이 아니다. 따라서 어떤 충분히 작은 $\delta > 0$가 존재하여 $(x - \delta, x + \delta)$가 $F$와 서로소이고 $\alpha < x - \delta, x + \delta < \beta$이다. 이때 $P \cap (-\infty, x - \delta], P \cap [x + \delta, \infty)$가 조건을 만족한다. □

> **보조정리.** $P \subseteq \mathbb{R}$이 공집합이 아닌 완벽한 집합이라면, 임의의 $n > 0$에 대해 어떤 공집합이 아니며 완벽한 집합 $P' \subset P$가 존재하여 $\mathrm{diam} P' < 1/n$이다.

_증명._ $\mathcal{J} = \lbrace  (m/n, (m+1)/n) : m \in \mathbb{Z} \rbrace $에 대해, 어떤 $(k/n, (k+1)/n) \in \mathcal{J}$가 존재하여 $J \cap F \neq \varnothing$이다 (만약 그렇지 않다면 $P = \lbrace  m/n : m \in \mathbb{Z} \rbrace $이므로 완벽하지 않다). $E = F \cap [k/n, (k+1)/n]$이라고 하자. $E$는 닫힌집합이므로, $E$가 고립점을 가지지 않는다면 $E$는 완벽하다. 만약 $x \in E$가 고립점이라면 어떤 충분히 작은 $\delta > 0$가 존재하여 $E \cap (x - \delta, x + \delta) = \lbrace  x\rbrace $이고 $k/n < x - \delta, x + \delta < (k + 1)/n$이다. 이때 $F \cap (x - \delta, x + \delta) = \lbrace  x\rbrace $이므로 $x$는 $F$의 고립점이다. 이는 모순이므로, $E$는 완벽하다. □

$P$가 공집합이 아닌 완벽한 집합이라고 하자. 위 두 보조정리로부터, 선택 공리를 사용함으로써 다음과 같이 귀납적으로 정의할 수 있다.

- $P\_1, P\_2 \subset P, P\_1 \cap P\_2 = \varnothing, \mathrm{diam} P\_1, \mathrm{diam} P\_2 < 1/2$
- $P\_{11}, P\_{12} \subset P\_1, P\_{11} \cap P\_{12} = \varnothing, \mathrm{diam} P\_{11}, \mathrm{diam} P\_{12} < 1/4$
- $P\_{21}, P\_{22} \subset P\_2, P\_{21} \cap P\_{22} = \varnothing, \mathrm{diam} P\_{21}, \mathrm{diam} P\_{22} < 1/4$
- $P\_{111}, P\_{112} \subset P\_{11}, P\_{111} \cap P\_{112} = \varnothing, \mathrm{diam} P\_{111}, \mathrm{diam} P\_{112} < 1/8$
- ...

모든 $P\_i$의 교집합을 $A$라고 하자. $A$는 칸토어 집합과 크기가 같다. 그런데 칸토어 집합은 실수와 크기가 같으므로, $\|P\| = 2^{\aleph\_0}$이다. ■

위 정리와 칸토어-벤딕슨 정리로부터 다음 결과가 얻어진다.

> **따름정리.** $F \subseteq \mathbb{R}$이 닫힌집합이라면 $\|F\| = \aleph\_0$이거나 $\|F\| = 2^{\aleph\_0}$이다.

참고로 칸토어-벤딕슨 정리와 비슷한 결과가 보렐 집합에서 성립한다.

> **정리.** $B \subseteq \mathbb{R}$이 비가산 보렐 집합이라면 $B$는 완벽한 집합을 포함한다.

**증명.** 생략.

따라서 보다 일반적으로 다음이 성립한다.

> **따름정리.** $B \subseteq \mathbb{R}$이 보렐 집합이라면 $\|B\| = \aleph\_0$이거나 $\|F\| = 2^{\aleph\_0}$이다.
