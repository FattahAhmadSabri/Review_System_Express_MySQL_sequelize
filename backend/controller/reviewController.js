const {addReviewService,getReviewService, getCompanyByCompanyName} =require("../service/reviewService")
const {
    successResponse,
    errorResponse,
} =require("../middleware/responseHandling")

const addReviewController =async(req,res)=>{
   try {
       const {company,pros,cons,ratingStar} =req.body
       const response = await addReviewService(company,pros,cons,ratingStar)
       return successResponse(
      res,
      `Rating added successfully`,
      response,
      201,
    );
   } catch (error) {
    return errorResponse(res, error.message, 500);
   }
}

const getAllreviewController = async(req,res)=>{
    try {
        const response = await getReviewService()
          return successResponse(
      res,
      `List of Review`,
      response,
      200,
    );
    } catch (error) {
     return errorResponse(res, error.message, 500);   
    }
}

const getDataByCompanyName=async(req,res)=>{
    try {
        const {company} = req.params
    const response = await getCompanyByCompanyName(company)
    return successResponse(
      res,
      `List of Review`,
      response,
      200,
    );
    } catch (error) {
        return errorResponse(res, error.message, 500);  
    }
}

module.exports ={addReviewController,getAllreviewController,getDataByCompanyName }