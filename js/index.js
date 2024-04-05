const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function () {


    if (this.checked) {
      checkboxes.forEach(otherCheckbox => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
    updateSelectedYear(); // Perbarui nilai selectedYear setiap kali ada perubahan pada checkbox

  });
});


let dateOfBirth = document.querySelector("input[type='date']");
const updateSelectedYear = () => {
  const checked = document.querySelectorAll('input[type="checkbox"]:checked');
  selectedYear = Array.from(checked).map(checkbox => checkbox.value);
};


const monthNames = [
  "Januari", "Februari", "Maret",
  "April", "Mei", "June", "Juli",
  "Agustus", "September", "Oktober",
  "November", "Desember"
];
const findZodiac = (event) => {
  event.preventDefault();
  updateSelectedYear(); // Panggil fungsi updateSelectedYear saat halaman dimuat
  dateOfBirth = new Date(dateOfBirth.value);
  const month = dateOfBirth.getMonth();
  const getMonth = monthNames[dateOfBirth.getMonth()];
  const day = dateOfBirth.getDate();
  const year = dateOfBirth.getFullYear();
  let zodiacSign = "";
  let zodiacDate = "";
  let age = new Date().getFullYear() - year;
  let textAge = `${age} Tahun`;
  let Personality = "";
  let Future = "";

let suffix = "";
if (day === 1 || day === 21 || day === 31) {
  suffix = "st";
} else if (day === 2 || day === 22) {
  suffix = "nd";
} else if (day === 3 || day === 23) {
  suffix = "rd";
} else {
  suffix = "th";
}

const date = `${day} ${getMonth} ${year}`;

  if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
    zodiacSign = "aquarius";
    zodiacDate = "20 Januari — 18 Februari";
    Personality = "Anda adalah Inovator yang kreatif, mandiri, dan idealis. Anda senang menciptakan perubahan dan berkontribusi pada masyarakat."
    Future = (selectedYear == 10) ? `Dalam 10 tahun mendatang, kamu akan menemukan bahwa visi dan ide-ide revolusionermu membawa dampak yang signifikan dalam masyarakat. Kamu akan menjadi agen perubahan yang kuat dan mempengaruhi banyak orang di sekitarmu. Jadilah pembaharu yang berani dan teruslah berjuang untuk keadilan sosial!` 
    : (selectedYear == 20) ? `Dalam 20 tahun ke depan, kamu akan menemukan bahwa kepribadianmu yang unik dan kreativitasmu membawa kesuksesan dalam berbagai bidang. Kamu akan menikmati kebebasan untuk mengekspresikan diri dan menjalani kehidupan sesuai dengan aturanmu sendiri. Tetaplah asli dan teruslah menginspirasi orang lain dengan kepribadianmu yang berbeda!`
    : (selectedYear == 30)?`Dalam 30 tahun mendatang, kamu akan menemukan bahwa kepemimpinanmu yang inklusif dan pemikiranmu yang inovatif membawa perubahan positif yang besar dalam dunia. Kamu akan menjadi sumber inspirasi bagi generasi mendatang untuk berani bermimpi besar dan mengubah dunia menjadi tempat yang lebih baik. Teruslah berjuang untuk hak asasi manusia dan keadilan!`
    : (selectedYear == 50)?`Di masa tua nanti, kamu akan melihat bahwa ide-ide dan kontribusimu telah meninggalkan jejak yang tak terhapuskan dalam sejarah. Nikmati momen-momen bersama keluarga dan teman-teman, dan teruslah menjadi pilar kebaikan dalam komunitasmu!`
    : ""

  } else if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) {
    zodiacSign = "pisces";
    zodiacDate = "19 Februari — 20 Maret";
    Personality = "Anda adalah Intuitif, imajinatif, dan emosional. Anda memiliki imajinasi yang kuat dan kepekaan terhadap perasaan orang lain."
    Future = (selectedYear == 10) ? `Dalam 10 tahun mendatang, kamu akan menemukan bahwa intuisimu yang kuat dan empatimu membawa kamu ke arah yang tepat dalam hidup. Kamu akan menemukan kedamaian dalam kreativitasmu dan kebahagiaan dalam hubungan yang mendalam. Jadilah terbuka terhadap perasaanmu dan jangan ragu untuk mengejar impianmu!` 
    : (selectedYear == 20) ? `Dalam 20 tahun ke depan, kamu akan menemukan bahwa kepekaanmu terhadap dunia dan jiwa yang dalam membawa kamu ke perjalanan spiritual yang mendalam. Kamu akan menemukan makna yang lebih besar dalam kehidupanmu dan merasa terhubung dengan alam semesta. Teruslah bermeditasi dan mencari kedamaian dalam dirimu sendiri!`
    : (selectedYear == 30)?`Dalam 30 tahun mendatang, kamu akan menemukan bahwa keberanianmu untuk membuka diri dan mengasihi orang lain membawa kebahagiaan yang sejati. Kamu akan menjadi teladan bagi empati dan belas kasihan, menginspirasi orang lain untuk melakukan perbuatan baik. Jadilah cahaya yang menerangi kegelapan dan teruslah menjadi sumber kasih sayang bagi semua yang kamu temui!`
    : (selectedYear == 50)?`Di masa tua nanti, kamu akan merasa puas dengan kehidupan yang telah kamu jalani dan pengaruh positif yang telah kamu miliki terhadap dunia. Nikmati momen-momen bersama orang-orang yang kamu cintai, dan teruslah menyebarkan cinta dan kedamaian di sekitarmu!`
    : ""

  } else if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) {
    zodiacSign = "aries";
    zodiacDate = "21 Maret — 19 April";
    Personality = "Anda adalah Pemimpin yang berani dan bersemangat. Anda suka mengambil inisiatif dan penuh energi."
    Future = (selectedYear == 10) ? `Dalam 10 tahun mendatang, kamu akan menemukan banyak kesempatan di jalur kariermu. Dengan keberanian dan tekadmu, kamu akan mencapai banyak tujuan yang kamu impikan. Pastikan untuk tetap fokus dan pantang menyerah!` 
    : (selectedYear == 20) ? `Dalam 20 tahun ke depan, kamu akan menemukan stabilitas dan kebahagiaan yang luar biasa dalam hubunganmu. Keuanganmu akan berjalan lancar dan kreasi-kecreasianmu akan berkembang. Jaga hubunganmu dengan orang-orang terdekat dan jangan ragu untuk mengejar impianmu!`
    : (selectedYear == 30)?` Dalam 30 tahun mendatang, kamu akan menemukan kedamaian dalam dirimu dan menjadi sumber inspirasi bagi orang lain. Kehidupanmu akan penuh dengan makna dan tujuan. Ingatlah untuk selalu bersyukur dan tetap terbuka terhadap perubahan!`
    : (selectedYear == 50)?` Di masa tua nanti, kamu akan merasa bangga dengan segala pencapaian dan warisan yang kamu tinggalkan. Kamu akan merasa puas dengan kehidupan yang kamu jalani. Nikmati momen-momen bersama keluarga dan teman-teman terdekat!`
    : ""
  } else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) {
    zodiacSign = "taurus";
    zodiacDate = "20 April — 20 Mei";
    Personality = "Anda adalah Stabil, praktis, dan memiliki kesetiaan yang dalam. Anda menikmati keindahan dan kenyamanan."
    Future = (selectedYear == 10) ? `Dalam 10 tahun ke depan, kamu akan menemukan stabilitas finansial dan kemajuan yang signifikan dalam kariermu. Hubunganmu akan semakin kuat dan penuh cinta. Jangan ragu untuk mengejar ambisi dan impianmu!` 
    : (selectedYear == 20) ? `Dalam 20 tahun mendatang, kamu akan menemukan keseimbangan antara kehidupan pribadi dan profesionalmu. Kamu akan menikmati kegiatan kreatif dan artistik. Jadikan setiap hari sebagai kesempatan untuk berkembang dan belajar!`
    : (selectedYear == 30)?`Dalam 30 tahun ke depan, kamu akan menemukan kedamaian dalam keluargamu dan kebahagiaan dalam kegiatan spiritualmu. Jaga kesehatan dan lakukan hal-hal yang membuatmu bahagia!`
    : (selectedYear == 50)?`Di masa tua nanti, kamu akan menikmati kehidupan yang nyaman dan penuh kepuasan. Hubunganmu dengan orang-orang terdekat akan semakin kuat. Nikmati setiap momen dan bersyukurlah atas segala anugerah yang kamu terima!`
    : ""
  } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
    zodiacSign = "gemini";
    zodiacDate = "21 Mei — 20 Juni";
    Personality = "Anda adalah Komunikator yang cerdas dan fleksibel. Anda senang menjelajahi hal-hal baru dan memiliki daya adaptasi yang baik."
    Future = (selectedYear == 10) ? `Dalam 10 tahun mendatang, kamu akan menemukan dirimu lebih terbuka terhadap berbagai ide dan peluang baru. Komunikasimu yang lincah akan membantumu meraih sukses dalam karier dan hubungan sosialmu. Jangan ragu untuk terus mengembangkan kreativitasmu!` 
    : (selectedYear == 20) ? `Dalam 20 tahun ke depan, kamu akan menemukan bahwa kecerdasanmu dan keingintahuanmu membawa kesuksesan dalam banyak hal. Jaga keseimbangan antara kehidupan pribadi dan profesionalmu, dan jangan ragu untuk mengejar impian yang besar!`
    : (selectedYear == 30)?`Dalam 30 tahun mendatang, kamu akan menemukan dirimu lebih matang secara emosional dan memiliki wawasan yang lebih dalam tentang kehidupan. Jadikanlah setiap pengalaman sebagai pelajaran berharga dan teruslah berkembang!`
    : (selectedYear == 50)?`Di masa tua nanti, kamu akan merasa puas dengan kehidupan yang penuh dengan beragam pengalaman dan petualangan. Tetaplah terhubung dengan orang-orang terdekat dan nikmati kehidupan dengan penuh semangat!`
    : ""
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 22)) {
    zodiacSign = "cancer";
    zodiacDate = "21 Juni — 22 Juli ";
    Personality = "Anda adalah Penuh perhatian, sensitif, dan emosional. Anda sangat menghargai hubungan dan memiliki intuisi yang kuat."
    Future = (selectedYear == 10) ? `Dalam 10 tahun mendatang, kamu akan menemukan dirimu lebih fokus pada hubungan dan keluarga. Emosimu yang kuat akan membantumu menjalin ikatan yang erat dengan orang-orang terdekat. Jaga kesehatan mentalmu dan jangan ragu untuk mengejar impianmu!` 
    : (selectedYear == 20) ? `Dalam 20 tahun ke depan, kamu akan menemukan bahwa perasaan sensitifmu adalah kekuatan yang besar. Kamu akan menikmati kedamaian dan stabilitas dalam hubungan pribadimu. Jadikanlah rumahmu tempat yang nyaman dan hangat bagi orang-orang yang kamu cintai!`
    : (selectedYear == 30)?`Dalam 30 tahun mendatang, kamu akan menemukan dirimu lebih bijaksana dalam menghadapi tantangan hidup. Kebahagiaanmu akan datang dari pengalaman-pengalaman sederhana dan momen-momen bersama keluarga. Teruslah bersinar dengan kebaikanmu!`
    : (selectedYear == 50)?`Di masa tua nanti, kamu akan merasa bahagia dengan segala pencapaian dan kenangan yang telah kamu miliki. Jaga hubunganmu dengan keluarga dan nikmati setiap momen bersama. Hiduplah dengan penuh cinta dan kasih sayang!`
    : ""
  } else if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) {
    zodiacSign = "leo";
    zodiacDate = "23 Juli — 22 Agustus";
    Personality = "Anda adalah Pemimpin yang percaya diri, berani, dan karismatik. Anda suka menjadi pusat perhatian dan memiliki ambisi yang besar."
    Future = (selectedYear == 10) ? `Dalam 10 tahun mendatang, kamu akan menemukan dirimu semakin percaya diri dan bersemangat dalam mengejar tujuan kariermu. Bakatmu yang kreatif akan bersinar terang, dan kamu akan menjadi sumber inspirasi bagi banyak orang di sekitarmu. Teruslah mengejar impianmu dengan penuh semangat!` 
    : (selectedYear == 20) ? `Dalam 20 tahun ke depan, kamu akan menemukan dirimu semakin berkembang secara pribadi dan profesional. Kehidupan sosialmu akan semakin ceria, dan kamu akan dikelilingi oleh orang-orang yang mendukung. Jadilah pemberani dan percaya pada dirimu sendiri!`
    : (selectedYear == 30)?` Dalam 30 tahun mendatang, kamu akan menemukan kedamaian dalam dirimu dan menyadari kekuatan sejati yang kamu miliki. Keberhasilanmu akan datang dari ketulusan dan kerja kerasmu. Tetaplah rendah hati dan bersyukur atas segala hal yang kamu miliki!`
    : (selectedYear == 50)?`Di masa tua nanti, kamu akan melihat betapa berwarnanya kehidupan yang telah kamu jalani. Prestasimu akan menjadi warisan yang akan dikenang oleh banyak orang. Nikmati setiap momen dan teruslah menyinari dunia dengan kebaikanmu!`
    : ""
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    zodiacSign = "virgo";
    zodiacDate = "23 Agustus  — 22 September ";
    Personality = "Anda adalah Perfeksionis yang analitis, praktis, dan berdedikasi. Anda cenderung rajin dan memperhatikan detail."
    Future = (selectedYear == 10) ? `Dalam 10 tahun mendatang, kamu akan menemukan bahwa ketelitianmu dan dedikasimu membawa kesuksesan dalam berbagai aspek kehidupanmu. Kesehatanmu akan menjadi prioritas, dan kamu akan menemukan keseimbangan antara kerja dan waktu luang. Jadilah teladan bagi orang-orang di sekitarmu!` 
    : (selectedYear == 20) ? `Dalam 20 tahun ke depan, kamu akan menemukan dirimu semakin terorganisir dan efisien dalam mengejar tujuanmu. Kamu akan menikmati kehidupan yang terstruktur dan stabil, dengan hubungan yang mendukung dan penuh cinta. Tetaplah konsisten dan tetaplah berusaha untuk menjadi yang terbaik!`
    : (selectedYear == 30)?`Dalam 30 tahun mendatang, kamu akan menemukan kedamaian dalam menjalani hidupmu sesuai dengan prinsip-prinsipmu. Kemampuan analitis dan kecermatanmu akan membawa kesuksesan dan penghargaan. Jaga kesehatanmu dan tetaplah bersyukur atas segala berkah yang kamu terima!`
    : (selectedYear == 50)?`Di masa tua nanti, kamu akan merasa puas dengan segala pencapaian dan kontribusimu yang telah membuat dunia menjadi tempat yang lebih baik. Nikmati momen-momen bersama keluarga dan teman-teman, dan lanjutkan warisan positifmu untuk generasi berikutnya!`
    : ""
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    zodiacSign = "libra";
    zodiacDate = "23 September — 22 Oktober";
    Personality = "Anda adalah Adil, diplomatik, dan suka kedamaian. Anda senang menciptakan keseimbangan dan harmoni di sekitar Anda."
    Future = (selectedYear == 10) ? `Dalam 10 tahun mendatang, kamu akan menemukan dirimu semakin berfokus pada keseimbangan dan keadilan dalam kehidupanmu. Hubunganmu akan menjadi pusat perhatian, dan kamu akan menemukan kedamaian dalam kebersamaan dengan orang-orang terdekat. Teruslah memperjuangkan perdamaian dan kebaikan!` 
    : (selectedYear == 20) ? `Dalam 20 tahun ke depan, kamu akan menemukan bahwa keindahan dan harmoni menjadi bagian penting dari kehidupanmu. Bakatmu dalam seni dan kreativitas akan berkembang, dan kamu akan menikmati momen-momen yang penuh inspirasi. Tetaplah berusaha untuk menciptakan keindahan di sekelilingmu!`
    : (selectedYear == 30)?`Dalam 30 tahun mendatang, kamu akan menemukan kedamaian dalam dirimu dan menjadi penghubung yang kuat bagi orang-orang di sekitarmu. Kepekaanmu terhadap perasaan orang lain akan membawa kedekatan yang lebih dalam dalam hubunganmu. Jadilah sumber kebahagiaan dan cinta bagi semua orang yang kamu temui!`
    : (selectedYear == 50)?`Di masa tua nanti, kamu akan merasa bangga dengan bagaimana kamu telah memengaruhi dunia dengan kebaikan dan keadilanmu. Nikmati momen-momen bersama keluarga dan teman-teman, dan teruslah menjadi teladan bagi semua orang di sekitarmu!`
    : ""
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) {
    zodiacSign = "scorpio";
    zodiacDate = "23 Oktober  — 21 November";
    Personality = "Anda adalah Misterius, kuat, dan penuh gairah. Anda memiliki intuisi yang kuat dan keinginan untuk memahami hal-hal yang tersembunyi."
    Future = (selectedYear == 10) ? `Dalam 10 tahun mendatang, kamu akan menemukan bahwa kekuatan dan keteguhanmu membawa perubahan positif dalam kehidupanmu. Intuisimu yang kuat akan membantumu menghadapi tantangan dengan percaya diri. Jangan ragu untuk mengejar tujuanmu dengan tekad yang kuat!` 
    : (selectedYear == 20) ? `Dalam 20 tahun ke depan, kamu akan menemukan kedalaman emosional yang lebih besar dalam dirimu dan hubunganmu. Kamu akan menikmati transformasi positif dalam kehidupan pribadi dan kariermu. Jadilah terbuka terhadap perubahan dan tetaplah setia pada dirimu sendiri!`
    : (selectedYear == 30)?` Dalam 30 tahun mendatang, kamu akan menemukan bahwa kekuatanmu sebagai pemimpin membawa pengaruh yang positif bagi banyak orang di sekitarmu. Kebijaksanaanmu dan empatimu akan menjadi sumber inspirasi bagi orang lain. Teruslah berjuang untuk keadilan dan kebenaran!`
    : (selectedYear == 50)?`Di masa tua nanti, kamu akan melihat bahwa perjuanganmu telah membawa dampak yang luar biasa bagi dunia. Nikmati momen-momen bersama keluarga dan teman-teman, dan teruslah menginspirasi orang-orang di sekitarmu dengan keberanianmu!`
    : ""
  } else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) {
    zodiacSign = "sagittarius";
    zodiacDate = "22 November — 21 Desember";
    Personality = "Anda adalah Inovator yang kreatif, mandiri, dan idealis. Anda senang menciptakan perubahan dan berkontribusi pada masyarakat."
    Future = (selectedYear == 10) ? `Dalam 10 tahun mendatang, kamu akan menemukan dirimu semakin terbuka terhadap petualangan dan pengetahuan baru. Semangatmu yang penuh energi akan membawa kamu ke tempat-tempat yang menakjubkan dan kesempatan-kesempatan yang menarik. Jadilah penjelajah yang berani dan nikmati setiap momen petualanganmu!` 
    : (selectedYear == 20) ? ` Dalam 20 tahun ke depan, kamu akan menemukan bahwa impianmu semakin dekat untuk diwujudkan. Kamu akan menikmati kebebasan dan kemandirian dalam menjalani kehidupanmu. Tetaplah optimis dan teruslah mengejar visimu dengan semangat yang tak terbendung!`
    : (selectedYear == 30)?` Dalam 30 tahun mendatang, kamu akan menemukan kedalaman filosofis dan spiritual yang lebih besar dalam dirimu. Pengalaman-pengalaman hidupmu akan mengajarkanmu banyak hal tentang arti sejati dari kehidupan. Teruslah menjelajahi dunia dan jiwa-jiwa yang ada di dalamnya!`
    : (selectedYear == 50)?`Di masa tua nanti, kamu akan merasa puas dengan kehidupan yang penuh petualangan dan pengetahuan. Ceritakan kisah-kisahmu kepada generasi berikutnya dan teruslah menjadi sumber inspirasi bagi mereka yang berani bermimpi besar!`
    : ""
  } else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) {
    zodiacSign = "capricorn";
    zodiacDate = "22 Desember  — 19 Januari ";
    Personality = "Anda adalah Ambisius, tangguh, dan berdedikasi. Anda suka merencanakan masa depan Anda dan bekerja keras untuk mencapai tujuan Anda."
    Future = (selectedYear == 10) ? `Dalam 10 tahun mendatang, kamu akan menemukan bahwa ketekunan dan dedikasimu membawa kesuksesan yang luar biasa dalam kariermu. Keuanganmu akan stabil, dan kamu akan menemukan keamanan dalam kehidupan pribadimu. Tetaplah fokus pada tujuanmu dan jangan ragu untuk mengejar ambisi yang tinggi!` 
    : (selectedYear == 20) ? `Dalam 20 tahun ke depan, kamu akan menemukan bahwa kerja kerasmu membawa penghargaan yang layak. Kehidupan pribadimu akan berkembang dengan baik, dan kamu akan menemukan keseimbangan antara tanggung jawab dan kesenangan. Tetaplah tekun dan pantang menyerah dalam mencapai impianmu!`
    : (selectedYear == 30)?`Dalam 30 tahun mendatang, kamu akan menemukan kedamaian dalam dirimu dan kepuasan dalam pencapaian-pencapaianmu. Keberhasilanmu akan menginspirasi orang lain untuk mencapai hal-hal yang lebih besar. Tetaplah rendah hati dan berbagi keberkahan yang kamu miliki dengan orang lain!`
    : (selectedYear == 50)?`Di masa tua nanti, kamu akan merasa bangga dengan perjalanan hidupmu yang penuh dengan pencapaian dan integritas. Nikmati momen-momen bersama keluarga dan teman-teman, dan teruslah menjadi teladan bagi generasi berikutnya!`
    : ""
  }
  
    sessionStorage.setItem("zodiacSign", zodiacSign);
  sessionStorage.setItem("zodiacDate", zodiacDate);
  sessionStorage.setItem("age", textAge);
  sessionStorage.setItem("personal", Personality);
  sessionStorage.setItem("future", Future);
  sessionStorage.setItem("date", date);
  location.href = "./result.html"; // Arahkan ke halaman hasil
};