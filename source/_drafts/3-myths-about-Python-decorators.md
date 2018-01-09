---
title: 3 myths about Python decorators
date: 2018-01-09 17:01:12
tags:
    - python
    - programming
    - decorator
url: python-decorator-myths
photos:
    - /images/python-decorators.png
---


### functions in Python

The first thing you must understand is that all functions in Python are first-class citizens, which is to say, are objects just like any other object you might encounter.

They have attributes:

{% codeblock lang:python %}
def func():
    print('something something')

print(dir(func))
> ['__annotations__', '__call__', '__class__', '__closure__', '__code__', '__defaults__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__get__', '__getattribute__', '__globals__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__kwdefaults__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']
{% endcodeblock %}


You can assign them to variables and still call them:

{% codeblock lang:python %}
g = func
g()
> something something
{% endcodeblock %}


You can use them as arguments for other functions:

{% codeblock lang:python %}
def get_func_name(function):
    return function.__name__

get_func_name(func)
> 'func'
{% endcodeblock %}


You can use them in data structures:

{% codeblock lang:python %}
function_list = [func, g]
for f in function_list:
    f()
> something something
  something something
{% endcodeblock %}

### decorators in Python

Decorators are usually described as "functions which take and return functions", a description which is notable in that, technically speaking, not a single word of it is true. What is true is the following:

* Decorators are applied once, at function definition time.
* Annotating a function definition x with a decorator @d is equivalent to defining x, then, immediately afterward, having x = d(x).
* Decorating a function with @d and @e, in that order, is equivalent to performing x = d(e(x)) after the function's definition.


## myth #1 - decorators are functions

{% codeblock lang:python %}
@FunctionHolder
def i_am_also_counted(val):
    print(val)
    
i_am_also_counted('a')
i_am_also_counted('b')
i_am_also_counted.called_count
{% endcodeblock %}


## myth #2 - decorators take functions

{% codeblock lang:python %}
@len
@func_name
def nineteen_characters():
    """are in this function's name"""
    pass

nineteen_characters
{% endcodeblock %}

## myth #3 - decorators return functions

{% codeblock lang:python %}
@func_name
def a_named_function():
    return

a_named_function
{% endcodeblock %}

