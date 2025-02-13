---
layout: post
title: "어드조인트에 대한 세 가지 접근"
date: 2025-02-10
tags: [수학, 범주론]
---

> 본문의 내용은 Tom Leinster, *Basic Category Theory*에 기반한다.

$\mathcal{A}, \mathcal{B}$가 범주<sub>category</sub>이고, $F: \mathcal{A} \to \mathcal{B}, G: \mathcal{B} \to \mathcal{A}$가 함자<sub>functor</sub>라고 하자.

## 1. 자연성 공리<sub>naturality axiom</sub>를 이용한 어드조인트의 정의

$F \dashv G$라는 것은 임의의 $A \in \mathcal{A}, B \in \mathcal{B}$에 대해 일대일대응 $\Psi_{A, B} : \mathrm{Hom}_\mathcal{A}(A, G(B)) \to \mathrm{Hom}_\mathcal{B}(F(A), B)$가 존재하여, 임의의 $p: A' \to A, q: B \to B'$에 대해 다음 가환 도식<sub>commutative diagram</sub>을 만족한다는 것이다.

<!-- https://q.uiver.app/#q=WzAsNixbMCwwLCJcXG1hdGhybXtIb219KEEnLCBHKEIpKSJdLFswLDEsIlxcbWF0aHJte0hvbX0oQSwgRyhCKSkiXSxbMCwyLCJcXG1hdGhybXtIb219KEEsIEcoQicpKSJdLFsyLDAsIlxcbWF0aHJte0hvbX0oRihBJyksIEIpIl0sWzIsMSwiXFxtYXRocm17SG9tfShGKEEpLCBCKSJdLFsyLDIsIlxcbWF0aHJte0hvbX0oRihBKSwgQicpIl0sWzAsMywiXFxQc2lfe0EnLCBCfSJdLFsxLDQsIlxcUHNpX3tBLCBCfSJdLFsyLDUsIlxcUHNpX3tBLCBCJ30iXSxbMCwxLCIoLSlcXGNpcmMgcCIsMl0sWzEsMiwiRyhxKVxcY2lyYyAoLSkiLDJdLFszLDQsIigtKVxcY2lyYyBGKHApIl0sWzQsNSwicSBcXGNpcmMgKC0pIl1d -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMCwwLCJcXG1hdGhybXtIb219KEEnLCBHKEIpKSJdLFswLDEsIlxcbWF0aHJte0hvbX0oQSwgRyhCKSkiXSxbMCwyLCJcXG1hdGhybXtIb219KEEsIEcoQicpKSJdLFsyLDAsIlxcbWF0aHJte0hvbX0oRihBJyksIEIpIl0sWzIsMSwiXFxtYXRocm17SG9tfShGKEEpLCBCKSJdLFsyLDIsIlxcbWF0aHJte0hvbX0oRihBKSwgQicpIl0sWzAsMywiXFxQc2lfe0EnLCBCfSJdLFsxLDQsIlxcUHNpX3tBLCBCfSJdLFsyLDUsIlxcUHNpX3tBLCBCJ30iXSxbMCwxLCIoLSlcXGNpcmMgcCIsMl0sWzEsMiwiRyhxKVxcY2lyYyAoLSkiLDJdLFszLDQsIigtKVxcY2lyYyBGKHApIl0sWzQsNSwicSBcXGNpcmMgKC0pIl1d&embed" width="724" height="432" style="border-radius: 8px; border: none;"></iframe>

편의를 위해 $f: A \to G(B)$에 대해 $\Psi_{A, B}(f) = \bar{f}$, 그리고 $g: F(A) \to B$에 대해 $\Psi_{A, B}^{-1}(g) = \bar{g}$와 같이 표기한다. 이에 따라 위의 가환 도식을 다음과 같이 표현할 수 있다.

