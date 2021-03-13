const { Highlights } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { userId, highlightId } = req.body;

    await Highlights.destroy({
      where: {
        id: highlightId,
        userId: userId,
      },
    });

    res.status(200).end();
  } catch (err) {
    res.status(500).json({ isSuccess: false, error: err });
  }
};
