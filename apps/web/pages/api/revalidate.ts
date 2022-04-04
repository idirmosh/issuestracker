

export default async function handler(req, res) {
  const { secret, path } = req.query;
  const hasNoArgs = !secret || !path;
  const isValidRequest = secret === process.env.REVALIDATE_SECRET_TOKEN;

  
  if (hasNoArgs) {
    res.status(406).json({
      message: "Missing required arguments",
    });
  } else if (!isValidRequest) {
    res.status(406).json({
      message: "Unauthorized operation!",
    });
  } else {
    try {
      await res.unstable_revalidate(path);
      return res.status(200).json({
        revalidated: true,
        message: "Path revalidated",
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

  }
}
