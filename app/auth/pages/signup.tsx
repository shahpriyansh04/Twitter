import { useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { SignupForm } from "app/auth/components/SignupForm"
import { FaTwitter } from "react-icons/fa"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (

      <div className="bg-black h-screen grid grid-cols-2">
        <div className=" flex items-center justify-center">
          <img  className="h-full object-center" src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" alt="" />

          <FaTwitter size="md" className=" absolute h-80 w-80 text-white"/>
        </div>
        <div className="bg-white flex items-center justify-center">
          <SignupForm onSuccess={() => router.push(Routes.Home())} />

        </div>
      </div>
  )
}

SignupPage.redirectAuthenticatedTo = "/"
SignupPage.getLayout = (page) => <Layout title="Sign Up">{page}</Layout>

export default SignupPage
