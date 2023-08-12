import client from "./client";

const endPoint = "/api/listings";

const getListings = async () => {
  const response = await client.get(endPoint);
  return response;
};

const addListing = (listing) => {
  const formData = new FormData();
  formData.append("title", listing.title);
  formData.append("price", listing.price);
  formData.append("categoryId", listing.category);
  formData.append("description", listing.description);
  client.post(endPoint, formData);
  // formData.append("images")
};

export default {
  getListings,
};
