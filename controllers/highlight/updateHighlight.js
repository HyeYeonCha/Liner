const { Highlights } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { highlightId, userId, colorHex, text } = req.body;
    await Highlights.update(
      {
        colorHex: colorHex,
        text: text,
        updatedAt: new Date(),
      },
      {
        where: {
          id: highlightId,
          userId: userId,
        },
      }
    );

    let updateHighlight = await Highlights.findOne({
      where: {
        id: highlightId,
        userId: userId,
      },
    });

    res.status(200).json({
      highlightId: updateHighlight.id,
      userId: updateHighlight.userId,
      pageId: updateHighlight.pageId,
      colorHex: updateHighlight.colorHex,
      text: updateHighlight.text,
    });
  } catch (err) {
    res.status(500).json({ isSuccess: false, error: err });
  }
};
