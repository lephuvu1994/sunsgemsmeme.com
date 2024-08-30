import clsx from "clsx";
import style from "./style.module.css";
import { InstagramIcon, TwitterIcon } from "lucide-react";

export const socialUrls = {
  twitter: "https://twitter.com/dyan",
  telegram: "https://t.me/dyangroup",
  instagram: "https://www.instagram.com/myriagames/",
};

export const SOCIAL_LIST = [
  {
    id: "twitter",
    icon: <TwitterIcon />,
    name: "X(Twitter)",
    link: socialUrls.twitter,
  },
//   {
//     id: "telegram",
//     icon: <Teleg />,
//     name: "Telegram",
//     link: socialUrls.telegram,
//   },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    name: "Instagram",
    link: socialUrls.instagram,
  },
];

const Socials: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={clsx(
        "flex flex-wrap items-center justify-start gap-4",
        className
      )}
    >
      {/* <SocialMobile /> */}
      {SOCIAL_LIST.map((item) => (
        <a
          id={style?.[item.id as string]}
          key={item.id}
          href={item.link}
          title={item.name}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            style.iconButton,
            "hidden md:inline-flex h-7 w-7 items-center justify-center"
          )}
        >
          <i className="flex justify-center items-center w-full h-full">
            {item.icon}
          </i>
          <span></span>
        </a>
      ))}
    </div>
  );
};

export default Socials;
