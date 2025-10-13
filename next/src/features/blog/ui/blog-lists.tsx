import { UiSpinner } from "@/shared/ui/ui-spinner";
import { useBlogItems } from "../model/use-block-items";
import { BlogItem } from "./blod-item";

export function BlogList() {
  const { isLoading, items, q, setQ } = useBlogItems();

  const isLoader = isLoading;
  const isEmptyText = !isLoading && items.length === 0;
  const isItems = items.length > 0;

  console.log("isItems", items)


  return (
    <div>
      <div className="rounded-xl bg-slate-100/50 px-10 py-6 flex flex-col gap-3">
        {isLoader && <UiSpinner className="text-teal-600 w-10 h-10 mx-auto" />}
        {isEmptyText && (
          <div className="text-xl py-1 text-center">List is empty...</div>
        )}
        {isItems &&
          items.map((item) => (
           <BlogItem item={item}/>
          ))}
      </div>
    </div>
  );
}
