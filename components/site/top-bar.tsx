import { contact } from "@/lib/data/site";

export function TopBar() {
  return (
    <div className="border-b border-white/10 bg-construction-neutral text-white">
      <div className="u-container flex flex-col gap-2 py-3 text-xs sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-white/85">
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={contact.emailHref}>{contact.email}</a>
          <span>{contact.address}</span>
        </div>
        <div className="flex gap-4 font-semibold text-white/72">
          <a href={contact.whatsapp} target="_blank" rel="noreferrer">Whatsapp</a>
          <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a>
          <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  );
}
