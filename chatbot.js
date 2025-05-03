// --- Duygular ve Tepkiler ---
const emotions = {
    "yalnızlık ve sosyal izolasyon": [
        "yalnızım", "dışlandım", "kimsesizim", "kimse beni anlamıyor",
        "hiç arkadaşım yok", "arkadaşlarım benimle konuşmuyor", "kimse beni sevmiyor", "çok yalnızım", "yalnızım"
    ],
    "üzüntü ve keder": [
        "üzgünüm", "mutsuzum", "hüzün", "melankoli", "kendimi kötü hissediyorum",
        "hayal kırıklığına uğradım", "kederliyim"
    ],
    "yetersizlik ve kendini sevme": [
        "yetersizim", "kendimi sevmiyorum", "beceriksizin tekiyim", "hiçbir şey başaramıyorum",
        "sevilmeye layık değilim", "başaramıyorum", "değersizim", "çirkinim"
    ],
    "aşk ve ayrılık": [
        "sevgilim beni terk etti", "terk edildim", "kalbim kırıldı", "aşk acısı çekiyorum",
        "sevdiğim kişi beni sevmiyor", "ilişkim bitti", "sevgilimle ayrıldık", "yalnız aşık oldum"
    ],
    "kötü aile ilişkileri": [
        "ailemle anlaşamıyorum", "annem bana kızıyor", "babam bana kızıyor", "kardeşimle kavga ettik",
        "ailem beni anlamıyor", "evde huzur yok", "ailemle sorunlar yaşıyorum"
    ],
    "akademik başarısızlık": [
        "notlarım çok kötü", "sınavlardan düşük not aldım", "derslerimde başarısızım", "okulda zorlanıyorum",
        "öğrenemiyorum", "akademik olarak kötü hissediyorum", "ders çalışamıyorum", "tembelim"
    ],
};

