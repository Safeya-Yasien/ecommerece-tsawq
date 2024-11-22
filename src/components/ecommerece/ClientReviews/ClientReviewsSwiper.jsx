import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

import client from "../../../assets/images/client.svg";

const reviews = [
  {
    name: "Mohamed Ahmed",
    username: "112/3/24",
    body: "“تجربة رائعة ومميزة. لقد أعجبني هذا المنتج حقًا، ويستحق التجربة. إذا كنت ترغب بشرائه لا تتردد، أنصح به بشدة.”",
    img: client,
  },
  {
    name: "فاطمة علي",
    username: "215/5/24",
    body: "“المنتج ممتاز جدًا! الجودة رائعة وخدمة التوصيل كانت سريعة. أنصح الجميع بتجربته.”",
    img: client,
  },
  {
    name: "أحمد السعيد",
    username: "318/7/24",
    body: "“أعجبني المنتج كثيرًا. كان كما هو موصوف تمامًا، سأقوم بشراء المزيد.”",
    img: client,
  },
  {
    name: "سارة محمد",
    username: "421/9/24",
    body: "“خدمة العملاء كانت ممتازة، والمنتج فاق توقعاتي. أنصح به بشدة.”",
    img: client,
  },
  {
    name: "خالد حسن",
    username: "527/11/24",
    body: "“منتج رائع! سعر مناسب وجودة عالية. سأقوم بشراءه مجددًا.”",
    img: client,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl  p-4",
        "bg-[#F3F5F9] "
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-custom-blue font-medium text-sme">
            {name}
          </figcaption>
          <p className="text-[#282A2B] font-normal text-xs">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function ClientReviewsSwiper() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 "></div>
    </div>
  );
}
export default ClientReviewsSwiper;
