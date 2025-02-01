import React from "react";
import ReactDOM from "react-dom/client";

// JSON Object for restaurant data

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "955181",
          name: "Big Bowl",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/14/cacd0760-af81-4466-8da7-e458e0cce3ca_955181.jpg",
          locality: "Metropolis Shopping Mall",
          areaName: "Mouza Rajpur",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese", "Tibetan", "Desserts"],
          avgRating: 4.2,
          parentId: "434792",
          avgRatingString: "4.2",
          totalRatingsString: "111",
          promoted: true,
          adTrackingId:
            "cid=24673273~p=0~adgrpid=24673273#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=955181~eid=b1036832-4582-4953-a8cb-619da7e6e3c7~srvts=1738388660559~collid=83639",
          sla: {
            deliveryTime: 57,
            lastMileTravel: 8.3,
            serviceability: "SERVICEABLE",
            slaString: "55-60 mins",
            lastMileTravelString: "8.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-02 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹149",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "24673273",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=955181&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "10766",
          name: "Arsalan",
          cloudinaryImageId: "qvuz2nrvapk74t1ysnmo",
          locality: "New Alipore",
          areaName: "New Alipore",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "Mughlai",
            "North Indian",
            "Indian",
            "Kebabs",
            "Tandoor",
            "Awadhi",
          ],
          avgRating: 4.5,
          parentId: "1255",
          avgRatingString: "4.5",
          totalRatingsString: "82K+",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-01 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Mughlai.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                      description: "Delivery!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Mughlai.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "7.7K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=10766&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "54937",
          name: "India Restaurant",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/21/995f115b-fa4c-4e39-95f3-6011c5cb501b_54937 (1).jpg",
          locality: "Kidderpore",
          areaName: "Kidderpore",
          costForTwo: "₹500 for two",
          cuisines: ["Chinese", "Tandoor", "Biryani"],
          avgRating: 4.5,
          parentId: "106345",
          avgRatingString: "4.5",
          totalRatingsString: "76K+",
          promoted: true,
          adTrackingId:
            "cid=24642750~p=1~adgrpid=24642750#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=54937~eid=25aa6a22-0694-409f-81a0-fb628026e38d~srvts=1738388660559~collid=83639",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 4.7,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-01 23:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Mughlai.png",
                description: "Delivery!",
              },
              {
                imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                      description: "Delivery!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Mughlai.png",
                      description: "Delivery!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "18K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "24642750",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=54937&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "305797",
          name: "Barbeque Nation",
          cloudinaryImageId: "lyf3erz0hympxoymvgsq",
          locality: "Rashbehari Avenue",
          areaName: "Rashbehari Avenue",
          costForTwo: "₹600 for two",
          cuisines: [
            "North Indian",
            "Barbecue",
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Desserts",
          ],
          avgRating: 4.3,
          parentId: "2438",
          avgRatingString: "4.3",
          totalRatingsString: "2.9K+",
          sla: {
            deliveryTime: 48,
            lastMileTravel: 2.6,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "2.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-02 00:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹549",
            discountTag: "FLAT DEAL",
            discountCalloutInfo: {
              message: "Free Delivery",
              logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png",
              },
            },
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.4",
              ratingCount: "3.3K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=305797&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "27976",
          name: "Saima Restaurant",
          cloudinaryImageId: "ujkcn5ub55f9gw8qjztu",
          locality: "Esplanade",
          areaName: "South Kolkata",
          costForTwo: "₹300 for two",
          cuisines: ["Mughlai", "North Indian", "Snacks"],
          avgRating: 4.2,
          parentId: "5566",
          avgRatingString: "4.2",
          totalRatingsString: "15K+",
          promoted: true,
          adTrackingId:
            "cid=24642659~p=3~adgrpid=24642659#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=27976~eid=97c064ee-e17c-428d-ac13-e003671e54d9~srvts=1738388660559~collid=83639",
          sla: {
            deliveryTime: 39,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-01 23:50:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.8",
              ratingCount: "3.7K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "24642659",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=27976&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "809202",
          name: "Biryani Mania",
          cloudinaryImageId: "4d49e2bcd44ba3d50a1e2af176cba668",
          locality: "Tollygunge Road",
          areaName: "South Kolkata",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "Snacks", "Desserts", "Beverages"],
          avgRating: 4,
          parentId: "46849",
          avgRatingString: "4.0",
          totalRatingsString: "15",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-01 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=809202&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "71260",
          name: "Lazeez Biryani",
          cloudinaryImageId: "tp3cyofscgqjskalmqkx",
          locality: "Entally",
          areaName: "Esplanade",
          costForTwo: "₹250 for two",
          cuisines: ["Biryani", "Mughlai"],
          avgRating: 3.8,
          parentId: "18798",
          avgRatingString: "3.8",
          totalRatingsString: "17K+",
          promoted: true,
          adTrackingId:
            "cid=24642782~p=4~adgrpid=24642782#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=71260~eid=35bbea6f-136e-4523-851d-2a16da0294b5~srvts=1738388660559~collid=83639",
          sla: {
            deliveryTime: 51,
            lastMileTravel: 8.5,
            serviceability: "SERVICEABLE",
            slaString: "50-55 mins",
            lastMileTravelString: "8.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-02 05:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹129",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "2.8",
              ratingCount: "112",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "24642782",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=71260&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

/////////////////////////////

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="data:image/png;base64,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" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCards
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

const RestaurantCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData.card.card.info;
  return (
    <div className="restaurant-cards">
      <img
        alt="res-logo"
        className="logo-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.card.card.info.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.card.card.info.sla.deliveryTime} Minutes</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// const Title = () => <h1>Hello World </h1>;

// const Heading = () => (
//   <div className="container">
//     <Title />
//     <h1 className="head"> Namaste React </h1>
//   </div>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
