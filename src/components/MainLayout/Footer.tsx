import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <>
      <div className="border-b py-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-2">O nas</h3>
            <p className="text-sm text-muted-foreground">
              Krótki opis firmy lub projektu.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Nawigacja</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <a href="/about">O nas</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Kontakt</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Newsletter</h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Twój email"
                className="flex-1 border rounded-md px-3 py-2 text-sm"
              />
              <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm">
                Zapisz się
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
