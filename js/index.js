let dateOfBirth = document.querySelector("input[type='date']");

const findZodiac = (event) => {
  event.preventDefault();
  dateOfBirth = new Date(dateOfBirth.value);
  const month = dateOfBirth.getMonth();
  const day = dateOfBirth.getDate();
  let zodiacSign = "";
  let zodiacDate = "";
  let Personality = "";
  let Future = "";

  if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
    zodiacSign = "aquarius";
    zodiacDate = "January 20th — February 18th";
    Personality = "Anda adalah Inovator yang kreatif, mandiri, dan idealis. Anda senang menciptakan perubahan dan berkontribusi pada masyarakat."
    Future = " Anda mungkin akan mengalami banyak perubahan dan inovasi dalam hidup Anda. Manfaatkan kecerdasan dan kreativitas Anda untuk mencapai tujuan yang lebih besar."
  } else if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) {
    zodiacSign = "pisces";
    zodiacDate = "February 19th — March 20th";
    Personality = "Anda adalah Intuitif, imajinatif, dan emosional. Anda memiliki imajinasi yang kuat dan kepekaan terhadap perasaan orang lain."
    Future =  "Anda mungkin akan mengalami perjalanan emosional dan kreatif. Manfaatkan intuisi dan imajinasi Anda untuk mencapai kedamaian dan kebahagiaan dalam kehidupan pribadi dan profesional Anda."
  } else if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) {
    zodiacSign = "aries";
    zodiacDate = "March 21 — April 19th";
    Personality = "Anda adalah Pemimpin yang berani dan bersemangat. Anda suka mengambil inisiatif dan penuh energi."
    Future = "Anda mungkin menemui perubahan besar dalam hidup Anda. Kesuksesan dalam karier dan hubungan pribadi bisa menjadi kunci."
  } else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) {
    zodiacSign = "taurus";
    zodiacDate = "April 20th — May 20th";
    Personality = "Anda adalah Stabil, praktis, dan memiliki kesetiaan yang dalam. Anda menikmati keindahan dan kenyamanan."
    Future = "Anda mungkin akan mengalami stabilitas finansial dan hubungan yang erat. Tetaplah fokus pada tujuan Anda dalam karier."
  } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
    zodiacSign = "gemini";
    zodiacDate = "May 21 — June 20th";
    Personality = "Anda adalah Komunikator yang cerdas dan fleksibel. Anda senang menjelajahi hal-hal baru dan memiliki daya adaptasi yang baik."
    Future = " Anda akan menghadapi banyak perubahan dan tantangan. Namun, ada peluang besar untuk mencapai kesuksesan dalam karier yang membutuhkan kreativitas."
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 22)) {
    zodiacSign = "cancer";
    zodiacDate = "June 21 —July 22";
    Personality =  "Anda adalah Penuh perhatian, sensitif, dan emosional. Anda sangat menghargai hubungan dan memiliki intuisi yang kuat."
    Future = " Anda mungkin akan mengalami fluktuasi emosional dan perubahan dalam hubungan. Namun, ada peluang besar untuk mencapai kedamaian dan kebahagiaan dalam kehidupan pribadi."

  } else if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) {
    zodiacSign = "leo";
    zodiacDate = "July 23rd — August 22";
    Personality = "Anda adalah Pemimpin yang percaya diri, berani, dan karismatik. Anda suka menjadi pusat perhatian dan memiliki ambisi yang besar."
    Future = "Kesuksesan besar dalam karier dan cinta bisa menjadi milik Anda. Tetaplah rendah hati dan jangan lupa untuk memberi perhatian kepada orang-orang di sekitar Anda."
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    zodiacSign = "virgo";
    zodiacDate = "August 23 — September 22nd";
    Personality = "Anda adalah Perfeksionis yang analitis, praktis, dan berdedikasi. Anda cenderung rajin dan memperhatikan detail."
    Future = " Anda mungkin akan mencapai kemajuan dalam karier dan kehidupan pribadi. Tetaplah fokus pada tujuan Anda dan jangan terlalu keras pada diri sendiri."
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    zodiacSign = "libra";
    zodiacDate = "September 23 — October 22";
    Personality = "Anda adalah Adil, diplomatik, dan suka kedamaian. Anda senang menciptakan keseimbangan dan harmoni di sekitar Anda."
    Future = "Anda mungkin akan menghadapi kesempatan baru dalam karier dan hubungan. Pertahankan keadilan dan kerja sama dalam segala hal." 
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) {
    zodiacSign = "scorpio";
    zodiacDate = "October 23rd — November 21";
    Personality = "Anda adalah Misterius, kuat, dan penuh gairah. Anda memiliki intuisi yang kuat dan keinginan untuk memahami hal-hal yang tersembunyi."
    Future = "Anda mungkin akan mengalami transformasi dalam hidup Anda. Manfaatkan kekuatan Anda untuk mencapai kesuksesan dan kedalaman dalam hubungan."
  } else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) {
    zodiacSign = "sagittarius";
    zodiacDate = "November 22 — December 21";
    Personality = "Anda adalah Inovator yang kreatif, mandiri, dan idealis. Anda senang menciptakan perubahan dan berkontribusi pada masyarakat."
    Future = "Anda mungkin akan mengalami banyak perubahan dan inovasi dalam hidup Anda. Manfaatkan kecerdasan dan kreativitas Anda untuk mencapai tujuan yang lebih besar."
  } else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) {
    zodiacSign = "capricorn";
    zodiacDate = "December 22nd — January 19th";
    Personality = "Anda adalah Ambisius, tangguh, dan berdedikasi. Anda suka merencanakan masa depan Anda dan bekerja keras untuk mencapai tujuan Anda."
    Future =  "Anda mungkin akan mencapai stabilitas dan keberhasilan dalam karier Anda. Tetaplah fokus pada tanggung jawab Anda dan jangan ragu untuk mengejar ambisi Anda."
  }
  sessionStorage.setItem("zodiacSign", zodiacSign);
  sessionStorage.setItem("zodiacDate", zodiacDate);
  sessionStorage.setItem("personal", Personality);
  sessionStorage.setItem("future", Future);
  location.href = "./result.html";
};
