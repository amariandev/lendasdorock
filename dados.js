

const bandas = [
    {
        nome: "Iron Maiden",
        genero: "Heavy Metal",
        albumFamoso: "The Number of the Beast",
        musica: '<a href="https://www.youtube.com/results?search_query=iron+maiden" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1975
    },
    {
        nome: "Metallica",
        genero: "Thrash Metal",
        albumFamoso: "Master of Puppets",
        musica: '<a href="https://www.youtube.com/results?search_query=metallica" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1981
    },
    {
        nome: "AC/DC",
        genero: "Hard Rock",
        albumFamoso: "Back in Black",
        musica: '<a href="https://www.youtube.com/results?search_query=acdc" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1973
    },
    {
        nome: "Led Zeppelin",
        genero: "Hard Rock",
        albumFamoso: "Led Zeppelin IV",
        musica: '<a href="https://www.youtube.com/results?search_query=led+zeppelin" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1968
    },
    {
        nome: "Pink Floyd",
        genero: "Progressive Rock",
        albumFamoso: "The Dark Side of the Moon",
        musica: '<a href="https://www.youtube.com/results?search_query=pink+floyd" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1965
    },
    {
        nome: "Queen",
        genero: "Rock",
        albumFamoso: "A Night at the Opera",
        musica: '<a href="https://www.youtube.com/results?search_query=queen" target="_blankclass="link-youtube"">Ver no YouTube</a>',
        anoFormacao: 1970
    },
    {
        nome: "Black Sabbath",
        genero: "Heavy Metal",
        albumFamoso: "Paranoid",
        musica: '<a href="https://www.youtube.com/results?search_query=black+sabbath" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1968
    },
    {
        nome: "Nirvana",
        genero: "Grunge",
        albumFamoso: "Nevermind",
        musica: '<a href="https://www.youtube.com/results?search_query=nirvana" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1987
    },
    {
        nome: "Guns N' Roses",
        genero: "Hard Rock",
        albumFamoso: "Appetite for Destruction",
        musica: '<a href="https://www.youtube.com/results?search_query=guns+n+roses" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1985
    },
    {
        nome: "Deep Purple",
        genero: "Hard Rock",
        albumFamoso: "Machine Head",
        musica: '<a href="https://www.youtube.com/results?search_query=deep+purple" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1968
    },
    {
        nome: "The Rolling Stones",
        genero: "Rock",
        albumFamoso: "Let It Bleed",
        musica: '<a href="https://www.youtube.com/results?search_query=the+rolling+stones" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1962
    },
    {
        nome: "The Beatles",
        genero: "Rock",
        albumFamoso: "Abbey Road",
        musica: '<a href="https://www.youtube.com/results?search_query=the+beatles" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1960
    },
    {
        nome: "Aerosmith",
        genero: "Hard Rock",
        albumFamoso: "Toys in the Attic",
        musica: '<a href="https://www.youtube.com/results?search_query=aerosmith" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1970
    },
    {
        nome: "Kiss",
        genero: "Hard Rock",
        albumFamoso: "Destroyer",
        musica: '<a href="https://www.youtube.com/results?search_query=kiss" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1973
    },
    {
        nome: "Bon Jovi",
        genero: "Rock",
        albumFamoso: "Slippery When Wet",
        musica: '<a href="https://www.youtube.com/results?search_query=bon+jovi" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1983
    },
    {
        nome: "Red Hot Chili Peppers",
        genero: "Funk Rock",
        albumFamoso: "Californication",
        musica: '<a href="https://www.youtube.com/results?search_query=red+hot+chili+peppers" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1983
    },
    {
        nome: "Foo Fighters",
        genero: "Rock",
        albumFamoso: "The Colour and the Shape",
        musica: '<a href="https://www.youtube.com/results?search_query=foo+fighters" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1994
    },
    {
        nome: "The Who",
        genero: "Rock",
        albumFamoso: "Who's Next",
        musica: '<a href="https://www.youtube.com/results?search_query=the+who" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1964
    },
    {
        nome: "Rush",
        genero: "Progressive Rock",
        albumFamoso: "Moving Pictures",
        musica: '<a href="https://www.youtube.com/results?search_query=rush" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1968
    },
    {
        nome: "Megadeth",
        genero: "Thrash Metal",
        albumFamoso: "Rust in Peace",
        musica: '<a href="https://www.youtube.com/results?search_query=megadeth" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1983
    },
    {
        nome: "Pantera",
        genero: "Groove Metal",
        albumFamoso: "Vulgar Display of Power",
        musica: '<a href="https://www.youtube.com/results?search_query=pantera" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1981
    },
    {
        nome: "Slayer",
        genero: "Thrash Metal",
        albumFamoso: "Reign in Blood",
        musica: '<a href="https://www.youtube.com/results?search_query=slayer" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1981
    },
    {
        nome: "Judas Priest",
        genero: "Heavy Metal",
        albumFamoso: "British Steel",
        musica: '<a href="https://www.youtube.com/results?search_query=judas+priest" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1969
    },
    {
        nome: "System of a Down",
        genero: "Alternative Metal",
        albumFamoso: "Toxicity",
        musica: '<a href="https://www.youtube.com/results?search_query=system+of+a+down" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1994
    },
    {
        nome: "Linkin Park",
        genero: "Nu Metal",
        albumFamoso: "Hybrid Theory",
        musica: '<a href="https://www.youtube.com/results?search_query=linkin+park" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1996
    },
    {
        nome: "The Doors",
        genero: "Psychedelic Rock",
        albumFamoso: "L.A. Woman",
        musica: '<a href="https://www.youtube.com/results?search_query=the+doors" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1965
    },
    {
        nome: "Alice in Chains",
        genero: "Grunge",
        albumFamoso: "Dirt",
        musica: '<a href="https://www.youtube.com/results?search_query=alice+in+chains" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1987
    },
    {
        nome: "Soundgarden",
        genero: "Grunge",
        albumFamoso: "Superunknown",
        musica: '<a href="https://www.youtube.com/results?search_query=soundgarden" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1984
    },
    {
        nome: "Pearl Jam",
        genero: "Grunge",
        albumFamoso: "Ten",
        musica: '<a href="https://www.youtube.com/results?search_query=pearl+jam" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1990
    },
    {
        nome: "Def Leppard",
        genero: "Hard Rock",
        albumFamoso: "Hysteria",
        musica: '<a href="https://www.youtube.com/results?search_query=def+leppard" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1977
    },
    {
        nome: "Scorpions",
        genero: "Hard Rock",
        albumFamoso: "Love at First Sting",
        musica: '<a href="https://www.youtube.com/results?search_query=scorpions" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1965
    },
    {
        nome: "Motörhead",
        genero: "Heavy Metal",
        albumFamoso: "Ace of Spades",
        musica: '<a href="https://www.youtube.com/results?search_query=motorhead" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1975
    },
    {
        nome: "Sepultura",
        genero: "Thrash Metal",
        albumFamoso: "Roots",
        musica: '<a href="https://www.youtube.com/results?search_query=sepultura" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1984
    },
    {
        nome: "Rage Against the Machine",
        genero: "Rap Metal",
        albumFamoso: "Rage Against the Machine",
        musica: '<a href="https://www.youtube.com/results?search_query=rage+against+the+machine" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1991
    },
    {
        nome: "The Clash",
        genero: "Punk Rock",
        albumFamoso: "London Calling",
        musica: '<a href="https://www.youtube.com/results?search_query=the+clash" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1976
    },
    {
        nome: "Sex Pistols",
        genero: "Punk Rock",
        albumFamoso: "Never Mind the Bollocks",
        musica: '<a href="https://www.youtube.com/results?search_query=sex+pistols" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1975
    },
    {
        nome: "Green Day",
        genero: "Punk Rock",
        albumFamoso: "Dookie",
        musica: '<a href="https://www.youtube.com/results?search_query=green+day" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1986
    },
    {
        nome: "Ramones",
        genero: "Punk Rock",
        albumFamoso: "Ramones",
        musica: '<a href="https://www.youtube.com/results?search_query=ramones" target="_blank"class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1974
    },
    
        {
            nome: "Legião Urbana",
            genero: "Rock",
            albumFamoso: "Que País É Este",
            musica: '<a href="https://www.youtube.com/results?search_query=legião+urbana" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1982
        },
        {
            nome: "Titãs",
            genero: "Rock",
            albumFamoso: "Cabeça Dinossauro",
            musica: '<a href="https://www.youtube.com/results?search_query=titãs" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1982
        },
        {
            nome: "Os Paralamas do Sucesso",
            genero: "Rock",
            albumFamoso: "O Passo do Lui",
            musica: '<a href="https://www.youtube.com/results?search_query=os+paralamas+do+sucesso" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1977
        },
        {
            nome: "Barão Vermelho",
            genero: "Rock",
            albumFamoso: "Maior Abandonado",
            musica: '<a href="https://www.youtube.com/results?search_query=barão+vermelho" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1981
        },
        {
            nome: "Capital Inicial",
            genero: "Rock",
            albumFamoso: "Acústico MTV",
            musica: '<a href="https://www.youtube.com/results?search_query=capital+inicial" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1982
        },
        {
            nome: "Skank",
            genero: "Pop Rock",
            albumFamoso: "O Samba Poconé",
            musica: '<a href="https://www.youtube.com/results?search_query=skank" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1991
        },
        {
            nome: "Jota Quest",
            genero: "Pop Rock",
            albumFamoso: "De Volta ao Planeta",
            musica: '<a href="https://www.youtube.com/results?search_query=jota+quest" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1993
        },
        {
            nome: "Engenheiros do Hawaii",
            genero: "Rock",
            albumFamoso: "A Revolta dos Dândis",
            musica: '<a href="https://www.youtube.com/results?search_query=engenheiros+do+hawaii" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1984
        },
        {
            nome: "O Rappa",
            genero: "Rock/Reggae",
            albumFamoso: "Lado B Lado A",
            musica: '<a href="https://www.youtube.com/results?search_query=o+rappa" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1993
        },
        {
            nome: "Charlie Brown Jr.",
            genero: "Rock",
            albumFamoso: "Acústico MTV",
            musica: '<a href="https://www.youtube.com/results?search_query=charlie+brown+jr" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1992
        },
        {
            nome: "Raimundos",
            genero: "Rock",
            albumFamoso: "Lavô Tá Novo",
            musica: '<a href="https://www.youtube.com/results?search_query=raimundos" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1987
        },
        {
            nome: "Sepultura",
            genero: "Metal",
            albumFamoso: "Roots",
            musica: '<a href="https://www.youtube.com/results?search_query=sepultura" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1984
        },
        {
            nome: "Plebe Rude",
            genero: "Punk Rock",
            albumFamoso: "O Concreto Já Rachou",
            musica: '<a href="https://www.youtube.com/results?search_query=plebe+rude" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1981
        },
        {
            nome: "Los Hermanos",
            genero: "MPB/Rock",
            albumFamoso: "Bloco do Eu Sozinho",
            musica: '<a href="https://www.youtube.com/results?search_query=los+hermanos" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1997
        },
        {
            nome: "Mamonas Assassinas",
            genero: "Rock Cômico",
            albumFamoso: "Mamonas Assassinas",
            musica: '<a href="https://www.youtube.com/results?search_query=mamonas+assassinas" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1995
        },
        {
            nome: "Titãs",
            genero: "Rock",
            albumFamoso: "Cabeça Dinossauro",
            musica: '<a href="https://www.youtube.com/results?search_query=titãs" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1982
        },
        {
            nome: "Os Mutantes",
            genero: "Tropicalismo/Rock",
            albumFamoso: "Os Mutantes",
            musica: '<a href="https://www.youtube.com/results?search_query=os+mutantes" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1966
        },
        {
            nome: "Paralamas do Sucesso",
            genero: "Rock",
            albumFamoso: "Selvagem?",
            musica: '<a href="https://www.youtube.com/results?search_query=paralamas+do+sucesso" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1977
        },
        {
            nome: "Ratos de Porão",
            genero: "Hardcore Punk",
            albumFamoso: "Brasil",
            musica: '<a href="https://www.youtube.com/results?search_query=ratos+de+porão" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1981
        },
        {
            nome: "Planet Hemp",
            genero: "Rock/Rap",
            albumFamoso: "Usuário",
            musica: '<a href="https://www.youtube.com/results?search_query=planet+hemp" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1993
        },
        {
            nome: "Camisa de Vênus",
            genero: "Rock",
            albumFamoso: "Camisa de Vênus",
            musica: '<a href="https://www.youtube.com/results?search_query=camisa+de+vênus" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1980
        },
        {
            nome: "Biquini Cavadão",
            genero: "Rock",
            albumFamoso: "Cidades em Torrente",
            musica: '<a href="https://www.youtube.com/results?search_query=biquini+cavadão" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1985
        },
        {
            nome: "Nação Zumbi",
            genero: "Manguebeat",
            albumFamoso: "Da Lama ao Caos",
            musica: '<a href="https://www.youtube.com/results?search_query=nação+zumbi" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1991
        },
        {
            nome: "Ira!",
            genero: "Rock",
            albumFamoso: "Vivendo e Não Aprendendo",
            musica: '<a href="https://www.youtube.com/results?search_query=ira!" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1981
        },
        {
            nome: "Tihuana",
            genero: "Rock",
            albumFamoso: "Ilegal",
            musica: '<a href="https://www.youtube.com/results?search_query=tihuana" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1999
        },
        {
            nome: "Cidade Negra",
            genero: "Reggae",
            albumFamoso: "Sobre Todas as Forças",
            musica: '<a href="https://www.youtube.com/results?search_query=cidade+negra" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1986
        },
        {
            nome: "Oswaldo Montenegro",
            genero: "MPB",
            albumFamoso: "Léo e Bia",
            musica: '<a href="https://www.youtube.com/results?search_query=oswaldo+montenegro" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1971
        },
        {
            nome: "Ultraje a Rigor",
            genero: "Rock",
            albumFamoso: "Nós Vamos Invadir Sua Praia",
            musica: '<a href="https://www.youtube.com/results?search_query=ultraje+a+rigor" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1980
        },
        {
            nome: "RPM",
            genero: "Rock",
            albumFamoso: "Revoluções por Minuto",
            musica: '<a href="https://www.youtube.com/results?search_query=rpm" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1983
        },
        {
            nome: "Detonautas",
            genero: "Rock",
            albumFamoso: "Detonautas Roque Clube",
            musica: '<a href="https://www.youtube.com/results?search_query=detonautas" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1997
        }
    ];
    

