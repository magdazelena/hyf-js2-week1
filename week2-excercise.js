/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

//generateListings(20);

const listings = generateListings(37);

//listings.forEach((listing) => console.log(listing.size));

const listingPrices = listings.map((listing) => listing.price);
//console.log(listingPrices);

// {
//   if (listing.price > 4000) return listing.price
// }

// const expensivePricesListings = listings
//   .filter((listing) => listing.price > 4000)
//   .map((listing) => listing.price);

// console.log(expensivePricesListings);

// const listingsWithParking = listings.filter((listing) =>
//   listing.facilities.includes("Parkering")
// );

//type string,
//facilities (array of strings),
//price (number),
//hasGarden (boolean) true or false
// if (filter.hasGarden(false))
//size (number)

const filter = {
  type: "House",
  maxSize: 200,
};

function filterListings(listings, filter) {
  let filteredListings = listings;
  if (filter.type)
    filteredListings = listings.filter(
      (listing) => listing.type === filter.type
    );
  if (filter.hasGarden !== undefined || filter.hasGarden !== null)
    filteredListings = filteredListings.filter((listing) => listing.hasGarden);
  if (filter.minSize)
    filteredListings = filteredListings.filter(
      (listing) => listing.size >= filter.minSize
    );
  if (filter.maxSize)
    filteredListings = filteredListings.filter(
      (listing) => listing.size <= filter.maxSize
    );
  //some more logic
  return filteredListings;
}

console.log(filterListings(listings, filter));
