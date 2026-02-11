"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name.trim() || !form.email.trim() || !form.organization.trim() || !form.message.trim()) {
      toast.error(t("form.errorRequired"));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error(t("form.errorEmail"));
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/forms/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type,
          name: form.name,
          email: form.email,
          organization: form.organization,
          message: form.message,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        toast.error(error.error || "Failed to submit form");
        return;
      }

      toast.success(type === "client" ? t("form.successClient") : t("form.successTalent"));
      setForm({ name: "", email: "", organization: "", message: "" });
      setOpen(false);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-foreground">
            {type === "client" ? t("form.clientTitle") : t("form.talentTitle")}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">
              {t("form.name")} <span className="text-primary">{t("form.required")}</span>
            </label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={type === "client" ? t("form.namePlaceholderClient") : t("form.namePlaceholderTalent")}
              maxLength={100}
              required
              aria-required
            />
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">
              {t("form.email")} <span className="text-primary">{t("form.required")}</span>
            </label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t("form.emailPlaceholder")}
              maxLength={255}
              required
              aria-required
            />
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">
              {type === "client" ? t("form.orgLabel") : t("form.orgLabelTalent")} <span className="text-primary">{t("form.required")}</span>
            </label>
            <Input
              value={form.organization}
              onChange={(e) => setForm({ ...form, organization: e.target.value })}
              placeholder={type === "client" ? t("form.orgPlaceholderClient") : t("form.orgPlaceholderTalent")}
              maxLength={150}
              required
              aria-required
            />
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">
              {type === "client" ? t("form.messageClient") : t("form.messageTalent")} <span className="text-primary">{t("form.required")}</span>
            </label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={type === "client" ? t("form.messagePlaceholderClient") : t("form.messagePlaceholderTalent")}
              maxLength={1000}
              rows={3}
              required
              aria-required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-orange-light transition-colors shadow-orange disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : (type === "client" ? t("form.submitClient") : t("form.submitTalent"))}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ExpertFormDialog;
