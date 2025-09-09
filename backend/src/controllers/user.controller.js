import User from "../models/user.model.js";

export async function getRecommendedUsers(req, res) {
    try {
        const currentUserId = req.user._id;
        const currentUser = req.user;

        const recommendedUsers = await User.find({
            $and: [
                { _id: { $ne: currentUserId } },
                { _id: { $nin: currentUser.friends } },
                { isOnboarded: true }
            ]
        });
        res.status(200).json(recommendedUsers);
    } catch (error) {
        console.error("Error fetching recommended users:", error.message);
        res.status(500).json({ success: false, message: "Error fetching recommended users" });
    }
}
    
export async function getMyFriends(req, res) {
    try {
        const user = await User.findById(req.user._id).select("friends")
        .populate("friends", "fullName profilePic nativeLanguage learningLanguage");
        res.status(200).json(user.friends || []);
    } catch (error) {
        console.error("Error fetching friends:", error.message);
        res.status(500).json({ success: false, message: "Error fetching friends" });
    }
}
