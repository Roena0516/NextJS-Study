import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ListClient from "./ListClient";
import { listQueryKey, fetchPostList } from "@/lib/queries/listQuery";

export default async function ListPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: listQueryKey,
    queryFn: fetchPostList,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ListClient />
    </HydrationBoundary>
  );
}
