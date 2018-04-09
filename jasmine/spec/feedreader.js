
$(function() {
    
    describe('RSS Feeds', function() {
        
        // Test to make sure that the allFeeds variable has been defined.        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.        
        it('have defined url', function() {            
            allFeeds.forEach(function (feed, url) {             
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
                expect(feed.url).toMatch('http://');              
            });
            
        });

        // Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.        
         it('have defined name', function() {            
            allFeeds.forEach(function (feed, name) {             
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);        
            });            
        });
    });

    // Test for menu    
    describe('The menu', function() {             
        
        // Test that ensures the menu element is hidden by default. 
        it('is hidden by default', function() {            
            expect($('body').attr('class')).toBe('menu-hidden');
        });
        
         // Test that ensures the menu changes visibility when the menu icon is clicked.        
        it('is visible after click on menu icon and is hidden after second click on menu icon', function() {
            
            $('.menu-icon-link').click();
            expect($('body').attr('class')).not.toBe('menu-hidden');

            $('.menu-icon-link').click();
            expect($('body').attr('class')).toBe('menu-hidden');
        });
        
    });

    // Test for function loadFeed.    
    describe('Initial Entries', function() {
        
        // Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. 
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('puts element entry in the feed container', function(done) {
            var feed = $('.feed').html();
            loadFeed(1, function() {
                expect(feed).toMatch('entry');
                done();
            });
        
        });
        
    });
    
    // Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.    
    describe('New Feed Selection', function() {
        
        var content;
        var contentNew;
    
         beforeEach(function(done) {
            loadFeed(0, function() {
                content = $('body').html();
                done();
            });
        });
    
        it('changes content', function(done) {
            loadFeed(1, function() {
                contentNew = $('body').html();
                expect(contentNew).not.toBe(content);
            done();
            });
        
        });
        
    });     

}());
