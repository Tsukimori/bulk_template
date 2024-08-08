import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const PREFECTURES = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
]

export const PRODUCT_TYPE_LIST = [
  {
    id: "1",
    label: "新規ホームページ制作",
  },
  {
    id: "2",
    label: "ホームページリニューアル",
  },
  {
    id: "3",
    label: "DX運用",
  },
  {
    id: "4",
    label: "アプリ開発",
  },
  {
    id: "5",
    label: "その他",
  },
] as const

export const DESIRED_FUNCTION_LIST = [
  {
    id: "1",
    label: "お問い合わせフォーム",
  },
  {
    id: "2",
    label: "ブログ・お知らせ",
  },
  {
    id: "3",
    label: "お買い物カート",
  },
  {
    id: "4",
    label: "セキュリティ",
  },
  {
    id: "5",
    label: "その他",
  },
] as const
