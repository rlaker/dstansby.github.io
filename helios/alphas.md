---
layout: post
title: Helios alpha particle parameters
exclude: true
---

## Background
In 2018 I made a new proton core parameter dataset from the Helios mission
(for more details see [Stansby et al. 2018 Solar Physics](https://doi.org/10.1007/s11207-018-1377-3)).
In 2019 I added the capability to fit the alpha particle population, and to
roughly estimate the proton beam number density. I published two papers based
on small intervals of this newer data ([Stansby et al. 2019 A&A](https://doi.org/10.1051/0004-6361/201834900) and [Stansby et al. 2020 MNRAS](https://doi.org/10.1093/mnras/stz3422)). More recently I have run
the fitting routine for the entire Helios mission. This page serves as a link
to this data, and some brief notes on using the data.

# Health warning
I have not personally verified or validated this data to the level at which
I validated the fits used in my published articles. Previous data I have published
have been visually validated (ie. the fits were compared to the distribution function
to make sure they were an accurate characterisation of the distribution function)
and were only from select intervals.

There may be systematic effects in the fitting which mean only certain parameter
regimes are fit successfully. In particular, distributions with a low alpha particle
density may fail to be fit, or distribution where the alpha distribution significantly
overlaps with the proton distribution may also fail to be fit. This means you
should be very careful if doing statistical (as opposed to limited interval)
studies.

**Use the data at your own risk.** I am very happy to be consulted on use of the
data - see the bottom of the page for my contact details.

## The data
Get the data [here](https://liveuclac-my.sharepoint.com/:u:/g/personal/ucasdst_ucl_ac_uk/EQ9m72vrb4lPtxVSjE6O_E0BWqEkrIHssLpO5KKQC4xJ9Q?e=38pG4F). It's easiest to click on
"Download" in the top right and download the ~60MB .zip file containing all the
data files.

Files are sorted into folders by spacecraft (Helios 1/2) and then year. Within
each year there is a .csv file for each day where data exists. Data are in units
of *cm-3*, *km/s*, *K*. Every time stamp in which a distribution function was measured
by Helios is present in the files. Where fitting failed, the fitted parameters
are empty.

## Error codes
Error codes have the following meanings. Errors in the third category could in theory be recovered by an improved fitting process, and are not a limitation on the amount or quality of data available in each
individual distribution function.

Success:
1. Successful fitting

Failure due to instrument configuration/non-availability of data:
2. No magnetic field data available
4. Low data rate distribution
5. No proton data available
7. Two distribution functions with the same timestamp
8. Corrupted 1D distribution function

Failure of the fitting process:
3. Curve fitting failure
6. No alphas above the calculated energy cut
9. Fitted velocity below the caculated energy cut
10. High error on fitted parameters (> 100% relative error)

## Citing
If you use the data in publication, please cite [Stansby et al. 2019 A&A](https://doi.org/10.1051/0004-6361/201834900)
which describes the fitting in Appendix 1.

If you also use any of my proton
core fit data, please cite [Stansby et al. 2018 Solar Physics](https://doi.org/10.1007/s11207-018-1377-3)
which describes that dataset.
