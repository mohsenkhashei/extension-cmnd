const ServiceType = require('../schemas/service_type');
module.exports = {

  call: async function(req, res, next) {

    let { service_type, room_id } = req.params;
    const serviceTypeModel = await ServiceType.findOne({
        where: {
            type: service_type
        }
    });

      console.log(serviceTypeModel)

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
