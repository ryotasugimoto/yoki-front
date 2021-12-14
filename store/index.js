// store/index.js
import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
        messages: [
        {content: 'コーヒーがうまい', created: '2021-11-30 17:00', state: '作業前'}, 
        {content: 'アウトプットできた', created: '2021-11-27 17:00', state: '作業前'}, 
        {content: 'インドカレーがうまかった。', created: '2021-11-27 16:00', state: '作業中'},
        {content: '丹沢の山に癒やされた', created: '2021-11-26 15:30', state: '完了'}
      ]
    }),
    mutations: {
        insert: function(state, obj) {
          var d = new Date();
          var fmt = d.getFullYear()
                  + '-' + ('00' + (d.getMonth() + 1)).slice(-2)
                  + '-' + ('00' + d.getDate()).slice(-2)
                  + ' ' + ('00' + d.getHours()).slice(-2)
                  + ':' + ('00' + d.getMinutes()).slice(-2);
          state.messages.unshift({
            content: obj.content,
            created: fmt,
            state: '作業前'
          })
        }
      }
  })
}

export default createStore;
