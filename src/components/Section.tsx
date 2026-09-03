import Container from "./Container";

export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
