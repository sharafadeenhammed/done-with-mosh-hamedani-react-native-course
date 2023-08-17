import client from "./client";

const endPoint = "/api/listings";

const getListings = async () => client.get(endPoint);

const addListing = (listing, handleOnProgress) => {
  const { title, price, images, category, description, location } = listing;
  const formData = new FormData();
  formData.append("title", title);
  formData.append("price", price);
  formData.append("categoryId", category);
  formData.append("description", description);
  if (!location.longitude)
    formData.append("location", JSON.stringify(location));

  const querryString = new URLSearchParams("");
  querryString.append("title", title);
  querryString.append("price", price);
  querryString.append("categoryId", category);
  querryString.append("description", description);

  if (!location.longitude)
    querryString.append("location", JSON.stringify(location));
  if (!location.longitude) location = {};
  const data = {
    title,
    price,
    images,
    categoryId: category,
    description,
    location,
  };
  const fork = querryString.toString();
  return client.post(endPoint, fork, {
    onUploadProgress: (progress) => handleOnProgress(progress),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
};

const listingApi = {
  getListings,
  addListing,
};
export default listingApi;
