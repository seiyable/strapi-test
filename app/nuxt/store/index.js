import Vuex from 'vuex';
import axios from 'axios';

const API_HOST = 'http://localhost:1337';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      page: 'index',
      content: {
        kiosk: {},
        activityItems: [],
      },
    }),
    mutations: {
      updateKiosk(state, kiosk) {
        state.content.kiosk = kiosk;
      },
      updateActivityItems(state, activityItems) {
        state.content.activityItems = activityItems;
      },
    },
    getters: {
      kioskTitle: (state) => {
        return state.content.kiosk.title;
      },
      screenTimeout: (state) => {
        return state.content.kiosk.screen_timeout_sec;
      },
      activityItems: (state) => {
        return state.content.activityItems;
      },
    },
    actions: {
      getKiosk(store) {
        const url = API_HOST + '/kiosks';
        axios.get(url, {
          params: {
            _sort: 'createdAt:desc',
          },
        })
            .then((response) => {
              console.log('getKiosk', response);
              const firstItem = response.data[0];
              store.commit('updateKiosk', firstItem);
            })
            .catch((error) => {
              console.error('Error on getKiosk', error);
            });
      },
      getActivityItems(store) {
        const url = API_HOST + '/activityitems';
        axios.get(url, {
          params: {
            _sort: 'createdAt:desc',
          },
        })
            .then((response) => {
              console.log('getActivityItems', response);
              const items = response.data;
              store.commit('updateActivityItems', items);
            })
            .catch((error) => {
              console.error('Error on getKiosk', error);
            });
      },
    },
  });
};

export default createStore;
