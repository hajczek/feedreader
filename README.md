# PROJECT 'FEED READER TESTING'

Test suite based on [Jasmine](http://jasmine.github.io/) for a web-based application that reads RSS feeds.


## WHAT CHECKS THESE TESTS

1. That the RSS Feed is defined.
2. That all elements `feed` in the `allFeeds` object have a URL defined and that the URL is not empty.
3. That all elemenst `feed` in the `allFeeds` object have a name defined and that the name is not empty.
4. That the menu element is hidden by default. This test have two expectations: does the menu display when clicked and does it hide when clicked again.
5. That when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
6. That when a new feed is loaded by the `loadFeed` function the content actually changes.

## HOW TO RUN THE APPLICATION

1. Download folder with application files.
2. Unzip downloaded folder.
3. Put this folder on local or remote server.
4. Open file .html in your browser. Now you can see RSS feeds and tests results below feeds.

## REQUIREMENTS
1. Server (local or external).
2. Browser with JavaScript enabled.

## LICENSE
The MIT License - See [license.md](https://github.com/hajczek/feedreader/blob/master/license/License.md)
