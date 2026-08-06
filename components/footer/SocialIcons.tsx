import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaDribbble,
} from "react-icons/fa6";

const social = [
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaDribbble,
];

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      {social.map((Icon, index) => (
        <button
          key={index}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-border/60
            transition-all
            duration-300
            hover:scale-110
            hover:bg-white
            hover:text-slate-950
          "
        >
          <Icon size={18} />
        </button>
      ))}
    </div>
  );
}