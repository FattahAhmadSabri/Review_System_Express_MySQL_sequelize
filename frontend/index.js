const api = "http://localhost:3000/review";

const handleFormSubmit = async (event) => {
  event.preventDefault();

  const company = event.target.company.value;
  const pros = event.target.pros.value;
  const cons = event.target.cons.value;
  const ratingStar = event.target.ratingStar.value;

  try {
    await axios.post(api, {
      company,
      pros,
      cons,
      ratingStar: Number(ratingStar),
    });

    event.target.reset();

    getReviews();
  } catch (error) {
    console.log(error);
  }
};

const getReviews = async () => {
  try {
    const response = await axios.get(api);

    const reviews = response.data.data.reviews;
    const averageRating = response.data.data.averageRating;

    document.getElementById("averageRating").innerHTML =
      `Average Rating: ${averageRating} ⭐`;

    const reviewList = document.getElementById("reviewList");

    reviewList.innerHTML = "";

    reviews.forEach((review) => {
      displayData(review);
    });
  } catch (error) {
    console.log("GET ERROR:", error);
  }
};
const displayData = (obj) => {
  const reviewList = document.getElementById("reviewList");

  const div = document.createElement("div");

  div.innerHTML = `
    <h3>${obj.company}</h3>
    <p>Pros: ${obj.pros}</p>
    <p>Cons: ${obj.cons}</p>
    <p>Rating: ${obj.ratingStar} ⭐</p>
  `;

  reviewList.appendChild(div);
};

const handleSearchCompany = async () => {
  const company = document.getElementById("searchCompany").value;

  try {
    const response = await axios.get(`${api}/${company}`);

    console.log(response.data);

    const reviews = response.data.data.result;
    const averageRating = response.data.data.averageRating;

    document.getElementById("averageRating").innerHTML =
      `${company} Average Rating: ${averageRating} ⭐`;

    const reviewList = document.getElementById("reviewList");

    reviewList.innerHTML = "";

    reviews.forEach((review) => {
      displayData(review);
    });
  } catch (error) {
    console.log("GET ERROR:", error);
  }
};

getReviews();
