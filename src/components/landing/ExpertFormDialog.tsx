import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface ExpertFormDialogProps {
  type: "client" | "talent";
  children: React.ReactNode;
}

const ExpertFormDialog = ({ type, children }: ExpertFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Veuillez remplir les champs obligatoires.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Veuillez entrer un email valide.");
      return;
    }
    toast.success(
      type === "client"
        ? "Votre demande a été envoyée ! Nous vous contacterons sous 24h."
        : "Votre candidature a été reçue ! Notre équipe vous contactera bientôt."
    );
    setForm({ name: "", email: "", organization: "", message: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-foreground">
            {type === "client" ? "Trouver un Expert R&D" : "Rejoindre le Réseau d'Élite"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">
              Nom complet <span className="text-primary">*</span>
            </label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={type === "client" ? "Votre nom" : "Dr. / Prof. Nom"}
              maxLength={100}
            />
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">
              Email <span className="text-primary">*</span>
            </label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="votre@email.com"
              maxLength={255}
            />
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">
              {type === "client" ? "Organisation" : "Université / Institution"}
            </label>
            <Input
              value={form.organization}
              onChange={(e) => setForm({ ...form, organization: e.target.value })}
              placeholder={type === "client" ? "Nom de votre entreprise" : "Votre institution"}
              maxLength={150}
            />
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">
              {type === "client" ? "Décrivez votre besoin" : "Domaine d'expertise"}
            </label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={
                type === "client"
                  ? "Ex: Nous cherchons un expert en IA pour un projet de 3 mois..."
                  : "Ex: PhD en Intelligence Artificielle, 5 ans d'expérience..."
              }
              maxLength={1000}
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-orange-light transition-colors shadow-orange"
          >
            {type === "client" ? "Envoyer ma demande" : "Soumettre ma candidature"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ExpertFormDialog;
