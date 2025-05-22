import { createFileRoute } from '@tanstack/react-router'
import SignInPage from '@/features/sign-in/page'

export const Route = createFileRoute('/(auth)/sign-in')({
  component: SignInPage
})
