// import { useBlockListQuery } from "@/entities/block-list/queries";
import { useBlogListQuery } from "@/entities/blog/queries";
import { useDebauncedValue } from "@/shared/lib/react-std";
import { useState } from "react";

export function useBlogItems() {
  const [q, setQ] = useState("");

  const list = useBlogListQuery({ q: useDebauncedValue(q, 400) }); // TO-DO подумать нужен ли тут useDebauncedValue

  const items = list.data?.data ?? [];

  return { items, isLoading: list.isLoading, q, setQ };
}
