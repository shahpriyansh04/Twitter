import { useRouter, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"
import {FaTwitter} from 'react-icons/fa'
const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div className="bg-black h-screen grid grid-cols-2">
      <div className=" flex items-center justify-center">
        <img  className="h-full object-center" src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" alt="" />

        <FaTwitter size="md" className=" absolute h-80 w-80 text-white"/>
      </div>
      <div className="bg-white flex items-center justify-center">
        <LoginForm
          onSuccess={(_user) => {
            const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
            router.push(next)
          }}
        />
      </div>
    </div>
  )
}

LoginPage.redirectAuthenticatedTo = "/"
LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default LoginPage
