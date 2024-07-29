const Tweet = require('../models/tweet');

class TweetRepository {
    //Create The Tweet
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    //Get The Tweet By Id
    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    //Update The tweet  by Id
    async update(tweetId,data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId,data);
        } catch (error) {
            console.log(error);
        }
    }

    //Delete The Tweet By Id
    async delete() {
        try {

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;