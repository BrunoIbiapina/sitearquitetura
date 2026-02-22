"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  HardHat,
  CheckCircle2,
  Circle,
  Clock,
  Camera,
  Video,
  MessageCircle,
  Send,
  ChevronLeft,
  ChevronRight,
  X,
  User,
} from "lucide-react";
import { getOngoingWorkBySlug } from "@/data/ongoing-works";
import type { WorkUpdate, WorkComment } from "@/data/ongoing-works";

export default function ObraDetalhePage() {
  const params = useParams<{ slug: string }>();
  const work = getOngoingWorkBySlug(params.slug);

  if (!work) return notFound();

  return (
    <main className="min-h-screen bg-background">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link
            href="/#obras"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <HardHat className="h-3.5 w-3.5 text-accent" />
            <span>{work.category}</span>
            <span className="text-border">{"/"}</span>
            <span className="font-semibold text-accent tabular-nums">
              {work.progress}%
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <header className="pt-10 pb-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-accent uppercase">
              {work.category}
            </span>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-medium text-muted-foreground">
              {work.progress}% concluido
            </span>
          </div>

          <h1 className="mt-5 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            {work.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {work.description}
          </p>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent" />
              {work.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-accent" />
              Inicio:{" "}
              {new Date(work.startDate).toLocaleDateString("pt-BR", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-accent" />
              Previsao:{" "}
              {new Date(work.estimatedEnd).toLocaleDateString("pt-BR", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </header>

        {/* Main progress bar */}
        <div className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-foreground">Progresso geral</span>
            <span className="font-bold text-accent tabular-nums text-lg">
              {work.progress}%
            </span>
          </div>
          <div className="mt-3 h-3 w-full rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-accent transition-all duration-1000"
              style={{ width: `${work.progress}%` }}
            />
          </div>
        </div>

        {/* Timeline */}
        <TimelineSection phases={work.phases} />

        {/* Updates feed */}
        <UpdatesFeed updates={work.updates} workTitle={work.title} />

        {/* Comments */}
        <CommentsSection comments={work.comments} />

        <div className="py-16" />
      </div>
    </main>
  );
}

/* ─────────── Timeline ─────────── */
function TimelineSection({
  phases,
}: {
  phases: { name: string; status: string; date?: string }[];
}) {
  return (
    <section className="mb-12">
      <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
        Cronograma de Etapas
      </h2>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {phases.map((phase, i) => (
          <div
            key={i}
            className={`relative flex items-start gap-4 rounded-xl border p-4 transition-all ${
              phase.status === "completed"
                ? "border-accent/30 bg-accent/5"
                : phase.status === "in-progress"
                  ? "border-accent bg-accent/10 shadow-sm"
                  : "border-border bg-card"
            }`}
          >
            <div className="mt-0.5">
              {phase.status === "completed" ? (
                <CheckCircle2 className="h-5 w-5 text-accent" />
              ) : phase.status === "in-progress" ? (
                <div className="relative">
                  <Circle className="h-5 w-5 text-accent" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent/30" />
                </div>
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground/40" />
              )}
            </div>
            <div className="flex-1">
              <p
                className={`text-sm font-semibold ${
                  phase.status === "upcoming"
                    ? "text-muted-foreground"
                    : "text-foreground"
                }`}
              >
                {phase.name}
              </p>
              {phase.date && (
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {phase.date}
                </p>
              )}
            </div>
            {phase.status === "in-progress" && (
              <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-accent-foreground uppercase tracking-wide">
                Agora
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────── Updates Feed ─────────── */
function UpdatesFeed({
  updates,
  workTitle,
}: {
  updates: WorkUpdate[];
  workTitle: string;
}) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3">
        <Camera className="h-5 w-5 text-accent" />
        <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
          Atualizacoes da Obra
        </h2>
      </div>

      <div className="mt-6 flex flex-col gap-8">
        {updates.map((update) => (
          <UpdateCard key={update.id} update={update} workTitle={workTitle} />
        ))}
      </div>
    </section>
  );
}

function UpdateCard({
  update,
  workTitle,
}: {
  update: WorkUpdate;
  workTitle: string;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <article className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border px-6 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10">
          <Calendar className="h-4 w-4 text-accent" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {update.title}
          </p>
          <p className="text-xs text-muted-foreground">
            {new Date(update.date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {update.description}
        </p>

        {/* Photo grid */}
        {update.photos.length > 0 && (
          <div className="mt-5">
            <div className="flex items-center gap-2 mb-3">
              <Camera className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Fotos ({update.photos.length})
              </span>
            </div>
            <div className="grid gap-2 grid-cols-2 sm:grid-cols-3">
              {update.photos.map((photo, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setLightboxIndex(i);
                    setLightboxOpen(true);
                  }}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border group cursor-pointer"
                >
                  <Image
                    src={photo}
                    alt={`${workTitle} - ${update.title} - foto ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Videos */}
        {update.videos.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3">
              <Video className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Videos ({update.videos.length})
              </span>
            </div>
            <div className="grid gap-3">
              {update.videos.map((video, i) => (
                <div
                  key={i}
                  className="aspect-video overflow-hidden rounded-xl border border-border"
                >
                  <iframe
                    src={video}
                    title={`${update.title} - video ${i + 1}`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-card/20 text-card backdrop-blur-sm transition hover:bg-card/40"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (p) => (p - 1 + update.photos.length) % update.photos.length,
              );
            }}
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/20 text-card backdrop-blur-sm transition hover:bg-card/40"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            className="relative h-[80vh] w-[90vw] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={update.photos[lightboxIndex]}
              alt={`${workTitle} - foto ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((p) => (p + 1) % update.photos.length);
            }}
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/20 text-card backdrop-blur-sm transition hover:bg-card/40"
            aria-label="Proxima"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-6 text-center text-sm text-card/70 tabular-nums">
            {lightboxIndex + 1} / {update.photos.length}
          </div>
        </div>
      )}
    </article>
  );
}

/* ─────────── Comments ─────────── */
function CommentsSection({ comments }: { comments: WorkComment[] }) {
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3">
        <MessageCircle className="h-5 w-5 text-accent" />
        <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
          Comentarios
        </h2>
        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground tabular-nums">
          {comments.length}
        </span>
      </div>

      {/* New comment form */}
      <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10">
            <User className="h-4 w-4 text-accent" />
          </div>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Seu nome"
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div className="flex gap-3">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Deixe seu comentario sobre a obra..."
            rows={3}
            className="flex-1 resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-50"
            disabled={!newComment.trim() || !authorName.trim()}
          >
            <Send className="h-4 w-4" />
            Enviar
          </button>
        </div>
      </div>

      {/* Comments list */}
      <div className="mt-6 flex flex-col gap-4">
        {comments.length === 0 && (
          <p className="py-8 text-center text-sm text-muted-foreground">
            Nenhum comentario ainda. Seja o primeiro a comentar!
          </p>
        )}
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
}

function CommentItem({
  comment,
  isReply = false,
}: {
  comment: WorkComment;
  isReply?: boolean;
}) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");

  return (
    <div className={`${isReply ? "ml-10 mt-3" : ""}`}>
      <div
        className={`rounded-xl border p-4 ${
          isReply ? "border-accent/20 bg-accent/5" : "border-border bg-card"
        }`}
      >
        {/* Author row */}
        <div className="flex items-center gap-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
              comment.author.includes("Adelia")
                ? "bg-accent text-accent-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {comment.author.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {comment.author}
              {comment.author.includes("Adelia") && (
                <span className="ml-2 rounded bg-accent/10 px-1.5 py-0.5 text-[10px] font-bold text-accent uppercase">
                  Arquiteta
                </span>
              )}
            </p>
            <p className="text-[11px] text-muted-foreground">
              {new Date(comment.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {comment.text}
        </p>

        {/* Reply button (only for non-replies) */}
        {!isReply && (
          <button
            type="button"
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="mt-3 text-xs font-medium text-accent hover:underline"
          >
            Responder
          </button>
        )}

        {/* Reply form */}
        {showReplyForm && (
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Escreva uma resposta..."
              className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button
              type="button"
              className="rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 disabled:opacity-50"
              disabled={!replyText.trim()}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Replies */}
      {comment.replies?.map((reply) => (
        <CommentItem key={reply.id} comment={reply} isReply />
      ))}
    </div>
  );
}
