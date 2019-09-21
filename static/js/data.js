var data = [
    {
        "food": "steak",
        "paired_wine": [
            "merlot",
            "cabernet sauvignon",
            "pinot noir"
        ],
        "pairing_text": "Merlot, Cabernet Sauvignon, and Pinot Noir are great choices for Steak. After all, beef and red wine are a classic combination. Generally, leaner steaks go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier steaks can handle a bold red, such as cabernet sauvingnon. One wine you could try is Franciscan Estate Merlot. It has 4.3 out of 5 stars and a bottle costs about 25 dollars."
    },
    {
        "food": "Hamburger",
        "paired_wine": [
            "malbec",
            "merlot",
            "zinfandel"
        ],
        "pairing_text": "Burger on the menu? Try pairing with Malbec, Merlot, and Zinfandel. Merlot will be perfectly adequate for a classic burger with standard toppings. Bolder toppings call for bolder wines, such as a malbec or peppery zinfandel. The Belasco de Baquedano Swinto Malbec with a 4.2 out of 5 star rating seems like a good match. It costs about 23 dollars per bottle."
    },
    {
        "food": "pizza",
        "paired_wine": [
            "sangiovese",
            "barbera wine",
            "shiraz"
        ],
        "pairing_text": "Sangiovese, Barbera Wine, and Shiraz are my top picks for Pizza. The best wine for pizza depends on the toppings! Red sauce pizza will call for a red wine with some acidity, such as a barberan or sangiovese. Add pepperoni or sausage and you can go bolder with a syrah. You could try Felsina Chianti Colli Senesi. Reviewers quite like it with a 4.1 out of 5 star rating and a price of about 21 dollars per bottle."
    },
    {
        "food": "tuna",
        "paired_wine": [
            "merlot",
            "pinot noir",
            "rose wine"
        ],
        "pairing_text": "Tuna works really well with Merlot, Pinot Noir, and ros\u00e9 Wine. Though fish is often paired with white wine, 'meatier' fish like tuna can absolutely go with red wine. A Ros\u00e9 will also pair nicely, particularly if your tunan is prepared with ingredients better suited to a white wine. One wine you could try is Black River Winery Merlot. It has 4.3 out of 5 stars and a bottle costs about 10 dollars."
    },
    {
        "food": "pork",
        "paired_wine": [
            "malbec",
            "pinot noir",
            "sangiovese"
        ],
        "pairing_text": "Pork works well with red and white wine, depending on the flavors of the dish. Salty pork, such as ham or bacon, can be paired with fruity, acidic white wine like riesling. Spicy pork dishes can be enjoyed with a spicy, silghtly sweet Gew\u00fcrztraminer. Fatty pork cuts or pork ribs both go well with a red zinfandel. We may be able to make a better recommendation if you ask again with a specific cut of pork or pork dish."
    },
    {
        "food": "tacos",
        "paired_wine": [
            "pinot noir",
            "riesling",
            "sparkling rose"
        ],
        "pairing_text": "Pinot Noir, Riesling, and Sparkling ros\u00e9 are great choices for Tacos. Acidic white wines like riesling or low-tannin reds like pinot noir can work well with Mexican dishes. Sparkling ros\u00e9 is a safe pairing too. You could try Siduri Sta. Rita Hills Pinot Noir. Reviewers quite like it with a 4.2 out of 5 star rating and a price of about 33 dollars per bottle."
    },
    {
        "food": "mexican",
        "paired_wine": [
            "riesling",
            "pinot noir",
            "sparkling rose"
        ],
        "pairing_text": "Mexican on the menu? Try pairing with Riesling, Pinot Noir, and Sparkling ros\u00e9. Acidic white wines like riesling or low-tannin reds like pinot noir can work well with Mexican dishes. Sparkling ros\u00e9 is a safe pairing too. You could try Heinz Eifel Riesling Spatlese. Reviewers quite like it with a 4 out of 5 star rating and a price of about 14 dollars per bottle."
    },
    {
        "food": "chinese",
        "paired_wine": [
            "gewurztraminer",
            "chenin blanc",
            "riesling"
        ],
        "pairing_text": "Chinese works really well with Gewurztraminer, Chenin Blanc, and Riesling. The best wine for Asian food depends on the cuisine and dish - of course - but these acidic whites pair with a number of traditional meals, spicy or not. You could try Chateau Bianca Gewurztraminer. Reviewers quite like it with a 4 out of 5 star rating and a price of about 15 dollars per bottle."
    },
    {
        "food": "fajitas",
        "paired_wine": [
            "pinot noir",
            "riesling",
            "sparkling rose"
        ],
        "pairing_text": "Pinot Noir, Riesling, and Sparkling ros\u00e9 are my top picks for Fajitas. Acidic white wines like riesling or low-tannin reds like pinot noir can work well with Mexican dishes. Sparkling ros\u00e9 is a safe pairing too. You could try SketchBook Pinot Noir Wine. Reviewers quite like it with a 5 out of 5 star rating and a price of about 20 dollars per bottle."
    },
    {
        "food": "salmon",
        "paired_wine": [
            "chardonnay",
            "pinot noir",
            "sauvignon blanc"
        ],
        "pairing_text": "Salmon works really well with Chardonnay, Pinot Noir, and Sauvignon Blanc. To decide on white or red, you should consider your seasoning and sauces. Chardonnay is a great friend to buttery, creamy dishes, while sauvignon blanc can complement herb or citrus-centric dishes. A light-bodied, low-tannin red such as the pinot noir goes great with broiled or grilled salmon. One wine you could try is Ghost Pines Sonoma County Napa County Monterey County Chardonnay. It has 5 out of 5 stars and a bottle costs about 27 dollars."
    },
    {
        "food": "meatloaf",
        "paired_wine": [
            "cabernet sauvignon",
            "zinfandel"
        ],
        "pairing_text": "Cabernet Sauvignon and Zinfandel are my top picks for Meatloaf. Meatloaf will work with many red wines. We recommend something bold and fruity, like a Cabernet Sauvignon or Zinfandel. The Ghost Block Oakville Estate Cabernet Sauvignon with a 4.6 out of 5 star rating seems like a good match. It costs about 60 dollars per bottle."
    },
    {
        "food": "crabcakes",
        "paired_wine": [
            "cava",
            "chardonnay",
            "sauvignon blanc"
        ],
        "pairing_text": "Crabcakes can be paired with Cava, Chardonnay, and Sauvignon Blanc. Sparkling wine like cava goes great with fried food in general. Chardonnay is a classic pairing, but sauvignon blanc is great if your crab cakes are on the spicier side. The Juve Y Camps Brut Nature Reserva de la Familia Cava with a 4.3 out of 5 star rating seems like a good match. It costs about 16 dollars per bottle."
    },
    {
        "food": "lobster",
        "paired_wine": [
            "chablis",
            "chardonnay"
        ],
        "pairing_text": "Chablis and Chardonnay are great choices for Lobster. Chablis is perfect with lobster, but a chardonny from other regions is bound to hit the spot too. You could try Louis Jadot Chablis. Reviewers quite like it with a 4.4 out of 5 star rating and a price of about 20 dollars per bottle."
    },
    {
        "food": "fish",
        "paired_wine": [
            "pinot grigio",
            "gruener veltliner",
            "pinot noir"
        ],
        "pairing_text": "Fish can be paired with Pinot Grigio, Gruener Veltliner, and Pinot Noir. Fish is as diverse as wine, so it's hard to pick wines that go with every fish. A crisp white wine, such as a pinot grigio or Gr\u00fcner Veltliner, will suit any delicately flavored white fish. Meaty, strongly flavored fish such as salmon and tuna can even handle a light red wine, such as a pinot noir. The Tiamo Pinot Grigio with a 4.2 out of 5 star rating seems like a good match. It costs about 8 dollars per bottle."
    },
    {
        "food": "shrimp",
        "paired_wine": [
            "pinot grigio",
            "riesling",
            "sauvignon blanc"
        ],
        "pairing_text": "Pinot Grigio, Riesling, and Sauvignon Blanc are my top picks for Shrimp. These crisp white wines work well with shrimp prepared in a variety of ways, whether grilled, fried, or in garlic sauce. The Holm Oak Tasmania Pinot Gris with a 4 out of 5 star rating seems like a good match. It costs about 21 dollars per bottle."
    },
    {
        "food": "oysters",
        "paired_wine": [
            "chardonnay",
            "muscadet",
            "riesling"
        ],
        "pairing_text": "Chardonnay, Muscadet, and Riesling are my top picks for Oysters. Buttery chardonnay is great for scallops, shrimp, crab, and lobster, while muscadet is a classic pick for mussels, oysters, and clams. If you've got some spice in your shellfish, a semi-dry riesling can balance out the heat. You could try Mercer Estates Zephyr Ridge Vineyard Reserve Chardonnay. Reviewers quite like it with a 5 out of 5 star rating and a price of about 35 dollars per bottle."
    },
    {
        "food": "italian",
        "paired_wine": [
            "chianti",
            "trebbiano",
            "verdicchio"
        ],
        "pairing_text": "Italian works really well with Chianti, Trebbiano, and Verdicchio. Italians know food and they know wine. Trebbiano and Verdicchio are Italian white wines that pair well with fish and white meat, while Chianti is a great Italian red for heavier, bolder dishes. You could try Ricasoli Castello di Brolio Chianti Classico. Reviewers quite like it with a 4.3 out of 5 star rating and a price of about 46 dollars per bottle."
    },
    {
        "food": "indian",
        "paired_wine": [
            "gruener veltliner",
            "riesling",
            "sparkling rose"
        ],
        "pairing_text": "Gruener Veltliner, Riesling, and Sparkling ros\u00e9 are great choices for Indian. The best wine for Indian food will depending on the dish, of course, but these picks can be served chilled and have some sweetness to complement the spiciness and complex flavors of a wide variety of traditional dishes. The Laurenz V Singing Gruner Veltliner with a 4.4 out of 5 star rating seems like a good match. It costs about 16 dollars per bottle."
    },
    {
        "food": "barbecue",
        "paired_wine": [
            "zinfandel",
            "rose wine"
        ],
        "pairing_text": "Zinfandel and ros\u00e9 Wine are my top picks for Barbecue. A ros\u00e9 is refreshing in hot temperatures and complements sweet and spicy sauces and rubs. Zinfandel is a classic red wine choice for barbecue, especially for pork ribs and beef brisket. One wine you could try is Bella Grace Vineyards Old Vine Zinfandel. It has 5 out of 5 stars and a bottle costs about 29 dollars."
    },
    {
        "food": "sushi",
        "paired_wine": [
            "riesling",
            "sake",
            "sauvignon blanc",
            "sparkling rose",
            "sparkling wine"
        ],
        "pairing_text": "Riesling, Sake, and Sauvignon Blanc are my top picks for Sushi. If you're serving a selection of appetizers, you can't go wrong with these. Both are very food friendly and complement a variety of flavors. The Engel Wines Riesling - Kosher with a 5 out of 5 star rating seems like a good match. It costs about 20 dollars per bottle."
    },
    {
        "food": "cajun",
        "paired_wine": [
            "albarino",
            "sauvignon blanc",
            "rose wine"
        ],
        "pairing_text": "Albarino, Sauvignon Blanc, and ros\u00e9 Wine are my top picks for Cajun. These low-tannin, lower alcohol wines will complement the heat in spicy cajun dishes, instead of making your mouth burn more. One wine you could try is La Canan Albarino. It has 4.1 out of 5 stars and a bottle costs about 20 dollars."
    },
    {
        "food": "greek",
        "paired_wine": [
            "agiorgitiko",
            "assyrtiko",
            "moschofilero"
        ],
        "pairing_text": "Greek can be paired with Agiorgitiko, Assyrtiko, and Moschofilero. If you feel like going Greek with your Greek food, assyrtiko and moschofilero are both lovely white wines to pair with chicken, seafood, etc. Agiorgitiko is a full bodied red suitable for roasted meats and lamb. You could try Sigalas Assyrtiko Santorini. Reviewers quite like it with a 4.2 out of 5 star rating and a price of about 22 dollars per bottle."
    },
    {
        "food": "southern",
        "paired_wine": [
            "riesling",
            "sparkling wine",
            "zinfandel"
        ],
        "pairing_text": "Riesling, Sparkling Wine, and Zinfandel are great choices for Southern. In general, there are a few rules that will help you pair wine with southern food. Food-friendly riesling or sparkling white wine will work with many fried foods, while zinfandel is great with barbecued fare. One wine you could try is Chateau Ste. Michelle Cold Creek Vineyard Riesling. It has 4.2 out of 5 stars and a bottle costs about 15 dollars."
    },
    {
        "food": "chicken",
        "paired_wine": [
            "chardonnay",
            "pinot noir",
            "sauvignon blanc"
        ],
        "pairing_text": "Chicken can be paired with Chardonnay, Pinot Noir, and Sauvignon Blanc. White meat is typically paired with white wine as to not overpower the flavor of the meat, so chardonnay and sauvignon blanc are safe choices. Chicken prepared with a tomato sauce or certainly a red wine sauce can and should be served with a red like a pinot noir. The District 7 Estate Chardonnay with a 5 out of 5 star rating seems like a good match. It costs about 18 dollars per bottle."
    },
    {
        "food": "beef",
        "paired_wine": [
            "merlot",
            "cabernet sauvignon",
            "pinot noir"
        ],
        "pairing_text": "Merlot, Cabernet Sauvignon, and Pinot Noir are great choices for Beef. Beef and red wine are a classic combination. Generally, leaner cuts of beef go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier cuts can handle a bold red, such as cabernet sauvingnon. One wine you could try is Director's Merlot. It has 5 out of 5 stars and a bottle costs about 21 dollars."
    },
    {
        "food": "tuna",
        "paired_wine": [
            "merlot",
            "pinot noir",
            "rose wine"
        ],
        "pairing_text": "Tuna works really well with Merlot, Pinot Noir, and ros\u00e9 Wine. Though fish is often paired with white wine, 'meatier' fish like tuna can absolutely go with red wine. A Ros\u00e9 will also pair nicely, particularly if your tunan is prepared with ingredients better suited to a white wine. You could try Duckhorn Napa Valley Merlot. Reviewers quite like it with a 4.2 out of 5 star rating and a price of about 58 dollars per bottle."
    },
    {
        "food": "french fries",
        "paired_wine": [],
        "pairing_text": ""
    }
]