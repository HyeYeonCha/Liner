const { Pages, Highlights } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { userId, pageUrl, colorHex, text } = req.body;
    const theme = {
      1: ['#ffff8d', '#a5f2e9', '#ffd5c8'],
      2: ['#f6f0aa', '#d3edd1', '#f9d6c1'],
      3: ['#f4ff40', '#8affd7', '#ffc477'],
    };

    let pageId;
    let pageInfo = await Pages.findOne({
      where: {
        url: pageUrl,
      },
    });

    if (!pageInfo) {
      let newPage = await Pages.create({
        url: pageUrl,
      });
      pageId = newPage.id;
    } else {
      pageId = pageInfo.id;
    }

    let themeId;

    for (let el in theme) {
      if (theme[el].includes(colorHex)) {
        themeId = el;
      }
    }

    let newHighlight = await Highlights.create({
      userId: userId,
      pageId: pageId,
      colorHex: colorHex,
      text: text,
      theme: themeId,
    });

    res.status(200).json({
      highlightId: newHighlight.id,
      userId: newHighlight.userId,
      pageId: newHighlight.pageId,
      colorHex: newHighlight.colorHex,
      text: newHighlight.text,
    });
  } catch (err) {
    res.status(500).json({ isSuccess: false, error: err });
  }
};
