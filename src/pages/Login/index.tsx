import Button from '@/components/Button'
import Container from '@/components/Container'
import Input from '@/components/Input'
import { useLogin } from './useLogin'
import { Controller } from 'react-hook-form'

const Login = () => {
  const { control, handleSubmit, onSubmit, error } = useLogin()
  return (
    <div className="h-lvh flex items-center justify-center flex-col">
      <Container>
        <div className="w-full max-w-[450px] rounded-3xl justify-center items-center flex p-12 bg-white border border-[#e9eaf3] shadow-default-shadow flex-col ml-auto mr-auto">
          <h3 className="text-2xl mb-5">
            Welcome to <b>BudgetWise</b>
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full"
          >
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input {...field} type="email" placeholder="Email" />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Input {...field} type="password" placeholder="Password" />
              )}
            />
            {error && (
              <div className="flex w-full mb-3 text-red-700">{error}</div>
            )}
            <Button type="submit">Login</Button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Login
