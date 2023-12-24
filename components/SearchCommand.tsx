"use client";
import { useEffect, useState } from "react";
import { File } from "lucide-react";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";

import {
  CommandDialog,
  CommandGroup,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { useSearch } from "@/hooks/useSearch";
import { api } from "@/convex/_generated/api";

export default function SearchCommand() {
  const { user } = useUser();
  const router = useRouter();
  const documents = useQuery(api.documents.getSearch);
  const [isMounted, setIsMounted] = useState(false);

  const toggle = useSearch((store) => store.toggle);
  const isOpen = useSearch((store) => store.isOpen);
  const onClose = useSearch((store) => store.onClose);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(()=>{
    const down = (e:KeyboardEvent) =>{
      if(e.key === 'k' && (e.metaKey || e.ctrlKey)){
        e.preventDefault()
        toggle()

      }
    }
    document.addEventListener('keydown',down)
    return ()=>document.removeEventListener('keydown',down)
  },[toggle])

  if (!isMounted) return null;

  const onSelect = (id:string) => {
    router.push(`/documents/${id}`)
    onClose()
  }

  return (
    <CommandDialog  open={isOpen}  onOpenChange={onClose}>
      <CommandInput placeholder={`Search ${user?.fullName}'s Jotion`} />
      <CommandList>
        <CommandEmpty>No Result</CommandEmpty>
        <CommandGroup heading="Documents">
          {documents?.map((d) => (
            <CommandItem
              key={d._id}
              value={`${d._id}-${d.title}`}
              title={d.title}
              onSelect={()=>onSelect(d._id)}
            >
              {d.icon ? (
                <p className="mr-2 text-[18px]">{d.icon}</p>
              ) : (
                <File className="mr-2 h-6 w-6" />
              )}

              <span>{d.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
