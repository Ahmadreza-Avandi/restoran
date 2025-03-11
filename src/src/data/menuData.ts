interface MenuItem {
  name: string;
  price: string;
  ingredients: string[];
  image: string;
}

interface CategoryData {
  title: string;
  items: MenuItem[];
}

interface MenuData {
  [key: string]: CategoryData;
}

export const menuData: MenuData = {
  sandwich: {
    title: "ساندویچ",
    items: [
      {
        name: "مرغ قارچ",
        price: "223,000",
        ingredients: ["مرغ", "قارچ", "کاهو", "گوجه", "خیار شور", "پنیر پیتزا"],
        image: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "رست بیف",
        price: "336,000",
        ingredients: ["گوشت ریش ریش شده", "پنیر پیتزا", "قارچ", "خیار شور", "گوجه", "کاهو"],
        image: "https://images.unsplash.com/photo-1511996635226-6dd0c50c8d24?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  fried: {
    title: "سوخاری",
    items: [
      {
        name: "فیله سوخاری",
        price: "342,000",
        ingredients: ["فیله", "کاهو", "سیب تنوری"],
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "قارچ سوخاری",
        price: "178,000",
        ingredients: ["قارچ", "آرد سوخاری", "سس چیلیتا"],
        image: "https://images.unsplash.com/photo-1509482560494-4126f8225994?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  pizza: {
    title: "پیتزا",
    items: [
      {
        name: "پپرونی",
        price: "384,000",
        ingredients: ["سس ناپولیتن", "پپرونی", "پنیر پیتزا", "هالوپینو"],
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "چیکن",
        price: "391,000",
        ingredients: ["سس قارچ", "مرغ", "پنیر پیتزا", "فلفل دلمه", "تخم آفتاب گردان", "زیتون"],
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "رست بیف",
        price: "443,000",
        ingredients: ["گوشت ریش ریش شده", "پنیر پیتزا", "فلفل دلمه", "سس مخصوص قارچ"],
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "مارگاریتا",
        price: "289,000",
        ingredients: ["گوجه", "پنیر پیتزا", "ریحون", "سس مارنیا"],
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "سیر استیک",
        price: "436,000",
        ingredients: ["گوشت", "پنیر پیتزا", "سس سیر", "فلفل دلمه", "پیاز", "قارچ"],
        image: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "پیتزا گردن",
        price: "748,000",
        ingredients: ["گوشت گردن", "قارچ", "پنیر پیتزا", "سس قارچ", "زیتون سیاه", "فلفل دلمه"],
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  burger: {
    title: "برگر",
    items: [
      {
        name: "کینگ برگر",
        price: "332,000",
        ingredients: ["دو عدد برگر", "دو عدد پنیر چدار", "کاهو", "خیار شور", "گوجه", "سس مخصوص", "سیب تنوری"],
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "برگر مخصوص",
        price: "338,000",
        ingredients: ["دو عدد برگر", "فیله مرغ", "بیکن", "دو عدد پنیر چدار", "کاهو", "خیار شور", "گوجه", "سس مخصوص", "سیب تنوری"],
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "چیز برگر",
        price: "263,000",
        ingredients: ["برگر", "پنیر چدار", "کاهو", "خیار شور", "گوجه", "سس مخصوص", "سیب تنوری"],
        image: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "بیکن برگر",
        price: "263,000",
        ingredients: ["بیکن", "برگر", "پنیر چدار", "کاهو", "خیار شور", "گوجه", "سس مخصوص", "سیب تنوری"],
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "چیکن برگر",
        price: "198,000",
        ingredients: ["فیله گریل شده", "پنیر چدار", "گوجه", "کاهو", "سس مخصوص", "سیب تنوری"],
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  appetizer: {
    title: "پیش غذا",
    items: [
      {
        name: "چیلی فرایز",
        price: "72,000",
        ingredients: ["سیب زمینی", "ادویه سیب زمینی"],
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "بیکن فرایز",
        price: "183,000",
        ingredients: ["سیب خلال شده", "ادویه سیب زمینی", "بیکن", "سس سزار", "پنیر پارمسال"],
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "نون سیر",
        price: "166,000",
        ingredients: ["خمیر پیتزا", "پنیر پیتزا", "سس سیر"],
        image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "چیکن داینامیک",
        price: "198,000",
        ingredients: ["مرغ سوخاری", "سس چیلی تای"],
        image: "https://images.unsplash.com/photo-1562967915-6ba607ff7d05?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "شر بمب داینامیک",
        price: "198,000",
        ingredients: ["مرغ سوخاری", "سس چیلی تای", "هویج خشک شده"],
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "باربیکیو وینگرز",
        price: "183,000",
        ingredients: ["باله مرغ", "سس باربیکیو", "هویج خشک شده"],
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  salad: {
    title: "سالاد",
    items: [
      {
        name: "سزار",
        price: "230,000",
        ingredients: ["کاهو", "بیبی اسفناج", "سس بلو چیز", "گوجه گیلاسی"],
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "سالاد فصل",
        price: "180,000",
        ingredients: ["کاهو", "میوه های فصل", "نان شیرین"],
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "سالاد فتوش",
        price: "170,000",
        ingredients: ["تربچه", "کاهو", "پیازچه", "سس فتوش", "لواشک", "تمبر هندی"],
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  breakfast: {
    title: "صبحانه",
    items: [
      {
        name: "وافل بیکن تخم مرغ",
        price: "208,000",
        ingredients: ["بیکن", "تخم مرغ", "کاهو فرانسوی", "گوجه گیلاسی"],
        image: "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "فریتاتا",
        price: "217,000",
        ingredients: ["تخم مرغ", "بیکن", "فلفل دلمه", "گوجه فرنگی", "گوجه گیلاسی", "پنیر پیتزا"],
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "سس تخم مرغ",
        price: "120,000",
        ingredients: ["سس تخم مرغ", "گوجه فرنگی"],
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "املت بیکن تخم مرغ",
        price: "178,000",
        ingredients: ["زرده تخم مرغ", "بیکن", "قارچ", "زیتون سبز", "گوجه فرنگی"],
        image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "بشقاب انگلیسی",
        price: "290,000",
        ingredients: ["بیکن", "سوسیس", "خلال قارچ", "نیمرو", "نان تست"],
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "نان سیمیت",
        price: "170,000",
        ingredients: ["خیار", "آب لیمو", "فلفل سیاه", "پنیر خامه ای"],
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
};