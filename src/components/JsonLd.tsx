export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // conteúdo vem do próprio site, não de quem visita
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default JsonLd;
