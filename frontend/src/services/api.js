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

const getPost = (postID) => {
  return fetch(API_ROOT(`/posts/${postID}`), {
    headers: headers()
  }).then(res => {
    // console.log(res)
    return res.json()
  })
}

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

const getUser = (profileID) => {
  return fetch(API_ROOT(`/users/${profileID}`), {
    headers: headers()
  }).then(res => {
    return res.json()
  })
}


const addLike = (body) => {
  return fetch(API_ROOT(`/likes`), {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body)
  }).then(res => {
    // console.log(res.json())
    return res.json()
  })
}

const getLikers = (postID) => {
  return fetch(API_ROOT(`/find_likers/${postID}`), {
    headers: headers()
  }).then(res => {
    // console.log(res)
    return res.json()
  })
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
      getPosts,
      getPost,
      getLikers,
    },
    followers: {
      getFollowers,
      getFollowRequests,
    },
    likes: {
      addLike,
    }
};