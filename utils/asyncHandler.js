module.exports = fn => async (req, res, next) => {
  try {
    const result = await fn(req, res, next);
    res.json(result);
  } catch (e) {
    next(e)
  }
};