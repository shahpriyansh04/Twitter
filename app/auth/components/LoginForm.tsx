import { PromiseReturnType, useMutation } from 'blitz'
import login from 'app/auth/mutations/login'
import { FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { BsTwitter } from 'react-icons/bs'
import { SubmitHandler, useForm } from 'react-hook-form'

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

type InputProps = {
  username: string
  password: string
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>()

  const onSubmit: SubmitHandler<InputProps> = (data: InputProps) => console.log(data)
  console.log(errors)
  return (
    <div className="h-full flex items-center flex-1 bg-black px-10 ">
      <div className="text-white h-4/5 flex-1 ">
        <FaTwitter className="w-[3rem] h-[3rem]" />
        <h1 className="text-6xl font-bold mt-16">Happening Now</h1>
        <h2 className={'text-3xl font-bold mt-14'}>Login in to Twitter </h2>

        <div className={'mt-6 flex-col  w-auto w-72'}>
          <button
            className={
              'flex items-center mb-3 bg-white text-black w-full py-2 justify-center rounded-full transition-transform duration-250 ease-out active:scale-90 hover:opacity-90'
            }
          >
            <FcGoogle className={'mr-3 h-6 w-6'} size={'md'} />
            Login with Google
          </button>
          <button
            className={
              'flex items-center bg-white text-white bg-twitter w-full py-2 justify-center rounded-full transition-transform duration-250 ease-out active:scale-90 hover:opacity-90'
            }
          >
            <BsTwitter className={'mr-3 h-6 w-6'} size={'md'} />
            Login with Twitter
          </button>
          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-white font-semibold">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'flex items-center bg-white  w-full py-2 justify-center rounded-full '}>
              <input
                type="text"
                placeholder={'Username'}
                {...register('username', { required: true, minLength: 5 })}
                className={'flex-1 mx-4 text-black bg-transparent outline-none'}
              />
            </div>

            {errors.username?.type === 'required' && (
              <p className={'ml-2 text-xs text-red-700'}>Username is required</p>
            )}
            {errors.username?.type === 'minLength' && (
              <p className={'ml-2 text-xs text-red-700'}>Minimum length of username is 5</p>
            )}
            <div
              className={
                'flex items-center mt-4 bg-white  w-full py-2 justify-center rounded-full '
              }
            >
              <input
                type="password"
                {...register('password', { required: true })}
                placeholder={'Password'}
                className={'flex-1 mx-4 text-black bg-transparent outline-none'}
              />
            </div>
            {errors.password && <p className={'ml-2 text-xs text-red-700'}>Password is required</p>}

            <button
              className={
                'flex items-center mt-6 bg-white text-white bg-twitter w-full py-2 justify-center rounded-full transition-transform duration-250 ease-out active:scale-90 hover:opacity-90'
              }
            >
              Login
            </button>
          </form>
          <p className={'text-xs ml-2 mt-2'}>
            By signing up, you agree to the{' '}
            <span className={'text-twitter cursor-pointer'}>Terms of Service</span> and{' '}
            <span className={'text-twitter cursor-pointer'}>Privacy Policy</span>, including{' '}
            <span className={'text-twitter cursor-pointer'}>Cookie Use</span>.
          </p>

          <p className={'ml-2 mt-8 font-semibold'}>New here?</p>
          <button
            className={
              'flex items-center mt-2 bg-white text-twitter bg-transparent border-white border w-full py-2 justify-center rounded-full transition-transform duration-250 ease-out active:scale-90 hover:opacity-90'
            }
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
