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

In this project, I have written tests for two features that have not
been implemented yet: an Entry Count feature and a Current Feed feature. The
tests for these features will not pass.  These features are described below.

## The 'Entry Count' Feature

Once complete, the Entry Count feature would add an empty element to the DOM
with a class of 'entry-count'. When a new feed is selected, the entry-count
element would be filled with a string to describe the number of entries being
displayed for the current feed. Whenever a new feed is selected, the Entry
Count element would update to describe the number of entries being shown for
the new feed.

## The 'Current Feed' Feature

Once complete, the Current Feed feature would add a 'current-feed' class to the
<li> element in the slide-menu that corresponds to the currently displayed
Feed.  This would allow different styling to be applied to the selected <li>
element.  When the app first loads, no <li> element should have the
'current-feed' class.  After any feed has been selected, the 'current-feed'
class should be added to the corresponding <li> element in the menu.
