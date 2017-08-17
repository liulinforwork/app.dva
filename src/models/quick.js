import * as quickService from '../services/quick';

export default {
    namespace: 'quick',
    state: {
        list: ['动态加载model,router']
    },
    reducers: {
        // key/value 格式定义reducer,处理同步操作，唯一可以改变state的地方
        // 由action触发

        save(state, { payload: { data: list, total } }) {
            return { ...state, list, total };
        },
    },
    effects: {
        //  key/value 格式定义 effect,处理异步操作和业务逻辑,不直接修改state
        // 由action触发，可触发action,可获取全局的state


        *fetch({ payload: { page } }, { call, put }) {
            const { data, headers } = yield call(quickService.query, { page });
            // yield put({ type: 'save', payload: { data, total: headers['x-total-count'] } });
        },
    },
    subscriptions: {
        // 以 key/value 格式定义 subscription，订阅，用于订阅一个数据源。然后根据需要dispatch相应的action, 在app.start时候执行
        // 数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。


        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/quick') {
                    dispatch({ type: 'fetch', payload: query });
                }
            });
        },

    },
};