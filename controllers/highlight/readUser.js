const { Highlights, Pages } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { userId } = req.body;

    let userHighlightsArr = await Pages.findAll({
      attributes: [
        ['id', 'pageId'],
        ['url', 'pageUrl'],
      ],
      include: {
        model: Highlights,
        attributes: [
          ['id', 'highlightId'],
          'userId',
          'pageId',
          'colorHex',
          'text',
        ],
        where: { userId: userId },
      },
      order: [[{ model: Highlights }, 'updatedAt', 'DESC']],
    });
    
    res.status(200).json(userHighlightsArr);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
