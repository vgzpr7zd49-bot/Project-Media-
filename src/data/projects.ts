
import { Project, Capacity } from '../../types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CONCERTO DE ANO NOVO Arnoso 2026',
    slug: 'concerto-de-ano-novo',
    year: '2026',
    type: 'Feature',
    synopsis: 'O Projeto de Ano Novo 2026 da Banda de Arnoso celebra a entrada no novo ano através da música, da cultura e da proximidade com a comunidade. Assente num Concerto de Ano Novo pensado para todos os públicos, o projeto valoriza a excelência musical, a identidade cultural e o trabalho coletivo, envolvendo músicos, maestro e convidados num momento de partilha e emoção. Mais do que um evento, este projeto afirma a música como ponto de encontro e reforça o compromisso da Banda de Arnoso com a divulgação cultural, a criação de novos públicos e a continuidade artística ao longo de 2026.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczPFgj5b9GG4hSShB-SMFeDyjTvY03m92z5OPf9g3dmhaKDdmqnIfgvKFOuOd1LKe4G4rIuAZQ0jr4hys3B-4fGLFU-tMDKN5Gte_U-9E6u9YjW1zOAx9jVo-p4YnJj2d9DCJp0m-2Fq9DAws23-chuAyg=w1701-h957-s-no-gm?authuser=0',
    stills: [
      'https://lh3.googleusercontent.com/pw/AP1GczNXY26m4Ud3CIORdaEmHvnDquwY9niBg-VoCFJJMjd4qwJsFtGU0HgAnEYU2VC3Jo2yFlZrq5OScTvUhQlX_ALakhEqe4mzLLtmVPD4A5pNWAFtz0qtj4oZmzOvxa9ab0umlEpts_tSMQbet5moovbAXA=w1701-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczO5jysCAJM5qZ-pkGQGefLv6gu33c3m1OWd4RcLh9rZ1MKf7OAu6oRUDXYf-NxFSmfdTk3nrR-AJVMXp0hufnuyjD_6HRG1yvAOBMuA9wIBaURcRVeUn0l_a5EIeb_3yF2CRGc8FieBTkDb1VhyejmoKA=w538-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMbheyDdpPQKp3Oxfj3oGPnS3TkEj4LEiv7cWc4MpE1wl213jPJs5tVyhpFaylWYm4Z-5H7ZBccQSiR87eWB7ovy10Ew_GFKPWNp1cSWA0yxFBQXfQAU48g8bslCNUd9vChdI_5BsVrFhxfGyrkRyZwXA=w1701-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczN_DoKwG6m7l5yz-UbQQbj7-ynUT4K_QLD8K6HVjOCXGV2vEUW52ncFzSpxEisptjrzeiUtw-vWF9VkcpbFTkYg3XGuTB4Y-0N9Z9zeRXHWlA__khAa-2Ib_DtEmhuceqAxwVPUGWvt9qSIo5dhEvUKPw=w538-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNc3BbpJ8XSDlYzm0BHHyVNjIVx2fTJyRKkRxYk2ylnk6uWLB5Wa9c0s8Po7GbFfAWhQeBncVFDhp8z-p4FfgGhyFV8Wa6pkQvg259Z8RuM7bL6Z3_azuWcIZ6A8OcAVWIwyBddJH1PPDTJEqYpRT6CgQ=w538-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPVnJvJk6jZ3tS8h0yFUlQNzB_gqENZLvQ27eiflphzVuuIp3m10hIdQUtwT8rUyrkMqhoQQy0Z86msFcjqxzbvOqwsiQBEyOjXkw8nMb6lF3Lf1Fm7s2cC7cF5jePMA3rb1v0rdRFAmjk0gpawzCDUDA=w1701-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNqYoli7uuMdm3P2N8mCE2MnAyyQgbLOk1Pj1ZvWP_vpsF89P2rWB02L8mEeu6VibCymiCYnugWi3OEeUR9qZH4ShhrD3d9VDGHc6YFE76iRscTZMluiTN1aIJLsa1rPGmcRZGRWsJSsrPFcEX2tkehog=w1701-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNhu2JAy8tujVoFpw5T7R_64VjcWIuTxtLgfJBFHMN_9L9pnjJDQkF1g5GNgMmzW22MUVLsBHRzALxAdxdIqQ7Hv_aN886ju352bQSa_4zlM3Hjosc9JIi-7mUS1RU_Lm-LOj00KFlcxXp2OKy0TdWbqw=w538-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPgXxJ3sAUzfKMN8_io-0zVkogdi3gv1ow08jjQUBqcPxfBfxODtSJHcyEzD9qZhhzcxPS-NxSJr-OC-74HoQ_M3W7WNOIAC1rNL7XxVn3nu6lPl6n62DyBFT_NEnA2vcBVUNF-d2WkMS5OOej_Gg7D6g=w538-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOi2KwhttKECimL6VQ8z34m4CEpZD4QmhZZ01gpZdDJy5VFxdL3OGwU5qJXX1JC3snHxR6aOvay2D58C2HZ5jQLq0otWL1onEPdVTBBIS6nwAdlPVfrkKevrDKVQFXp7mh8YBp7sRQpHJ0sbe3bw0gg0Q=w538-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOoyLEhwDf9jfsTvKzUXMCryDauvetsKp-CEb82NzTslF2PRaRqy1rSsO8dDT-4JM5aT_536bgca1rd0AzmH3xZZwjmwERxmzR0tM0CRjXtd-8-oUZyiPLBmOf7X5EwX8b4b6LdeUZ0p3wCgulvciPI8Q=w538-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMMuG5vliBpJsFtV1YPtXAe5bRMzRQzAuBlKnhOREMEt0rqPukptaXUFEKLtvPVPUlOBzISxVF4W8hI55Zm4oyJEGo3FzcLUad6BEtDCrgfRHEW9cXPI7Xsi3QS_dUyMhbtMoiyGMwQza5KI4aVNzT6Nw=w1701-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPLd0RP3BN8zbZNu33HlvK2hvgdEO-hFh7W8xBlbj2Q7Sdxfxcrdil_FT_3rpcfvb1VmAaW7tSQxj_p5cNGaC11bw6a4GWsCSMzMg6OpIfVt80Rum-IDVrvDT-1HjUsT0ojUAyIdvrKfrzDAslLm_7yxQ=w1436-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPzCKthEyimuUUSy7jA0kU2EXKyhcg924dOAFCZyu29NagXd8FPZ9qm0eBPJttCP9zbiQ3sC_jSmSlrgniwsgdXBETyQr8WrCAZ5rFNkYpCmhTZq3Li7zj15GlIFIEL1cu2jGLalR8UcEwlcW_gOfBEdA=w1701-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOcJCKmq9SWgMTbRvrDhu5RtxY8ul4f_Y8eiPP4NoUj6EuqpTRpSKtE0T6STRayFSCIKkix9Xtiw70NxPmM2dOIGyawvsvVcXHUgePr-uQLnJcVod-ph3w0cA7JUCJZBuuTaSxLb6IzNluBPYqFSautzw=w538-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczObqf0OfTkLWC0VCaDVenCuLCxdPmq-Vvf9xCTicmMd5W52wqPeJ94N0nHRPoe6akoHD9R5vQw9EioB4A_N_HeiJf2_dEg_iS1En4B_AbhDJfK2xA27ZjhNlFOZGTE5Db4LmE1uPOnA_jAuLO-NpmICTQ=w1701-h957-s-no-gm?authuser=0'
    ],
    role: 'Full Production & Visual Strategy',
    isFeatured: true,
    albumUrl: 'https://photos.app.goo.gl/L7cK8YWc9Ds2rMgC9'
  },
  {
    id: '2',
    title: 'PONTO.PT',
    slug: 'ponto-pt',
    year: '2023',
    type: 'Strategic Campaign',
    synopsis: 'Colaboração estratégica com o Ponto.pt, um projeto de jornalismo independente que redefine a narrativa mediática em Portugal. Através de uma abordagem visual contemporânea e dinâmica, capturamos a essência do jornalismo de proximidade, focando-nos na verdade, na estética e no impacto social das histórias que merecem ser contadas.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczPvADTENov25fn9gBKn84Xjln_UtAFCdoBvXzj4MgBiijI71-iNfEOc3hQ_ALCe5LfZTaDVtYSjd_tjaqcB7LiADGMJleEKp3dl9SfgFBais914ogJVxnEshtpxcAp-R4Oh6COnfDv9JVWAyxlobb_DWg=w1436-h957-s-no-gm?authuser=0',
    stills: [
      'https://lh3.googleusercontent.com/pw/AP1GczMF5aKQSmFMu8mEy8hObUQh67x0xkfLznsdoQzgdvmyGjann_z6m0ShaSP7PvHYO1GqrR0dK0c0p3pWK9KhIaLU_Vm0Oc2U4J0HCVYvQ6mcMaZAadmRYvaYZjxZ5tWqTte9EUAXjIcoH653qGkdXOhtnQ=w638-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOWryWKhbODadK_jpDEAspjSDSDuFEkMzQLxtLo40TUPDOIApexmtuV-ktFGABb8fP8ZMFH8_zWvBH4XkwK3a6q4hK8NNKeODkcyFSXWfUT_ecmTzYBDwkJkeKw-v94gVEzXqjBY_jS8wm-q9vp-cHh0w=w638-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNSQGFRmt0weseawNzPPd419JCc9Pd2XQVNJjaanvNc2kjhG9MD6-PEJm6d6z461nrl_0g9tmYBDj4OeeJYyr6VisyHJeqHqbsEVPZ0hDfeT01LzEDZedt8g6D8owjOuXdZ_VzkU-APKFQ6mF4DPGzl2A=w633-h957-s-no-gm?authuser=0'
    ],
    role: 'Visual Identity & Digital Strategy',
    isFeatured: true
  },
  {
    id: '3',
    title: 'GM ARQUITETURA E CONSTRUÇÃO',
    slug: 'gm-arquitetura',
    year: '2024',
    type: 'Documentary',
    synopsis: 'Criação de conteúdos digitais para o setor imobiliário, destacando o design e a qualidade construtiva da GM Arquitetura e Construção. Através de uma linguagem visual sofisticada, capturamos a essência de cada projeto, transformando espaços em narrativas visuais que conectam a marca ao seu público-alvo.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczP7JBzOLWbn-zJssEuJPfCILMJZU6jXBMQV3hGxbsO1CTYecNFbSRGooMshaN8E2V468mp0bTNgCe02KFSyBQ5fpEjpu3WhrSuV7vker7BuD1SbBiOJVneN6nSQ5cav8aPlRb2b7WVh71mArOm-EM1CXw=w1701-h957-s-no-gm?authuser=0',
    stills: [
      'https://lh3.googleusercontent.com/pw/AP1GczMugWPLHv_cAVrrPeEXKo1WpIE64SoWc8Pc-ULgkNTvvLcQBDfvlFc46HJuAIQwb0IfMo0aucA0ZUooVocSImjvjOwOkzI4AZG-oEo550IIbRfSqcMfGpWqH_oi3L5lBRfLMujqZST7KPF8bv9QcuIr_g=w1701-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPOJH5MgC0-isvz1-eu6pPHUI1YiF5lyjvqeYmxMnn_r3_d_Deqq5_jJfb9B7HtoPPhHvqkWPa5CW63Pi001afkoN5Ssi3YifYeAYXAVcG6tVuVuVkHgCpspHG8IjzA174x8tOx6xC1Iqn46LdrEajXEw=w1436-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMkgN33Kn3m6-PaSjcxEZpDuMaAUfSnaZoF6UFVnAMmC6laJufivVl1xzfN9RbwZpmAgOC0cD5hY-nrZBAYjefrJ2V2WFANO69l8M2xtiIRKf-NnHFiHaDKg_dcLv6YUcimpLTWynTelG4-9i8fVgKtMg=w1436-h957-s-no-gm?authuser=0'
    ],
    role: 'Real Estate Digital Content',
    isFeatured: false
  },
  {
    id: '4',
    title: 'AEREONOW',
    slug: 'aereonow',
    year: '2026',
    type: 'Commercial',
    synopsis: 'Campanha publicitária contínua para a Aereonow, capturando a exclusividade e o luxo das experiências de aviação privada. O nosso trabalho foca-se em transmitir a sofisticação e a eficiência do serviço, criando um desejo aspiracional através de imagens que celebram a liberdade de voar com total conforto.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczN6LoOaqSBsQLhUIw2wAl1i5i6bOMWyTJE_l_6Smjcm4nlPVPStpm7tuBUavkPSwAPXAbJ8hyEjgaLXaJxDXKVOemEzqi2CfLrQYKgl4h6t5Q88jy98ipKQ08WLvWmVAyO9XAmmPqHDOO7nHDuT8jDkMg=w1436-h957-s-no-gm?authuser=0',
    stills: [
      'https://photos.fife.usercontent.google.com/pw/AP1GczN9rJbTNJF6q3_6VnMKd__7yOTZQD-FSd-KAP9VS4fAmCIJxxPTfjBKkA=w638-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMZY3Ync8lpg5zTJStgEJjbaNWly5STxbIyiqO9_Ga5uwmP-D4tWelTejtjmds3ikZ7pptj8No-EtcDvo4WVm_zPcP7LCoKxefuGRGXu7Q0_T3J6H0Gp5vLppAKAo4BPnbnfnF7NPiUqYgXscfGAV2dZQ=w1436-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPe8fFWUf3f1-Xqc6QWHubKwOE5CID_fao_4te-FfWSk5uxYWk0Y3tyaw_QfFtKAFJdkxzyhtSKmiEgjoYL1TVdvfFRpkeVNY2PhftTUQQezFZ9LMjb7nQhybpn5z6xY09vZmXdz2iMqT52HEM2iS5w9g=w638-h957-s-no-gm?authuser=0'
    ],
    videoUrl: 'https://www.youtube.com/embed/YnNuaV_y8Jw',
    role: 'Continuous Advertising Campaign',
    isFeatured: false
  },
  {
    id: '5',
    title: 'SÃO JOSÉ 2026',
    slug: 'sao-jose-2026',
    year: '2026',
    type: 'Documentary',
    synopsis: 'As festividades de São José na Póvoa de Lanhoso são um pilar da identidade cultural da região. Este projeto documental captura a essência desta tradição secular, onde a Banda desempenha um papel vital. Através da música, revivemos a história e a devoção de um povo, transformando o dia de São José num momento de profunda relevância comunitária e artística. A nossa cobertura audiovisual foca-se na emoção de reviver tradições que unem gerações.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczMYEDx99rEAp1dBtjXOWMVCXdLsx_BzRhbICDITPJ7lRKzTq1u476ZsP4Xy_Tv8rtq4Nh1v15UlhzditZ7VHfhZaf1ybNkKgj1i98X9Lq2ASOjOfjAhcXT1nhVIq5c3Cu9IeHNT6d0_znlqWCSb0My1ag=w1436-h957-s-no-gm?authuser=0',
    stills: [
      'https://lh3.googleusercontent.com/pw/AP1GczOWGdE8hrpMqqJVB_2cgXWnpQOyEBIXFjwTRc8dofC2WojNT9ZU_JOYxJ7XMlnnXey6E23_3wORDNPqAp2ebYOgDQA-kywul8Ns2ZxWl77OuX76lldU-AqL9I4OXOJfeZ-0kcAIRbJXWFNCzAeDLNHavQ=w1436-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMw7PtOWjd5YmkNlsyMayN3x__znFRZHhH6nN_3V59YOTRFozjMkJcDWYf06f0stCqcNsBoFtbZxSyqMmDN5Mv8ve7VhEVJkHf9qIgNpx4SjncCTGi8i1oZ_j0njkVljzK7zuRcmkzW-sLrjsxXhMtZVQ=w1436-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNMXrEfDH46sFXQTXgLwaSBLaHdyhfR3c9SZ1maBAYpVw_x6IBYu1P2epbOqmCkJh81LNsvu8qaimnNvlMVS_ovyjv7Q8gaEXUCB58pQrTPNXUtEGBMrJLdTx3SZ72rvU0SlZ3eEno6CegzrE5E6s7baA=w1436-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPYRF0sYEdxYamhot_Z6blERttdrwBXOkDJq-ms75Gf47UjYNggXQU8oyzqT8Ma98T-wLW_QmRED4HqtNxoAVFAU54YkT0xc_kta8zrBHYNirpiclDaTbieMtCRGIzsHp9Ix1Q1qaQnznVsIQ9N0OVKrQ=w1436-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOFeGJHDho_TThq_ZoLbKIHAPUVSoBrydfXmwmTeBPNOOa7ZNtaaXyVEVnO1N8RMhTWVreqyuEHVPV0wmWn3m31dNpaP4jnCBHHtgFrASjgdZmdKzSryskBjYI8QyrbQvrsO_5FJ2TOCBUpaArdINGM-Q=w1436-h957-s-no-gm?authuser=0',
    ],
    videoUrl: 'https://www.youtube.com/embed/CJzvnqt-RRY',
    role: 'Same Day Cinematography',
    isFeatured: true
  },
  {
    id: '6',
    title: 'FESTIVAL 48H — "A PROVA"',
    slug: 'festival-48h',
    year: '2024',
    type: 'Short Film',
    synopsis: 'Participação no prestigiado 48 Hour Film Project com a curta-metragem "A Prova". Um desafio cinematográfico onde a criatividade encontra o limite do tempo, resultando numa produção intensa realizada integralmente em apenas dois dias.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczMumXTG02FJNHI7framT3X6q-rlB2U-aquYl1LLFKhYrqfUP1q0q8iw2jL7xmmok-MzJAbueDyJMRCA7Yp7h2wkklFbi9bpi8L4HuqP3jV9pnUOCyroPTOVEJ36PD6Hl3B14v7dsvtpopT9vP8BFOqf-Q=w1920-h640-s-no-gm?authuser=0',
    stills: [
      'https://lh3.googleusercontent.com/pw/AP1GczOzczhPlQSgQu30GPOyb4s_AveqY5C8fsZSOlya-AZFw_A94ZBemtrZRK32kttIDYLBh2poBB7IY16lNnA61DeY8QUCVgxECbejyynWqqc4UCJzu9ZoP9nEjZw86mHsk3W4sul83TS0gI2R7HIVxsnLkA=w1700-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczP1UdRbMxpBubUJDAbdcHoZy-RQO56b6jl8zZhQ_pwUsilnIJpc4L8Qne6u4nqEJxxrIE-53-UM2tjCkiYeoXkQNp4Jzp16JqZW2VsabE1ElZNE3qvz8e6yCNwH8gdqdbEXvaFlU0Y_7n8zC857EMHGkw=w1700-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMCXANFNmMpN75N29VluJf-FxgfRK1VDkGc1T3dDyiobOUEDcsNXhIUuVaSaAhq2ec-77tkQ61hZFtysAQRlO_kseh1jt9le1vrHn3egLG2HBTHjQ-omc_5YTEpBBqgsWEPkefMJG5SCEvOFuCg2Can6Q=w1700-h957-s-no-gm?authuser=0'
    ],
    videoUrl: 'https://www.youtube.com/embed/pR4tU7A8qpg',
    role: 'Direção, Fotografia & Edição',
    isFeatured: true
  },
  {
    id: '7',
    title: 'O MEU BATIZADO — JORGE',
    slug: 'batizado-jorge',
    year: '2024',
    type: 'Documentary',
    synopsis: 'A celebração do batismo do Jorge, um momento de profunda espiritualidade e união familiar. Capturamos a essência desta cerimónia sagrada, focando-nos nos detalhes, nas emoções e na luz que envolveu este dia tão especial, preservando memórias que perdurarão por gerações.',
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000',
    stills: [
      'https://images.unsplash.com/photo-1519817914152-22d216bb9170?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200'
    ],
    videoUrl: 'https://www.youtube.com/embed/K0voKVqD7Ys',
    role: 'Event Documentation & Cinematography',
    isFeatured: false
  },
  {
    id: '8',
    title: 'O BATIZADO DA FRANCISCA',
    slug: 'batizado-francisca',
    year: '2024',
    type: 'Documentary',
    synopsis: 'O batismo da Francisca representa um marco sagrado na sua jornada espiritual e um momento de profunda celebração para a sua família. Mais do que um ritual, é a celebração da vida, da pureza e do compromisso de uma comunidade em guiar e proteger um novo caminho. Através da nossa lente, capturamos a luz, a emoção e a solenidade deste dia, transformando instantes fugazes em memórias eternas que celebram o amor e a continuidade familiar.',
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000',
    stills: [
      'https://images.unsplash.com/photo-1519817914152-22d216bb9170?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200'
    ],
    role: 'Event Documentation & Cinematography',
    isFeatured: false
  },
  {
    id: '9',
    title: 'FESTIVAL INTERNACIONAL DE ÓRGÃO DE BRAGA',
    slug: 'festival-orgao-braga',
    year: '2025',
    type: 'Documentary',
    synopsis: 'O Festival Internacional de Órgão de Braga celebra a grandiosidade de um instrumento que moldou a identidade sonora e espiritual da cidade. Ao longo de sete noites, sete espaços únicos — da Sé de Braga à Igreja de Santa Cruz — transformaram-se em palcos de excelência musical, unindo património arquitetónico, espiritualidade e virtuosismo internacional. Uma produção Project Media Inc., ao serviço da memória e da emoção.',
    coverImage: 'https://photos.fife.usercontent.google.com/pw/AP1GczMocMm5vXKpkrj5K-i8kR2J1WBdiovrkWm8DOdPXAnVuDcUAe5DntdcPg=w1436-h957-s-no-gm?authuser=0',
    stills: [
      'https://photos.fife.usercontent.google.com/pw/AP1GczNGp3AgZAOyq4D_IrWn1NMAo6BKKP_rmlYP3iPBsZV5ytFUnpQJLxJfUg=w1436-h957-s-no-gm?authuser=0',
      'https://photos.fife.usercontent.google.com/pw/AP1GczP8X-nT1zvyRmJkg-wlaUFIZKW2BooGtZvI44jtOkfPGox3SpYj10NWkQ=w1436-h957-s-no-gm?authuser=0',
      'https://photos.fife.usercontent.google.com/pw/AP1GczOzCfAsJPgv_YM2snw92M3YXKCzA4ainDy_37ah6ELlGL1G7dPYlCuLCA=w1701-h957-s-no-gm?authuser=0',
      'https://photos.fife.usercontent.google.com/pw/AP1GczOUM98MyBG5ceCjFOoYWpYEisbom2k2vjFMiz4ClpMtNit3JHSDVDKLWw=w1700-h957-s-no-gm?authuser=0',
      'https://photos.fife.usercontent.google.com/pw/AP1GczNIouS1LK-oV_S8Bt6PGmqYw8FP9KpXwZ9gTTeMWpWqcWsas3xc2PaUHQ=w1701-h957-s-no-gm?authuser=0',
      'https://photos.fife.usercontent.google.com/pw/AP1GczP1oc6BKDlcHrF889XODz75jXSQ3h4t2QdwpE9wE8JjRm55gPR7HqxRFg=w1701-h957-s-no-gm?authuser=0',
    ],
    role: 'Full Documentation & Visual Production',
    isFeatured: true,
  },
  {
    id: '10',
    title: 'FNAC CULTURA - Aqui Dentro Faz Muito Barulho',
    slug: 'fnac-cultura-bruno-nogueira',
    year: '2024',
    type: 'Documentary',
    synopsis: "FNAC CULTURA apresenta 'Aqui Dentro Faz Muito Barulho', o mais recente livro de Bruno Nogueira. Uma compilação de textos que atravessam anos de observação, humor e uma melancolia muito própria. Através da nossa lente, documentamos o lançamento desta obra na FNAC, capturando a proximidade entre o autor e o seu público, num momento onde as palavras escritas ganham voz e a cultura se manifesta no seu estado mais puro e barulhento.",
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczPsXALZt_up4V1_RuD5ApMm0RQ-g2pKrojiJc8VXGZGpOee4nW-Re4wnD-EFu8A-zjk6sGCFJ4TcvqAYmQtpzZiB1p_O1AE4qZQRT910-DuvCXBkjBf7-yGY7Q7q0Ma-ihBoKPMEVRjTmrUpuJeS7UcmA=w1701-h957-s-no-gm?authuser=0',
    stills: [
      'https://lh3.googleusercontent.com/pw/AP1GczO-Ncrwsc6cejLotZbe1gO312WGF6QAvnvyselCBwL5cvBlwzCVkTz1oxP85pYxLzRcDGI8WFI-iQUnlz4TvjjBsxg3ZEEn5Kv8jg3q_pFieTk3CDgIV9QfWjnbk5850WVBVzH6oATcj6vPyoP1PkQYjA=w538-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPuxeYgmrr6rFzy08oSuOjedF2O5qL965WbiSRV0_pFWirnhwnzp9HTYMVrIA6o7DnEURY3kLiFUBvJpXsJy3r3PudjnWuDGzEWuWcPBKxWDJMSh2ppvUKpd7kdVamq8DnjnePFSnqmwvugB5iCzOyO6g=w1701-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOMVRomW9_kdWCCAbHYlmPkBMkVmkbTLHqXvCdL8HTggf3foFClLpBrOHo4_zU0MSP5_rYMreWuJElQbiDa0GGI0_E0Ib5tixcktISgfix-ojQN_t87h5m1dCGyfCv-tXLHKjzOXM-jYZFrrr3wBU9w3w=w538-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNFQSHH0ugS-P3aWW6qy4HqudLYCGMRLSkehmtNZRHtyafhxocYyTFUqdwe_LpQzHeDiT05_csCC66xFg0cMjLUOPP72tZBC0WHJyHu6Kim-Yr7kUL6wCd4A2-uHPsgS0pZOl3NBwev1eFiDtHG0AKFNA=w1701-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPsXALZt_up4V1_RuD5ApMm0RQ-g2pKrojiJc8VXGZGpOee4nW-Re4wnD-EFu8A-zjk6sGCFJ4TcvqAYmQtpzZiB1p_O1AE4qZQRT910-DuvCXBkjBf7-yGY7Q7q0Ma-ihBoKPMEVRjTmrUpuJeS7UcmA=w1701-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczO4kq_ijEQHPSLbG8RjnMoi8H5BDwlb_LNY3dD8-2ROOAUaFjVWx_ihJmPa_t08SrC3lsv8O7dHCSKNP-IO49QUAMWTMlTvucOvhS736-kfVgISzPgfkihtKn8KqB8v081My-YT4JZptJIdwtgh_LgG_Q=w538-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczN4fF8S12wpypwbu3IwVz0m90Y7xtYjCEBIRETDBQSOqFTnYcaDPWITGmaEP_fxB7Z83bilqMgqyjBNMzNJArtvn0oQfa2tC5ZBWD1qmfTohTj16T5cyRailmEio3avxky2QG33Jt7xLVkhHiVmbAr_7w=w1701-h957-s-no-gm?authuser=0'
    ],
    role: 'Cultural Documentation & Event Cinematography',
    isFeatured: false
  },
  {
    id: '11',
    title: 'BRACARAFLUTESTUDIO',
    slug: 'bracaraflutestudio',
    year: '2022',
    type: 'Documentary',
    synopsis: 'Bracaraflutestudio é um coletivo de excelência dedicado ao estudo e performance da flauta transversal, onde o sopro é a essência primordial da criação musical. Neste projeto, realizado a 18 de dezembro de 2022, documentámos a harmonia e a técnica deste ensemble, capturando a forma como o ar se transforma em melodia e emoção. Através da nossa lente e captação sonora, revelamos a dedicação e o virtuosismo dos músicos, dando a conhecer a alma de um grupo que eleva a música de câmara através da pureza e da força do sopro, criando uma experiência sensorial única e envolvente.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczORyxxJBSAfOtBho11GXe0r6SC07RDJ0Er8nL4KYl2XaNL3w9Ak6-HGCcl5sP47O73UKTbaD08-yR_gk7GJqUWNlyJswQjyXOzmniaDgU3bDIIgQFI9gpZ4hoFcGrRcjdKtvrNOYKpgy-rHQhni4y99Vg=w1701-h957-s-no-gm?authuser=0',
    stills: [
      'https://lh3.googleusercontent.com/pw/AP1GczNItw2adQsKozYmCc0bGko3Z3aZMePvRs82_GR0r0vx_zHKiFVFOGHCBePHk2Mc4GESKSzRKZv1KOPP1CljXe7ZKo8qDp_fLRpdIScqW6eR0v6Qx6vSQZX-yIZ90fM6ba3Dz_0i0A3HkCnrgusu46awGQ=w1701-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczORyxxJBSAfOtBho11GXe0r6SC07RDJ0Er8nL4KYl2XaNL3w9Ak6-HGCcl5sP47O73UKTbaD08-yR_gk7GJqUWNlyJswQjyXOzmniaDgU3bDIIgQFI9gpZ4hoFcGrRcjdKtvrNOYKpgy-rHQhni4y99Vg=w1701-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczM1Jl6tVa7CczgWvfzkXebcmp0Bx0mYqoab2L1A5QrKTsJUGNcbHii6XPm_7osUn_0rVrQ9CJxH2pOifgfVeGUyBw59EKYOPrTmyWh9zeBfcZ1FCAbtJOQ4lrZwAprpgSjiOreHV3X5dlg9rPA_dE4TTg=w538-h957-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMz7exZUlOMNegq9dA7gB9PlhFwOdmrC8hPO3Vb8ez-jQs6A1WPHKkG-knYeAgWiweDPyNDk8Z16LFNOnkxL877CpM9Y4CnwH9l2WAFJ3hJ297BQO2TQ6KIVN6F7ySYIRXYFoNY5_tPxkz692v-'
    ],
    role: 'Concert Recording & Photography',
    isFeatured: false
  },
  {
    id: '12',
    title: 'Quem vai a Braga - Toque Braguez',
    slug: 'quem-vai-a-braga-toque-braguez',
    year: '2022',
    type: 'Commercial',
    synopsis: "Toque Braguez é um coletivo musical que respira a tradição de Braga, reinventando a música popular com a alma da Viola Braguesa e do Cavaquinho. O grupo celebra as raízes minhotas, trazendo para a contemporaneidade os ritmos e cantares que definem a identidade de uma região. Neste projeto de 2022, produzimos o videoclipe 'Quem vai a Braga', uma obra visual que captura a energia e a autenticidade do grupo, transformando a música tradicional numa experiência cinematográfica vibrante.",
    coverImage: 'https://img.youtube.com/vi/V9YXMG0fgiM/maxresdefault.jpg',
    stills: [],
    videoUrl: 'https://www.youtube.com/embed/V9YXMG0fgiM',
    role: 'Music Video Production',
    isFeatured: true
  },
  {
    id: '13',
    title: 'Gender Reveal Tea Party',
    slug: 'gender-reveal-tea-party',
    year: '2026',
    type: 'Commercial',
    synopsis: 'O "Gender Reveal Tea Party" foi uma experiência de puro requinte desenvolvida pela Project Media em parceria estratégica com a Aereonow. Combinando a essência britânica de um chá da tarde sofisticado com o cenário grandioso de um hangar de aviação privada de luxo, o projeto foi imortalizado através de capturas cenográficas refinadas e uma narrativa visual impecável de cariz editorial.',
    coverImage: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&q=80&w=1700',
    stills: [
      'https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200'
    ],
    videoUrl: 'https://www.youtube.com/embed/3px9d_7RUDA',
    role: 'Visual & Cinematic Production',
    isFeatured: true
  },
  {
    id: '14',
    title: 'CASAMENTO — THE WEDDING FILM',
    slug: 'casamento-the-wedding-film',
    year: '2026',
    type: 'Documentary',
    synopsis: 'Um registo cinematográfico sublime e intimista de um dia inesquecível. Através de uma abordagem discreta e documental, a Project Media imortalizou cada emoção, olhar e abraço espontâneo, transformando o dia do casamento numa narrativa cinematográfica intemporal que celebra o amor em todas as suas formas.',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1700',
    stills: [],
    videoUrl: 'https://drive.google.com/file/d/1MFw4knaTYACRsWBzQB92v50St1YTeG_x/preview',
    role: 'Cinematography & Post-Production',
    isFeatured: true
  }
];

export const CAPACITIES: Capacity[] = [
  {
    id: 'c1',
    title: 'Cinematographic Production',
    description: 'We don\'t just capture images; we build worlds. From feature films to high-end narratives, our production pipeline is built on artistic rigor.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'c2',
    title: 'Strategic Visual Campaigns',
    description: 'Where strategy meets the silver screen. We translate complex brand goals into visual languages that demand attention and command respect.',
    image: 'https://images.unsplash.com/photo-1524511751214-bbad450c9307?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'c3',
    title: 'Documentary & Narrative',
    description: 'Authenticity as an editorial choice. We craft narratives that linger, finding the cinematic core in real-world events and histories.',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'c4',
    title: 'Content for Digital Impact',
    description: 'The digital space requires a cinematic standard. We bring our feature-film mentality to every screen, regardless of size or format.',
    image: 'https://images.unsplash.com/photo-1551817958-c5b5d1b70a3f?auto=format&fit=crop&q=80&w=1000'
  }
];
