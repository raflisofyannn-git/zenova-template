import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaDribbble,
} from "react-icons/fa6";

const social = [
  {
    icon: FaGithub,
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    label: "X",
  },
  {
    icon: FaDribbble,
    label: "Dribbble",
  },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-3">
      {social.map(({ icon: Icon, label }) => (
        <button
          key={label}
          type="button"
          aria-label={label}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-border/60
            bg-white/70
            text-muted-foreground
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-indigo-300
            hover:bg-indigo-600
            hover:text-white
            hover:shadow-lg
            hover:shadow-indigo-500/20
          "
        >
          <Icon size={17} />
        </button>
      ))}
    </div>
  );
}