const responses = {
    rogerian: {
        "yalnızlık ve sosyal izolasyon": [
            "Kendini yalnız hissettiğinde, sevdiğin bir aktiviteyle ilgilenmek sana iyi gelebilir.",
            "Etrafındaki insanlarla daha fazla iletişim kurmayı denemek isteyebilirsin. Bu, yalnızlık hissini hafifletebilir.",
            "Hiç kimsenin seni anlamadığını düşünüyorsun. Bu sosyal izolasyon hissi veriyor.",
            "Kendini başkalarından ayrı ve uzak hissediyorsun. Bu yalnızlık duygusu yaratıyor."
        ],
        "üzüntü ve keder": [
            "Bir kayıp ya da hayal kırıklığı yaşamışsın. Bu üzüntüye neden oluyor.",
            "İçinde derin bir keder var. Bu acı verici bir duygu olmalı.",
            "Kendini üzgün hissettiğinde, bir arkadaşınla konuşmak sana iyi gelebilir.",
            "Bu duyguları hissetmek tamamen normal. Kendine karşı nazik olmayı unutma."
        ],
        "yetersizlik ve kendini sevme": [
            "Kendini sevmek zor olabilir, ancak bu konuda küçük adımlar atmak kendine olan saygını artırabilir.",
            "Kendine değer vermek için sevdiğin şeylere odaklanmayı deneyebilirsin.",
            "Herkesin zaman zaman kendine karşı eleştirel olabileceğini unutma. Bu geçici bir durum olabilir.",
            "Kendini geliştirmek için küçük hedefler belirlemek, kendine olan güvenini artırabilir."
        ],
        "aşk ve ayrılık": [
            "Bir ilişkinin sonlanması zor bir deneyim olabilir. Bu duyguyu kabul etmek ve kendine zaman tanımak önemli.",
            "Aşk acısı çekmek, sevgiye ne kadar değer verdiğini gösterir. Kendine karşı nazik olmayı unutma.",
            "Bir ayrılık yaşadığında, duygularını paylaşabileceğin bir arkadaşınla konuşmak sana iyi gelebilir.",
            "Bu zor dönemde, kendine sevdiğin bir aktiviteyle vakit ayırmayı deneyebilirsin."
        ],
        "kötü aile ilişkileri": [
            "Ailendeki anlaşmazlıklar seni üzmüş olabilir. Bu duyguları ifade etmek için uygun bir zaman bulmayı düşünebilirsin.",
            "Aile bireyleriyle açık bir iletişim kurmak, sorunları çözmede yardımcı olabilir.",
            "Kendini anlaşılamamış hissettiğinde, duygularını bir deftere yazmayı deneyebilirsin.",
            "Evde huzur eksikliği seni etkiliyor olabilir. Bu konuda bir uzmana danışmayı düşünebilirsin."
        ],
        "akademik başarısızlık": [
            "Akademik zorluklar yaşamak tamamen normaldir. Küçük hedefler belirleyerek başlayabilirsin.",
            "Derslerinde zorlandığında, bir öğretmenden veya arkadaşından yardım istemeyi düşünebilirsin.",
            "Notlarının kötü olması seni tanımlamaz. Kendine nazik olmayı unutma.",
            "Başarısızlık, öğrenme sürecinin bir parçasıdır. Hatalarından ders çıkararak ilerlemeye odaklanabilirsin."
        ]
    },
    schemaTherapy: {
        "yalnızlık ve sosyal izolasyon": [
            "Yalnızlık hissi, başkalarıyla bağlantı kurma ihtiyacını gösterebilir. Bu duyguyu kabul ederek, küçük adımlarla sosyal çevreni genişletmeyi deneyebilirsin.",
            "Başkalarıyla vakit geçirdiğinde, yalnızlık hissinin azaldığını görebilirsin. Bu, kendini daha iyi hissetmene yardımcı olabilir."
        ],
        "üzüntü ve keder": [
            "Üzüntü, genellikle bir kayıp ya da hayal kırıklığına işaret eder. Bu duyguyu bastırmak yerine, anlamaya çalışabilirsin.",
            "Kendine birkaç dakika ayırıp bu hislerin kaynağını düşünmek, seni rahatlatabilir."
        ],
        "yetersizlik ve kendini sevme": [
            "Herkesin güçlü ve zayıf yönleri vardır. Kendine nazik davranarak, güçlü yanlarını keşfetmeye çalışabilirsin.",
            "Yetersizlik hissi, genellikle mükemmeliyetçilikten kaynaklanır. Küçük başarılarını görmezden gelme."
        ],
        "aşk ve ayrılık": [
            "Ayrılık acısı, genellikle kayıp hissine işaret eder. Bu duyguyu anlamak için kendine zaman tanıyabilirsin.",
            "İlişkinin bitişi, kendini keşfetmek ve yeniden inşa etmek için bir fırsat olabilir."
        ],
        "kötü aile ilişkileri": [
            "Ailenle yaşadığın zorluklar, iletişim eksikliğinden kaynaklanıyor olabilir. Bu konuda açık fikirli olmaya çalışabilirsin.",
            "Aile içindeki sorunları çözmek için bir arabulucu veya danışmandan yardım istemek faydalı olabilir."
        ],
        "akademik başarısızlık": [
            "Akademik başarısızlık, öğrenme sürecinin doğal bir parçasıdır. Bu durumu bir fırsat olarak görebilirsin.",
            "Zorlandığın konular için yeni çalışma yöntemleri denemeyi düşünmelisin. Bu, başarını artırabilir."
        ]
    },
    advancedSchemaTherapy: {
        "yalnızlık ve sosyal izolasyon": [
            "Sosyal izolasyonla başa çıkmak için çevrendeki insanlarla anlamlı bağlantılar kurmayı deneyebilirsin.",
            "Yalnızlık hissettiğinde, bir topluluğa katılmayı veya gönüllü çalışmalara katılmayı düşün."
        ],
        "üzüntü ve keder": [
            "Üzüntüyle başa çıkmak için duygularını yazıya dökmeyi deneyebilirsin. Bu, zihnini rahatlatabilir.",
            "Derin üzüntüler, genellikle paylaşılmadığında daha da büyür. Güvendiğin biriyle konuşmayı düşün."
        ],
        "yetersizlik ve kendini sevme": [
            "Kendini yetersiz hissettiğinde, geçmişteki başarılarını hatırlamak sana yardımcı olabilir.",
            "Unutma, kimse mükemmel değildir. Kendine nazik ol ve küçük adımlarla ilerlemeyi dene."
        ],
        "aşk ve ayrılık": [
            "Ayrılık sonrası kendini toparlamak için bir hobiye odaklanmayı deneyebilirsin.",
            "Sevdiğin bir aktiviteyle uğraşmak, acıyı hafifletmene yardımcı olabilir. Kendine zaman tanı."
        ],
        "kötü aile ilişkileri": [
            "Aile içindeki sorunlarla başa çıkmak için profesyonel bir destek almayı düşünebilirsin.",
            "Aile bireyleriyle empati kurarak iletişim kurmayı deneyebilirsin. Bu, sorunları çözmede yardımcı olabilir."
        ],
        "akademik başarısızlık": [
            "Başarılı olmak için disiplinli bir çalışma alışkanlığı geliştirmek önemlidir. Küçük adımlarla başlayabilirsin.",
            "Akademik başarısızlık geçicidir. Bu durumu bir motivasyon kaynağı olarak kullanabilirsin."
        ]
    },
    cbt: {
        "yalnızlık ve sosyal izolasyon": [
            "Yalnızlık hissi, insanın sosyal bağlantılara olan ihtiyacını gösterir. Bu hissi kabul ederek, bağlantılar kurmayı deneyebilirsin.",
            "Kendini yalnız hissettiğinde, güvendiğin birine ulaşmayı ve düşüncelerini paylaşmayı dene."
        ],
        "üzüntü ve keder": [
            "Üzüntü, hayatın bir parçasıdır. Kendine şefkat göstererek bu duyguyla başa çıkabilirsin.",
            "Kendini kötü hissettiğinde, önce nefes al ve bir süre kendine zaman tanı. Bu düşünceler geçici olabilir."
        ],
        "yetersizlik ve kendini sevme": [
            "Yetersizlik hissi, bazen kendimize çok yüklenmekten kaynaklanır. Küçük başarılarını görmeye çalış.",
            "Geçmişte başardığın şeyleri hatırlamak, kendine olan güvenini artırabilir."
        ],
        "aşk ve ayrılık": [
            "Ayrılık acısı, sevgiye verdiğin değeri gösterir. Bu dönemde hislerine zaman tanı.",
            "Bu zor süreçte kendini sevdiğin bir aktiviteye yönlendirmek, sana iyi gelebilir."
        ],
        "kötü aile ilişkileri": [
            "Aile içindeki sorunlarla baş etmek zordur. Bu konuda bir uzmandan destek almayı düşünebilirsin.",
            "Duygularını bir yere yazmak, kendini ifade etmenin bir yolu olabilir."
        ],
        "akademik başarısızlık": [
            "Akademik başarısızlık, öğrenme sürecinin bir parçasıdır. Hatalarından ders çıkararak ilerleyebilirsin.",
            "Zorlandığın konular için bir öğretmenden yardım istemek, seni rahatlatabilir."
        ]
    },
    bdtOdevlendirme: [
        "Bu hafta üzerinde çalışabileceğimiz bir konu belirleyelim mi? Belki olumsuz düşünce kalıplarını fark etmek veya küçük bir sosyal etkileşim hedefi koymak işe yarayabilir.",
        "Duygusal tepkilerini anlamak için bir duygu günlüğü tutmak faydalı olabilir. Gün içinde hangi duyguları hissettiğini ve bu duyguların hangi olaylarla tetiklendiğini not alabilirsin.",
        "Seni zorlayan durumlarla ilgili alternatif düşünceler geliştirmek için pratik yapalım mı? Bir sonraki seansta bu düşünceleri tekrar gözden geçirebiliriz.",
        "Rahatlama egzersizleri denemek, stresle başa çıkmanda yardımcı olabilir. Örneğin, derin nefes alma veya kısa bir meditasyon yapmayı deneyebilirsin."
    ],
    seansSonu: [
        "Bugünkü sohbetimiz burada sona eriyor. Kendine iyi bakmanı ve bu hafta üzerinde konuştuğumuz konuları düşünmeni rica ediyorum.",
        "Bu seansın sana yardımcı olduğunu umuyorum. Bir sonraki görüşmemizde tekrar konuşmaktan memnuniyet duyarım.",
        "Unutma, hislerinle başa çıkmak zaman alabilir. Kendine karşı sabırlı ol ve gerektiğinde destek aramaktan çekinme.",
        "Seni önemsiyorum ve tekrar konuşmak istediğinde buradayım."
    ]
};

