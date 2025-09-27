const Application = require("../Models/Application");

exports.applyJob = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      linkedin,
      githubPortfolio,
      location,
      salary,
      availability,
      experience,
      jobType,
      jobTitle,
      jobId,
    } = req.body;

    const resume = req.files?.resume?.[0]?.path;
    const coverLetter = req.files?.coverLetter?.[0]?.path;

    if (!resume) return res.status(400).json({ msg: "Resume is required" });

    const application = new Application({
      fullName,
      email,
      phone,
      linkedin,
      githubPortfolio,
      location,
      salary,
      availability,
      experience,
      jobType,
      jobTitle,
      jobId,
      resume,
      coverLetter,
    });

    await application.save();

    res.status(201).json({ msg: "Application submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};
