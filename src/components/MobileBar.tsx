import { ChatTextIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/ssr";
import { SHOP } from "@/lib/site";

/** Thumb-reach actions on phones. Most questions here are "is it still there?",
 *  so texting gets equal billing with calling. */
export function MobileBar() {
  const item = "flex flex-col items-center justify-center gap-0.5 py-2.5 text-[0.75rem] font-semibold";
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <a href={SHOP.phoneHref} className={`${item} bg-accent text-on-accent`}>
        <PhoneIcon size={22} weight="bold" aria-hidden />
        Call
      </a>
      <a href={SHOP.smsHref} className={item}>
        <ChatTextIcon size={22} weight="bold" aria-hidden />
        Text
      </a>
      <a href={SHOP.mapsUrl} target="_blank" rel="noreferrer" className={item}>
        <MapPinIcon size={22} weight="bold" aria-hidden />
        Directions
      </a>
    </div>
  );
}
