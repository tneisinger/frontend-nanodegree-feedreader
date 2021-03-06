/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of the tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* This suite is all about the RSS feeds definitions, the allFeeds variable
     * in our application.
     */
    describe('RSS Feeds', function() {

        /* Test to make sure that the allFeeds variable has been defined and
         * that it is not empty.
         */
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


    /* A test suite for the menu that slides in when the menu button is
     * clicked.
     */
    describe('The menu', function() {

        // Get a reference to the menu icon
        var menuIcon = $('.menu-icon-link')[0]; 

        // Check that the menu element is in the DOM.
        it('is in the DOM', function() {
            var menu = $('.slide-menu')[0];
            expect(menu).toBeDefined();
        });

        /* Test to ensure that the menu element is hidden by default. The menu
         * element is hidden if a parent of the slide-menu has a class of
         * 'menu-hidden'.  The menu element is visible when there is no parent
         * element with that class.
         */
        it('is hidden by default', function() {
            var hider = $('.slide-menu').parents('.menu-hidden')[0];
            expect(hider).toBeDefined();
        });

        // Test that there is a menu icon in the DOM
        it('has a corresponding menu icon in the DOM', function() {
            expect(menuIcon).toBeDefined();
        });

        /* Test to ensure that the menu changes visibility when the menu icon
         * is clicked. This test has two expectations: the menu should display
         * when clicked and it should hide when clicked again.
         */
        it('changes visibility when the menu icon is clicked', function() {

            /* Check that the menu displays when the menu icon is clicked.  The
             * menu displays if it does not have a parent element with the
             * 'menu-hidden' class.
             */
            menuIcon.click();
            var hider = $('.slide-menu').parents('.menu-hidden')[0];
            expect(hider).toBeUndefined();

            /* Check that the menu hides when the menu icon is clicked again.
             * The menu should have a parent with the 'menu-hidden' class.
             */
            menuIcon.click();
            hider = $('.slide-menu').parents('.menu-hidden')[0];
            expect(hider).toBeDefined();
        });

        it('does not style a feed as the "current-feed" initially', function() {
            var currentFeed = $('.slide-menu .current-feed')[0];
            expect(currentFeed).toBeUndefined();
        });

    });

    /* A test suite that checks the behavior of the '.entry-count' element.
     * The '.entry-count' element displays the number of entries that are
     * present for the current feed.  When the page first loads, before any
     * feed has loaded, the '.entry-count' element should be empty.  After
     * a feed has loaded, the '.entry-count' element should contain 'x
     * Entries', where x is the number of entries in the current feed.
     */
    describe('Entry Count', function() {
        // Get a reference to the '.entry-count' element.
        var entryCountElem = $('.entry-count')[0];

        // Check that the '.entry-count' element is in the DOM.
        it('is in the DOM', function() {
            expect(entryCountElem).toBeDefined();
        });

        // Check that the '.entry-count' element is empty.
        it('is empty on page load', function() {
            expect(entryCountElem.innerHTML).toBe('');
        });
    });

    /* A test suite that checks that the loadFeeds function successfully
     * acquires and inserts the initial entries into the DOM.  Also check that
     * the header-title and entry-count get updated.
     */
    describe('Initial Entries', function() {
        // A constant that is the ID of the feed that will be loaded.
        var NEW_FEED_ID = 0;

        /* Before running the specs, run the loadFeed function, passing
         * `done` as a callback, since loadFeed is an asynchronous function.
         */
        beforeAll(function(done) {
            loadFeed(NEW_FEED_ID, done);
        });

        // Check that at least one entry gets added to the DOM
        it('populate the feed div', function() {
            var entries = $('.feed .entry');
            expect(entries.length).toBeGreaterThan(0);
        });

        // Check that the header title gets changed to the feed name
        it('change the header title', function() {
          var headerTitle = $('.header-title');
          expect(headerTitle.text()).toBe(allFeeds[NEW_FEED_ID].name);
        });

        // Check that the entry count gets updated to the correct value
        it('update the entry count', function() {
            var entryCount = $('.entry-count').text();
            var entriesLen = $('.feed .entry').length;
            expect(entryCount).toBe(entriesLen + ' Entries');
        });

        /* Check that only the correct feed is marked as the current feed in
         * the slide menu.
         */
        it('mark only the loaded feed as the current feed in the menu', function() {
            var currentFeed = $('.feed-list .current-feed');
            expect(currentFeed.length).toBe(1);
            expect(currentFeed.data('id')).toBe(NEW_FEED_ID);
        });
    });


    /* A test suite that checks that the entries in the '.feed' div get
     * replaced with new entries when a new feed selection is made.
     */
    describe('New Feed Selection', function() {

        // A constant that is the ID of the last feed that will be loaded.
        var NEW_FEED_ID = 1;

        // If the allFeeds array does not have at least two feeds, throw an error.
        if (allFeeds.length < 2) {
            var err = new Error();
            err.message = 'The allFeeds array must contain at least 2 feeds in ' + 
                'order to test the functionality of New Feed Selections.';
            throw(err);
        }

        // Instantiate these variables in this wider scope.
        var entriesBefore,
            headerTitleBefore;

        /* Before running the specs, load an initial feed and save the entries
         * and headerTitle in variables for later testing. Then load another
         * feed to ensure that we are switching from one loaded feed to
         * another.
         */
        beforeAll(function(done) {
            // Load an initial feed
            loadFeed(0, function() {

                // After the feed has loaded, grab the html we need for tests
                entriesBefore = $('.feed .entry');
                headerTitleBefore = $('.header-title').text();

                // load a new feed
                loadFeed(NEW_FEED_ID, done);
            });
        });

        /* Check that the list of entries in the feed changes when the
         * `loadFeed` function is run with a different index.
         */
        it('replaces the list of entries in the feed div', function() {
            var entriesAfter = $('.feed .entry');
            expect(entriesBefore).not.toBe(entriesAfter);
        });

        // Check that the header-title changes when a new feed is loaded 
        it('Changes the header-title', function() {
            var headerTitleAfter = $('.header-title').text();
            expect(headerTitleBefore).not.toBe(headerTitleAfter);
            expect(headerTitleAfter).toBe(allFeeds[NEW_FEED_ID].name);
        });

        // Check that the entry count matches the new number of entries.
        it('updates the entry count', function() {
            var entryCountElem = $('.entry-count');
            var entriesLen = $('.feed .entry').length;
            expect(entryCountElem.text()).toBe(entriesLen + ' Entries');
        });

        /* Check that only the correct feed is marked as the current feed in
         * the slide menu.
         */
        it('marks only the new feed as the current feed in the menu', function() {
            var currentFeed = $('.feed-list .current-feed');
            expect(currentFeed.length).toBe(1);
            expect(currentFeed.data('id')).toBe(NEW_FEED_ID);
        });

    });

}());
