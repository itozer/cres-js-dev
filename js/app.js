import { ready, createH1 } from './modules/DOM';
import * as ListManager from './modules/ListManager';

ready(() => {
  document.getElementById('wrapper').appendChild(createH1('Isaac'));

  ListManager.getList(12345)
    .then(resp => {
      console.log(resp);
    })
    .catch(e => {
      console.log(e);
    });
});
