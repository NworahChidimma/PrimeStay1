const nigerianHotels = [
  {
    id: "NG001",
    name: "Eko Hotel & Suites",
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      address: "1415 Adetokunbo Ademola Street, ",
      lga: "Eti-Osa",
      coordinates: {
        lat: 6.4281,
        lng: 3.4219
      }
    },
    image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    rating: 4.7,
    reviewCount: 3847,
    price: 85000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Spa", "Multiple Restaurants", "Gym", "Conference Center", "Beach Access"]
  },
  {
    id: "NG002",
    name: "Transcorp Hilton Abuja",
    location: {
      city: "Abuja",
      state: "FCT",
      country: "Nigeria",
      address: "1 Aguiyi Ironsi Street, Maitama",
      lga: "Municipal Area Council",
      coordinates: {
        lat: 9.0820,
        lng: 7.4951
      }
    },
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    rating: 4.6,
    reviewCount: 2654,
    price: 95000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Spa", "Casino", "Multiple Restaurants", "Gym", "Business Center"]
  },
  {
    id: "NG003",
    name: "The George Hotel",
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      address: "62 Bank Olemoh Close, Ikoyi",
      lga: "Eti-Osa",
      coordinates: {
        lat: 6.4541,
        lng: 3.4316
      }
    },
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    rating: 4.8,
    reviewCount: 1876,
    price: 120000,
    currency: "NGN",
    amenities: ["WiFi", "Rooftop Pool", "Fine Dining", "Spa", "Gym", "Concierge", "Art Gallery"]
  },
  {
    id: "NG004",
    name: "Sheraton Lagos Hotel",
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      address: "30 Mobolaji Bank Anthony Way, Ikeja",
      lga: "Ikeja",
      coordinates: {
        lat: 6.6018,
        lng: 3.3515
      }
    },
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    rating: 4.4,
    reviewCount: 3201,
    price: 75000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Multiple Restaurants", "Gym", "Bar", "Conference Rooms", "Parking"]
  },
  {
    id: "NG005",
    name: "Radisson Blu Hotel Ikeja",
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      address: "Plots 38/39 Lateef Jakande Road, Ikeja",
      lga: "Ikeja",
      coordinates: {
        lat: 6.6037,
        lng: 3.3432
      }
    },
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
    rating: 4.5,
    reviewCount: 2134,
    price: 68000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym", "Business Center", "Bar", "Free Airport Shuttle"]
  },
  {
    id: "NG006",
    name: "Lagos Continental Hotel",
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      address: "52/56 Kofo Abayomi Street, V.I",
      lga: "Eti-Osa",
      coordinates: {
        lat: 6.4312,
        lng: 3.4246
      }
    },
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    rating: 4.3,
    reviewCount: 1987,
    price: 55000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym", "Bar", "Conference Center", "Parking"]
  },
  {
    id: "NG007",
    name: "Nicon Luxury Hotel",
    location: {
      city: "Abuja",
      state: "FCT",
      country: "Nigeria",
      address: "903 Tafawa Balewa Way",
      lga: "Municipal Area Council",
      coordinates: {
        lat: 9.0643,
        lng: 7.4892
      }
    },
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    rating: 4.4,
    reviewCount: 1654,
    price: 72000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Multiple Restaurants", "Spa", "Gym", "Business Center", "Gardens"]
  },
  {
    id: "NG008",
    name: "Protea Hotel Select Ikeja",
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      address: "42/44 Isaac John Street, GRA Ikeja",
      lga: "Ikeja",
      coordinates: {
        lat: 6.5964,
        lng: 3.3515
      }
    },
    image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800",
    rating: 4.2,
    reviewCount: 1432,
    price: 48000,
    currency: "NGN",
    amenities: ["WiFi", "Restaurant", "Bar", "Gym", "Business Center", "Parking", "Conference Rooms"]
  },
  {
    id: "NG009",
    name: "Federal Palace Hotel",
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      address: "26 Ahmadu Bello Way, Victoria Island",
      lga: "Eti-Osa",
      coordinates: {
        lat: 6.4312,
        lng: 3.4189
      }
    },
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800",
    rating: 4.1,
    reviewCount: 2345,
    price: 62000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Multiple Restaurants", "Casino", "Gym", "Business Center", "Marina View"]
  },
  {
    id: "NG010",
    name: "Four Points by Sheraton",
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      address: "Plot 9, Onigbongbo, Victoria Island",
      lga: "Eti-Osa",
      coordinates: {
        lat: 6.4363,
        lng: 3.4271
      }
    },
    image: "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=800",
    rating: 4.5,
    reviewCount: 1765,
    price: 70000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym", "Bar", "Business Center", "Meeting Rooms"]
  },
  {
    id: "NG011",
    name: "BON Hotel Grand Tower",
    location: {
      city: "Asaba",
      state: "Delta",
      country: "Nigeria",
      address: "152 Nnebisi Road, GRA",
      lga: "Oshimili South",
      coordinates: {
        lat: 6.1984,
        lng: 6.7323
      }
    },
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800",
    rating: 4.3,
    reviewCount: 876,
    price: 45000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym", "Bar", "Parking", "Conference Center"]
  },
  {
    id: "NG012",
    name: "Le Meridien Ibom Hotel",
    location: {
      city: "Uyo",
      state: "Akwa Ibom",
      country: "Nigeria",
      address: "Nwaniba Road, Uyo",
      lga: "Uyo",
      coordinates: {
        lat: 5.0077,
        lng: 7.9297
      }
    },
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    rating: 4.6,
    reviewCount: 1234,
    price: 82000,
    currency: "NGN",
    amenities: ["WiFi", "Golf Course", "Pool", "Spa", "Multiple Restaurants", "Gym", "Conference Center"]
  },
  {
    id: "NG013",
    name: "Golden Tulip Essential",
    location: {
      city: "Port Harcourt",
      state: "Rivers",
      country: "Nigeria",
      address: "1 Hospital Road, GRA Phase 2",
      lga: "Port Harcourt",
      coordinates: {
        lat: 4.8156,
        lng: 7.0498
      }
    },
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    rating: 4.4,
    reviewCount: 1543,
    price: 65000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym", "Business Center", "Bar", "Parking"]
  },
  {
    id: "NG014",
    name: "Presidential Hotel",
    location: {
      city: "Port Harcourt",
      state: "Rivers",
      country: "Nigeria",
      address: "7 Presidential Road, GRA Phase 2",
      lga: "Port Harcourt",
      coordinates: {
        lat: 4.8146,
        lng: 7.0471
      }
    },
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    rating: 4.3,
    reviewCount: 1876,
    price: 58000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Multiple Restaurants", "Gym", "Spa", "Conference Center", "Gardens"]
  },
  {
    id: "NG015",
    name: "Admiralty Suites",
    location: {
      city: "Lekki",
      state: "Lagos",
      country: "Nigeria",
      address: "5A Admiralty Way, Lekki Phase 1",
      lga: "Eti-Osa",
      coordinates: {
        lat: 6.4442,
        lng: 3.5108
      }
    },
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    rating: 4.2,
    reviewCount: 987,
    price: 42000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym", "Bar", "Business Center", "Beach Proximity"]
  },
  {
    id: "NG016",
    name: "Nordic Hotel Abuja",
    location: {
      city: "Abuja",
      state: "FCT",
      country: "Nigeria",
      address: "Plot 150 Aminu Kano Crescent, Wuse 2",
      lga: "Municipal Area Council",
      coordinates: {
        lat: 9.0664,
        lng: 7.4822
      }
    },
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
    rating: 4.5,
    reviewCount: 1432,
    price: 69000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym", "Spa", "Business Center", "Conference Rooms"]
  },
  {
    id: "NG017",
    name: "Ibis Lagos Ikeja",
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      address: "Obafemi Awolowo Way, Ikeja",
      lga: "Ikeja",
      coordinates: {
        lat: 6.6023,
        lng: 3.3502
      }
    },
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    rating: 4.1,
    reviewCount: 2134,
    price: 38000,
    currency: "NGN",
    amenities: ["WiFi", "Restaurant", "Bar", "Business Center", "Parking", "24/7 Reception"]
  },
  {
    id: "NG018",
    name: "The Wheatbaker Hotel",
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      address: "4 Onitolo Road, Ikoyi",
      lga: "Eti-Osa",
      coordinates: {
        lat: 6.4512,
        lng: 3.4298
      }
    },
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    rating: 4.7,
    reviewCount: 1654,
    price: 110000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Fine Dining", "Spa", "Gym", "Concierge", "Art Collection"]
  },
  {
    id: "NG019",
    name: "Hawthorn Suites",
    location: {
      city: "Abuja",
      state: "FCT",
      country: "Nigeria",
      address: "4 Bangui Street, Wuse 2",
      lga: "Municipal Area Council",
      coordinates: {
        lat: 9.0679,
        lng: 7.4858
      }
    },
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    rating: 4.4,
    reviewCount: 1123,
    price: 64000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym", "Business Center", "Kitchenette", "Parking"]
  },
  {
    id: "NG020",
    name: "Hotel Bon Voyage",
    location: {
      city: "Akure",
      state: "Ondo",
      country: "Nigeria",
      address: "Alagbaka Estate, Akure",
      lga: "Akure South",
      coordinates: {
        lat: 7.2571,
        lng: 5.2058
      }
    },
    image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800",
    rating: 4.0,
    reviewCount: 543,
    price: 35000,
    currency: "NGN",
    amenities: ["WiFi", "Restaurant", "Bar", "Gym", "Parking", "Conference Room", "Garden"]
  },
  {
    id: "NG021",
    name: "Jogor Centre Hotel Ibadan",
    location: {
      city: "Ibadan",
      state: "Oyo",
      country: "Nigeria",
      address: "Plot 1, Agodi GRA, Ibadan",
      lga: "Ibadan North",
      coordinates: {
        lat: 7.4085,
        lng: 3.9042
      }
    },
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800",
    rating: 4.2,
    reviewCount: 876,
    price: 42000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym", "Business Center", "Bar", "Conference Rooms"]
  },
  {
    id: "NG022",
    name: "Agura Hotel Abuja",
    location: {
      city: "Abuja",
      state: "FCT",
      country: "Nigeria",
      address: "1160 Adetokunbo Ademola-Crescent",
      lga: "Municipal Area Council",
      coordinates: {
        lat: 9.0693,
        lng: 7.4816
      }
    },
    image: "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=800",
    rating: 4.3,
    reviewCount: 1345,
    price: 56000,
    currency: "NGN",
    amenities: ["WiFi", "Restaurant", "Bar", "Gym", "Business Center", "Parking", "Conference Rooms"]
  },
  {
    id: "NG023",
    name: "Southern Sun",
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      address: "60 Kingsway Road, Ikoyi",
      lga: "Eti-Osa",
      coordinates: {
        lat: 6.4526,
        lng: 3.4321
      }
    },
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800",
    rating: 4.6,
    reviewCount: 1987,
    price: 92000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Multiple Restaurants", "Gym", "Spa", "Business Center", "Concierge"]
  },
  {
    id: "NG024",
    name: "Best Western Hotel",
    location: {
      city: "Calabar",
      state: "Cross River",
      country: "Nigeria",
      address: "88 Marian Road, Calabar",
      lga: "Calabar Municipal",
      coordinates: {
        lat: 4.9617,
        lng: 8.3270
      }
    },
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    rating: 4.3,
    reviewCount: 765,
    price: 48000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym", "Bar", "Business Center", "Parking"]
  },
  {
    id: "NG025",
    name: "Abuad Multi-System Hotel",
    location: {
      city: "Ado-Ekiti",
      state: "Ekiti",
      country: "Nigeria",
      address: "Afe Babalola University Campus",
      lga: "Ado-Ekiti",
      coordinates: {
        lat: 7.6215,
        lng: 5.2208
      }
    },
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    rating: 4.4,
    reviewCount: 432,
    price: 40000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym", "Conference Center", "Gardens", "Parking"]
  },
  {
    id: "NG026",
    name: "Protea Hotel Enugu",
    location: {
      city: "Enugu",
      state: "Enugu",
      country: "Nigeria",
      address: "3 Eastern Avenue, Independence Layout",
      lga: "Enugu North",
      coordinates: {
        lat: 6.4541,
        lng: 7.5110
      }
    },
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    rating: 4.2,
    reviewCount: 987,
    price: 52000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym", "Bar", "Business Center", "Conference Rooms"]
  },
  {
    id: "NG027",
    name: "Valencia Hotel Abuja",
    location: {
      city: "Abuja",
      state: "FCT",
      country: "Nigeria",
      address: "Reeves Street, Wuse 2",
      lga: "Municipal Area Council",
      coordinates: {
        lat: 9.0671,
        lng: 7.4829
      }
    },
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    rating: 4.1,
    reviewCount: 765,
    price: 46000,
    currency: "NGN",
    amenities: ["WiFi", "Restaurant", "Bar", "Gym", "Business Center", "Parking", "Meeting Rooms"]
  },
  {
    id: "NG028",
    name: "Novotel Lagos Airport Hotel",
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      address: "Murtala Muhammed Airport",
      lga: "Ikeja",
      coordinates: {
        lat: 6.5774,
        lng: 3.3213
      }
    },
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
    rating: 4.3,
    reviewCount: 1876,
    price: 62000,
    currency: "NGN",
    amenities: ["WiFi", "Restaurant", "Bar", "Gym", "Business Center", "Airport Transfer", "24hr Check-in"]
  },
  {
    id: "NG029",
    name: "Oriental Hotel Lagos",
    location: {
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
      address: "3 Lekki Road, Victoria Island",
      lga: "Eti-Osa",
      coordinates: {
        lat: 6.4278,
        lng: 3.4205
      }
    },
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    rating: 4.5,
    reviewCount: 2345,
    price: 78000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Multiple Restaurants", "Spa", "Gym", "Business Center", "Lagoon View"]
  },
  {
    id: "NG030",
    name: "Bolingo Hotel & Towers",
    location: {
      city: "Abuja",
      state: "FCT",
      country: "Nigeria",
      address: "Plot 2181 Ladi Kwali Street,",
      lga: "Municipal Area Council",
      coordinates: {
        lat: 9.0635,
        lng: 7.4876
      }
    },
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    rating: 4.2,
    reviewCount: 1234,
    price: 54000,
    currency: "NGN",
    amenities: ["WiFi", "Pool", "Restaurant", "Gym", "Bar", "Conference Center", "Parking"]
  }
];

