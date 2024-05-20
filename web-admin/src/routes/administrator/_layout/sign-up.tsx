import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/administrator/_layout/sign-up')({
  component: () => <div>Hello /administrator/_layout/sign-up!</div>
})