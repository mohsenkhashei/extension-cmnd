const tools = require("../services/cmnd/tools.js");
const yupToJsonSchema = require("../schemas/yupToJsonSchema.js");

module.exports = {

  getTools: async function(req, res, next) {
    try {
      const getTools = () => {

        const toolsMapped = tools.map((t) => {
          return {
            name: t.name,
            description: t.description,
            jsonSchema: t.parameters,
            isDangerous: t.dangerous,
            functionType: t.functionType,
            isLongRunningTool: t.isLongRunningTool,
            rerun: t.rerun,
            rerunWithDifferentParameters: t.rerunWithDifferentParameters,
          };
        });
        return { tools: toolsMapped };
      };


      return res.json({
        success: true,
        tools: tools
      });
    } catch (error) {
      console.log(error.message);
      return res.json({
        success: false,
        message: "Something went wrong :("
      });
    }
  },

  runToolByName: async function(req, res, next) {
    try {
      const args = req.body;
      const toolToRun = tools.find((t) => t.name === args.toolName);
      const results = await toolToRun.runCmd(args.props);
      return res.send(results);
    } catch (error) {
      console.log(error.message);
      return res.json({
        success: false,
        message: "Something went wrong :("
      });
    }
  }
}
