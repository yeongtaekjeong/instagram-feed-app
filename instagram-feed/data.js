const initialData = {
    profile: {
        avatar: require("../assets/instagram-feed-images/nose_man.png")
    },
    stories: [
      {
        id: 1,
        avatar: require("../assets/instagram-feed-images/nose_man.png"),
        name:'yonghee8713',
        isSeen: false
      },
      {
        id: 2,
        avatar: require("../assets/instagram-feed-images/p1.png"),
        name:'Alice Johnson',
        isSeen: true
      },
      {
        id: 3,
        avatar: require("../assets/instagram-feed-images/p2.png"),
        name:'tommy king',
        isSeen: false
      },
      {
        id: 4,
        avatar: require("../assets/instagram-feed-images/p3.png"),
        name:'ninja jeans',
        isSeen: true
      },
    ],
    articles: [
      {
        id: 1,
        avatar: require("../assets/instagram-feed-images/nose_man.png"),
        name: "yonghee8713",
        image: require("../assets/instagram-feed-images/nose_man.png"),
        likes: 50,
        commentCount: 24,
        comments: 'View all 0 comments'
      },
      {
        id: 2,
        avatar: require("../assets/instagram-feed-images/yh_dog.png"),
        name: "yonghee8713",
        image: require("../assets/instagram-feed-images/yh_dog.png"),
        likes: 120,
        commentCount: 30,
        comments: 'View all 0 comments'
      },
      {
        id: 3,
        avatar: require("../assets/instagram-feed-images/p2.png"),
        name: "tommy king",
        image: require("../assets/instagram-feed-images/p2.png"),
        likes: 10,
        commentCount: 3,
        comments: 'View all 0 comments'
      },
      {
        id: 4,
        avatar: require("../assets/instagram-feed-images/p3.png"),
        name: "ninja jeans",
        image: require("../assets/instagram-feed-images/p3.png"),
        likes: 3,
        commentCount: 1,
        comments: 'View all 0 comments'
      },
      {
        id: 5,
        avatar: require("../assets/instagram-feed-images/p4.png"),
        name: "britney pears",
        image: require("../assets/instagram-feed-images/p4.png"),
        likes: 1,
        commentCount:0,
        comments: 'View all 0 comments'
      },
    ],
}

const data = {
  ...initialData,
  articles: initialData.articles.map(article => {
    return {
      ...article,
      comments: `View all ${article.commentCount} comments`
    }
  })
}

export default data;