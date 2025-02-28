---
layout: post
title: "일반 공변성에 대한 노트"
date: 2025-02-27
tags: [물리학, 역학]
related:
---

어떤 이론이 **일반 공변적<sub>general covariant</sub>**이라는 것은, 물리 법칙의 형태<sub>form</sub>가 미분가능한 좌표계 변환에 대해 보존된다는 것이다. 구체적으로, 좌표계 $\lbrace q_i \rbrace $와 좌표계 $\lbrace q'\_i \rbrace $가 다음 관계에 있다고 하자.

$$
q_i' = f_i(\{ q \})
$$

각 $i$에 대해 $f\_i$가 미분 가능하다고 하자. 일반 공변적 이론이라면 좌표계 $\lbrace q_i \rbrace $를 사용했을 때와 좌표계 $\lbrace q_i' \rbrace $를 사용했을 때의 물리 법칙이 형태가 같아야 한다.

예시를 보자. 퍼텐셜이 0인 계 안의 입자의 위치를 극좌표계 $(r, \theta)$ 또는 직교 좌표계 $(x, y)$를 사용하여 표현하는 경우를 생각해 보자. 두 좌표계는 다음 관계에 있다.

$$
\begin{gather}
x = f_1(r, \theta) = r \cos \theta\\
y = f_2(r, \theta) = r \sin \theta
\end{gather}
$$

$f\_1$과 $f\_2$가 미분 가능하므로 일반 공변적 이론은 두 좌표계로 표현했을 때의 형태가 같아야 한다.

먼저 뉴턴 역학의 경우를 보자. 뉴턴 역학의 물리 법칙은 다음과 같다.

$$
\begin{gather}
-\frac{dV(x, y)}{dx} = m\ddot{x} \\
-\frac{dV(x, y)}{dy} = m\ddot{y}
\end{gather}
$$

$V(x, y) = 0$이므로 $\ddot{x} = \ddot{y} = 0$이다. 즉 입자는 등속 선형 운동을 한다. 만약 뉴턴 역학이 일반 공변적이라면 위 법칙을 $(x, y)$에서 $(r, \theta)$로 바꿔 표현해도 결과가 같아야 한다.

$$
\begin{gather}
-\frac{dV(r, \theta)}{dr} = m\ddot{r} \\
-\frac{dV(r, \theta)}{d\theta} = m\ddot{\theta}
\end{gather}
$$

$V(r, \theta) = 0$이므로 $\ddot{r} = \ddot{\theta} = 0$이다. 이번에는 입자가 등속 원운동을 한다. 결과가 달라졌으므로 **뉴턴 역학은 일반 공변적이지 않다.**

