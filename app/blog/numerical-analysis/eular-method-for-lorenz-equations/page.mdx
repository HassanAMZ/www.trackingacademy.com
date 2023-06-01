---
title: Eular Method for Lorenz Equation
date: '2021-03-01'
blogID: '00010'
tags: ['Numerical Analysis', 'Eular Method ', 'Python']
draft: false
summary: In Numerical Analysis, the Euler method (also called forward Euler method) is a first-order numerical procedure for solving ordinary differential equations (ODEs) with a given initial value. Below is the python code for the Forward Eular method.
coverImage: '/static/blog/00010.png'
embedId: 'kDfBqaEBjpg'
---

import YoutubeEmbed from '@/components/YoutubeEmbed'

In Numerical Analysis, the Euler method (also called forward Euler method) is a first-order numerical procedure for solving ordinary differential equations (ODEs) with a given initial value. Below is the python code for the Forward Eular method. You can read about it more here on [wikipedia](https://en.wikipedia.org/wiki/Euler_method)

## Youtube Video

<YoutubeEmbed embedId="kDfBqaEBjpg" />

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

You can find the Github Repo link [here](https://github.com/HassanAMZ/numerical-analysis/blob/homework-002/EularMethod.py)

## Download Python File

You can find the Download Python File link
<a href="/static/blog/00010_1.py" download>download</a>

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
    X[i + 1] = X[i] + (differentialX * differentialT)
    Y[i + 1] = Y[i] + (differentialY * differentialT)
    Z[i + 1] = Z[i] + (differentialZ * differentialT)

# 2D Plot
fig, ((ax1, ax2)) = plt.subplots(2)
fig.suptitle('Lorenz Equations')
ax1.plot(X, Z, lw=0.5)
ax1.set_title('Euler Forward Method Z(X)')
ax1.set_xlabel('X')
ax1.set_ylabel('Z')
ax2.plot(Y, Z, lw=0.5)
ax2.set_title('Euler Forward Method Z(Y)')
ax2.set_xlabel('Y')
plt.show()
```

## Graph Plots

![Graph Plots](/static/blog/00010_2.png)
