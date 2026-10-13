import { Link } from "@tanstack/react-router";
import { CalendarDays, UserRound } from "lucide-react";

type AuthorBylineProps = {
  reviewedAt: string;
  className?: string;
};

export function AuthorByline({ reviewedAt, className = "" }: AuthorBylineProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600 ${className}`}
    >
      <span className="inline-flex items-center gap-2">
        <UserRound className="h-4 w-4 text-[#8B5A2B]" aria-hidden="true" />
        Por{" "}
        <Link to="/autor/ricardo-garcia" className="font-bold text-[#0F3F4A] hover:text-[#8B5A2B]">
          Ricardo Garcia
        </Link>
      </span>

      <span className="inline-flex items-center gap-2">
        <CalendarDays className="h-4 w-4 text-[#8B5A2B]" aria-hidden="true" />
        Revisado em {reviewedAt}
      </span>
    </div>
  );
}
