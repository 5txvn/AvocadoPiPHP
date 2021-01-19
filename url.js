function url() {
    var fetch = document.getElementById("output");
    var command = document.getElementById("input").value;
    var prefix = "$url%"
    let link1 = '<a href="https://'
    let link2 = '">'
    let link3 = '</a>'
  let res = ""
  switch (command) {
      case (prefix + "youtube"):
          res = link1 + "youtube.com" + link2 + "Youtube" + link3;
          break;
      case (prefix + "wikipedia"):
          res = link1 + "en.wikipedia.org" + link2 + "Wikipedia" + link3;
          break;
      case (prefix + "twitter"):
          res = link1 + "twitter.com" + link2 + "Twitter" + link3;
          break;
      case (prefix + "facebook"):
          res = link1 + "facebook.com" + link2 + "Facebook" + link3;
          break;
      case (prefix + "amazon"):
          res = link1 + "amazon.com" + link2 + "Amazon" + link3;
          break;
      case (prefix + "yelp"):
          res = link1 + "yelp.com" + link2 + "Yelp" + link3;
          break;
      case (prefix + "reddit"):
          res = link1 + "reddit.com" + link2 + "Reddit" + link3;
          break;
      case (prefix + "imdb"):
          res = link1 + "imdb.com" + link2 + "IMDb" + link3;
          break;
      case (prefix + "fandom"):
          res = link1 + "fandom.com" + link2 + "Fandom" + link3;
          break;
      case (prefix + "pinterest"):
          res = link1 + "pinterest.com" + link2 + "Pinterest" + link3;
          break;
      case (prefix + "trip.advisor"):
          res = link1 + "tripadvisor.com" + link2 + "Trip Advisor" + link3;
          break;
      case (prefix + "instagram"):
          res = link1 + "instagram.com" + link2 + "Instagram" + link3;
          break;
      case (prefix + "walmart"):
          res = link1 + "walmart.com" + link2 + "Walmart" + link3;
          break;
      case (prefix + "craigslist"):
          res = link1 + "craigslist.com" + link2 + "Craigslist" + link3;
          break;
      case (prefix + "ebay"):
          res = link1 + "ebay.com" + link2 + "Ebay" + link3;
          break;
      case (prefix + "linkedin"):
          res = link1 + "linkedin.com" + link2 + "Linkedin" + link3;
          break;
      case (prefix + "google.play"):
          res = link1 + "play.google.com" + link2 + "Google Play" + link3;
          break;
      case (prefix + "healthline"):
          res = link1 + "healthline.com" + link2 + "Healthline" + link3;
          break;
      case (prefix + "etsy"):
          res = link1 + "etsy.com" + link2 + "Etsy" + link3;
          break;
      case (prefix + "indeed"):
          res = link1 + "indeed.com" + link2 + "Indeed" + link3;
          break;
      case (prefix + "apple"):
          res = link1 + "apple.com" + link2 + "Apple" + link3;
          break;
      case (prefix + "espn"):
          res = link1 + "espn.com" + link2 + "ESPN" + link3;
          break;
      case (prefix + "webmd"):
          res = link1 + "webmd.com" + link2 + "WebMD" + link3;
          break;
      case (prefix + "fb"):
          res = link1 + "fb.com" + link2 + "Facebook" + link3;
          break;
      case (prefix + "ny.times"):
          res = link1 + "nytimes.com" + link2 + "New York Times" + link3;
          break;
      case (prefix + "google"):
          res = link1 + "google.com" + link2 + "Google" + link3;
          break;
      case (prefix + "cnn"):
          res = link1 + "cnn.com" + link2 + "Cnn" + link3;
          break;
      case (prefix + "merriam.webster"):
          res = link1 + "merriam-webster.com" + link2 + "Merriam Webster" + link3;
          break;
      case (prefix + "gamepedia"):
          res = link1 + "gamepedia.com" + link2 + "Gamepedia" + link3;
          break;
      case (prefix + "microsoft"):
          res = link1 + "microsoft.com" + link2 + "Microsoft" + link3;
          break;
      case (prefix + "target"):
          res = link1 + "target.com" + link2 + "Target" + link3;
          break;
      case (prefix + "home.depot"):
          res = link1 + "homedepot.com" + link2 + "Home Depot" + link3;
          break;
      case (prefix + "quora"):
          res = link1 + "quora.com" + link2 + "Quora" + link3;
          break;
      case (prefix + "nih.gov"):
          res = link1 + "nih.gov" + link2 + "Nih.gov" + link3;
          break;
      case (prefix + "rotten.tomatoes"):
          res = link1 + "rottentomatoes.com" + link2 + "Rotten Tomatoes" + link3;
          break;
      case (prefix + "netflix"):
          res = link1 + "netflix.com" + link2 + "Netflix" + link3;
          break;
      case (prefix + "quizlet"):
          res = link1 + "quizlet.com" + link2 + "Quizlet" + link3;
          break;
      case (prefix + "weather"):
          res = link1 + "weather.com" + link2 + "Weather" + link3;
          break;
      case (prefix + "map.quest"):
          res = link1 + "mapquest.com" + link2 + "Map Quest" + link3;
          break;
      case (prefix + "britannica"):
          res = link1 + "britannica.com" + link2 + "Britannica" + link3;
          break;
      case (prefix + "buisness.insider"):
          res = link1 + "buisnessinsider.com" + link2 + "Buisness Insider" + link3;
          break;
      case (prefix + "dictionary"):
          res = link1 + "dictionary.com" + link2 + "Dictionary" + link3;
          break;
      case (prefix + "zillow"):
          res = link1 + "zillow.com" + link2 + "Zillow" + link3;
          break;
      case (prefix + "mayo.clinic"):
          res = link1 + "mayoclinic.org" + link2 + "Mayo Clinic" + link3;
          break;
      case (prefix + "best.buy"):
          res = link1 + "bestbuy.com" + link2 + "Best Buy" + link3;
          break;
      case (prefix + "guardian"):
          res = link1 + "theguardian.com" + link2 + "The Guardian" + link3;    
          break;
      case (prefix + "yahoo"):
          res = link1 + "yahoo.com" + link2 + "Yahoo" + link3;
          break;
      case (prefix + "msn"):
          res = link1 + "msn.com" + link2 + "Msn" + link3;
          break;
      case (prefix + "usa.today"):
          res = link1 + "usatoday.com" + link2 + "USA Today" + link3;
          break;
      case (prefix + "medical.news.today"):
          res = link1 + "medicalnewstoday.com" + link2 + "Medical News Today" + link3;
          break;
      case (prefix + "urban.dictionary"):
          res = link1 + "urbandictionary.com" + link2 + "Urban Dictionary" + link3;
          break;
      case (prefix + "us.news"):
          res = link1 + "usnews.com" + link2 + "US News" + link3;
          break;
      case (prefix + "fox.news"): 
          res = link1 + "foxnews.com" + link2 + "Fox News" + link3;
          break;
      case (prefix + "genius"):
          res = link1 + "genius.com" + link2 + "Genius" + link3;
          break;
      case (prefix + "all.recipes"):
          res = link1 + "allrecipies.com" + link2 + "All Recipies" + link3;
          break;
      case (prefix + "spotify"):
          res = link1 + "spotify.com" + link2 + "Spotify" + link3;
          break;
      case (prefix + "glass.door"):
          res = link1 + "glassdoor.com" + link2 + "Glass Door" + link3;
          break;
      case (prefix + "forbes"):
          res = link1 + "forbes.com" + link2 + "Forbes" + link3;
          break;
      case (prefix + "cnet"):
          res = link1 + "cnet.com" + link2 + "Cnet" + link3;
          break;
      case (prefix + "yahoo.finance"):
          res = link1 + "finance.yahoo.com" + link2 + "Yahoo Finance" + link3;
          break;
      case (prefix + "irs.gov"):
          res = link1 + "irs.gov" + link2 + "Irs.gov" + link3;
          break;
      case (prefix + "lowes"):
          res = link1 + "lowes.com" + link2 + "Lowes" + link3;
          break;
      case (prefix + "yahoo.mail"):
          res = link1 + "mail.yahoo.com" + link2 + "Yahoo Mail" + link3;
          break;
      case (prefix + "aol"):
          res = link1 + "aol.com" + link2 + "Aol" + link3;
          break;
      case (prefix + "steam.powered"):
          res = link1 + "steampowered.com" + link2 + "Steam Powered" + link3;
          break;
      case (prefix + "washington.post"):
          res = link1 + "washingtonpost.com" + link2 + "Washington Post" + link3;
          break;
      case (prefix + "usps"):
          res = link1 + "usps.com" + link2 + "USPS" + link3;
          break;
      case (prefix + "office"):
          res = link1 + "office.com" + link2 + "Office" + link3;
          break;
      case (prefix + "retail.me.not"):
          res = link1 + "retailmenot.com" + link2 + "Retail Me Not" + link3;
          break;
      case (prefix + "wikitionary"):
          res = link1 + "wikitionary.org" + link2 + "Wikitionary" + link3;
          break;
      case (prefix + "paypal"):
          res = link1 + "paypal.com" + link2 + "Paypal" + link3;
          break;
      case (prefix + "food.network"):
          res = link1 + "foodnetwork.com" + link2 + "Food Network" + link3;
          break;
      case (prefix + "hulu"):
          res = link1 + "hulu.com" + link2 + "Hulu" + link3;
          break;
      case (prefix + "live"):
          res = link1 + "live.com" + link2 + "Live" + link3;
          break;
      case (prefix + "cbs.sports"):
          res = link1 + "cbssports.com" + link2 + "Cbs Sports" + link3;
          break;
      case (prefix + "wayfair"):
          res = link1 + "wayfair.com" + link2 + "Wayfair" + link3;
          break;
      case (prefix + "ca.gov"):
          res = link1 + "ca.gov" + link2 + "Ca.gov" + link3;
          break;
      case (prefix + "bleacher.report"):
          res = link1 + "bleacherreport.com" + link2 + "Bleacher Report" + link3;
          break;
      case (prefix + "macys"):
          res = link1 + "macys.com" + link2 + "Macy's" + link3;
          break;
      case (prefix + "accu.weather"):
          res = link1 + "accuweather.com" + link2 + "Accu Weather" + link3;
          break;
      case (prefix + "xfinity"):
          res = link1 + "xfinity.com" + link2 + "Xfinity" + link3;
          break;
      case (prefix + "go"):
          res = link1 + "go.com" + link2 + "Go" + link3;
          break;
      case (prefix + "tech.radar"):
          res = link1 + "techradar.com" + link2 + "Tech Radar" + link3;
          break;
      case (prefix + "groupon"):
          res = link1 + "groupon.com" + link2 + "Groupon" + link3;
          break;
      case (prefix + "investopedia"):
          res = link1 + "investopedia.com" + link2 + "Investopedia" + link3;
          break;
      case (prefix + "yellow.pages"):
          res = link1 + "yellowpages.com" + link2 + "Yellow Pages" + link3;
          break;
      case (prefix + "steam.community"):
          res = link1 + "steamcommunity.com" + link2 + "Steam Community" + link3;
          break;
      case (prefix + "chase"):
          res = link1 + "chase.com" + link2 + "Chase" + link3;
          break;
      case (prefix + "wells.fargo"):
          res = link1 + "wellsfargo.com" + link2 + "Wells Fargo" + link3;
          break;
      case (prefix + "npr"):
          res = link1 + "npr.org" + link2 + "Npr" + link3;
          break;
      case (prefix + "apartments"):
          res = link1 + "apartments.com" + link2 + "Apartments" + link3;
          break;
      case (prefix + "roblox"):
          res = link1 + "roblox.com" + link2 + "Roblox" + link3;
          break;
      case (prefix + "huffpost"):
          res = link1 + "huffpost.com" + link2 + "Huffpost" + link3;
          break;
      case (prefix + "google.books"):
          res = link1 + "books.google.com" + link2 + "Google Books" + link3;
          break;
      case (prefix + "bank.of.america"):
          res = link1 + "bankofamerica.com" + link2 + "Bank of America" + link3;
          break;
      case (prefix + "bbb"):
          res = link1 + "bbb.org" + link2 + "BBB" + link3;
          break;
      case (prefix + "expedia"):
          res = link1 + "expedia.com" + link2 + "Expedia" + link3;
          break;
      case (prefix + "wikihow"):
          res = link1 + "wikihow.com" + link2 + "Wikihow" + link3;
          break;
      case (prefix + "ign"):
          res = link1 + "ign.com" + link2 + "IGN" + link3;
          break;
      case (prefix + "wowhead"):
          res = link1 + "wowhead.com" + link2 + "Wowhead" + link3;
          break;
      case (prefix + "console"):
          res = link1 + "https://AvocadoPiConsole.therealenny1.repl.co" + link2 + "Avocado Pi Console" + link3;
          break;
      //url downloads    
      case ("$download%macosx"):
          res = link1 + "https://drive.google.com/file/d/1KIPpA2r5g7SvAvoVSXxnK4SKTSwi84Dr/view?usp=sharing" + link2 + "Download Avocado Pi for Mac OS X" + link3;
          break;
      case ("$download%windows"):
          res = link1 + "https://drive.google.com/file/d/1dLXeZCT7CDojqOe4chsNfW8Ry6PHgtjl/view?usp=sharing" + link2 + "Download Avocado Pi for Windows" + link3 ;
          break;
      case ("$download%linux"):
          res = link1 + "https://drive.google.com/file/d/15FuVq9QS5_zF_AQwk1u1DoCSzndUx0j0/view?usp=sharing" + link2 + "Download Avocado Pi for Linux" + link3;
          break;
      case ("$download%console%macosx"):
          res = link1 + "https://drive.google.com/file/d/11blqLONLv0EjpHmi02oDtbuTlyi0Hhrq/view?usp=sharing" + link2 + "Download Avocado Pi Console for Mac OS X" + link3;
          break;
      case ("$download%console%windows"):
          res = link1 + "https://drive.google.com/file/d/17sybZpCDO5ZRgfy6CesRZNbYwXUBXdss/view?usp=sharing" + link2 + "Download Avocado Pi Console for Windows" + link3;
          break;
      case ("$download%console%linux"):
          res = link1 + "https://drive.google.com/file/d/163oFa1Yn70N0a02ISyO3zWQbJATG5PyU/view?usp=sharing" + link2 + "Download Avocado Pi Console for Linux" + link3;
          break;
      case ("$src%github"):
          res = link1 + "https://github.com/exoticchild/AvocadoPi" + link2 + "Avocado Pi Github Repo" + link3;
          break;
 }
 fetch.innerHTML = res;
}