"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard pode falhar (http, permissão): cai no mailto
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button className="mailbtn" onClick={copy} type="button">
      {email} <span className="cp">{copied ? "copiado ✓" : "copiar ⧉"}</span>
    </button>
  );
}

export default CopyEmail;
