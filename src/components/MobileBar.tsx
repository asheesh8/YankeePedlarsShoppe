import { ChatTextIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/ssr";
import { SHOP } from "@/lib/site";

/** Thumb-reach actions on phones. Most questions here are "is it still there?",
 *  so texting gets equal billing with calling. */
export function MobileBar() {
  const item = "flex flex-col items-center justify-center gap-0.5 py-2.5 text-[0.75rem] font-medium";
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <a href={SHOP.phoneHref} className={`${item} bg-pine text-on-pine`}>
        <PhoneIcon size={21} aria-hidden />
        Call
      </a>
      <a href={SHOP.smsHref} className={item}>
        <ChatTextIcon size={21} aria-hidden />
        Text
      </a>
      <a href={SHOP.mapsUrl} target="_blank" rel="noreferrer" className={item}>
        <MapPinIcon size={21} aria-hidden />
        Directions
      </a>
    </div>
  );
}
