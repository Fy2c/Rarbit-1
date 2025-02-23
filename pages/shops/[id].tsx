// export default function Detail() {
//   return (
//     <div>
//       <h1>hi</h1>
//     </div>
//   )
// }

import { db } from '../../firebase'
import { getDoc, doc } from '@firebase/firestore'
import { GetServerSideProps } from 'next'
import ShopDetail from './ShopDetail'

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const docRef = doc(db, 'shops', ctx.query.id)
  const docSnap = await getDoc(docRef)
  const data = JSON.parse(JSON.stringify(docSnap.data()))
  console.log(data)
  if (!data) return { notFound: true }
  return { props: { data } }
}

const Post = ({ data }: any) => {
  if (!data) {
    return 'Loading...'
  }

  return (
    <div>
      <ShopDetail
        key={data.id}
        shopName={data.shopName}
        categories={data.categories}
        location={data.location}
        rewardPoints={data.rewardPoints}
        tokenAllocations={data.tokenAllocations}
        imageUrl={data.imageUrl}
        description={data.description}
      />
    </div>
  )
}

export default Post
