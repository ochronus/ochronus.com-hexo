---
bgContrast: dark
bgGradientOpacity: darker
categories:
- articles
comments: true
date: 2015-05-14T00:00:00Z
description: A FizzBuzz implementation purely in CSS
excerpt: A FizzBuzz implementation purely in CSS
image:
  feature: fizzbuzz.png
  topPosition: -100px
modified: 2015-05-14
share: true
tags:
- fizzbuzz
- CSS
- algorithm
title: FizzBuzz in CSS
url: fizzbuzz-in-css
cover: /images/fizzbuzz.png
---

{% img  /images/fizzbuzz.png The proverbial comfort zone %}

## Lo and behold, a pure CSS FizzBuzz implementation!

<link rel="stylesheet" href="/assets/css/fizzbuzz.css" type="text/css" />

<div class='box'>1</div>
<div class='box'>2</div>
<div class='box'>3</div>
<div class='box'>4</div>
<div class='box'>5</div>
<div class='box'>6</div>
<div class='box'>7</div>
<div class='box'>8</div>
<div class='box'>9</div>
<div class='box'>10</div>
<div class='box'>11</div>
<div class='box'>12</div>
<div class='box'>13</div>
<div class='box'>14</div>
<div class='box'>15</div>
<div class='box'>16</div>
<div class='box'>17</div>
<div class='box'>18</div>
<div class='box'>19</div>
<div class='box'>20</div>
<div style="clear:both;" />

{% codeblock lang:html %}
<div class='container'>
    <div class='box'>1</div>
    <div class='box'>2</div>
    <div class='box'>3</div>
    <div class='box'>4</div>
    <div class='box'>5</div>
    <div class='box'>6</div>
    <div class='box'>7</div>
    <div class='box'>8</div>
    <div class='box'>9</div>
    <div class='box'>10</div>
    <div class='box'>11</div>
    <div class='box'>12</div>
    <div class='box'>13</div>
    <div class='box'>14</div>
    <div class='box'>15</div>
    <div class='box'>16</div>
    <div class='box'>17</div>
    <div class='box'>18</div>
    <div class='box'>19</div>
    <div class='box'>20</div>
</div>
{% endcodeblock %}

{% codeblock lang:css %}
.box {
    width: 50px;
    height: 50px;
    background: #D3D3D3;
    margin: 20px;
    float: left;
    font-size: 12px;
    font-weight: bold;
    color: black;
    padding: 20px;
    text-align: center;
}
.box:nth-of-type(3n) {
    background: #F2AE72;
}
.box:nth-of-type(3n)::after {
    content: " Fizz";
}
.box:nth-of-type(5n) {
    background: #588C7E;
}
.box:nth-of-type(5n)::after {
    content: " Buzz";
}
.box:nth-of-type(3n).box:nth-of-type(5n) {
    background: #D96459 !important;
}
.box:nth-of-type(3n).box:nth-of-type(5n)::after {
    content: " FizzBuzz"
}

{% endcodeblock %}
