import { request, config } from '../utils'
const { api } = config;
const { viewShortcutWords, delShortcutWords, upShortcutWords, addShortcutWords } = api;

// export function fetch({ page = 1 }) {
//     return request(api.viewShortcutWords);
// }

// //查询
export async function query (params) {
    return request({
        url: viewShortcutWords,
        method: 'post',
        data: params,
    })
}
