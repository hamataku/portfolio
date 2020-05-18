+++
comments = true
date = 2020-05-17T15:00:00Z
description = "課題を出し忘れないようにするというのは建前で、ほんとはただやりたかっただけ。"
draft = true
image = "/img/2020-05-18-9.42.10.png"
math = false
tags = ["Python", "Slack", "Selenium"]
title = "ITC-LMSからデータ引っ張ってきてSlackに投稿するまでの話"

+++
## はじめに

東大にはITC-LMSというWebサービスがあって、講義で使う資料を共有したり課題を提出したりできるのですが、課題が講義ページごとに掲載されているので、提出期限の管理がすごくめんどくさい。一覧ページとかあればいいのに。

ということで、ITC-LMSに自動ログインして課題提出期限の