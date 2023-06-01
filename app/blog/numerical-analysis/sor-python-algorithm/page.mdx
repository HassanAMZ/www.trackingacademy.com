---
title: SOR Python Algorithm
date: '2021-03-03'
blogID: '00007'
tags: ['Numerical Analysis', 'SOR algorithm ', 'Python']
draft: false
summary: In numerical Analysis, the method of successive over-relaxation (SOR) is a variant of the Gauss–Seidel method for solving a linear system of equations, resulting in faster convergence. A similar method can be used for any slowly converging iterative process.
coverImage: '/static/blog/00007.png'
embedId: 'Wn6OZvfOYVE'
---

import YoutubeEmbed from '@/components/YoutubeEmbed'

In numerical linear algebra, the method of successive over-relaxation (SOR) is a variant of the Gauss–Seidel method for solving a linear system of equations, resulting in faster convergence. A similar method can be used for any slowly converging iterative process. Below is the Python Code for a 50x50 Matrix.

## Youtube Video

<YoutubeEmbed embedId="Wn6OZvfOYVE" />

Table Of Content:

0. [Youtube Video](#youtube-video)
1. [Link to Github Repo](#link-to-github-repo)
2. [Download Python File](#download-python-file)
3. [Python Code](#python-code)
4. [Solution Set for Omega](#solution-set-for-omega)

## Link to github Repo

You can find the Github Repo link [here](https://github.com/HassanAMZ/numerical-analysis/blob/homework-001/SOR.py)

## Download Python File

You can find the Download Python File link
<a href="/static/blog/00007_1.py" download>download</a>

## Python Code

Below is the python code written on python Version 3.10 and numpy Version 1.21.4

```py
import numpy as np

lengthArrayBase = [5] * 50 #Array of 50 element where each entry is 5
solutionArrayBase = [2]*50 #Array of 50 element where each entry is 2
solutionArrayBase[0]=1 #Updating the first entry to 1
solutionArrayBase[49]=1 #Updating the last entry to 1
initialConditionArray=[0]*50 #Array of 50 element where each entry is 0

#Diagnalizing the matrix by 5
np.diag(lengthArrayBase)
QuestionMatrix = [[0] * len(lengthArrayBase) for _ in range(len(lengthArrayBase))]
for i, e in enumerate(lengthArrayBase):
  QuestionMatrix[i][i] = e

#Updating the secondary and tertiary diagonals to -1
for i in range(len(QuestionMatrix)):
  for j in range(len(QuestionMatrix)):
    if not i==j:
      if i-3<j < i+3:
        QuestionMatrix[i][j] = -1

#SOR algorithm
def sor_solver(A, b, omega, initial_guess, convergence_criteria):
  step = 0
  phi = initial_guess[:]
  residual = np.linalg.norm(np.matmul(A, phi) - b)
  while residual > convergence_criteria:
      for i in range(A.shape[0]):
          sigma = 0
          for j in range(A.shape[1]):
              if j != i:
                  sigma += A[i, j] * phi[j]
          phi[i] = (1 - omega) * phi[i] + (omega / A[i, i]) * (b[i] - sigma)
      residual = np.linalg.norm(np.matmul(A, phi) - b)
      step += 1
      print("Step {} Residual: {:10.6g}".format(step, residual))
  return phi

#Assiging the values to a function
residual_convergence = 1e-5
omega = 1.7
A = np.array(QuestionMatrix)
print("Matrix A: ",A)
b = np.array(solutionArrayBase)
print("Solution Matrix B: ",b)
initial_guess = np.zeros(50)
print("Initial Conditions: ",initial_guess)
phi = sor_solver(A, b, omega, initial_guess, residual_convergence)
print("Solution Set of the Matrix A for omega ",omega, " = ",phi)

```

## Solution Set for Omega

for omega 0.5

```
X = [0.72674261 1.16888176 1.46483166 1.65283501 1.77569958 1.85476288
 1.90606932 1.93921158 1.96067371 1.97455325 1.98353574 1.98934664
 1.9931066  1.99553917 1.99711303 1.99813122 1.99878984 1.99921574
 1.99949094 1.99966844 1.99978242 1.99985483 1.99989963 1.99992544
 1.99993722 1.99993724 1.9999255  1.99989974 1.99985498 1.9997826
 1.99966866 1.99949121 1.99921605 1.9987902  1.99813162 1.99711347
 1.99553965 1.99310711 1.98934718 1.9835363  1.97455382 1.96067429
 1.93921216 1.90606989 1.85476343 1.77570009 1.65283546 1.46483204
 1.16888203 0.7267428 ]

```

for omega 1.0

```
X = [0.72674228 1.16888131 1.46483111 1.65283442 1.77569897 1.85476227
 1.90606871 1.939211   1.96067316 1.97455274 1.98353528 1.98934622
 1.99310622 1.99553883 1.99711274 1.99813097 1.99878964 1.99921558
 1.99949083 1.99966838 1.99978242 1.99985489 1.99989974 1.99992561
 1.99993745 1.99993753 1.99992585 1.99990014 1.99985544 1.99978311
 1.99966922 1.9994918  1.99921667 1.99879084 1.99813227 1.99711413
 1.99554031 1.99310775 1.98934781 1.9835369  1.97455439 1.96067481
 1.93921263 1.90607031 1.85476379 1.7757004  1.65283571 1.46483222
 1.16888216 0.72674288]


```

for omega 1.7

```

X = [0.72674193 1.16888284 1.46483202 1.65283532 1.77570051 1.85476379
1.90606996 1.93921274 1.96067495 1.97455431 1.98353724 1.98934811
1.993108 1.99554084 1.99711462 1.99813279 1.9987916 1.99921738
1.99949263 1.99967022 1.99978409 1.99985659 1.99990139 1.99992712
1.99993896 1.99993892 1.99992714 1.99990139 1.99985655 1.99978416
1.99967017 1.99949264 1.99921747 1.99879153 1.99813288 1.99711468
1.99554076 1.99310816 1.98934814 1.98353719 1.97455463 1.960675
1.93921279 1.90607043 1.85476389 1.77570047 1.65283576 1.46483226
1.16888218 0.72674289]

```
