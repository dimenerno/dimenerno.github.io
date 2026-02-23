---
layout: post
title: "양자역학의 국소성에 대하여"
date: 2026-02-23
tags: ["물리학", "양자역학"]
related:
---

벨 부등식은 흔히 "양자역학은 국소적이지 않다"는 결론으로 요약되곤 한다. 그러나 이 요약은 오해를 일으키는 표현인데, 국소성의 표준적인 의미로 따지면 양자역학은 완벽히 국소적이기 때문이다. 국소성의 표준적 의미란 다음과 같다.

> **정의.** 어떤 물리 이론이 국소적<sub>local</sub>일 조건은, 시공간의 두 사건<sub>event</sub>에 대해 한 사건이 다른 사건에 빛보다 빠르게 영향을 주지 않는 것이다.

그리고 위의 정의를 적절히 해석했을 때 양자역학은 국소적임을 증명할 수 있다. 가령, 두 개의 얽힌 입자 A와 B로 이루어진 계의 파동함수 $\psi(a, b)$를 생각하자. 만약 우리가 입자 A에만 관심을 가진다면, 입자 A를 대상으로 한 관측의 결과가 어떻게 나올지는 다음의 밀도 행렬<sub>density matrix</sub>로 완전히 표현할 수 있다.

$$
\rho_{a'a} = \sum_{b} \psi^*(a, b)\psi(a', b)
$$

예를 들어 관측량<sub>observable</sub> $\mathbf{L}$이 A에 국소적으로 작용할 때, $\mathbf{L}$의 기댓값은 다음과 같이 구할 수 있음이 알려져 있다.

$$
\langle \mathbf{L} \rangle = \operatorname{tr} \rho L
$$

여기서 $\mathbf{L}$이 A에 국소적으로 작용한다는 표현의 의미는 다음과 같다.

$$
L_{a'b', ab} = L_{a'a} \delta_{b'b}
$$

따라서 입자 B에서 국소적으로 일어나는 시간 변화가 입자 A의 밀도 행렬을 변화시키지 않는다면, 다음의 의미에서 양자역학은 국소적이다.

> 임의의 두 입자에 대해, 한 입자의 국소적 시간 변화가 다른 입자의 국소적 상태에 빛보다 빠르게 영향을 주지 않는다.

이 사실을 증명해 보자. 입자 B에서 국소적 시간 변화가 진행된다고 하자. 가령 입자 B의 위치를 관측하거나, 운동량을 관측하거나, 입자 B를 다른 입자와 얽히게 만드는 등의 일이 일어난다. 무슨 일이 일어나든 간에 이 일은 $\psi(a, b)$를 변화시킬 것이다. 양자역학에서 계의 시간에 따른 변화는 유니터리 행렬로 표현된다. 즉, 어떤 유니터리 연산자 $\mathbf{U}$가 존재하여, 일정 시간이 지난 이후 계의 상태를 $\psi\_f(a', b')$라고 하면

$$
\psi_f(a', b') = \sum_{a, b} U_{a'b', ab} \psi(a, b)
$$

이다. 그런데 시간 변화가 B에서만 국소적으로 진행된다면 $a \neq a'$일 때 $U\_{a'b', ab} = 0$이다. 따라서,

$$
\psi_f(a, b') = \sum_{b} U_{b'b} \psi(a, b)
$$

로 줄여 쓸 수 있다. 이로 인해 A의 밀도 행렬은 다음과 같이 갱신된다.

$$
\rho'_{a'a} = \sum_{b} \psi_f^*(a, b)\psi(a', b)
$$

두 식을 연립하면,

$$
\begin{align}
\rho'_{a'a} &= \sum_{b} \left( \left( \sum_{b'} U_{bb'} \psi(a, b') \right)^* \left( \sum_{b''} U_{bb''} \psi(a', b'') \right) \right) \\
&= \sum_{b, b', b''} U^*_{b'b} U_{bb''} \psi^*(a, b') \psi(a', b'')
\end{align}
$$

