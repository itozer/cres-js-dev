import { ready } from './modules/DOM';
import * as ListManager from './modules/ListManager';

ready(() => {
  ListManager.getList(12345)
    .then(resp => {
      console.log(resp);
    })
    .catch(e => {
      console.log(e);
    });
});
