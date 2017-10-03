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
    type: 'image-group',
    resource: [
      { photo: 'postphoto1.JPG',thumb: 'postphoto1.jpg'},
      { photo: 'postphoto2.JPG',thumb: 'postphoto2.jpg'},
      { photo: 'postphoto3.JPG',thumb: 'postphoto3.jpg'},
      { photo: 'postphoto4.JPG',thumb: 'postphoto4.jpg'},
      { photo: 'postphoto5.JPG',thumb: 'postphoto5.jpg'},
      { photo: 'postphoto6.JPG',thumb: 'postphoto6.jpg'},
      { photo: 'postphoto7.JPG',thumb: 'postphoto7.jpg'},
      { photo: 'postphoto8.JPG',thumb: 'postphoto8.jpg'},
      { photo: 'postphoto9.JPG',thumb: 'postphoto9.jpg'},
    ],
    interactionUser: {
      'lisi': '李四',
    },
    likes: ['lisi'],//点赞用户的Id
    comments: []
  },
  {
    postId: 3,
    postText: '张三的朋友圈状态3',
    userId: 'zhangsan',
    avatar: 'avatar1.png',
    wall: 'wall1.png',
    userName: '张三',
    createdDate: last5Minute,
    type: 'article',
    likes:[],
    comments: [],
    interactionUser:{},
    resource: {
      url: 'www.baidu.com',
      thumb:'postarticle.jpg',
      text: '军队里才有的"强军"月饼，看一眼就已经流口水啦！'
    }//资源链接，图片为多个，其余都为一个
  },
  {
    postId: 4,
    postText: '后排豪华卧铺，睡吃睡吃，蹭车真舒服。\n（买不到车票无所谓，只要脸皮厚）',
    userId: 'lisi',
    avatar: 'avatar2.JPG',
    wall: 'wall2.png',
    userName: '李四',
    createdDate: lastHour,
    type: 'image',
    likes:[],
    interactionUser:{},
    comments: [],
    resource: { photo: 'postphoto10.JPG',thumb: 'postthumb.jpg'},//资源链接，图片为多个，其余都为一个
  },
  {
    postId: 5,
    postText: '中国最美的青海湖',
    userId: 'wangwu',
    avatar: 'avatar3.JPG',
    wall: 'wall3.png',
    userName: '王五',
    createdDate: lastDay,
    type: 'video',
    resource: { video: 'video.MP4',thumb: 'videothumb.jpg'},//资源链接，图片为多个，其余都为一个
    interactionUser: {
      'lisi': '李四',
    },
    comments: [],
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
    likes:[],
    comments: [],
    interactionUser:{},
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
function findUser(userId) {
  let result;
  for (var i = 0; i < users.length; i++) {
    if (userId === users[i].Id) {
      result = users[i];
      break;
    }
  }
  return result;
}
export default {
  fetchUser(userId, cb) {
    let user = {}
    for (let i in users) {
      if (users[i].userId === userId) {
        Object.assign(user, users[i]);
        break;
      }
    }
    setTimeout(() => cb(JSON.stringify(user)), 100);
  },
  fetchAllUsers(userId, userIdSet, cb) {
    setTimeout(() => cb(JSON.stringify(users), 100));
  },
  fetchAllPosts(userId, cb) {
    let newPost = Object.assign({}, posts[posts.length - 1]);
    newPost.postId = nextId++;
    newPost.postText = newPost.postText + newPost.postId;
    newPost.createdDate = (new Date()).valueOf();
    posts.unshift(newPost);
    //数据过滤工作放在服务端，模拟调用接口返回一定数量的最新post，且是排序好的
    setTimeout(() => cb(JSON.stringify(posts), 100));
  },
  fetchOwnPosts(userId, cb) {
    //假设从服务端获取最多四条
    const results = postThumb.filter(post => post.userId === userId);
    setTimeout(cb, fetchTime, results.slice(0, 4));
  },
  like(payload, cb) {
    var result =false;
    for (var i = 0; i < posts.length; i++) {
      if (payload.postId == posts[i].postId) {
        posts[i].likes.push(payload.userId);
        posts[i].interactionUser[payload.userId] = payload.userName;
        result = true;
        break;
      }
    }
    setTimeout(cb, fetchTime, result);
  },
  comment(payload, cb) {
    var createdDate = '';
    var comment = Object.assign({}, payload);
    for (var i = 0; i < posts.length; i++) {
      if (payload.postId == posts[i].postId) {
        let post = posts[i];
        comment.createdDate = (new Date()).valueOf()
        post.comments.push(comment);
        let user = findUser(post.userId)
        post.interactionUser[payload.data.postId] = user.userName;
        break;
      }
    }
    setTimeout(cb, fetchTime, comment);
  }
}
