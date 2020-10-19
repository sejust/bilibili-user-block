// ==UserScript==
// @name                Bilibili用户屏蔽
// @name:zh-CN          Bilibili用户屏蔽
// @namespace           http://tampermonkey.net/
// @version             0.0.1
// @description         try to take over the world!
// @description:zh-CN   屏蔽在线和排行中不喜欢的UP主
// @author              Slasher Liang
// @match               *://www.bilibili.com/video/online*
// @match               *://www.bilibili.com/ranking*
// @match               *://www.bilibili.com/v/popular/rank/*
// @grant               none
// ==/UserScript==

const blockedUserOnline = [
];

const blockedUserRank = [
];

const blockedUserAll = [
];

(function () {

  // online
  const onlineList = document.querySelectorAll('.online-list>div');
  for (let i = 0; i < onlineList.length; i++) {
    const d = onlineList[i];
    const user = d.querySelector('.dlo>a');
    if (user) {
      const parts = user.href.split('/');
      const uid = parts[parts.length - 2];
      if (blockedUserAll.includes(uid) || blockedUserOnline.includes(uid)) {
        console.log('online blocked: ' + uid);
        d.remove();
      }
    }
  }

  function checkAndBlockRank() {
    // ranking
    const rankList = document.querySelectorAll('.rank-list>li');
    for (let j = 0; j < rankList.length; j++) {
      const d = rankList[j];
      const user = d.querySelector('.detail>a');
      if (user) {
        const parts = user.href.trimEnd().split('/');
        const uid = parts[parts.length - 1];
        if (blockedUserAll.includes(uid) || blockedUserRank.includes(uid)) {
          console.log('ranking blocked: ' + uid);
          d.remove();
        }
      }
    }
  }

  // run first time
  checkAndBlockRank();
  // tab click
  const tabs = document.getElementsByClassName('rank-tab-wrap')[0];
  tabs &&
    tabs.addEventListener('click', function () {
      console.log('clicked');
      setTimeout(checkAndBlockRank, 300);
    });

})();
