"use client";

import { Spinner } from "@/components/provider/spinner";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { Search, Trash, Undo } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { ConfirmModal } from "@/components/modals/ConfirmModal";

export default function TrashBox() {
  const router = useRouter();
  const params = useParams();
  const documents = useQuery(api.documents.getTrash);
  const restore = useMutation(api.documents.restore);
  const remove = useMutation(api.documents.remove);

  const [search, setSearch] = useState("");

  const filteredDocuments = documents?.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase()),
  );

  const onClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    documentsId: string,
  ) => {
    e.stopPropagation();
    router.push(`/documents/${documentsId}`);
  };

  const onRestore = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    documentsId: Id<"documents">,
  ) => {
    e.stopPropagation();
    const promise = restore({ id: documentsId });
    toast.promise(promise, {
      loading: "Restoring notes ...",
      success: "Note Restored !",
      error: "Failed to restore note !",
    });
  };
  const onRemove = (documentsId: Id<"documents">) => {
    const promise = remove({ id: documentsId });
    toast.promise(promise, {
      loading: "Removing notes ...",
      success: "Note Removed !",
      error: "Failed to remove note !",
    });

    if (params.documentId == documentsId) {
      router.push("/documents");
    }
  };

  if (documents === undefined) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="text-sm">
      <div className="flex items-center gap-x-2 p-2">
        <Search className="h-4 w-4" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-7 px-2 focus-visible:ring-transparent bg-secondary"
          placeholder="Filter by title"
        />
      </div>
      <div className="mt-2 px-1 pb-1">
        <p className="hidden last:block text-muted-foreground text-xs text-center p-2">
          No Documents Found
        </p>
        {filteredDocuments?.map((d) => (
          <div
            key={d._id}
            role="button"
            onClick={(e) => onClick(e, d._id)}
            className="text-sm rounded-sm w-full hover:bg-primary/5 flex items-center justify-between text-primary"
          >
            <span className="truncate pl-2 ">{d.title}</span>
            <div className="flex items-center">
              <div
                onClick={(e) => onRestore(e, d._id)}
                role="button"
                className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
              >
                <Undo className="h-4 w-4 text text-muted-foreground" />
              </div>
              <ConfirmModal onConfirm={() => onRemove(d._id)}>
                <div
                  role="button"
                  className="rounded-sm p-2 hover:bg-rose-400 dark:hover:bg-rose-600"
                >
                  <Trash className="h-4 w-4 text-muted-foreground" />
                </div>
              </ConfirmModal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
