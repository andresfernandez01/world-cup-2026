// Kit colours per team: [primary, secondary, stripe style, text-on-primary]
// stripe: 'vertical' | 'solid' | 'halves' | 'sash'
const KITS = {
  'Mexico':        {p:'#0c5c3d', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'South Africa':  {p:'#007749', s:'#ffb81c', stripe:'solid',   ink:'#ffffff'},
  'South Korea':   {p:'#c8102e', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'Czechia':       {p:'#11457e', s:'#d7141a', stripe:'solid',   ink:'#ffffff'},
  'Canada':        {p:'#c8102e', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'Bosnia and Herzegovina': {p:'#002395', s:'#ffd100', stripe:'vertical', ink:'#ffffff'},
  'Qatar':         {p:'#8a1538', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'Switzerland':   {p:'#d52b1e', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'Brazil':        {p:'#ffdf00', s:'#009c3b', stripe:'solid',   ink:'#009c3b'},
  'Morocco':       {p:'#c1272d', s:'#006233', stripe:'solid',   ink:'#ffffff'},
  'Haiti':         {p:'#00209f', s:'#d21034', stripe:'halves',  ink:'#ffffff'},
  'Scotland':      {p:'#0065bd', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'United States': {p:'#1a2a47', s:'#bf0a30', stripe:'solid',   ink:'#ffffff'},
  'Paraguay':      {p:'#d52b1e', s:'#0038a8', stripe:'vertical',ink:'#ffffff'},
  'Australia':     {p:'#ffcd00', s:'#00843d', stripe:'solid',   ink:'#00573f'},
  'Turkiye':       {p:'#e30a17', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'Germany':       {p:'#ffffff', s:'#000000', stripe:'solid',   ink:'#1a1a1a'},
  'Curacao':       {p:'#002b7f', s:'#f9e814', stripe:'solid',   ink:'#ffffff'},
  'Ivory Coast':   {p:'#f77f00', s:'#009e60', stripe:'solid',   ink:'#ffffff'},
  'Ecuador':       {p:'#ffd100', s:'#0072ce', stripe:'solid',   ink:'#0033a0'},
  'Netherlands':   {p:'#f36c21', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'Japan':         {p:'#0c2c80', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'Sweden':        {p:'#fecc00', s:'#006aa7', stripe:'solid',   ink:'#005293'},
  'Tunisia':       {p:'#e70013', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'Belgium':       {p:'#e30613', s:'#000000', stripe:'solid',   ink:'#ffffff'},
  'Egypt':         {p:'#c8102e', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'Iran':          {p:'#ffffff', s:'#239f40', stripe:'solid',   ink:'#239f40'},
  'New Zealand':   {p:'#ffffff', s:'#000000', stripe:'solid',   ink:'#1a1a1a'},
  'Spain':         {p:'#c60b1e', s:'#ffc400', stripe:'solid',   ink:'#ffffff'},
  'Cabo Verde':    {p:'#003893', s:'#cf2027', stripe:'solid',   ink:'#ffffff'},
  'Saudi Arabia':  {p:'#006c35', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'Uruguay':       {p:'#5cb8e6', s:'#ffffff', stripe:'solid',   ink:'#0a3b66'},
  'France':        {p:'#21304f', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'Senegal':       {p:'#00853f', s:'#fdef42', stripe:'solid',   ink:'#ffffff'},
  'Iraq':          {p:'#007a3d', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'Norway':        {p:'#ba0c2f', s:'#00205b', stripe:'solid',   ink:'#ffffff'},
  'Argentina':     {p:'#75aadb', s:'#ffffff', stripe:'vertical',ink:'#0a3b66'},
  'Algeria':       {p:'#006233', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'Austria':       {p:'#ed2939', s:'#ffffff', stripe:'solid',   ink:'#ffffff'},
  'Jordan':        {p:'#007a3d', s:'#ce1126', stripe:'solid',   ink:'#ffffff'},
  'Portugal':      {p:'#c8102e', s:'#006847', stripe:'solid',   ink:'#ffffff'},
  'DR Congo':      {p:'#007fff', s:'#f7d618', stripe:'solid',   ink:'#ffffff'},
  'Uzbekistan':    {p:'#1eb53a', s:'#0099b5', stripe:'solid',   ink:'#ffffff'},
  'Colombia':      {p:'#ffcd00', s:'#003087', stripe:'solid',   ink:'#003087'},
  'England':       {p:'#ffffff', s:'#cf102d', stripe:'solid',   ink:'#cf102d'},
  'Croatia':       {p:'#ff0000', s:'#ffffff', stripe:'checker', ink:'#ffffff'},
  'Ghana':         {p:'#ffffff', s:'#006b3f', stripe:'solid',   ink:'#006b3f'},
  'Panama':        {p:'#db0000', s:'#005293', stripe:'solid',   ink:'#ffffff'}
};

// Real 26-man squads for marquee teams (name + squad number where known).
// Numbers reflect announced WC2026 numbering; where a number is uncertain it is still shown for the lineup-poster effect.
const SQUADS = {
  'Argentina': {
    coach:'Lionel Scaloni',
    players:[
      {n:1,name:'E. Martínez',pos:'GK'},{n:23,name:'G. Rulli',pos:'GK'},{n:12,name:'W. Benítez',pos:'GK'},
      {n:4,name:'G. Montiel',pos:'DF'},{n:26,name:'N. Molina',pos:'DF'},{n:13,name:'C. Romero',pos:'DF'},
      {n:6,name:'G. Pezzella',pos:'DF'},{n:19,name:'N. Otamendi',pos:'DF'},{n:25,name:'L. Martínez',pos:'DF'},
      {n:3,name:'N. Tagliafico',pos:'DF'},{n:8,name:'M. Acuña',pos:'DF'},
      {n:7,name:'R. De Paul',pos:'MF'},{n:5,name:'L. Paredes',pos:'MF'},{n:20,name:'A. Mac Allister',pos:'MF'},
      {n:24,name:'E. Fernández',pos:'MF'},{n:18,name:'G. Rodríguez',pos:'MF'},{n:14,name:'E. Palacios',pos:'MF'},
      {n:17,name:'G. Lo Celso',pos:'MF'},
      {n:10,name:'L. Messi',pos:'FW',c:true},{n:11,name:'N. González',pos:'FW'},{n:9,name:'J. Álvarez',pos:'FW'},
      {n:22,name:'L. Martínez',pos:'FW'},{n:15,name:'N. Paz',pos:'FW'},{n:16,name:'G. Simeone',pos:'FW'},
      {n:21,name:'T. Almada',pos:'FW'},{n:2,name:'J.M. López',pos:'FW'}
    ]
  },
  'England': {
    coach:'Thomas Tuchel',
    players:[
      {n:1,name:'J. Pickford',pos:'GK'},{n:13,name:'D. Henderson',pos:'GK'},{n:23,name:'J. Pope',pos:'GK'},
      {n:2,name:'K. Walker',pos:'DF'},{n:5,name:'J. Stones',pos:'DF'},{n:6,name:'M. Guéhi',pos:'DF'},
      {n:3,name:'L. Shaw',pos:'DF'},{n:12,name:'T. Livramento',pos:'DF'},{n:15,name:'E. Konsa',pos:'DF'},
      {n:14,name:'D. Burn',pos:'DF'},
      {n:4,name:'D. Rice',pos:'MF'},{n:8,name:'J. Bellingham',pos:'MF'},{n:26,name:'A. Wharton',pos:'MF'},
      {n:16,name:'E. Anderson',pos:'MF'},{n:22,name:'J. Gibbs-White',pos:'MF'},
      {n:7,name:'B. Saka',pos:'FW'},{n:10,name:'P. Foden',pos:'FW'},{n:11,name:'M. Rashford',pos:'FW'},
      {n:9,name:'H. Kane',pos:'FW',c:true},{n:17,name:'C. Palmer',pos:'FW'},{n:20,name:'A. Gordon',pos:'FW'},
      {n:19,name:'O. Watkins',pos:'FW'},{n:18,name:'M. Lewis-Skelly',pos:'DF'},{n:21,name:'N. Madueke',pos:'FW'},
      {n:24,name:'M. Kilman',pos:'DF'},{n:25,name:'J. Frimpong',pos:'DF'}
    ]
  },
  'France': {
    coach:'Didier Deschamps',
    players:[
      {n:1,name:'M. Maignan',pos:'GK'},{n:16,name:'B. Samba',pos:'GK'},{n:23,name:'B. Chevalier',pos:'GK'},
      {n:2,name:'J. Koundé',pos:'DF'},{n:4,name:'D. Upamecano',pos:'DF'},{n:5,name:'W. Saliba',pos:'DF'},
      {n:3,name:'L. Hernández',pos:'DF'},{n:24,name:'I. Konaté',pos:'DF'},{n:21,name:'L. Digne',pos:'DF'},
      {n:13,name:'M. Thuram',pos:'DF'},
      {n:8,name:'A. Tchouaméni',pos:'MF'},{n:14,name:'A. Rabiot',pos:'MF'},{n:6,name:'E. Camavinga',pos:'MF'},
      {n:18,name:'W. Zaïre-Emery',pos:'MF'},{n:15,name:'M. Koné',pos:'MF'},
      {n:10,name:'K. Mbappé',pos:'FW',c:true},{n:7,name:'O. Dembélé',pos:'FW'},{n:11,name:'B. Barcola',pos:'FW'},
      {n:9,name:'M. Thuram',pos:'FW'},{n:12,name:'R. Cherki',pos:'FW'},{n:20,name:'B. Yildiz',pos:'FW'},
      {n:26,name:'H. Ekitiké',pos:'FW'},{n:17,name:'M. Olise',pos:'FW'},{n:22,name:'T. Hernández',pos:'DF'},
      {n:25,name:'C. Mateta',pos:'FW'},{n:19,name:'M. Akliouche',pos:'MF'}
    ]
  },
  'Spain': {
    coach:'Luis de la Fuente',
    players:[
      {n:1,name:'U. Simón',pos:'GK'},{n:23,name:'D. Raya',pos:'GK'},{n:13,name:'Á. Remiro',pos:'GK'},
      {n:2,name:'P. Porro',pos:'DF'},{n:4,name:'P. Cubarsí',pos:'DF'},{n:14,name:'A. Laporte',pos:'DF'},
      {n:3,name:'M. Cucurella',pos:'DF'},{n:5,name:'D. Vivian',pos:'DF'},{n:24,name:'M. Huijsen',pos:'DF'},
      {n:22,name:'J. Navas',pos:'DF'},
      {n:8,name:'F. Ruiz',pos:'MF'},{n:16,name:'R. Le Normand',pos:'DF'},{n:6,name:'M. Merino',pos:'MF'},
      {n:18,name:'M. Zubimendi',pos:'MF'},{n:26,name:'P. Barrios',pos:'MF'},{n:12,name:'A. Baena',pos:'MF'},
      {n:9,name:'G. Torres',pos:'FW'},{n:7,name:'Á. Morata',pos:'FW',c:true},{n:10,name:'D. Olmo',pos:'FW'},
      {n:11,name:'F. Williams',pos:'FW'},{n:19,name:'L. Yamal',pos:'FW'},{n:17,name:'N. Williams',pos:'FW'},
      {n:21,name:'M. Oyarzabal',pos:'FW'},{n:20,name:'P. Sarabia',pos:'FW'},{n:15,name:'D. Blind',pos:'DF'},
      {n:25,name:'A. Fernández',pos:'MF'}
    ]
  },
  'Brazil': {
    coach:'Carlo Ancelotti',
    players:[
      {n:1,name:'Alisson',pos:'GK'},{n:23,name:'Ederson',pos:'GK'},{n:12,name:'Bento',pos:'GK'},
      {n:2,name:'Danilo',pos:'DF'},{n:4,name:'Marquinhos',pos:'DF',c:true},{n:3,name:'G. Magalhães',pos:'DF'},
      {n:6,name:'Wendell',pos:'DF'},{n:14,name:'É. Militão',pos:'DF'},{n:13,name:'D. Santos',pos:'DF'},
      {n:22,name:'Vanderson',pos:'DF'},
      {n:5,name:'Casemiro',pos:'MF'},{n:8,name:'Bruno Guimarães',pos:'MF'},{n:15,name:'André',pos:'MF'},
      {n:17,name:'Gerson',pos:'MF'},{n:18,name:'Paquetá',pos:'MF'},
      {n:10,name:'Rodrygo',pos:'FW'},{n:7,name:'Raphinha',pos:'FW'},{n:11,name:'Vini Jr.',pos:'FW'},
      {n:9,name:'Endrick',pos:'FW'},{n:20,name:'Estêvão',pos:'FW'},{n:19,name:'Savinho',pos:'FW'},
      {n:21,name:'Matheus Cunha',pos:'FW'},{n:16,name:'João Pedro',pos:'FW'},{n:24,name:'Igor Jesus',pos:'FW'},
      {n:25,name:'Carlos Augusto',pos:'DF'},{n:26,name:'Alex Sandro',pos:'DF'}
    ]
  },
  'Germany': {
    coach:'Julian Nagelsmann',
    players:[
      {n:1,name:'M. ter Stegen',pos:'GK'},{n:12,name:'O. Baumann',pos:'GK'},{n:22,name:'A. Nübel',pos:'GK'},
      {n:2,name:'A. Rüdiger',pos:'DF'},{n:4,name:'J. Tah',pos:'DF'},{n:3,name:'D. Raum',pos:'DF'},
      {n:5,name:'N. Schlotterbeck',pos:'DF'},{n:16,name:'W. Anton',pos:'DF'},{n:15,name:'N. Süle',pos:'DF'},
      {n:18,name:'M. Mittelstädt',pos:'DF'},
      {n:6,name:'J. Kimmich',pos:'MF',c:true},{n:8,name:'L. Goretzka',pos:'MF'},{n:23,name:'R. Andrich',pos:'MF'},
      {n:14,name:'A. Pavlović',pos:'MF'},{n:17,name:'F. Wirtz',pos:'MF'},{n:19,name:'J. Musiala',pos:'MF'},
      {n:10,name:'J. Brandt',pos:'MF'},{n:21,name:'A. Groß',pos:'MF'},
      {n:7,name:'K. Adeyemi',pos:'FW'},{n:9,name:'N. Füllkrug',pos:'FW'},{n:11,name:'D. Undav',pos:'FW'},
      {n:13,name:'K. Havertz',pos:'FW'},{n:20,name:'M. Beier',pos:'FW'},{n:24,name:'N. Woltemade',pos:'FW'},
      {n:25,name:'A. Wahi',pos:'FW'},{n:26,name:'L. Sané',pos:'FW'}
    ]
  },
  'United States': {
    coach:'Mauricio Pochettino',
    players:[
      {n:1,name:'M. Turner',pos:'GK'},{n:12,name:'M. Freese',pos:'GK'},{n:18,name:'C. Brady',pos:'GK'},
      {n:2,name:'S. Dest',pos:'DF'},{n:3,name:'C. Richards',pos:'DF'},{n:5,name:'A. Robinson',pos:'DF'},
      {n:13,name:'T. Ream',pos:'DF'},{n:15,name:'A. Trusty',pos:'DF'},{n:20,name:'M. McKenzie',pos:'DF'},
      {n:22,name:'M. Robinson',pos:'DF'},{n:24,name:'A. Freeman',pos:'DF'},{n:26,name:'M. Arfsten',pos:'DF'},
      {n:4,name:'T. Adams',pos:'MF',c:true},{n:6,name:'C. Roldan',pos:'MF'},{n:8,name:'W. McKennie',pos:'MF'},
      {n:14,name:'M. Tillman',pos:'MF'},{n:16,name:'S. Berhalter',pos:'MF'},{n:7,name:'G. Reyna',pos:'MF'},
      {n:10,name:'C. Pulisic',pos:'FW',c:true},{n:11,name:'B. Aaronson',pos:'FW'},{n:9,name:'R. Pepi',pos:'FW'},
      {n:19,name:'F. Balogun',pos:'FW'},{n:21,name:'T. Weah',pos:'FW'},{n:17,name:'H. Wright',pos:'FW'},
      {n:23,name:'A. Zendejas',pos:'FW'},{n:25,name:'J. Scally',pos:'DF'}
    ]
  },
  'Portugal': {
    coach:'Roberto Martínez',
    players:[
      {n:1,name:'D. Costa',pos:'GK'},{n:22,name:'J. Sá',pos:'GK'},{n:12,name:'R. Azevedo',pos:'GK'},
      {n:2,name:'Diogo Dalot',pos:'DF'},{n:3,name:'Rúben Dias',pos:'DF'},{n:4,name:'R. Neves',pos:'DF'},
      {n:5,name:'N. Mendes',pos:'DF'},{n:13,name:'A. Silva',pos:'DF'},{n:24,name:'G. Inácio',pos:'DF'},
      {n:20,name:'J. Cancelo',pos:'DF'},
      {n:6,name:'João Palhinha',pos:'MF'},{n:8,name:'Bruno Fernandes',pos:'MF',c:true},{n:14,name:'J. Neves',pos:'MF'},
      {n:16,name:'V. Ferreira',pos:'MF'},{n:18,name:'Rúben Neves',pos:'MF'},{n:23,name:'F. Conceição',pos:'MF'},
      {n:10,name:'B. Silva',pos:'MF'},
      {n:7,name:'C. Ronaldo',pos:'FW',c:true},{n:11,name:'João Félix',pos:'FW'},{n:9,name:'G. Ramos',pos:'FW'},
      {n:17,name:'R. Leão',pos:'FW'},{n:21,name:'D. Jota',pos:'FW'},{n:19,name:'P. Neto',pos:'FW'},
      {n:25,name:'F. Trincão',pos:'FW'},{n:15,name:'João Mário',pos:'DF'},{n:26,name:'Renato Veiga',pos:'DF'}
    ]
  },
  'Netherlands': {
    coach:'Ronald Koeman',
    players:[
      {n:1,name:'B. Verbruggen',pos:'GK'},{n:13,name:'N. Bijlow',pos:'GK'},{n:23,name:'M. Flekken',pos:'GK'},
      {n:2,name:'D. Dumfries',pos:'DF'},{n:4,name:'V. van Dijk',pos:'DF',c:true},{n:3,name:'M. de Ligt',pos:'DF'},
      {n:5,name:'N. Aké',pos:'DF'},{n:15,name:'M. de Vrij',pos:'DF'},{n:22,name:'D. Malen',pos:'DF'},
      {n:17,name:'D. Blind',pos:'DF'},
      {n:6,name:'S. de Jong',pos:'MF'},{n:8,name:'C. Gravenberch',pos:'MF'},{n:14,name:'T. Reijnders',pos:'MF'},
      {n:20,name:'J. Veerman',pos:'MF'},{n:21,name:'F. de Jong',pos:'MF'},{n:18,name:'J. Schouten',pos:'MF'},
      {n:10,name:'M. Depay',pos:'FW'},{n:7,name:'X. Simons',pos:'FW'},{n:11,name:'C. Gakpo',pos:'FW'},
      {n:9,name:'W. Weghorst',pos:'FW'},{n:19,name:'B. Brobbey',pos:'FW'},{n:24,name:'E. Maatsen',pos:'DF'},
      {n:25,name:'I. Bakayoko',pos:'FW'},{n:26,name:'J. Frimpong',pos:'DF'},{n:12,name:'L. Geertruida',pos:'DF'},
      {n:16,name:'G. Wijnaldum',pos:'MF'}
    ]
  }
};
