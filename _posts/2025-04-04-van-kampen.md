---
layout: post
title: "자이페르트-판 캄펀 정리에 대한 노트"
date: 2025-04-04
tags: ["수학", "위상수학", "범주론"]
related:
---

위상공간 $X$의 열린 덮개 $U, V$를 생각하자. 위상공간들의 범주 $\mathbf{Top}$에서 다음 푸시아웃<sub>pushout</sub> 도식의 극한은 $X$이다.

<img src="/public/seifert-1.png" style="margin: 1.5em auto 2em auto; width: 250px">

자이페르트-판 캄펀 정리는, $U, V$가 경로 연결<sub>path connected</sub>이고 $x_0 \in U \cap V$일 때, 위 극한이 함자 $\pi_1(-, x_0): \mathbf{Top} \to \mathbf{Grp}$에 대해 보존된다는 내용이다.

<img src="/public/seifert-2.png" style="margin: 2em auto; width: 300px">

그런데 푸시아웃의 극한은 왼쪽 도식의 쌍대 극한<sub>colimit</sub>이다. 만약 $I$에 대응되는 대상이 초기 대상<sub>initial object</sub>이라면, 사상 $I \to J, J \to K$는 유일하게 결정되므로 사실상 왼쪽 도식의 쌍대 극한은 오른쪽 도식의 쌍대 극한과 같으며, 이는 [범주론적 합](https://dimenerno.github.io/2025/04/02/box-v-product/)에 해당한다.

<div style="display: grid; margin: 0 auto; width: 400px; grid-template-columns: 1fr 1fr; gap: 3em; align-items: center;">
  <img src="/public/pushout-diag.png" style="width: 200px; margin: 1em 0 2em 0;">
  <img src="/public/product-diag.png" style="width: 200px; margin: 1em 0 2em 0;">
</div>

$\mathbf{Grp}$의 초기 대상은 자명군<sub>trivial group</sub>이며, 범주론적 합은 자유곱이다. 이에 따라 $U \cap V$가 단순 연결 공간일 때, $\pi_1(X)$는 $\pi_1(U)$와 $\pi_1(V)$의 자유곱이라는 결론을 얻는다.