// Export for use in your app
export default nigerianHotels;

// Utility functions

// Get hotel by ID
export function getHotelById(id) {
  return nigerianHotels.find(hotel => hotel.id === id);
}

// Get hotels by city
export function getHotelsByCity(city) {
  return nigerianHotels.filter(hotel => 
    hotel.location.city.toLowerCase() === city.toLowerCase()
  );
}

// Get hotels by state
export function getHotelsByState(state) {
  return nigerianHotels.filter(hotel => 
    hotel.location.state.toLowerCase() === state.toLowerCase()
  );
}

// Get hotels by minimum rating
export function getHotelsByMinRating(minRating) {
  return nigerianHotels.filter(hotel => hotel.rating >= minRating);
}

// Get hotels by price range (in Naira)
export function getHotelsByPriceRange(minPrice, maxPrice) {
  return nigerianHotels.filter(hotel => 
    hotel.price >= minPrice && hotel.price <= maxPrice
  );
}

// Search hotels by name, city, or state
export function searchHotels(query) {
  const lowerQuery = query.toLowerCase();
  return nigerianHotels.filter(hotel => 
    hotel.name.toLowerCase().includes(lowerQuery) ||
    hotel.location.city.toLowerCase().includes(lowerQuery) ||
    hotel.location.state.toLowerCase().includes(lowerQuery) ||
    hotel.location.lga.toLowerCase().includes(lowerQuery)
  );
}

// Get hotels by amenity
export function getHotelsByAmenity(amenity) {
  return nigerianHotels.filter(hotel => 
    hotel.amenities.some(a => a.toLowerCase().includes(amenity.toLowerCase()))
  );
}

// Sort hotels by price (ascending or descending)
export function sortHotelsByPrice(ascending = true) {
  return [...nigerianHotels].sort((a, b) => 
    ascending ? a.price - b.price : b.price - a.price
  );
}

// Sort hotels by rating (descending)
export function sortHotelsByRating() {
  return [...nigerianHotels].sort((a, b) => b.rating - a.rating);
}