export type ImagemProjeto = {
  src: string;
  alt: string;
  legenda?: string;
};

export type Resultado = { numero: string; legenda: string };

export type Projeto = {
  slug: string;
  titulo: string;
  tituloCurto: string;
  categorias: string[];
  status: "Em andamento" | "Realizado";
  local: string;
  periodo: string;
  area: string;
  papel: string;
  resumo: string;
  contexto: string[];
  fraseDestaque: string;
  responsabilidades: string[];
  realizado: string[];
  resultados: Resultado[];
  hero: ImagemProjeto | null;
  corpo: ImagemProjeto[];
  instituicoes: string;
  blocoExtra?: { titulo: string; texto: string };
  noticia?: { titulo: string; paragrafos: string[] };
  aviso?: string;
  cardSpan: string;
  cardAspecto: string;
  cardImagem: ImagemProjeto | null;
};

const img = (src: string, alt: string, legenda?: string): ImagemProjeto => ({ src, alt, legenda });

export const projetos: Projeto[] = [
  {
    slug: "copa-feminina-2027",
    titulo: "Copa do Mundo Feminina FIFA 2027",
    tituloCurto: "Copa do Mundo Feminina FIFA 2027",
    categorias: ["Esporte", "Gestão"],
    status: "Em andamento",
    local: "Salvador, Bahia",
    periodo: "Rumo a 2027",
    area: "Esporte e articulação institucional",
    papel: "Concepção estratégica da proposta e acompanhamento institucional por meio do professor Ney Campello",
    resumo: "Salvador é uma das cidades-sede da Copa do Mundo Feminina FIFA 2027. A Educatec participa da agenda de planejamento, preparação e mobilização na Bahia através do seu líder empresarial, o professor Ney Campello.",
    contexto: [
      "A proposta de planejamento e preparação foi concebida e inicialmente apresentada pela Educatec. Sua implementação vem ocorrendo por meio da atuação do professor Ney Campello como bolsista de um instituto vinculado à Universidade do Paraná.",
      "Dessa forma, a Educatec responde pela origem e pela concepção estratégica da proposta, enquanto as atividades são desenvolvidas por Ney Campello a partir desse vínculo institucional.",
      "Através do seu líder empresarial, o professor Ney Campello, a Educatec acompanha reuniões técnicas, agendas de preparação da cidade-sede, ações de articulação institucional e atividades de mobilização relacionadas à competição na Bahia.",
      "A atuação se apoia também na experiência de Ney Campello como secretário de Estado para os Assuntos da Copa do Mundo FIFA 2014, quando participou da preparação de Salvador como cidade-sede do Mundial masculino.",
    ],
    fraseDestaque: "A experiência de uma Copa do Mundo a serviço da próxima — agora com as mulheres mudando o jogo.",
    responsabilidades: [
      "Concepção da proposta de planejamento e preparação",
      "Acompanhamento da agenda de Salvador como cidade-sede",
      "Participação em reuniões técnicas na Arena Fonte Nova",
      "Participação em reuniões com a coordenação técnica do GECOPA",
      "Acompanhamento das ações de articulação e mobilização",
      "Compartilhamento da experiência acumulada na preparação da Copa de 2014",
    ],
    realizado: [
      "Participação no evento de contagem regressiva de um ano para a Copa, realizado no Dique do Tororó",
      "Presença em reuniões técnicas na Arena Fonte Nova",
      "Participação em reuniões com o GECOPA — Grupo Especial de Preparação da Copa do Governo do Estado da Bahia",
      "Acompanhamento da agenda de planejamento e preparação de Salvador",
    ],
    resultados: [],
    hero: img("/images/eventos/copa-feminina-contagem-regressiva-dique-tororo.png", "Contagem regressiva para a Copa do Mundo Feminina FIFA 2027 em Salvador", "Evento de contagem regressiva no Dique do Tororó, em Salvador"),
    corpo: [
      img("/images/eventos/copa-feminina-arena-fonte-nova.png", "Reunião técnica na Arena Fonte Nova", "Agenda técnica de preparação da cidade-sede"),
      img("/images/eventos/forum-esportes-bahia-autoridades.jpg", "Participantes do Fórum de Esportes da Bahia", "Ney Campello participa do Fórum de Esportes da Bahia"),
      img("/images/eventos/forum-esportes-bahia-registro-vertical.jpg", "Registro do Fórum de Esportes da Bahia", "Debates sobre políticas públicas e desenvolvimento do esporte baiano"),
    ],
    instituicoes: "Governo do Estado da Bahia · Arena Fonte Nova · GECOPA",
    noticia: {
      titulo: "Ney Campello participa do Fórum de Esportes da Bahia",
      paragrafos: [
        "No contexto das atividades e dos debates relacionados à preparação da Bahia para a Copa do Mundo Feminina FIFA 2027, o professor Ney Campello foi convidado a participar do Fórum de Esportes da Bahia.",
        "O encontro reuniu gestores, autoridades, atletas e representantes de entidades esportivas para discutir políticas públicas, planejamento e desenvolvimento do esporte no estado. A participação de Ney Campello ocorreu na condição de convidado e integra o conjunto de agendas institucionais acompanhadas dentro do projeto da Copa.",
        "A presença no Fórum também permitiu compartilhar experiências acumuladas durante a preparação de Salvador para a Copa do Mundo FIFA 2014 e contribuir para os debates sobre os desafios e as oportunidades da competição feminina de 2027.",
      ],
    },
    aviso: "A Educatec não organiza a Copa do Mundo Feminina FIFA 2027 e não representa a FIFA. Sua participação está relacionada à origem e à concepção estratégica da proposta, com atividades desenvolvidas pelo professor Ney Campello por meio de seu vínculo como bolsista de um instituto ligado à Universidade do Paraná.",
    cardSpan: "md:col-span-12",
    cardAspecto: "aspect-[16/9]",
    cardImagem: img("/images/projetos/copa-feminina-2027/ilustracao-copa-feminina-2027.jpg", "Ilustração da Copa do Mundo Feminina FIFA 2027"),
  },
  {
    slug: "verao-costa-a-costa",
    titulo: "II Verão Costa a Costa",
    tituloCurto: "II Verão Costa a Costa",
    categorias: ["Eventos", "Esporte"],
    status: "Realizado",
    local: "Litoral da Bahia",
    periodo: "2024",
    area: "Circuito esportivo e cultural",
    papel: "Participação na coordenação, organização e produção de uma das etapas",
    resumo: "Em uma das etapas da segunda edição do Verão Costa a Costa, o professor Ney Campello participou das atividades de coordenação, organização e produção.",
    contexto: [
      "Em uma das etapas da segunda edição do Verão Costa a Costa, o professor Ney Campello participou das atividades de coordenação, organização e produção.",
      "O trabalho foi desenvolvido em parceria com a CBDE — Confederação Brasileira do Desporto Escolar e a MCS Marketing Consulting Sporting, envolvendo o acompanhamento da programação, das equipes e das atividades previstas para a etapa.",
    ],
    fraseDestaque: "Esporte, cultura e lazer reunidos em uma programação para as comunidades do litoral baiano.",
    responsabilidades: ["Participação na coordenação de uma das etapas", "Apoio à organização e à produção da programação", "Articulação com equipes técnicas e parceiros", "Acompanhamento da operação e das atividades realizadas"],
    realizado: ["Acompanhamento da programação e das equipes", "Apoio à operação das atividades previstas para a etapa"],
    resultados: [],
    hero: img("/images/eventos/verao-costa-a-costa-oficial-hero-2024.jpg", "Atividade esportiva do II Verão Costa a Costa"),
    corpo: [
      img("/images/eventos/verao-costa-a-costa-futevolei-acao-2024.jpg", "Atividade de futevôlei no II Verão Costa a Costa"),
      img("/images/eventos/verao-costa-a-costa-volei-jovens-2024.jpg", "Jovens em atividade de vôlei no evento"),
      img("/images/eventos/verao-costa-a-costa-volei-praia.jpg", "Vôlei de praia no II Verão Costa a Costa"),
    ],
    instituicoes: "Governo do Estado da Bahia · Setre · Sudesb · CBDE — Confederação Brasileira do Desporto Escolar · MCS Marketing Consulting Sporting",
    cardSpan: "md:col-span-8",
    cardAspecto: "aspect-[16/9]",
    cardImagem: img("/images/eventos/verao-costa-a-costa-oficial-hero-2024.jpg", "II Verão Costa a Costa"),
  },
  {
    slug: "minas-urbano",
    titulo: "Minas Urbano",
    tituloCurto: "Minas Urbano",
    categorias: ["Esporte", "Eventos"],
    status: "Realizado",
    local: "Minas Gerais",
    periodo: "Primeiros três meses do projeto",
    area: "Esportes urbanos",
    papel: "Coordenação do projeto durante os três primeiros meses, com atuação do professor Ney Campello",
    resumo: "Durante os três primeiros meses do Minas Urbano, o professor Ney Campello participou da coordenação do projeto, em parceria com a CBDE e a MCS Marketing Consulting Sporting.",
    contexto: [
      "Durante os três primeiros meses do Minas Urbano, o professor Ney Campello participou da coordenação do projeto. Essa atuação foi desenvolvida em parceria com a CBDE — Confederação Brasileira do Desporto Escolar e a MCS Marketing Consulting Sporting.",
      "Essa redação delimita o período e o papel efetivamente desempenhado, sem atribuir à Educatec a coordenação integral de todas as etapas do programa.",
    ],
    fraseDestaque: "Esporte urbano, formação e ocupação qualificada dos espaços públicos.",
    responsabilidades: ["Coordenação das atividades durante os três primeiros meses", "Articulação com os parceiros responsáveis pela realização", "Acompanhamento inicial do planejamento e da execução das etapas"],
    realizado: ["Acompanhamento inicial das etapas e atividades", "Articulação operacional com os parceiros do projeto"],
    resultados: [],
    hero: img("/images/eventos/minas-urbano-abertura.png", "Abertura de etapa do Minas Urbano"),
    corpo: [
      img("/images/eventos/minas-urbano-breakdance.png", "Apresentação de breaking no Minas Urbano"),
      img("/images/eventos/minas-urbano-futebol-jovens.jpg", "Atividade esportiva do Minas Urbano", "Atividade esportiva realizada durante uma das ações do Minas Urbano, em Minas Gerais."),
    ],
    instituicoes: "Governo de Minas Gerais · Codemge · Sedese · CBDE — Confederação Brasileira do Desporto Escolar · MCS Marketing Consulting Sporting",
    cardSpan: "md:col-span-4",
    cardAspecto: "aspect-[3/4]",
    cardImagem: img("/images/eventos/minas-urbano-breakdance.png", "Minas Urbano"),
  },
  {
    slug: "tour-bahia",
    titulo: "Tour Bahia — Esporte Educacional",
    tituloCurto: "Tour Bahia — Esporte Educacional",
    categorias: ["Educação", "Esporte"],
    status: "Realizado",
    local: "Irecê, Brumado, Caetité e Guanambi, Bahia",
    periodo: "2024",
    area: "Esporte educacional",
    papel: "Desenvolvimento e organização das etapas em parceria",
    resumo: "O Tour Bahia — Esporte Educacional foi desenvolvido em municípios do interior da Bahia, reunindo ações de esporte educacional voltadas a estudantes, jovens e comunidades.",
    contexto: [
      "O Tour Bahia — Esporte Educacional foi desenvolvido em municípios do interior da Bahia, reunindo ações de esporte educacional voltadas a estudantes, jovens e comunidades.",
      "A programação incluiu clínicas de basquete 3x3 e basquete 1x1, atividades no contraturno escolar, mobilização de escolas, arenas abertas à comunidade e realização de torneios.",
      "A atuação conjunta reuniu conhecimento técnico, organização operacional e experiência em esporte educacional para a realização das clínicas, arenas e atividades destinadas aos estudantes e às comunidades participantes.",
    ],
    fraseDestaque: "Na semana, a quadra vira sala de aula. No fim de semana, a cidade inteira entra em quadra.",
    responsabilidades: ["Organização da infraestrutura e da logística das atividades", "Preparação das arenas esportivas", "Coordenação das equipes operacionais", "Mobilização das escolas e dos estudantes", "Organização de clínicas, torneios e atividades abertas à comunidade", "Acompanhamento das categorias juvenis, universitárias e adultas"],
    realizado: ["Clínicas esportivas no contraturno escolar", "Arenas abertas à comunidade com torneios e campeonatos", "Atendimento a estudantes e atletas em quatro municípios baianos"],
    resultados: [{ numero: "6.688", legenda: "estudantes e atletas atendidos" }],
    hero: img("/images/projetos/tour-bahia/01-clinica-quadra-tour-bahia.webp", "Clínica esportiva do Tour Bahia com estudantes na quadra"),
    corpo: [
      img("/images/projetos/tour-bahia/02-programacao-clinicas-irece.webp", "Programação das clínicas esportivas do Tour Bahia em Irecê"),
      img("/images/projetos/tour-bahia/03-encontro-estudantes.webp", "Estudantes reunidos durante o Tour Bahia"),
      img("/images/projetos/tour-bahia/04-basquete-jovens.webp", "Jovens em atividade de basquete"),
      img("/images/projetos/tour-bahia/05-integracao-estudantes.webp", "Integração dos estudantes no Tour Bahia"),
      img("/images/projetos/tour-bahia/06-grupo-quadra.webp", "Grupo de estudantes reunido na quadra"),
      img("/images/projetos/tour-bahia/07-exercicio-bolas.webp", "Estudantes realizando exercício com bolas de basquete"),
      img("/images/projetos/tour-bahia/08-arremesso-infantil.webp", "Criança praticando arremesso durante clínica esportiva"),
      img("/images/projetos/tour-bahia/09-orientacao-professor.webp", "Professor orientando estudantes durante a atividade"),
      img("/images/projetos/tour-bahia/10-clinica-arremessos.webp", "Clínica de arremessos do Tour Bahia"),
      img("/images/projetos/tour-bahia/11-foto-oficial-grupo.webp", "Foto oficial dos participantes do Tour Bahia"),
    ],
    instituicoes: "CBDE — Confederação Brasileira do Desporto Escolar · FUB — Federação Universitária Baiana de Esportes · MCS Marketing Consulting Sporting",
    cardSpan: "md:col-span-6",
    cardAspecto: "aspect-[4/3]",
    cardImagem: img("/images/projetos/tour-bahia/11-foto-oficial-grupo.webp", "Participantes do Tour Bahia"),
  },
  {
    slug: "observatorio-educacional",
    titulo: "Observatório Educacional do Bairro de Tancredo Neves/Beiru",
    tituloCurto: "Observatório Educacional do Bairro de Tancredo Neves/Beiru",
    categorias: ["Educação", "Gestão"],
    status: "Em andamento",
    local: "Beiru/Tancredo Neves, Salvador, Bahia",
    periodo: "2025 em diante",
    area: "Planejamento educacional",
    papel: "Planejamento técnico, articulação institucional e apoio à implantação",
    resumo: "A Educatec atua na concepção e na estruturação do Observatório Educacional do Bairro de Tancredo Neves/Beiru, iniciativa voltada ao acompanhamento da realidade educacional do território.",
    contexto: ["A Educatec atua na concepção e na estruturação do Observatório Educacional do Bairro de Tancredo Neves/Beiru, iniciativa voltada ao acompanhamento da realidade educacional do território.", "O trabalho busca reunir dados, diagnósticos e informações que apoiem decisões, políticas públicas e projetos sociais. A atuação inclui planejamento técnico, modelagem de governança, articulação institucional e apoio à implantação do Observatório."],
    fraseDestaque: "Dados, escuta e articulação para apoiar decisões educacionais no território.",
    responsabilidades: ["Monitoramento de indicadores educacionais", "Apoio técnico a secretarias, escolas e instituições", "Formação de gestores e conselheiros", "Entrevistas, grupos focais e pesquisas qualitativas", "Recomendações técnicas e relatórios", "Transparência pública e articulação entre governos, universidades, escolas e sociedade civil"],
    realizado: ["Oficina de apresentação no Colégio Estadual Zumbi dos Palmares", "Reunião relacionada à educação empreendedora", "Articulação com participantes e instituições"],
    resultados: [],
    hero: img("/images/projetos/observatorio/02-grupo-participantes.webp", "Participantes da oficina do Observatório Educacional", "Participantes da oficina de apresentação do Observatório"),
    corpo: [
      img("/images/projetos/observatorio/01-apresentacao-oficina.webp", "Arte de apresentação do Observatório Educacional"),
      img("/images/projetos/observatorio/04-educacao-empreendedora.webp", "Reunião sobre educação empreendedora"),
      img("/images/projetos/observatorio/06-articulacao-participantes.webp", "Articulação com participantes e instituições"),
    ],
    instituicoes: "Instituições educacionais, organizações sociais e atores do território Beiru/Tancredo Neves",
    cardSpan: "md:col-span-6",
    cardAspecto: "aspect-[4/3]",
    cardImagem: img("/images/projetos/observatorio/02-grupo-participantes.webp", "Observatório Educacional"),
  },
  {
    slug: "cidade-educadora",
    titulo: "Cidade Educadora — implementação em Ipecaetá",
    tituloCurto: "Cidade Educadora — implementação em Ipecaetá",
    categorias: ["Educação", "Gestão"],
    status: "Realizado",
    local: "Ipecaetá, Bahia",
    periodo: "2024",
    area: "Política educacional",
    papel: "Planejamento, mobilização e condução do processo de filiação",
    resumo: "A Educatec foi responsável pela filiação de Ipecaetá à Associação Internacional de Cidades Educadoras — AICE — e à Rede Brasileira de Cidades Educadoras.",
    contexto: ["A Educatec, empresa de consultoria, foi responsável pela filiação de Ipecaetá à Associação Internacional de Cidades Educadoras — AICE — e à Rede Brasileira de Cidades Educadoras. Com essa conquista, Ipecaetá tornou-se a única entre os 417 municípios baianos integrante dessas redes.", "Ipecaetá é apresentada como uma das cidades onde o projeto Cidade Educadora foi desenvolvido."],
    fraseDestaque: "Quando a cidade inteira educa, a escola deixa de estar sozinha.",
    responsabilidades: ["Organização e acompanhamento do processo de filiação", "Articulação institucional com as redes de Cidades Educadoras", "Apoio ao planejamento da agenda municipal", "Atividades de mobilização em Ipecaetá", "Integração entre educação, cultura, participação social e desenvolvimento territorial"],
    realizado: ["Filiação à Associação Internacional de Cidades Educadoras — AICE", "Integração à Rede Brasileira de Cidades Educadoras", "Atividades de mobilização e articulação no município"],
    resultados: [{ numero: "1", legenda: "município baiano integrante dessas redes" }],
    hero: img("/images/projetos/cidade-educadora/08-celebracao.webp", "Celebração de Ipecaetá Cidade Educadora"),
    corpo: [
      img("/images/projetos/cidade-educadora/05-identidade.webp", "Identidade Ipecaetá Cidade Educadora"),
      img("/images/projetos/cidade-educadora/06-rede-brasileira.webp", "Encontro da Rede Brasileira das Cidades Educadoras"),
      img("/images/projetos/cidade-educadora/09-reconhecimento.webp", "Cerimônia de reconhecimento de Ipecaetá"),
      img("/images/projetos/cidade-educadora/07-rota-literaria.webp", "Rota Literária — Uma Viagem pela Poesia"),
      img("/images/projetos/cidade-educadora/03-sala-aula.webp", "Mobilização em sala de aula"),
      img("/images/projetos/cidade-educadora/02-grupo-trabalho.webp", "Grupo de trabalho de Cidade Educadora"),
      img("/images/projetos/cidade-educadora/10-mural.webp", "Registro diante do mural Áureo Filho"),
    ],
    instituicoes: "Município de Ipecaetá · Associação Internacional de Cidades Educadoras — AICE · Rede Brasileira de Cidades Educadoras",
    blocoExtra: { titulo: "O que é uma Cidade Educadora", texto: "O conceito reconhece que a formação das pessoas não depende somente das escolas: os espaços públicos, os serviços municipais, a cultura, o esporte, o meio ambiente e as políticas de desenvolvimento também exercem função educativa." },
    cardSpan: "md:col-span-8",
    cardAspecto: "aspect-[16/9]",
    cardImagem: img("/images/projetos/cidade-educadora/08-celebracao.webp", "Ipecaetá Cidade Educadora"),
  },
  {
    slug: "universidade-aberta-associacao-comercial",
    titulo: "Universidade Aberta da Associação Comercial da Bahia",
    tituloCurto: "Universidade Aberta da Associação Comercial",
    categorias: ["Educação", "Gestão"],
    status: "Em andamento",
    local: "Salvador, Bahia",
    periodo: "Desde dezembro de 2024",
    area: "Educação, gestão e desenvolvimento institucional",
    papel: "Concepção, estruturação e participação na execução",
    resumo: "Iniciativa voltada à formação, ao desenvolvimento institucional, à articulação empresarial e à realização de programas e eventos de conhecimento.",
    contexto: ["A Universidade Aberta da Associação Comercial da Bahia é uma iniciativa voltada à formação, ao desenvolvimento institucional, à articulação empresarial e à realização de programas e eventos de conhecimento.", "A Educatec participa da concepção, da estruturação e da execução da iniciativa. Ney Campello atua como diretor-geral desde a fundação da Universidade Aberta, conduzindo atividades de planejamento educacional, estruturação de programas, formação, gestão e articulação institucional."],
    fraseDestaque: "Conhecimento, articulação empresarial e desenvolvimento institucional em uma iniciativa aberta à sociedade.",
    responsabilidades: ["Concepção e estruturação da Universidade Aberta", "Planejamento educacional e institucional", "Desenvolvimento de programas, encontros e atividades formativas", "Articulação com empresários, profissionais e instituições", "Participação na organização de congressos, painéis e eventos", "Acompanhamento da execução das iniciativas"],
    realizado: ["Programas, encontros e atividades formativas", "Congressos, painéis e eventos de conhecimento", "Agendas de articulação empresarial e institucional"],
    resultados: [],
    hero: img("/images/projetos/universidade-aberta/05-grupo-sala-classica.webp", "Grupo no salão histórico da Associação Comercial da Bahia"),
    corpo: [
      img("/images/projetos/universidade-aberta/01-painel.webp", "Ney Campello participando de painel"),
      img("/images/projetos/universidade-aberta/03-congresso.webp", "3º Congresso Baiano de Direito Imobiliário"),
      img("/images/projetos/universidade-aberta/04-retrato-formal.webp", "Encontro institucional na Associação Comercial"),
      img("/images/projetos/universidade-aberta/06-sede.webp", "Edifício da Associação Comercial da Bahia"),
      img("/images/projetos/universidade-aberta/07-associativismo.webp", "Comemoração do Dia do Associativismo"),
      img("/images/projetos/universidade-aberta/08-agenda-institucional.webp", "Agenda institucional"),
      img("/images/projetos/universidade-aberta/09-grupo-evento.webp", "Grupo em evento profissional"),
    ],
    instituicoes: "Associação Comercial da Bahia · Educatec Planejamento, Gestão e Consultoria Ltda.",
    cardSpan: "md:col-span-4",
    cardAspecto: "aspect-[3/4]",
    cardImagem: img("/images/projetos/universidade-aberta/05-grupo-sala-classica.webp", "Universidade Aberta da Associação Comercial"),
  },
];

export function getProjeto(slug: string): Projeto | undefined {
  return projetos.find((projeto) => projeto.slug === slug);
}
