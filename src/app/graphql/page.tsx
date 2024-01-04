import { All_LinkDocument, All_LinkQuery } from '@/graphql/__generated__/client'
import { getClient } from '@/graphql/client'

const GraphqlPage = async ()=>{

  const { data: queryData } = await getClient().query<All_LinkQuery>({
    query: All_LinkDocument
  })
  const feeds = [...queryData.feed]

  return (
    <>
      {feeds.map((feed) => {
        return feed && (
          <div key={feed.id}>
            {feed.id}
          </div>
        )
      })}
    </>
  )
}

export default GraphqlPage