const { Highlights } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { userId, themeId } = req.body;
    const theme = {
      1: ['#ffff8d', '#a5f2e9', '#ffd5c8'],
      2: ['#f6f0aa', '#d3edd1', '#f9d6c1'],
      3: ['#f4ff40', '#8affd7', '#ffc477'],
    };

    let highlightsArr = await Highlights.findAll({
      where: {
        userId: userId,
      },
    });

    highlightsArr.map((el) => {
      let preColorHex = el.colorHex;
      let preColorIdx = theme[el.theme].indexOf(preColorHex);
      let newColorHex = theme[themeId][preColorIdx];
      Highlights.update(
        {
          colorHex: newColorHex,
          theme: themeId,
        },
        {
          where: {
            userId: userId,
            colorHex: preColorHex,
          },
        }
      );
    });

    res.status(200).end();
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
