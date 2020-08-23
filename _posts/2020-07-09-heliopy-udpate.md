---
layout: post
title: The future of heliopy
---
heliopy is a python project that I started up around 4 years ago.
It's gone through several iterations with various functionality, but over the last
couple of years has settled on two main features:

- Automatically fetching, downloading, and caching data
- Working with SPICE toolkit trajectory kernels

What grew out of code that was useful for my research, has become helpful for
at least a handful of other researchers [1][1]. As more people have become interested,
people have started submitting feature requests, and even submitting new code.
Although it's a small community, to date 15 people have contributed lines of
code[2][2].

Recent large pull requests to add large bits of new functionality to heliopy
have made me realise that I don't have enough time to properly review, add,
and maintain these new features. I'm not paid to work on heliopy, and over time
my research interests have shifted from the solar wind towards the Sun,
increasing my involvement with sunpy. I also just don't really enjoy working on
heliopy much any more - I'm not sure why, but I think this is probably because
heliopy largely solves the problems that needed solving 4 years ago for my own
research.

Taking a break
--------------
Given everything above, I've decided to take a break from working on heliopy.
What does this mean? I won't review new pull requests or accept feature
requests, with two exceptions

- Bug fixes
- Small pull requests to add new data sources to heliopy

A vision for heliopy
--------------------
heliopy has never had a project vision, so I'm adding one today:

*"heliopy aims to provide a set of generic tools to work with 1D
in-situ timeseries measurements of space plasmas."*

There's a bit to unpack here:
- "generic tools" - this means nothing more domain specific than space plasmas.
- "1D" - this means a measurement of a single variable as a function of time.
  \> 1D measurements exist (e.g. distribution functions), but I'm declaring
  this out of scope for heliopy (see below for info on other packages tackling
  this).
- "space plasmas" - this is simultaneously limiting but permissive. As long
  as it's a plasma above the earth's atmosphere it's in.

Given this vision, I think the `heliopy.data` and `heliopy.spice` modules has
most bases covered. I am very open to the possibility that there are other tools
that fit within this vision that are missing. If you think that's the case, and
you want to add them, drop me an email.

The future of heliopy
---------------------
I'm not really sure what the future of heliopy is, but it's anything bigger in
scope than the above then I don't think it involves me at the helm.
I super keen to discuss the possibility of handing over the heliopy keys to
someone else who has energy and time to drive it forward though! If you are keen
and have ideas for where it should go, let me know and we can have a chat.

The rest of the ecosystem
-------------------------
Of course heliopy doesn't exist in a vacuum, and I thought I would finish by
mentioning some other python projects that are driving forward python tools
for heliophysics:

- [pyspedas](https://github.com/spedas/pyspedas) is a python port of the IDL
  SPEDAS library. I think it's widely used by magnetospheric physicists and
  haven't played with it recently. My memory is it's not very 'pythonic', but
  if you're coming from an IDL background that might be a big plus.
- [aidapy](https://aidapy.readthedocs.io/en/latest/index.html) is part of a
  massive ERC funded project to bring machine learning to heliophysics. What's
  super exciting here is someone is funded to work on it(!). It's early days,
  but I'm really looking forward to seeing where this goes.
- [heliopy-multid](https://gitlab.com/aidaspace/heliopy_multid) is an extension
  to heliopy to add multi-dimensional capabilities, built by the aidapy people.
  Not having time to add this into heliopy core was one thing that precipitated
  this blog post (in a good way!), so it's great to see it as a spin-off.

[1]: I've started an ADS library of publications that use heliopy here: https://ui.adsabs.harvard.edu/user/libraries/i6W23BcOSzmFZv-8iE61gA
[2]: https://github.com/heliopython/heliopy/graphs/contributors
