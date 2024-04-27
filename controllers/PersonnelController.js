const ServiceType = require('../schemas/service_type');
const associations = require('../schemas/associations');
const { Op } = require('sequelize');
module.exports = {

  call: async function(req, res, next) {

    let { service_type, room_id } = req.params;
    try {
      const { Op } = require('sequelize');
      const serviceTypeModel = await ServiceType.findOne({
          where: {
              title: {
                  [Op.like]: `%${service_type}%`
              }
          }
      });
  
      if (!serviceTypeModel) {
        // serviceTypeModel.id
        
          console.log('No data found matching the criteria.');
          
          // Handle when no data is found
      } else {
        console.log(serviceTypeModel);
        

          console.log('Data found:', serviceTypeModel);
          // Handle when data is found
      }
  } catch (error) {
      console.error('An error occurred:', error);
      // Handle the error
  }

      // console.log(serviceTypeModel)

      return res.json({
        success: true,
        message: "what the "
      });

  },
  test:  function(req, res, next) {
    return res.json({
      success: true,
      message: "what the "
    });
  }

 
}
