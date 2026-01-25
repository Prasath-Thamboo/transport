import Container from "./Container";

export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-14 sm:py-16 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
