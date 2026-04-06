interface Article {
  id: number;
  image: string;
  category: string;
  title: string;
  excerpt: string;
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="flex flex-col gap-4 items-start overflow-hidden  group md:pb-8 md:rounded-2xl h-full">
      <div className="h-60 overflow-hidden relative rounded-2xl shrink-0 w-full group">
        <div className="absolute inset-0 border border-white/50 rounded-2xl z-10 pointer-events-none" />

        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl transform transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
        />
      </div>

      <div className="rounded-lg bg-white/16 px-4 py-1 inline-flex items-center justify-center shadow-5xl">
        <span className="font-normal flex text-xs leading-xs text-grey-1100">
          {article.category}
        </span>
      </div>

      <div className="flex flex-col md:gap-4 gap-2 w-full">
        <p className="font-bold text-base leading-4.75 xl:leading-5.5 text-white-1100 group-hover:text-orange-1100 transition-colors duration-500 ease-out line-clamp-3">
          {article.title}
        </p>
        <p className="font-normal text-[14px] leading-4.25 text-grey-1100">
          {article.excerpt}
        </p>
      </div>
    </div>
  );
}
