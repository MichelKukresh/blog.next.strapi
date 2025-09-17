import { createStrapi } from "./api-strapi";
// import type { BodyType } from "./api-strapi";
// export type BlockListControllerGetListParams = {
//   q?: string;
// };

export interface Articles {
  message: string;
}

export const appControllerGetAticles = () => {
  return createStrapi<Articles>({ url: '/api/articles?populate=*', method: 'get' });
};