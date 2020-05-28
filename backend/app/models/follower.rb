class Follower < ApplicationRecord
  belongs_to :profile

  def self.find_followers(profileID)
    followerIDs = Follower.where(profile_id: profileID)
    followers = followerIDs.map{ |follower| 
      if follower.approved == true 
        Profile.find(follower.follower_id)
      end 
    }
    followers 
  end

  def self.find_follower_requests(profileID)
    followerIDs = Follower.where(profile_id: profileID)
    followers = followerIDs.map{ |follower| 
      if follower.approved == false 
        Profile.find(follower.follower_id)
      end
    }
    
    followers 
  end

  def self.get_following(profileID) 
    following = Follower.where(follower_id: profileID)
    followingProfiles = following.map{|follow| Profile.find(follow.profile_id)}
  end

end
