---
layout: post
title: Solar Obiter and Parker Solar Probe orbit movies
exclude: true
redirect_from: "/PSP-orbits/"
redirect_from: "/SO-PSP-orbits/"
---

## Summary
Below are a series of movies that show the predicted trajectory of Solar Orbiter
and Parker Solar Probe. They are sorted by coordinate system, with a brief description
of each system given. Where they include the predicted Solar Orbiter trajectory,
it is for a Feb 2020 launch, which happened successfully.

# Custom movies
All movies are generated from SPICE kernels; if you would like any custom
versions made with different coordinate systems/extra bodies added, don't
hesitate to drop me a line at d.stansby@ucl.ac.uk

# Rules of the road
Anyone is free to use these movies, and I encourage you to share them with as
many people as possible. If you show them, please include a
link to this web page
([davidstansby.com/SO-PSP-orbits](https://www.davidstansby.com/SO-PSP-orbits)
is a short link that redirects here) below the movie.

# Caveats
- The Solar Orbiter trajectories are based on an expected launch date of
  February 2020.
- **Do not do any science with these movies**. They are *predictions*, and are
  intended to give a (fairly accurate) idea of trajectories for planning
  purposes.

## Movies

All coordinate systems are centred on the Sun. Elevation is angle above
(positive) or below (negative) the x-y plane. Azimuth is angle measured in
the x-y frame measured anticlockwise from the line y=0 (where x > 0).

# Inertial heliographic
An inertial frame of reference. The x-y plane is the Sun's equator. This
differs from the "Inertial ecliptic" in elevation (in this frame elevation
is Carrington latitude)

<video width="750" height="750" controls>
  <source src="/movies/PSP_orbits/HCI.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
[Download](/movies/PSP_orbits/HCI.mp4), [Download with elevation timeseries](/movies/PSP_orbits/HCI_full.mp4)

# Sun co-rotating
A frame of reference that co-rotates with the surface of the Sun.

<video width="750" height="750" controls>
  <source src="/movies/PSP_orbits/IAU_sun.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
[Download](/movies/PSP_orbits/IAU_sun.mp4), [Download with elevation timeseries](/movies/PSP_orbits/IAU_sun_full.mp4)

# HEE
Heliocentric Earth Ecliptic. A frame of reference in which the Earth is
stationary, with the Sun at the origin.

<video width="750" height="750" controls>
  <source src="/movies/PSP_orbits/HEE.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
[Download](/movies/PSP_orbits/HEE.mp4), [Download with elevation timeseries](/movies/PSP_orbits/HEE_full.mp4)

#### Changelog
- 12/03/2020 - Removed Parker spiral lines for clarity (please email me if you want a version with this on!), added BepiColumbo, removed the ECLIPTICJ2000 frame (again, email me if you want this), and added download links to just the orbit plots without the timeseries.
- 07/02/2019 - Added Parker spiral lines (at v=500 km/s), and STEREO-A trajectory.
- 20/01/2019 - All movies are now generated from the correct post-launch PSP
spice kernel.
