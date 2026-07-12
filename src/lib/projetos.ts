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
    titulo: "Preparação para a Copa do Mundo Feminina FIFA 2027",
    tituloCurto: "Copa do Mundo Feminina 2027",
    categorias: ["Esporte", "Gestão"],
    status: "Em andamento",
    local: "Salvador, Bahia",
    periodo: "Rumo a 2027",
    area: "Esporte e articulação institucional",
    papel: "Acompanhamento e articulação institucional",
    resumo:
      "Salvador é uma das cidades-sede da Copa do Mundo Feminina FIFA 2027, e a Educatec participa da agenda de preparação e mobilização na Bahia.",
    contexto: [
      "O Brasil sediará a Copa do Mundo Feminina FIFA 2027 — a primeira realizada na América do Sul. Salvador está entre as cidades-sede, com jogos previstos para a Arena Fonte Nova.",
      "A Educatec participa da agenda de preparação e mobilização na Bahia. Essa presença inclui reuniões técnicas na Arena Fonte Nova e o evento de contagem regressiva de 1 ano para a Copa, realizado com a campanha \"As Mulheres Mudam o Jogo\", do Governo do Estado.",
      "A atuação se apoia em uma experiência rara: o fundador da Educatec, Ney Campello, foi Secretário de Estado para os Assuntos da Copa do Mundo FIFA 2014, respondendo pela preparação de Salvador como cidade-sede do Mundial masculino.",
    ],
    fraseDestaque:
      "A experiência de uma Copa do Mundo a serviço da próxima — agora com as mulheres mudando o jogo.",
    responsabilidades: [
      "Participação na agenda institucional de preparação",
      "Articulação entre instituições e agentes locais",
      "Presença em eventos de mobilização",
    ],
    realizado: [
      "Participação no evento de contagem regressiva de 1 ano para a Copa, no Dique do Tororó",
      "Presença em reunião técnica na Arena Fonte Nova",
      "Acompanhamento das frentes de mobilização na Bahia",
    ],
    resultados: [],
    hero: {
      src: "/images/eventos/copa-feminina-contagem-regressiva-dique-tororo.png",
      alt: "Evento de contagem regressiva de 1 ano para a Copa do Mundo Feminina FIFA 2027, em Salvador",
      legenda:
        "Contagem regressiva de 1 ano para a Copa, com a campanha \"As Mulheres Mudam o Jogo\" — Salvador/BA",
    },
    corpo: [
      {
        src: "/images/eventos/copa-feminina-arena-fonte-nova.png",
        alt: "Grupo em reunião técnica na Arena Fonte Nova, em Salvador",
        legenda: "Reunião técnica na Arena Fonte Nova, palco dos jogos em Salvador",
      },
    ],
    instituicoes: "Governo do Estado da Bahia · Arena Fonte Nova",
    relacionado: "forum-esportes-bahia",
    blocoExtra: {
      titulo: "Frentes acompanhadas",
      texto:
        "Mobilização pública, articulação institucional e agenda de preparação da cidade-sede. A Educatec não organiza a Copa nem representa a FIFA — atua na articulação local, com a experiência acumulada na Copa de 2014.",
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
    papel: "Organização e produção das etapas",
    resumo:
      "Circuito de esporte, cultura e lazer que percorreu seis cidades do litoral baiano e recebeu quase 25 mil pessoas.",
    contexto: [
      "O II Verão Costa a Costa percorreu Prado, Porto Seguro, Ilhéus, Valença, Camaçari e Salvador com uma programação integrada de esporte, cultura, lazer e valorização da economia local.",
      "Em cada cidade, uma estrutura temporária recebeu competições esportivas, atividades recreativas e programação cultural voltada a atletas, estudantes, famílias e comunidades.",
      "As arenas reuniram beach soccer, futevôlei, vôlei de praia, beach tennis, escalada, arvorismo e tirolesa — ao lado de cinema itinerante, shows, área infantil e feira de economia solidária.",
    ],
    fraseDestaque:
      "Seis cidades, uma temporada: esporte e cultura ocupando as praias da Bahia.",
    responsabilidades: [
      "Articulação das etapas municipais",
      "Organização da programação",
      "Integração das equipes técnicas",
      "Apoio à montagem das arenas",
      "Mobilização dos participantes",
      "Acompanhamento das atividades",
    ],
    realizado: [
      "Seis etapas municipais realizadas entre Prado e Salvador",
      "Arenas com sete modalidades esportivas e programação cultural completa",
      "Relatório oficial de monitoramento com metas de público cumpridas",
    ],
    resultados: [
      { numero: "25 mil", legenda: "participantes na temporada" },
      { numero: "6", legenda: "cidades do litoral baiano" },
      { numero: "3 mil", legenda: "atletas envolvidos" },
    ],
    hero: {
      src: "/images/eventos/verao-costa-a-costa-volei-praia.jpg",
      alt: "Atividade de vôlei de praia no II Verão Costa a Costa",
      legenda: "Vôlei de praia em uma das arenas do circuito",
    },
    corpo: [
      {
        src: "/images/eventos/verao-costa-a-costa-hoje.jpg",
        alt: "Vista panorâmica de uma arena do II Verão Costa a Costa",
        legenda: "Arena, público e atividades de praia em uma das etapas do circuito",
      },
      {
        src: "/images/eventos/verao-costa-a-costa-amanha.jpg",
        alt: "Equipe e participantes reunidos no II Verão Costa a Costa",
        legenda: "Equipe, participantes e organização reunidos durante o evento",
      },
    ],
    instituicoes:
      "Governo da Bahia · Setre · Sudesb · Unisport · MCS Marketing Esportivo",
    relacionado: "minas-urbano",
    cardSpan: "md:col-span-8",
    cardAspecto: "aspect-[16/9]",
    cardImagem: {
      src: "/images/eventos/verao-costa-a-costa-volei-praia.jpg",
      alt: "Atividade de vôlei de praia no II Verão Costa a Costa",
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
    papel: "Produção de eventos e ativações municipais",
    resumo:
      "O maior programa de esportes urbanos do país, com arenas itinerantes previstas para 48 municípios de Minas Gerais.",
    contexto: [
      "O Minas Urbano é um programa de incentivo aos esportes urbanos realizado em diferentes regiões de Minas Gerais, combinando arenas itinerantes, oficinas, demonstrações e atividades educativas.",
      "As estruturas aproximam crianças, adolescentes e comunidades de modalidades como skate, basquete 3x3, BMX, escalada e breaking — com revitalização de quadras públicas como legado permanente.",
      "Nas etapas municipais, a Educatec atua no planejamento operacional, na articulação com as administrações locais, na preparação dos espaços, na mobilização do público e no acompanhamento da programação.",
    ],
    fraseDestaque:
      "Esporte urbano ocupando praças e transformando espaços públicos em 48 municípios.",
    responsabilidades: [
      "Planejamento operacional das etapas",
      "Articulação com administrações locais",
      "Preparação dos espaços e modalidades",
      "Apoio aos profissionais esportivos",
      "Mobilização do público",
    ],
    realizado: [
      "Ativações municipais com arenas itinerantes em diferentes regiões de Minas",
      "Oficinas educativas e demonstrações de modalidades urbanas",
      "Ações de revitalização de quadras e espaços públicos",
    ],
    resultados: [
      { numero: "48", legenda: "municípios previstos" },
      { numero: "R$ 20 mi", legenda: "de investimento público anunciado" },
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
      "Governo de Minas · Codemge · Sedese · Confederação Brasileira do Desporto Escolar",
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
    papel: "Organização das etapas",
    resumo:
      "Basquete 3x3 e clínicas esportivas conectando escola e comunidade em quatro municípios baianos — 6.688 estudantes atendidos.",
    contexto: [
      "O Tour Bahia — Esporte Educacional levou atividades esportivas e educativas a Irecê, Brumado, Caetité e Guanambi, aproximando estudantes da rede pública, universitários, atletas e moradores por meio do basquete 3x3 e do basquete 1x1.",
      "Durante os dias úteis, profissionais especializados realizaram clínicas esportivas no contraturno escolar, trabalhando fundamentos técnicos, disciplina, cooperação e hábitos saudáveis. Nos fins de semana, as arenas receberam clínicas abertas, torneios e campeonatos.",
      "O relatório oficial registrou o cumprimento integral da estrutura, da logística e da contratação dos profissionais previstos.",
    ],
    fraseDestaque:
      "Na semana, a quadra vira sala de aula. No fim de semana, a cidade inteira entra em quadra.",
    responsabilidades: [
      "Organização da infraestrutura e da logística",
      "Contratação e coordenação das equipes operacionais",
      "Preparação das arenas",
      "Mobilização das escolas",
      "Organização dos torneios",
    ],
    realizado: [
      "Clínicas esportivas no contraturno escolar nos quatro municípios",
      "Arenas abertas à comunidade com torneios e campeonatos",
      "Atendimento a estudantes das categorias juvenis, universitárias e adultas",
    ],
    resultados: [
      { numero: "6.688", legenda: "estudantes e atletas atendidos" },
      { numero: "4", legenda: "municípios baianos" },
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
    instituicoes: "Federação Universitária Bahiana de Esportes · Sudesb",
    relacionado: "verao-costa-a-costa",
    cardSpan: "md:col-span-6",
    cardAspecto: "aspect-[4/3]",
    cardImagem: {
      src: "/images/eventos/formacao-educacional-a-confirmar.jpg",
      alt: "Registro de formação educacional",
    },
  },
  {
    slug: "forum-esportes-bahia",
    titulo: "Fórum de Esportes da Bahia",
    tituloCurto: "Fórum de Esportes da Bahia",
    categorias: ["Esporte", "Gestão"],
    status: "Realizado",
    local: "Bahia",
    periodo: "—",
    area: "Articulação e políticas públicas",
    papel: "Participação institucional",
    resumo:
      "Espaço de debate que reúne gestores, atletas, entidades e autoridades em torno das políticas públicas do esporte baiano.",
    contexto: [
      "O Fórum de Esportes da Bahia reúne gestores, atletas, entidades esportivas e autoridades para debater políticas públicas e o desenvolvimento do esporte no estado.",
      "A Educatec e seu fundador, Ney Campello, participam desse espaço de articulação — aproximando governos, federações e organizações em torno de uma agenda comum para o esporte baiano.",
    ],
    fraseDestaque:
      "O esporte avança quando quem decide, quem ensina e quem joga sentam à mesma mesa.",
    responsabilidades: [
      "Participação institucional nos debates",
      "Articulação entre gestores, entidades e atletas",
    ],
    realizado: [
      "Presença nos encontros do Fórum ao lado de autoridades e entidades esportivas",
    ],
    resultados: [],
    hero: {
      src: "/images/eventos/forum-esportes-bahia-autoridades.jpg",
      alt: "Participantes e autoridades reunidos no Fórum de Esportes da Bahia",
      legenda: "Participantes e autoridades reunidos no Fórum",
    },
    corpo: [
      {
        src: "/images/eventos/forum-esportes-bahia-registro-vertical.jpg",
        alt: "Registro do Fórum de Esportes da Bahia",
        legenda: "O Fórum debate o papel do esporte no desenvolvimento do estado",
      },
    ],
    instituicoes: "Entidades esportivas e gestores públicos da Bahia",
    relacionado: "copa-feminina-2027",
    cardSpan: "md:col-span-6",
    cardAspecto: "aspect-[4/3]",
    cardImagem: {
      src: "/images/eventos/forum-esportes-bahia-autoridades.jpg",
      alt: "Participantes e autoridades no Fórum de Esportes da Bahia",
    },
  },
  {
    slug: "observatorio-educacional",
    titulo: "Observatório Educacional do Beiru/Tancredo Neves",
    tituloCurto: "Observatório Educacional",
    categorias: ["Educação", "Gestão"],
    status: "Em andamento",
    local: "Salvador, Bahia",
    periodo: "2025—",
    area: "Planejamento educacional",
    papel: "Planejamento técnico e organização da mobilização",
    resumo:
      "Uma iniciativa para transformar dados educacionais em diagnósticos, propostas e ações construídas com as comunidades do território.",
    contexto: [
      "O Observatório Educacional do Beiru/Tancredo Neves foi concebido para reunir e interpretar indicadores educacionais, acompanhar metas, produzir diagnósticos territoriais e aproximar escolas, pesquisadores, poder público e comunidade.",
      "A etapa inicial incluiu uma oficina de apresentação no Colégio Estadual Zumbi dos Palmares, reunindo gestores escolares, professores, estudantes, lideranças comunitárias e organizações sociais.",
      "A Educatec participou do planejamento técnico e da organização das atividades — estruturação do encontro, articulação dos participantes, escuta dos atores locais e construção de uma agenda de colaboração.",
    ],
    fraseDestaque:
      "Dados não mudam a escola sozinhos. Mudam quando o território inteiro os entende e decide junto.",
    responsabilidades: [
      "Planejamento técnico da iniciativa",
      "Organização da oficina de apresentação",
      "Articulação dos participantes",
      "Construção da agenda de colaboração",
    ],
    realizado: [
      "Oficina de apresentação e mobilização no Colégio Estadual Zumbi dos Palmares",
      "Escuta de gestores, professores, estudantes e lideranças comunitárias",
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
    titulo: "Ipecaetá — Cidade Educadora",
    tituloCurto: "Ipecaetá Cidade Educadora",
    categorias: ["Educação", "Gestão"],
    status: "Realizado",
    local: "Ipecaetá, Bahia",
    periodo: "2024",
    area: "Política educacional territorial",
    papel: "Apoio à mobilização",
    resumo:
      "Em 2024, Ipecaetá tornou-se a primeira cidade da Bahia reconhecida pela Associação Internacional das Cidades Educadoras.",
    contexto: [
      "Em 2024, Ipecaetá tornou-se a primeira cidade da Bahia reconhecida pela Associação Internacional das Cidades Educadoras (AICE), organização com sede em Barcelona — passando a integrar um grupo de 41 cidades brasileiras reconhecidas.",
      "A Educatec desenvolveu atividades de apoio, planejamento e mobilização relacionadas ao conceito de Cidade Educadora no município.",
    ],
    fraseDestaque:
      "Quando a cidade inteira educa, a escola deixa de estar sozinha.",
    responsabilidades: [
      "Apoio ao planejamento da agenda de Cidade Educadora",
      "Atividades de mobilização no município",
    ],
    realizado: [
      "Apoio ao processo que culminou no reconhecimento internacional do município",
    ],
    resultados: [
      { numero: "1ª", legenda: "cidade da Bahia reconhecida pela AICE" },
      { numero: "41", legenda: "cidades brasileiras na rede internacional" },
    ],
    hero: {
      src: "/images/eventos/projeto-institucional-a-confirmar.png",
      alt: "Registro institucional relacionado à atuação educacional",
      legenda: "Registro institucional presente no arquivo de fotos da Educatec",
    },
    corpo: [],
    instituicoes: "Município de Ipecaetá · AICE",
    relacionado: "observatorio-educacional",
    blocoExtra: {
      titulo: "O que é uma Cidade Educadora",
      texto:
        "O conceito entende que a formação das pessoas não depende só das escolas: espaços públicos, serviços municipais, projetos culturais, esporte, meio ambiente e geração de renda também assumem função educativa. A rede internacional é coordenada pela AICE, com sede em Barcelona.",
    },
    cardSpan: "md:col-span-8",
    cardAspecto: "aspect-[16/9]",
    cardImagem: {
      src: "/images/eventos/projeto-institucional-a-confirmar.png",
      alt: "Registro institucional relacionado à atuação educacional",
    },
  },
];

export function getProjeto(slug: string): Projeto | undefined {
  return projetos.find((p) => p.slug === slug);
}
