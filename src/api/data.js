const users = [
  {
    avatar: 'avatar1.png',
    userName: '张三',
    userId: 'zhangsan',
    region: '河北',
  },
  {
    avatar: 'avatar2.png',
    userName: '李四',
    userId: 'lisi',
    region: '天津',
  },
  {
    avatar: 'avatar3.png',
    userName: '王五',
    userId: 'wangwu',
    region: '上海',
  },
  {
    avatar: 'avatar4.png',
    userName: 'Alice',
    userId: 'alice123',
    region: '广州',
  },
  {
    avatar: 'avatar5.png',
    userName: 'Tom',
    userId: 'tomwang',
    region: '深圳',
  },
];
let now = (new Date()).valueOf();
let nextId = 7;
let posts = [
  {
    postId: 1,
    postText: '张三的朋友圈状态',
    userId: 'zhangsan',
    createdDate: now,
    type: 'text',
    resource: [],//资源链接，图片为多个，其余都为一个
    likes: [],//点赞用户的Id
    comments: [
      {
        userId: 'lisi',//评论人
        to: '',//回复人，空表示只评论
        content: '6666666',//内容
        createdDate: now + 60//创建时间
      },
      {
        userId: 'zhangsan',//评论人
        to: 'lisi',//回复人，空表示只评论
        content: '2333333',//内容
        createdDate: now + 120//创建时间
      },
      {
        userId: 'wangwu',//评论人
        to: 'lisi',//回复人，空表示只评论
        content: '.............',//内容
        createdDate: now + 160//创建时间
      },
    ]
  },
  {
    postId: 2,
    postText: '张三的朋友圈状态2',
    userId: 'zhangsan',
    createdDate: now + 60,
    type: 'image',
    resource: [],//资源链接，图片为多个，其余都为一个
    likes: ['lisi'],//点赞用户的Id
  },
  {
    postId: 3,
    postText: '张三的朋友圈状态3',
    userId: 'zhangsan',
    createdDate: now + 120,
    type: 'image',
    resource: [],//资源链接，图片为多个，其余都为一个
  },
  {
    postId: 4,
    postText: '李四的朋友圈状态3',
    userId: 'lisi',
    createdDate: now + 160,
    type: 'image',
    resource: [],//资源链接，图片为多个，其余都为一个
  },
  {
    postId: 5,
    postText: '张三的朋友圈状态2',
    userId: 'zhangsan',
    createdDate: now + 180,
    type: 'image',
    resource: [],//资源链接，图片为多个，其余都为一个
    likes: ['lisi'],//点赞用户的Id
  },
  {
    postId: 6,
    postText: '张三的朋友圈状态3',
    userId: 'zhangsan',
    createdDate: now + 190,
    type: 'video',
    resource: [],//资源链接，图片为多个，其余都为一个
  },
];
let postThumb = [
  {
    postId: 2,
    userId: 'zhangsan',
    ype: 'image',
    url: 'thumb1.png',
  },
  {
    postId: 3,
    userId: 'zhangsan',
    ype: 'image',
    url: 'thumb2.png',
  },
  {
    postId: 4,
    userId: 'lisi',
    ype: 'image',
    url: 'thumb4.png',
  },
  {
    postId: 5,
    userId: 'zhangsan',
    ype: 'image',
    url: 'thumb5.png',
  },
  {
    postId: 6,
    userId: 'zhangsan',
    ype: 'video',
    url: 'thumb6.png',
  },
];
export default {
  fetchUser(userId, cb) {
    let user = {}
    for (let i in users) {
      if (users[i].userId === userId) {
        Object.assign(user, users[i]);
        break;
      }
    }
    setTimeout(() => cb(user), 100);
  },
  fetchAllUsers(userId, userIdSet, cb) {
    setTimeout(() => cb(users), 100);
  },
  fetchAllPosts(userId, cb) {
    let newPost = Object.assign({}, posts[posts.length - 1]);
    newPost.postId = nextId++;
    newPost.createdDate = new Date();
    posts.push(newPost)
    //数据过滤工作放在服务端，模拟调用接口返回一定数量的最新post，且是排序好的
    setTimeout(() => cb(posts.reverse()), 100);
  },
  fetchOwnPosts(userId) {
    //假设从服务端获取最多四条
    const results = postThumb.filter(post => post.userId === userId);
    setTimeout(() => results.slice(0, 3), 100);
  }
}
