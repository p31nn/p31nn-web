import Image from "next/image";
import { Layout, Main, Section, Container, Article, } from "@/components/craft";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <h1>Hi, I&apos;m Peam 👋🏻</h1>
          <h3>💊Pharmacy Student | Web Development Enthusiast | AI & Financial Literacy Explorer</h3>
          <p>Welcome to my personal space! I’m Peam, a dedicated pharmacy student with a passion for web development, large language models (LLMs), and financial literacy. Dive into my journey as I blend the world of healthcare with the ever-evolving fields of technology and finance.</p>
        </Container>
      </Section>
    </Main>
  );
}
