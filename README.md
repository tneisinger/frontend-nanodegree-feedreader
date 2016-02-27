# Project Overview

This is my submission for project #6 of the Udacity Frontend Nanodegree
program.  In this project, I was given a simple application and was required to
use [Jasmine](http://jasmine.github.io/) to write tests to verify the
functionality of the application.

# Setup

To run the application, simply clone this repo and open the index.html in your
favorite web browser.  The Jasmine test outcomes will be displayed at the
bottom of the page.

# NOTE: Not All Tests Will Pass!

One of the key benefits of completing this project was to gain experience in Test Driven
Development.  Test Driven Development is a technique in which the tests for a
feature are written BEFORE the feature is implemented.

In this project, I have written tests for two features that have not been
implemented yet: an Entry Count feature and a Current Feed feature. The tests
for these features will not pass.  These features and their specs are described
below.

## The 'Entry Count' Feature

Once complete, the Entry Count feature would add an empty element with a class
of `entry-count` to the DOM. When a new feed is selected, the `entry-count`
element would be filled with a string to describe the number of entries being
displayed for the current feed. Whenever a new feed is selected, the
`entry-count` element would update to describe the number of entries being
shown for the new feed.  For example, the `entry-count` element would contain
the string, "20 Entries", if the current feed were displaying 20 entries.

### Specs

This feature has four specs that test it.  The first two are in the Entry Count
test suite.  These two specs check that the `entry-count` element is in the
DOM, and that it is empty when the app first loads.

The final two specs for this feature are divided between the Initial Entries
test suite and the New Feed Selection test suite.  Both of these specs check
that the `entry-count` element correctly describes the number of entries after
loading a new feed.

## The 'Current Feed' Feature

Once complete, this feature would add a `current-feed` class to the `<a>`
element in the slide menu that corresponds to the currently loaded feed.  This
would allow different styling to be applied to that `<a>` element. When the app
first loads, no `<a>` element in the menu should have the `current-feed` class.
After any feed has been loaded, the `current-feed` class should only be
present on the corresponding `<a>` element in the slide menu.

### Specs

There are three specs which test for this feature.  The first checks that there
is no `<a>` element in the slide menu that has the `current-feed` class when the
app first loads.  This test can be found in the Menu test suite.

The other two specs for this feature can be found in the Intial Entries test
suite and the New Feed Selection test suite.  Both of these specs check that
after a new feed has loaded, only the `<a>` element that corresponds to the
current feed has the `current-feed` class.
