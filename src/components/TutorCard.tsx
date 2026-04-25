import { Heart, Star } from "lucide-react";
import { cn } from "../lib/utils";

interface TutorCardProps {
  name: string;
  location: string;
  rating: number;
  reviews: number;
  subject: string;
  price: string;
  image: string;
  isAmbassador?: boolean;
  firstLessonFree?: boolean;
  className?: string;
}

export function TutorCard({
  name,
  location,
  rating,
  reviews,
  subject,
  price,
  image,
  isAmbassador,
  firstLessonFree,
  className,
}: TutorCardProps) {
  return (
    <div className={cn("group cursor-pointer flex flex-col gap-3", className)}>
      {/* Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Heart Icon */}
        <button className="absolute right-3 top-3 z-10 rounded-full p-2 text-white hover:bg-[#FDFBF7]/20 transition-colors">
          <Heart className="h-6 w-6" />
        </button>

        {/* Name & Location Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-12">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm font-medium text-white/90">{location}</p>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1 px-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-[#FF5A5F] text-[#FF5A5F]" />
            <span className="font-bold text-zinc-900">{rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-zinc-500">({reviews})</span>
          {isAmbassador && (
            <>
              <span className="text-zinc-400">•</span>
              <span className="text-sm font-bold text-zinc-900">Đại sứ</span>
            </>
          )}
        </div>

        <p className="line-clamp-2 text-base font-medium text-gray-800 leading-snug">
          {subject}
        </p>

        <div className="mt-1 flex items-center gap-2">
          <span className="font-bold text-zinc-900">{price}</span>
          {firstLessonFree && (
            <span className="rounded-md bg-green-100 px-2 py-0.5 text-xs font-bold text-green-800">
              Buổi đầu miễn phí
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
