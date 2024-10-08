import { redirect } from "next/navigation"
import { getAuthUser } from "@/lib/nextauth"
import { getCompanyById } from "@/actions/company"
import CompanyInfo from "@/components/member/CompanyInfo"

const CompanyInfoPage = async () => {
  // 認証情報取得
  const user = await getAuthUser()

  if (!user) {
    redirect("/")
  }

  const company = await getCompanyById({ companyId: user.companyId })

  return (
    <div className="bg-white md:border w-full rounded md:rounded-r-md p-2 md:p-10 h-full">
      <div className="text-xl font-bold border-b border-black pb-5 mb-5">
        企業情報・編集
      </div>

      {company ? (
        <CompanyInfo company={company} />
      ) : (
        <div>企業情報が登録されていません。</div>
      )}
    </div>
  )
}

export default CompanyInfoPage
