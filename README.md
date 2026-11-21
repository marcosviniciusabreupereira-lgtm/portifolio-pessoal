# Portfólio pessoal Next.js

Portfólio profissional com Next.js App Router, React, TypeScript, Tailwind CSS, Lucide React e Framer Motion.

## Personalização

Edite os dados placeholders nos arquivos `src/data`:

- `profile.ts`: nome, cargo, descrição, redes sociais, currículo e avatar.
- `skills.ts`: categorias e competências.
- `education.ts`: formação acadêmica e certificados.
- `projects.ts`: projetos, tecnologias e links.
- `hobbies.ts`: interesses pessoais.

Substitua os arquivos em `public`:

- `avatar-placeholder.svg`
- `project-placeholder.svg`
- `curriculo-placeholder.pdf`

## Executar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Validação

```bash
npm run lint
npm run build
npm run start
```

## Formulário de contato

O formulário envia os dados para `POST /api/contact`. A API valida os campos no servidor. Para receber mensagens reais, conecte um provedor de e-mail seguro à rota `src/app/api/contact/route.ts` usando variáveis de ambiente de servidor.
