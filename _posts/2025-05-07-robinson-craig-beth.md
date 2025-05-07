---
layout: post
title: "로빈슨, 크레이그, 베스의 정리"
date: 2025-05-07
tags: ["수학", "논리학", "모델론"]
related:
---

### 초등적 병합 성질<sub>Elementary amalgamation property</sub>

> **정리.** $\mathcal{L}$-구조 $\mathfrak{A}$와 $\mathcal{L}'$-구조 $\mathfrak{B}$에 대해, $\mathfrak{B}$의 $\mathcal{L}$-퇴화<sub>$\mathcal{L}$-reduct</sub>가 $\mathfrak{A}$와 초등적으로 동등<sub>elementarily equivalent</sub>하다고 하자. 이 때, $\mathcal{L}'$-구조 $\mathfrak{C}$가 존재하여, $f: \mathfrak{A} \to \mathfrak{C}$가 $\mathcal{L}$의 [초등적 임베딩](https://dimenerno.github.io/2025/05/01/elementary-embedding/)이고 $g: \mathfrak{B} \to \mathfrak{C}$가 $\mathcal{L}'$의 초등적 임베딩이다.
>
> <img src="/public/elementary-amalgamation-2.png" style="width: 100%; max-width: 130px; margin: 1em auto; mix-blend-mode: multiply">

**증명.** [이 글](https://dimenerno.github.io/2025/05/01/elementary-embedding/)의 표기법을 따라, 언어 $L\_\mathfrak{A}$의 이론 $E(\mathfrak{A})$와 언어 $L'\_\mathfrak{B}$의 이론 $E(\mathfrak{B})$를 생각하자. $T = E(\mathfrak{A}) \cup E(\mathfrak{B})$는 언어 $\mathcal{L}'\_{\mathfrak{AB}} = \mathcal{L}\_\mathfrak{A} \cup \mathcal{L}\_\mathfrak{B}$의 이론이다. $T$가 모델 $\mathfrak{C}$를 가짐을 보이자.

만약 $T$가 모델이 없다면 $T$는 모순적이다. 따라서 콤팩트성 정리에 의해 어떤 $\mathcal{L}$-명제 $\phi$와 $\mathcal{L}'$-명제 $\psi$가 존재하여, 적절한 $\lbrace  a\_i \rbrace  \subset \mathcal{L}\_\mathfrak{A}$, $\lbrace  b\_j \rbrace  \subset \mathcal{L}\_\mathfrak{B}$에 대해,

$$
\lbrace  \phi(a_1, \dots, a_n), \psi(b_1, \dots, b_m) \rbrace
$$

이 모순적이다. $\mathfrak{B} \vDash \psi(b\_1, \dots, b\_m)$이므로, $\mathfrak{B} \vDash \phi(a\_1, \dots, a\_n)$를 만족하도록 상수 $a\_1, \dots, a\_n$을 $\mathfrak{B}$의 정의역에 대응시키는 방법이 존재하지 않아야 한다. 즉,

$$
\mathfrak{B} \not\vDash \exists x_1, \dots x_n \; \phi(x_1, \dots, x_n)
$$

그런데 $\mathfrak{B}$의 $\mathcal{L}$-퇴화가 $\mathfrak{A}$와 초등적으로 동등하며, 위 식의 우변이 $\mathcal{L}$-문장이고, $\mathfrak{A}$가 해당 문장을 만족하므로 이는 모순이다. 따라서 $T$는 모델 $\mathfrak{C}$를 가진다. 그리고 $\mathfrak{C}$는 $E(\mathfrak{A})$와 $E(\mathfrak{B})$의 모델이므로, $\mathfrak{A}$와 $\mathfrak{B}$는 $\mathfrak{C}$로 자연스럽게 초등적으로 임베딩된다. ■

### 로빈슨 건전성 정리

> **정리.** $\mathcal{L} = \mathcal{L}\_1 \cap \mathcal{L}\_2$라고 하자. $T$가 $\mathcal{L}$의 (의미론적으로) 완전한<sub>complete</sub> 이론이고, $T\_1$과 $T\_2$가 각각 $T$를 확장하는 건전한<sub>consistent</sub> $\mathcal{L}\_1, \mathcal{L}\_2$ 이론일 때, $T\_1 \cup T\_2$는 $\mathcal{L}\_1 \cup \mathcal{L}\_2$ 이론으로서 건전하다.

**증명.** $T\_1 \cup T\_2$의 모델을 구축하면 정리가 보여진다.

$T\_1, T\_2$가 각각 건전하므로, 모델 $\mathfrak{A}, \mathfrak{B}$를 가진다. $T = T\_1 \cap T\_2$가 완전하므로, $\mathcal{L}$-퇴화로서의 $\mathfrak{A}$와 $\mathfrak{B}$는 초등적으로 동등하다. 따라서 초등적 병합 성질에 의해, $\mathcal{L}$-초등적 임베딩 $f_0$와 $\mathcal{L}_2$-초등적 임베딩 $h_0$가 존재하여 다음이 성립한다.

<img src="/public/robinson-1.png" style="width: 100%; max-width: 120px; margin: 1em auto">

이제 $\mathfrak{B}_1$의 $\mathcal{L}$-퇴화를 생각해 보면, 이는 $\mathfrak{A}_0$와 초등적으로 동등하므로, 다시 초등적 병합 성질에 의해 $\mathcal{L}$-초등적 임베딩 $g_0$와 $\mathcal{L}_1$-초등적 임베딩 $k_0$가 존재하여 다음이 성립한다.

<img src="/public/robinson-2.png" style="width: 100%; max-width: 127px; margin: 1em auto">

이 과정을 반복하여 다음의 구조 유도계<sub>directed system of structures</sub>를 얻는다.

<img src="/public/robinson-3.png" style="width: 100%; max-width: 285px; margin: 1em auto">
