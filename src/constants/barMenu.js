import { image, title } from "framer-motion/client"

export const barMenu = {
    beer: {
        title: "Beers Cans",
        image: "/bar-menu/beer-cans.png",
        categoryImage: "/bar-menu/categories/beer-cans.png",
        items: [
            { name: "BALOZI CAN", price: 350.00, image: "/bar-menu/showcase/balozi.png", },
            { name: "GORDONS TONIC CAN 330ML", price: 300.00, },
            { name: "Pineapple Punch Can", price: 300.00 },
            { name: "GUARANA Can", price: 300.00 },
            { name: "GUINESS CAN 500ML", price: 350.00 },
            { name: "HEINEKEN CAN 500ML", price: 400.00 },
            { name: "PILSNER CAN 500ML", price: 350.00 },
            { name: "SMIRNOFF BLACK CAN 330ML", price: 300.00 },
            { name: "TUSKER CAN 500ML", price: 350.00 },
            { name: "TUSKER CIDER CAN 500ML", price: 350.00 },
            { name: "TUSKER MALT CAN 500ML", price: 350.00 },
            { name: "TUSKER LITE CAN", price: 350.00 },
            { name: "WHITE CAP CAN 500ML", price: 350.00 },
            { name: "WHITE CAP CRISP CAN", price: 350.00 },
        ],
    },

    beers: {
        title: "Beers",
        image: "/bar-menu/beer.png",
        categoryImage: "/bar-menu/categories/smirnoff.png",
        items: [
            { name: "BALOZI", price: 300.00, },
            { name: "GUINESS KUBWA", price: 300.00 },
            { name: "PILSNER", price: 300.00, image: "/bar-menu/showcase/pilsner.png", },
            { name: "SMIRNOFF BLACK", price: 300.00 },
            { name: "SNAPP", price: 300.00 },
            { name: "TUSKER CIDER", price: 300.00 },
            { name: "TUSKER LAGER", price: 300.00 },
            { name: "TUSKER LITE", price: 300.00 },
            { name: "TUSKER MALT", price: 300.00 },
            { name: "WHITE CAP", price: 300.00 },
            { name: "WHITE CAP CRISP", price: 300.00 },
            { name: "KO 330ML", price: 350.00 },
            { name: "DESPERADO", price: 350.00 },
            { name: "HEINEKEN 330ML", price: 400.00 },
            { name: "HUNTERS", price: 300.00 },
            { name: "KINGFISHER", price: 300.00 },
            { name: "SAVANNAH DRY", price: 350.00, image: "/bar-menu/showcase/savannah.png" },
            { name: "SAVANNAH LEMON", price: 350.00 },
            { name: "WINDHOEK LAGER", price: 300.00 },
        ],
    },

    brandy: {
        title: "Brandy",
        image: "/bar-menu/brandy.jpg",
        categoryImage: "/bar-menu/categories/brandy.png",
        items: [
            { name: "KENYA CANE 375ML", price: 600.00, image: "/bar-menu/showcase/kenya-cane.png", },
            { name: "KENYA CANE 750ML", price: 2000.00 },
            { name: "RICHOT 250ML", price: 700.00 },
            { name: "RICHOT 375ML", price: 900.00 },
            { name: "RICHOT 750ML", price: 2000.00 },
            { name: "VICEROY 250ML", price: 700.00 },
            { name: "VICEROY 375ML", price: 1000.00 },
            { name: "VICEROY 750ML", price: 2000.00 },
            { name: "VICEROY TOT", price: 200.00 },
        ],
    },
    vodka: {
        title: "Vodka",
        image: "/bar-menu/vodka.jpg",
        categoryImage: "/bar-menu/categories/vodka.png",
        items: [
            { name: "CRUZ VINTAGE BLACK VODKA 750ML", price: 3000.00, },
            { name: "SMIRNOFF VODKA 250ML", price: 700.00, image: "/bar-menu/showcase/smirnoff.png" },
            { name: "SMIRNOFF VODKA 375ML", price: 1000.00 },
            { name: "SMIRNOFF VODKA 750ML", price: 1000.00 },
            { name: "FLIRT VODKA 1LTR", price: 2000.00 },
            { name: "SMIRNOFF VODKA TOT", price: 200.00 },
        ],
    },
    tequila: {
        title: "Tequila",
        image: "/bar-menu/tequila.jpeg",
        categoryImage: "/bar-menu/categories/tequila.png",
        items: [
            { name: "TEQUILA CAMINO 750ML", price: 3500.00, image: "/bar-menu/showcase/TEQUILA.png" },
            { name: "JOSE CUEVO 750ML", price: 4000.00, },
            { name: "TEQUILA ROSE 700ML", price: 3500.00 },
            { name: "JOSECUEVO SPECIAL TOT", price: 200.00 },
            { name: "TEQUILLA CAMINO TOT", price: 200.00 },
        ],
    },
    whisky: {
        title: "Whisky",
        image: "/bar-menu/whisky.png",
        categoryImage: "/bar-menu/categories/whisky.png",
        items: [
            { name: "BALLENTINE 1LTR", price: 3500.00, image: "/bar-menu/showcase/BALLENTINE.png" },
            { name: "BEST WHISKY 250ML", price: 600.00 },
            { name: "BLACK AND WHITE 500ML", price: 900.00 },
            { name: "BLACK AND WHITE 750ML", price: 2000.00 },
            { name: "BOND 7 375ML", price: 1000.00 },
            { name: "J&B RARE 375ML", price: 1500.00 },
            { name: "J&B RARE 750ML", price: 3000.00 },
            { name: "J/W DOUBLE BLACK 1LTR", price: 8500.00 },
            { name: "J/W DOUBLE BLACK 750ML", price: 7000.00 },
            { name: "JACKDANIELS 375ML", price: 3000.00 },
            { name: "JACKDANIELS 700ML", price: 5000.00 },
            { name: "JACKDANIEL 1LTR", price: 6500.00 },
            { name: "JAMESON 375ML", price: 2000.00 },
            { name: "JW BLACK 375ML", price: 3000.00 },
            { name: "JAMESON 750ML", price: 3500.00 },
            { name: "JW BLACK 1LRT", price: 6500.00 },
            { name: "JW BLACK 750ML", price: 5000.00 },
            { name: "JW GOLD LABEL 750ML", price: 8500.00 },
            { name: "OLD SMUGGLER 750ML", price: 2500.00 },
            { name: "OLMECA DARK CHOC 750ML", price: 4500.00 },
            { name: "SCOTTISH LEADER 12YRS 750ML", price: 5500.00 },
            { name: "SCOTTISH LEADER 3YRS 750ML.", price: 3000.00 },
            { name: "SINGLETON 15YRS 750ML", price: 9500.00 },
            { name: "TIA MARIA 1LTR", price: 5000.00 },
            { name: "VAT 375ML", price: 1200.00 },
            { name: "VAT 750ML", price: 2500.00 },
            { name: "WILLIAM LAWSON 375ML", price: 1200.00 },
            { name: "WILLIAM LAWSON 750ML", price: 2500.00 },
            { name: "WILLIAM LAWSON 1LTR", price: 3500.00 },
            { name: "GRANTS 750ML", price: 2500.00 },
            { name: "JW RED 375ML", price: 2000.00 },
            { name: "JW RED 750ML", price: 3000.00 },
            { name: "JW DOUBLE BLACK 1LTR", price: 8500.00 },
            { name: "SCOTTISH LEADER 3YRS 750ML", price: 3000.00 },
            { name: "SCOTTISH LEADER 12YRS 750ML", price: 5500.00 },
            { name: "FAMOUS GROUSE 750ML", price: 3000.00 },
            { name: "GLENFIDDICH 12YRS 750ML", price: 8000.00 },
            { name: "GLENFIDDICH 15YRS 750ML", price: 15000.00 },
            { name: "GLENFIDDICH 18YRS 750ML", price: 18000.00 },
            { name: "SINGLETON 15YRS 750ML", price: 9500.00 },
            { name: "SINGLETON 12YRS 750ML", price: 7500.00 },
            { name: "BULLEIT BOURBON 700ML", price: 5500.00 },
            { name: "CHIVAS REGAL 12YRS 700ML", price: 6000.00 },
            { name: "MONKEY SHOULDER 700ML", price: 6000.00 },
            { name: "PASSPORT 750ML", price: 2000.00 },
            { name: "ALL SEASONS 750ML", price: 2000.00 },
            { name: "BALLENTINE 750ML", price: 3500.00 },
            { name: "JAMESON TOT", price: 200.00 },
            { name: "JW BLACK TOT", price: 250.00 },
            { name: "JACKDANIELS TOT", price: 250.00 },
            { name: "GLEN FIDDICH 15YRS TOT", price: 600.00 },
            { name: "MONKEY SHOULDER TOT", price: 250.00 },
            { name: "OLMECA DARK CHOC TOTS", price: 250.00 },
        ],
    },
    cognac: {
        title: "Cognac",
        image: "/bar-menu/cognac.jpg",
        categoryImage: "/bar-menu/categories/cognag.png",
        items: [
            { name: "HENNESSY V.S 700ML", price: 7500.00, image: "/bar-menu/showcase/HENNESSY.png" },
            { name: "HENNESSY V.S.O.P 700ML", price: 15000.00 },
            { name: "MARTEL V.S 700ML", price: 7500.00 },
            { name: "MARTEL V.S.O.P 700ML", price: 12000.00 },
            { name: "REMY MARTIN VSOP 750ML", price: 15000.00 },
            { name: "COURVOISIER VSOP 1LTR", price: 6500.00 },
            { name: "HENNESSY V.S TOT", price: 350.00 },
            { name: "MARTEL VS TOT", price: 350.00 },
        ],
    },
    liqueur: {
        title: "Liqueur",
        image: "/bar-menu/liqueur.png",
        categoryImage: "/bar-menu/categories/liqueur.png",
        items: [
            { name: "SOUTHERN COMFORT 700ML", price: 3500.00 },
            { name: "JAGERMEISTER 700ML", price: 4000.00 },
            { name: "AMARULA 375ML", price: 1600.00 },
            { name: "AMARULA 750ML", price: 3000.00, image: "/bar-menu/showcase/AMARULA.png" },
            { name: "BAILEYS 750", price: 4000.00 },
            { name: "SHERIDANTS 1LTR", price: 7000.00 },
            { name: "ZAPPA RED 750ML", price: 2000.00 },
            { name: "ZAPPA BLUE 750ML", price: 2000.00 },
            { name: "ZAPPA CLEAR 750ML", price: 2000.00 },
            { name: "JAGERMEISTER TOT", price: 200.00 },
            { name: "SHERIDENT TOT", price: 300.00 },
            { name: "SOUTHERN COMFORT TOT", price: 200.00 },
        ],
    },
    rum: {
        title: "Rum",
        image: "/bar-menu/rum.png",
        categoryImage: "/bar-menu/categories/rum.png",
        items: [
            { name: "BACARDI SUPERIOR 750ML", price: 2500.00, image: "/bar-menu/showcase/BACARDI.png" },
            { name: "MALIBU 750ML", price: 3000.00 },
            { name: "MYERS RUM 750ML", price: 3000.00 },
            { name: "CAPTAIN MORGAN GOLD 250ML", price: 500.00 },
            { name: "CAPTAIN MORGAN GOLD 750ML", price: 3000.00 },
            { name: "MALIBU TOT", price: 200.00 },
        ],
    },
    wines: {
        title: "Wines",
        image: "/bar-menu/wines.jpg",
        categoryImage: "/bar-menu/categories/wines.png",
        items: [
            { name: "14TH STREET WHITE PER GLASS", price: 250.00, image: "/bar-menu/showcase/14TH-STREET-WHITE.png" },
            { name: "4TH STREET RED PER GLASS", price: 250.00 },
            { name: "4TH STREET RED 750ML", price: 1700.00 },
            { name: "4TH STREET WHITE 750ML", price: 1700.00 },
            { name: "AMOR 750ML", price: 1500.00 },
            { name: "CAPRICE DRY WHITE 1 LTR", price: 1000.00 },
            { name: "CAPRICE WHITE SWEET 1 LTR", price: 1000.00 },
            { name: "CAPRICE RED SWEET 1 LTR", price: 1000.00 },
            { name: "CAPRICE DRY RED 1LTR", price: 1000.00 },
            { name: "CELLAR CASK RED PER GLASS", price: 250.00 },
            { name: "CELLAR CASK WHITE PER GLASS", price: 250.00 },
            { name: "CELLAR CASK RED 750ML", price: 1700.00 },
            { name: "CELLAR CASK WHITE 750ML", price: 1700.00 },
            { name: "CHAMDOR RED 750ML", price: 1500.00 },
            { name: "DROSTDY HOF RED PER GLASS", price: 250.00 },
            { name: "DROSTDY HOF CRU PER GLASS", price: 250.00 },
            { name: "DROSTY HOF CRU 750ML", price: 1700.00 },
            { name: "DROSTY HOF 750ML", price: 1700.00 },
            { name: "FOUR COUSINS WHITE 750ML", price: 1700.00 },
            { name: "FOUR COUSINS RED 750ML", price: 1700.00 },
            { name: "FRONTERA 750ML", price: 2000.00 },
            { name: "GATO NEGRO 750 ML", price: 1700.00 },
            { name: "KAGORLUX 750ML", price: 2500.00 },
            { name: "KISS ME NOW 750ML", price: 2500.00 },
            { name: "NAMAQUA RED 750ML", price: 1500.00 },
            { name: "NAMAQUA WHITE 750ML", price: 1500.00 },
            { name: "NEDERBURG CABERNET SAUVIGNON 750M", price: 3000.00 },
            { name: "NEDERBURG MERLOT 750ML", price: 3000.00 },
            { name: "NEDERBURG WHITE 750ML", price: 2500.00 },
            { name: "NEDERBURG-SHIRAZ 750ML", price: 3000.00 },
            { name: "ROBERTSON WINERY RED 1.5LTR", price: 3500.00 },
            { name: "ROBERTSON WINERY RED 750ML", price: 2000.00 },
            { name: "ROBERTSON WINERY WHITE 1.5LTR", price: 3500.00 },
            { name: "ROBERTSON WINERY WHITE 750ML", price: 2000.00 },
            { name: "ROSSO NOBILE SWEETRED 750ML", price: 2500.00 },
            { name: "ROSSO NOBILE BIANCO 750ML", price: 2500.00 },
            { name: "SAINT ANNA 750ML", price: 1500.00 },
        ],
    },
}

export const getAllItems = () => {
    const allItems = []

    Object.values(barMenu).forEach((category) => {
        if (category.items) {
            category.items.forEach((item) => {
                allItems.push({
                    ...item,
                    category: category.title,
                })
            })
        }

        if (category.subcategories) {
            Object.values(category.subcategories).forEach((subcategory) => {
                subcategory.items.forEach((item) => {
                    allItems.push({
                        ...item,
                        category: category.title,
                        subcategory: subcategory.title,
                    })
                })
            })
        }
    })

    return allItems
}

export const searchItems = (query) => {
    const allItems = getAllItems()
    const lowercaseQuery = query.toLowerCase()

    return allItems.filter(
        (item) =>
            (item.name ?? "").toLowerCase().includes(lowercaseQuery) ||
            (item.description ?? "").toLowerCase().includes(lowercaseQuery) ||
            (item.category ?? "").toLowerCase().includes(lowercaseQuery) ||
            (item.subcategory ?? "").toLowerCase().includes(lowercaseQuery),
    )
}
