import client from "./client";

const endPoint = "/api/listings";

const getListings = async () => client.get(endPoint);

const addListing = async (listing) => {
  const formData = new FormData();
  formData.append("title", listing.title);
  formData.append("price", listing.price);
  formData.append("categoryId", listing.category);
  formData.append("description", listing.description);
  if (listing.location)
    formData.append("location", JSON.stringify(listing.location));
  return client
    .setHeader("Content-Type", "application/x-www-form-urlencoded")
    .post(endPoint, formData);
};

const listingApi = {
  getListings,
  addListing,
};
export default listingApi;
