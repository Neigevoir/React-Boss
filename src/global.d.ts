import * as lodash from 'lodash'; // NOTE：Lodash
// import _ from 'src/app/lib/lodash' // NOTE：Neigevoir

declare global { // 全局变量设置
  const _: typeof lodash
}

declare module '*.css';
declare module '*.scss';

declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';

// 第三方库尚未提供声明文件
declare module 'react-router-redux';
