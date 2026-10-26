"use client";

import { FormEvent, useState } from "react";
import { CheckCircle, FileDown, Instagram, Linkedin, Mail, Send } from "lucide-react";

export default function FinalConversionSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get("name") || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name") || ""}\nCompany: ${form.get("company") || ""}\nEmail: ${form.get("email") || ""}\nOpportunity: ${form.get("opportunityType") || ""}\n\n${form.get("message") || ""}`
    );
    setSubmitted(true);
    window.location.href = `mailto:renepeggymoagi@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-[#09090d] to-[#040407] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37]">Final conversion</p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Ready to invest in <span className="text-[#d4af37]">this brand?</span>
          </h2>
          <p className="text-zinc-300">Graduate marketing and digital marketing opportunities are welcome.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a href="/cv/Reneilwe_Moagi_Marketing_CV.pdf" download className="flex items-center gap-2 rounded-xl bg-[#d4af37] px-5 py-3 text-sm font-semibold text-black">
            <FileDown className="h-4 w-4" /> Download CV
          </a>
          <a href="https://www.linkedin.com/in/reneilwe-moagi-747962307/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm text-white">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://www.instagram.com/reneilwe._mm?psln=cTNkcng3a2hpZHFp" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm text-white">
            <Instagram className="h-4 w-4" /> Instagram
          </a>
          <a href="mailto:renepeggymoagi@gmail.com" className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm text-white">
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>

        <div className="mx-auto max-w-2xl rounded-3xl border border-white/15 bg-[#13131c] p-8 shadow-2xl sm:p-10">
          {submitted ? (
            <div className="space-y-3 py-10 text-center">
              <CheckCircle className="mx-auto h-10 w-10 text-[#d4af37]" />
              <h3 className="text-2xl font-bold text-white">Your email app is opening</h3>
              <p className="text-sm text-zinc-300">Review the prepared message and send it from your email account.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold text-white">Discuss an opportunity</h3>
                <p className="text-sm text-zinc-400">Complete the form to prepare an email enquiry.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white" />
                <input name="company" placeholder="Company" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white" />
              </div>
              <input name="email" type="email" required placeholder="Your email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white" />
              <select name="opportunityType" className="w-full rounded-xl border border-white/10 bg-[#181820] px-4 py-3 text-white">
                <option>Graduate Marketing Role</option>
                <option>Digital Marketing Role</option>
                <option>Internship</option>
                <option>Freelance Project</option>
                <option>Brand Collaboration</option>
              </select>
              <textarea name="message" required rows={5} placeholder="Tell Reneilwe about the opportunity" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white" />
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-5 py-4 text-sm font-bold uppercase tracking-wider text-black">
                <Send className="h-4 w-4" /> Prepare email enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
