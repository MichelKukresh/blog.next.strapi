import { appControllerGetAticles } from "@/shared/api/generateStrapi";
import { useQuery } from "@tanstack/react-query";

const blockListKey = ["blog"] as unknown[];

export function useBlogListQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: blockListKey.concat([{ q }]),
    queryFn: () => appControllerGetAticles({ q }), 
    keepPreviousData: true,
  });
}

// TO-DO переработать