---
layout: post
title: Predicted Parker Solar Probe orbits
redirect_from: "/PSP-orbits"
---

Below are a series of movies that show the predicted trajectory of Parker
Solar Probe. They are sorted by coordinate system, with a brief description
of each system given. Where they include the predicted Solar Orbiter trajectory,
it is for a Feb 2020 launch, which is not a certainty.

All movies are generated from SPICE kernels; if you would like any custom
versions made with different coordinate systems/extra bodies added, don't
hesitate to drop me a line at david.stansby14@imperial.ac.uk

Rules of the road
-----------------
Anyone is free to use these movies, and I encourage you to share them with as
many people as possible. If you show them in a presentation, please include a
link to this web page ([davidstansby.com/PSP-orbits](https://davidstansby.com/PSP-orbits)) below the movie.

Caveats
-------
- These are generated from an assumed launch date of 1st August 2018. PSP did
  not launch on this day, but as long as it lifts off within its current launch
  window, as far as I am aware the trajectory is nearly identical after the
  first Venus gravity assist at ~ 0.7 AU on the first orbit.
- **Do not do any science with these movies**. They are *predictions*, and are
  intended to give a (fairly accurate) idea of trajectories for planning
  purposes.

Movies
------

All coordinate systems are centred on the Sun. Elevation is angle above
(positive) or below (negative) the x-y plane. Azimuth is angle measured in
the x-y frame measured anticlockwise from the line y=0 (where x > 0).

Inertial ecliptic
=================

An inertial frame of reference. The x-y plane is the ecliptic plane.

<video width="750" height="750" controls>
  <source src="/movies/PSP_orbits/ECLIPJ2000.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
[Download](/movies/PSP_orbits/ECLIPJ2000.mp4)

Inertial heliographic
=====================

An inertial frame of reference. The x-y plane is the Sun's equator. This
differs from the "Inertial ecliptic" in elevation (in this frame elevation
is Carrington latitude)

<video width="750" height="750" controls>
  <source src="/movies/PSP_orbits/HCI.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
[Download](/movies/PSP_orbits/HCI.mp4)

Sun co-rotating
===============

A frame of reference that co-rotates with the surface of the Sun.

<video width="750" height="750" controls>
  <source src="/movies/PSP_orbits/IAU_sun.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
[Download](/movies/PSP_orbits/IAU_sun.mp4)

HEE
===
Heliocentric Earth Ecliptic. A frame of reference in which the Earth is
stationary, with the Sun at the origin.

<video width="750" height="750" controls>
  <source src="/movies/PSP_orbits/HEE.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
[Download](/movies/PSP_orbits/HEE.mp4)
