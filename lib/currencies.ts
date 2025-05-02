export const Currencies = [
  { value: "USD", label: "🇺🇸 $ Dollar", flagUrl: "https://flagcdn.com/us.svg", locale: "en-US" },
  { value: "EUR", label: "🇪🇺 € Euro", flagUrl: "https://flagcdn.com/eu.svg", locale: "de-DE" },
  { value: "JPY", label: "🇯🇵 ¥ Yen", flagUrl: "https://flagcdn.com/jp.svg", locale: "ja-JP" },
  { value: "GBP", label: "🇬🇧 £ Pound", flagUrl: "https://flagcdn.com/gb.svg", locale: "en-GB" },
  { value: "SGD", label: "🇸🇬 $ SGD", flagUrl: "https://flagcdn.com/sg.svg", locale: "en-SG" },  // Singapore Dollar
  { value: "MMK", label: "🇲🇲 K MMK", flagUrl: "https://flagcdn.com/mm.svg", locale: "my-MM" },  // Myanmar Kyat
  { value: "CNY", label: "🇨🇳 ¥ CNY", flagUrl: "https://flagcdn.com/cn.svg", locale: "zh-CN" },  // China Yuan Renminbi
  { value: "THB", label: "🇹🇭 ฿ THB", flagUrl: "https://flagcdn.com/th.svg", locale: "th-TH" },  // Thailand Baht
  { value: "VND", label: "🇻🇳 ₫ VND", flagUrl: "https://flagcdn.com/vn.svg", locale: "vi-VN" },  // Vietnam Dong
  { value: "AUD", label: "🇦🇺 $ AUD", flagUrl: "https://flagcdn.com/au.svg", locale: "en-AU" },  // Australian Dollar
  { value: "CAD", label: "🇨🇦 $ CAD", flagUrl: "https://flagcdn.com/ca.svg", locale: "en-CA" },  // Canadian Dollar
  { value: "INR", label: "🇮🇳 ₹ INR", flagUrl: "https://flagcdn.com/in.svg", locale: "hi-IN" },  // Indian Rupee
  { value: "BRL", label: "🇧🇷 R$ BRL", flagUrl: "https://flagcdn.com/br.svg", locale: "pt-BR" },  // Brazilian Real
  { value: "ZAR", label: "🇿🇦 R ZAR", flagUrl: "https://flagcdn.com/za.svg", locale: "en-ZA" },  // South African Rand
  { value: "RUB", label: "🇷🇺 ₽ RUB", flagUrl: "https://flagcdn.com/ru.svg", locale: "ru-RU" },  // Russian Ruble
  { value: "MXN", label: "🇲🇽 $ MXN", flagUrl: "https://flagcdn.com/mx.svg", locale: "es-MX" }   // Mexican Peso
];

export type Currency = (typeof Currencies)[0];
