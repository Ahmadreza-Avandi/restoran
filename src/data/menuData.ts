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
  pasta: {
    title: "پاستا",
    items: [
      {
        name: "چیکن آلفرد",
        price: "312,000",
        ingredients: ["پنیر", "مرغ", "سس آلفردو", "قارچ"],
        image: ""
      },
      {
        name: "بیف آلفردو",
        price: "343,000",
        ingredients: ["پنیر", "گوشت", "سس آلفردو", "قارچ"],
        image: ""
      },
      {
        name: "عربیکا",
        price: "372,000",
        ingredients: ["گوشت", "سس ناپولیتن", "قارچ", "زیتون سیاه", "فلفل دلمه", "پنیر"],
        image: ""
      }
    ]
  },

  steak: {
    title: "استیک",
    items: [
      {
        name: "چیکن استیک",
        price: "760,000",
        ingredients: ["سینه مرغ گریل شده", "قارچ", "کلم بروکلی", "گوجه گیلاسی", "سس آلفردو", "سیب تنوری", "ذرت"],
        image: ""
      },
      {
        name: "فیله مینیون",
        price: "838,000",
        ingredients: ["فیله گوشت", "سس قارچ", "قارچ", "ذرت", "کلم بروکلی", "سیب تنوری", "گوجه گیلاسی"],
        image: ""
      },
      {
        name: "رجب آی",
        price: "992,000",
        ingredients: ["گوشت رجب آی", "سس قارچ", "قارچ", "ذرت", "کلم بروکلی", "سیب تنوری", "گوجه گیلاسی"],
        image: ""
      }
    ]
  },
  sandwich: {
    title: "ساندویچ",
    items: [
      {
        name: "مرغ قارچ",
        price: "223,000",
        ingredients: ["مرغ", "قارچ", "کاهو", "گوجه", "خیار شور", "پنیر پیتزا"],
        image: ""
      },
      {
        name: "رست بیف",
        price: "336,000",
        ingredients: ["گوشت ریش ریش شده", "پنیر پیتزا", "قارچ", "خیار شور", "گوجه", "کاهو"],
        image: ""
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
        image: ""
      },
      {
        name: "قارچ سوخاری",
        price: "178,000",
        ingredients: ["قارچ", "آرد سوخاری", ],
        image: ""
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
        image: ""
      },
      {
        name: "چیکن",
        price: "391,000",
        ingredients: ["سس قارچ", "مرغ", "پنیر پیتزا", "فلفل دلمه", "تخم آفتاب گردان", "زیتون"],
        image: ""
      },
      {
        name: "رست بیف",
        price: "443,000",
        ingredients: ["گوشت ریش ریش شده", "پنیر پیتزا", "فلفل دلمه", "سس مخصوص قارچ"],
        image: ""
      },
      {
        name: "مارگاریتا",
        price: "289,000",
        ingredients: ["گوجه", "پنیر پیتزا", "ریحون", "سس مارنیا"],
        image: ""
      },
      {
        name: "سیر استیک",
        price: "436,000",
        ingredients: ["گوشت", "پنیر پیتزا", "سس سیر", "فلفل دلمه", "پیاز", "قارچ"],
        image: ""
      },
      {
        name: "پیتزا گردن",
        price: "748,000",
        ingredients: ["گوشت گردن", "قارچ", "پنیر پیتزا", "سس قارچ", "زیتون سیاه", "فلفل دلمه"],
        image: ""
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
        image: ""
      },
      {
        name: "برگر مخصوص",
        price: "338,000",
        ingredients: ["دو عدد برگر", "فیله مرغ", "بیکن", "دو عدد پنیر چدار", "کاهو", "خیار شور", "گوجه", "سس مخصوص", "سیب تنوری"],
        image: ""
      },
      {
        name: "چیز برگر",
        price: "263,000",
        ingredients: ["برگر", "پنیر چدار", "کاهو", "خیار شور", "گوجه", "سس مخصوص", "سیب تنوری"],
        image: ""
      },
      {
        name: "بیکن برگر",
        price: "276,000",
        ingredients: ["بیکن", "برگر", "پنیر چدار", "کاهو", "خیار شور", "گوجه", "سس مخصوص", "سیب تنوری"],
        image: ""
      },
      {
        name: "چیکن برگر",
        price: "198,000",
        ingredients: ["فیله گریل شده", "پنیر چدار", "گوجه", "کاهو", "سس مخصوص", "سیب تنوری"],
        image: ""
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
        image: ""
      },
      {
        name: "بیکن فرایز",
        price: "183,000",
        ingredients: ["سیب خلال شده", "ادویه سیب زمینی", "بیکن", "سس سزار", "پنیر پارمسال"],
        image: ""
      },
      {
        name: "نون سیر",
        price: "166,000",
        ingredients: ["خمیر پیتزا", "پنیر پیتزا", "سس سیر"],
        image: ""
      },
      {
        name: "چیکن داینامیت",
        price: "212,000",
        ingredients: ["مرغ سوخاری", "سس چیلی تای"],
        image: ""
      },
      {
        name: "شر بمب داینامیت",
        price: "198,000",
        ingredients: ["مرغ سوخاری", "سس چیلی تای", "هویج خشک شده"],
        image: ""
      },
      {
        name: "باربیکیو وینگرز",
        price: "183,000",
        ingredients: ["باله مرغ", "سس باربیکیو", "هویج خشک شده"],
        image: ""
      }
    ]
  },
  cold_bar: {
    title: "بار سرد",
    items: [
      {
        name: "ماکتیل",
        price: "",
        ingredients: [],
        image: ""
      },
      {
        name: "رد لونا",
        price: "",
        ingredients: [],
        image: ""
      },
      {
        name: "لیموناد",
        price: "",
        ingredients: [],
        image: ""
      },
      {
        name: "موهیتو",
        price: "",
        ingredients: [],
        image: ""
      },
      {
        name: "الینا",
        price: "",
        ingredients: [],
        image: ""
      },
      {
        name: "رد فلک",
        price: "",
        ingredients: [],
        image: ""
      },
      {
        name: "گلکسی",
        price: "",
        ingredients: [],
        image: ""
      },
      {
        name: "آلینا",
        price: "",
        ingredients: [],
        image: ""
      },
    ]
  },

  shake: {
    title: "شیک",
    items: [
      {
        name: "شیک اورئو",
        price: "",
        ingredients: [""],
        image: ""
      } ,
      {
        name: "شیک شکلاتی",
        price: "",
        ingredients: [""],
        image: ""
      } ,{
        name: "شیک نوتلا",
        price: "",
        ingredients: [""],
        image: ""
      } ,{
        name: "شیک امازونیکا",
        price: "",
        ingredients: [""],
        image: ""
      } ,{
        name: "شیک پروتئین",
        price: "",
        ingredients: [""],
        image: ""
      } ,
    ]},
  salad: {
    title: "سالاد",
    items: [
      {
        name: "سزار",
        price: "230,000",
        ingredients: ["کاهو", "سینه مرغ", "سس سزار", "گوجه گیلاسی"],
        image: ""
      },
      {
        name: "سالاد فصل",
        price: "180,000",
        ingredients: ["کاهو", "میوه های فصل", "نان شیرین"],
        image: ""
      },
      {
        name: "سالاد فتوش",
        price: "170,000",
        ingredients: ["تربچه", "کاهو", "پیازچه", "سس فتوش", "لواشک", "تمبر هندی"],
        image: ""
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
        image: ""
      },
      {
        name: "فریتاتا",
        price: "217,000",
        ingredients: ["تخم مرغ", "بیکن", "فلفل دلمه", "گوجه فرنگی", "گوجه گیلاسی", "پنیر پیتزا"],
        image: ""
      },
      {
        name: "سس تخم مرغ",
        price: "120,000",
        ingredients: ["سس تخم مرغ", "گوجه فرنگی"],
        image: ""
      },
      {
        name: "املت بیکن تخم مرغ",
        price: "178,000",
        ingredients: ["زرده تخم مرغ", "بیکن", "قارچ", "زیتون سبز", "گوجه فرنگی"],
        image: ""
      },
      {
        name: "نان سیمیت",
        price: "170,000",
        ingredients: ["خیار", "آب لیمو", "فلفل سیاه", "پنیر خامه ای"],
        image: ""
      }
    ]
  }
};