// Kullanıcının görmediği sayaç
let messageCounter = 0;
let rogerianCounter = 0;
let schemaCounter = 0;
let advancedSchemaCounter = 0;
let bdtCounter = 0;

// Kritik Mesajları Algılama
const criticalMessages = [
    "intihar edeceğim", "ölmek istiyorum", "yaşamak istemiyorum", "zorbalık görüyorum", "zorbalanıyorum"
];

// Kritik Mesaj Tepkisi
function handleCriticalMessage(inputText) {
    if (criticalMessages.some(msg => inputText.toLowerCase().includes(msg))) {
        return "Bu hislerle başa çıkmanın zor olduğunu biliyorum. Yalnız değilsin ve güvendiğin birine ulaşmak çok önemli. Bir uzmandan destek alabilirsin.";
    }
    return null;
}

// Duygu Tespit Fonksiyonu
function detectEmotion(inputText) {
    for (const [emotion, keywords] of Object.entries(emotions)) {
        if (keywords.some(keyword => inputText.toLowerCase().includes(keyword))) {
            return emotion;
        }
    }
    return null;
}

// Yanıt Alma Fonksiyonu
function getResponse(emotion) {
    messageCounter++;

    if (messageCounter <= 12) {
        rogerianCounter++;
        return responses.rogerian[emotion]?.[Math.floor(Math.random() * responses.rogerian[emotion].length)];
    } else if (messageCounter > 12 && messageCounter <= 18) {
        schemaCounter++;
        return responses.schemaTherapy[emotion]?.[Math.floor(Math.random() * responses.schemaTherapy[emotion].length)];
    } else if (messageCounter > 18 && messageCounter <= 22) {
        advancedSchemaCounter++;
        return responses.advancedSchemaTherapy[emotion]?.[Math.floor(Math.random() * responses.advancedSchemaTherapy[emotion].length)];
    } else if (messageCounter > 22 && messageCounter <= 26) {
        bdtCounter++;
        return responses.bdtOdevlendirme[Math.floor(Math.random() * responses.bdtOdevlendirme.length)];
    } else if (messageCounter === 27) {
        return responses.seansSonu[Math.floor(Math.random() * responses.seansSonu.length)];
    } else {
        return "Devam etmek istersen buradayım.";
    }
}

// Mesaj Gönderme
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    // Kritik Mesaj Kontrolü
    const criticalResponse = handleCriticalMessage(userInput);
    if (criticalResponse) {
        displayMessage(userInput, "Kullanıcı");
        displayMessage(criticalResponse, "Chatbot");
        return;
    }

    // Duygu ve Yanıt Tespiti
    displayMessage(userInput, "Kullanıcı");
    const emotion = detectEmotion(userInput);
    const response = emotion ? getResponse(emotion) : "Bu konuda daha fazla konuşmak ister misin?";
    displayMessage(response, "Chatbot");

    document.getElementById("user-input").value = "";
}

// Mesajları Gösterme
function displayMessage(message, sender) {
    const container = document.getElementById("message-container");
    const messageDiv = document.createElement("div");
    messageDiv.textContent = `${sender}: ${message}`;
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

// İlk Mesaj
document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("user-input");
    if (inputElement) {
        inputElement.placeholder = "Sohbet Arkadaşınız";
    }
    displayMessage("Merhaba! Sana yardımcı olmak için buradayım. Nasıl hissediyorsun?", "Chatbot");
});