이다. 그런데 $\mathbf{U}$가 유니터리이므로 $\sum\_b U^\ast\_{b'b} U\_{bb''} = (U^\ast U)\_{b' b''} = \delta\_{b' b''}$이다. 따라서,

$$
\rho'_{a'a} = \sum_{b'} \psi^*(a, b') \psi(a', b') = \rho_{a'a}
$$

이다. 따라서 $\rho' = \rho$이다. **즉, B에서 국소적으로 진행되는 유니터리한 시간 변화는 A의 밀도 행렬을 변화시키지 않는다.** 실질적으로 이는 다음의 정리를 증명한 것이다.

> **통신 없음 정리<sub>No-communication theorem</sub>.** (얽힘을 고려하더라도) 빛보다 빠르게 정보를 전달하는 것은 불가능하다.

그렇다면 벨 부등식을 비롯한, 흔히 양자역학의 비국소성을 보여주는 것으로 제시되는 사례들은 어떻게 이해되어야 하는가? 가령, 코펜하겐 해석에 따르면 각운동량의 총합이 0인 두 전자를 앨리스와 밥이 나눠가진 뒤, 밥이 스핀 업의 전자를 관측한다면, 앨리스의 전자는 그 즉시 스핀 다운으로 붕괴된다. 그렇다면 앨리스의 전자의 밀도 행렬도 그에 맞추어 변해야 하는 것 아닌가?

이 질문에 대한 "실증주의적" 해답은 이렇다 (실증주의적이라는 표현은 이 해답에 대한 철학적 해석을 일단 차치하겠다는 것이다). 만약 두 개의 전자뿐 아니라 _앨리스와 밥 또한_ 전체 계의 일부로 간주한다면, 밥의 관측이 있기 전과 후 계의 파동함수는 다음과 변화한다.

관측 전:

$$
\begin{align}
\psi &= \frac{1}{\sqrt{2}}(\text{Alice has not observed her spin-up electron}\\
&\qquad \land \,\,\, \text{Bob has not observed his spin-down electron}) \\
&+ \frac{1}{\sqrt{2}}(\text{Alice has not observed her spin-down electron} \\
&\qquad \land \,\,\, \text{Bob has not observed his spin-up electron})
\end{align}
$$

관측 후:

$$
\begin{align}
\psi_f &= \frac{1}{\sqrt{2}}(\text{Alice has not observed her spin-up electron}\\
&\qquad \land \,\,\, \text{Bob has observed his spin-down electron}) \\
&+ \frac{1}{\sqrt{2}}(\text{Alice has not observed her spin-down electron} \\
&\qquad \land \,\,\, \text{Bob has observed his spin-up electron})
\end{align}
$$

즉, **밥도 계의 일부이기 때문에 밥의 행위는 계를 불연속적으로 붕괴시키는 것이 아닌, 계의 유니터리한 시간 변화의 일부이다.** 대신 앨리스-밥 계의 외부에서 제3자인 찰리가 _밥을 관측한다면_ 그때는 $\psi_f$가 가령 다음과 같이 붕괴할 것이다.

$$
\begin{align}
\psi_f \longmapsto\; &(\text{Alice has not observed her spin-down electron} \\ 
&\land \; \text{Bob has observed his spin-up electron})
\end{align}
$$

그러나 만약 찰리 또한 밥과 앨리스와 함께 계의 일부로 간주한다면, 전체 계의 파동함수는 다음과 같이 유니터리하게 시간 변화한다.

$$
\begin{align}
\psi_f &= \frac{1}{\sqrt{2}}(\text{Alice has not observed her spin-up electron}\\
&\qquad \land \,\,\, \text{Bob has observed his spin-down electron} \\
&\qquad \land \,\,\, \text{Charlie has observed Bob observing spin-down}) \\
&+ \frac{1}{\sqrt{2}}(\text{Alice has not observed her spin-down electron} \\
&\qquad \land \,\,\, \text{Bob has observed his spin-up electron} \\
&\qquad \land \,\,\, \text{Charlie has observed Bob observing spin-up}) \\
\end{align}
$$

일반적으로, **관측자와 계를 분리하면 관측은 계의 파동함수를 붕괴시키지만, 관측자를 계에 포함시키면 관측 또한 계의 유니터리 시간 변화의 일부이다.** 이 결론을 확장하면, **우주 전체의 파동함수**는 항상 유니터리하게 시간 변화하며, 우주 전체의 파동함수만이 유일하게 물리적으로 유의미한 파동함수라는 주장을 얻는다. 이는 양자역학에 대한 다세계 해석으로 이어지게 된다. 