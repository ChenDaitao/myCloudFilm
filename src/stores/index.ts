/*
 * @Date: 2023-01-31 17:56:33
 * @LastEditTime: 2023-02-01 15:58:57
 * @Description: 注册pinia
 */

import { createPinia } from "pinia";

const store = createPinia();

// export function setupStore(app: App<Element>) {
//   app.use(store);
// }

export { store };
