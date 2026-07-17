export type ImagemProjeto = {
  src: string;
  alt: string;
  legenda?: string;
};

export type Resultado = {
  numero: string;
  legenda: string;
};

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
  relacionado: string;
  blocoExtra?: { titulo: string; texto: string };
  // Layout do card na grade de projetos
  cardSpan: string;
  cardAspecto: string;
  cardImagem: ImagemProjeto | null;
};

// TODO: confirmar com Ney o papel formal da Educatec na agenda da Copa 2027
// e a edição/período do Fórum de Esportes antes de detalhar mais essas seções.

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
    papel:
      "Concepção estratégica da proposta e acompanhamento institucional por meio do professor Ney Campello",
    resumo:
      "Salvador é uma das cidades-sede da Copa do Mundo Feminina FIFA 2027. A Educatec participa da agenda de planejamento, preparação e mobilização na Bahia por meio do seu líder empresarial, o professor Ney Campello.",
    contexto: [
      "O Brasil sediará a Copa do Mundo Feminina FIFA 2027 — a primeira realizada na América do Sul. Salvador está entre as cidades-sede, com jogos previstos para a Arena Fonte Nova.",
      "A proposta de planejamento e preparação foi concebida e inicialmente apresentada pela Educatec. Sua implementação vem ocorrendo por meio da atuação do professor Ney Campello como bolsista de um instituto vinculado à Universidade do Paraná.",
      "Através do seu líder empresarial, o professor Ney Campello, a Educatec acompanha reuniões técnicas, agendas de preparação da cidade-sede, ações de articulação institucional e atividades de mobilização relacionadas à competição na Bahia.",
      "Essa atuação também se apoia na experiência de Ney Campello como secretário de Estado para os Assuntos da Copa do Mundo FIFA 2014, quando participou da preparação de Salvador como cidade-sede do Mundial masculino.",
    ],
    fraseDestaque:
      "A experiência de uma Copa do Mundo a serviço da próxima — agora com as mulheres mudando o jogo.",
    responsabilidades: [
      "Concepção da proposta de planejamento e preparação",
      "Acompanhamento da agenda de Salvador como cidade-sede",
      "Participação em reuniões técnicas na Arena Fonte Nova",
      "Participação em reuniões com a coordenação técnica do GECOPA",
      "Acompanhamento das ações de articulação e mobilização",
      "Compartilhamento da experiência acumulada na preparação da Copa de 2014",
    ],
    realizado: [
      "Participação no evento de contagem regressiva de 1 ano para a Copa, no Dique do Tororó",
      "Presença em reunião técnica na Arena Fonte Nova",
      "Participação em reuniões com o GECOPA — Grupo Especial de Preparação da Copa do Governo do Estado da Bahia",
      "Acompanhamento da agenda de planejamento e preparação de Salvador",
    ],
    resultados: [],
    hero: {
      src: "/images/projetos/copa-feminina-2027/capa-contagem-regressiva-2027.webp",
      alt: "Grupo reunido no evento de contagem regressiva de 1 ano para a Copa do Mundo Feminina FIFA 2027, em Salvador",
      legenda:
        "Contagem regressiva de 1 ano para a Copa, com a campanha \"As Mulheres Mudam o Jogo\" — Salvador/BA",
    },
    corpo: [
      {
        src: "/images/projetos/copa-feminina-2027/arena-fonte-nova-grupo.webp",
        alt: "Grupo de mulheres reunido no gramado da Arena Fonte Nova",
        legenda: "Agenda na Arena Fonte Nova, palco dos jogos em Salvador",
      },
      {
        src: "/images/projetos/copa-feminina-2027/politicas-esportivas-dialogo.webp",
        alt: "Representantes reunidos durante agenda de diálogo sobre políticas esportivas",
      },
      {
        src: "/images/projetos/copa-feminina-2027/forum-esportes-bahia.webp",
        alt: "Ney Campello e participantes do Fórum de Esportes da Bahia",
      },
    ],
    instituicoes:
      "Governo do Estado da Bahia · GECOPA · Arena Fonte Nova · Instituto vinculado à Universidade do Paraná",
    relacionado: "verao-costa-a-costa",
    blocoExtra: {
      titulo: "Ney Campello participa do Fórum de Esportes da Bahia",
      texto:
        "No contexto das atividades relacionadas à preparação da Bahia para a Copa do Mundo Feminina FIFA 2027, Ney Campello foi convidado a participar do Fórum de Esportes da Bahia. A participação ocorreu na condição de convidado e integra as agendas institucionais acompanhadas dentro do projeto. A Educatec não organiza a Copa do Mundo Feminina FIFA 2027 e não representa a FIFA.",
    },
    cardSpan: "md:col-span-12",
    cardAspecto: "aspect-[16/9]",
    cardImagem: {
      src: "/images/eventos/copa-feminina-contagem-regressiva-dique-tororo.png",
      alt: "Contagem regressiva para a Copa do Mundo Feminina FIFA 2027 em Salvador",
    },
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
    resumo:
      "Em uma das etapas da segunda edição do Verão Costa a Costa, o professor Ney Campello participou das atividades de coordenação, organização e produção.",
    contexto: [
      "O II Verão Costa a Costa percorreu Prado, Porto Seguro, Ilhéus, Valença, Camaçari e Salvador com uma programação integrada de esporte, cultura, lazer e valorização da economia local.",
      "Em cada cidade, uma estrutura temporária recebeu competições esportivas, atividades recreativas e programação cultural voltada a atletas, estudantes, famílias e comunidades.",
      "As arenas reuniram beach soccer, futevôlei, vôlei de praia, beach tennis, escalada, arvorismo e tirolesa — ao lado de cinema itinerante, shows, área infantil e feira de economia solidária.",
      "O trabalho foi desenvolvido em parceria com a CBDE — Confederação Brasileira do Desporto Escolar e a MCS Marketing Consulting Sporting, envolvendo o acompanhamento da programação, das equipes e das atividades previstas para a etapa.",
    ],
    fraseDestaque:
      "Seis cidades, uma temporada: esporte e cultura ocupando as praias da Bahia.",
    responsabilidades: [
      "Participação na coordenação de uma das etapas",
      "Apoio à organização e à produção da programação",
      "Articulação com equipes técnicas e parceiros",
      "Acompanhamento da operação e das atividades realizadas",
    ],
    realizado: [
      "Participação na coordenação, na organização e na produção de uma das etapas",
      "Acompanhamento da programação, das equipes e das atividades previstas",
    ],
    resultados: [
      { numero: "1 etapa", legenda: "coordenação, organização e produção" },
    ],
    hero: {
      src: "/images/eventos/verao-costa-a-costa-oficial-hero-2024.jpg",
      alt: "Partida de futevôlei na etapa de Ilhéus do II Verão Costa a Costa",
      legenda: "Arena oficial do II Verão Costa a Costa em Ilhéus",
    },
    corpo: [
      {
        src: "/images/eventos/verao-costa-a-costa-futevolei-acao-2024.jpg",
        alt: "Atleta em ação durante disputa de futevôlei no II Verão Costa a Costa",
        legenda: "Futevôlei durante a etapa de Ilhéus do circuito",
      },
      {
        src: "/images/eventos/verao-costa-a-costa-volei-jovens-2024.jpg",
        alt: "Jovens participando de atividade de vôlei no II Verão Costa a Costa",
        legenda: "Participação juvenil e atividades esportivas na arena do evento",
      },
    ],
    instituicoes:
      "Governo do Estado da Bahia · Setre · Sudesb · CBDE — Confederação Brasileira do Desporto Escolar · MCS Marketing Consulting Sporting",
    relacionado: "minas-urbano",
    cardSpan: "md:col-span-8",
    cardAspecto: "aspect-[16/9]",
    cardImagem: {
      src: "/images/eventos/verao-costa-a-costa-oficial-hero-2024.jpg",
      alt: "Partida de futevôlei na etapa de Ilhéus do II Verão Costa a Costa",
    },
  },
  {
    slug: "minas-urbano",
    titulo: "Minas Urbano",
    tituloCurto: "Minas Urbano",
    categorias: ["Esporte", "Eventos"],
    status: "Em andamento",
    local: "Minas Gerais",
    periodo: "Em andamento",
    area: "Esportes urbanos",
    papel:
      "Coordenação do projeto durante os três primeiros meses, com atuação do professor Ney Campello",
    resumo:
      "Durante os três primeiros meses do Minas Urbano, o professor Ney Campello participou da coordenação do projeto em parceria com a CBDE e a MCS Marketing Consulting Sporting.",
    contexto: [
      "O Minas Urbano é um programa de incentivo aos esportes urbanos realizado em diferentes regiões de Minas Gerais, combinando arenas itinerantes, oficinas, demonstrações e atividades educativas.",
      "As estruturas aproximam crianças, adolescentes e comunidades de modalidades como skate, basquete 3x3, BMX, escalada e breaking — com revitalização de quadras públicas como legado permanente.",
      "Durante os três primeiros meses, o professor Ney Campello participou da coordenação do projeto. Essa atuação foi desenvolvida em parceria com a CBDE — Confederação Brasileira do Desporto Escolar e a MCS Marketing Consulting Sporting.",
    ],
    fraseDestaque:
      "Esporte urbano ocupando praças e transformando espaços públicos.",
    responsabilidades: [
      "Coordenação das atividades durante os três primeiros meses",
      "Articulação com os parceiros responsáveis pela realização",
      "Acompanhamento inicial do planejamento e da execução das etapas",
    ],
    realizado: [
      "Participação na coordenação inicial do projeto",
      "Acompanhamento do planejamento e da execução durante os três primeiros meses",
    ],
    resultados: [
      { numero: "3 meses", legenda: "participação na coordenação inicial" },
    ],
    hero: {
      src: "/images/eventos/minas-urbano-abertura.png",
      alt: "Abertura de etapa do Minas Urbano",
      legenda: "Abertura de etapa do programa em Minas Gerais",
    },
    corpo: [
      {
        src: "/images/eventos/minas-urbano-breakdance.png",
        alt: "Apresentação de breaking em etapa do Minas Urbano",
        legenda: "Breaking: o esporte urbano como cultura e formação",
      },
      {
        src: "/images/eventos/minas-urbano-futebol-jovens.jpg",
        alt: "Atividade esportiva com jovens em etapa do Minas Urbano",
        legenda: "Atividade com jovens em uma das etapas municipais",
      },
    ],
    instituicoes:
      "Governo de Minas Gerais · Codemge · Sedese · CBDE — Confederação Brasileira do Desporto Escolar · MCS Marketing Consulting Sporting",
    relacionado: "verao-costa-a-costa",
    cardSpan: "md:col-span-4",
    cardAspecto: "aspect-[3/4]",
    cardImagem: {
      src: "/images/eventos/minas-urbano-breakdance.png",
      alt: "Apresentação de breaking em etapa do Minas Urbano",
    },
  },
  {
    slug: "tour-bahia",
    titulo: "Tour Bahia — Esporte Educacional",
    tituloCurto: "Tour Bahia",
    categorias: ["Educação", "Esporte"],
    status: "Realizado",
    local: "Irecê, Brumado, Caetité e Guanambi — BA",
    periodo: "2024",
    area: "Esporte educacional",
    papel: "Desenvolvimento e organização das etapas em parceria",
    resumo:
      "Ações de esporte educacional em municípios do interior da Bahia, com 6.688 estudantes e atletas atendidos.",
    contexto: [
      "O Tour Bahia — Esporte Educacional levou atividades esportivas e educativas a Irecê, Brumado, Caetité e Guanambi, aproximando estudantes da rede pública, universitários, atletas e moradores por meio do basquete 3x3 e do basquete 1x1.",
      "Durante os dias úteis, profissionais especializados realizaram clínicas esportivas no contraturno escolar, trabalhando fundamentos técnicos, disciplina, cooperação e hábitos saudáveis. Nos fins de semana, as arenas receberam clínicas abertas, torneios e campeonatos.",
      "O relatório oficial registrou o cumprimento integral da estrutura, da logística e da contratação dos profissionais previstos.",
    ],
    fraseDestaque:
      "Na semana, a quadra vira sala de aula. No fim de semana, a cidade inteira entra em quadra.",
    responsabilidades: [
      "Organização da infraestrutura e da logística",
      "Preparação das arenas",
      "Coordenação das equipes operacionais",
      "Mobilização das escolas e dos estudantes",
      "Organização de clínicas, torneios e atividades abertas à comunidade",
      "Acompanhamento das categorias juvenis, universitárias e adultas",
    ],
    realizado: [
      "Clínicas esportivas no contraturno escolar nos quatro municípios",
      "Arenas abertas à comunidade com torneios e campeonatos",
      "Atendimento a estudantes das categorias juvenis, universitárias e adultas",
    ],
    resultados: [
      { numero: "6.688", legenda: "estudantes e atletas atendidos" },
    ],
    hero: {
      src: "/images/eventos/formacao-educacional-a-confirmar.jpg",
      alt: "Registro de formação educacional com estudantes e equipe",
      legenda: "Registro de atividade educacional presente no arquivo de fotos",
    },
    corpo: [
      {
        src: "/images/eventos/projeto-institucional-a-confirmar.png",
        alt: "Equipe reunida em atividade educacional",
        legenda: "Registro institucional de atividade educacional",
      },
    ],
    instituicoes:
      "CBDE — Confederação Brasileira do Desporto Escolar · FUB — Federação Universitária Baiana de Esportes · MCS Marketing Consulting Sporting",
    relacionado: "verao-costa-a-costa",
    cardSpan: "md:col-span-6",
    cardAspecto: "aspect-[4/3]",
    cardImagem: {
      src: "/images/eventos/formacao-educacional-a-confirmar.jpg",
      alt: "Registro de formação educacional",
    },
  },
  {
    slug: "observatorio-educacional",
    titulo: "Observatório Educacional do Bairro de Tancredo Neves/Beiru",
    tituloCurto: "Observatório Educacional do Beiru/Tancredo Neves",
    categorias: ["Educação", "Gestão"],
    status: "Em andamento",
    local: "Salvador, Bahia",
    periodo: "2025 em diante",
    area: "Planejamento educacional",
    papel: "Planejamento técnico, articulação institucional e apoio à implantação",
    resumo:
      "Uma iniciativa para transformar dados educacionais em diagnósticos, propostas e ações construídas com as comunidades do território.",
    contexto: [
      "A Educatec atua na concepção e na estruturação do Observatório Educacional do Bairro de Tancredo Neves/Beiru, iniciativa voltada ao acompanhamento da realidade educacional do território.",
      "A etapa inicial incluiu uma oficina de apresentação no Colégio Estadual Zumbi dos Palmares, reunindo gestores escolares, professores, estudantes, lideranças comunitárias e organizações sociais.",
      "O trabalho busca reunir dados, diagnósticos e informações que apoiem decisões, políticas públicas e projetos sociais. A atuação inclui planejamento técnico, modelagem de governança, articulação institucional e apoio à implantação do Observatório.",
    ],
    fraseDestaque:
      "Dados não mudam a escola sozinhos. Mudam quando o território inteiro os entende e decide junto.",
    responsabilidades: [
      "Monitoramento de indicadores educacionais",
      "Apoio técnico a secretarias, escolas e instituições",
      "Formação de gestores e conselheiros",
      "Entrevistas, grupos focais e pesquisas qualitativas",
      "Recomendações técnicas e relatórios",
      "Transparência pública e articulação entre governos, universidades, escolas e sociedade civil",
    ],
    realizado: [
      "Oficina de apresentação e mobilização no Colégio Estadual Zumbi dos Palmares",
      "Escuta de gestores, professores, estudantes e lideranças comunitárias",
      "Reuniões de planejamento, educação empreendedora e articulação institucional",
    ],
    resultados: [],
    hero: {
      src: "/images/eventos/projeto-institucional-a-confirmar.png",
      alt: "Equipe reunida em atividade educacional",
      legenda: "Registro institucional de atividade educacional presente no arquivo de fotos",
    },
    corpo: [
      {
        src: "/images/eventos/formacao-educacional-a-confirmar.jpg",
        alt: "Formação educacional com participação de estudantes",
        legenda: "Registro de formação educacional",
      },
    ],
    instituicoes: "Fundação Paulo Cavalcanti · Movimento Via Cidadã",
    relacionado: "ipecaeta-cidade-educadora",
    cardSpan: "md:col-span-4",
    cardAspecto: "aspect-[3/4]",
    cardImagem: {
      src: "/images/eventos/projeto-institucional-a-confirmar.png",
      alt: "Equipe reunida em atividade educacional",
    },
  },
  {
    slug: "ipecaeta-cidade-educadora",
    titulo: "Cidade Educadora — implementação em Ipecaetá",
    tituloCurto: "Cidade Educadora",
    categorias: ["Educação", "Gestão"],
    status: "Realizado",
    local: "Ipecaetá, Bahia",
    periodo: "2024",
    area: "Política educacional",
    papel: "Planejamento, mobilização e condução do processo de filiação",
    resumo:
      "A Educatec foi responsável pela filiação de Ipecaetá à AICE e à Rede Brasileira de Cidades Educadoras, tornando o município o único entre os 417 municípios baianos integrante dessas redes.",
    contexto: [
      "A Educatec, empresa de consultoria, foi responsável pela filiação de Ipecaetá à Associação Internacional de Cidades Educadoras — AICE — e à Rede Brasileira de Cidades Educadoras. Com essa conquista, Ipecaetá tornou-se a única entre os 417 municípios baianos integrante dessas redes.",
      "A atuação reuniu organização e acompanhamento do processo de filiação, articulação institucional, apoio ao planejamento da agenda municipal e atividades de mobilização em Ipecaetá.",
    ],
    fraseDestaque:
      "Quando a cidade inteira educa, a escola deixa de estar sozinha.",
    responsabilidades: [
      "Organização e acompanhamento do processo de filiação",
      "Articulação institucional com as redes de Cidades Educadoras",
      "Apoio ao planejamento da agenda municipal",
      "Atividades de mobilização em Ipecaetá",
      "Integração entre educação, cultura, participação social e desenvolvimento territorial",
    ],
    realizado: [
      "Filiação de Ipecaetá à AICE e à Rede Brasileira de Cidades Educadoras",
    ],
    resultados: [
      { numero: "Única", legenda: "entre os 417 municípios baianos integrante dessas redes" },
    ],
    hero: {
      src: "/images/projetos/cidade-educadora/ce-cerimonia-reconhecimento.webp",
      alt: "Entrega do certificado de reconhecimento da rede de Cidades Educadoras a representantes de Ipecaetá",
      legenda: "Entrega do certificado de reconhecimento da rede de Cidades Educadoras",
    },
    corpo: [],
    instituicoes:
      "Município de Ipecaetá · Associação Internacional de Cidades Educadoras — AICE · Rede Brasileira de Cidades Educadoras",
    relacionado: "observatorio-educacional",
    blocoExtra: {
      titulo: "O que é uma Cidade Educadora",
      texto:
        "O conceito entende que a formação das pessoas não depende só das escolas: espaços públicos, serviços municipais, projetos culturais, esporte, meio ambiente e geração de renda também assumem função educativa. A rede internacional é coordenada pela AICE, com sede em Barcelona.",
    },
    cardSpan: "md:col-span-8",
    cardAspecto: "aspect-[16/9]",
    cardImagem: {
      src: "/images/projetos/cidade-educadora/ce-selfie-sala-aula.webp",
      alt: "Registro com educadores em sala de aula durante o trabalho de mobilização",
    },
  },
];

export function getProjeto(slug: string): Projeto | undefined {
  return projetos.find((p) => p.slug === slug);
}
