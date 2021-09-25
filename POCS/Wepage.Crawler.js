Workable POC:


(function(host) {

    function Crawler() {
        this.visitedURLs = {};
    };
    
    Crawler.webpage = require('webpage');

   
    Crawler.prototype.crawl = function (url, depth, onSuccess, onFailure) {
        if (0 == depth || this.visitedURLs[url]) {
            return;
        }; 
        var self = this;


        var page = Crawler.webpage.create();

        page.open(url, function (status) {
            if ('fail' === status) { 
                onFailure({
                    url: url, 
                    status: status
                });
            } 
            else {

                var documentHTML = page.evaluate(function () {

                    var reviewCountSelect = document.querySelectorAll('.reviewPage')[0].children[0].innerText;
                    var reviewCount = reviewCountSelect.substring(3 + reviewCountSelect.lastIndexOf('of'));
                   


                    var reviews = [];
                    for(var i = 1; i <= reviewCount; i++) {
                        var review = document.querySelectorAll('.review')[i];
                        

                        reviews.push({
                            reviewername: review.childNodes[1].children[1].children[1].outerText,
                            date: review.childNodes[1].children[1].children[3].outerText,
                            overall: review.childNodes[1].children[0].children[1].innerText,
                            comment: review.children[1].innerText
                        });
                    }
                    return reviews;
                });

                self.crawlURLs(self.getAllURLs(page), depth - 1, onSuccess, onFailure);
                self.visitedURLs[url] = true;
                onSuccess({
                    url: url,
                    status: status,
                    content: documentHTML
                });
            };
        });
    };

    Crawler.prototype.getAllURLs = function(page) {

        return page.evaluate(function () {
            return Array.prototype.slice.call(document.querySelectorAll("a"), 0)
                .map(function (link) {
                    return link.getAttribute("href");
                });
        });
    };

    Crawler.prototype.crawlURLs = function(urls, depth, onSuccess, onFailure) {
        var self = this;
        if(depth < 1) { return; }
        urls.filter(function (url) {
            return Crawler.isTopLevelURL(url);
        }).forEach(function (url) {
            self.crawl(url, depth, onSuccess, onFailure);
        });
    };

    Crawler.isTopLevelURL = function(url) {
        return 0 == url.indexOf("http");
    };

    host.Crawler = Crawler;
})(phantom);

/**
 * https://www.tigerdirect.com/applications/searchtools/item-details.asp?EdpNo=1495484
 * https://www.tigerdirect.com/applications/SearchTools/item-details.asp?EdpNo=708915
 * https://www.tigerdirect.com/applications/searchtools/item-details.asp?EdpNo=639065
 * 
 */
new phantom.Crawler().crawl("https://www.tigerdirect.com/applications/searchtools/item-details.asp?EdpNo=639065", 1, 
    function onSuccess(page) {

    }, 
    function onFailure(page) {
        console.log("Could not load page. URL = " +  page.url + " status = " + page.status);
    }
);

