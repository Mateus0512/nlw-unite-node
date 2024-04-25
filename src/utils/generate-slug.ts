export function generateSlug(text: string): string {
    // Remove acentos e caracteres especiais
    const normalizedText = text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]/gi, "");

    // Substitui espaços por hífens e converte para minúsculas
    const slug = normalizedText
        .toLowerCase()
        .replace(/\s+/g, "-");

    // Remove hífens duplicados
    return slug.replace(/-{2,}/g, "-");
}