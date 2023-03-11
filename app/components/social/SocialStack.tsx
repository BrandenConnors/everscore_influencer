import { FeedCard } from "~/components/social/FeedCard";
import { ShareCard } from "~/components/social/ShareCard";


export function SocialStack(props: any) {
    return (
        <div className="col-span-12 h-auto rounded-lg pb-2 border-2">
        <div className="container mx-auto px-6 justify-center ">
          <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12 place-items-center justify-center">
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </div>
        </div>
      </div>
    )}