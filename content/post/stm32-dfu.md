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

STM32に書き込む方法は数種類ありますが、その中でもDFUはマイコンに接続したUSB端子経由で書き込むことができ、使い方次第ではST-Linkを接続するよりも楽な場合があります。しかし、DFUモードは