const API_ROOT = (path)=> `http://localhost:3000${path}`

const token = () => localStorage.getItem("token");

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token()
    }; 
};

const login = data => {
  
    return fetch(API_ROOT('/auth'), {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(data)
    }).then(res => res.json());
};

const signup = (data) => {
    return fetch(API_ROOT('/users'), {
        method: "POST",
        headers: {"Content-Type": "application/json", Accept: "application/json"},
        body: JSON.stringify(data)
      }).then(res => res.json());
}


const getCurrentUser = () => {
    // console.log("getting current user", headers);
  
    return fetch(API_ROOT('/current_user'), {
        headers: headers()
    }).then(res => {
        // console.log(res)
        return res.json();
    })
};

const getCurrentProfile = (profileID) => {
    return fetch(API_ROOT(`/profiles/${profileID}`), {
      headers: headers()
    }).then(res => {
      // console.log(res)
      return res.json()
    })
}

const getPosts = (profileID) => {
  return fetch(API_ROOT(`/get_posts/${profileID}`), {
    headers: headers()
  }).then(res => {
    // console.log(res)
    return res.json()
  })
}

// const getPost = (postID) => {
//   return fetch(API_ROOT(`/get_posts/${profileID}`), {
//     headers: headers()
//   }).then(res => {
//     // console.log(res)
//     return res.json()
//   })
// }

const getFollowers = (profileID) => {
  return fetch(API_ROOT(`/get_followers/${profileID}`), {
    headers: headers()
  }).then(res => {
    // console.log(res)
    return res.json()
  })
}

const getFollowRequests = (profileID) => {
  return fetch(API_ROOT(`/get_follower_requests/${profileID}`), {
    headers: headers()
  }).then(res => {
    // console.log(res)
    return res.json()
  })
}

const uploadMedia = (params) => {
  
}




export const api = {
    auth: {
      login,
      signup,
      getCurrentUser
    },
    profile: {
      getCurrentProfile,
    },
    posts: {
      getPosts
    },
    followers: {
      getFollowers,
      getFollowRequests,
    }
};