import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-950 px-5 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
        <h1 className="text-3xl font-black">Acceso admin</h1>
        <p className="mt-3 text-sm text-white/60">Esta version estatica no usa autenticacion de servidor.</p>
        <Link href="/ynk/admin" className="mt-6 block w-full rounded-2xl bg-emerald-600 px-4 py-3 text-center font-bold">
          Entrar
        </Link>
      </div>
    </div>
  );
}
