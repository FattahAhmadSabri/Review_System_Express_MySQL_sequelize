const { fn, col } = require("sequelize");
const Review = require("../model/reviewSchema");


const addReviewService = async (company, pros, cons, ratingStar) => {
  const result = await Review.create({ company, pros, cons, ratingStar });
  return result;
};

const getReviewService = async () => {
  const reviews = await Review.findAll();

  const averageRating = await Review.findOne({
    attributes: [[fn("AVG", col("ratingStar")), "averageRating"]],
    raw: true,
  });

  return {
    reviews,
    averageRating: Number(averageRating.averageRating).toFixed(1),
  };
};
module.exports = { addReviewService, getReviewService };
