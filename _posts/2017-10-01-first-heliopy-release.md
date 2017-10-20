---
layout: post
title: heliopy 0.1 released
---
Today I've released the first version of [heliopy][heliopy].
The idea behind it is a python package that automates the downloading and loading
of common space physics data sets (it's kind of like [sunpy][sunpy] for
in-situ data).

Downloading and importing data takes only a few lines of code:

{% highlight python %}
from datetime import datetime, timedelta
import heliopy.data.wind as wind

starttime = datetime(2016, 1, 1, 0, 0, 0)
endtime = starttime + timedelta(hours=2)

data = wind.mfi_h0(starttime, endtime)
{% endhighlight %}

and makes plotting data really easy
{% highlight python %}
import matplotlib.pyplot as plt
plt.plot(data[['Bx_gse', 'By_gse', 'Bz_gse']])
plt.show()
{% endhighlight %}

{:refdef: style="text-align: center;"}
![heliopy example plot]({{ site.url }}/images/heliopy_wind_example.jpg)
{: refdef}


Currently supported is magnetic field and proton/ion moment data
import for
- ACE
- ARTEMIS
- Cluster
- Helios
- IMP
- Messenger
- MMS
- Ulysses
- WIND

(see [here](http://docs.heliopy.org/en/stable/code_ref/data/index.html) for more information on exactly which datasets are supported)

The software is very new, but it should work out of the box on Linux, OSX, and
Windows (thanks to Matt Owens and Luke Barnard for being my accidental Windows
guinea pigs). See [https://heliopy.readthedocs.io/en/stable/installing.html](http://docs.heliopy.org/en/stable/installing.html) for details on how to take it for a spin.

If you have any questions, feel free to fire me an email at the address below;
if you want a specific data product to be supported by heliopy feel free to
[file a request](https://github.com/heliopython/heliopy/issues/new).

[heliopy]: http://docs.heliopy.org/en/stable/index.html
[sunpy]: http://www.sunpy.org/
