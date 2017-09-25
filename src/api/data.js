import { fetchTime } from '../config/env.js'
const users = [
  {
    avatar: 'avatar1.png',
    userName: '张三',
    userId: 'zhangsan',
    region: '河北',
    wall: 'wall1.png'
  },
  {
    avatar: 'avatar2.JPG',
    userName: '李四',
    userId: 'lisi',
    region: '天津',
    wall: 'wall2.png'
  },
  {
    avatar: 'avatar3.JPG',
    userName: '王五',
    userId: 'wangwu',
    region: '上海',
    wall: 'wall3.png'
  },
  {
    avatar: 'avatar4.png',
    userName: 'Alice',
    userId: 'alice123',
    region: '广州',
    wall: 'wall4.png'
  },
  {
    avatar: 'avatar5.png',
    userName: 'Tom',
    userId: 'tomwang',
    region: '深圳',
    wall: 'wall5.png'
  },
];
const now = (new Date()).valueOf();
const lastMinute = now - 60000;
const last5Minute = now - 60000 * 5;
const lastHour = now -3600000;
const lastDay = now - 86400000;
let nextId = 7;
let posts = [
  {
    postId: 1,
    postText: '张三的朋友圈状态',
    userId: 'zhangsan',
    avatar: 'avatar1.png',
    wall: 'wall1.png',
    userName: '张三',
    createdDate: now,
    type: 'text',
    resource: [],//资源链接，图片为多个，其余都为一个
    interactionUser: {
      'lisi': '李四',
      'wangwu': '王五',
      'zhangsan': '张三'
    },
    likes: ['lisi'],//点赞用户的Id
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
    avatar: 'avatar1.png',
    wall: 'wall1.png',
    userName: '张三',
    createdDate: lastMinute,
    type: 'image',
    resource: ['postimage1.JPG', 'postimage2.PNG', 'postimage3.PNG'],//资源链接，图片为多个，其余都为一个
    interactionUser: {
      'lisi': '李四',
    },
    likes: ['lisi'],//点赞用户的Id
  },
  {
    postId: 3,
    postText: '张三的朋友圈状态3',
    userId: 'zhangsan',
    avatar: 'avatar1.png',
    wall: 'wall1.png',
    userName: '张三',
    createdDate: last5Minute,
    type: 'image',
    resource: ['postimage2.PNG'],//资源链接，图片为多个，其余都为一个
  },
  {
    postId: 4,
    postText: '李四的朋友圈状态3',
    userId: 'lisi',
    avatar: 'avatar2.JPG',
    wall: 'wall2.png',
    userName: '李四',
    createdDate: lastHour,
    type: 'image',
    resource: ['postimage1.JPG'],//资源链接，图片为多个，其余都为一个
  },
  {
    postId: 5,
    postText: '王五的朋友圈状态5',
    userId: 'wangwu',
    avatar: 'avatar3.JPG',
    wall: 'wall3.png',
    userName: '王五',
    createdDate: lastDay,
    type: 'image',
    resource: ['postimage3.PNG'],//资源链接，图片为多个，其余都为一个
    interactionUser: {
      'lisi': '李四',
    },
    likes: ['lisi'],//点赞用户的Id
  },
  {
    postId: 6,
    postText: '张三的朋友圈状态6',
    userId: 'zhangsan',
    avatar: 'avatar1.png',
    wall: 'wall1.png',
    userName: '张三',
    createdDate: lastDay - 10000,
    type: 'video',
    resource: [],//资源链接，图片为多个，其余都为一个
  },
];
let postThumb = [
  {
    postId: 2,
    userId: 'zhangsan',
    type: 'image',
    url: 'thumb1.jpg',
  },
  {
    postId: 3,
    userId: 'zhangsan',
    type: 'image',
    url: 'thumb2.png',
  },
  {
    postId: 4,
    userId: 'lisi',
    type: 'image',
    url: 'thumb2.png',
  },
  {
    postId: 5,
    userId: 'zhangsan',
    type: 'image',
    url: 'thumb3.jpg',
  },
  {
    postId: 6,
    userId: 'zhangsan',
    type: 'video',
    url: 'thumb4.jpg',
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
    newPost.postText = newPost.postText + newPost.postId;
    newPost.createdDate = (new Date()).valueOf();
    posts.unshift(newPost)
    //数据过滤工作放在服务端，模拟调用接口返回一定数量的最新post，且是排序好的
    setTimeout(() => cb(posts), 100);
  },
  fetchOwnPosts(userId, cb) {
    //假设从服务端获取最多四条
    const results = postThumb.filter(post => post.userId === userId);
    setTimeout(cb, fetchTime, results.slice(0, 4));
  }
}
