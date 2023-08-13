import client from "./client";

const endPoint = "/api/listings";

const getListings = async () => client.get(endPoint);

const addListing = (listing) => {
  // const formData = new FormData();
  // formData.append("title", listing.title);
  // formData.append("price", listing.price);
  // formData.append("categoryId", listing.category);
  // formData.append("description", listing.description);
  const { title, price, images, category, description, location } = listing;
  if (!location.longitude) location = {};
  const data = {
    title,
    price,
    images,
    categoryId: category,
    description,
    location,
  };
  return client.post(endPoint, JSON.stringify(data));
};

const listingApi = {
  getListings,
  addListing,
};
export default listingApi;
