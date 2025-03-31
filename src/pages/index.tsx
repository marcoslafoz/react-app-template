import React from 'react'
import { Layout } from '@/layouts/layout'
import { HelloWorld } from '@/components/hello-world'

export const Index: React.FC = () => {
  return (
    <Layout>
      <HelloWorld />
    </Layout>
  )
}
