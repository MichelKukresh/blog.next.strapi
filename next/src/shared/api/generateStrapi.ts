import { createInstance } from "./api-instance";
import { createStrapi } from "./api-strapi";
// import type { BodyType } from "./api-strapi";
export type BlockListControllerGetListParams = {
  q?: string;
};

// export interface Articles {
//   message: string;
// }

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

export const appControllerGetAticles = (  params?: BlockListControllerGetListParams,
  options?: SecondParameter<typeof createInstance>,) => {
  return createStrapi({ url: '/api/articles?populate=*', method: 'get' });
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BlockItemDtoType = {
  KeyWord: "KeyWord",
  Website: "Website",
} as const;


export type BlockItemDtoType =
  (typeof BlockItemDtoType)[keyof typeof BlockItemDtoType];

export interface BlockItemDto {
  id: number;
  blockListId: number;
  type: BlockItemDtoType;
  data: string;
  createdAt: string;
}

export interface BlockListDto {
  id: number;
  ownerId: number;
  items: BlockItemDto[];
}

export const blockListControllerGetList = (
  params?: BlockListControllerGetListParams,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BlockListDto>(
    { url: `/block-list`, method: "get", params },
    options,
  );
};