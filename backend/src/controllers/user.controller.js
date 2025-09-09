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
        res.status(200).json({ success: true, users: recommendedUsers });
    } catch (error) {
        console.error("Error fetching recommended users:", error.message);
        res.status(500).json({ success: false, message: "Error fetching recommended users" });
    }
}
    
export async function getMyFriends(req, res) {}
