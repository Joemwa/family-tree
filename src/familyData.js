export const familyData = [
  // Founding parents James and Esselidah Mwanza
  // They have 12 children, each with their own spouseId and children
  {
    id: 1,
    name: "James Mambo",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "1924-04-24",
    spouseId: 2,
    childrenIds: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    ImageUrl: "",
  },
  {
    id: 2,
    name: "Esselidah",
    surname: "Lungu",
    gender: "F",
    dateOfBirth: "1935-07-18",
    spouseId: 1,
    childrenIds: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    ImageUrl: "",
  },

  // 12 Children of James and Esselidah Mwanza
  {
    id: 3,
    name: "Winston",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "1975-01-12",
    parentIds: [1],
    spouseId: 15,
    childrenIds: [39, 40, 41, 42, 43, 44],
    ImageUrl: "",
  },
  {
    id: 4,
    name: "Masauso Stanley",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "1976-05-22",
    parentIds: [1, 2],
    spouseId: [16, 17, 18, 19, 20, 21],
    childrenIds: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    ImageUrl: "",
  },
  {
    id: 5,
    name: "Mary",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "1977-11-04",
    parentIds: [1, 2],
    spouseId: [22, 23],
    childrenIds: [55, 56, 57, 58, 59],
    ImageUrl: "",
  },
  {
    id: 6,
    name: "Bridget",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "1978-03-09",
    parentIds: [1, 2],
    spouseId: 24,
    childrenIds: [60, 61, 62, 63, 64, 65],
    ImageUrl: "",
  },
  {
    id: 7,
    name: "Mirriam",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "1980-09-13",
    parentIds: [1, 2],
    spouseId: [25, 26],
    childrenIds: [66, 67, 68],
    ImageUrl: "",
  },
  {
    id: 8,
    name: "Julien",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "1981-12-01",
    parentIds: [1, 2],
    spouseId: 27,
    childrenIds: [69, 70],
    ImageUrl: "",
  },
  {
    id: 9,
    name: "Dailess",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "1983-06-24",
    parentIds: [1, 2],
    spouseId: [29, 30],
    childrenIds: [71, 72, 73],
    ImageUrl: "",
  },
  {
    id: 10,
    name: "Violet",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "1985-08-15",
    parentIds: [1, 2],
    spouseId: [31, 32],
    childrenIds: [74, 75, 76],
    ImageUrl: "",
  },
  {
    id: 11,
    name: "Justina",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "1987-02-28",
    parentIds: [1, 2],
    spouseId: 33,
    childrenIds: [77, 78, 79, 80],
    ImageUrl: "",
  },
  {
    id: 12,
    name: "Monica",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "1988-07-07",
    parentIds: [1, 2],
    spouseId: [130, 34],
    childrenIds: [81, 82, 83],
    ImageUrl: "",
  },
  {
    id: 13,
    name: "Susan",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "1990-04-19",
    parentIds: [1, 2],
    spouseId: [36, 37],
    childrenIds: [84, 85, 86],
    ImageUrl: "",
  },
  {
    id: 14,
    name: "Joseph Levi",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "1974-06-06",
    parentIds: [1, 2],
    spouseId: 38,
    childrenIds: [87, 88],
    ImageUrl: "",
  },

  // spouseIds
  {
    // Winston's spouseId
    id: 15,
    name: "Bana Jeff",
    surname: "needInfo",
    dateOfBirth: "1974-12-02",
    spouseId: 3,
    ImageUrl: "",
  },
  {
    // Masauso's spouseId
    id: 16,
    name: "Bana Alfred",
    surname: "needInfo",
    dateOfBirth: "1976-06-10",
    spouseId: 4,
    ImageUrl: "",
  },
  {
    // Masauso's spouseId
    id: 17,
    name: "Bana Maureen",
    surname: "needInfo",
    dateOfBirth: "1975-09-30",
    spouseId: 4,
    ImageUrl: "",
  },
  {
    //masauso's spouseId
    id: 18,
    name: "Bana Masauso",
    surname: "needInfo",
    dateOfBirth: "1977-03-12",
    spouseId: 4,
    ImageUrl: "",
  },
  {
    //masauso's spouseId
    id: 19,
    name: "Bana Misozi",
    surname: "needInfo",
    dateOfBirth: "1979-11-18",
    spouseId: 4,
    ImageUrl: "",
  },
  {
    //masauso's spouseId
    id: 20,
    name: "Bana Moses",
    surname: "needInfo",
    dateOfBirth: "1980-04-14",
    spouseId: 4,
    ImageUrl: "",
  },
  {
    //masauso's spouseId
    id: 21,
    name: "Bana Muchemwa",
    surname: "needInfo",
    dateOfBirth: "1980-04-14",
    spouseId: 4,
    ImageUrl: "",
  },
  {
    //mary's spouseId
    id: 22,
    name: "Mambo",
    surname: "Mambo",
    dateOfBirth: "1981-07-07",
    spouseId: 5,
    ImageUrl: "",
  },
  {
    //mary's spouseId
    id: 23,
    name: "Paul Zandonda",
    surname: "Phiri",
    dateOfBirth: "1981-07-07",
    spouseId: 5,
    ImageUrl: "",
  },
  {
    //bridget's spouseId
    id: 24,
    name: "Philemon Quavesious",
    surname: "Banda",
    dateOfBirth: "1984-05-21",
    spouseId: 6,
    ImageUrl: "",
  },
  {
    //mirriam's spouseId
    id: 26,
    name: "Chrispine",
    surname: "Hapaku",
    dateOfBirth: "1985-01-08",
    spouseId: 7,
    ImageUrl: "",
  },
  {
    //Mirriam's spouseId
    id: 25,
    name: "Pule",
    surname: "Pule",
    dateOfBirth: "1985-01-08",
    spouseId: 7,
    ImageUrl: "",
  },
  {
    //Julien's spouseId
    id: 27,
    name: "needInfo",
    surname: "needInfo",
    dateOfBirth: "1986-02-16",
    spouseId: 8,
    ImageUrl: "",
  },
  {
    //Julien's spouseId
    id: 28,
    name: "Silungwe",
    surname: "Silungwe",
    dateOfBirth: "1986-02-16",
    spouseId: 8,
    ImageUrl: "",
  },
  {
    // dailess's spouseId
    id: 29,
    name: "needInfo",
    surname: "needInfo",
    dateOfBirth: "1988-08-12",
    spouseId: 9,
    ImageUrl: "",
  },
  {
    // dailess's spouseId
    id: 30,
    name: "Henry",
    surname: "Ngonga",
    dateOfBirth: "1988-08-12",
    spouseId: 9,
    ImageUrl: "",
  },
  {
    //violet's spouseId
    id: 31,
    name: "needInfo",
    surname: "needInfo",
    dateOfBirth: "1979-12-23",
    spouseId: 10,
    ImageUrl: "",
  },
  {
    //violet's spouseId
    id: 32,
    name: "needInfo",
    surname: "Banda",
    dateOfBirth: "1979-12-23",
    spouseId: 10,
    ImageUrl: "",
  },
  {
    //justina's spouseId
    id: 33,
    name: "needInfo",
    surname: "Sakala",
    dateOfBirth: "1979-12-23",
    spouseId: 11,
    ImageUrl: "",
  },
  {
    //monica's spouseId
    id: 130,
    name: "needInfo",
    surname: "Kashinka",
    dateOfBirth: "1979-12-23",
    spouseId: 12,
    ImageUrl: "",
  },
  {
    //monica's spouseId
    id: 34,
    name: "needInfo",
    surname: "Mwasha",
    dateOfBirth: "1979-12-23",
    spouseId: 12,
    ImageUrl: "",
  },
  {
    // susan's spouseId
    id: 36,
    name: "needInfo",
    surname: "needInfo",
    dateOfBirth: "2000-01-01",
    spouseId: 13,
    ImageUrl: "",
  },
  {
    // susan's spouseId
    id: 37,
    name: "Kedrick",
    surname: "Siame",
    dateOfBirth: "2000-01-01",
    spouseId: 13,
    ImageUrl: "",
  },
  {
    // joseph's spouseId
    id: 38,
    name: "Clarence",
    surname: "Chibawe",
    dateOfBirth: "1979-12-23",
    spouseId: 14,
    ImageUrl: "",
  },
  {
    //winston's children
    id: 39,
    name: "Brenda",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "2003-03-15",
    parentIds: [3, 15],
    ImageUrl: "",
  },
  {
    //winston's children
    id: 40,
    name: "Jeff",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "2001-08-10",
    parentIds: [3, 15],
    ImageUrl: "",
  },
  {
    //winston's children
    id: 41,
    name: "Jean",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "2004-12-20",
    parentIds: [3, 15],
    ImageUrl: "",
  },
  {
    // Winston's children
    id: 42,
    name: "Sharlotte",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "2005-06-18",
    parentIds: [3, 15],
    ImageUrl: "",
  },

  // winston's children
  {
    id: 43,
    name: "Ben",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "2007-10-04",
    parentIds: [3, 15],
    ImageUrl: "",
  },
  {
    // winston's children
    id: 44,
    name: "Mwanja",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "2008-11-25",
    parentIds: [3, 15],
    ImageUrl: "",
  },
  {
    //masauso's children
    id: 45,
    name: "Alfred",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "2006-04-17",
    parentIds: [4, 16],
    ImageUrl: "",
  },
  {
    //masauso's children
    id: 46,
    name: "Nebert",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "2009-02-22",
    parentIds: [4, 16],
    ImageUrl: "",
  },
  {
    //masauso's children
    id: 47,
    name: "Maureen",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "2010-07-01",
    parentIds: [4, 17],
    ImageUrl: "",
  },
  {
    //masauso's children
    id: 48,
    name: "Masauso Jr.",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "2007-03-03",
    parentIds: [4, 18],
    ImageUrl: "",
  },
  {
    // Masauso's children
    id: 49,
    name: "Misozi",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "2005-09-29",
    parentIds: [4, 19],
    ImageUrl: "",
  },
  {
    // Masauso's children
    id: 50,
    name: "Joseph",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "2008-06-06",
    parentIds: [4, 19],
    ImageUrl: "",
  },
  {
    //masauso's children
    id: 51,
    name: "Moses",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "2006-01-11",
    parentIds: [4, 20],
    ImageUrl: "",
  },
  {
    //masauso's children
    id: 52,
    name: "Muchemwa",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "2009-10-12",
    parentIds: [4, 21],
    ImageUrl: "",
  },
  {
    //masauso's children
    id: 53,
    name: "Mwansa",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "2011-04-28",
    parentIds: [4, 21],
    ImageUrl: "",
  },
  {
    //masuaso's children
    id: 54,
    name: "Kabwe",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "2010-12-05",
    parentIds: [4, 21],
    ImageUrl: "",
  },
  {
    //mary's children
    id: 55,
    name: "Shepherd",
    surname: "Mambo",
    gender: "M",
    dateOfBirth: "2012-02-17",
    parentIds: [5, 22],
    ImageUrl: "",
  },
  {
    //mary's children
    id: 56,
    name: "Peggy",
    surname: "Phiri",
    gender: "F",
    dateOfBirth: "2012-02-17",
    parentIds: [23],
    ImageUrl: "",
  },
  {
    //mary's children
    id: 57,
    name: "James",
    surname: "Phiri",
    gender: "M",
    dateOfBirth: "2012-02-17",
    parentIds: [5, 23],
    ImageUrl: "",
  },
  {
    //mary's children
    id: 58,
    name: "Paul Zandonda Jr.",
    surname: "Phiri",
    gender: "M",
    dateOfBirth: "2012-02-17",
    parentIds: [5, 23],
    ImageUrl: "",
  },
  {
    //mary's children
    id: 59,
    name: "Joseph",
    surname: "Phiri",
    gender: "M",
    dateOfBirth: "2012-02-17",
    parentIds: [5, 23],
    ImageUrl: "",
  },
  {
    //bridget's children
    id: 60,
    name: "Lydia Vunozi",
    surname: "Banda",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [6, 24],
    ImageUrl: "",
  },
  {
    //bridget's children
    id: 61,
    name: "Phylls Lavu",
    surname: "Banda",
    gender: "M",
    dateOfBirth: "2014-09-30",
    parentIds: [6, 24],
    ImageUrl: "",
  },
  {
    //bridget's children
    id: 62,
    name: "Bridget",
    surname: "Banda",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [6, 24],
    ImageUrl: "",
  },
  {
    //bridget's children
    id: 63,
    name: "Amon",
    surname: "Banda",
    gender: "M",
    dateOfBirth: "2014-09-30",
    parentIds: [6, 24],
    ImageUrl: "",
  },
  {
    //bridget's children
    id: 64,
    name: "Mafunase",
    surname: "Banda",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [6, 24],
    ImageUrl: "",
  },
  {
    //bridget's children
    id: 65,
    name: "Kumbi",
    surname: "Banda",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [6, 24],
    ImageUrl: "",
  },
  {
    //mirriam's children
    id: 66,
    name: "Teddy",
    surname: "Pule",
    gender: "M",
    dateOfBirth: "2014-09-30",
    parentIds: [14, 26],
    ImageUrl: "",
  },
  {
    //mirriam's children
    id: 67,
    name: "Nancy",
    surname: "Hapaku",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [7, 26],
    ImageUrl: "",
  },
  {
    //mirriam's children
    id: 68,
    name: "Chrispine Jr.",
    surname: "Hapaku",
    gender: "M",
    dateOfBirth: "2014-09-30",
    parentIds: [7, 26],
    ImageUrl: "",
  },
  {
    //Julien's children
    id: 69,
    name: "Barbara Silungwe",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "2014-09-30",
    parentIds: [8, 28],
    ImageUrl: "",
  },
  {
    //Julien's children
    id: 70,
    name: "Lawrence Chama",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "2014-09-30",
    parentIds: [8, 28],
    ImageUrl: "",
  },
  {
    // dailess's children
    id: 71,
    name: "Paxina",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [9, 29],
    ImageUrl: "",
  },
  {
    //dailess's children
    id: 72,
    name: "Shiela",
    surname: "Ngonga",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [9, 30],
    ImageUrl: "",
  },
  {
    //diailess's children
    id: 73,
    name: "Henry",
    surname: "Ngonga",
    gender: "M",
    dateOfBirth: "2014-09-30",
    parentIds: [9, 30],
    ImageUrl: "",
  },
  {
    //violet's children
    id: 74,
    name: "Mercy",
    surname: "Filalo",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [10, 31],
    ImageUrl: "",
  },
  {
    //violet's children
    id: 75,
    name: "Jack",
    surname: "Banda",
    gender: "M",
    dateOfBirth: "2014-09-30",
    parentIds: [10, 32],
    ImageUrl: "",
  },
  {
    //violet's children
    id: 76,
    name: "Lwiza",
    surname: "Banda",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [10, 32],
    ImageUrl: "",
  },
  {
    //justina's children
    id: 77,
    name: "Sandra",
    surname: "Sakala",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [11, 33],
    ImageUrl: "",
  },
  {
    //justina's children
    id: 78,
    name: "Precious",
    surname: "Sakala",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [11, 33],
    ImageUrl: "",
  },
  {
    //justina's children
    id: 79,
    name: "Jacob",
    surname: "Sakala",
    gender: "M",
    dateOfBirth: "2014-09-30",
    parentIds: [11, 33],
    ImageUrl: "",
  },
  {
    //justina's children
    id: 80,
    name: "Emmanuel",
    surname: "Sakala",
    gender: "M",
    dateOfBirth: "2014-09-30",
    parentIds: [11, 33],
    ImageUrl: "",
  },
  {
    //monica's children
    id: 81,
    name: "Raymond",
    surname: "Kashinka",
    gender: "M",
    dateOfBirth: "2014-09-30",
    parentIds: [12, 34],
    ImageUrl: "",
  },
  {
    //monica's children
    id: 82,
    name: "Diniwe",
    surname: "needInfo",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [12, 35],
    ImageUrl: "",
  },
  {
    //monica's children
    id: 83,
    name: "Musonda",
    surname: "Mwasha",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [12, 130],
    ImageUrl: "",
  },
  {
    //susan's children
    id: 84,
    name: "Dalitso",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "2014-09-30",
    parentIds: [13, 36],
    ImageUrl: "",
  },
  {
    //susan's children
    id: 85,
    name: "Luzango",
    surname: "Siame",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [13, 37],
    ImageUrl: "",
  },
  {
    //susan's children
    id: 86,
    name: "Mable",
    surname: "Siame",
    gender: "F",
    dateOfBirth: "2014-09-30",
    parentIds: [13, 37],
    ImageUrl: "",
  },
  {
    //joe's children
    id: 87,
    name: "Sarah",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "2014-02-17",
    parentIds: [14, 38],
    ImageUrl: "",
  },
  {
    //joe's children
    id: 88,
    name: "Rachel",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "2014-05-08",
    parentIds: [14, 38],
    ImageUrl: "",
  },
  {
    //Lydia's children james mambo's great grandchildren
    id: 89,
    name: "Tom",
    surname: "needInfo",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [60],
    ImageUrl: "",
  },
  {
    //Lydia's children james mambo's great grandchildren
    id: 90,
    name: "Jessica",
    surname: "needInfo",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [60],
    ImageUrl: "",
  },
  {
    //Lydia's children james mambo's great grandchildren
    id: 91,
    name: "Bernard",
    surname: "needInfo",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [60],
    ImageUrl: "",
  },
  {
    //Bridget's children james mambo's great grandchildren
    id: 92,
    name: "Kahalu",
    surname: "Chirambu",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [62],
    ImageUrl: "",
  },
  {
    //Bridget's children james mambo's great grandchildren
    id: 93,
    name: "Nkisu",
    surname: "Chirambu",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [62],
    ImageUrl: "",
  },
  {
    //Bridget's children james mambo's great grandchildren
    id: 94,
    name: "Arian Nsombo",
    surname: "Chirambu",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [62],
    ImageUrl: "",
  },
  {
    //Mafunase's children james mambo's great grandchildren
    id: 95,
    name: "Twapelwa",
    surname: "needInfo",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [64],
    ImageUrl: "",
  },
  {
    //Amon's children james mambo's great grandchildren

    id: 96,
    name: "Amanda",
    surname: "Banda",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [63],
    ImageUrl: "",
  },
  {
    //Amon's children james mambo's great grandchildren

    id: 97,
    name: "Amara",
    surname: "Banda",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [63],
    ImageUrl: "",
  },

  {
    //Lwiza's children james mambo's great grandchildren

    id: 98,
    name: "Faith",
    surname: "needInfo",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [76],
    ImageUrl: "",
  },
  {
    //Barbra's children james mambo's great grandchildren

    id: 99,
    name: "James",
    surname: "needInfo",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [69],
    ImageUrl: "",
  },
  {
    //Barbra's children james mambo's great grandchildren

    id: 100,
    name: "Ruth",
    surname: "needInfo",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [69],
    ImageUrl: "",
  },
  {
    //Barbra's children james mambo's great grandchildren

    id: 101,
    name: "Kondwani",
    surname: "needInfo",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [69],
    ImageUrl: "",
  },
  {
    //Barbra's children james mambo's great grandchildren

    id: 102,
    name: "Dumisani",
    surname: "Njovu",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [69],
    ImageUrl: "",
  },
  {
    //Barbra's children james mambo's great grandchildren

    id: 103,
    name: "Blessing",
    surname: "Njovu",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [69],
    ImageUrl: "",
  },
  {
    //Paxina's children james mambo's great grandchildren

    id: 104,
    name: "Clive",
    surname: "needInfo",
    gender: "M",
    dateOfBirth: "2014-05-08",
    parentIds: [71],
    ImageUrl: "",
  },
  {
    //Paxina's children james mambo's great grandchildren

    id: 105,
    name: "Gift",
    surname: "needInfo",
    gender: "M",
    dateOfBirth: "2014-05-08",
    parentIds: [71],
    ImageUrl: "",
  },
  {
    //Paxina's children james mambo's great grandchildren

    id: 106,
    name: "Sante",
    surname: "needInfo",
    gender: "M",
    dateOfBirth: "2014-05-08",
    parentIds: [71],
    ImageUrl: "",
  },
  {
    //shepherd's children james mambo's great grandchildren

    id: 107,
    name: "Ethan",
    surname: "Mambo",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [55],
    ImageUrl: "",
  },
  {
    //shepherd's children james mambo's great grandchildren

    id: 108,
    name: "Freya",
    surname: "Mambo",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [55],
    ImageUrl: "",
  },
  {
    //James' children james mambo's great grandchildren

    id: 110,
    name: "Mary",
    surname: "Phiri",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [57],
    ImageUrl: "",
  },
  {
    //James' children james mambo's great grandchildren

    id: 111,
    name: "Makazo",
    surname: "Phiri",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [57],
    ImageUrl: "",
  },
  {
    //James' children james mambo's great grandchildren

    id: 112,
    name: "Zwitsa",
    surname: "Phiri",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [57],
    ImageUrl: "",
  },
  {
    //James' children james mambo's great grandchildren

    id: 106,
    name: "Yamika",
    surname: "Phiri",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [57],
    ImageUrl: "",
  },
  {
    //Sandra's children james mambo's great grandchildren

    id: 114,
    name: "Thato",
    surname: "Liemisa",
    gender: "M",
    dateOfBirth: "2018-09-08",
    parentIds: [77],
    ImageUrl: "",
  },
  {
    //Sandra's children james mambo's great grandchildren

    id: 115,
    name: "Tsepo",
    surname: "Liemisa",
    gender: "M",
    dateOfBirth: "2021-02-02",
    parentIds: [77],
    ImageUrl: "",
  },
  {
    //Precious' children james mambo's great grandchildren

    id: 116,
    name: "Patrick Jones",
    surname: "needInfo",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [78],
    ImageUrl: "",
  },
  {
    //Precious' children james mambo's great grandchildren
    id: 117,
    name: "Jackline Victoria",
    surname: "needInfo",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [78],
    ImageUrl: "",
  },
  {
    //Jacob's children james mambo's great grandchildren
    id: 118,
    name: "Jeremiah",
    surname: "Sakala",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [79],
    ImageUrl: "",
  },
  {
    //Jacob's children james mambo's great grandchildren
    id: 119,
    name: "Jacob Jr",
    surname: "Sakala",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [79],
    ImageUrl: "",
  },
  {
    //Chama's children james mambo's great grandchildren
    id: 120,
    name: "Genesis",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [70],
    ImageUrl: "",
  },
  {
    //Chama's children james mambo's great grandchildren
    id: 121,
    name: "Ziche",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [70],
    ImageUrl: "",
  },
  {
    //Chama's children james mambo's great grandchildren
    id: 122,
    name: "Yamika",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [70],
    ImageUrl: "",
  },
  {
    //Chama's children james mambo's great grandchildren
    id: 123,
    name: "Zara",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [70],
    ImageUrl: "",
  },
  {
    //Masauso's children james mambo's great grandchildren
    id: 124,
    name: "Joseph",
    surname: "Mwanza",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [48],
    ImageUrl: "",
  },
  {
    //Masauso's children james mambo's great grandchildren
    id: 125,
    name: "Julien",
    surname: "Mwanza",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [48],
    ImageUrl: "",
  },
  {
    //Joseph's children james mambo's great grandchildren
    id: 126,
    name: "Luthando Joel",
    surname: "Phiri",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [59],
    ImageUrl: "",
  },
  {
    //Joseph's children james mambo's great grandchildren
    id: 127,
    name: "Dumisani Levi",
    surname: "Phiri",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [59],
    ImageUrl: "",
  },
  {
    //Zandonda's children james mambo's great grandchildren
    id: 128,
    name: "Mary Kai",
    surname: "Phiri",
    gender: "F",
    dateOfBirth: "0000",
    parentIds: [58],
    ImageUrl: "",
  },
  {
    //Zandonda's children james mambo's great grandchildren
    id: 129,
    name: "James Rai",
    surname: "Phiri",
    gender: "M",
    dateOfBirth: "0000",
    parentIds: [58],
    ImageUrl: "",
  },
];
export default familyData;
