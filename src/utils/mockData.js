const resList = [ 
                    
  {
    type: "restaurant",
    "data": {
      "id": "101",
      "name": "Pizza Paradise",
      "cloudinaryImageId": "1513104890138-7c749659a591?w=500",
      "locality": "MG Road",
      "areaName": "Central District",
      "costForTwo": "₹400 for two",
      "cuisines": ["Pizza", "Italian", "Fast Food"],
      "avgRating": 4.3,
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+ ratings",
      "veg": false,
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 3.5,
        "slaString": "30 mins"
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      }
    }
  },

  {
    "type": "restaurant",
    "data": {
      "id": "102",
      "name": "Burger Hub",
      "cloudinaryImageId": "1568901346375-23c9450c58cd?w=500",
      "locality": "Park Street",
      "areaName": "Downtown",
      "costForTwo": "₹300 for two",
      "cuisines": ["Burgers", "American", "Fast Food"],
      "avgRating": 4.5,
      "avgRatingString": "4.5",
      "totalRatingsString": "15K+ ratings",
      "veg": false,
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 2,
        "slaString": "25 mins"
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      }
    }
  },

  {
    "type": "restaurant",
    "data": {
      "id": "103",
      "name": "Green Bites",
      "cloudinaryImageId": "1540189549336-e6e99c3679fe?w=500",
      "locality": "Residency Road",
      "areaName": "South Zone",
      "costForTwo": "₹250 for two",
      "cuisines": ["Healthy Food", "Salads", "Vegan"],
      "avgRating": 4.7,
      "avgRatingString": "4.7",
      "totalRatingsString": "8K+ ratings",
      "veg": true,
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.5,
        "slaString": "20 mins"
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      }
    }
  },

  {
    "type": "restaurant",
    "data": {
      "id": "104",
      "name": "Spice Kingdom",
      "cloudinaryImageId": "1585937421612-70a008356fbe?w=500",
      "locality": "Brigade Road",
      "areaName": "City Center",
      "costForTwo": "₹500 for two",
      "cuisines": ["Indian", "North Indian", "Biryani"],
      "avgRating": 4.2,
      "avgRatingString": "4.2",
      "totalRatingsString": "12K+ ratings",
      "veg": false,
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4,
        "slaString": "35 mins"
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      }
    }
  },

  {
    "type": "restaurant",
    "data": {
      "id": "105",
      "name": "Dessert Delight",
      "cloudinaryImageId": "1551024601-bec78aea704b?w=500",
      "locality": "Lavelle Road",
      "areaName": "West End",
      "costForTwo": "₹200 for two",
      "cuisines": ["Desserts", "Ice Cream", "Bakery"],
      "avgRating": 4.6,
      "avgRatingString": "4.6",
      "totalRatingsString": "7K+ ratings",
      "veg": true,
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.8,
        "slaString": "22 mins"
      },
      "aggregatedDiscountInfoV3": {
        "header": "25% OFF",
        "subHeader": "UPTO ₹60"
      }
    }
  },
  
{
  "type": "restaurant",
  "data": {
    "id": "107",
    "name": "Coffee Corner",
    "cloudinaryImageId": "1509042239860-f550ce710b93?w=500",
    "locality": "Hill Road",
    "areaName": "North Avenue",
    "costForTwo": "₹250 for two",
    "cuisines": ["Coffee", "Cafe", "Snacks"],
    "avgRating": 4.6,
    "avgRatingString": "4.6",
    "totalRatingsString": "11K+ ratings",
    "veg": true,
    "sla": {
      "deliveryTime": 18,
      "lastMileTravel": 1.2,
      "slaString": "18 mins"
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    }
  }
},
{
    "type": "restaurant",
  "data": {
    "id": "108",
    "name": "BBQ Nation",
    "cloudinaryImageId": "1529193591184-b1d58069ecdd?w=500",
    "locality": "Lake View",
    "areaName": "City Plaza",
    "costForTwo": "₹700 for two",
    "cuisines": ["Barbecue", "Grill", "North Indian"],
    "avgRating": 4.5,
    "avgRatingString": "4.5",
    "totalRatingsString": "20K+ ratings",
    "veg": false,
    "sla": {
      "deliveryTime": 38,
      "lastMileTravel": 4.7,
      "slaString": "38 mins"
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹120"
    }
  }
},
{
  "type": "restaurant",
  "data": {
    "id": "109",
    "name": "Waffle World",
    "cloudinaryImageId": "1504754524776-8f4f37790ca0?w=500",
    "locality": "Palm Street",
    "areaName": "East End",
    "costForTwo": "₹280 for two",
    "cuisines": ["Waffles", "Desserts", "Beverages"],
    "avgRating": 4.3,
    "avgRatingString": "4.3",
    "totalRatingsString": "6K+ ratings",
    "veg": true,
    "sla": {
      "deliveryTime": 21,
      "lastMileTravel": 1.9,
      "slaString": "21 mins"
    },
    "aggregatedDiscountInfoV3": {
      "header": "25% OFF",
      "subHeader": "UPTO ₹70"
    }
  }
},
{
  "type": "restaurant",
  "data": {
    "id": "110",
    "name": "Dragon Wok",
    "cloudinaryImageId": "1512058564366-18510be2db19?w=500",
    "locality": "Market Road",
    "areaName": "Chinatown",
    "costForTwo": "₹450 for two",
    "cuisines": ["Chinese", "Noodles", "Asian"],
    "avgRating": 4.7,
    "avgRatingString": "4.7",
    "totalRatingsString": "14K+ ratings",
    "veg": false,
    "sla": {
      "deliveryTime": 29,
      "lastMileTravel": 3.1,
      "slaString": "29 mins"
    },
    "aggregatedDiscountInfoV3": {
      "header": "45% OFF",
      "subHeader": "UPTO ₹100"
    }
  }
},
];

export default resList;