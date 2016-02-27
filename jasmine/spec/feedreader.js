/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         * */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that each feed in the allFeeds array has a url that
         * is a non-empty string.
         */
        it('have urls', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.name).toEqual(jasmine.any(String));  // Check that it is a string
                expect(feed.url).not.toBe('');
            });
        });


        /* Test that each feed in the allFeeds array has a name that
         * is a non-empty string.
         */
        it('have names', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).toEqual(jasmine.any(String));  // Check that it is a string
                expect(feed.name).not.toBe('');
            });
        });
    });


    /* A test suite for the menu that slides in when the
     * menu button is clicked.
     */
    describe('The menu', function() {
        // Get a reference to the <body> DOM element.
        var body = document.getElementsByTagName('body')[0];

        /* Test to ensure that the menu element is hidden
         * by default. The menu element is hidden if the
         * <body> element in the DOM has a class of
         * 'menu-hidden'.  The menu element is visible
         * when the <body> element does not have that
         * class.
         */
        it('is hidden by default', function() {
            expect(body.className).toBe('menu-hidden');
        });


         /* Test to ensure that the menu changes visibility when the menu icon
          * is clicked. This test has two expectations: the menu should display
          * when clicked and it should hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', function() {
            var menuIcon = document.getElementsByClassName('menu-icon-link')[0]; 

            // Check that the menu displays when the menu icon is clicked.
            menuIcon.click();
            expect(body.className).toBe('');

            // Check that the menu hides when the menu icon is clicked again.
            menuIcon.click();
            expect(body.className).toBe('menu-hidden');
        });
    });


    /* A test suite that checks that the loadFeeds function successfully
     * acquires and inserts the initial entries into the DOM.
     */
    describe('Initial Entries', function() {

        /* Before the running the spec(s), run the loadFeed function, passing
         * `done` as a callback, since loadFeed involves an asynchronous ajax
         * request.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* Check that at least one entry gets added to the DOM
         */
        it('populate the ".feed" div', function() {
            var entries = $('.feed .entry');
            expect(entries.length).toBeGreaterThan(0);
        });
    });


    /* A test suite that checks that the entries in the ".feed" div get
     * replaced with new entries when a new feed selection is made.
     */
    describe('New Feed Selection', function() {

        // Make sure that the allFeeds array contains at least two feeds
        if (allFeeds.length < 2) {
            throw 'The allFeeds array must contain at least 2 feeds in ' + 
                'order to test the functionality of New Feed Selections.'
        }

        /* Before the running the spec(s), run the loadFeed function, passing
         * `done` as a callback, since loadFeed involves an asynchronous ajax
         * request.
         */
        beforeEach(function(done) {
            loadFeed(1, done);
        });

        /* Check that the list of entries in the feed changes when the
         * `loadFeed` function is run with a different index.
         */
        it('replaces the list of entries in the ".feed" div', function(done) {
            var entriesBefore = $('.feed .entry');
            loadFeed(0, function() {
                var entriesAfter = $('.feed .entry'); 
                expect(entriesBefore).not.toBe(entriesAfter);
                done();
            });
        });

        /* Check that the header-title changes when a new feed is loaded
         */
        it('Changes the header-title', function(done) {
            var headerTitleBefore = $('.header-title').text();
            loadFeed(0, function() {
                var headerTitleAfter = $('.header-title').text();
                expect(headerTitleBefore).not.toBe(headerTitleAfter);
                done();
            });
        });
    });
}());
