+++
comments = true
date = 2022-01-19T15:00:00Z
description = "DFUはBOOT1ピンを操作しなくても起動できる"
draft = true
image = ""
math = false
tags = ["STM32"]
title = "STM32でソフトウェアからDFUを起動する方法"

+++
**はじめに**

STM32にファームウェアを書き込む方法はST-LinkやUARTなど数種類ありますが、その中でもDFUモードはマイコンに接続したUSB端子経由で書き込むことができ、場合によってはST-Linkよりも便利です。しかしDFUモードは通常、BOOT0をH、BOOT1をLにして電源投入しないと起動しません。しかし、実はファームウェアからDFUモードに突入することができるよ、というお話です。