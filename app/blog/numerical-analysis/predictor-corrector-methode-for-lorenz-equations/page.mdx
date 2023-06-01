---
title: Predictor Corrector Method for Lorenz Equation
date: '2021-03-02'
blogID: '00011'
tags: ['Numerical Analysis', 'Predictor Corrector Method', 'Python']
draft: false
summary: In numerical analysis, predictor–corrector methods belong to a class of algorithms designed to integrate ordinary differential equations – to find an unknown function that satisfies a given differential equation.
coverImage: '/static/blog/00011.png'
embedId: 'xP7YBWlOKHA'
---

import YoutubeEmbed from '@/components/YoutubeEmbed'

In numerical analysis, predictor–corrector methods belong to a class of algorithms designed to integrate ordinary differential equations – to find an unknown function that satisfies a given differential equation. You can read about it more here on [wikipedia](https://en.wikipedia.org/wiki/Predictor%E2%80%93corrector_method)

## Youtube Video

<YoutubeEmbed embedId="xP7YBWlOKHA" />

Table Of Content:

0. [Question Statement](#question-statement)
1. [Link to Github Repo](#link-to-github-repo)
2. [Download Python File](#download-python-file)
3. [Python Code](#python-code)
4. [Graph Plots](#graph-plots)

## Question Statement

Solve the Lorenz equation by using the forward Euler method, backward Euler method, trapezoid method or predictor-corrector method for the parameters sigma=10, rho=28, beta=8/3 and initial values (1, 0, 20). Please use at least two methods and plot the figures of z(x) and z(y).

(dx)/(dt) = δ(y - x)

(dy)/(dt) = ρx - y - xz

(dz)/(dt) = xy - βz

## Link to github Repo

You can find the Github Repo link [here](https://github.com/HassanAMZ/numerical-analysis/blob/homework-002/PredictorCorrectorMethod.py)

## Download Python File

You can find the Download Python File link
<a href="/static/blog/00011_1.py" download>download</a>

## Python Code

Below is the python code written on python Version 3.10 and numpy Version 1.21.4

```py
import numpy as np
import matplotlib.pyplot as plt

# The ODEs
def lorenz(x, y, z, sigma, rho, beta):
    differentialX = sigma*(y - x)
    differentialY = rho*x - y - x*z
    differentialZ = x*y - beta*z
    return differentialX, differentialY, differentialZ

# Initializing the Matrics
differentialT = 0.01
numberSteps = 10000
X = np.empty(numberSteps + 1)
Y = np.empty(numberSteps + 1)
Z = np.empty(numberSteps + 1)

# Set  values
X[0], Y[0], Z[0] = (1, 0, 20)
sigma=10
rho=28
beta=8/3

# Predictor-Corrector
for i in range(numberSteps):
    differentialX, differentialY, differentialZ = lorenz(X[i], Y[i], Z[i], sigma, rho, beta)
    X[i + 1] = X[i] + (differentialX * (differentialT/2))
    Y[i + 1] = Y[i] + (differentialY * (differentialT/2))
    Z[i + 1] = Z[i] + (differentialZ * (differentialT/2))

    differentialXM, differentialYM, differentialZM = lorenz(X[i + 1], Y[i + 1], Z[i + 1], sigma, rho, beta)
    X[i + 1] = X[i] + (differentialXM * differentialT)
    Y[i + 1] = Y[i] + (differentialYM * differentialT)
    Z[i + 1] = Z[i] + (differentialZM * differentialT)

# 2D Plot
fig, ((ax1, ax2)) = plt.subplots(1, 2)
fig.suptitle('Eular Method for Lorez Equations')
ax1.plot(X,Z,lw=0.5)
ax1.set_title('Z(X)')
ax1.set_xlabel('X')
ax1.set_ylabel('Z')
ax2.plot(Y,Z,lw=0.5)
ax2.set_title('Z(Y)')
ax2.set_xlabel('Y')
ax2.set_ylabel('Z')
plt.show()
```

## Graph Plots

![Graph Plots](/static/blog/00011_2.png)