$$
\begin{gather}
\overline{A \xrightarrow{f} G(B) \xrightarrow{G(q)} G(B') } = F(A) \xrightarrow{\bar{f}} B \xrightarrow{q} B' \\
\overline{F(A') \xrightarrow{F(p)} F(A) \xrightarrow{g} B} = A' \xrightarrow{p} A \xrightarrow{\bar{g}} G(B) \\\\
\mathrm{i.e.}\\\\
\overline{G(q) \circ f} = q \circ \bar{f}\\
\overline{g \circ F(p)} = \bar{g} \circ p
\end{gather}
$$

위 두 조건을 자연성 공리라고 부른다. 자연성 공리로부터 다음을 증명할 수 있다.

> **정리 1.** $\eta_A := \overline{1_{F(A)}} : A \to GF(A)$와 같이 정의된 변환 $\eta: 1_{\mathcal{A}} \to GF$는 자연적 변환<sub>natural transformation</sub>이다. 그리고 $\epsilon_B := \overline{1_G{B}} : FG(B) \to B$와 같이 정의된 변환 $\epsilon: FG \to 1_{\mathcal{B}}$ 또한 자연적 변환이다. $\eta$를 **단원**<sub>unit</sub>이라고 부르고, $\epsilon$을 **쌍단원**<sub>counit</sub>이라고 부른다.

**증명.** 다음 가환 도식으로부터 얻어진다.

<!-- https://q.uiver.app/#q=WzAsNixbMCwwLCJcXG1hdGhybXtIb219KEEnLCBHRihBJykpIFxcbWlkX3tcXGV0YV97QSd9fSJdLFswLDEsIlxcbWF0aHJte0hvbX0oQSwgR0YoQScpKSBcXG1pZF97e1xcZXRhX3tBJ30gXFxjaXJjIGZ9LFxcOyB7R0YoZikgXFxjaXJjIFxcZXRhX0F9fSJdLFsyLDAsIlxcbWF0aHJte0hvbX0oRihBJyksIEYoQScpKSBcXG1pZF97MV97RihBJyl9fSJdLFsyLDEsIlxcbWF0aHJte0hvbX0oRihBKSwgRihBJykpIFxcbWlkX3tGKGYpfSJdLFswLDIsIlxcbWF0aHJte0hvbX0oQSwgR0YoQSkpIFxcbWlkX3tcXGV0YV9BfSJdLFsyLDIsIlxcbWF0aHJte0hvbX0oRihBKSwgRihBKSkgXFxtaWRfezFfe0YoQSl9fSJdLFswLDEsIigtKVxcY2lyYyBmIiwyXSxbMiwzLCIoLSlcXGNpcmMgRihmKSJdLFswLDIsIlxcb3ZlcmxpbmV7KC0pfSIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dLFs0LDEsIkdGKGYpIFxcY2lyYyAoLSkiXSxbNSwzLCJGKGYpIFxcY2lyYyAoLSkiLDJdLFs0LDUsIlxcb3ZlcmxpbmV7KC0pfSIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dLFsxLDMsIlxcb3ZlcmxpbmV7KC0pfSIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dXQ== -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMCwwLCJcXG1hdGhybXtIb219KEEnLCBHRihBJykpIFxcbWlkX3tcXGV0YV97QSd9fSJdLFswLDEsIlxcbWF0aHJte0hvbX0oQSwgR0YoQScpKSBcXG1pZF97e1xcZXRhX3tBJ30gXFxjaXJjIGZ9LFxcOyB7R0YoZikgXFxjaXJjIFxcZXRhX0F9fSJdLFsyLDAsIlxcbWF0aHJte0hvbX0oRihBJyksIEYoQScpKSBcXG1pZF97MV97RihBJyl9fSJdLFsyLDEsIlxcbWF0aHJte0hvbX0oRihBKSwgRihBJykpIFxcbWlkX3tGKGYpfSJdLFswLDIsIlxcbWF0aHJte0hvbX0oQSwgR0YoQSkpIFxcbWlkX3tcXGV0YV9BfSJdLFsyLDIsIlxcbWF0aHJte0hvbX0oRihBKSwgRihBKSkgXFxtaWRfezFfe0YoQSl9fSJdLFswLDEsIigtKVxcY2lyYyBmIiwyXSxbMiwzLCIoLSlcXGNpcmMgRihmKSJdLFswLDIsIlxcb3ZlcmxpbmV7KC0pfSIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dLFs0LDEsIkdGKGYpIFxcY2lyYyAoLSkiXSxbNSwzLCJGKGYpIFxcY2lyYyAoLSkiLDJdLFs0LDUsIlxcb3ZlcmxpbmV7KC0pfSIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dLFsxLDMsIlxcb3ZlcmxpbmV7KC0pfSIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9fX1dXQ==&embed" width="1061" height="432" style="border-radius: 8px; border: none;"></iframe>

> **정리 2.** $f: A \to G(B), g: F(A) \to B$에 대해 다음이 성립한다.
>
> $$
> \begin{gather}
> \bar{f} = \epsilon_B \circ F(f) \\
> \bar{g} = G(g) \circ \eta_A
> \end{gather}
> $$

**증명.** 다음 가환 도식으로부터 얻어진다.

<!-- https://q.uiver.app/#q=WzAsNixbMCwwLCJcXG1hdGhybXtIb219KEEsIEdGKEEpKSBcXG1pZF97XFxldGFfQX0iXSxbMCwxLCJcXG1hdGhybXtIb219KEEsIEcoQikpIFxcbWlkX3tHKGcpIFxcY2lyY1xcZXRhX0EgPVxcYmFye2d9fSJdLFsyLDAsIlxcbWF0aHJte0hvbX0oRihBKSwgRihBKSkgXFxtaWRfezFfe0YoQSl9fSJdLFsyLDEsIlxcbWF0aHJte0hvbX0oRihBKSwgQikgXFxtaWRfe2d9Il0sWzEsMCwiXFxvdmVyc2V0e1xcb3ZlcmxpbmV7KC0pfX17XFxsb25ncmlnaHRhcnJvd30iXSxbMSwxLCJcXG92ZXJzZXR7XFxvdmVybGluZXsoLSl9fXtcXGxvbmdyaWdodGFycm93fSJdLFswLDEsIkcoZykgXFxjaXJjICgtKSIsMl0sWzIsMywiZyBcXGNpcmMgKC0pIl1d -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMCwwLCJcXG1hdGhybXtIb219KEEsIEdGKEEpKSBcXG1pZF97XFxldGFfQX0iXSxbMCwxLCJcXG1hdGhybXtIb219KEEsIEcoQikpIFxcbWlkX3tHKGcpIFxcY2lyY1xcZXRhX0EgPVxcYmFye2d9fSJdLFsyLDAsIlxcbWF0aHJte0hvbX0oRihBKSwgRihBKSkgXFxtaWRfezFfe0YoQSl9fSJdLFsyLDEsIlxcbWF0aHJte0hvbX0oRihBKSwgQikgXFxtaWRfe2d9Il0sWzEsMCwiXFxvdmVyc2V0e1xcb3ZlcmxpbmV7KC0pfX17XFxsb25ncmlnaHRhcnJvd30iXSxbMSwxLCJcXG92ZXJzZXR7XFxvdmVybGluZXsoLSl9fXtcXGxvbmdyaWdodGFycm93fSJdLFswLDEsIkcoZykgXFxjaXJjICgtKSIsMl0sWzIsMywiZyBcXGNpcmMgKC0pIl1d&embed" width="952" height="304" style="border-radius: 8px; border: none;"></iframe>

## 2. 단원과 쌍단원을 이용한 어드조인트의 정의

$F \dashv G$라는 것은 어떤 자연적 변환 $\eta: 1_{\mathcal{A}} \to GF, \epsilon: FG \to 1_{\mathcal{B}}$가 존재하여, 임의의 $A \in \mathcal{A}, B \in \mathcal{B}$에 대해 다음 가환 도식을 언제나 만족한다는 것이다.

<!-- https://q.uiver.app/#q=WzAsNixbMCwwLCJGKEEpIl0sWzEsMCwiXFw7RkdGKEEpIl0sWzEsMSwiRihBKSJdLFsyLDAsIkcoQikiXSxbMywwLCJcXDtHRkcoQikiXSxbMywxLCJHKEIpIl0sWzAsMSwiRihcXGV0YV9BKSJdLFsxLDIsIlxcZXBzaWxvbl97RihBKX0iXSxbMCwyLCIxX3tGKEEpfSIsMl0sWzMsNCwiXFxldGFfe0coQil9Il0sWzQsNSwiRyhcXGVwc2lsb25fQikiXSxbMyw1LCIxX3tHKEIpfSIsMl1d -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMCwwLCJGKEEpIl0sWzEsMCwiXFw7RkdGKEEpIl0sWzEsMSwiRihBKSJdLFsyLDAsIkcoQikiXSxbMywwLCJcXDtHRkcoQikiXSxbMywxLCJHKEIpIl0sWzAsMSwiRihcXGV0YV9BKSJdLFsxLDIsIlxcZXBzaWxvbl97RihBKX0iXSxbMCwyLCIxX3tGKEEpfSIsMl0sWzMsNCwiXFxldGFfe0coQil9Il0sWzQsNSwiRyhcXGVwc2lsb25fQikiXSxbMyw1LCIxX3tHKEIpfSIsMl1d&embed" width="706" height="304" style="border-radius: 8px; border: none;"></iframe>

위 두 조건을 삼각 항등식<sub>triangle identity</sub>이라고 부른다.

## 3. 초기 대상<sub>initial object</sub>을 이용한 어드조인트의 정의

> **정의.** $P: \mathcal{A} \to \mathcal{C}$, $Q: \mathcal{B} \to \mathcal{C}$가 함자일 때, **콤마 범주<sub>comma category</sub>** $(P \Rightarrow Q)$를 다음과 같이 정의한다.
>
> 대상: $\mathcal{C}$의 사상 $h: P(A) \to Q(B)$에 대해, 삼중쌍<sub>triplet</sub> (A, h, B)
> 사상: 다음의 가환 도식이 성립할 때, $(f, g): (A, h, B) \to (A', h', B')
>
> <iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJQKEEpIl0sWzIsMCwiUChBJykiXSxbMCwxLCJRKEIpIl0sWzIsMSwiUShCJykiXSxbMCwyLCJoIiwyXSxbMSwzLCJoJyJdLFswLDEsIlAoZikiXSxbMiwzLCJRKGcpIiwyXV0=&embed" width="461" height="304" style="border-radius: 8px; border: none;"></iframe>

$F \dashv G$라는 것은 어떤 자연적 변환 $\eta: 1_{\mathcal{A}} \to GF$가 존재하여, 각 $A \in \mathcal{A}$에 대해 $A$를 홑원소 범주 $\mathbf{1}$에서 $\mathcal{A}$로 가는 함자 $A: 1 \mapsto A$로 간주했을 때 $\eta_A : A \to GF(A)$가 콤마 범주 $(A \Rightarrow G)$의 초기 대상이라는 것이다.

## 4. 동치 증명

1, 2, 3의 정의는 모두 동치이다. 구체적으로 다음의 정리가 성립한다.

> **정리 3.** $\mathcal{A}, \mathcal{B}$가 범주이고 $F: \mathcal{A} \to \mathcal{B}, G: |mathcal{B} \to \mathcal{A}$가 함자라고 하자. 1, 2, 3은 서로 일대일 대응된다.
>
> 1. 자연성 공리를 만족하는 일대일대응 $\Psi$
> 2. 삼각 항등식을 만족하는 자연적 변환의 쌍 $(\eta: 1_{\mathcal{A}} \to GF, \epsilon: FG \to 1_{\mathcal{B}})$
> 3. 각 $A \in \mathcal{A}$에 대해 $\eta_A : A \to GF(A)$가 $(A \Rightarrow G)$의 초기 대상이 되도록 하는 자연적 변환 $\eta: 1_{\mathcal{A}} \to GF$

**증명.** 1과 2가 일대일 대응됨을 보이고, 2와 3이 일대일 대응됨을 보인다.

#### 1과 2는 일대일 대응된다.

$\Psi$가 주어졌을 때, $\eta$와 $\epsilon$을 각각 단원과 쌍단원으로 정의한다. 이때, $\eta$와 $\epsilon$이 삼각 항등식을 만족함은 정리 2로부터 쉽게 따라 나온다.

역으로 삼각 항등식을 만족하는 자연적 변환의 쌍 $(\eta, \epsilon)$이 주어졌다고 하자. 이로부터 다음과 같이 $\Psi$를 정의한다. $f: A \to G(B), g: F(A) \to B$에 대해,

$$
\begin{gather}
\Psi_{A, B}(f) = \bar{f} = \epsilon_B \circ F(f) \\
\Psi_{A, B}^{-1} = \bar{g} = G(g) \circ \eta_A
\end{gather}
$$

먼저 $\Psi_{A, B}^{-1}$이 실제로 $\Psi_{A, B}$의 역사상임을, 즉 $\bar{\bar{g}} = g, \bar{\bar{f}} = f$임을 보인다. 전자는 다음 가환 도식으로부터 얻어진다. 후자는 도식에서 F, G를 각각 G, F로 바꾼 뒤 적절히 쌍대<sub>dual</sub>을 취하면 된다.

<!-- https://q.uiver.app/#q=WzAsNixbMCwwLCJGKEEpIl0sWzEsMCwiRkdGKEEpIl0sWzEsMSwiRihBKSJdLFsyLDAsIkZHKEIpIl0sWzIsMSwiQiJdLFsxLDMsIlxcYnVsbGV0Il0sWzEsMywiRkcoZykiXSxbMiw0LCJnIl0sWzEsMiwiXFxlcHNpbG9uX3tGKEEpfSIsMl0sWzMsNCwiXFxlcHNpbG9uX0IiXSxbMCwxLCJGKFxcZXRhX0EpIl0sWzAsMiwiMSIsMix7ImN1cnZlIjoyfV1d -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNixbMCwwLCJGKEEpIl0sWzEsMCwiRkdGKEEpIl0sWzEsMSwiRihBKSJdLFsyLDAsIkZHKEIpIl0sWzIsMSwiQiJdLFsxLDMsIlxcYnVsbGV0Il0sWzEsMywiRkcoZykiXSxbMiw0LCJnIl0sWzEsMiwiXFxlcHNpbG9uX3tGKEEpfSIsMl0sWzMsNCwiXFxlcHNpbG9uX0IiXSxbMCwxLCJGKFxcZXRhX0EpIl0sWzAsMiwiMSIsMix7ImN1cnZlIjoyfV1d&embed" width="526" height="560" style="border-radius: 8px; border: none;"></iframe>

이제 $\Psi$가 자연성 공리를 만족함을 보인다. 한쪽 공리만 보이도록 한다. $f: A \to G(B), q: B \to B'$에 대해 $\overline{G(q) \circ f} = q \circ \bar{f}$임을 보인다. 먼저,

$$
\overline{G(q) \circ f} = \epsilon_{B'} \circ FG(q) \circ F(f)
$$

이고,

$$
q \circ \bar{f} = q \circ \epsilon_B \circ F(f)
$$

이므로, $\epsilon_{B'} \circ FG(q) = q \circ \epsilon_B$임을 보이면 충분하다. 이것은 자연적 변환의 정의에 다름 아니다. 따라서 $\Psi$는 자연성 공리를 만족한다.

#### 2와 3은 일대일 대응된다.

삼각 항등식을 만족하는 자연적 변환의 쌍 $(\eta, \epsilon)$이 주어졌을 때, 각 $A \in \mathcal{A}$에 대해 $\eta_A : A \to GF(A)$가 $(A \Rightarrow G)$의 초기 대상임을 보이자.

역으로 $\eta$가 각 $A \in \mathcal{A}$에 대해 $\eta_A : A \to GF(A)$가 $(A \Rightarrow G)$의 초기 대상이 되도록 하는 자연적 변환일 때, 어떤 $\epsilon: FG \to 1_{\mathcal{B}}$가 유일하게 존재하여 $(\eta, \epsilon)$이 삼각 항등식을 만족함을 보이자.
