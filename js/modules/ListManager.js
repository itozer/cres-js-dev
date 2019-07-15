import * as axios from 'axios';

const getList = liid =>
  new Promise((resolve, reject) => {
    axios
      .get('CresSurvey', {
        params: {
          Action: 'Load',
          LIID: liid,
          S: '',
          O1: '',
          O2: '',
        },
      })
      .then(resp => {
        console.log(resp);
        resolve(resp);
      })
      .catch(e => {
        console.log(e);
        reject(e);
      })
      .then(() => {});
  });

const clearList = () => {
  return new Promise(function(resolve, reject) {
    axios
      .get('CresSurvey', {
        params: {
          Action: 'ClearList',
          LIID: 12345,
        },
      })
      .then(function(resp) {
        console.log(resp);
      })
      .catch(function(e) {
        console.log(e);
        reject(resp);
      })
      .then(function() {
        resolve(resp);
      });
  });
};

const addUser = () => {
  return new Promise(function(resolve, reject) {
    axios
      .get('CresSurvey', {
        params: {
          Action: 'AddUser',
          Profile: '',
        },
      })
      .then(function(resp) {
        console.log(resp);
      })
      .catch(function(e) {
        console.log(e);
        reject(resp);
      })
      .then(function() {
        resolve(resp);
      });
  });
};

const deleteUser = () => {
  return new Promise(function(resolve, reject) {
    axios
      .get('CresSurvey', {
        params: {
          Action: 'DeleteUser',
          Profile: '',
        },
      })
      .then(function(resp) {
        console.log(resp);
      })
      .catch(function(e) {
        console.log(e);
        reject(resp);
      })
      .then(function() {
        resolve(resp);
      });
  });
};

const updateUser = () => {
  return new Promise(function(resolve, reject) {
    axios
      .get('CresSurvey', {
        params: {
          Action: 'UpdateUser',
          Profile: '',
        },
      })
      .then(function(resp) {
        console.log(resp);
      })
      .catch(function(e) {
        console.log(e);
        reject(resp);
      })
      .then(function() {
        resolve(resp);
      });
  });
};

export { getList, clearList, addUser, deleteUser, updateUser };
