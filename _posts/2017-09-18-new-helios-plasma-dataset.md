---
layout: post
title: New Helios plasma dataset
redirect_from: /helios
---
If you're just after the data, click [here][corefit]; read on for more information.

With both the [Parker Solar Probe][psp] (PSP) and [Solar Orbiter][so] (SO) missions launching soon,
it's vital to know all we can about where they are flying, the inner heliosphere.
Up to now the only solar wind mission to visit the inner heliosphere is [Helios][helios],
and so our best guess at what the solar wind in the inner heliosphere looks
like comes from this mission.

As part of my PhD I've produced a brand new **freely available**,
**accurate**, and **reproducible**. data set that contains the
proton number densities, velocities, and temperatures measured by the two
Helios probes on their 10 year mission. Hopefully this will help everyone
in the community prepare for PSP and SO so we can hit the ground running when
data starts being sent back.

{:refdef: style="text-align: center;"}
![Helios 2]({{ site.url }}/images/helios2.jpg)
{: refdef}


Why a new dataset?
------------------
The only publicly available set of plasma for Helios up to now has been the
['merged' dataset][merged] hosted on NASA's server. Although good enough for some
things, it has always been unclear exactly how the dataset was generated from
the original ion distribution functions.

This year as part of a NASA project all the available data from the Helios
mission was collected in to a [single archive][archive]. This provided a good opportunity
to revisit the ion distribution functions.

What's new?
-----------
Just like the old data, our new data contains estimates of proton number
density, velocity. Here the new and old data are almost identical for velocity,
but much more accurate for number density.

The big difference between the new and old data is that we now provide both
parallel and perpendicular proton temperatures. This is important because
using a single temperature to characterise a distribution that truly has
two temperatures (parallel and perpendicular to the magnetic field)
can be very misleading. As an example, here's a figure:

{:refdef: style="text-align: center;"}
![Temperature comparison]({{ site.url }}/images/temperature_comparison.jpg)
{: refdef}

Often in the fast solar wind the two temperatures are relatively constant
(our orange and green lines, top panel). Trying to characterise the distribution with
one temperature (the blue line, top panel) can lead to the incorrect interpretation that
the temperature of the protons is varying wildly, whereas all that is happening
is that the magnetic field is moving, and the proton distribution is moving
with it.

Reproducibility
---------------
Along with the dataset there is a [users guide]() that spells out what data is
available, and how it was derived from the original distribution functions.
Importantly, [all the code]() that I used to create the new dataset has been
released too. This makes the entire dataset reproducible.

[archive]: http://helios-data.ssl.berkeley.edu/
[corefit]: http://helios-data.ssl.berkeley.edu/data/E1_experiment/New_proton_corefit_data_2017/
[merged]: ftp://spdf.gsfc.nasa.gov/pub/data/helios/helios1/merged/
[psp]: https://www.nasa.gov/content/goddard/parker-solar-probe
[so]: http://sci.esa.int/solar-orbiter/
[helios]: https://en.wikipedia.org/wiki/Helios_(spacecraft)
