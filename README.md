# Project Overview

This is my submission for project #6 of the Udacity Frontend Nanodegree
program.  In this project, I was given a simple application and was required to
write tests for it using [Jasmine](http://jasmine.github.io/).

# Setup

To run the application, simply clone this repo and open the index.html file in
your favorite web browser.  The Jasmine test outcomes will be displayed at the
bottom of the page.

The test code can be found at `jasmine/spec/feedreader.js`.

# NOTE: Not All Tests Will Pass!

One of the key benefits of completing this project was to gain experience in
[test-driven
development](https://en.wikipedia.org/wiki/Test-driven_development).
Test-driven development is a technique in which the tests for a feature are
written BEFORE the feature is implemented.

In this project, I have written tests for two features that have not been
implemented yet: an **Entry Count** feature and a **Current Feed** feature. These
features and their specs are described below.

## The 'Entry Count' Feature

Once complete, the Entry Count feature would add an empty element with a class
of `entry-count` to the DOM. When a new feed is selected, the `entry-count`
element would be filled with a string to describe the number of entries being
displayed for the current feed. Whenever a new feed is selected, the
`entry-count` element would update to describe the number of entries being
shown for the new feed.  For example, the `entry-count` element would contain
the string, "20 Entries", if the current feed were displaying 20 entries.

### Specs

The Entry Count feature has four specs that test it.  The first two are in the
Entry Count test suite.  These two specs check that the `entry-count` element
is actually in the DOM, and that it is empty when the app first loads.

The final two specs for this feature are divided between the Initial Entries
test suite and the New Feed Selection test suite.  Both of these specs check
that the `entry-count` element correctly describes the number of entries after
loading a new feed.

## The 'Current Feed' Feature

Once complete, the Current Feed feature would add a `current-feed` class to the
`<a>` element in the slide menu that corresponds to the currently loaded feed.
This would allow different styling to be applied to that `<a>` element. When
the app first loads, no `<a>` element in the menu should have the
`current-feed` class.  After a feed has been loaded, the `current-feed` class
should be present on the corresponding `<a>` element in the slide menu, and no
others.

### Specs

There are three specs which test for this feature.  The first checks that there
is no `<a>` element in the slide menu that has the `current-feed` class when the
app first loads.  This test can be found in the Menu test suite.

The other two specs for this feature can be found in the Intial Entries test
suite and the New Feed Selection test suite.  Both of these specs check that
after a new feed has loaded, only the `<a>` element that corresponds to the
current feed has the `current-feed` class.
