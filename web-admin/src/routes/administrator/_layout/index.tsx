import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/administrator/_layout/')({
  component: () => <div>Hello /administrator/!</div>
})