이제 [라그랑주 역학](http://dimenerno.github.io/2025/02/27/euler-lagrange/)의 경우를 보자. 라그랑주 역학의 물리 법칙은 다음과 같다.

$$
\begin{gather}
\frac{\partial \mathcal{L}}{\partial x} = \frac{d}{dt} \frac{\partial \mathcal{L}}{\partial \dot{x}} \\
\frac{\partial \mathcal{L}}{\partial y} = \frac{d}{dt} \frac{\partial \mathcal{L}}{\partial \dot{y}}
\end{gather}
$$

$\mathcal{L}(x, y) = T - V = \frac{m}{2}(\dot{x}^2 + \dot{y}^2)$를 대입하면 $\ddot{x} = \ddot{y} = 0$, 즉 등속 선형 운동을 얻는다. 여기까지는 뉴턴 역학과 같다.

이제 오일러-라그랑주 방정식의 $(x, y)$를 $(r, \theta)$로 치환해 보자.

$$
\begin{gather}
\frac{\partial \mathcal{L}}{\partial r} = \frac{d}{dt} \frac{\partial \mathcal{L}}{\partial \dot{r}} \\
\frac{\partial \mathcal{L}}{\partial \theta} = \frac{d}{dt} \frac{\partial \mathcal{L}}{\partial \dot{\theta}}
\end{gather}
$$

$x = r\cos\theta, y = r\sin\theta$를 대입하여 정리하면 $\mathcal{L}(r, \theta)$는 다음과 같다.

$$
\mathcal{L}(r, \theta) = \frac{m}{2}(\dot{r}^2 + r^2 \dot{\theta}^2)
$$

> _Remark._ 오일러-라그랑주 방정식에서는 단순히 $(x, y)$를 $(r, \theta)$로 치환했지만, 라그랑지안에서는 $x = r \cos \theta, y = r \sin \theta$ 관계식을 대입하는 이유는 라그랑지안이 **실수쌍**에 대한 함수가 아니라 **시공간의 점**에 대한 함수이기 때문이다. 일반 공변성은 무지성, 일편단률적인 좌표 변환에 대해서 식의 형태가 유지된다는 의미가 아니라, 물리계를 표현하는 함수들은 유지된 채 그것을 표현하는 좌표가 바뀌었을 때 식의 형태가 유지된다는 의미이다.

대입하여 계산하면 다음과 같다.

$$
\begin{gather}
\ddot{r} = r\dot{\theta}^2 \\
2\dot{r}\dot{\theta} + r\ddot{\theta} = 0
\end{gather}
$$

미분방정식이 복잡해서 알아보기 힘들지만, 위 두 미분방정식은 $\ddot{x} = \ddot{y} = 0$과 동치이다. 일례로 $\theta = \tan^{-1}t, r = \sqrt{1 + t^2}$가 방정식의 해인 것을 확인할 수 있다.

일반적으로 다음이 성립한다.

> **정리.** 라그랑주 역학은 일반 공변성을 가진다.

뉴턴 역학은 일반 공변성이 없지만 라그랑주 역학은 있다는 것이 신기하게 느껴질 수 있지만, 잘 생각해 보면 이것은 당연하다. 뉴턴의 제1법칙은 보통 $F = 0 \implies \ddot{x} = 0$이라는 수식으로 표현되지만 정확한 진술은 다음과 같다.

> 외력을 받지 않는 입자의 시공간 다이어그램은 선형이다.

'선형'이라는 표현에 주목하라. 선형성은 특정한 기하학에 의존적인 표현이다. 예를 들어 유클리드 기하학에서 '선형'이란 우리가 흔히 말하는 직선이지만, 구면 기하학에서 '선형'은 대원으로 주어진다. 그러므로 위 진술은 다음과 같이 밝혀 쓰는 것이 가장 정확하다.

> **뉴턴 역학**. 외력을 받지 않는 입자의 시공간 다이어그램은 유클리드 기하학의 선형이다.

그리고 유클리드 기하학의 선형은 직교 좌표계에서 $\ddot{x} = \ddot{y} = 0$ 꼴로 주어진다. 따라서 $F = 0 \implies \ddot{x} = 0$은, 유클리드 기하학과 직교 좌표계를 전제했을 때에만 올바른 수식인 것이다.

거꾸로 말해, 이론이 특정한 기하학에 의존하지 않는다면 그 이론은 일반 공변적이다. 라그랑주 역학은 그러한 이론의 사례이다. 라그랑주 역학의 진술은 다음과 같이 표현할 수 있다.

> **라그랑주 역학**. 라그랑지안의 적분을 극화시키는 경로가 입자의 운동 경로이다.

그리고 라그랑지안은 특정 기하학에 의존적인 함수가 아닌, 그저 시공간의 점들에 대해 실숫값을 출력하는 함수이다. 따라서 위 진술은 어떠한 기하학에 대해서도 의존적이지 않으며, 라그랑주 역학은 일반 공변적이다.

구멍 논증<sub>hole argument</sub>에 따르면 일반 공변적인 이론들은 형이상학적인 의미에서 비결정론적이다. 이에 대한 설명은 나중에 하도록 하겠다.
