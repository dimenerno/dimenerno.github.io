---
layout: post
title: "On the Locality of Quantum Mechanics"
date: 2026-02-23
tags: ["Physics", "Quantum Mechanics"]
related:
lang: en
---

> This post was originally written in Korean, and has been machine translated into English. It may contain minor errors or unnatural expressions. Proofreading will be done in the near future.

The Bell inequality is often summarised as concluding that "quantum mechanics is non-local." However, this summary is misleading, as quantum mechanics is perfectly local when judged by the standard definition of locality. The standard definition of locality is as follows:

> **Definition.** A physical theory is local if, for any two events in spacetime, one event does not influence the other faster than the speed of light.

When interpreted appropriately, quantum mechanics can be shown to be local under this definition. For instance, consider a system consisting of two entangled particles, A and B, with a wavefunction $\psi(a, b)$. If we are only interested in particle A, the outcomes of measurements on A can be fully described by the following density matrix:

$$
\rho_{a'a} = \sum_{b} \psi^*(a, b)\psi(a', b)
$$

For example, when an observable $\mathbf{L}$ acts locally on A, the expectation value of $\mathbf{L}$ is known to be given by:

$$
\langle \mathbf{L} \rangle = \operatorname{tr} \rho L
$$

Here, the expression "observable $\mathbf{L}$ acts locally on A" means the following:

$$
L_{a'b', ab} = L_{a'a} \delta_{b'b}
$$

Thus, if local changes in time at particle B do not affect the density matrix of particle A, quantum mechanics is local in the following sense:

> For any two particles, local changes in time at one particle do not influence the local state of the other particle faster than the speed of light.

Let us prove this. Suppose a local change in time occurs at particle B, such as measuring its position, momentum, or entangling it with another particle. Whatever happens, this will alter $\psi(a, b)$. In quantum mechanics, the time evolution of a system is represented by a unitary matrix. That is, there exists a unitary operator $\mathbf{U}$ such that, after some time, the state of the system becomes $\psi\_f(a', b')$:

$$
\psi_f(a', b') = \sum_{a, b} U_{a'b', ab} \psi(a, b)
$$

If the time evolution is local to B, then $U\_{a'b', ab} = 0$ when $a \neq a'$. Hence,

$$
\psi_f(a, b') = \sum_{b} U_{b'b} \psi(a, b)
$$

This leads to the following update of A's density matrix:

$$
\rho'_{a'a} = \sum_{b} \psi_f^*(a, b)\psi(a', b)
$$

Combining the two equations, we have:

$$
\begin{align}
\rho'_{a'a} &= \sum_{b} \left( \left( \sum_{b'} U_{bb'} \psi(a, b') \right)^* \left( \sum_{b''} U_{bb''} \psi(a', b'') \right) \right) \\
&= \sum_{b, b', b''} U^*_{b'b} U_{bb''} \psi^*(a, b') \psi(a', b'')
\end{align}
$$

Since $\mathbf{U}$ is unitary, $\sum\_b U^\ast\_{b'b} U\_{bb''} = (U^\ast U)\_{b' b''} = \delta\_{b' b''}$. Therefore,

$$
\rho'_{a'a} = \sum_{b'} \psi^*(a, b') \psi(a', b') = \rho_{a'a}
$$

Thus, $\rho' = \rho$. **In other words, unitary time evolution local to B does not alter the density matrix of A.** This effectively proves the following theorem:

> **No-communication theorem.** (Even considering entanglement) It is impossible to transmit information faster than the speed of light.

How, then, should we understand cases like the Bell inequality, which are often presented as evidence of the non-locality of quantum mechanics? For instance, according to the Copenhagen interpretation, if Alice and Bob share two electrons with a total angular momentum of zero, and Bob observes a spin-up electron, Alice's electron instantaneously collapses to spin-down. Does this not imply that Alice's electron's density matrix changes accordingly?

The "positivist" answer to this question is as follows (the term "positivist" is used here to set aside philosophical interpretations for now). If not only the two electrons but also _Alice and Bob_ are considered part of the entire system, the wavefunction of the system evolves as follows before and after Bob's observation:

Before observation:

$$
\begin{align}
\psi &= \frac{1}{\sqrt{2}}(\text{Alice has not observed her spin-up electron}\\
&\qquad \land \,\,\, \text{Bob has not observed his spin-down electron}) \\
&+ \frac{1}{\sqrt{2}}(\text{Alice has not observed her spin-down electron} \\
&\qquad \land \,\,\, \text{Bob has not observed his spin-up electron})
\end{align}
$$

After observation:

$$
\begin{align}
\psi_f &= \frac{1}{\sqrt{2}}(\text{Alice has not observed her spin-up electron}\\
&\qquad \land \,\,\, \text{Bob has observed his spin-down electron}) \\
&+ \frac{1}{\sqrt{2}}(\text{Alice has not observed her spin-down electron} \\
&\qquad \land \,\,\, \text{Bob has observed his spin-up electron})
\end{align}
$$

In other words, **since Bob is part of the system, his actions are not a discontinuous collapse of the system but part of its unitary time evolution.** Instead, if a third party, Charlie, observes Bob, then $\psi\_f$ might collapse as follows:

$$
\begin{align}
\psi_f \longmapsto\; &(\text{Alice has not observed her spin-down electron} \\ 
&\land \; \text{Bob has observed his spin-up electron})
\end{align}
$$

However, if Charlie is also considered part of the system along with Bob and Alice, the wavefunction of the entire system evolves unitarily as follows:

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

In general, **if the observer and the system are separated, observation collapses the system's wavefunction, but if the observer is included in the system, observation is part of the system's unitary time evolution.** Extending this conclusion, the **wavefunction of the entire universe** always evolves unitarily, and only the wavefunction of the entire universe is physically meaningful. This leads to the many-worlds interpretation of quantum mechanics.