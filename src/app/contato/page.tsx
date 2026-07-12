"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    instituicao: "",
    telefone: "",
    tipo: "Evento esportivo ou cultural",
    mensagem: "",
  });

  function enviarWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const texto = [
      `Olá! Meu nome é ${form.nome}.`,
      form.instituicao ? `Represento: ${form.instituicao}.` : "",
      `Tenho interesse em: ${form.tipo}.`,
      form.mensagem,
      form.telefone ? `Meu telefone: ${form.telefone}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/5571999816999?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-display text-4xl text-slate-900 md:text-5xl">Contato</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Conte para a gente o que você precisa — respondemos rápido pelo
        WhatsApp.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {/* Formulário */}
        <form
          onSubmit={enviarWhatsApp}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <label className="block text-sm font-semibold text-slate-700">
            Seu nome*
            <input
              required
              type="text"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 font-normal focus:border-brand focus:outline-none"
              placeholder="Nome completo"
            />
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-700">
            Instituição ou empresa
            <input
              type="text"
              value={form.instituicao}
              onChange={(e) =>
                setForm({ ...form, instituicao: e.target.value })
              }
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 font-normal focus:border-brand focus:outline-none"
              placeholder="Prefeitura, secretaria, escola, empresa…"
            />
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-700">
            Seu telefone
            <input
              type="tel"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 font-normal focus:border-brand focus:outline-none"
              placeholder="(71) 99999-9999"
            />
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-700">
            O que você precisa?
            <select
              value={form.tipo}
              onChange={(e) => setForm({ ...form, tipo: e.target.value })}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-normal focus:border-brand focus:outline-none"
            >
              <option>Evento esportivo ou cultural</option>
              <option>Consultoria educacional</option>
              <option>Formação e treinamento</option>
              <option>Gestão e desenvolvimento institucional</option>
              <option>Outro assunto</option>
            </select>
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-700">
            Mensagem*
            <textarea
              required
              rows={4}
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 font-normal focus:border-brand focus:outline-none"
              placeholder="Descreva brevemente seu projeto ou necessidade"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-brand py-3 font-semibold text-white transition hover:bg-brand-dark"
          >
            Enviar pelo WhatsApp
          </button>
          <p className="mt-3 text-center text-xs text-slate-500">
            Ao enviar, você será direcionado ao WhatsApp da Educatec com sua
            mensagem preenchida.
          </p>
        </form>

        {/* Dados de contato */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-brand-light/70 p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Fale direto com a gente
            </h2>
            <p className="mt-3 text-slate-700">
              WhatsApp / Telefone:
              <br />
              <a
                href="https://wa.me/5571999816999"
                className="text-2xl font-bold text-brand hover:underline"
              >
                (71) 99981-6999
              </a>
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900">Endereço</h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              Av. Amarílio Thiago dos Santos, 937
              <br />
              QD E, LT 5, Sala 3 — Vila Praiana
              <br />
              Lauro de Freitas/BA — CEP 42704-550
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <Image
              src="/images/logo-educatec.png"
              alt="Educatec — Soluções em Educação"
              width={378}
              height={252}
              className="mb-4 h-16 w-auto"
            />
            <h2 className="text-xl font-bold text-slate-900">
              Educatec Planejamento, Gestão e Consultoria Ltda.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Empresa constituída em 2007, com atuação em consultoria
              educacional, gestão, formação e produção de eventos esportivos,
              culturais e educacionais em municípios de todo o Brasil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
