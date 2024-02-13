const songList = [
  "Alan Walker - Alone",
  "Alan Walker - Unity",
  "Alan Walker - On My Way",
  "Marsmello - Happier",
  "iLLenium - Take Away",
  "Cash Cash - Hero",
  "One Republic - Conting Stars",
  "Cash Cash - Take Me Home",
  "ZAYN - Dusk Till Dawn",
  "Maroon5 - Memories",
  "Maroon5 - Girls Like You",
  "One Direction - Story Of My Live",
  "Alan Walker - Spectre",
  "BANNERS - Someone to You",
  "Lewis Cipaldi - Someone To You [Slowed Down]",
  "Ava Max - Into Your Arm's",
  "NCS - Heroes To Night",
  "Fat Rat - Well Meet Again",
  "Pamungkas - To The Bone",
  "Anne Marie - 2002",
  "Andra And Backbone - Sempurna",
  "Daun Jatuh - Resah Jadi Luka",
  "Miselia - Akhir Tak bahagia",
  "HONNE - Location Unknown",
  "Clean Bandit,Demi Lovato - Solo",
  "Runtuh - Feby Putri ft.Fiersa",
  "Billie Elish Feat Khalid - Lovely",
  "Nidji - Laskar Pelangi [Rawi Beat]",
  "Chainsmokers - All We Know",
  "Abdurrahman M - Al Ankabut",
  "Alan Walker - End Of Time",
  "Katy Perry - Unconditional",
  "Demi Lovato - Skyscraper",
  "Ed Sheeran - Beautiful People",
  "Brynn Elliot - Beautiful Things",
  "Olivia Rodrigo - Happier",
  "Gryffin ft.Elley - Tie Me Down",
  "Ed Sheeran - Perfect",
  "Ed Sheeran - Shape Of You",
  "Justin Bieber - Hard2FaceReality",
  "Alan Waker - All Falls Down",
  "Olivia Rodrigo - Happier",
  "James Arthur - Rewrite The Stars",
  "James A - Say You Want Let Go",
  "James A - Falling Like The Stars",
  "Adele - Easy On Me",
  "Avici - Without You",
  "Loving You is a Losing Game",
  "Jason Derulo - Savage Love",
  "Billie Eilis & Khalid - Lovely",
  "Tulus - Monokrom",
  "Tulus - Monokrom [Slowed & Reverb]",
  "Tulus - Hati Hati Di Jalan",
  "Tulus - Manusia Kuat",
  "Mitty Zasia - Sesuatu Di Jogja",
  "Last Child - Duka",
  "Virgoun ft.Audy - Selamat Tinggal",
  "Neck Deep - Wish You Were Here",
  "AlifieCastley - Teenage Mona Lisa",
  "James Arthur - Can I Be Him",
  "Demi Lovato - Heart Attack",
  "Troye Sivan - Angel Baby",
  "Dylan Brady - Still Into You",
  "Rachel Platten - Fight Song",
  "Clean Bandit - Symphony",
  "The Weekend - Save Your Tear",
  "Shawn Mendes - Treat You Better",
  "Rihanna - Diamond",
  "Chard Overstreat - Hold On",
  "Alan Walker - Tired",
  "Abdurrahman M - Al Muzzamil",
  "Avicii - The Night",
  "Avicii - Tge Night Cv.Chlara",
  "Glass Animals - Heat Waves",
  "Dean Lewis - Be Alright",
  "Vierra - Seandainya",
  "Maroon5 - Payphone",
  "Shawn Mendes - Treat You Better",
  "NIKI - Every Summertime",
  "Dere - Kota",
  "Enda - Maafkan aku",
  "R. CITY - Locked Away",
  "Ed Sheeran - Happier",
  "One Direction - Night Changes",
  "Mitty Zasia - Sebuah Kisah Klasik",
  "Mitty Zasia - Melukis Senja",
  "Joji - Glimpse of Us",
  "Feby Putri - Usik",
  "Feby Putri - Liar Angin",
  "Paul Partohap - P.S I Love you",
  "Justin Bieber - Cold Water",
  "Eenie Meenie - Ray & Barron Cov",
  "Tulus - Pamit",
  "Tulus - Diri",
  "Tulus - Gajah",
  "Keisya Levronka - Tak Ingin Usai",
  "Lewis C - Someone Loved You",
  "RexOrange - THE SHADE",
  "Alfie ft.Aiden - Teenage Monalisa",
  "James Arthur - Say You Won't Let Go [ slowed ]",
  "James Arthur - Can I Be Him? [ slowed ]",
  "James Arthur - Rewrite The Stars [ slowed ]",
  "Last Child - Ketidakrelaanku",
  "Preston Pablo - Flowers Need Rain",
  "Raissa Anggiani - Kau Rumahku",
  "Keisya Levronka - Tak Ingin Usai",
  "Vierra - Seandainya",
  "Rosie Darling - What A Confincing Illusion",
  "Raissa Anggiani - Lagi Lagi",
  "Mitty Zasia - Kusut",
  "Tulus - Nala",
  "Misellia - Akhir Tak Bahagia",
  "Rhianne - Somewhere Only We Know",
  "Yuji Ft.Putri Dahlia - Old Love",
  "Rosa Lim - Snap",
  "Rosa Lim - Snap [ Speed Up ]",
  "Selena Gomez - Love You To Love Me",
  "Chloe Adams - She Used To Be Mine",
  "One Direction - Right Now [ Speed Up ]",
  "One Direction - Right Now",
  "Seafret - Atlantis [ Speed Up ]",
  "Jordan Feliz - 180",
  "Brielle Von Hugel - The One That Got Away",
  "One Direction - 18",
  "One Direction - 18 [ Speed Up ]",
  "Babe Rexha x Katy Perry  - Empty X Unconditionally",
  "Babe Rexha - Empty",
  "Taylor Swift - Anti Hero",
  "Hurts So Good - Hurts So Good",
  "Armada - Mabuk Cinta [ Slowed ]",
  "Rizky Febian & Magnolya - Terlukis Indah",
  "Judika - Putus Atau Terus",
  "Maximilian - On My Mind",
  "Justin Bieber ft. Ed Sheeran - I Don't Care",
  "Katharine McPhee - Terrified [ Speed Up ]",
  "Taylor Swift - You Belong With Me",
  "Olivia Rodrigo - All I Want [ Speed Up ]",
  "Cash Cash - Take Me Home",
  "Call Me Karizma - F U Till I F U",
  "The Weekend - After Hours [ Speed Up ]",
  "JJD ft. Cecilia Gault - Vertigo",
  "Last Child For Revenge - Duka X Serana",
  "For Revenge - Serana [ Speed Up ]",
  "Post Malone, Swae Lee - Sunflower",
  "Aruma - Muak",
  "Keisya Levronka - Hidup Tanpamu",
  "Ruth B. - Dendelions",
  "James Arthur - Naked",
  "Ai Huguchi - Aku ma noko",
  "Feby Putri - Halu",
  "Denny Caknan - Kalih Welasku",
  "Cian Ducrot - I'll Be Waiting",
  "Mojiken Studio - A Space For The Unbound",
  "Jason Derulo - Secret Love Song",
  "James Arthur - Cars Outside",
  "Why Don't We - 8 Letters [ Speed Up ]",
  "Gryffin - After You",
  "Keenan Te - Scars",
  "Feby Putri - Kembali Pulang",
  "Guyon Waton X Denny Caknan - Sanes",
  "Denny Caknan - KLEBUS",
  "Illemium, Sasha Sloan - U & Me",
  "Kygo & Selena Gomez - It Ain't Me",
  "Alan Walker - Not You",
  "Denny Caknan X Happy Asmara - Satru",
  "Denny Caknan - Satru 2",
  "Gildcoustic - Nemen [ Speed Up ]",
  "Miqbal Ga ft.Siska Amanda - Dadi Siji",
  "Taylor Swift - Style",
  "Guyonwaton - Korban Janji",
  "Aftershine - Aku Ikhlas",
  "Denny Caknan - Katoyono Medot Janji",
  "Yura Yunita - Dunia Tipu Tipu",
  "Denny Caknan - Gak Pernah Cukup",
  "James Arthur - A Thousand Years",
  "Ghea Indrawati - Jiwa Yang Bersedih",
  "Taylor Swift - Blank Space",
  "Batas Senja - Nanti Kita Seperti Ini",
  "Guyon Waton - Dumes",
  "Jouzu Karakai no Takagi San - Hamabou no hana",
  "James Arthur - A Year Ago",
  "Olivia Rodrigo - Traitor",
  "Justin Bieber - Off My Face",
  "Taylor Swift - Fearless",
  "Taylor Swift - Cruel Summer",
  "Tulus - Jatuh Suka",
  "Noah - Separuh Aku",
  "Tulus - Gajah",
  "Tulus - Labirin",
  "Tulus - Interaksi",
  "Maroon 5 - Daylight",
  "Charlie Puth - Left And Right",
  "Oh Wonder - Landslide",
  "Nuu/Shawnii/Xeni - you'll get over it",
  "Woro Widowati - Ikhlas Ngenteni",
  "Taylor Swift - All Of The Girls You Love Before",
  "Siinamota - Young Girl A",
  "Taylor Swift - Love Story",
  "Denny Caknan - Gak Pernah Cukup",
  "James Arthur - A Thousand Years",
  "Ghea Indrawati - Jiwa Yang Bersedih",
  "Taylor Swift - Blank Space",
  "Batas Senja - Nanti Kita Seperti Ini",
  "Guyon Waton - Dumes",
  "Hamabou no hana - Hamabou no hana",
  "James Arthur - A Year Ago",
  "Olivia Rodrigo - Traitor",
  "Justin Bieber - Off My Face",
  "Taylor Swift - Fearless",
  "Taylor Swift - Cruel Summer",
  "Tulus - Jatuh Suka",
  "Noah - Separuh Aku",
  "Tulus - Gajah",
  "Tulus - Labirin",
  "Tulus - Interaksi",
  "Maroon 5 - Daylight",
  "Charlie Puth - Left And Right",
  "Oh Wonder - Landslide",
  "Nuu/Shawnii/Xeni - you'll get over it",
  "Woro Widowati - Ikhlas Ngenteni",
  "Taylor Swift - All Of The Girls You Love Before",
  "Siinamota - Young Girl A",
  "Taylor Swift - Love Story",
  "Denny Caknan - Gak Pernah Cukup",
  "Arash Buana - We'll Be Okay, For Today",
  "Frawley - If I Don't Laugh, I'll Cry",
  "Nadhif Basalamah - Penjaga Hati",
  "NIKI - lowkey",
  "Troye Sivan - Strawberry And Cigarrates"
];

const separatedSong = songList.map(song => {
 const [artist, title] = song.split(' - ');
 return { artist, title };
});