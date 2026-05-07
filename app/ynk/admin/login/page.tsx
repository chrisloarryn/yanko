import { loginAction } from "../actions";

export default function AdminLoginPage({ searchParams }: { searchParams: { error?: string } }) {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-950 px-5 text-white">
      <form action={loginAction} className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
        <h1 className="text-3xl font-black">Acceso admin</h1>
        <p className="mt-3 text-sm text-white/60">Usa la clave definida en YNK_ADMIN_PASSWORD. En local, por defecto es admin.</p>
        <input name="password" type="password" required className="mt-6 w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-950" placeholder="Clave" />
        <button className="mt-4 w-full rounded-2xl bg-emerald-600 px-4 py-3 font-bold">Ingresar</button>
        {searchParams.error ? <p className="mt-4 text-sm text-red-300">Clave incorrecta.</p> : null}
      </form>
    </div>
  );
}
