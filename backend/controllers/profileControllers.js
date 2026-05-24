import Profile from "../models/Profile.js";

export const createProfile = async (req, res) => {
  try {
    const profile = await Profile.create({
      name: req.body.name,
      age: req.body.age,
      caption: req.body.caption,
      image: req.file.path
    });

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();

    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProfile = async (req, res) => {
  try {
    await Profile.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile =
async (req, res) => {

  try {

    const updated =
      await Profile.findByIdAndUpdate(

        req.params.id,

        {
          name: req.body.name,

          age: req.body.age,

          caption:
            req.body.caption,

          ...(req.file && {
            image:
              req.file.path,
          }),
        },

        { returnDocument: "after" }
      );

    res.json(updated);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};