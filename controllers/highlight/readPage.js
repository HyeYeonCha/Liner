const { Highlights, Pages } = require('../../models');

module.exports = async (req, res) => {
  try {
    let { userId, pageId, pageUrl } = req.body;
    if (!pageId) {
      let pageInfo = await Pages.findOne({
        where: { url: pageUrl },
      });
      pageId = pageInfo.id;
    }

    let highlightArr = await Highlights.findAll({
      where: {
        pageId: pageId,
        userId: userId,
      },
      order: [['updatedAt', 'DESC']],
      attributes: [
        ['id', 'highlightId'],
        'userId',
        'pageId',
        'colorHex',
        'text',
      ],
    });

    res.status(200).json(highlightArr);
  } catch (err) {
    res.status(500).json({ isSuccess: false, error: err });
  }
};
