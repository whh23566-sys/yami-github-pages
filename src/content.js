import flower from './assets/flower.svg';
import landscape from './assets/landscape.svg';
import shapes from './assets/shapes.svg';

export const works = [
  {
    id: 'spring',
    category: '视觉',
    label: 'VISUAL EXPLORATION',
    title: '把春天装进口袋',
    image: flower,
    alt: '绿色花朵示例插画',
    paragraphs: [
      '用一朵花、一点绿色和留白，给日常留下一份轻盈。',
      '这是一张为小站制作的示例插画，之后可以换成 Yami 的设计作品。',
    ],
  },
  {
    id: 'slow',
    category: '影像',
    label: 'A MOMENT IN FRAME',
    title: '慢一点，也很好',
    image: landscape,
    alt: '远山日落示例插画',
    paragraphs: [
      '远山、落日和一条弯弯的小路。',
      '这张示意画为未来的摄影与视频作品预留了位置，尚不是 Yami 的真实摄影作品。',
    ],
  },
  {
    id: 'little-things',
    category: '创作',
    label: 'LITTLE COLLECTIONS',
    title: '一些小小的喜欢',
    image: shapes,
    alt: '几何图形示例创作',
    paragraphs: [
      '收集颜色，也收集灵感。',
      '这里可以放手作、插画，或任何想与世界分享的小创作。当前展示的是版式示例。',
    ],
  },
];

export const notes = [
  {
    id: 'blank-space',
    number: '01',
    color: 'peach',
    category: '日常手记',
    titleLines: ['给平凡的一天，', '留一点空白'],
    excerpt: '不必把每一个时刻都填满。给窗边的光、温热的茶，留一点位置。',
    paragraphs: [
      '不必把每一个时刻都填满。给窗边的光、温热的茶，和突然冒出来的念头，留一点位置。',
      '生活记录可以从一句话开始，也可以是一张照片。这个角落，留给那些值得慢慢记住的小事。',
    ],
  },
  {
    id: 'inspiration',
    number: '02',
    color: 'sage',
    category: '灵感收集',
    titleLines: ['灵感有时藏在', '很小的地方'],
    excerpt: '一片叶子的纹路、一块旧招牌的颜色，都可以成为创作的起点。',
    paragraphs: [
      '一片叶子的纹路、一块旧招牌的颜色、一段偶然听到的旋律，都可以成为创作的起点。',
      '把它们收集起来，不急着判断有没有用。让喜欢的东西，慢慢长成自己的样子。',
    ],
  },
  {
    id: 'little-world',
    number: '03',
    color: 'yellow',
    category: '小站日记',
    titleLines: ['你好，我的', '网络小天地'],
    excerpt: '一个小小的网站，可以放下很多东西。未来的故事，等 Yami 亲自写下。',
    paragraphs: [
      '一个小小的网站，可以放下很多东西：关于自己的介绍，愿意分享的作品，以及那些转瞬即逝的生活片刻。',
      '这里是一个开始。未来的故事，等 Yami 亲自写下。',
    ],
  },
];
