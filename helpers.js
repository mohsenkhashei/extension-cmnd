module.exports = {
  joinWithOr: function (array) {
    if (!Array.isArray(array) || array.length === 0) {
      return "";
    }
    return array.join(" or ");
  },
};
