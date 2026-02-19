import fs from "node:fs";
import path from "node:path";

const sectionDir = path.join(process.cwd(), "app", "sections");

type SectionHtmlProps = {
  fileName: string;
  suppressHydrationWarning?: boolean;
};

export default function SectionHtml({
  fileName,
  suppressHydrationWarning = false,
}: SectionHtmlProps) {
  const html = fs.readFileSync(path.join(sectionDir, fileName), "utf8");
  return (
    <div
      suppressHydrationWarning={suppressHydrationWarning}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
