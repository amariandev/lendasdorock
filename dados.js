

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
        },
    
    
    
        {
            nome: "Black Flag",
            genero: "Hardcore Punk",
            albumFamoso: "Damaged",
            musica: '<a href="https://www.youtube.com/results?search_query=black_flag" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1976
        },
        {
            nome: "Bad Brains",
            genero: "Hardcore Punk",
            albumFamoso: "Bad Brains",
            musica: '<a href="https://www.youtube.com/results?search_query=bad_brains" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1977
        },
        {
            nome: "Dead Kennedys",
            genero: "Hardcore Punk",
            albumFamoso: "Fresh Fruit for Rotting Vegetables",
            musica: '<a href="https://www.youtube.com/results?search_query=dead_kennedys" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1978
        },
        {
            nome: "Circle Jerks",
            genero: "Hardcore Punk",
            albumFamoso: "Group Sex",
            musica: '<a href="https://www.youtube.com/results?search_query=circle_jerks" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1979
        },
        {
            nome: "Minor Threat",
            genero: "Hardcore Punk",
            albumFamoso: "Out of Step",
            musica: '<a href="https://www.youtube.com/results?search_query=minor_threat" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1980
        },
        {
            nome: "Descendents",
            genero: "Hardcore Punk",
            albumFamoso: "Milo Goes to College",
            musica: '<a href="https://www.youtube.com/results?search_query=descendents" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1980
        },
        {
            nome: "TSOL",
            genero: "Hardcore Punk",
            albumFamoso: "Dance with Me",
            musica: '<a href="https://www.youtube.com/results?search_query=tsol" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1980
        },
        {
            nome: "Suicidal Tendencies",
            genero: "Hardcore Punk",
            albumFamoso: "Suicidal Tendencies",
            musica: '<a href="https://www.youtube.com/results?search_query=suicidal_tendencies" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1980
        },
        {
            nome: "Social Distortion",
            genero: "Hardcore Punk",
            albumFamoso: "Mommy's Little Monster",
            musica: '<a href="https://www.youtube.com/results?search_query=social_distortion" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1978
        },
        {
            nome: "Hüsker Dü",
            genero: "Hardcore Punk",
            albumFamoso: "Zen Arcade",
            musica: '<a href="https://www.youtube.com/results?search_query=h%C3%BCsker_d%C3%BC" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1980
        },
        {
            nome: "7 Seconds",
            genero: "Hardcore Punk",
            albumFamoso: "The Crew",
            musica: '<a href="https://www.youtube.com/results?search_query=7_seconds" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1980
        },
        {
            nome: "D.R.I.",
            genero: "Hardcore Punk",
            albumFamoso: "Crossover",
            musica: '<a href="https://www.youtube.com/results?search_query=dri" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1982
        },
        {
            nome: "The Offspring",
            genero: "Punk Rock",
            albumFamoso: "Smash",
            musica: '<a href="https://www.youtube.com/results?search_query=the_offspring" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1984
        },
        {
            nome: "Pennywise",
            genero: "Hardcore Punk",
            albumFamoso: "Pennywise",
            musica: '<a href="https://www.youtube.com/results?search_query=pennywise" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1988
        },
        {
            nome: "Fugazi",
            genero: "Hardcore Punk",
            albumFamoso: "Repeater",
            musica: '<a href="https://www.youtube.com/results?search_query=fugazi" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1987
        },
        {
            nome: "H2O",
            genero: "Hardcore Punk",
            albumFamoso: "H2O",
            musica: '<a href="https://www.youtube.com/results?search_query=h2o" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1994
        },
        {
            nome: "Earth Crisis",
            genero: "Hardcore",
            albumFamoso: "Destroy the Machines",
            musica: '<a href="https://www.youtube.com/results?search_query=earth_crisis" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1989
        },
        {
            nome: "Integrity",
            genero: "Hardcore",
            albumFamoso: "Systems Overload",
            musica: '<a href="https://www.youtube.com/results?search_query=integrity" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1988
        },
        {
            nome: "Sick Of It All",
            genero: "Hardcore",
            albumFamoso: "Just Look Around",
            musica: '<a href="https://www.youtube.com/results?search_query=sick_of_it_all" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1986
        },
        {
            nome: "Agnostic Front",
            genero: "Hardcore",
            albumFamoso: "Victim in Pain",
            musica: '<a href="https://www.youtube.com/results?search_query=agnostic_front" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1983
        },
        {
            nome: "Cro-Mags",
            genero: "Hardcore",
            albumFamoso: "The Age of Quarrel",
            musica: '<a href="https://www.youtube.com/results?search_query=cro_mags" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1981
        },
        {
            nome: "Terror",
            genero: "Hardcore",
            albumFamoso: "One With the Underdogs",
            musica: '<a href="https://www.youtube.com/results?search_query=terror" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 2002
        },
        {
            nome: "Biohazard",
            genero: "Hardcore",
            albumFamoso: "State of the World Address",
            musica: '<a href="https://www.youtube.com/results?search_query=biohazard" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1988
        },
        {
            nome: "Merauder",
            genero: "Hardcore",
            albumFamoso: "Master Killer",
            musica: '<a href="https://www.youtube.com/results?search_query=merauder" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1995
        },
        {
            nome: "Swarriors",
            genero: "Hardcore",
            albumFamoso: "Swarriors",
            musica: '<a href="https://www.youtube.com/results?search_query=swarriors" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1997
        },
        {
            nome: "Civ",
            genero: "Hardcore",
            albumFamoso: "Set Your Goals",
            musica: '<a href="https://www.youtube.com/results?search_query=civ" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1995
        },
        {
            nome: "Blood for Blood",
            genero: "Hardcore",
            albumFamoso: "True Till Death",
            musica: '<a href="https://www.youtube.com/results?search_query=blood_for_blood" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1995
        },
        {
            nome: "The Ghost Inside",
            genero: "Hardcore",
            albumFamoso: "Get What You Give",
            musica: '<a href="https://www.youtube.com/results?search_query=the_ghost_inside" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 2004
        },
        {
            nome: "Madball",
            genero: "Hardcore",
            albumFamoso: "Set It Off",
            musica: '<a href="https://www.youtube.com/results?search_query=madball" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1988
        },
        {
            nome: "Sick of It All",
            genero: "Hardcore",
            albumFamoso: "Blood, Sweat and No Tears",
            musica: '<a href="https://www.youtube.com/results?search_query=sick_of_it_all" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1986
        },
        {
            nome: "Walls of Jericho",
            genero: "Hardcore",
            albumFamoso: "All Hail the Dead",
            musica: '<a href="https://www.youtube.com/results?search_query=walls_of_jericho" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1999
        },
        {
            nome: "Unbroken",
            genero: "Hardcore",
            albumFamoso: "It's Getting Tougher to Say the Right Things",
            musica: '<a href="https://www.youtube.com/results?search_query=unbroken" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1992
        },
        {
            nome: "Inside Out",
            genero: "Hardcore",
            albumFamoso: "No Spiritual Surrender",
            musica: '<a href="https://www.youtube.com/results?search_query=inside_out" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1988
        },
        {
            nome: "Bane",
            genero: "Hardcore",
            albumFamoso: "Give Blood",
            musica: '<a href="https://www.youtube.com/results?search_query=bane" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1995
        },
        {
            nome: "Snapcase",
            genero: "Hardcore",
            albumFamoso: "Progression Through Unlearning",
            musica: '<a href="https://www.youtube.com/results?search_query=snapcase" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1991
        },
        {
            nome: "Ringworm",
            genero: "Hardcore",
            albumFamoso: "Justice Replaced by Revenge",
            musica: '<a href="https://www.youtube.com/results?search_query=ringworm" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1991
        },
    
        {
            nome: "Korn",
            genero: "Nu Metal",
            albumFamoso: "Follow the Leader",
            musica: '<a href="https://www.youtube.com/results?search_query=korn" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1993
        },
        {
            nome: "Limp Bizkit",
            genero: "Nu Metal",
            albumFamoso: "Chocolate Starfish and the Hot Dog Flavored Water",
            musica: '<a href="https://www.youtube.com/results?search_query=limp_bizkit" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1994
        },
        {
            nome: "Linkin Park",
            genero: "Nu Metal",
            albumFamoso: "Hybrid Theory",
            musica: '<a href="https://www.youtube.com/results?search_query=linkin_park" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1996
        },
        {
            nome: "Slipknot",
            genero: "Nu Metal",
            albumFamoso: "Slipknot",
            musica: '<a href="https://www.youtube.com/results?search_query=slipknot" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1995
        },
        {
            nome: "Papa Roach",
            genero: "Nu Metal",
            albumFamoso: "Infest",
            musica: '<a href="https://www.youtube.com/results?search_query=papa_roach" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1993
        },
        {
            nome: "Deftones",
            genero: "Nu Metal",
            albumFamoso: "White Pony",
            musica: '<a href="https://www.youtube.com/results?search_query=deftones" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1988
        },
        {
            nome: "Evanescence",
            genero: "Nu Metal",
            albumFamoso: "Fallen",
            musica: '<a href="https://www.youtube.com/results?search_query=evanescence" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1995
        },
        {
            nome: "Disturbed",
            genero: "Nu Metal",
            albumFamoso: "The Sickness",
            musica: '<a href="https://www.youtube.com/results?search_query=disturbed" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1994
        },
        {
            nome: "Mudvayne",
            genero: "Nu Metal",
            albumFamoso: "L.D. 50",
            musica: '<a href="https://www.youtube.com/results?search_query=mudvayne" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1996
        },
        {
            nome: "Sevendust",
            genero: "Nu Metal",
            albumFamoso: "Sevendust",
            musica: '<a href="https://www.youtube.com/results?search_query=sevendust" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1994
        },
        {
            nome: "P.O.D.",
            genero: "Nu Metal",
            albumFamoso: "Satellite",
            musica: '<a href="https://www.youtube.com/results?search_query=p.o.d." target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1992
        },
        {
            nome: "Godsmack",
            genero: "Nu Metal",
            albumFamoso: "Godsmack",
            musica: '<a href="https://www.youtube.com/results?search_query=godsmack" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1995
        },
        {
            nome: "Static-X",
            genero: "Nu Metal",
            albumFamoso: "Wisconsin Death Trip",
            musica: '<a href="https://www.youtube.com/results?search_query=static-x" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1994
        },
        {
            nome: "Crossfade",
            genero: "Nu Metal",
            albumFamoso: "Crossfade",
            musica: '<a href="https://www.youtube.com/results?search_query=crossfade" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1993
        },
        {
            nome: "Alien Ant Farm",
            genero: "Nu Metal",
            albumFamoso: "Anthology",
            musica: '<a href="https://www.youtube.com/results?search_query=alien_ant_farm" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1996
        },
        {
            nome: "Chevelle",
            genero: "Nu Metal",
            albumFamoso: "Wonder What's Next",
            musica: '<a href="https://www.youtube.com/results?search_query=chevelle" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1995
        },
        {
            nome: "Nonpoint",
            genero: "Nu Metal",
            albumFamoso: "Statement",
            musica: '<a href="https://www.youtube.com/results?search_query=nonpoint" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1997
        },
        {
            nome: "Adema",
            genero: "Nu Metal",
            albumFamoso: "Adema",
            musica: '<a href="https://www.youtube.com/results?search_query=adema" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 2000
        },
        {
            nome: "Trust Company",
            genero: "Nu Metal",
            albumFamoso: "The Lonely Position of Neutral",
            musica: '<a href="https://www.youtube.com/results?search_query=trust_company" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1997
        },
        {
            nome: "Spineshank",
            genero: "Nu Metal",
            albumFamoso: "The Height of Callousness",
            musica: '<a href="https://www.youtube.com/results?search_query=spineshank" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1996
        },
        {
            nome: "Orgy",
            genero: "Nu Metal",
            albumFamoso: "Candyass",
            musica: '<a href="https://www.youtube.com/results?search_query=orgy" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1998
        },
        {
            nome: "Soulfly",
            genero: "Nu Metal",
            albumFamoso: "Soulfly",
            musica: '<a href="https://www.youtube.com/results?search_query=soulfly" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1997
        },
        {
            nome: "Dope",
            genero: "Nu Metal",
            albumFamoso: "Felons and Revolutionaries",
            musica: '<a href="https://www.youtube.com/results?search_query=dope" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1997
        },
        {
            nome: "Mudvayne",
            genero: "Nu Metal",
            albumFamoso: "The End of All Things to Come",
            musica: '<a href="https://www.youtube.com/results?search_query=mudvayne" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1996
        },
        {
            nome: "Method Man",
            genero: "Nu Metal",
            albumFamoso: "Tical",
            musica: '<a href="https://www.youtube.com/results?search_query=method_man" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1993
        },
        {
            nome: "Ill Niño",
            genero: "Nu Metal",
            albumFamoso: "Revolución",
            musica: '<a href="https://www.youtube.com/results?search_query=ill_nino" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1999
        },
        {
            nome: "Static-X",
            genero: "Nu Metal",
            albumFamoso: "Start a War",
            musica: '<a href="https://www.youtube.com/results?search_query=static-x" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1994
        },
        {
            nome: "22 Bullets",
            genero: "Nu Metal",
            albumFamoso: "Overdose",
            musica: '<a href="https://www.youtube.com/results?search_query=22_bullets" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1996
        },
        {
            nome: "40 Below Summer",
            genero: "Nu Metal",
            albumFamoso: "The Mourning After",
            musica: '<a href="https://www.youtube.com/results?search_query=40_below_summer" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1998
        },
        {
            nome: "Drowning Pool",
            genero: "Nu Metal",
            albumFamoso: "Sinner",
            musica: '<a href="https://www.youtube.com/results?search_query=drowning_pool" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1996
        },
        
        {
            nome: "Bad Religion",
            genero: "Hardcore Melódico",
            albumFamoso: "No Substance",
            musica: '<a href="https://www.youtube.com/results?search_query=bad_religion" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1980
        },
        {
            nome: "Pennywise",
            genero: "Hardcore Melódico",
            albumFamoso: "About Time",
            musica: '<a href="https://www.youtube.com/results?search_query=pennywise" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1988
        },
        {
            nome: "NOFX",
            genero: "Hardcore Melódico",
            albumFamoso: "Punk in Drublic",
            musica: '<a href="https://www.youtube.com/results?search_query=nofx" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1983
        },
        {
            nome: "The Offspring",
            genero: "Hardcore Melódico",
            albumFamoso: "Smash",
            musica: '<a href="https://www.youtube.com/results?search_query=the_offspring" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1984
        },
        {
            nome: "Rise Against",
            genero: "Hardcore Melódico",
            albumFamoso: "Siren Song of the Counter Culture",
            musica: '<a href="https://www.youtube.com/results?search_query=rise_against" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1999
        },
        {
            nome: "Descendents",
            genero: "Hardcore Melódico",
            albumFamoso: "Milo Goes to College",
            musica: '<a href="https://www.youtube.com/results?search_query=descendents" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1978
        },
        {
            nome: "Lagwagon",
            genero: "Hardcore Melódico",
            albumFamoso: "Let's Talk About Feelings",
            musica: '<a href="https://www.youtube.com/results?search_query=lagwagon" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1990
        },
        {
            nome: "H2O",
            genero: "Hardcore Melódico",
            albumFamoso: "Nothing to Prove",
            musica: '<a href="https://www.youtube.com/results?search_query=h2o" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1994
        },
        {
            nome: "Strike Anywhere",
            genero: "Hardcore Melódico",
            albumFamoso: "Exit English",
            musica: '<a href="https://www.youtube.com/results?search_query=strike_anywhere" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 2000
        },
        {
            nome: "Good Riddance",
            genero: "Hardcore Melódico",
            albumFamoso: "Symptoms of a Leveling Spirit",
            musica: '<a href="https://www.youtube.com/results?search_query=good_riddance" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1986
        },
        {
            nome: "Face to Face",
            genero: "Hardcore Melódico",
            albumFamoso: "Big Choice",
            musica: '<a href="https://www.youtube.com/results?search_query=face_to_face" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1991
        },
        {
            nome: "Millencolin",
            genero: "Hardcore Melódico",
            albumFamoso: "Pennybridge Pioneers",
            musica: '<a href="https://www.youtube.com/results?search_query=millencolin" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1992
        },
        {
            nome: "Pulley",
            genero: "Hardcore Melódico",
            albumFamoso: "Together Again for the First Time",
            musica: '<a href="https://www.youtube.com/results?search_query=pulley" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1994
        },
        {
            nome: "The Ataris",
            genero: "Hardcore Melódico",
            albumFamoso: "So Long, Astoria",
            musica: '<a href="https://www.youtube.com/results?search_query=the_ataris" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1996
        },
        {
            nome: "Anti-Flag",
            genero: "Hardcore Melódico",
            albumFamoso: "The Terror State",
            musica: '<a href="https://www.youtube.com/results?search_query=anti_flag" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1988
        },
        {
            nome: "Psycho Realm",
            genero: "Hardcore Melódico",
            albumFamoso: "The Psycho Realm",
            musica: '<a href="https://www.youtube.com/results?search_query=psycho_realm" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1989
        },
        {
            nome: "A Wilhelm Scream",
            genero: "Hardcore Melódico",
            albumFamoso: "Career Suicide",
            musica: '<a href="https://www.youtube.com/results?search_query=a_wilhelm_scream" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 2001
        },
        {
            nome: "The Lawrence Arms",
            genero: "Hardcore Melódico",
            albumFamoso: "Oh! Calcutta!",
            musica: '<a href="https://www.youtube.com/results?search_query=the_lawrence_arms" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1999
        },
        {
            nome: "Bouncing Souls",
            genero: "Hardcore Melódico",
            albumFamoso: "How I Spent My Summer Vacation",
            musica: '<a href="https://www.youtube.com/results?search_query=bouncing_souls" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1989
        },
        {
            nome: "No Use for a Name",
            genero: "Hardcore Melódico",
            albumFamoso: "Leche Con Carne",
            musica: '<a href="https://www.youtube.com/results?search_query=no_use_for_a_name" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1987
        },
        {
            nome: "Hatebreed",
            genero: "Hardcore Melódico",
            albumFamoso: "Satisfaction Is the Death of Desire",
            musica: '<a href="https://www.youtube.com/results?search_query=hatebreed" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1994
        },
        {
            nome: "Youth of Today",
            genero: "Hardcore Melódico",
            albumFamoso: "We're Not in This Alone",
            musica: '<a href="https://www.youtube.com/results?search_query=youth_of_today" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1985
        },
        {
            nome: "The Subhumans",
            genero: "Hardcore Melódico",
            albumFamoso: "The Day the Country Died",
            musica: '<a href="https://www.youtube.com/results?search_query=the_subhumans" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1980
        },
        {
            nome: "Shelter",
            genero: "Hardcore Melódico",
            albumFamoso: "Mantra",
            musica: '<a href="https://www.youtube.com/results?search_query=shelter" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1990
        },
        {
            nome: "Strike Anywhere",
            genero: "Hardcore Melódico",
            albumFamoso: "Change Is a Sound",
            musica: '<a href="https://www.youtube.com/results?search_query=strike_anywhere" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 2000
        },
        {
            nome: "Sick of It All",
            genero: "Hardcore Melódico",
            albumFamoso: "Built to Last",
            musica: '<a href="https://www.youtube.com/results?search_query=sick_of_it_all" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1986
        },
        {
            nome: "Dropkick Murphys",
            genero: "Hardcore Melódico",
            albumFamoso: "Sing Loud, Sing Proud!",
            musica: '<a href="https://www.youtube.com/results?search_query=dropkick_murphys" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1996
        },
        {
            nome: "Blood for Blood",
            genero: "Hardcore Melódico",
            albumFamoso: "Fed Up!",
            musica: '<a href="https://www.youtube.com/results?search_query=blood_for_blood" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1995
        },
        {
            nome: "The Bronx",
            genero: "Hardcore Melódico",
            albumFamoso: "The Bronx",
            musica: '<a href="https://www.youtube.com/results?search_query=the_bronx" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 2002
        },
        {
            nome: "Snapcase",
            genero: "Hardcore Melódico",
            albumFamoso: "Designs for Automotion",
            musica: '<a href="https://www.youtube.com/results?search_query=snapcase" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1991
        },
        {
            nome: "Unbroken",
            genero: "Hardcore Melódico",
            albumFamoso: "The Path of Resistance",
            musica: '<a href="https://www.youtube.com/results?search_query=unbroken" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1992
        },
        {
            nome: "Chokehold",
            genero: "Hardcore Melódico",
            albumFamoso: "Content with Dying",
            musica: '<a href="https://www.youtube.com/results?search_query=chokehold" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1990
        },
        {
            nome: "Integrity",
            genero: "Hardcore Melódico",
            albumFamoso: "Systems Overload",
            musica: '<a href="https://www.youtube.com/results?search_query=integrity" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1988
        },
        {
            nome: "CIV",
            genero: "Hardcore Melódico",
            albumFamoso: "Set Your Goals",
            musica: '<a href="https://www.youtube.com/results?search_query=civ" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1995
        },
        {
            nome: "Earth Crisis",
            genero: "Hardcore Melódico",
            albumFamoso: "Gomorrah's Season Ends",
            musica: '<a href="https://www.youtube.com/results?search_query=earth_crisis" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1989
        },
        {
            nome: "H2O",
            genero: "Hardcore Melódico",
            albumFamoso: "F.T.T.W.",
            musica: '<a href="https://www.youtube.com/results?search_query=h2o" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1994
        },
        {
            nome: "All",
            genero: "Hardcore Melódico",
            albumFamoso: "Allroy's Revenge",
            musica: '<a href="https://www.youtube.com/results?search_query=all" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 1987
        },
        {
            nome: "Pears",
            genero: "Hardcore Melódico",
            albumFamoso: "Green Star",
            musica: '<a href="https://www.youtube.com/results?search_query=pears" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 2014
        },
        {
            nome: "Lemuria",
            genero: "Hardcore Melódico",
            albumFamoso: "Get Better",
            musica: '<a href="https://www.youtube.com/results?search_query=lemuria" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 2004
        },
        {
            nome: "The Menzingers",
            genero: "Hardcore Melódico",
            albumFamoso: "On the Impossible Past",
            musica: '<a href="https://www.youtube.com/results?search_query=the_menzingers" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 2006
        },
        {
            nome: "Direct Hit!",
            genero: "Hardcore Melódico",
            albumFamoso: "Wasted Minds",
            musica: '<a href="https://www.youtube.com/results?search_query=direct_hit" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 2007
        },
        {
            nome: "Banner Pilot",
            genero: "Hardcore Melódico",
            albumFamoso: "Collapser",
            musica: '<a href="https://www.youtube.com/results?search_query=banner_pilot" target="_blank" class="link-youtube">Ver no YouTube</a>',
            anoFormacao: 2006
        },
        {
        nome: "AC/DC",
        genero: "Rock",
        albumFamoso: "Back in Black",
        musica: '<a href="https://www.youtube.com/results?search_query=acdc" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1973
    },
    {
        nome: "Bon Jovi",
        genero: "Rock",
        albumFamoso: "Slippery When Wet",
        musica: '<a href="https://www.youtube.com/results?search_query=bon_jovi" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1983
    },
    {
        nome: "Guns N' Roses",
        genero: "Rock",
        albumFamoso: "Appetite for Destruction",
        musica: '<a href="https://www.youtube.com/results?search_query=guns_n_roses" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1985
    },
    {
        nome: "Def Leppard",
        genero: "Rock",
        albumFamoso: "Hysteria",
        musica: '<a href="https://www.youtube.com/results?search_query=def_leppard" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1977
    },
    {
        nome: "Journey",
        genero: "Rock",
        albumFamoso: "Escape",
        musica: '<a href="https://www.youtube.com/results?search_query=journey" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1973
    },
    {
        nome: "Van Halen",
        genero: "Rock",
        albumFamoso: "1984",
        musica: '<a href="https://www.youtube.com/results?search_query=van_halen" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1972
    },
    {
        nome: "Scorpions",
        genero: "Rock",
        albumFamoso: "Love at First Sting",
        musica: '<a href="https://www.youtube.com/results?search_query=scorpions" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1965
    },
    {
        nome: "Twisted Sister",
        genero: "Rock",
        albumFamoso: "Stay Hungry",
        musica: '<a href="https://www.youtube.com/results?search_query=twisted_sister" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1972
    },
    {
        nome: "Motörhead",
        genero: "Rock",
        albumFamoso: "Ace of Spades",
        musica: '<a href="https://www.youtube.com/results?search_query=motörhead" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1975
    },
    {
        nome: "Kiss",
        genero: "Rock",
        albumFamoso: "Lick It Up",
        musica: '<a href="https://www.youtube.com/results?search_query=kiss" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1973
    },
    {
        nome: "Ratt",
        genero: "Rock",
        albumFamoso: "Out of the Cellar",
        musica: '<a href="https://www.youtube.com/results?search_query=ratt" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1976
    },
    {
        nome: "Quiet Riot",
        genero: "Rock",
        albumFamoso: "Metal Health",
        musica: '<a href="https://www.youtube.com/results?search_query=quiet_riot" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1973
    },
    {
        nome: "Europe",
        genero: "Rock",
        albumFamoso: "The Final Countdown",
        musica: '<a href="https://www.youtube.com/results?search_query=europe" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1979
    },
    {
        nome: "Whitesnake",
        genero: "Rock",
        albumFamoso: "Whitesnake",
        musica: '<a href="https://www.youtube.com/results?search_query=whitesnake" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1978
    },
    {
        nome: "Foreigner",
        genero: "Rock",
        albumFamoso: "4",
        musica: '<a href="https://www.youtube.com/results?search_query=foreigner" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1976
    },
    {
        nome: "Warrant",
        genero: "Rock",
        albumFamoso: "Cherry Pie",
        musica: '<a href="https://www.youtube.com/results?search_query=warrant" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1984
    },
    {
        nome: "Dokken",
        genero: "Rock",
        albumFamoso: "Back for the Attack",
        musica: '<a href="https://www.youtube.com/results?search_query=dokken" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1976
    },
    {
        nome: "Hanoi Rocks",
        genero: "Rock",
        albumFamoso: "Two Steps from the Move",
        musica: '<a href="https://www.youtube.com/results?search_query=hanoi_rocks" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1979
    },
    {
        nome: "Great White",
        genero: "Rock",
        albumFamoso: "Once Bitten",
        musica: '<a href="https://www.youtube.com/results?search_query=great_white" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1978
    },
    {
        nome: "Bad Company",
        genero: "Rock",
        albumFamoso: "Fame and Fortune",
        musica: '<a href="https://www.youtube.com/results?search_query=bad_company" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1973
    },
    {
        nome: "Helloween",
        genero: "Rock",
        albumFamoso: "Keeper of the Seven Keys Part I",
        musica: '<a href="https://www.youtube.com/results?search_query=helloween" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1984
    },
    {
        nome: "Tesla",
        genero: "Rock",
        albumFamoso: "Mechanical Resonance",
        musica: '<a href="https://www.youtube.com/results?search_query=tesla" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1984
    },
    {
        nome: "Stryper",
        genero: "Rock",
        albumFamoso: "To Hell with the Devil",
        musica: '<a href="https://www.youtube.com/results?search_query=stryper" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1983
    },
    {
        nome: "L.A. Guns",
        genero: "Rock",
        albumFamoso: "L.A. Guns",
        musica: '<a href="https://www.youtube.com/results?search_query=l_a_guns" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1983
    },
    {
        nome: "Rage Against the Machine",
        genero: "Rock",
        albumFamoso: "Rage Against the Machine",
        musica: '<a href="https://www.youtube.com/results?search_query=rage_against_the_machine" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1991
    },
    {
        nome: "Black Sabbath",
        genero: "Rock",
        albumFamoso: "Born Again",
        musica: '<a href="https://www.youtube.com/results?search_query=black_sabbath" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1968
    },
    {
        nome: "Toto",
        genero: "Rock",
        albumFamoso: "Toto IV",
        musica: '<a href="https://www.youtube.com/results?search_query=toto" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1977
    },
    {
        nome: "Kansas",
        genero: "Rock",
        albumFamoso: "Vinyl Confessions",
        musica: '<a href="https://www.youtube.com/results?search_query=kansas" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1973
    },
    {
        nome: "Asia",
        genero: "Rock",
        albumFamoso: "Asia",
        musica: '<a href="https://www.youtube.com/results?search_query=asia" target="_blank" class="link-youtube">Ver no YouTube</a>',
        anoFormacao: 1981
    },
    
    ]